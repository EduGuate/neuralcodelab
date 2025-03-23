import React from 'react';
import { Code, Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Code size={32} className="text-purple-400" />
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Neural Code Lab
              </h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Impulsando el software libre en Guatemala para fortalecer comunidades y brindar oportunidades a quienes desean aprender y crecer en tecnología.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-purple-400">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-pink-300 transition-colors flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full" />
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-300 transition-colors flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full" />
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-300 transition-colors flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full" />
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-300 transition-colors flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full" />
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-purple-400">Síguenos</h3>
            <div className="flex gap-4">
              <a href="https://github.com/neuralcodelab" aria-label="GitHub" className="p-3 bg-gray-700 hover:bg-purple-500 rounded-lg transition-colors">
                <Github size={20} className="text-white" />
              </a>
              <a href="https://twitter.com/neuralcodelab" aria-label="Twitter" className="p-3 bg-gray-700 hover:bg-purple-500 rounded-lg transition-colors">
                <Twitter size={20} className="text-white" />
              </a>
              <a href="https://linkedin.com/company/neuralcodelab" aria-label="LinkedIn" className="p-3 bg-gray-700 hover:bg-purple-500 rounded-lg transition-colors">
                <Linkedin size={20} className="text-white" />
              </a>
              <a href="mailto:contacto@neuralcodelab.com" aria-label="Email" className="p-3 bg-gray-700 hover:bg-purple-500 rounded-lg transition-colors">
                <Mail size={20} className="text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
