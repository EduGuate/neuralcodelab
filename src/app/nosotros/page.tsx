import Head from 'next/head';

export default function Nosotros() {
  return (
    <>
      <Head>
        <title>Sobre Nosotros - Neural Code Lab</title>
        <meta name="description" content="Página sobre Neural Code Lab" />
      </Head>
      <main className="p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Sobre Nosotros</h1>
        <p className="mb-4">
          Neural Code Lab es una organización dedicada a la creación de software gratuito que beneficia a comunidades y personas que desean aprender sobre tecnología y desarrollo de software.
        </p>
        <p className="mb-4">
          Nuestro equipo está compuesto por apasionados de la tecnología que buscan crear herramientas accesibles y útiles para todos. Creemos en el poder del software para cambiar el mundo y trabajamos constantemente para ofrecer soluciones innovadoras.
        </p>
        <p className="mb-4">
          Si deseas saber más sobre nosotros o cómo colaborar, no dudes en ponerte en contacto con nosotros a través de nuestra página de contacto.
        </p>
      </main>
    </>
  );
}
