'use client'; // Marks the component as client-side

import Image from 'next/image';
import { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline'; // For Heroicons v1
import styles from '../styles/Header.module.css'; // Import the styles file
import { useRouter } from 'next/navigation'; // Import useRouter for navigation

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter(); // Create an instance of useRouter

  const toggleMenu = () => setIsOpen(!isOpen);

  // Function to navigate to a page and close the mobile menu
  const handleNavigation = (path: string) => {
    router.push(path);
    setIsOpen(false); // Close the mobile menu after navigation
  };

  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/img/logo.png" // Make sure the path is correct
          alt="Neural Code Lab Logo"
          width={250}
          height={250}
          className={styles.logo}
        />
      </div>

      {/* Desktop Menu */}
      <nav className={styles.navDesktop}>
        <a href="/" className={styles.navLink}>Home</a>
        <a href="/nosotros" className={styles.navLink}>About Us</a>
        <a href="/proyectos" className={styles.navLink}>Projects</a>
        <a href="/contacto" className={styles.navLink}>Contact</a>
      </nav>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} aria-label="Toggle menu" className={styles.menuButton}>
          {isOpen ? <XIcon className={styles.menuButtonIcon} /> : <MenuIcon className={styles.menuButtonIcon} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`${styles.navMobile} ${isOpen ? styles.navMobileOpen : ''}`}>
        <nav>
          <a href="/" className={styles.navLink} onClick={() => handleNavigation('/')}>Home</a>
          <a href="/nosotros" className={styles.navLink} onClick={() => handleNavigation('/nosotros')}>About Us</a>
          <a href="/proyectos" className={styles.navLink} onClick={() => handleNavigation('/proyectos')}>Projects</a>
          <a href="/contacto" className={styles.navLink} onClick={() => handleNavigation('/contacto')}>Contact</a>
        </nav>
      </div>
    </header>
  );
}