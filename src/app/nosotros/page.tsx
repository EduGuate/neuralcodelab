'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Datos del equipo
const teamMembers = [
  {
    name: "Lewis Ortiz",
    role: "Fundador & CEO",
    image: "https://picsum.photos/400/400?random=1"
  }
];

const AboutContactTeam: React.FC = () => {
  return (
    <div>
      {/* Sección Sobre Nosotros */}
      <section id="about" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-8 text-gray-800"
          >
            Sobre Nosotros
          </motion.h2>
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2 mb-8 md:mb-0"
            >
              <Image 
                src="https://picsum.photos/1350/750?random=2" 
                alt="Equipo Neural Code Lab" 
                className="rounded-lg shadow-lg" 
                width={1350} 
                height={750} 
              />
            </motion.div>
            <div className="md:w-1/2 md:pl-10">
              <p className="text-gray-700 mb-4">
                Neural Code Lab es una organización dedicada a crear software libre que beneficie a las comunidades y personas interesadas en la tecnología y el desarrollo de software.
              </p>
              <p className="text-gray-700 mb-4">
                Nuestro equipo está compuesto por entusiastas de la tecnología que trabajan para hacer herramientas accesibles y útiles para todos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Valores */}
      <section id="values" className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Nuestros Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Innovación', 'Transparencia', 'Colaboración'].map((value, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-6 bg-gray-200 rounded-lg shadow-md"
              >
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">{value}</h3>
                <p className="text-gray-600">Trabajamos bajo este principio para generar impacto en la comunidad.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección Nuestro Equipo */}
      <section id="team" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Nuestro Equipo</h2>
          <div className="flex justify-center">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden max-w-xs mx-2"
              >
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover" 
                  width={400} 
                  height={256} 
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-center text-gray-800">{member.name}</h3>
                  <p className="text-gray-600 text-center">{member.role}</p>
                  <a 
                    href="https://www.linkedin.com/in/devlewiso" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                  >
                    LinkedIn
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutContactTeam;