import Head from 'next/head';

export default function Proyectos() {
  return (
    <>
      <Head>
        <title>Proyectos - Neural Code Lab</title>
        <meta name="description" content="Página de proyectos de Neural Code Lab" />
      </Head>
      <main className="p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Nuestros Proyectos</h1>
        <p className="mb-4">
          En Neural Code Lab, estamos trabajando en varios proyectos emocionantes que buscan mejorar la accesibilidad a herramientas tecnológicas y proporcionar soluciones innovadoras para la comunidad.
        </p>
        <div className="space-y-4">
          <div className="bg-white p-4 border border-gray-300 rounded">
            <h2 className="text-xl font-semibold mb-2">Proyecto 1</h2>
            <p>
              Descripción breve del Proyecto 1. Este proyecto está enfocado en...
            </p>
          </div>
          <div className="bg-white p-4 border border-gray-300 rounded">
            <h2 className="text-xl font-semibold mb-2">Proyecto 2</h2>
            <p>
              Descripción breve del Proyecto 2. Este proyecto tiene como objetivo...
            </p>
          </div>
          {/* Añade más proyectos según sea necesario */}
        </div>
      </main>
    </>
  );
}
