'use client';

import { motion } from 'framer-motion';
import { Mail, Users, Globe, HeartHandshake } from 'lucide-react';
import Image from 'next/image';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sage-50 to-clay-100">
      {/* Hero Section with Cultural Patterns */}
      <div className="relative bg-gradient-to-r from-earth-700 via-clay-600 to-earth-800 text-cream-50 py-24 overflow-hidden">
        {/* Traditional Pattern Background */}
        <div className="absolute inset-0">
          <Image
            src="https://picsum.photos/1920/1080?random=50"
            alt="Cultural background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative max-w-6xl mx-auto px-4 text-center"
        >
          <div className="mb-8 flex justify-center">
            <div className="p-4 bg-cream-10/20 rounded-full">
              <Globe size={48} className="text-cream-100" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-traditional">
            <span className="bg-gradient-to-r from-sun-400 to-fire-500 bg-clip-text text-transparent">
              Tejiendo Código con las Comunidades
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-white">
  En NeuralCode, creamos herramientas digitales libres para preservar saberes ancestrales.
  ¿Tienes un proyecto comunitario? Hablemos.
</p>
        </motion.div>
      </div>

      {/* Community Connection Section */}
      <main className="max-w-6xl mx-auto px-4 py-20">
        <motion.div 
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Cultural Illustration */}
          <div className="relative h-96 rounded-3xl overflow-hidden">
            <Image
              src="https://picsum.photos/800/600?random=55"
              alt="Cultural illustration"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-earth-800/80 to-transparent flex items-end p-8">
              <blockquote className="text-cream-100 italic text-lg">
                &ldquo;La tecnología debe servir para proteger nuestra madre tierra y nuestras tradiciones&rdquo;
              </blockquote>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-earth-900">
                <span className="inline-block mr-4"><HeartHandshake size={32} /></span>
                Colaboración Comunitaria
              </h2>
              <p className="text-earth-700">
                Ofrecemos:
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Desarrollo de software libre para proyectos indígenas</li>
                  <li>Capacitación tecnológica en lenguas originarias</li>
                  <li>Plataformas para documentación cultural</li>
                </ul>
              </p>
            </div>

            <div className="bg-cream-10 p-8 rounded-2xl shadow-community">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-4 bg-gradient-to-r from-earth-700 to-clay-600 text-cream-100 px-8 py-3 rounded-full">
                  <Users size={24} />
                  <span className="font-semibold">Contacto Comunitario</span>
                </div>
              </div>

              <div className="space-y-6">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href={`mailto:devlewiso@gmail.com?subject=${encodeURIComponent('Proyecto Comunitario')}`}
                  className="flex items-center justify-center gap-3 bg-gradient-to-r from-sun-400 to-fire-500 text-earth-900 px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all"
                >
                  <Mail size={20} />
                  Enviar Mensaje Colectivo
                </motion.a>

                <div className="text-center text-earth-700">
                  <p className="mb-4">O escríbenos en tu lengua:</p>
                  <div className="flex justify-center gap-4">
                    <button className="px-4 py-2 bg-[#3498db] text-white rounded-lg hover:bg-[#2980b9] transition-colors">
                      <span className="text-xl">🌾</span> Kaqchikel
                    </button>
                    <button className="px-4 py-2 bg-[#2ecc71] text-white rounded-lg hover:bg-[#27ae60] transition-colors">
                      <span className="text-xl">🌳</span> K'iche' (Quiché)
                    </button>
                    <button className="px-4 py-2 bg-[#9b59b6] text-white rounded-lg hover:bg-[#8e44ad] transition-colors">
                      <span className="text-xl">🌎</span> English
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Community Showcase */}
        <div className="mt-20 p-8 bg-gradient-to-b from-[#faf5e4] to-[#f0e9d2] rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-[#2c3e50]">Proyectos en Comunidad</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {['Mapa Cultural Interactivo', 'Diccionario Digital Kaqchikel', 'Sistema de Alertas Climáticas'].map((project, index) => (
              <div key={project} className="p-6 bg-[#ffffff] rounded-xl border border-[#e0d7c1] shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="relative h-48 mb-4">
                  <Image
                    src={`https://picsum.photos/600/400?random=${index + 10}`}
                    alt={project}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
                <h4 className="font-semibold mb-2 text-[#34495e]">{project}</h4>
                <p className="text-[#7f8c8d] text-sm">Colaboración con comunidad </p>
                <div className="mt-4 h-2 bg-gradient-to-r from-[#f1c40f] to-[#e67e22] rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}