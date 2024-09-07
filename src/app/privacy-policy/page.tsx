'use client';

import React from 'react';
import styles from '../../styles/PrivacyPolicy.module.css'; // Asegúrate de que la ruta es correcta

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* Encabezado */}
      <header className={styles.header}>
        <h1>Política de Privacidad de Neural Code Lab</h1>
        <p>
          En Neural Code Lab, tu privacidad es muy importante para nosotros. Esta política detalla cómo manejamos tus datos e información personal.
        </p>
      </header>

      {/* Sección 1: Recolección de Información */}
      <section className={styles.section}>
        <h2>1. Recolección de Información</h2>
        <p>
          Recopilamos información personal cuando te registras en nuestras aplicaciones, navegas por nuestro sitio web o realizas una compra. Esta información puede incluir tu nombre, dirección de correo electrónico, y detalles de pago en el caso de aplicaciones de pago.
        </p>
        <p>
          Utilizamos cookies y tecnologías similares para mejorar la experiencia del usuario y obtener datos de navegación en nuestro sitio web.
        </p>
      </section>

      {/* Sección 2: Uso de la Información */}
      <section className={styles.section}>
        <h2>2. Uso de la Información</h2>
        <p>
          La información recopilada es utilizada para proporcionar, mantener y mejorar nuestros servicios. También puede ser utilizada para personalizar tu experiencia o para fines de marketing directo, en caso de haber dado tu consentimiento.
        </p>
        <p>
          En el caso de las aplicaciones de pago, la información de pago es procesada de manera segura a través de plataformas de terceros.
        </p>
      </section>

      {/* Sección 3: Aplicaciones Gratuitas y de Pago */}
      <section className={styles.section}>
        <h2>3. Aplicaciones Gratuitas y de Pago</h2>
        <p>
          Nuestras aplicaciones gratuitas funcionan bajo un modelo de donaciones, y toda la información proporcionada por los usuarios se trata con la misma confidencialidad que en nuestras aplicaciones de pago. Los donantes tienen acceso a ciertas ventajas adicionales, pero no tratamos la información de los donantes de manera diferente.
        </p>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <h3>Aplicaciones Gratuitas</h3>
            <p>
              Las aplicaciones gratuitas son mantenidas gracias a las contribuciones de la comunidad. Puedes apoyarnos a través de plataformas como Patreon.
            </p>
          </div>
          <div className={styles.card}>
            <h3>Aplicaciones de Pago</h3>
            <p>
              Las aplicaciones de pago ofrecen características avanzadas y soporte adicional. Toda la información de pago es manejada de manera segura.
            </p>
          </div>
        </div>
      </section>

      {/* Sección 4: Compartir Información */}
      <section className={styles.section}>
        <h2>4. Compartir Información</h2>
        <p>
          No vendemos, intercambiamos ni transferimos tu información personal a terceros sin tu consentimiento, a menos que sea requerido por la ley. Solo compartimos información con proveedores de servicios que nos ayudan a operar nuestras aplicaciones, siempre bajo estrictos acuerdos de confidencialidad.
        </p>
      </section>

      {/* Sección 5: Seguridad de la Información */}
      <section className={styles.section}>
        <h2>5. Seguridad de la Información</h2>
        <p>
          Implementamos una variedad de medidas de seguridad para garantizar la protección de tu información personal. Usamos tecnologías de encriptación y sistemas de autenticación para asegurar los datos sensibles.
        </p>
      </section>

      {/* Botón para descargar las políticas completas */}
      <section className={styles.section}>
        <div className={styles.card}>
          <h3>Descargar Políticas Completa</h3>
          <p>
            Puedes descargar una copia completa de nuestras políticas de privacidad en el siguiente enlace:
          </p>
          <a href="https://drive.google.com/your-link" className={styles.downloadButton} target="_blank" rel="noopener noreferrer">
            Descargar Políticas de Privacidad
          </a>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
