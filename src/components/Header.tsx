'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, ExternalLink, Briefcase, Globe } from 'lucide-react';
import { useTranslation } from '@/lib/useTranslation';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

export default function Header() {
  const [estaAbierto, setEstaAbierto] = useState(false);
  const { language, setLanguage, t } = useTranslation();

  const languages = [
    { code: 'es' as const, name: 'Español', flag: '🇪🇸' },
    { code: 'en' as const, name: 'English', flag: '🇺🇸' },
    { code: 'pt' as const, name: 'Português', flag: '🇧🇷' },
    { code: 'zh' as const, name: '中文', flag: '🇨🇳' }
  ];

  const currentLanguage = languages.find(l => l.code === language);

  const navLinks = [
    { href: '/', label: t('header.home') },
    { href: '/nosotros', label: t('header.about') },
    { href: '/proyectos', label: t('header.projects') },
    { href: '/3cx', label: '3CX' },
    { href: '/contact-center', label: t('header.contactCenter') },
    { href: '/chat-demo', label: t('header.chatServices') },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="text-xl font-bold">NeuralCodeLab</div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://infra.neuralcodelab.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {t('header.infrastructure')}
            <ExternalLink size={14} />
          </a>
          <a
            href="https://mycven.neuralcodelab.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            title="Ver mi CV"
          >
            <Briefcase size={20} />
          </a>

          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-2">
                <Globe size={18} />
                <span>{currentLanguage?.flag}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={language === lang.code ? 'bg-muted font-semibold' : ''}
                >
                  <span className="mr-2">{lang.flag}</span>
                  <span>{lang.name}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button asChild size="sm">
            <Link href="/contacto">
              {t('header.contact')}
            </Link>
          </Button>
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-2">
                <Globe size={18} />
                <span>{currentLanguage?.flag}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={language === lang.code ? 'bg-muted font-semibold' : ''}
                >
                  <span className="mr-2">{lang.flag}</span>
                  <span>{lang.name}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Sheet open={estaAbierto} onOpenChange={setEstaAbierto}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col gap-4 pt-12">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium text-muted-foreground hover:text-foreground py-2 border-b border-muted"
                  onClick={() => setEstaAbierto(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://infra.neuralcodelab.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-lg font-medium text-muted-foreground hover:text-foreground py-2 border-b border-muted"
                onClick={() => setEstaAbierto(false)}
              >
                {t('header.infrastructure')}
                <ExternalLink size={18} />
              </a>
              <a
                href="https://mycven.neuralcodelab.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-lg font-medium text-muted-foreground hover:text-foreground py-2 border-b border-muted"
                onClick={() => setEstaAbierto(false)}
              >
                Mi CV
                <Briefcase size={18} />
              </a>
              <Button asChild className="mt-4">
                <Link href="/contacto" onClick={() => setEstaAbierto(false)}>
                  {t('header.contact')}
                </Link>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
