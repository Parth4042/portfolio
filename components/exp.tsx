'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Frontend Developer',
    company: 'Techonsy',
    period: 'Jan 2023 - Present',
    description:
      'Developed responsive and animated frontend experiences using Next.js, Tailwind CSS, and Framer Motion. Led performance optimization and modular codebase structure.',
  },
  {
    role: 'AI Developer Intern',
    company: 'Smart India Hackathon 2024',
    period: 'Dec 2023 - Mar 2024',
    description:
      'Built an AI-based breast cancer diagnosis tool using ViT, U-Net, and Flask. Integrated with a fully functional Next.js frontend and provided real-time metastasis predictions.',
  },
  {
    role: 'Open Source Contributor',
    company: 'TensorFlow Ecosystem',
    period: 'Mid 2022 - Late 2022',
    description:
      'Contributed to model optimization scripts and educational tools. Specialized in integrating lightweight ML solutions for medical datasets.',
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.2,
      duration: 0.8,
    },
  },
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="px-6 py-24 bg-[#0c0c0c] text-white">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          My Journey & Experience
        </motion.h2>

        <div className="space-y-20 relative">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className={`md:w-1/2 px-6 py-8 rounded-2xl shadow-xl bg-gradient-to-br from-gray-800 to-gray-900 ${
                idx % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
              } relative z-10`}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
            >
              <h3 className="text-xl md:text-2xl font-semibold text-yellow-400">
                {exp.role}
              </h3>
              <p className="text-sm uppercase text-gray-400 tracking-wide mt-1">
                {exp.company} — {exp.period}
              </p>
              <p className="mt-4 text-gray-300 leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}

          {/* Timeline vertical line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-gray-700 opacity-30 hidden md:block" />
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
