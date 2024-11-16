"use client"; // Asegúrate de agregar esta línea si usas Next.js (React Server-side rendering)

export default function Contacto() {
  return (
    <div className="">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-700 to-indigo-600 text-white w-full text-center py-20 shadow-lg">
        <h1 className="text-5xl font-bold mb-4">¿Tienes Preguntas?</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Estamos aquí para responder cualquier pregunta que tengas sobre nosotros. Haz clic en el botón de abajo para enviarnos un correo directo.
        </p>
      </div>
    
      {/* Call to Action Contact Section */}
      <main className="flex flex-col items-center justify-center py-16">
        <div className="p-10 bg-white shadow-xl rounded-2xl">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-4">Contáctanos por Correo</h2>
          <p className="text-center text-gray-500 mb-6">
            Haz clic en el botón y te llevaremos a tu app de correo predeterminada.
          </p>

        <div className="text-center">
          <a 
            href="mailto:devlewiso@outlook.com?subject=Consulta desde el sitio web"
            className="px-10 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-medium rounded-full shadow-lg hover:from-purple-600 hover:to-indigo-700 transition-colors duration-300 ease-in-out"
          >
            Enviar Correo
          </a>
          </div>
        </div>
      </main>
    </div>
  );
}