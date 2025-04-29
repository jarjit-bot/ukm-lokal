import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-green-700 mb-6">Kontak Kami</h2>
          <p className="text-gray-600 mb-8">
            Hubungi kami untuk pemesanan atau pertanyaan lebih lanjut:
          </p>

          {/* Tombol Sosial Media */}
          <div className="flex justify-center items-center space-x-6 mb-8">
            {/* WhatsApp */}
            <motion.a
              whileHover={{ scale: 1.2, boxShadow: "0px 0px 15px #22c55e" }}
              whileTap={{ scale: 0.9 }}
              href="https://wa.me/6285283270368"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-14 h-14 bg-green-600 hover:bg-green-700 text-white rounded-full transition"
            >
              <FaWhatsapp size={28} />
            </motion.a>

            {/* Instagram */}
            <motion.a
              whileHover={{ scale: 1.2, boxShadow: "0px 0px 15px #ec4899" }}
              whileTap={{ scale: 0.9 }}
              href="https://instagram.com/vishada._"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-14 h-14 bg-pink-500 hover:bg-pink-600 text-white rounded-full transition"
            >
              <FaInstagram size={28} />
            </motion.a>
          </div>

          {/* Alamat */}
          <p className="text-gray-600 mb-6">
            Alamat: Jl. Raya Cileungsi - Jonggol
          </p>

          {/* Google Maps */}
          <div className="flex justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22551.654139806007!2d106.94506071186632!3d-6.408491788734722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6995d20156e367%3A0x5b7cd089c3c57813!2sSMK%20Bina%20Mandiri%20Multimedia%20Cileungsi!5e1!3m2!1sid!2sid!4v1745895742103!5m2!1sid!2sid" // <- ganti dengan link Google Maps kamu
              width="300"
              height="200"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
