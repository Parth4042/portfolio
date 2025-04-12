'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import {
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiPython,
  SiMongodb,
  SiReact,
  SiGit,
  SiDocker,
  SiOpenai,
  SiTensorflow,
  SiMysql,
} from 'react-icons/si';
import { useRef } from 'react';

const techIcons = [
  { icon: <SiJavascript size={48} />, name: 'JavaScript', x: '10%', y: '20%' },
  { icon: <SiTailwindcss size={48} />, name: 'TailwindCSS', x: '40%', y: '10%' },
  { icon: <SiNextdotjs size={48} />, name: 'Next.js', x: '80%', y: '20%' },
  { icon: <SiPython size={48} />, name: 'Python', x: '12%', y: '60%' },
  { icon: <SiDocker size={48} />, name: 'Docker', x: '55%', y: '50%' },
  { icon: <SiMongodb size={48} />, name: 'MongoDB', x: '70%', y: '65%' },
  { icon: <SiReact size={48} />, name: 'React', x: '85%', y: '50%' },
  { icon: <SiGit size={48} />, name: 'Git', x: '30%', y: '80%' },
  { icon: <SiOpenai size={48} />, name: 'AI', x: '25%', y: '40%' },
  { icon: <SiTensorflow size={48} />, name: 'ML', x: '55%', y: '30%' },
  { icon: <SiMysql size={48} />, name: 'SQL', x: '35%', y: '64%' },
];

const floating = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

const FloatingTechIcons = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  });

  const sectionOpacity = useTransform(scrollYProgress, [0, 0.2, 0.6], [0, 0.5, 1]);
  const sectionY = useTransform(scrollYProgress, [0, 0.6], [50, 0]);

  return (
    <section ref={ref} className="relative h-[100vh] w-full overflow-hidden text-white px-4 mb-7">
      <motion.h2
        style={{ opacity: sectionOpacity, y: sectionY }}
        transition={{ type: 'spring', stiffness: 60, damping: 20 }}
        className="text-5xl font-extrabold text-center pt-16 mb-10 z-10 relative"
      >
        My Tech Stack in Motion
      </motion.h2>

      <div className="relative w-full h-full">
        {techIcons.map((tech, i) => (
          <motion.div
            key={tech.name}
            className="absolute flex flex-col items-center"
            style={{ left: tech.x, top: tech.y }}
            variants={floating}
            animate="animate"
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl hover:scale-110 transition-transform duration-300 text-gray-200 drop-shadow-lg">
              {tech.icon}
            </div>
            <p className="mt-2 text-sm text-gray-300">{tech.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FloatingTechIcons;
