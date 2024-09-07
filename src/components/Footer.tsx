import React from 'react';
import styles from '../styles/Footer.module.css'; // Importa el archivo de estilos

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container mx-auto px-4">
        <div className={styles.navLinks}>
          <a href="/" className={styles.navLink}>Inicio</a>
          <a href="/nosotros" className={styles.navLink}>Sobre Nosotros</a>
          <a href="/contacto" className={styles.navLink}>Contacto</a>
          <a href="/privacy-policy" className={styles.navLink}>Política de Privacidad</a>
          <a href="/terms-of-service" className={styles.navLink}>Términos de Servicio</a>
          <a href="/politicasappA" className={styles.navLink}>Politicas de Aplicaciones</a>
        </div>

        <div className={styles.info}>
          <h2>Neural Code Lab</h2>
          <p>Creando software gratuito para beneficiar a comunidades y personas que quieren aprender.</p>
          <p>© {new Date().getFullYear()} Neural Code Lab. Todos los derechos reservados.</p>
        </div>

        <div className={styles.socialLinks}>
          <a href="https://facebook.com/neuralcodelab" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com/neuralcodelab" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://linkedin.com/company/neuralcodelab" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://instagram.com/neuralcodelab" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
