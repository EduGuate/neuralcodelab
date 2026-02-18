'use client';

import React from 'react';
import { Code, Mail, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from '@/lib/useTranslation';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-background border-t py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo y descripción */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
                <Code size={20} />
              </div>
              <span className="text-xl font-bold text-foreground">NeuralCodeLab</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h3 className="font-semibold text-foreground mb-6">{t('footer.quickLinks')}</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">
                  {t('header.home')}
                </Link>
              </li>
              <li>
                <Link href="/proyectos" className="hover:text-foreground transition-colors">
                  {t('header.projects')}
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="hover:text-foreground transition-colors">
                  {t('header.about')}
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-foreground transition-colors">
                  {t('header.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div>
            <h3 className="font-semibold text-foreground mb-6">{t('footer.followUs')}</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/devlewiso"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://gt.linkedin.com/in/devlewiso/es"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:devlewiso@gmail.com"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Neural Code Lab. {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
