'use client'; // Marca el componente como del lado del cliente

import Image from 'next/image';
import { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline'; // Para Heroicons v1
import styles from '../styles/Header.module.css'; // Importar el archivo de estilos
import { useRouter } from 'next/navigation'; // Importar useRouter para la navegación

export default function Header() {
  const [estaAbierto, setEstaAbierto] = useState(false);
  const router = useRouter(); // Crear una instancia de useRouter

  const alternarMenu = () => setEstaAbierto(!estaAbierto);

  // Función para navegar a una página y cerrar el menú móvil
  const manejarNavegacion = (ruta: string) => {
    router.push(ruta);
    setEstaAbierto(false); // Cerrar el menú móvil después de navegar
  };

  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/img/logo.png" // Asegúrate de que la ruta sea correcta
          alt="Logo de Neural Code Lab"
          width={250}
          height={250}
          className={styles.logo}
        />
      </div>

      {/* Menú de escritorio */}
      <nav className={styles.navDesktop}>
        <a href="/" className={styles.navLink}>Inicio</a>
        <a href="/nosotros" className={styles.navLink}>Nosotros</a>
        <a href="/proyectos" className={styles.navLink}>Proyectos</a>
        <a href="/contacto" className={styles.navLink}>Contacto</a>
      </nav>

      {/* Menú hamburguesa para móviles */}
      <div className="md:hidden flex items-center">
        <button onClick={alternarMenu} aria-label="Alternar menú" className={styles.menuButton}>
          {estaAbierto ? <XIcon className={styles.menuButtonIcon} /> : <MenuIcon className={styles.menuButtonIcon} />}
        </button>
      </div>

      {/* Menú desplegable para móviles */}
      <div className={`${styles.navMobile} ${estaAbierto ? styles.navMobileOpen : ''}`}>
        <nav>
          <a href="/" className={styles.navLink} onClick={() => manejarNavegacion('/')}>Inicio</a>
          <a href="/nosotros" className={styles.navLink} onClick={() => manejarNavegacion('/nosotros')}>Nosotros</a>
          <a href="/proyectos" className={styles.navLink} onClick={() => manejarNavegacion('/proyectos')}>Proyectos</a>
          <a href="/contacto" className={styles.navLink} onClick={() => manejarNavegacion('/contacto')}>Contacto</a>
        </nav>
      </div>
    </header>
  );
}
