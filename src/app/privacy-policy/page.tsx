'use client';

import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-24">
        {/* Encabezado */}
        <header className="mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Política de Privacidad</h1>
          <p className="text-lg text-gray-600">
            En Neural Code Lab, tu privacidad es muy importante para nosotros. Esta política detalla cómo manejamos tus datos e información personal.
          </p>
        </header>

        <div className="space-y-12">
          {/* Sección 1 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Recolección de Información</h2>
            <div className="text-gray-600 space-y-4 leading-relaxed">
              <p>
                Recopilamos información personal cuando te registras en nuestras aplicaciones, navegas por nuestro sitio web o realizas una compra. Esta información puede incluir tu nombre, dirección de correo electrónico, y detalles de pago en el caso de aplicaciones de pago.
              </p>
              <p>
                Utilizamos cookies y tecnologías similares para mejorar la experiencia del usuario y obtener datos de navegación en nuestro sitio web.
              </p>
            </div>
          </section>

          {/* Sección 2 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Uso de la Información</h2>
            <div className="text-gray-600 space-y-4 leading-relaxed">
              <p>
                La información recopilada es utilizada para proporcionar, mantener y mejorar nuestros servicios. También puede ser utilizada para personalizar tu experiencia o para fines de marketing directo, en caso de haber dado tu consentimiento.
              </p>
              <p>
                En el caso de las aplicaciones de pago, la información de pago es procesada de manera segura a través de plataformas de terceros.
              </p>
            </div>
          </section>

          {/* Sección 3 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Aplicaciones Gratuitas y de Pago</h2>
            <div className="text-gray-600 space-y-4 leading-relaxed mb-6">
              <p>
                Nuestras aplicaciones gratuitas funcionan bajo un modelo de donaciones, y toda la información proporcionada por los usuarios se trata con la misma confidencialidad que en nuestras aplicaciones de pago.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Aplicaciones Gratuitas</h3>
                <p className="text-gray-600 text-sm">
                  Las aplicaciones gratuitas son mantenidas gracias a las contribuciones de la comunidad. Puedes apoyarnos a través de plataformas como Patreon.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Aplicaciones de Pago</h3>
                <p className="text-gray-600 text-sm">
                  Las aplicaciones de pago ofrecen características avanzadas y soporte adicional. Toda la información de pago es manejada de manera segura.
                </p>
              </div>
            </div>
          </section>

          {/* Sección 4 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Compartir Información</h2>
            <div className="text-gray-600 space-y-4 leading-relaxed">
              <p>
                No vendemos, intercambiamos ni transferimos tu información personal a terceros sin tu consentimiento, a menos que sea requerido por la ley. Solo compartimos información con proveedores de servicios que nos ayudan a operar nuestras aplicaciones, siempre bajo estrictos acuerdos de confidencialidad.
              </p>
            </div>
          </section>

          {/* Sección 5 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Seguridad de la Información</h2>
            <div className="text-gray-600 space-y-4 leading-relaxed">
              <p>
                Implementamos una variedad de medidas de seguridad para garantizar la protección de tu información personal. Usamos tecnologías de encriptación y sistemas de autenticación para asegurar los datos sensibles.
              </p>
            </div>
          </section>
        </div>

        {/* Botón para descargar */}
        <div className="mt-16 pt-8 border-t border-gray-100">
          <div className="p-8 bg-gray-50 rounded-2xl text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Descargar Políticas Completa</h3>
            <p className="text-gray-600 mb-6">
              Puedes descargar una copia completa de nuestras políticas de privacidad en el siguiente enlace:
            </p>
            <a
              href="https://drive.google.com/your-link"
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Descargar PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
