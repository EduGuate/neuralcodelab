export interface Project {
  id: string; // Added ID for translation lookups
  title: string;
  descriptionKey: string; // Key for translations.json
  liveUrl: string;
  githubUrl: string;
  imageUrl: string;
  tags: string[];
  category: string;
}

export interface Category {
  id: string;
  nombreKey: string; // Key for translations.json
}

export const proyectos: Project[] = [
  {
    id: "cv",
    title: "My Professional CV",
    descriptionKey: "projects.items.cv.description",
    liveUrl: "https://mycven.neuralcodelab.com/",
    githubUrl: "https://github.com/devlewiso/CurriculumViateWebsite",
    imageUrl: "/img/cv-website.png",
    tags: ["Portfolio", "Professional", "Personal"],
    category: "business"
  },
  {
    id: "uml",
    title: "Neural UML Studio",
    descriptionKey: "projects.items.uml.description",
    liveUrl: "https://neuralumlstudio.neuralcodelab.com/",
    githubUrl: "https://github.com/devlewiso/neuralumlstudio",
    imageUrl: "/img/neural-uml-studio.png",
    tags: ["Tools", "AI", "UML", "Architecture"],
    category: "tools"
  },
  {
    id: "scraper",
    title: "NeuraL Scraper",
    descriptionKey: "projects.items.scraper.description",
    liveUrl: "https://scraper.neuralcodelab.com/",
    githubUrl: "https://github.com/devlewiso/neural_scraper",
    imageUrl: "/img/neural-scraper.png",
    tags: ["Tools", "Scraping", "Data Analysis", "Retro UI"],
    category: "tools"
  },
  {
    id: "ridemotohub",
    title: "RideMotoHub",
    descriptionKey: "projects.items.ridemotohub.description",
    liveUrl: "https://ridemotohub.com/",
    githubUrl: "https://github.com/devlewiso/ridemotohub",
    imageUrl: "/img/ridemotohub.png",
    tags: ["Community", "Astro", "Motorcycles", "Guatemala"],
    category: "lifestyle"
  },
  {
    id: "infra",
    title: "Infrastructure Lab",
    descriptionKey: "projects.items.infra.description",
    liveUrl: "https://infra.neuralcodelab.com/",
    githubUrl: "",
    imageUrl: "/img/infra-lab.png",
    tags: ["Infrastructure", "Homelab", "DevOps", "AI"],
    category: "infrastructure"
  },
  {
    id: "oryx-studio",
    title: "Oryx Studio",
    descriptionKey: "projects.items.oryx_studio.description",
    liveUrl: "https://oryx-studio.neuralcodelab.com/",
    githubUrl: "https://github.com/devlewiso/oryx-parser",
    imageUrl: "/img/oryx-studio.png",
    tags: ["Tools", "Compiler", "AI"],
    category: "tools"
  },
  {
    id: "oryx-parser",
    title: "Oryx Parser",
    descriptionKey: "projects.items.oryx_parser.description",
    liveUrl: "https://oryx-parser.neuralcodelab.com/",
    githubUrl: "https://oryx-parser.neuralcodelab.com/",
    imageUrl: "/img/oryx-parser.png",
    tags: ["Tools", "Compiler", "AI"],
    category: "tools"
  },
  {
    id: "ets",
    title: "ETS Steam Carpet Cleaning",
    descriptionKey: "projects.items.ets.description",
    liveUrl: "https://etsteamcarpetcleaning.com/",
    githubUrl: "https://github.com/devlewiso/etcc",
    imageUrl: "/img/ets-carpet.png",
    tags: ["Business", "Web Design"],
    category: "business"
  },
  {
    id: "data-tool",
    title: "Data Tool",
    descriptionKey: "projects.items.data_tool.description",
    liveUrl: "https://datasightool.neuralcodelab.com/",
    githubUrl: "https://github.com/devlewiso/DataSight",
    imageUrl: "/img/data-tool.png",
    tags: ["Tools", "Data Analysis"],
    category: "tools"
  },
  {
    id: "cleancarpro",
    title: "CleanCarPro GT Landing Page",
    descriptionKey: "projects.items.cleancarpro.description",
    liveUrl: "https://cleancarprogt.shop/",
    githubUrl: "",
    imageUrl: "/img/cleancarprogt.png",
    tags: ["Landing Page", "Business"],
    category: "business"
  },
  {
    id: "retrox",
    title: "RetroX Gaming Landing Page",
    descriptionKey: "projects.items.retrox.description",
    liveUrl: "https://retrox.netlify.app/",
    githubUrl: "",
    imageUrl: "/img/retrox-gaming.png",
    tags: ["Landing Page", "Entertainment"],
    category: "entertainment"
  },
  {
    id: "skatevibes",
    title: "SkateVibes Landing Page",
    descriptionKey: "projects.items.skatevibes.description",
    liveUrl: "https://skatevibes.netlify.app/",
    githubUrl: "",
    imageUrl: "/img/skatevibes.png",
    tags: ["Landing Page", "Lifestyle"],
    category: "lifestyle"
  },
  {
    id: "sport",
    title: "Sport Landing Page",
    descriptionKey: "projects.items.sport.description",
    liveUrl: "https://eclectic-jalebi-ffb392.netlify.app/",
    githubUrl: "",
    imageUrl: "/img/sport-landing.png",
    tags: ["Landing Page", "Lifestyle"],
    category: "lifestyle"
  },
  {
    id: "techpro",
    title: "TechProFree Landing Page",
    descriptionKey: "projects.items.techpro.description",
    liveUrl: "https://techprofree.netlify.app/",
    githubUrl: "",
    imageUrl: "/img/techprofree.png",
    tags: ["Landing Page", "Tools"],
    category: "tools"
  },
  {
    id: "slimvita",
    title: "SlimVita",
    descriptionKey: "projects.items.slimvita.description",
    liveUrl: "https://slimvita.netlify.app/",
    githubUrl: "",
    imageUrl: "/img/slimvita.png",
    tags: ["Health", "Lifestyle"],
    category: "lifestyle"
  },
  {
    id: "learn-mayan",
    title: "Learn Mayan Languages",
    descriptionKey: "projects.items.learn_mayan.description",
    liveUrl: "https://phenomenal-gnome-b602ac.netlify.app/",
    githubUrl: "",
    imageUrl: "/img/learn-mayan.png",
    tags: ["Education", "Learning"],
    category: "education"
  },
  {
    id: "moonpug",
    title: "MoonPug Token",
    descriptionKey: "projects.items.moonpug.description",
    liveUrl: "https://beautiful-croissant-631a28.netlify.app/",
    githubUrl: "",
    imageUrl: "/img/moonpug-token.png",
    tags: ["Crypto", "Blockchain"],
    category: "tools"
  },
  {
    id: "movies",
    title: "Movies Searcher",
    descriptionKey: "projects.items.movies.description",
    liveUrl: "",
    githubUrl: "",
    imageUrl: "/img/movies-searcher.png",
    tags: ["Landing Page", "Events"],
    category: "business"
  },
  {
    id: "water",
    title: "Water Landing Page",
    descriptionKey: "projects.items.water.description",
    liveUrl: "https://delicate-crisp-c5f8e3.netlify.app/",
    githubUrl: "",
    imageUrl: "/img/water-landing.png",
    tags: ["Landing Page", "Lifestyle"],
    category: "lifestyle"
  },
  {
    id: "wedding",
    title: "Wedding Assistance Landing Page",
    descriptionKey: "projects.items.wedding.description",
    liveUrl: "https://classy-donut-0c9792.netlify.app/",
    githubUrl: "",
    imageUrl: "/img/wedding-landing.png",
    tags: ["Landing Page", "Events"],
    category: "lifestyle"
  },
  {
    id: "random-yt",
    title: "Random YouTube Landing Page",
    descriptionKey: "projects.items.random_yt.description",
    liveUrl: "https://randomyd.netlify.app/",
    githubUrl: "",
    imageUrl: "/img/random-youtube.png",
    tags: ["Entertainment", "YouTube"],
    category: "entertainment"
  },
  {
    id: "img-webp",
    title: "Image to WebP",
    descriptionKey: "projects.items.img_webp.description",
    liveUrl: "https://pixelflow.neuralcodelab.com/",
    githubUrl: "",
    imageUrl: "/img/image-to-webp.png",
    tags: ["Tools", "Image Processing"],
    category: "tools"
  },
  {
    id: "life-path",
    title: "Life Path Number Calculator",
    descriptionKey: "projects.items.life_path.description",
    liveUrl: "https://numerodevida.netlify.app/",
    githubUrl: "",
    imageUrl: "/img/life-path-calculator.png",
    tags: ["Tools", "Lifestyle"],
    category: "lifestyle"
  },
  {
    id: "healthtrack",
    title: "HealthTrack Website",
    descriptionKey: "projects.items.healthtrack.description",
    liveUrl: "https://healthtrackfit.neuralcodelab.com/",
    githubUrl: "",
    imageUrl: "/img/healthtrack.png",
    tags: ["Health", "Fitness"],
    category: "lifestyle"
  },
  {
    id: "astromaya",
    title: "AstroMaya Mayan Languages",
    descriptionKey: "projects.items.astromaya.description",
    liveUrl: "https://astromaya.neuralcodelab.com/",
    githubUrl: "https://github.com/neuralcodelab/astromaya",
    imageUrl: "/img/astromaya.png",
    tags: ["Education", "Culture"],
    category: "education"
  },
  {
    id: "kidols5",
    title: "K-Idols Kids Learning",
    descriptionKey: "projects.items.kidols5.description",
    liveUrl: "https://k-idols.neuralcodelab.com/",
    githubUrl: "",
    imageUrl: "/img/k-idols-5.png",
    tags: ["Education", "Kids"],
    category: "education"
  },
  {
    id: "kidols6",
    title: "K-Idols Warriors (6 Years)",
    descriptionKey: "projects.items.kidols6.description",
    liveUrl: "https://k-idols6.neuralcodelab.com/",
    githubUrl: "",
    imageUrl: "/img/k-idols-6.png",
    tags: ["Education", "Kids"],
    category: "education"
  },
  {
    id: "ksaber7",
    title: "K-Saber Maya Guardians (7 Years)",
    descriptionKey: "projects.items.ksaber7.description",
    liveUrl: "https://k-idols7.neuralcodelab.com/",
    githubUrl: "",
    imageUrl: "/img/k-saber-7.png",
    tags: ["Education", "Kids", "Culture"],
    category: "education"
  },
  {
    id: "ksaber8",
    title: "K-Saber Maya Guardians (8 Years)",
    descriptionKey: "projects.items.ksaber8.description",
    liveUrl: "https://k-idols8.neuralcodelab.com/",
    githubUrl: "",
    imageUrl: "/img/k-saber-8.png",
    tags: ["Education", "Kids", "Culture"],
    category: "education"
  },
  {
    id: "camilakids",
    title: "CamilaKids",
    descriptionKey: "projects.items.camilakids.description",
    liveUrl: "https://camilakids.netlify.app/",
    githubUrl: "",
    imageUrl: "/img/camilakids.png",
    tags: ["Education", "Kids", "Learning"],
    category: "education"
  },
  {
    id: "load-balancer",
    title: "Load Balancer Simulator",
    descriptionKey: "projects.items.load_balancer.description",
    liveUrl: "https://simuladordebalanceadordecarga.neuralcodelab.com/",
    githubUrl: "",
    imageUrl: "/img/load-balancer.png",
    tags: ["Tools", "Simulation"],
    category: "tools"
  },
  {
    id: "rabbitmq",
    title: "Interactive RabbitMQ (AMQP) vs. Kafka Simulator",
    descriptionKey: "projects.items.rabbitmq.description",
    liveUrl: "https://simuladorkafka.neuralcodelab.com/",
    githubUrl: "https://github.com/devlewiso/RabbitmqSimulator",
    imageUrl: "/img/rabbitmq-kafka.png",
    tags: ["Tools", "Simulation", "Messaging"],
    category: "tools"
  },
  {
    id: "kafka",
    title: "Kafka Simulator",
    descriptionKey: "projects.items.kafka.description",
    liveUrl: "https://simuladorkafka.neuralcodelab.com/",
    githubUrl: "https://github.com/devlewiso/kafkaSimulator",
    imageUrl: "/img/kafka-simulator.png",
    tags: ["Tools", "Simulation", "Messaging"],
    category: "tools"
  },
  {
    id: "ri-nim",
    title: "Ri Nïm Ch'ab'äl Q'aq'",
    descriptionKey: "projects.items.ri_nim.description",
    liveUrl: "https://ri-n-m-ch-ab-l-q-aq.neuralcodelab.com/",
    githubUrl: "https://github.com/devlewiso/Ri-N-m-Ch-ab-l-Q-aq-",
    imageUrl: "/img/ri-nim.png",
    tags: ["Education", "Culture", "Mayan"],
    category: "education"
  },
  {
    id: "magic-machine",
    title: "The Magic Creation Machine",
    descriptionKey: "projects.items.magic_machine.description",
    liveUrl: "https://lamaquinadecreacionmagica.neuralcodelab.com/",
    githubUrl: "https://github.com/devlewiso/La-M-quina-de-Creaci-n-M-gica",
    imageUrl: "/img/magic-machine.png",
    tags: ["Tools", "Creative", "AI"],
    category: "tools"
  }
];

export const categorias: Category[] = [
  { id: "all", nombreKey: "projects.categories.all" },
  { id: "business", nombreKey: "projects.categories.business" },
  { id: "tools", nombreKey: "projects.categories.tools" },
  { id: "infrastructure", nombreKey: "projects.categories.infrastructure" },
  { id: "entertainment", nombreKey: "projects.categories.entertainment" },
  { id: "lifestyle", nombreKey: "projects.categories.lifestyle" },
  { id: "education", nombreKey: "projects.categories.education" }
];
