"use client";

import React from 'react';
import Image from 'next/image';

// Datos del equipo
const teamMembers = [
  {
    name: "Lewis Ortiz",
    role: "Fundadora & CEO",
    image: "/img/profile.png" // Añadí la ruta de la imagen aquí
  }
];

const AboutContactTeam: React.FC = () => {
  return (
    <div>
      {/* Sección Sobre Nosotros */}
      <section id="about" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Sobre Nosotros</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image 
                src="/img/contactImg.png" 
                alt="Equipo de Neural Code Lab" 
                className="rounded-lg shadow-lg" 
                width={1350} // Añade el ancho de la imagen
                height={750} // Añade la altura de la imagen
              />
            </div>
            <div className="md:w-1/2 md:pl-10">
              <p className="text-gray-600 mb-4">
                Neural Code Lab es una organización dedicada a la creación de software gratuito que beneficia a comunidades y personas que desean aprender sobre tecnología y desarrollo de software.
              </p>
              <p className="text-gray-600 mb-4">
                Nuestro equipo está compuesto por apasionados de la tecnología que buscan crear herramientas accesibles y útiles para todos. Creemos en el poder del software para cambiar el mundo y trabajamos constantemente para ofrecer soluciones innovadoras.
              </p>
              <p className="text-gray-600">
                Nuestra misión es democratizar el acceso al conocimiento tecnológico y fomentar una comunidad global de desarrolladores comprometidos con el aprendizaje continuo y la innovación.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Nuestro Equipo */}
      <section id="team" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-center mb-8">Nuestro Equipo</h2>
          <div className="flex justify-center">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden max-w-xs mx-2">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover" 
                  width={400} // Añade el ancho de la imagen
                  height={256} // Añade la altura de la imagen
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-center">{member.name}</h3>
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutContactTeam;
