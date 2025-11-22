"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Github, Search } from 'lucide-react';
import { proyectos, categorias } from '@/content/proyectos';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('todos');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = proyectos
    .filter(project => activeCategory === 'todos' || project.category === activeCategory)
    .filter(project => {
      if (!searchTerm.trim()) return true;
      const searchLower = searchTerm.toLowerCase();
      return (
        project.title.toLowerCase().includes(searchLower) ||
        project.description.toLowerCase().includes(searchLower) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchLower))
      );
    });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-8 tracking-tight">
              Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Proyectos</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              En Neural Code Lab, trabajamos en proyectos revolucionarios que transforman la tecnología en soluciones accesibles y efectivas para todos.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 pb-24">
        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-8 mb-16 items-center justify-between">
          <div className="relative w-full md:w-96 group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <Search className="w-5 h-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
            </div>
            <input
              type="text"
              className="block w-full p-4 pl-12 text-sm text-gray-900 border border-gray-200 rounded-2xl bg-white shadow-sm hover:shadow-md focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:shadow-xl transition-all duration-300"
              placeholder="Buscar proyectos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-3 justify-center md:justify-end">
            {categorias.map((categoria) => (
              <button
                key={categoria.id}
                onClick={() => setActiveCategory(categoria.id)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 transform hover:-translate-y-0.5 ${activeCategory === categoria.id
                  ? 'bg-gray-900 text-white shadow-lg shadow-gray-900/20 scale-105'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:shadow-md hover:text-gray-900'
                  }`}
              >
                {categoria.nombre}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-24 bg-gray-50 rounded-2xl border border-gray-100">
            <h3 className="text-xl font-medium text-gray-900">No se encontraron proyectos</h3>
            <p className="mt-2 text-gray-500">Intenta con otra búsqueda o categoría</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group flex flex-col bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-48 bg-gray-100 shrink-0">
                  <Image
                    src={project.imageUrl || "https://picsum.photos/400/300"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2.5 py-1 rounded-full text-xs font-medium bg-gray-50 text-gray-600 border border-gray-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h2>

                  <p className="text-gray-600 text-sm mb-6 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex gap-3 mt-auto pt-4 border-t border-gray-50">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 flex-grow bg-gray-900 text-white text-sm font-medium py-2.5 px-4 rounded-xl hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                      >
                        <ExternalLink size={16} />
                        Ver Proyecto
                      </a>
                    ) : null}

                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-12 bg-gray-50 text-gray-700 border border-gray-200 rounded-xl hover:bg-white hover:border-gray-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                        title="Ver código en GitHub"
                      >
                        <Github size={20} />
                      </a>
                    ) : null}

                    {!project.liveUrl && !project.githubUrl && (
                      <span className="w-full text-center text-gray-400 italic text-sm py-2 bg-gray-50 rounded-xl border border-gray-100">
                        Próximamente
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
