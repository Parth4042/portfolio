'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import pdImg from './pd.png';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const nameX = useTransform(scrollYProgress, [0, 0.3], ['0%', '-20%']);
  const nameFontSize = useTransform(scrollYProgress, [0, 0.3], ['5rem', '3.75rem']);
  const textAlign = useTransform(scrollYProgress, [0, 0.3], ['center', 'left']);

  // Quote fades out & moves up
  const quoteOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const quoteY = useTransform(scrollYProgress, [0, 0.2], ['0%', '-50%']);

  // Image fades in & moves up
  const imageY = useTransform(scrollYProgress, [0.2, 0.5], ['100%', '0%']);
  const imageOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  const imageScale = useTransform(scrollYProgress, [0.3, 0.6], [0.9, 1.05]);

  return (
    <section ref={ref} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center">
        <motion.div className="flex flex-col md:flex-row items-center justify-center gap-16 px-6 w-full max-w-6xl">
          
          {/* Left - Name */}
          <motion.div
            style={{ x: nameX, textAlign: textAlign }}
            className="flex flex-col items-center md:items-start"
          >
            <motion.h1
              style={{ fontSize: nameFontSize }}
              className="font-extrabold text-[#ddd] leading-tight tracking-tight"
            >
              PARTH DESHMUKH
            </motion.h1>
            <p className="mt-4 text-[#919191] text-lg max-w-md text-center md:text-left">
              Full Stack Developer • Creative Technologist • UI/UX Wizard
            </p>
          </motion.div>

          {/* Right Side - Quote fades out, Image fades in */}
          <div className="relative w-[340px] h-[340px] md:w-[400px] md:h-[400px] flex items-center justify-center">
            {/* Quote */}
            <motion.p
              style={{ opacity: quoteOpacity, y: quoteY }}
              className="absolute text-4xl md:text-6xl font-abold text-[#ddd] text-center px-4"
            >
              “Innovation is not just what I do — its who I am.”
            </motion.p>

            {/* SVG Blob & Image */}
            <motion.div
              style={{ y: imageY, opacity: imageOpacity, scale: imageScale }}
              transition={{ type: 'spring', stiffness: 60 }}
              className="absolute w-full h-full"
            >
              <svg
                viewBox="0 0 300 300"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute w-full h-full"
              >
                <path
                  fill="#FACC15"
                  d="M43.3,-59.2C55.1,-51.6,62.9,-36.8,67.8,-21.8C72.7,-6.8,74.7,8.3,70.5,22.3C66.4,36.3,56.2,49.2,43.2,58.1C30.2,67,15.1,71.9,-0.6,72.7C-16.3,73.6,-32.6,70.5,-45.5,61.1C-58.3,51.8,-67.8,36.3,-72.2,19.9C-76.6,3.5,-75.9,-13.8,-69.4,-29.2C-63,-44.6,-50.8,-58.1,-36.2,-64.5C-21.6,-71,-10.8,-70.3,2.3,-73.4C15.5,-76.5,31,-83.3,43.3,-59.2Z"
                  transform="translate(150 150) scale(1.5)"
                />
              </svg>

              <Image
                src={pdImg}
                alt="Parth's Profile"
                fill
                className="object-contain z-10 relative"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
