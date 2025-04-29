import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-[80vh] md:min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: "url('/assets/images/khas.jpg')" }}
    >
        <motion.div
          className="bg-white p-4 md:p-6 rounded-4xl shadow-2xl text-center max-w-xl w-full aspect-w-1 aspect-h-1"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
        {/* Konten lainnya */}
        <h1 className="text-3xl md:text-5xl font-bold text-green-700 mb-4 md:mb-6">
          Selamat Datang
        </h1>
        <p className="text-gray-700 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
          Cita Rasa Tradisi, Langsung ke Rumah Anda
        </p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#products"
          className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 md:px-8 py-3 rounded-full text-base md:text-lg transition"
        >
          Lihat Produk
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
