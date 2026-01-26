'use client';

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ExternalLink, Briefcase } from 'lucide-react';

export default function Header() {
  const [estaAbierto, setEstaAbierto] = useState(false);

  const alternarMenu = () => setEstaAbierto(!estaAbierto);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="text-xl font-bold text-gray-900">NeuralCodeLab</div>
        </Link>

        {/* Menú de escritorio */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Inicio
          </Link>
          <Link href="/nosotros" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Nosotros
          </Link>
          <Link href="/proyectos" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Proyectos
          </Link>
          <a
            href="https://infra.neuralcodelab.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            Infraestructura
            <ExternalLink size={14} />
          </a>
          <a
            href="https://mycven.neuralcodelab.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
            title="Ver mi CV"
          >
            <Briefcase size={20} />
          </a>
          <Link href="/contacto" className="px-4 py-2 text-sm bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
            Contacto
          </Link>
        </nav>

        {/* Menú hamburguesa para móviles */}
        <button
          onClick={alternarMenu}
          className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
          aria-label="Alternar menú"
        >
          {estaAbierto ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menú desplegable para móviles */}
      {estaAbierto && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg py-4 px-6 flex flex-col gap-4">
          <Link
            href="/"
            className="text-base font-medium text-gray-600 hover:text-gray-900 py-2"
            onClick={() => setEstaAbierto(false)}
          >
            Inicio
          </Link>
          <Link
            href="/nosotros"
            className="text-base font-medium text-gray-600 hover:text-gray-900 py-2"
            onClick={() => setEstaAbierto(false)}
          >
            Nosotros
          </Link>
          <Link
            href="/proyectos"
            className="text-base font-medium text-gray-600 hover:text-gray-900 py-2"
            onClick={() => setEstaAbierto(false)}
          >
            Proyectos
          </Link>
          <a
            href="https://infra.neuralcodelab.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between text-base font-medium text-gray-600 hover:text-gray-900 py-2"
            onClick={() => setEstaAbierto(false)}
          >
            Infraestructura
            <ExternalLink size={16} />
          </a>
          <a
            href="https://mycven.neuralcodelab.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between text-base font-medium text-gray-600 hover:text-gray-900 py-2"
            onClick={() => setEstaAbierto(false)}
          >
            Mi CV
            <Briefcase size={18} />
          </a>
          <Link
            href="/contacto"
            className="text-base font-medium text-gray-600 hover:text-gray-900 py-2"
            onClick={() => setEstaAbierto(false)}
          >
            Contacto
          </Link>
        </div>
      )}
    </header>
  );
}
