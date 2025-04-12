'use client';
import { useState } from 'react';

const achievements = [
  {
    label: 'Awards',
    title: 'SIH 2024 FINALIST',
    subtitle: 'Smart India Hackathon',
    description:
      'Finalist out of 500+ teams across India for AI-powered breast cancer detection system.',
    bg: '/achievements/bg.jpg', // Correct path, assuming images are in /public/achievements/
  },
  {
    label: 'Internships',
    title: 'REAL-WORLD EXPERIENCE',
    subtitle: 'Industry-Focused Development',
    description:
      'Intern at Sumago InfoTech, Techonsy Software & Eduskills with expertise in full stack & AI/ML.',
    bg: '/achievements/internship.jpeg', // Correct path
  },
  {
    label: 'Certifications',
    title: 'SKILL CERTIFIED',
    subtitle: 'Knowledge Backed by Proof',
    description:
      'C++ from Technorbit • Full Stack Developer • German A1 • AI-ML from Eduskills',
    bg: '/achievements/certifications.jpg', // Correct path
  },
];

export default function AchievementsHero() {
  const [activeTab, setActiveTab] = useState(0);
  const active = achievements[activeTab];

  return (
    <section className="relative h-screen w-full text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center transition-all duration-700"
        style={{
          backgroundImage: `url(${active.bg})`,  // Uses the image from the /public folder
          backgroundSize: 'cover', // Ensures image covers the entire area
          backgroundPosition: 'center', // Centers the image in the section
        }}
      >
        {/* Dark overlay that doesn't block clicks */}
        <div className="absolute inset-0 bg-black/50 pointer-events-none" />
      </div>

      {/* Tabs */}
      <nav className="absolute top-10 left-1/2 transform -translate-x-1/2 flex space-x-10 text-lg font-light z-20">
        {achievements.map((tab, idx) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(idx)}
            className={`pb-1 transition-all uppercase tracking-wider ${
              activeTab === idx
                ? 'border-b-2 border-white'
                : 'hover:border-b hover:border-gray-400'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-2">
          {active.title}
        </h1>
        <h2 className="text-2xl md:text-4xl font-light mb-4">
          {active.subtitle}
        </h2>
        <p className="max-w-2xl text-gray-300 text-lg">{active.description}</p>

        <button className="mt-10 border border-white px-8 py-3 text-lg font-light hover:bg-white hover:text-black transition-all duration-300 group">
          Discover more
          <span className="ml-2 inline-block transform group-hover:translate-x-1 transition-transform duration-300">
            →
          </span>
        </button>
      </div>
    </section>
  );
}
