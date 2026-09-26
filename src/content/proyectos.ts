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
    githubUrl: "https://github.com/devlewiso/infralab",
    imageUrl: "/img/infra-lab.png",
    tags: ["Infrastructure", "Homelab", "DevOps", "AI"],
    category: "infrastructure"
  },
  {
    id: "oryx-studio",
    title: "Oryx Studio",
    descriptionKey: "projects.items.oryx_studio.description",
    liveUrl: "https://oryx-studio.neuralcodelab.com/",
    githubUrl: "https://github.com/devlewiso/oryx-studio",
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
    githubUrl: "https://github.com/devlewiso/cleancarprogt",
    imageUrl: "/img/cleancarprogt.png",
    tags: ["Landing Page", "Business"],
    category: "business"
  },
  {
    id: "retrox",
    title: "RetroX Gaming Landing Page",
    descriptionKey: "projects.items.retrox.description",
    liveUrl: "https://retrox.netlify.app/",
    githubUrl: "https://github.com/devlewiso/retrox",
    imageUrl: "/img/retrox-gaming.png",
    tags: ["Landing Page", "Entertainment"],
    category: "entertainment"
  },
  {
    id: "skatevibes",
    title: "SkateVibes Landing Page",
    descriptionKey: "projects.items.skatevibes.description",
    liveUrl: "https://skatevibes.netlify.app/",
    githubUrl: "https://github.com/devlewiso/SkateVibe",
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
    githubUrl: "https://github.com/devlewiso/freecomputerTheme",
    imageUrl: "/img/techprofree.png",
    tags: ["Landing Page", "Tools"],
    category: "tools"
  },
  {
    id: "slimvita",
    title: "SlimVita",
    descriptionKey: "projects.items.slimvita.description",
    liveUrl: "https://slimvita.netlify.app/",
    githubUrl: "https://github.com/devlewiso/slimvita",
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
    githubUrl: "https://github.com/devlewiso/cinehub",
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
    githubUrl: "https://github.com/devlewiso/yt-random-comment",
    imageUrl: "/img/random-youtube.png",
    tags: ["Entertainment", "YouTube"],
    category: "entertainment"
  },
  {
    id: "img-webp",
    title: "Image to WebP",
    descriptionKey: "projects.items.img_webp.description",
    liveUrl: "https://pixelflow.neuralcodelab.com/",
    githubUrl: "https://github.com/devlewiso/PixelFlow",
    imageUrl: "/img/image-to-webp.png",
    tags: ["Tools", "Image Processing"],
    category: "tools"
  },
  {
    id: "life-path",
    title: "Life Path Number Calculator",
    descriptionKey: "projects.items.life_path.description",
    liveUrl: "https://numerodevida.netlify.app/",
    githubUrl: "https://github.com/devlewiso/numerodevida",
    imageUrl: "/img/life-path-calculator.png",
    tags: ["Tools", "Lifestyle"],
    category: "lifestyle"
  },
  {
    id: "healthtrack",
    title: "HealthTrack Website",
    descriptionKey: "projects.items.healthtrack.description",
    liveUrl: "https://healthtrackfit.neuralcodelab.com/",
    githubUrl: "https://github.com/devlewiso/healthtrack",
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
    githubUrl: "https://github.com/devlewiso/K-IDOLS-WARRIORS",
    imageUrl: "/img/k-idols-5.png",
    tags: ["Education", "Kids"],
    category: "education"
  },
  {
    id: "kidols6",
    title: "K-Idols Warriors (6 Years)",
    descriptionKey: "projects.items.kidols6.description",
    liveUrl: "https://k-idols6.neuralcodelab.com/",
    githubUrl: "https://github.com/devlewiso/k-idols6",
    imageUrl: "/img/k-idols-6.png",
    tags: ["Education", "Kids"],
    category: "education"
  },
  {
    id: "ksaber7",
    title: "K-Saber Maya Guardians (7 Years)",
    descriptionKey: "projects.items.ksaber7.description",
    liveUrl: "https://k-idols7.neuralcodelab.com/",
    githubUrl: "https://github.com/devlewiso/k-idols7",
    imageUrl: "/img/k-saber-7.png",
    tags: ["Education", "Kids", "Culture"],
    category: "education"
  },
  {
    id: "ksaber8",
    title: "K-Saber Maya Guardians (8 Years)",
    descriptionKey: "projects.items.ksaber8.description",
    liveUrl: "https://k-idols8.neuralcodelab.com/",
    githubUrl: "https://github.com/devlewiso/k-idols8",
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
    githubUrl: "https://github.com/devlewiso/simulador-de-balanceador-de-carga",
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
  },
  {
    id: "cloudnest-template",
    title: "CloudNest — Free Hosting Landing Page Template",
    descriptionKey: "projects.items.cloudnest_template.description",
    liveUrl: "https://eduguate.github.io/CloudNestTemplate/",
    githubUrl: "https://github.com/EduGuate/CloudNestTemplate",
    imageUrl: "/img/cloudnest-template.png",
    tags: ["Free Template", "Landing Page", "GSAP"],
    category: "templates"
  },
  {
    id: "ayudagt",
    title: "Ayuda Niños GT",
    descriptionKey: "projects.items.ayudagt.description",
    liveUrl: "",
    githubUrl: "https://github.com/EduGuate/ayudagt",
    imageUrl: "",
    tags: ["Education", "Kids", "Guatemala", "Safety"],
    category: "education"
  },
  {
    id: "empleosdelatlantico",
    title: "Empleos del Atlántico",
    descriptionKey: "projects.items.empleosdelatlantico.description",
    liveUrl: "",
    githubUrl: "https://github.com/EduGuate/empleosdelatlantico",
    imageUrl: "",
    tags: ["Jobs", "Community", "Next.js"],
    category: "business"
  },
  {
    id: "delatlanticoempleos",
    title: "Empleos del Atlántico (MVP)",
    descriptionKey: "projects.items.delatlanticoempleos.description",
    liveUrl: "",
    githubUrl: "https://github.com/devlewiso/delatlanticoempleos",
    imageUrl: "",
    tags: ["Jobs", "Community", "MVP"],
    category: "business"
  },
  {
    id: "empleosdelatlantico-v1",
    title: "Empleos del Atlántico (v1)",
    descriptionKey: "projects.items.empleosdelatlantico_v1.description",
    liveUrl: "",
    githubUrl: "https://github.com/devlewiso/empleosdelatlantico",
    imageUrl: "",
    tags: ["Jobs", "Vite", "React"],
    category: "business"
  },
  {
    id: "ecommerce-delatlantico",
    title: "Del Atlántico Ecommerce",
    descriptionKey: "projects.items.ecommerce_delatlantico.description",
    liveUrl: "",
    githubUrl: "https://github.com/devlewiso/ecommerce-delatlantico",
    imageUrl: "",
    tags: ["Ecommerce", "Next.js", "Supabase"],
    category: "business"
  },
  {
    id: "agentesgt",
    title: "Agentes GT",
    descriptionKey: "projects.items.agentesgt.description",
    liveUrl: "",
    githubUrl: "https://github.com/EduGuate/agentesgt",
    imageUrl: "",
    tags: ["AI", "Agents", "Next.js"],
    category: "tools"
  },
  {
    id: "agentiq",
    title: "AgentIQ",
    descriptionKey: "projects.items.agentiq.description",
    liveUrl: "",
    githubUrl: "https://github.com/devlewiso/agentiq",
    imageUrl: "",
    tags: ["AI", "Call Center", "Next.js"],
    category: "tools"
  },
  {
    id: "hermes-dashboard",
    title: "Hermes Dashboard",
    descriptionKey: "projects.items.hermes_dashboard.description",
    liveUrl: "",
    githubUrl: "https://github.com/devlewiso/hermes-dashboard",
    imageUrl: "",
    tags: ["Dashboard", "AI Agents", "Next.js"],
    category: "tools"
  },
  {
    id: "sinapsis-explorer",
    title: "Sinapsis Explorer",
    descriptionKey: "projects.items.sinapsis_explorer.description",
    liveUrl: "",
    githubUrl: "https://github.com/devlewiso/sinapsis-explorer",
    imageUrl: "",
    tags: ["Education", "Science", "Interactive"],
    category: "education"
  },
  {
    id: "vertex-marketing",
    title: "Vertex Marketing",
    descriptionKey: "projects.items.vertex_marketing.description",
    liveUrl: "",
    githubUrl: "https://github.com/devlewiso/vertex-marketing",
    imageUrl: "",
    tags: ["Marketing", "Next.js"],
    category: "business"
  },
  {
    id: "auralink",
    title: "AuraLink AI Security",
    descriptionKey: "projects.items.auralink.description",
    liveUrl: "",
    githubUrl: "https://github.com/devlewiso/auralink.live",
    imageUrl: "",
    tags: ["Security", "AI", "Astro"],
    category: "business"
  },
  {
    id: "e46-heritage",
    title: "E46 Heritage",
    descriptionKey: "projects.items.e46_heritage.description",
    liveUrl: "",
    githubUrl: "https://github.com/devlewiso/E46-Heritage",
    imageUrl: "",
    tags: ["Cars", "BMW", "Community"],
    category: "lifestyle"
  },
  {
    id: "irancorner",
    title: "Iran's Corner",
    descriptionKey: "projects.items.irancorner.description",
    liveUrl: "",
    githubUrl: "https://github.com/devlewiso/irancorner",
    imageUrl: "",
    tags: ["Personal", "Next.js"],
    category: "business"
  },
  {
    id: "neuralcodelab-blog",
    title: "Neural Code Lab Blog",
    descriptionKey: "projects.items.neuralcodelab_blog.description",
    liveUrl: "",
    githubUrl: "https://github.com/devlewiso/blog_neuralcodelab.com",
    imageUrl: "",
    tags: ["Blog", "Astro"],
    category: "business"
  },
  {
    id: "cargolegends",
    title: "Cargo Legends RP",
    descriptionKey: "projects.items.cargolegends.description",
    liveUrl: "",
    githubUrl: "https://github.com/devlewiso/cargolegendsRP",
    imageUrl: "",
    tags: ["Gaming", "Astro"],
    category: "entertainment"
  },
  {
    id: "microsaas-analisis",
    title: "MicroSaaS Análisis",
    descriptionKey: "projects.items.microsaas_analisis.description",
    liveUrl: "",
    githubUrl: "https://github.com/devlewiso/microsaasAnalisis",
    imageUrl: "",
    tags: ["SaaS", "Astro", "Analysis"],
    category: "business"
  },
  {
    id: "plasticycle",
    title: "PlastiCycle",
    descriptionKey: "projects.items.plasticycle.description",
    liveUrl: "",
    githubUrl: "https://github.com/devlewiso/PlastiCycle",
    imageUrl: "",
    tags: ["Recycling", "Guatemala", "Next.js"],
    category: "business"
  },
  {
    id: "miel-pura",
    title: "Miel Pura de Abejas",
    descriptionKey: "projects.items.miel_pura.description",
    liveUrl: "",
    githubUrl: "https://github.com/devlewiso/Miel-Pura-de-Abejas",
    imageUrl: "",
    tags: ["Landing Page", "Food"],
    category: "business"
  },
  {
    id: "coffee",
    title: "Aromatic Coffee",
    descriptionKey: "projects.items.coffee.description",
    liveUrl: "",
    githubUrl: "https://github.com/devlewiso/coffe_dialogflow",
    imageUrl: "",
    tags: ["Landing Page", "Coffee", "Dialogflow"],
    category: "business"
  },
  {
    id: "rentauto",
    title: "Sistema de Alquiler de Vehículos",
    descriptionKey: "projects.items.rentauto.description",
    liveUrl: "",
    githubUrl: "https://github.com/devlewiso/rentauto-landingpage",
    imageUrl: "",
    tags: ["Landing Page", "Cars", "Rental"],
    category: "business"
  },
  {
    id: "cafeantigua",
    title: "Café Antigua",
    descriptionKey: "projects.items.cafeantigua.description",
    liveUrl: "",
    githubUrl: "https://github.com/devlewiso/Cafeantigua",
    imageUrl: "",
    tags: ["Landing Page", "Coffee", "Guatemala"],
    category: "business"
  },
  {
    id: "wavestoregt",
    title: "WaveStore GT",
    descriptionKey: "projects.items.wavestoregt.description",
    liveUrl: "",
    githubUrl: "https://github.com/devlewiso/WavestoreGT",
    imageUrl: "",
    tags: ["Store", "Guatemala"],
    category: "business"
  },
  {
    id: "cine-hub",
    title: "CineHub",
    descriptionKey: "projects.items.cine_hub.description",
    liveUrl: "",
    githubUrl: "https://github.com/devlewiso/cinehub",
    imageUrl: "",
    tags: ["Movies", "Search", "React"],
    category: "entertainment"
  },
  {
    id: "music-player",
    title: "Music Player",
    descriptionKey: "projects.items.music_player.description",
    liveUrl: "",
    githubUrl: "https://github.com/devlewiso/music-player",
    imageUrl: "",
    tags: ["Music", "React"],
    category: "entertainment"
  },
  {
    id: "futuristic-audio-player",
    title: "Futuristic Audio Player",
    descriptionKey: "projects.items.futuristic_audio_player.description",
    liveUrl: "",
    githubUrl: "https://github.com/devlewiso/futuristic-audio-player",
    imageUrl: "",
    tags: ["Audio", "Visualizer"],
    category: "entertainment"
  },
  {
    id: "itzamma",
    title: "Itzamma",
    descriptionKey: "projects.items.itzamma.description",
    liveUrl: "https://itzamma.vercel.app",
    githubUrl: "https://github.com/devlewiso/itzamma",
    imageUrl: "",
    tags: ["Next.js", "Vercel"],
    category: "business"
  },
  {
    id: "imgsocial",
    title: "ImgSocial",
    descriptionKey: "projects.items.imgsocial.description",
    liveUrl: "",
    githubUrl: "https://github.com/devlewiso/ImgSocial",
    imageUrl: "",
    tags: ["Images", "Social", "React"],
    category: "tools"
  },
  {
    id: "webradar",
    title: "WebRadar",
    descriptionKey: "projects.items.webradar.description",
    liveUrl: "",
    githubUrl: "https://github.com/devlewiso/WebRadar",
    imageUrl: "",
    tags: ["Dashboard", "Monitoring"],
    category: "tools"
  },
  {
    id: "image-to-webp",
    title: "Conversor Futurista de Imagen a WebP",
    descriptionKey: "projects.items.image_to_webp.description",
    liveUrl: "",
    githubUrl: "https://github.com/devlewiso/img-webp",
    imageUrl: "",
    tags: ["Images", "WebP"],
    category: "tools"
  },
  {
    id: "imagestowebp",
    title: "Conversor de Imágenes a WebP",
    descriptionKey: "projects.items.imagestowebp.description",
    liveUrl: "",
    githubUrl: "https://github.com/devlewiso/imagestowebp",
    imageUrl: "",
    tags: ["Images", "WebP", "Python"],
    category: "tools"
  },
  {
    id: "timer-tracker",
    title: "Time Tracker",
    descriptionKey: "projects.items.timer_tracker.description",
    liveUrl: "",
    githubUrl: "https://github.com/devlewiso/timer-tracker",
    imageUrl: "",
    tags: ["Productivity", "Time"],
    category: "tools"
  },
  {
    id: "tasker-manager",
    title: "Task Manager Pro",
    descriptionKey: "projects.items.tasker_manager.description",
    liveUrl: "",
    githubUrl: "https://github.com/devlewiso/tasker-manager",
    imageUrl: "",
    tags: ["Productivity", "Tasks"],
    category: "tools"
  },
  {
    id: "ccai-ops-hub",
    title: "CCAI Ops Hub",
    descriptionKey: "projects.items.ccai_ops_hub.description",
    liveUrl: "",
    githubUrl: "https://github.com/devlewiso/Todo_ProjectName",
    imageUrl: "",
    tags: ["Task Manager", "Contact Center"],
    category: "tools"
  },
  {
    id: "excel-tool",
    title: "Excel File Visualizer",
    descriptionKey: "projects.items.excel_tool.description",
    liveUrl: "",
    githubUrl: "https://github.com/devlewiso/excel-tool",
    imageUrl: "",
    tags: ["Excel", "Data"],
    category: "tools"
  },
  {
    id: "yt-downloader",
    title: "Descargador de Videos de YouTube",
    descriptionKey: "projects.items.yt_downloader.description",
    liveUrl: "",
    githubUrl: "https://github.com/devlewiso/yt-downloader",
    imageUrl: "",
    tags: ["YouTube", "Video"],
    category: "tools"
  },
  {
    id: "expense-tracker",
    title: "Expense Tracker Dashboard",
    descriptionKey: "projects.items.expense_tracker.description",
    liveUrl: "",
    githubUrl: "https://github.com/devlewiso/ExpensTracerDash",
    imageUrl: "",
    tags: ["Finance", "Dashboard", "Python"],
    category: "tools"
  },
  {
    id: "cajero-atm",
    title: "Cajero Automático Seguro",
    descriptionKey: "projects.items.cajero_atm.description",
    liveUrl: "",
    githubUrl: "https://github.com/devlewiso/cajero_atm",
    imageUrl: "",
    tags: ["Python", "Simulation"],
    category: "tools"
  },
  {
    id: "face-detection",
    title: "Detección de Rostros en Tiempo Real",
    descriptionKey: "projects.items.face_detection.description",
    liveUrl: "",
    githubUrl: "https://github.com/devlewiso/Facedetecv1.2",
    imageUrl: "",
    tags: ["Computer Vision", "Python"],
    category: "tools"
  },
  {
    id: "image-metadata-scanner",
    title: "Escáner de Metadatos de Imágenes",
    descriptionKey: "projects.items.image_metadata_scanner.description",
    liveUrl: "",
    githubUrl: "https://github.com/devlewiso/Esc-ner-de-Metadatos-de-Im-genes",
    imageUrl: "",
    tags: ["Images", "Metadata", "Python"],
    category: "tools"
  },
  {
    id: "wordpress-vuln",
    title: "WordpresVuln",
    descriptionKey: "projects.items.wordpress_vuln.description",
    liveUrl: "",
    githubUrl: "https://github.com/devlewiso/WordpresVuln",
    imageUrl: "",
    tags: ["Security", "WordPress", "Python"],
    category: "tools"
  },
  {
    id: "wordpress-scanner-visual",
    title: "WordPress Vulnerability Scanner",
    descriptionKey: "projects.items.wordpress_scanner_visual.description",
    liveUrl: "",
    githubUrl: "https://github.com/devlewiso/WordpresScannerVulnVisual",
    imageUrl: "",
    tags: ["Security", "WordPress", "Python"],
    category: "tools"
  },
  {
    id: "web-service-scanner",
    title: "Web Service Vulnerability Scanner",
    descriptionKey: "projects.items.web_service_scanner.description",
    liveUrl: "",
    githubUrl: "https://github.com/devlewiso/Web-Service-Vulnerability-Scanner",
    imageUrl: "",
    tags: ["Security", "Web", "Python"],
    category: "tools"
  },
  {
    id: "pest-simulation",
    title: "Simulación de Plagas en Cultivos",
    descriptionKey: "projects.items.pest_simulation.description",
    liveUrl: "",
    githubUrl: "https://github.com/devlewiso/Simulaci-n-de-Plagas-en-Cultivos",
    imageUrl: "",
    tags: ["Agriculture", "Simulation", "Python"],
    category: "education"
  },
  {
    id: "agricalculo",
    title: "AgriCálculo",
    descriptionKey: "projects.items.agricalculo.description",
    liveUrl: "",
    githubUrl: "https://github.com/devlewiso/AgriC-lculo-",
    imageUrl: "",
    tags: ["Agriculture", "Python"],
    category: "tools"
  },
  {
    id: "iso-adventure",
    title: "ISO Adventure",
    descriptionKey: "projects.items.iso_adventure.description",
    liveUrl: "",
    githubUrl: "https://github.com/devlewiso/isointeractiva",
    imageUrl: "",
    tags: ["Education", "ISO", "Interactive"],
    category: "education"
  },
  {
    id: "rcp-paramedico",
    title: "Entrenamiento RCP de Paramédico",
    descriptionKey: "projects.items.rcp_paramedico.description",
    liveUrl: "",
    githubUrl: "https://github.com/devlewiso/Entrenamiento-RCP-de-Param-dico",
    imageUrl: "",
    tags: ["Education", "Health", "Training"],
    category: "education"
  },
  {
    id: "compatibilidad",
    title: "Dúo · Calculadora de Compatibilidad de Nombres",
    descriptionKey: "projects.items.compatibilidad.description",
    liveUrl: "https://devlewiso.github.io/Calculadora_Compatibilidad/",
    githubUrl: "https://github.com/devlewiso/Calculadora_Compatibilidad",
    imageUrl: "/img/calculadora-compatibilidad-duo.png",
    tags: ["Calculator", "Numerology", "Compatibility"],
    category: "lifestyle"
  },
  {
    id: "numerologia",
    title: "Astral · Calculadora Numerológica de Nombres",
    descriptionKey: "projects.items.numerologia.description",
    liveUrl: "https://devlewiso.github.io/CalculadoraNumerologicaAstral/",
    githubUrl: "https://github.com/devlewiso/CalculadoraNumerologicaAstral",
    imageUrl: "/img/calculadora-numerologica-astral.png",
    tags: ["Calculator", "Numerology", "Astral"],
    category: "lifestyle"
  },
  {
    id: "homelab-dashboard",
    title: "HomeLab Dashboard",
    descriptionKey: "projects.items.homelab_dashboard.description",
    liveUrl: "https://devlewiso.github.io/homelabdashboard/",
    githubUrl: "https://github.com/devlewiso/homelabdashboard",
    imageUrl: "/img/homelab-dashboard.png",
    tags: ["Free Template", "Homelab", "Dashboard"],
    category: "infrastructure"
  },
  {
    id: "homelab-architecture",
    title: "Homelab Architecture",
    descriptionKey: "projects.items.homelab_architecture.description",
    liveUrl: "https://devlewiso.github.io/homelab-architecture/",
    githubUrl: "https://github.com/devlewiso/homelab-architecture",
    imageUrl: "/img/homelab-architecture.png",
    tags: ["Free Template", "Homelab", "Mermaid", "Architecture"],
    category: "infrastructure"
  },
  {
    id: "g923-fix",
    title: "Logitech G923 Xbox en Linux",
    descriptionKey: "projects.items.g923_fix.description",
    liveUrl: "",
    githubUrl: "https://github.com/devlewiso/g923-xbox-linux-fix",
    imageUrl: "",
    tags: ["Linux", "Gaming", "Shell"],
    category: "infrastructure"
  },
  {
    id: "g923-fix-linux",
    title: "G923 Fix Linux",
    descriptionKey: "projects.items.g923_fix_linux.description",
    liveUrl: "",
    githubUrl: "https://github.com/devlewiso/g923-fix-linux",
    imageUrl: "",
    tags: ["Linux", "Gaming", "Shell"],
    category: "infrastructure"
  },
  {
    id: "personal-assistant-landing",
    title: "Aria — Personal Assistant Landing",
    descriptionKey: "projects.items.personal_assistant_landing.description",
    liveUrl: "https://eduguate.github.io/LandingPage_PersonalAssistant/",
    githubUrl: "https://github.com/EduGuate/LandingPage_PersonalAssistant",
    imageUrl: "/img/personal-assistant-landing.png",
    tags: ["Free Template", "Landing Page", "AI"],
    category: "business"
  },
  {
    id: "perfil-updated",
    title: "Mi Perfil",
    descriptionKey: "projects.items.perfil_updated.description",
    liveUrl: "https://eduguate.github.io/perfilUpdated/",
    githubUrl: "https://github.com/EduGuate/perfilUpdated",
    imageUrl: "/img/perfil-updated.png",
    tags: ["Free Template", "Portfolio", "Personal"],
    category: "business"
  },
  {
    id: "irans-corner-dashboard",
    title: "Iran's Corner Dashboard",
    descriptionKey: "projects.items.irans_corner_dashboard.description",
    liveUrl: "https://eduguate.github.io/iranscornerdashboard/",
    githubUrl: "https://github.com/EduGuate/iranscornerdashboard",
    imageUrl: "/img/irans-corner-dashboard.png",
    tags: ["Free Template", "Dashboard", "Tools"],
    category: "tools"
  },
  {
    id: "nextgentechpro",
    title: "NextGen TechPro",
    descriptionKey: "projects.items.nextgentechpro.description",
    liveUrl: "https://eduguate.github.io/nextgentechpro/",
    githubUrl: "https://github.com/EduGuate/nextgentechpro",
    imageUrl: "/img/nextgentechpro.png",
    tags: ["Free Template", "Bootstrap", "Tech"],
    category: "templates"
  },
  {
    id: "servicios-tecnologicos",
    title: "Servicios Tecnológicos Globales",
    descriptionKey: "projects.items.servicios_tecnologicos.description",
    liveUrl: "https://eduguate.github.io/Servicios-Tecnol-gicos/",
    githubUrl: "https://github.com/EduGuate/Servicios-Tecnol-gicos",
    imageUrl: "/img/servicios-tecnologicos.png",
    tags: ["Free Template", "Bootstrap", "IT"],
    category: "templates"
  },
  {
    id: "cleaning-theme",
    title: "PuraFibra — Limpieza de Alfombras",
    descriptionKey: "projects.items.cleaning_theme.description",
    liveUrl: "https://eduguate.github.io/CleaningTema/",
    githubUrl: "https://github.com/EduGuate/CleaningTema",
    imageUrl: "/img/cleaning-theme.png",
    tags: ["Free Template", "Bootstrap", "Cleaning"],
    category: "templates"
  },
  {
    id: "hosting-theme",
    title: "Órbita Hosting",
    descriptionKey: "projects.items.hosting_theme.description",
    liveUrl: "https://eduguate.github.io/hostingserrvicebootstrap/",
    githubUrl: "https://github.com/EduGuate/hostingserrvicebootstrap",
    imageUrl: "/img/hosting-theme.png",
    tags: ["Free Template", "Bootstrap", "Hosting"],
    category: "templates"
  },
  {
    id: "dj-theme",
    title: "DJ Electro",
    descriptionKey: "projects.items.dj_theme.description",
    liveUrl: "https://eduguate.github.io/DjBootstrapTheme/",
    githubUrl: "https://github.com/EduGuate/DjBootstrapTheme",
    imageUrl: "/img/dj-theme.png",
    tags: ["Free Template", "Bootstrap", "Music"],
    category: "templates"
  },
  {
    id: "urban-skate-theme",
    title: "UrbanRide Skateboards",
    descriptionKey: "projects.items.urban_skate_theme.description",
    liveUrl: "https://eduguate.github.io/UrbanSkateShopTheme/",
    githubUrl: "https://github.com/EduGuate/UrbanSkateShopTheme",
    imageUrl: "/img/urban-skate-theme.png",
    tags: ["Free Template", "Bootstrap", "Skate"],
    category: "templates"
  },
  {
    id: "gamer-theme",
    title: "NeoGamer Hub",
    descriptionKey: "projects.items.gamer_theme.description",
    liveUrl: "https://eduguate.github.io/GamerBootstrapTheme/",
    githubUrl: "https://github.com/EduGuate/GamerBootstrapTheme",
    imageUrl: "/img/gamer-theme.png",
    tags: ["Free Template", "Bootstrap", "Gaming"],
    category: "templates"
  },
  {
    id: "shoes-theme",
    title: "StepStyle Shoes",
    descriptionKey: "projects.items.shoes_theme.description",
    liveUrl: "https://eduguate.github.io/ShoesStoreBootstrap/",
    githubUrl: "https://github.com/EduGuate/ShoesStoreBootstrap",
    imageUrl: "/img/shoes-theme.png",
    tags: ["Free Template", "Bootstrap", "Store"],
    category: "templates"
  },
  {
    id: "dental-theme",
    title: "Smile Bright Dental",
    descriptionKey: "projects.items.dental_theme.description",
    liveUrl: "https://eduguate.github.io/DenthalBootstrapTheme/",
    githubUrl: "https://github.com/EduGuate/DenthalBootstrapTheme",
    imageUrl: "/img/dental-theme.png",
    tags: ["Free Template", "Bootstrap", "Health"],
    category: "templates"
  },
  {
    id: "realestate-theme",
    title: "RealEstate Hub",
    descriptionKey: "projects.items.realestate_theme.description",
    liveUrl: "https://eduguate.github.io/realstateTheme/",
    githubUrl: "https://github.com/EduGuate/realstateTheme",
    imageUrl: "/img/realestate-theme.png",
    tags: ["Free Template", "Bootstrap", "Real Estate"],
    category: "templates"
  },
  {
    id: "pizza-theme",
    title: "Pizza Viva",
    descriptionKey: "projects.items.pizza_theme.description",
    liveUrl: "https://eduguate.github.io/PizzaBootstrapTheme/",
    githubUrl: "https://github.com/EduGuate/PizzaBootstrapTheme",
    imageUrl: "/img/pizza-theme.png",
    tags: ["Free Template", "Bootstrap", "Food"],
    category: "templates"
  },
  {
    id: "wild-wonders",
    title: "Wild Wonders v3",
    descriptionKey: "projects.items.wild_wonders.description",
    liveUrl: "/workflows-n8n",
    githubUrl: "",
    imageUrl: "/img/wild-wonders-canvas.webp",
    tags: ["Free Workflow", "n8n", "IA"],
    category: "workflows"
  }
];

export const categorias: Category[] = [
  { id: "all", nombreKey: "projects.categories.all" },
  { id: "business", nombreKey: "projects.categories.business" },
  { id: "tools", nombreKey: "projects.categories.tools" },
  { id: "infrastructure", nombreKey: "projects.categories.infrastructure" },
  { id: "entertainment", nombreKey: "projects.categories.entertainment" },
  { id: "lifestyle", nombreKey: "projects.categories.lifestyle" },
  { id: "education", nombreKey: "projects.categories.education" },
  { id: "templates", nombreKey: "projects.categories.templates" },
  { id: "workflows", nombreKey: "projects.categories.workflows" },
  { id: "eduguate", nombreKey: "projects.categories.eduguate" }
];
