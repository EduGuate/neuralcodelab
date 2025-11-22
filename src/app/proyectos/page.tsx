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
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nuestros Proyectos
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            En Neural Code Lab, trabajamos en proyectos revolucionarios que transforman la tecnología en soluciones accesibles y efectivas para todos.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 pb-24">
        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          <div className="relative flex-grow max-w-md">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-200 rounded-lg bg-gray-50 focus:ring-gray-900 focus:border-gray-900 transition-colors"
              placeholder="Buscar proyectos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categorias.map((categoria) => (
              <button
                key={categoria.id}
                onClick={() => setActiveCategory(categoria.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === categoria.id
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
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
                className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-48 bg-gray-100">
                  <Image
                    src={project.imageUrl || "https://picsum.photos/400/300"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col h-full">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h2>
                  <p className="text-gray-600 text-sm mb-6 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex gap-3 mt-auto">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 flex-grow bg-gray-900 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Ver Proyecto
                    </a>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        <Github size={18} />
                      </a>
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
