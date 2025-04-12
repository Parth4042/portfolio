'use client';

import { motion } from 'framer-motion';


// Importing Lottie JSON files
import breastCancerLottie from './lotties/breastcancer.json';
import hotelLottie from './lotties/hotel.json';

// Type for the project array
interface Project {
  title: string;
  description: string;
  lottieJson: object;
  tags: string[];
  github: string;
  live: string;
}

// Projects array with Lottie JSON paths
const projects: Project[] = [
  {
    title: 'Ai-Driven Breast Cancer Diagnosis & Metastasis Risk Prediction',
    description:
      'An AI-powered tool for doctors to detect cancerous cells and analyze ultrasound data using deep learning.',
    lottieJson: breastCancerLottie, // Using imported JSON here
    tags: ['React', 'Flask', 'PyTorch', 'Tailwind', 'Next.js', 'Python'],
    github: 'https://github.com/The-Neuronauts/Cellsight.git',
    live: 'https://ai-med.parth.io',
  },
  {
    title: 'Hotel Management System',
    description: 'Java-based project.',
    lottieJson: hotelLottie, // Using imported JSON here
    tags: ['Java'],
    github: 'https://github.com/Parth4042/Hotel_management_system.git',
    live: 'https://parth.techonsy.io',
  },
  // Add more projects here
];

// Importing react-lottie type definitions
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('react-lottie'), { ssr: false });

const Projects = () => {
  return (
    <section id="project" className="py-24 px-6 md:px-24 text-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.2 },
          },
        }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-5xl font-extrabold text-center mb-16 text-gray-100">MY PROJECTS</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
              }}
              className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-transform duration-500 transform hover:scale-105 hover:rotate-2 hover:translate-y-2"
            >
              <div className="relative h-64 w-full group p-6">
                {/* Rendering Lottie animation */}
                <Lottie
                  options={{
                    loop: true,
                    autoplay: true,
                    animationData: project.lottieJson, // Directly using the imported JSON here
                  }}
                  height={300}
                  width={300}
                />
              </div>
              <div className="p-6 bg-gray-800 mt-14">
                <h3 className="text-2xl font-semibold mb-2 text-gray-100">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      className="bg-yellow-600 text-yellow-100 px-3 py-1 text-sm rounded-full transition-transform duration-300 group-hover:scale-110"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 font-medium hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
