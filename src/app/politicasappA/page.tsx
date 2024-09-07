import React from 'react';
import Head from 'next/head';
import styles from '../../styles/politicasappA.module.css';

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className={styles.section}>
    <h2>{title}</h2>
    <div className={styles.cardContainer}>
      {children}
    </div>
  </section>
);

const PoliticasPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Políticas de Aplicaciones - Neural Code Lab</title>
        <meta name="description" content="Consulta las políticas de nuestras aplicaciones gratuitas y de pago. Descarga el documento completo desde Google Drive." />
      </Head>

      <header className={styles.header}>
        <h1>Políticas de Aplicaciones</h1>
      </header>

      <Section title="Políticas de Privacidad">
        <div className={styles.card}>
          <h3>Privacidad y Protección de Datos</h3>
          <p>
            En Neural Code Lab, valoramos tu privacidad y estamos comprometidos a proteger tus datos personales. Esta política de privacidad explica cómo recopilamos, utilizamos y protegemos tu información.
          </p>
          <p>
            <strong>Recopilación de Información:</strong> Recopilamos información personal cuando te registras en nuestros servicios, utilizas nuestras aplicaciones o interactúas con nosotros. Esta información puede incluir tu nombre, dirección de correo electrónico y otra información relevante.
          </p>
          <p>
            <strong>Uso de la Información:</strong> Utilizamos la información recopilada para proporcionarte nuestros servicios, mejorar nuestras aplicaciones, y comunicarte actualizaciones y ofertas relevantes.
          </p>
          <p>
            <strong>Protección de Datos:</strong> Implementamos medidas de seguridad adecuadas para proteger tu información personal contra accesos no autorizados, alteraciones y divulgación.
          </p>
          <p>
            <strong>Derechos del Usuario:</strong> Tienes derecho a acceder, corregir y eliminar tu información personal. Puedes contactarnos en cualquier momento para ejercer estos derechos.
          </p>
        </div>
      </Section>

      <Section title="Términos de Servicio">
        <div className={styles.card}>
          <h3>Términos Generales</h3>
          <p>
            Al utilizar nuestras aplicaciones, aceptas estos términos de servicio. Si no estás de acuerdo con alguno de estos términos, no debes utilizar nuestras aplicaciones.
          </p>
          <p>
            <strong>Uso de Aplicaciones:</strong> Nuestras aplicaciones se proporcionan para uso personal y no comercial. No debes modificar, copiar o distribuir el software sin nuestro permiso.
          </p>
          <p>
            <strong>Limitación de Responsabilidad:</strong> No somos responsables de ningún daño o pérdida que pueda surgir del uso de nuestras aplicaciones. Utilizas nuestras aplicaciones bajo tu propio riesgo.
          </p>
          <p>
            <strong>Modificaciones:</strong> Nos reservamos el derecho de modificar estos términos en cualquier momento. Te notificaremos sobre cualquier cambio importante a través de nuestros canales de comunicación.
          </p>
        </div>
      </Section>

      <Section title="Políticas de Donaciones">
        <div className={styles.card}>
          <h3>Donaciones y Financiamiento</h3>
          <p>
            Neural Code Lab ofrece aplicaciones gratuitas y de pago. Apreciamos y dependemos de las donaciones para mantener y mejorar nuestras aplicaciones gratuitas.
          </p>
          <p>
            <strong>Donaciones:</strong> Las donaciones se utilizan exclusivamente para el desarrollo y mantenimiento de nuestras aplicaciones. Puedes hacer una donación a través de nuestra página de Patreon.
          </p>
          <p>
            <strong>Transparencia:</strong> Publicaremos informes periódicos sobre cómo se utilizan las donaciones para garantizar la transparencia y responsabilidad en el uso de los fondos.
          </p>
        </div>
      </Section>

      <footer className={styles.footer}>
        <a href="https://drive.google.com/drive/folders/YOUR_FOLDER_ID" className={styles.downloadButton} target="_blank" rel="noopener noreferrer">
          Descargar Políticas Completas
        </a>
      </footer>
    </div>
  );
};

export default PoliticasPage;
