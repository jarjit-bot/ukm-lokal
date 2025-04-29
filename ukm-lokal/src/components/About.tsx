import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col md:flex-row items-center gap-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Gambar */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/assets/images/candil2.jpeg"
              alt="Tentang Kami"
              className="rounded-lg shadow-lg w-3/4 md:w-4/5 lg:w-2/3" // <--- dikontrol ukurannya di sini
            />
          </div>

          {/* Teks */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold text-green-700 mb-4">
              Tentang Kami
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Kami adalah UKM yang berdedikasi untuk menghadirkan kue-kue tradisional dengan rasa otentik,
              bahan-bahan alami, dan kualitas terbaik. Dengan cinta dan resep turun-temurun, kami ingin
              membawa nostalgia cita rasa masa lalu ke meja Anda.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
