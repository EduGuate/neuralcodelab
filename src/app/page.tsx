'use client';
import { useState } from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    { id: 1, title: 'Proyecto 1', description: 'Descripción breve del Proyecto 1', image: '/images/proyecto1.jpg' },
    { id: 2, title: 'Proyecto 2', description: 'Descripción breve del Proyecto 2', image: '/images/proyecto2.jpg' },
    { id: 3, title: 'Proyecto 3', description: 'Descripción breve del Proyecto 3', image: '/images/proyecto3.jpg' },
    { id: 4, title: 'Proyecto 4', description: 'Descripción breve del Proyecto 4', image: '/images/proyecto4.jpg' },
    { id: 5, title: 'Proyecto 5', description: 'Descripción breve del Proyecto 5', image: '/images/proyecto5.jpg' },
    { id: 6, title: 'Proyecto 6', description: 'Descripción breve del Proyecto 6', image: '/images/proyecto6.jpg' },
    { id: 7, title: 'Proyecto 7', description: 'Descripción breve del Proyecto 7', image: '/images/proyecto7.jpg' },
    { id: 8, title: 'Proyecto 8', description: 'Descripción breve del Proyecto 8', image: '/images/proyecto8.jpg' }
  ];

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleClosePopup = () => {
    setSelectedProject(null);
  };

  return (
    <div className="flex flex-col min-h-screen px-8 text-center bg-background text-foreground">
      <header className="bg-primary text-primary-foreground py-8">
        <h1 className="text-4xl font-bold">Bienvenido a Neural Code Lab</h1>
        <p className="text-xl mt-4">Creando software gratuito para beneficiar a comunidades y personas que quieren aprender</p>
        <Image
          src="/img/logo.png"
          alt="Logo de Neural Code Lab"
          className="mx-auto mt-4 rounded-full"
          width={250}
          height={250}
        />
      </header>

      <main className="flex-1 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Sobre Nosotros</h2>
          <p className="mt-4 max-w-3xl mx-auto">
            En Neural Code Lab, nos dedicamos a desarrollar software gratuito para ayudar a comunidades y personas de escasos recursos a aprender y crecer. Nuestro objetivo es proporcionar herramientas y recursos accesibles que impulsen el conocimiento y la educación en tecnología.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Proyectos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <Image src={project.image} alt={project.title} width={300} height={200} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2 truncate">{project.title}</h3>
                  <p className="text-gray-600 mb-4 h-12 overflow-hidden">{project.description}</p>
                  <button
                    onClick={() => handleProjectClick(project)}
                    className="bg-primary text-primary-foreground px-4 py-2 rounded-full hover:bg-primary-dark transition-colors duration-300"
                  >
                    Ver Más
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Nuestra Misión</h2>
          <div className="flex flex-wrap items-center justify-center">
            <div className="w-full md:w-1/2 p-4">
              <p className="text-lg">
                Nuestra misión es democratizar el acceso al conocimiento tecnológico, proporcionando recursos educativos gratuitos y de alta calidad a comunidades con recursos limitados.
              </p>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <div className="relative overflow-hidden rounded-lg group">
                <Image
                  src="/img/mision.webp"
                  alt="Nuestra Misión"
                  width={600}
                  height={400}
                  className="w-full transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-xl font-bold">Impactando Vidas</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Nuestro Impacto</h2>
          <div className="flex flex-wrap items-center justify-center">
            <div className="w-full md:w-1/2 p-4">
              <div className="relative overflow-hidden rounded-lg group">
                <Image
                  src="/img/impacto.webp"
                  alt="Nuestro Impacto"
                  width={250}
                  height={250}
                  className="w-full transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-xl font-bold">Transformando Comunidades</span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <p className="text-lg">
                Hemos impactado positivamente en la vida de miles de personas, proporcionando herramientas y conocimientos que han permitido el desarrollo de habilidades tecnológicas y la creación de oportunidades laborales.
              </p>
            </div>
          </div>
        </section>
      </main>

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md mx-4">
            <h3 className="text-2xl font-semibold mb-4">{selectedProject.title}</h3>
            <p className="text-gray-700 mb-4">{selectedProject.description}</p>
            <button
              onClick={handleClosePopup}
              className="bg-primary text-primary-foreground px-4 py-2 rounded-full hover:bg-primary-dark transition-colors duration-300"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
