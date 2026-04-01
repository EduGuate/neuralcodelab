export interface AISummary {
  key: string;
  en: string;
  es: string;
}

export const threeCXSummaries: AISummary[] = [
  {
    key: 'smallBusiness',
    es: 'Para pequeñas empresas, 3CX elimina la necesidad de centralitas físicas costosas. Con IA integrada, el sistema enruta automáticamente llamadas según disponibilidad, detecta intención del cliente con NLP y genera transcripciones automáticas de cada llamada. Resultado: atención profesional desde el día uno, con costos hasta un 80% menores que una solución tradicional.',
    en: 'For small businesses, 3CX eliminates the need for costly physical PBX hardware. With integrated AI, the system automatically routes calls based on availability, detects customer intent using NLP, and generates automatic transcriptions of every call. Result: professional service from day one, at up to 80% lower cost than traditional solutions.',
  },
  {
    key: 'remoteTeams',
    es: 'Los equipos remotos se benefician de la IA de presencia inteligente de 3CX, que detecta la disponibilidad real de cada agente y enruta llamadas de forma óptima. La transcripción automática con IA de cada reunión y llamada mantiene a todo el equipo sincronizado sin importar la zona horaria, reduciendo la carga administrativa hasta un 60%.',
    en: 'Remote teams benefit from 3CX\'s intelligent presence AI, which detects each agent\'s real availability and routes calls optimally. Automatic AI transcription of every meeting and call keeps the entire team synchronized regardless of time zone — reducing administrative overhead by up to 60%.',
  },
  {
    key: 'callCenter',
    es: 'En call centers, la IA de 3CX analiza el sentimiento del cliente en tiempo real durante la llamada, alertando al supervisor cuando detecta frustración o escalación. Los algoritmos de distribución inteligente (ACD con IA) minimizan tiempos de espera aprendiendo de patrones históricos, mientras que el análisis post-llamada automatizado identifica áreas de mejora para cada agente.',
    en: 'In call centers, 3CX\'s AI analyzes customer sentiment in real time during calls, alerting supervisors when it detects frustration or escalation. Intelligent distribution algorithms (AI-powered ACD) minimize wait times by learning from historical patterns, while automated post-call analysis identifies improvement areas for each agent.',
  },
  {
    key: 'entrepreneurs',
    es: 'Para emprendedores, 3CX ofrece un número profesional con IA desde el primer día sin inversión en hardware. El asistente virtual con IA atiende llamadas fuera del horario laboral, califica leads automáticamente y agenda citas en tu calendario, permitiéndote enfocarte en el negocio mientras la tecnología gestiona la comunicación inicial con clientes potenciales.',
    en: 'For entrepreneurs, 3CX provides a professional AI-powered number from day one with zero hardware investment. The AI virtual assistant handles after-hours calls, automatically qualifies leads, and schedules appointments in your calendar — letting you focus on the business while technology manages initial communication with potential customers.',
  },
];

export const missionSummaries: AISummary[] = [
  {
    key: 'digitalPlatforms',
    es: 'Construimos plataformas web y móviles a medida usando Next.js, React y TypeScript, adaptadas a las necesidades específicas de cada comunidad o institución. La IA personaliza la experiencia del usuario en tiempo real, desde recomendaciones de contenido hasta flujos de onboarding inteligentes que se ajustan al perfil cultural y lingüístico del usuario.',
    en: 'We build custom web and mobile platforms using Next.js, React, and TypeScript, tailored to each community or institution\'s specific needs. AI personalizes the user experience in real time — from content recommendations to intelligent onboarding flows that adapt to the user\'s cultural and linguistic profile.',
  },
  {
    key: 'techTraining',
    es: 'Impartimos formación tecnológica presencial y virtual en comunidades indígenas, con currículum adaptado al contexto local. Los sistemas de tutoría inteligente con IA detectan el ritmo de aprendizaje de cada participante, sugieren ejercicios personalizados y generan reportes de progreso para los instructores, maximizando el impacto con recursos limitados.',
    en: 'We deliver in-person and virtual tech training in indigenous communities with locally adapted curricula. AI-powered intelligent tutoring systems detect each participant\'s learning pace, suggest personalized exercises, and generate progress reports for instructors — maximizing impact with limited resources.',
  },
  {
    key: 'culturalPreservation',
    es: 'Utilizamos modelos de NLP entrenados en corpus mayas para transcribir, traducir y generar contenido en lenguas indígenas. La IA de reconocimiento de imágenes digitaliza textiles, cerámica y manuscritos con metadatos culturales automáticos, creando archivos digitales vivos que las propias comunidades pueden consultar y enriquecer.',
    en: 'We use NLP models trained on Mayan corpora to transcribe, translate, and generate content in indigenous languages. Image recognition AI digitizes textiles, ceramics, and manuscripts with automatic cultural metadata — creating living digital archives that communities can query and enrich themselves.',
  },
  {
    key: 'freeSoftware',
    es: 'Desarrollamos y publicamos todas nuestras herramientas bajo licencias open source (MIT, GPL), asegurando que cualquier comunidad en Guatemala pueda adoptarlas, modificarlas y mejorarlas sin costos de licencia. La IA open source (Ollama, LLaMA, Whisper) reemplaza soluciones propietarias costosas, democratizando el acceso a tecnología de punta.',
    en: 'We develop and publish all our tools under open source licenses (MIT, GPL), ensuring any community in Guatemala can adopt, modify, and improve them at zero licensing cost. Open source AI (Ollama, LLaMA, Whisper) replaces expensive proprietary solutions, democratizing access to cutting-edge technology.',
  },
];

export const aiSummaries: AISummary[] = [
  {
    key: 'agro',
    es: 'La IA en agroecología maya combina sensores IoT con modelos de aprendizaje automático entrenados en datos de cultivo ancestral. Algoritmos de visión computacional analizan el estado de los suelos y cultivos en tiempo real, mientras que modelos predictivos basados en calendarios mayas optimizan los ciclos de siembra. El resultado: rendimientos hasta un 40% mayores con un 30% menos de agua, respetando las prácticas tradicionales de los agricultores.',
    en: 'AI in Mayan agroecology combines IoT sensors with machine learning models trained on ancestral farming data. Computer vision algorithms analyze soil and crop health in real time, while predictive models based on Mayan calendars optimize planting cycles. The result: yields up to 40% higher with 30% less water, while honoring traditional farming practices.',
  },
  {
    key: 'edu',
    es: 'Los modelos de procesamiento de lenguaje natural (NLP) permiten crear plataformas educativas que reconocen, transcriben y generan contenido en lenguas mayas con precisión. La IA adapta el ritmo y estilo de aprendizaje a cada estudiante mediante algoritmos de aprendizaje adaptativo, detectando patrones de error y ajustando los ejercicios automáticamente. Esto digitaliza y preserva activamente idiomas en riesgo de extinción.',
    en: 'Natural language processing (NLP) models enable educational platforms that recognize, transcribe, and generate content in Mayan languages with high accuracy. AI adapts the learning pace and style to each student through adaptive learning algorithms, detecting error patterns and automatically adjusting exercises. This actively digitizes and preserves endangered languages.',
  },
  {
    key: 'ia',
    es: 'Los modelos de IA se pueden entrenar con cosmovisiones indígenas como datos estructurados, incorporando valores como la reciprocidad (Ayni), la comunidad (Us\'il) y el equilibrio (Equilibrio Cósmico) en los sistemas de toma de decisiones. Esto produce respuestas más contextualmente relevantes y culturalmente apropiadas para comunidades mayas, evitando sesgos occidentales en las recomendaciones automatizadas.',
    en: 'AI models can be trained with indigenous worldviews as structured data, embedding values like reciprocity (Ayni), community (Us\'il), and balance (Cosmic Balance) into decision-making systems. This produces more contextually relevant and culturally appropriate responses for Mayan communities, avoiding Western biases in automated recommendations.',
  },
  {
    key: 'preservation',
    es: 'La IA aplica reconocimiento óptico de caracteres (OCR) avanzado y modelos de restauración de imagen para digitalizar manuscritos y tejidos mayas deteriorados. Los modelos de clasificación organizan automáticamente miles de artefactos culturales, mientras que los sistemas RAG (Retrieval-Augmented Generation) permiten consultar ese conocimiento en lenguaje natural, creando una memoria colectiva digital accesible para las comunidades.',
    en: 'AI applies advanced optical character recognition (OCR) and image restoration models to digitize deteriorated Mayan manuscripts and textiles. Classification models automatically organize thousands of cultural artifacts, while RAG (Retrieval-Augmented Generation) systems allow querying that knowledge in natural language — creating an accessible digital collective memory for communities.',
  },
  {
    key: 'sustainable',
    es: 'Los algoritmos de optimización energética basados en IA gestionan microrredes eléctricas solares en comunidades rurales, prediciendo la demanda y distribuyendo energía de forma eficiente. Los modelos de compresión de redes neuronales (quantization, pruning) reducen los requisitos de hardware hasta un 80%, permitiendo correr IA localmente en dispositivos de bajo costo sin conexión a internet, ideal para zonas remotas de Guatemala.',
    en: 'AI-based energy optimization algorithms manage solar microgrids in rural communities, predicting demand and distributing power efficiently. Neural network compression models (quantization, pruning) reduce hardware requirements by up to 80%, enabling AI to run locally on low-cost devices without internet — ideal for remote areas of Guatemala.',
  },
  {
    key: 'dev',
    es: 'Los entornos de aprendizaje impulsados por IA ofrecen a jóvenes indígenas tutores virtuales disponibles 24/7 en su idioma nativo. Los sistemas de gamificación con IA adaptan los desafíos de programación al nivel de cada estudiante, detectan cuándo necesitan ayuda y sugieren recursos personalizados. Esto democratiza el acceso a la educación tecnológica sin requerir costosas infraestructuras educativas.',
    en: 'AI-powered learning environments give indigenous youth 24/7 virtual tutors in their native language. Gamification systems with AI adapt programming challenges to each student\'s level, detect when help is needed, and suggest personalized resources. This democratizes access to tech education without requiring costly educational infrastructure.',
  },
];
