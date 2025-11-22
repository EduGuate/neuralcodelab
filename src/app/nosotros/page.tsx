'use client';

import React from 'react';
import Image from 'next/image';
import { Linkedin } from 'lucide-react';

const teamMembers = [
  {
    name: "Iran Lewis",
    role: "Fundador & CEO",
    image: "https://picsum.photos/400/400?random=1"
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-white flex flex-col ">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 items-center text-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sobre Nosotros
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Neural Code Lab es una organización dedicada a crear software libre que beneficie a las comunidades y personas interesadas en la tecnología. Trabajamos para hacer herramientas accesibles y útiles para todos.
          </p>
        </div>

        <div className="mt-12 relative h-[400px] w-full rounded-2xl overflow-hidden">
          <Image
            src="https://picsum.photos/1350/750?random=2"
            alt="Equipo Neural Code Lab"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-gray-100 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Nuestros Valores</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Innovación', desc: 'Buscamos constantemente nuevas formas de resolver problemas comunitarios.' },
            { title: 'Transparencia', desc: 'Código abierto y procesos claros para generar confianza.' },
            { title: 'Colaboración', desc: 'Creemos en el poder del trabajo en equipo y la comunidad.' }
          ].map((value, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-xl border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t border-gray-100 text-center flex flex-col items-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Nuestro Equipo</h2>
        <div className="flex flex-wrap justify-center gap-8 w-full">
          {teamMembers.map((member, index) => (
            <div key={index} className="group w-full max-w-sm text-center">
              <div className="relative h-80 mb-4 rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
              <p className="text-gray-600 mb-3">{member.role}</p>
              <a
                href="https://www.linkedin.com/in/devlewiso"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
              >
                <Linkedin size={16} />
                Conectar en LinkedIn
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}