'use client'; // Marca el componente como de cliente

import Image from 'next/image';
import { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline'; // Para la versión 1 de Heroicons
import styles from '../styles/Header.module.css'; // Importa el archivo de estilos
import { useRouter } from 'next/navigation'; // Importa useRouter para la navegación

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter(); // Crea una instancia de useRouter

  const toggleMenu = () => setIsOpen(!isOpen);

  // Función para navegar a una página y cerrar el menú en móviles
  const handleNavigation = (path: string) => {
    router.push(path);
    setIsOpen(false); // Cierra el menú en móviles después de la navegación
  };

  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/img/logo.png" // Asegúrate de que la ruta es correcta
          alt="Logo de Neural Code Lab"
          width={250}
          height={250}
          className={styles.logo}
        />
      </div>

      {/* Menú de escritorio */}
      <nav className={styles.navDesktop}>
        <a href="/" className={styles.navLink}>Inicio</a>
        <a href="/nosotros" className={styles.navLink}>Sobre Nosotros</a>
        <a href="/proyectos" className={styles.navLink}>Proyectos</a>
        <a href="/contacto" className={styles.navLink}>Contacto</a>
        
      </nav>

      {/* Menú Hamburguesa para móviles */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} aria-label="Toggle menu" className={styles.menuButton}>
          {isOpen ? <XIcon className={styles.menuButtonIcon} /> : <MenuIcon className={styles.menuButtonIcon} />}
        </button>
      </div>

      {/* Menú desplegable en móviles */}
      <div className={`${styles.navMobile} ${isOpen ? styles.navMobileOpen : ''}`}>
        <nav>
          <a href="/" className={styles.navLink} onClick={() => handleNavigation('/')}>Inicio</a>
          <a href="/nosotros" className={styles.navLink} onClick={() => handleNavigation('/nosotros')}>Sobre Nosotros</a>
          <a href="/proyectos" className={styles.navLink} onClick={() => handleNavigation('/proyectos')}>Proyectos</a>
          <a href="/contacto" className={styles.navLink} onClick={() => handleNavigation('/contacto')}>Contacto</a>
        </nav>
      </div>
    </header>
  );
}
