'use client';

import { Mail, Globe, HeartHandshake, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-3xl text-center mx-auto">
          <div className="inline-flex items-center justify-center p-3 bg-gray-100 rounded-full mb-6">
            <Globe size={24} className="text-gray-900" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Tejiendo Código con las Comunidades
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            En NeuralCode, creamos herramientas digitales libres para preservar saberes ancestrales.
            ¿Tienes un proyecto comunitario? Hablemos.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <HeartHandshake className="text-gray-900" />
                Colaboración Comunitaria
              </h2>
              <p className="text-gray-600 mb-6">
                Estamos comprometidos con el desarrollo tecnológico accesible. Ofrecemos:
              </p>
              <ul className="space-y-4">
                {[
                  'Desarrollo de software libre para proyectos indígenas',
                  'Capacitación tecnológica en lenguas originarias',
                  'Plataformas para documentación cultural'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-2.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-4">Idiomas disponibles</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-600">
                  Español
                </span>
                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-600">
                  Kaqchikel
                </span>
                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-600">
                  K'iche'
                </span>
                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-600">
                  English
                </span>
              </div>
            </div>
          </div>

          {/* Action Card */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Inicia una conversación</h3>
            <p className="text-gray-600 mb-8">
              Cuéntanos sobre tu proyecto o idea. Estamos aquí para escuchar y colaborar.
            </p>

            <a
              href={`mailto:devlewiso@gmail.com?subject=${encodeURIComponent('Proyecto Comunitario')}`}
              className="flex items-center justify-center gap-2 w-full bg-gray-900 text-white px-6 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors"
            >
              <Mail size={20} />
              Enviar Correo
            </a>

            <p className="text-center text-sm text-gray-500 mt-4">
              Respondemos usualmente en 24-48 horas
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}