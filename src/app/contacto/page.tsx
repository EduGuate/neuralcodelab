import Head from 'next/head';

export default function Contacto() {
  return (
    <>
      <Head>
        <title>Contacto - Neural Code Lab</title>
        <meta name="description" content="Página de contacto de Neural Code Lab" />
      </Head>
      <main className="p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Contacto</h1>
        <p className="mb-4">
          Si tienes alguna pregunta o deseas ponerte en contacto con nosotros, por favor completa el siguiente formulario o envíanos un correo electrónico a{' '}
          <a href="mailto:contacto@neuralcodelab.com" className="text-accent hover:underline">
            contacto@neuralcodelab.com
          </a>.
        </p>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">Mensaje</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full p-2 border border-gray-300 rounded"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-accent text-white px-4 py-2 rounded hover:bg-accent-dark"
          >
            Enviar
          </button>
        </form>
      </main>
    </>
  );
}
