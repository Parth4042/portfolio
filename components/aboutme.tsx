'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import dynamic from 'next/dynamic';
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
import animationData from './idea.json'; // 👈 Replace with your Lottie JSON file

const AboutMe = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  });

  const sectionOpacity = useTransform(scrollYProgress, [0, 0.2, 0.6], [0, 0.5, 1]);
  const sectionY = useTransform(scrollYProgress, [0, 0.6], [50, 0]);

  return (
    <motion.section
    ref={ref} // Use the ref here
    id="about"
    className="relative py-36 px-24 md:px-24 text-gray-300"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }} // Fades in only once when visible in view
    >
      <motion.div
        style={{ opacity: sectionOpacity, y: sectionY }}
        transition={{ type: 'spring', stiffness: 60, damping: 20 }}
        className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12"
      >
        {/* Left Column: Lottie Animation */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-[300px] md:w-[350px] lg:w-[400px]">
            <Lottie
              animationData={animationData}
              loop
              autoplay
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-5xl font-extrabold mb-6 mt-25">ABOUT ME</h2>

          <p className="text-lg text-gray-400 leading-relaxed mb-8">
            I am <span className="font-semibold text-yellow">Parth</span>, a full-stack developer and creative technologist based in India.
            With a strong foundation in web technologies and a passion for innovation, I build interactive experiences that bridge design and functionality.
            From responsive UIs to scalable backends, I love bringing ideas to life with code.
          </p>

          {/* <h3 className="text-2xl font-semibold text-gray-800 mb-3">What Drives Me</h3>
          <p className="text-gray-700 text-base leading-relaxed mb-10">
            My motivation lies in solving real-world problems through technology. I thrive at the intersection of logic and creativity,
            where I can design elegant solutions with a user-first mindset. Whether it’s building an AI-assisted tool for healthcare
            or optimizing frontend performance, I’m always pushing to craft work that’s impactful and meaningful.
          </p> */}

          {/* <h3 className="text-2xl font-semibold text-gray-800 mb-4">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-6">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="bg-yellow-200 text-yellow-900 px-4 py-2 rounded-full text-sm font-medium shadow hover:shadow-md transition-all"
              >
                {skill}
              </motion.span>
            ))}
          </div> */}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default AboutMe;
