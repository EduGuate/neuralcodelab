import React from 'react';

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="mb-12">
    <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">{title}</h2>
    <div className="space-y-6">
      {children}
    </div>
  </section>
);

const Card: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
    <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
    <div className="text-gray-600 space-y-3 text-sm leading-relaxed">
      {children}
    </div>
  </div>
);

export default function PoliticasPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <header className="mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Políticas de Aplicaciones</h1>
          <p className="text-lg text-gray-600">
            Consulta las políticas de nuestras aplicaciones gratuitas y de pago.
          </p>
        </header>

        <Section title="Políticas de Privacidad">
          <Card title="Privacidad y Protección de Datos">
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
          </Card>
        </Section>

        <Section title="Términos de Servicio">
          <Card title="Términos Generales">
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
          </Card>
        </Section>

        <Section title="Políticas de Donaciones">
          <Card title="Donaciones y Financiamiento">
            <p>
              Neural Code Lab ofrece aplicaciones gratuitas y de pago. Apreciamos y dependemos de las donaciones para mantener y mejorar nuestras aplicaciones gratuitas.
            </p>
            <p>
              <strong>Donaciones:</strong> Las donaciones se utilizan exclusivamente para el desarrollo y mantenimiento de nuestras aplicaciones. Puedes hacer una donación a través de nuestra página de Patreon.
            </p>
            <p>
              <strong>Transparencia:</strong> Publicaremos informes periódicos sobre cómo se utilizan las donaciones para garantizar la transparencia y responsabilidad en el uso de los fondos.
            </p>
          </Card>
        </Section>

        <footer className="mt-16 pt-8 border-t border-gray-100 text-center">
          <a
            href="https://drive.google.com/drive/folders/YOUR_FOLDER_ID"
            className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Descargar Políticas Completas
          </a>
        </footer>
      </div>
    </div>
  );
}
