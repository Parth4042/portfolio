'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import pdImg from './pd.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-24 py-20 bg-gradient-to-br from-[#fffaf5] to-[#f6f9fc] overflow-hidden">


      {/* Text Section */}
      <div className="z-10 w-full md:w-1/2 mt-12 md:mt-0">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight tracking-tight"
        >
          Hi, Im <span className="text-yellow-500">Parth Deshmukh</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-6 text-gray-700 text-xl max-w-lg"
        >
          Full Stack Developer • UI/UX Engineer • Tech Enthusiast
        </motion.p>
      </div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="z-10 w-full md:w-1/2 flex justify-center"
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full shadow-xl border-4 border-yellow-400 bg-white overflow-hidden">
          <Image
            src={pdImg}
            alt="Parth's Photo"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
