// Textos legales (GDPR) de neuralcodelab.com. Si cambias proveedores, cookies o
// enlaces de afiliado, actualiza aquí y cambia LEGAL_UPDATED.

export type LegalLang = 'es' | 'en';
export type LegalDocId = 'privacy' | 'cookies' | 'terms';

export type LegalSection = {
  title: string;
  paragraphs?: string[];
  list?: string[];
  table?: { head: string[]; rows: string[][] };
};

export type LegalDoc = {
  path: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  intro: string;
  sections: LegalSection[];
};

export const LEGAL_UPDATED = { es: '26 de septiembre de 2026', en: 'September 26, 2026' };
export const LEGAL_CONTACT = 'devlewiso@gmail.com';

const privacyEs: LegalDoc = {
  path: '/privacy-policy',
  title: 'Política de Privacidad',
  seoTitle: 'Política de Privacidad | Neural Code Lab',
  seoDescription: 'Qué datos personales trata neuralcodelab.com, con qué base legal, cuánto tiempo y cómo ejercer tus derechos según el RGPD (GDPR).',
  intro: 'Esta política explica qué datos personales tratamos cuando visitas neuralcodelab.com, para qué los usamos y qué derechos tienes. Está redactada conforme al Reglamento General de Protección de Datos de la UE (RGPD/GDPR) y aplica a todos los visitantes.',
  sections: [
    {
      title: '1. Responsable del tratamiento',
      paragraphs: [
        `Neural Code Lab, proyecto con sede en Ciudad de Guatemala, Guatemala. Contacto para cualquier asunto de privacidad: ${LEGAL_CONTACT}.`,
      ],
    },
    {
      title: '2. Qué datos tratamos',
      list: [
        'Datos de navegación técnicos: dirección IP, navegador, sistema operativo y páginas solicitadas. Los registra nuestro proveedor de hosting para servir el sitio y protegerlo.',
        'Datos de analítica (solo si los aceptas): páginas visitadas, tiempo en el sitio, dispositivo y ubicación aproximada, mediante Google Analytics 4 con identificadores seudónimos.',
        'Datos que nos envías por correo: nombre, correo electrónico y el contenido de tu mensaje cuando nos escribes.',
        'Conversaciones con el agente de voz: si inicias una conversación en la página de Contact Center, tu voz y el texto de la conversación los procesa ElevenLabs para responderte.',
        'Preferencias locales: tu idioma y tu elección de cookies se guardan en tu propio navegador (localStorage); no se envían a nuestros servidores.',
      ],
      paragraphs: ['No pedimos registro, no vendemos tus datos y no tratamos categorías especiales de datos.'],
    },
    {
      title: '3. Finalidades y base legal',
      table: {
        head: ['Finalidad', 'Base legal (art. 6 RGPD)'],
        rows: [
          ['Servir el sitio, seguridad y prevención de abusos (registros del hosting)', 'Interés legítimo'],
          ['Medir el uso del sitio para mejorarlo (Google Analytics)', 'Consentimiento, que puedes retirar cuando quieras'],
          ['Responder a tus mensajes y solicitudes de servicio', 'Medidas precontractuales e interés legítimo'],
          ['Agente de voz en Contact Center', 'Consentimiento: solo se activa si inicias la conversación'],
        ],
      },
    },
    {
      title: '4. Con quién compartimos los datos',
      paragraphs: ['Solo con proveedores que nos prestan servicio (encargados del tratamiento) y bajo sus condiciones de protección de datos:'],
      list: [
        'Netlify, Inc. (EE. UU.): alojamiento del sitio y registros técnicos.',
        'Google Ireland Ltd. / Google LLC: Google Analytics, solo con tu consentimiento.',
        'ElevenLabs: agente de voz de la página Contact Center.',
        'unpkg (Cloudflare): distribución del script del agente de voz en esa misma página.',
        'Google (Gmail): recepción y respuesta de correos.',
      ],
    },
    {
      title: '5. Transferencias internacionales',
      paragraphs: [
        'Algunos proveedores están en Estados Unidos. Las transferencias se amparan en el Marco de Privacidad de Datos UE-EE. UU. cuando el proveedor está certificado, o en las Cláusulas Contractuales Tipo aprobadas por la Comisión Europea.',
      ],
    },
    {
      title: '6. Cuánto tiempo conservamos los datos',
      list: [
        'Registros técnicos del hosting: según la política de retención de Netlify, normalmente pocos días.',
        'Analítica: hasta 14 meses en Google Analytics.',
        'Correos: mientras dure la conversación y hasta 24 meses después, salvo que pidas antes su eliminación o una ley exija conservarlos.',
      ],
    },
    {
      title: '7. Enlaces de afiliado',
      paragraphs: [
        'Algunas páginas incluyen enlaces de afiliado a Kie.ai y Higgsfield, marcados como tales. Si haces clic, sales de nuestro sitio y esa empresa puede usar sus propias cookies para registrar que llegaste desde aquí. Nosotros solo recibimos datos agregados (clics, registros y comisiones), nunca tus datos de pago. Aplican las políticas de privacidad de esas empresas.',
      ],
    },
    {
      title: '8. Tus derechos',
      list: [
        'Acceder a tus datos y obtener una copia.',
        'Rectificarlos si son inexactos.',
        'Suprimirlos ("derecho al olvido").',
        'Limitar u oponerte a su tratamiento.',
        'Portabilidad de los datos que nos diste.',
        'Retirar tu consentimiento en cualquier momento, sin que afecte al tratamiento previo. Para la analítica, usa "Configurar cookies" al pie de cualquier página.',
        'Presentar una reclamación ante la autoridad de protección de datos de tu país.',
      ],
      paragraphs: [`Para ejercerlos, escríbenos a ${LEGAL_CONTACT}. Respondemos en un plazo máximo de un mes.`],
    },
    {
      title: '9. Menores de edad',
      paragraphs: ['El sitio no está dirigido a menores de 16 años y no tratamos a sabiendas sus datos. Si crees que un menor nos envió datos, escríbenos y los eliminaremos.'],
    },
    {
      title: '10. Seguridad',
      paragraphs: ['El sitio se sirve solo por HTTPS con cabeceras de seguridad (HSTS, protección contra clickjacking y MIME sniffing). Limitamos el acceso a los datos a lo imprescindible.'],
    },
    {
      title: '11. Cambios',
      paragraphs: ['Podemos actualizar esta política. Publicaremos aquí la versión vigente con su fecha de actualización.'],
    },
  ],
};

const privacyEn: LegalDoc = {
  path: '/privacy-policy',
  title: 'Privacy Policy',
  seoTitle: 'Privacy Policy | Neural Code Lab',
  seoDescription: 'What personal data neuralcodelab.com processes, on what legal basis, for how long, and how to exercise your GDPR rights.',
  intro: 'This policy explains what personal data we process when you visit neuralcodelab.com, why we use it and what rights you have. It follows the EU General Data Protection Regulation (GDPR) and applies to all visitors.',
  sections: [
    {
      title: '1. Data controller',
      paragraphs: [`Neural Code Lab, a project based in Guatemala City, Guatemala. Privacy contact: ${LEGAL_CONTACT}.`],
    },
    {
      title: '2. Data we process',
      list: [
        'Technical browsing data: IP address, browser, operating system and requested pages. Our hosting provider logs them to serve and protect the site.',
        'Analytics data (only if you accept): pages visited, time on site, device and approximate location, through Google Analytics 4 with pseudonymous identifiers.',
        'Data you email us: your name, email address and message content.',
        'Voice agent conversations: if you start a conversation on the Contact Center page, ElevenLabs processes your voice and the conversation text to answer you.',
        'Local preferences: your language and cookie choice are stored in your own browser (localStorage) and are not sent to our servers.',
      ],
      paragraphs: ['We do not require sign-up, we do not sell your data and we do not process special categories of data.'],
    },
    {
      title: '3. Purposes and legal basis',
      table: {
        head: ['Purpose', 'Legal basis (Art. 6 GDPR)'],
        rows: [
          ['Serving the site, security and abuse prevention (hosting logs)', 'Legitimate interest'],
          ['Measuring site usage to improve it (Google Analytics)', 'Consent, which you can withdraw at any time'],
          ['Answering your messages and service requests', 'Pre-contractual steps and legitimate interest'],
          ['Voice agent on Contact Center', 'Consent: it only runs if you start the conversation'],
        ],
      },
    },
    {
      title: '4. Who we share data with',
      paragraphs: ['Only with service providers (processors), under their data protection terms:'],
      list: [
        'Netlify, Inc. (USA): website hosting and technical logs.',
        'Google Ireland Ltd. / Google LLC: Google Analytics, only with your consent.',
        'ElevenLabs: voice agent on the Contact Center page.',
        'unpkg (Cloudflare): delivers the voice agent script on that same page.',
        'Google (Gmail): receiving and answering emails.',
      ],
    },
    {
      title: '5. International transfers',
      paragraphs: ['Some providers are located in the United States. Transfers rely on the EU-U.S. Data Privacy Framework where the provider is certified, or on the Standard Contractual Clauses approved by the European Commission.'],
    },
    {
      title: '6. How long we keep data',
      list: [
        "Hosting logs: according to Netlify's retention policy, usually a few days.",
        'Analytics: up to 14 months in Google Analytics.',
        'Emails: for the duration of the conversation and up to 24 months afterwards, unless you ask us to delete them sooner or the law requires keeping them.',
      ],
    },
    {
      title: '7. Affiliate links',
      paragraphs: ["Some pages include affiliate links to Kie.ai and Higgsfield, labelled as such. If you click one, you leave our site and that company may use its own cookies to record that you came from here. We only receive aggregated data (clicks, sign-ups and commissions), never your payment details. Those companies' privacy policies apply."],
    },
    {
      title: '8. Your rights',
      list: [
        'Access your data and get a copy.',
        'Rectify inaccurate data.',
        'Erase your data ("right to be forgotten").',
        'Restrict or object to processing.',
        'Data portability for the data you gave us.',
        'Withdraw consent at any time without affecting prior processing. For analytics, use "Cookie settings" in the footer of any page.',
        'Lodge a complaint with the data protection authority in your country.',
      ],
      paragraphs: [`To exercise them, email ${LEGAL_CONTACT}. We reply within one month at most.`],
    },
    {
      title: '9. Children',
      paragraphs: ['The site is not aimed at children under 16 and we do not knowingly process their data. If you believe a child sent us data, contact us and we will delete it.'],
    },
    {
      title: '10. Security',
      paragraphs: ['The site is served over HTTPS only, with security headers (HSTS, clickjacking and MIME-sniffing protection). Access to data is limited to what is strictly necessary.'],
    },
    {
      title: '11. Changes',
      paragraphs: ['We may update this policy. The current version and its update date will always be published here.'],
    },
  ],
};

const cookiesEs: LegalDoc = {
  path: '/cookie-policy',
  title: 'Política de Cookies',
  seoTitle: 'Política de Cookies | Neural Code Lab',
  seoDescription: 'Qué cookies y almacenamiento local usa neuralcodelab.com, para qué sirven, cuánto duran y cómo cambiar tu consentimiento.',
  intro: 'Las cookies son pequeños archivos que un sitio guarda en tu navegador. Aquí explicamos cuáles usamos y cómo controlarlas. Las cookies de analítica solo se activan si las aceptas en el aviso que aparece en tu primera visita.',
  sections: [
    {
      title: '1. Cookies y almacenamiento que usamos',
      table: {
        head: ['Nombre', 'Proveedor', 'Tipo', 'Finalidad', 'Duración'],
        rows: [
          ['ncl_consent', 'Neural Code Lab (localStorage)', 'Necesaria', 'Recordar si aceptaste o rechazaste la analítica', '12 meses'],
          ['language', 'Neural Code Lab (localStorage)', 'Necesaria', 'Recordar el idioma elegido', 'Hasta que la borres'],
          ['_ga', 'Google Analytics', 'Analítica (con consentimiento)', 'Distinguir visitantes de forma seudónima', '2 años'],
          ['_ga_<ID>', 'Google Analytics', 'Analítica (con consentimiento)', 'Mantener el estado de la sesión', '2 años'],
        ],
      },
      paragraphs: ['Las cookies necesarias no requieren consentimiento porque sin ellas el sitio no recuerda tus elecciones. No usamos cookies publicitarias ni de redes sociales.'],
    },
    {
      title: '2. Cookies de terceros al salir del sitio',
      list: [
        'Enlaces de afiliado (Kie.ai y Higgsfield): al hacer clic, esas empresas pueden poner sus propias cookies en su dominio para atribuir tu registro.',
        'Agente de voz de ElevenLabs en la página Contact Center: puede usar almacenamiento propio mientras conversas.',
      ],
      paragraphs: ['Esas cookies las controla cada empresa según su propia política.'],
    },
    {
      title: '3. Cómo cambiar tu consentimiento',
      paragraphs: [
        'Pulsa "Configurar cookies" al pie de cualquier página para aceptar o rechazar la analítica. Si la rechazas después de aceptarla, dejamos de cargar Google Analytics y borramos sus cookies de nuestro dominio.',
        'También puedes bloquear o borrar cookies desde la configuración de tu navegador.',
      ],
    },
    {
      title: '4. Más información',
      paragraphs: [`Consulta nuestra Política de Privacidad o escríbenos a ${LEGAL_CONTACT}.`],
    },
  ],
};

const cookiesEn: LegalDoc = {
  path: '/cookie-policy',
  title: 'Cookie Policy',
  seoTitle: 'Cookie Policy | Neural Code Lab',
  seoDescription: 'Which cookies and local storage neuralcodelab.com uses, what they do, how long they last and how to change your consent.',
  intro: 'Cookies are small files a website stores in your browser. Here we explain which ones we use and how to control them. Analytics cookies are only set if you accept them in the notice shown on your first visit.',
  sections: [
    {
      title: '1. Cookies and storage we use',
      table: {
        head: ['Name', 'Provider', 'Type', 'Purpose', 'Duration'],
        rows: [
          ['ncl_consent', 'Neural Code Lab (localStorage)', 'Necessary', 'Remember whether you accepted or rejected analytics', '12 months'],
          ['language', 'Neural Code Lab (localStorage)', 'Necessary', 'Remember your chosen language', 'Until you clear it'],
          ['_ga', 'Google Analytics', 'Analytics (with consent)', 'Distinguish visitors pseudonymously', '2 years'],
          ['_ga_<ID>', 'Google Analytics', 'Analytics (with consent)', 'Keep session state', '2 years'],
        ],
      },
      paragraphs: ['Necessary storage does not require consent because without it the site cannot remember your choices. We do not use advertising or social media cookies.'],
    },
    {
      title: '2. Third-party cookies when you leave the site',
      list: [
        'Affiliate links (Kie.ai and Higgsfield): when you click, those companies may set their own cookies on their domain to attribute your sign-up.',
        'ElevenLabs voice agent on the Contact Center page: it may use its own storage while you talk.',
      ],
      paragraphs: ["Each company controls those cookies under its own policy."],
    },
    {
      title: '3. How to change your consent',
      paragraphs: [
        'Click "Cookie settings" in the footer of any page to accept or reject analytics. If you reject it after accepting, we stop loading Google Analytics and delete its cookies from our domain.',
        'You can also block or delete cookies in your browser settings.',
      ],
    },
    {
      title: '4. More information',
      paragraphs: [`See our Privacy Policy or email ${LEGAL_CONTACT}.`],
    },
  ],
};

const termsEs: LegalDoc = {
  path: '/terms',
  title: 'Términos y Condiciones',
  seoTitle: 'Términos y Condiciones | Neural Code Lab',
  seoDescription: 'Condiciones de uso de neuralcodelab.com: contenido, descargas gratuitas, enlaces de afiliado, contenido generado con IA y responsabilidad.',
  intro: 'Al usar neuralcodelab.com aceptas estos términos. Si no estás de acuerdo, por favor no uses el sitio.',
  sections: [
    {
      title: '1. Quiénes somos',
      paragraphs: [`Neural Code Lab es un proyecto de software libre y tecnología con sede en Ciudad de Guatemala. Contacto: ${LEGAL_CONTACT}.`],
    },
    {
      title: '2. Uso del sitio',
      list: [
        'Puedes navegar, leer y compartir el contenido con fines personales o profesionales.',
        'No está permitido usar el sitio para actividades ilegales, intentar vulnerar su seguridad o sobrecargarlo con tráfico automatizado.',
      ],
    },
    {
      title: '3. Propiedad intelectual y licencias',
      paragraphs: [
        'Los textos, el diseño y la marca Neural Code Lab nos pertenecen, salvo que se indique otra cosa. Los proyectos de código abierto, plantillas y workflows descargables se rigen por la licencia indicada en cada uno (por ejemplo, MIT). Las marcas de terceros (Kie.ai, Higgsfield, Google, YouTube, TikTok y otras) pertenecen a sus dueños.',
      ],
    },
    {
      title: '4. Descargas gratuitas y workflows',
      paragraphs: [
        'Las plantillas y workflows se ofrecen "tal cual", sin garantía de funcionamiento, resultados ni ingresos. Los costos que publicamos (por ejemplo, el costo por video) son referencias medidas en una fecha concreta: los precios de servicios de terceros pueden cambiar. Eres responsable de tus credenciales, de los costos de los servicios que conectes y de cumplir las políticas de cada plataforma donde publiques.',
      ],
    },
    {
      title: '5. Enlaces de afiliado',
      paragraphs: [
        'Algunos enlaces a Kie.ai y Higgsfield son enlaces de afiliado y están marcados como tales. Si te registras o compras a través de ellos, podemos recibir una comisión sin costo adicional para ti. Solo recomendamos herramientas que usamos en nuestros propios proyectos; la relación comercial no cambia el precio que pagas.',
      ],
    },
    {
      title: '6. Contenido generado con IA',
      paragraphs: [
        'Parte de las imágenes y ejemplos del sitio se generaron con inteligencia artificial y tienen fines ilustrativos. Si usas nuestras herramientas para publicar contenido sintético, debes etiquetarlo según exijan las plataformas y la ley aplicable.',
      ],
    },
    {
      title: '7. Enlaces externos',
      paragraphs: ['No controlamos los sitios de terceros a los que enlazamos y no respondemos por su contenido, disponibilidad ni políticas.'],
    },
    {
      title: '8. Limitación de responsabilidad',
      paragraphs: [
        'En la medida permitida por la ley, Neural Code Lab no responde por daños indirectos, pérdida de datos, de ingresos o de cuentas derivados del uso del sitio o de sus descargas. Nada en estos términos limita los derechos que te reconozca la ley de protección al consumidor de tu país.',
      ],
    },
    {
      title: '9. Privacidad',
      paragraphs: ['El tratamiento de tus datos se explica en la Política de Privacidad y la Política de Cookies, que forman parte de estos términos.'],
    },
    {
      title: '10. Cambios y ley aplicable',
      paragraphs: [
        'Podemos actualizar estos términos; la versión vigente es la publicada aquí. Se rigen por las leyes de la República de Guatemala, sin perjuicio de las normas imperativas de protección al consumidor de tu país de residencia.',
      ],
    },
  ],
};

const termsEn: LegalDoc = {
  path: '/terms',
  title: 'Terms and Conditions',
  seoTitle: 'Terms and Conditions | Neural Code Lab',
  seoDescription: 'Terms of use for neuralcodelab.com: content, free downloads, affiliate links, AI-generated content and liability.',
  intro: 'By using neuralcodelab.com you agree to these terms. If you do not agree, please do not use the site.',
  sections: [
    {
      title: '1. Who we are',
      paragraphs: [`Neural Code Lab is an open-source software and technology project based in Guatemala City. Contact: ${LEGAL_CONTACT}.`],
    },
    {
      title: '2. Use of the site',
      list: [
        'You may browse, read and share the content for personal or professional purposes.',
        'You may not use the site for illegal activities, attempt to breach its security or overload it with automated traffic.',
      ],
    },
    {
      title: '3. Intellectual property and licences',
      paragraphs: ['Texts, design and the Neural Code Lab brand belong to us unless stated otherwise. Open-source projects, templates and downloadable workflows are governed by the licence stated in each one (for example, MIT). Third-party trademarks (Kie.ai, Higgsfield, Google, YouTube, TikTok and others) belong to their owners.'],
    },
    {
      title: '4. Free downloads and workflows',
      paragraphs: ['Templates and workflows are provided "as is", with no warranty of operation, results or income. The costs we publish (for example, cost per video) are references measured on a specific date: third-party prices may change. You are responsible for your credentials, the costs of the services you connect and complying with the policies of every platform where you publish.'],
    },
    {
      title: '5. Affiliate links',
      paragraphs: ['Some links to Kie.ai and Higgsfield are affiliate links and are labelled as such. If you sign up or buy through them, we may earn a commission at no extra cost to you. We only recommend tools we use in our own projects; the commercial relationship does not change the price you pay.'],
    },
    {
      title: '6. AI-generated content',
      paragraphs: ['Some images and examples on the site were generated with artificial intelligence for illustration. If you use our tools to publish synthetic content, you must label it as required by the platforms and applicable law.'],
    },
    {
      title: '7. External links',
      paragraphs: ['We do not control third-party sites we link to and are not responsible for their content, availability or policies.'],
    },
    {
      title: '8. Limitation of liability',
      paragraphs: ['To the extent permitted by law, Neural Code Lab is not liable for indirect damages, loss of data, income or accounts arising from the use of the site or its downloads. Nothing in these terms limits the rights granted to you by consumer protection law in your country.'],
    },
    {
      title: '9. Privacy',
      paragraphs: ['How we process your data is explained in the Privacy Policy and the Cookie Policy, which form part of these terms.'],
    },
    {
      title: '10. Changes and governing law',
      paragraphs: ['We may update these terms; the version published here is the one in force. They are governed by the laws of the Republic of Guatemala, without prejudice to mandatory consumer protection rules in your country of residence.'],
    },
  ],
};

export const legalDocs: Record<LegalDocId, Record<LegalLang, LegalDoc>> = {
  privacy: { es: privacyEs, en: privacyEn },
  cookies: { es: cookiesEs, en: cookiesEn },
  terms: { es: termsEs, en: termsEn },
};

// Textos cortos de la interfaz: pie de página y aviso de cookies.
export const legalUi = {
  es: {
    legal: 'Legal',
    privacy: 'Política de Privacidad',
    cookies: 'Política de Cookies',
    terms: 'Términos y Condiciones',
    cookieSettings: 'Configurar cookies',
    updated: 'Última actualización',
    consentTitle: 'Tu privacidad',
    consentText: 'Usamos cookies de Google Analytics para saber qué contenido te sirve, solo si las aceptas. Las necesarias (idioma y esta elección) se guardan siempre en tu navegador.',
    accept: 'Aceptar analítica',
    reject: 'Rechazar',
    more: 'Más información',
  },
  en: {
    legal: 'Legal',
    privacy: 'Privacy Policy',
    cookies: 'Cookie Policy',
    terms: 'Terms and Conditions',
    cookieSettings: 'Cookie settings',
    updated: 'Last updated',
    consentTitle: 'Your privacy',
    consentText: 'We use Google Analytics cookies to learn which content helps you, only if you accept them. Necessary storage (language and this choice) is always kept in your browser.',
    accept: 'Accept analytics',
    reject: 'Reject',
    more: 'Learn more',
  },
};

export function toLegalLang(lang: string): LegalLang {
  return lang === 'en' ? 'en' : 'es';
}
