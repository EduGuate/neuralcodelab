'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ExternalLink, Briefcase, Globe } from 'lucide-react';
import { useTranslation } from '@/lib/useTranslation';

export default function Header() {
  const [estaAbierto, setEstaAbierto] = useState(false);
  const { language, setLanguage, t } = useTranslation();
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const alternarMenu = () => setEstaAbierto(!estaAbierto);

  const languages = [
    { code: 'es' as const, name: 'Español', flag: '🇪🇸' },
    { code: 'en' as const, name: 'English', flag: '🇺🇸' },
    { code: 'pt' as const, name: 'Português', flag: '🇧🇷' },
    { code: 'zh' as const, name: '中文', flag: '🇨🇳' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="text-xl font-bold text-gray-900">NeuralCodeLab</div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            {t('header.home')}
          </Link>
          <Link href="/nosotros" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            {t('header.about')}
          </Link>
          <Link href="/proyectos" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            {t('header.projects')}
          </Link>
          <Link href="/3cx" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            3CX
          </Link>
          <Link href="/contact-center" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            {t('header.contactCenter')}
          </Link>
          <a
            href="https://infra.neuralcodelab.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            {t('header.infrastructure')}
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

          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-50"
            >
              <Globe size={18} />
              <span>{languages.find(l => l.code === language)?.flag}</span>
            </button>
            {langMenuOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-1">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setLangMenuOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center gap-2 ${language === lang.code ? 'bg-gray-50 font-semibold' : ''
                      }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link href="/contacto" className="px-4 py-2 text-sm bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
            {t('header.contact')}
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={alternarMenu}
          className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
          aria-label="Alternar menú"
        >
          {estaAbierto ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {estaAbierto && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg py-4 px-6 flex flex-col gap-4">
          <Link
            href="/"
            className="text-base font-medium text-gray-600 hover:text-gray-900 py-2"
            onClick={() => setEstaAbierto(false)}
          >
            {t('header.home')}
          </Link>
          <Link
            href="/nosotros"
            className="text-base font-medium text-gray-600 hover:text-gray-900 py-2"
            onClick={() => setEstaAbierto(false)}
          >
            {t('header.about')}
          </Link>
          <Link
            href="/proyectos"
            className="text-base font-medium text-gray-600 hover:text-gray-900 py-2"
            onClick={() => setEstaAbierto(false)}
          >
            {t('header.projects')}
          </Link>
          <Link
            href="/3cx"
            className="text-base font-medium text-gray-600 hover:text-gray-900 py-2"
            onClick={() => setEstaAbierto(false)}
          >
            3CX
          </Link>
          <Link
            href="/contact-center"
            className="text-base font-medium text-gray-600 hover:text-gray-900 py-2"
            onClick={() => setEstaAbierto(false)}
          >
            {t('header.contactCenter')}
          </Link>
          <a
            href="https://infra.neuralcodelab.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between text-base font-medium text-gray-600 hover:text-gray-900 py-2"
            onClick={() => setEstaAbierto(false)}
          >
            {t('header.infrastructure')}
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

          {/* Mobile Language Switcher */}
          <div className="border-t border-gray-100 pt-4 mt-2">
            <p className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <Globe size={16} /> Idioma / Language
            </p>
            <div className="grid grid-cols-2 gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setEstaAbierto(false);
                  }}
                  className={`px-3 py-2 text-sm rounded-lg border transition-colors ${language === lang.code
                      ? 'bg-gray-900 text-white border-gray-900'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
                    }`}
                >
                  {lang.flag} {lang.name}
                </button>
              ))}
            </div>
          </div>

          <Link
            href="/contacto"
            className="text-base font-medium text-gray-600 hover:text-gray-900 py-2"
            onClick={() => setEstaAbierto(false)}
          >
            {t('header.contact')}
          </Link>
        </div>
      )}
    </header>
  );
}
