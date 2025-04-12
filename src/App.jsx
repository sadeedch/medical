import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const doctors = [
  { name: "Dr Joseph Chua", specialty: "General Practitioner", image: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Dr David Wang", specialty: "Pediatrician", image: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Dr Eunice Woo", specialty: "Skin Specialist", image: "https://randomuser.me/api/portraits/women/44.jpg" },
];

const services = [
  { title: "General Checkups", description: "Routine health assessments to keep you in top shape." },
  { title: "Vaccinations", description: "Up-to-date immunizations for children and adults." },
  { title: "Children’s Health", description: "Comprehensive care for infants to teens." },
  { title: "Women’s Health", description: "Supportive services including checkups, screenings, and more." },
  { title: "Men’s Health", description: "Proactive health screenings and medical support." },
  { title: "Mental Health Support", description: "Confidential support for mental well-being." },
  { title: "Skin Checks & Treatments", description: "Expert care for skin conditions and concerns." },
  { title: "Chronic Disease Management", description: "Ongoing care plans for diabetes, asthma, and more." },
  { title: "Travel Medicine", description: "Health advice and vaccinations before you travel." },
];

const bgImages = [
  "public/images/image1.jpg",
  "public/images/image2.jpg",
  "public/images/image3.jpg",
];

export default function DoctorClinicHome() {
  const [selectedService, setSelectedService] = useState(null);
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-emerald-400 to-cyan-400scroll-smooth">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50 px-10 py-6 flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-blue-900 tracking-wide"> Coopers Plains Doctors</h1>
        <nav className="space-x-4">
          <a href="#hero" className="text-blue-700 hover:underline">Home</a>
          <a href="#about" className="text-blue-700 hover:underline">About</a>
          <a href="#services" className="text-blue-700 hover:underline">Services</a>
          <a href="#doctors" className="text-blue-700 hover:underline">Doctors</a>
          <a href="#contact" className="text-blue-700 hover:underline">Contact</a>
        </nav>
      </header>

      {/* Hero Section with Rotating Background */}
      <section
  id="hero"
  className="h-[450px] relative text-center px-6 pt-20 overflow-hidden"
  style={{
    backgroundImage: `url(${bgImages[bgIndex]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'background-image 1s ease-in-out',
  }}
>
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="relative z-10 flex flex-col justify-center items-center h-full"
  >
    <div className="bg-black bg-opacity-40 p-8 rounded-xl">
      <h1 className="text-5xl font-bold text-white mb-4">
        Welcome to Coopers Plains Medical Clinic
      </h1>
      <p className="text-lg text-white max-w-2xl mx-auto">
        Providing compassionate and modern medical care for you and your family.
      </p>
    </div>
  </motion.div>
  <div className="absolute inset-0 bg-white bg-opacity-20 z-0" />
</section>


      {/* About Section */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center py-16 px-6 bg-blue-50"
      >
        <h2 className="text-4xl font-semibold mb-4 text-blue-900">Exceptional Care, Close to Home</h2>
        <p className="max-w-xl mx-auto text-gray-600">
          We provide modern, comprehensive medical services for individuals and families in your community.
        </p>
      </motion.section>

      <section id="services" className="py-16 px-6 max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-center text-blue-800 mb-8">Our Services</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedService(service)}
              className="bg-white p-6 rounded-xl shadow-md text-center cursor-pointer"
            >
              <div className="flex flex-col items-center gap-2">
                {service.title === "General Checkups" && <span className="text-3xl">🩺</span>}
{service.title === "Vaccinations" && <span className="text-3xl">💉</span>}
{service.title === "Children’s Health" && <span className="text-3xl">👶</span>}
{service.title === "Women’s Health" && <span className="text-3xl">👩‍⚕️</span>}
{service.title === "Men’s Health" && <span className="text-3xl">👨‍⚕️</span>}
{service.title === "Mental Health Support" && <span className="text-3xl">🧠</span>}
{service.title === "Skin Checks & Treatments" && <span className="text-3xl">🌞</span>}
{service.title === "Chronic Disease Management" && <span className="text-3xl">📋</span>}
{service.title === "Travel Medicine" && <span className="text-3xl">✈️</span>}
                <h4 className="text-lg font-semibold text-blue-700">{service.title}</h4>
              </div>
              <p className="text-sm text-gray-500 mt-2">Tap to learn more</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal for Service Info */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full text-center shadow-xl">
            <h4 className="text-xl font-bold text-blue-800 mb-2">{selectedService.title}</h4>
            <p className="text-gray-700 mb-4">{selectedService.description}</p>
            <button
              onClick={() => setSelectedService(null)}
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Doctors Section */}
      <section id="doctors" className="py-12 px-6 max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-center text-blue-800 mb-8">Meet Our Doctors</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {doctors.map((doc, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-md text-center"
            >
              <img
                src={doc.image}
                alt={doc.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h4 className="text-lg font-semibold text-blue-700">{doc.name}</h4>
              <p className="text-sm text-gray-500">{doc.specialty}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-blue-700 text-white text-center py-6">
        <p>139 Orange Grove Rd, Coopers Plains QLD 4108 | (07)32772167</p>
        <p className="text-sm mt-1">© 2025 Coopers Plains Medical Clinic</p>
      </footer>
    </div>
  );
}
