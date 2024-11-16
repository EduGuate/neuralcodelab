"use client";


import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const Proyectos: React.FC = () => {
  return (
    <>
      <Head>
        <title>Proyectos - Neural Code Lab</title>
        <meta name="description" content="Página de proyectos de Neural Code Lab" />
      </Head>
      
      {/* Hero Section con gradiente animado */}
      <div className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-[url('/img/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="relative px-6 py-24 mx-auto max-w-7xl">
          <h1 className="text-5xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Nuestros Proyectos Innovadores
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-gray-300">
            En Neural Code Lab, estamos trabajando en proyectos revolucionarios que transforman la tecnología en soluciones accesibles y efectivas para todos.
          </p>
        </div>
      </div>

      <main className="p-8 max-w-7xl mx-auto -mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Proyecto 1 */}
          <div className="transform hover:scale-105 transition-all duration-300">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center relative">
                <Image 
                  src="/img/elearning.jpg"
                  alt="Plataforma de Aprendizaje"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3 text-gray-800">Plataforma de Aprendizaje en Línea</h2>
                <p className="text-gray-600">
                  Una plataforma revolucionaria que democratiza el acceso al conocimiento tecnológico con cursos gratuitos y de alta calidad.
                </p>
              </div>
            </div>
          </div>

          {/* Proyecto 2 */}
          <div className="transform hover:scale-105 transition-all duration-300">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl">
              <div className="h-48 bg-gradient-to-r from-green-500 to-teal-600 flex items-center justify-center relative">
                <Image 
                  src="/img/consultorias.jpg"
                  alt="Colaboración en Tiempo Real"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3 text-gray-800">Colaboración en Tiempo Real</h2>
                <p className="text-gray-600">
                  Herramientas de última generación para potenciar la colaboración y productividad en equipos de desarrollo.
                </p>
              </div>
            </div>
          </div>

          {/* Proyecto 3 */}
          <div className="transform hover:scale-105 transition-all duration-300">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl">
              <div className="h-48 bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center relative">
                <Image 
                  src="/img/desarrollo.jpg"
                  alt="Gestión de Proyectos"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3 text-gray-800">Gestión de Proyectos</h2>
                <p className="text-gray-600">
                  Sistema integral para la gestión eficiente de proyectos, tareas y recursos en equipos dinámicos.
                </p>
              </div>
            </div>
          </div>

          {/* Proyecto 4 */}
          <div className="transform hover:scale-105 transition-all duration-300">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl">
              <div className="h-48 bg-gradient-to-r from-pink-500 to-rose-600 flex items-center justify-center relative">
                <Image 
                  src="/img/comunidad.jpg"
                  alt="Soporte Comunitario"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3 text-gray-800">Soporte Comunitario</h2>
                <p className="text-gray-600">
                  Plataforma inteligente que conecta a usuarios con expertos para resolver dudas y problemas técnicos.
                </p>
              </div>
            </div>
          </div>

          {/* Proyecto 5 */}
          <div className="transform hover:scale-105 transition-all duration-300">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl">
              <div className="h-48 bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center relative">
                <Image 
                  src="/img/mental-health.jpg"
                  alt="Salud Mental Digital"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3 text-gray-800">Salud Mental Digital</h2>
                <p className="text-gray-600">
                  Aplicación innovadora que proporciona herramientas y recursos para el bienestar mental y emocional.
                </p>
              </div>
            </div>
          </div>
        </div>

          {/* Proyecto 5 */}
          <div className="transform hover:scale-105 transition-all duration-300">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl">
              <div className="h-48 bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center relative">
                <Image 
                  src="/img/mental-health.jpg"
                  alt="Salud Mental Digital"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3 text-gray-800">Salud Mental Digital</h2>
                <p className="text-gray-600">
                  Aplicación innovadora que proporciona herramientas y recursos para el bienestar mental y emocional.
                </p>
              </div>
            </div>
          </div>
        




        {/* Sección Final con CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-purple-100 to-blue-100">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">¿Interesado en nuestros proyectos?</h2>
            <p className="text-gray-600 mb-6">Únete a nuestra comunidad y sé parte del futuro de la tecnología</p>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-3 px-8 rounded-full hover:opacity-90 transition-opacity">
              Contáctanos
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Proyectos;