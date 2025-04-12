'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
          },
        }}
        className="max-w-6xl mx-auto text-center"
      >
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Left Side: Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold text-gray-100 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-yellow-500 transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-yellow-500 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-yellow-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Right Side: Social Media */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/Parth4042/"
              target="_blank"
              className="text-gray-400 hover:text-yellow-500 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="www.linkedin.com/in/parth-deshmukh-01727b346/"
              target="_blank"
              className="text-gray-400 hover:text-yellow-500 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://twitter.com/parth"
              target="_blank"
              className="text-gray-400 hover:text-yellow-500 transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter size={30} />
            </a>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="text-sm text-gray-500">
          <p>&copy; 2025 Parth Deshmukh. All Rights Reserved.</p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
