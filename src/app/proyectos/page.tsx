"use client";

import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { ExternalLink, Github, Search } from 'lucide-react';
import { proyectos, categorias } from '@/content/proyectos';

interface Project {
  title: string;
  description: string;
  liveUrl: string;
  githubUrl: string;
  imageUrl: string;
  tags: string[];
  category: string;
}

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('todos');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter projects based on both category and search term
  const filteredProjects = proyectos
    .filter(project => activeCategory === 'todos' || project.category === activeCategory)
    .filter(project => {
      if (!searchTerm.trim()) return true;
      
      const searchLower = searchTerm.toLowerCase();
      
      // Search in all the specified fields
      return (
        project.title.toLowerCase().includes(searchLower) ||
        project.description.toLowerCase().includes(searchLower) ||
        project.liveUrl.toLowerCase().includes(searchLower) ||
        project.githubUrl.toLowerCase().includes(searchLower) ||
        project.imageUrl.toLowerCase().includes(searchLower) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchLower)) ||
        project.category.toLowerCase().includes(searchLower)
      );
    });

  return (
    <>
      <Head>
        <title>Proyectos - Neural Code Lab</title>
        <meta name="description" content="Proyectos de Neural Code Lab enfocados en IA y desarrollo de código" />
      </Head>
      
      {/* Hero Section with animated gradient */}
      <div className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-[url('/img/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="relative px-6 py-24 mx-auto max-w-7xl">
          <h1 className="text-5xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Nuestros Proyectos Innovadores
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-gray-300">
            En Neural Code Lab, trabajamos en proyectos revolucionarios que transforman la tecnología en soluciones accesibles y efectivas para todos.
          </p>
        </div>
      </div>

      <main className="p-8 max-w-7xl mx-auto -mt-20">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-purple-500 focus:border-purple-500"
              placeholder="Buscar proyectos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        {/* Categorías */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categorias.map((categoria) => (
            <button
              key={categoria.id}
              onClick={() => setActiveCategory(categoria.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === categoria.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {categoria.nombre}
            </button>
          ))}
        </div>

        {filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-2xl font-medium text-gray-700">No se encontraron proyectos</h3>
            <p className="mt-2 text-gray-500">Intenta con otra búsqueda o categoría</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={index} className="transform hover:scale-105 transition-all duration-300">
                <div className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl h-full flex flex-col">
                  <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center relative">
                    <Image 
                      src={project.imageUrl} 
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h2 className="text-2xl font-bold mb-3 text-gray-800">{project.title}</h2>
                    <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-2 px-4 rounded-full hover:opacity-90 transition-opacity flex-grow"
                      >
                        <ExternalLink size={18} />
                        <span>Ver Proyecto</span>
                      </a>
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 bg-gray-800 text-white font-bold py-2 px-4 rounded-full hover:opacity-90 transition-opacity"
                        >
                          <Github size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Final Section with CTA */}
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

export default Projects;