'use client';

import React, { useState } from 'react';
import { Brain, Code, CloudCog, Database, Sprout, GraduationCap, Shapes, Network } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  image: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, color, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative bg-white/80 backdrop-blur-sm rounded-xl shadow-md overflow-hidden h-64 transform transition-all duration-500 hover:scale-105 hover:shadow-xl group"
      style={{ borderColor: color }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Imagen de fondo con efecto de zoom */}
      <div className="absolute inset-0 w-full h-full z-0 opacity-20 group-hover:opacity-30 transition-all duration-500">
        <div 
          className="w-full h-full bg-cover bg-center transform transition-transform duration-1000 group-hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>
      
      {/* Línea de color en el borde superior */}
      <div className="absolute top-0 left-0 w-full h-1" style={{ background: color }}></div>
      
      {/* Contenido que se desliza */}
      <div className="relative z-10 p-6 h-full flex flex-col">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-3" style={{ backgroundColor: color }}>
            <Icon size={24} className="text-white" />
          </div>
          <h3 className="text-xl font-bold" style={{ color }}>{title}</h3>
        </div>
        
        <div className={`transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-80'}`}>
          <p className="text-gray-700">{description}</p>
        </div>
        
        {/* Botón que aparece al hacer hover */}
        <div className={`mt-auto pt-4 transform transition-all duration-500 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <button 
            className="px-4 py-2 rounded-lg text-white text-sm flex items-center justify-center w-full"
            style={{ backgroundColor: color }}
          >
            Explorar <span className="ml-2">→</span>
          </button>
        </div>
      </div>
      
      {/* Efecto de brillo futurista */}
      <div 
        className={`absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-1000 transform -translate-x-full group-hover:translate-x-full`} 
        style={{ transitionDuration: '1.5s' }}
      ></div>
    </div>
  );
};

// Componente para el carrusel simple
const SimpleCarousel: React.FC<{items: React.ReactNode[]}> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };
  
  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };
  
  return (
    <div className="relative w-full overflow-hidden rounded-xl my-12">
      <div className="relative h-64">
        {items.map((item, idx) => (
          <div 
            key={idx} 
            className="absolute top-0 w-full h-full transition-all duration-500 transform"
            style={{ 
              opacity: idx === currentIndex ? 1 : 0,
              zIndex: idx === currentIndex ? 10 : 0,
              transform: `translateX(${(idx - currentIndex) * 100}%)`
            }}
          >
            {item}
          </div>
        ))}
      </div>
      
      <button 
        onClick={prev} 
        className="absolute top-1/2 left-4 z-20 w-10 h-10 rounded-full bg-black/30 text-white flex items-center justify-center transform -translate-y-1/2 hover:bg-black/50 transition-all"
      >
        ←
      </button>
      
      <button 
        onClick={next} 
        className="absolute top-1/2 right-4 z-20 w-10 h-10 rounded-full bg-black/30 text-white flex items-center justify-center transform -translate-y-1/2 hover:bg-black/50 transition-all"
      >
        →
      </button>
      
      <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center space-x-2">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${idx === currentIndex ? 'bg-white' : 'bg-white/40'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default function Page() {
  // Colores vibrantes para un aspecto futurista pero con inspiración cultural
  const mayaColors = {
    teal: "#00C9A7",
    amber: "#FFC93C",
    coral: "#FF6767",
    purple: "#845EC2",
    blue: "#4D8BF0",
    green: "#2BDA8E",
    pink: "#FF7A90",
    cyan: "#00D2FC"
  };
  
  const features = [
    {
      icon: Sprout,
      title: "Agrotecnología Maya",
      description: "IA y algoritmos avanzados adaptados a técnicas agrícolas ancestrales para producción sostenible",
      color: mayaColors.green,
      image: "/api/placeholder/600/400"
    },
    {
      icon: Code,
      title: "Desarrollo Web Local",
      description: "Plataformas digitales personalizadas con arquitecturas adaptadas a necesidades comunitarias",
      color: mayaColors.blue,
      image: "/api/placeholder/600/400"
    },
    {
      icon: Shapes,
      title: "Interfaces Culturales",
      description: "Diseños digitales que fusionan patrones ancestrales con principios modernos de UX/UI",
      color: mayaColors.amber,
      image: "/api/placeholder/600/400"
    },
    {
      icon: Brain,
      title: "IA Multicultural",
      description: "Sistemas inteligentes que integran cosmovisión maya con tecnologías de vanguardia",
      color: mayaColors.purple,
      image: "/api/placeholder/600/400"
    },
    {
      icon: Network,
      title: "Redes Comunitarias",
      description: "Infraestructuras de conectividad diseñadas para fortalecer lazos entre comunidades remotas",
      color: mayaColors.coral,
      image: "/api/placeholder/600/400"
    },
    {
      icon: CloudCog,
      title: "Tech Accesible",
      description: "Soluciones cloud optimizadas para funcionar con recursos tecnológicos limitados",
      color: mayaColors.teal,
      image: "/api/placeholder/600/400"
    },
    {
      icon: GraduationCap,
      title: "Educación Híbrida",
      description: "Plataformas de aprendizaje que combinan pedagogía digital con métodos tradicionales",
      color: mayaColors.pink,
      image: "/api/placeholder/600/400"
    },
    {
      icon: Database,
      title: "Preservación Digital",
      description: "Bases de datos avanzadas para documentar y preservar conocimientos y lenguas ancestrales",
      color: mayaColors.cyan,
      image: "/api/placeholder/600/400"
    }
  ];
  
  const testimonials = [
    <div key="1" className="w-full h-full bg-gradient-to-r from-purple-900 to-blue-900 text-white p-8 flex items-center rounded-xl">
      <div>
        <h3 className="text-2xl font-bold mb-4">Transformando nuestra comunidad</h3>
        <p className="text-lg">"Las herramientas de NeuralCodeLab nos permitieron digitalizar nuestras técnicas agrícolas ancestrales y mejorar nuestra producción en un 40%."</p>
        <div className="mt-4 font-bold">- Comunidad Tzutujil, Sololá</div>
      </div>
    </div>,
    <div key="2" className="w-full h-full bg-gradient-to-r from-teal-900 to-emerald-900 text-white p-8 flex items-center rounded-xl">
      <div>
        <h3 className="text-2xl font-bold mb-4">Preservando nuestra identidad</h3>
        <p className="text-lg">"Ahora tenemos una plataforma digital en nuestro propio idioma que nos ayuda a preservar y compartir nuestra cultura con todo el mundo."</p>
        <div className="mt-4 font-bold">- Comunidad K'iche', Quetzaltenango</div>
      </div>
    </div>,
    <div key="3" className="w-full h-full bg-gradient-to-r from-amber-900 to-orange-900 text-white p-8 flex items-center rounded-xl">
      <div>
        <h3 className="text-2xl font-bold mb-4">Innovación con raíces</h3>
        <p className="text-lg">"La combinación de tecnología moderna con nuestro conocimiento ancestral ha creado nuevas oportunidades para los jóvenes de nuestra comunidad."</p>
        <div className="mt-4 font-bold">- Comunidad Q'eqchi', Alta Verapaz</div>
      </div>
    </div>
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-0">
      {/* Header futurista con animación */}
      <div className="w-full h-screen flex items-center justify-center relative bg-gray-900 overflow-hidden">
        {/* Efecto de partículas/líneas de fondo */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,205,167,0.15)_0%,rgba(0,0,0,0)_70%)]"></div>
          
          {/* Líneas decorativas geométricas */}
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/20 to-transparent"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-amber-500/20 to-transparent"></div>
          <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center p-8 transition-transform duration-1000 animate-fadeIn">
          <div className="mb-6 relative inline-block">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 animate-pulse absolute blur-xl opacity-30"></div>
            <div className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-300 to-blue-500 text-6xl font-bold">NeuralCodeLab</div>
          </div>
          
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Fusionando la sabiduría ancestral maya con las tecnologías del futuro para empoderar comunidades
          </p>
          
          <button 
            onClick={() => window.location.href = '/proyectos'}
            className="px-8 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-full hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300 transform hover:-translate-y-1"
          >
            Descubrir Soluciones
          </button>
        </div>
        
        {/* Indicador de scroll */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2">Explorar</span>
            <span>↓</span>
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-100 py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Soluciones Tecnológicas con Identidad</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
      
      {/* Sección de testimonios con carrusel */}
      <div className="w-full bg-gray-900 py-16 px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Impacto en Comunidades</h2>
          <SimpleCarousel items={testimonials} />
        </div>
      </div>
      
      <div className="mt-16 text-center bg-gradient-to-b from-blue-50 to-white rounded-xl shadow-lg py-10 px-6 max-w-4xl mx-auto">
  <h2 className="text-3xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">1-800-ChatGPT</h2>
  <p className="text-xl font-medium mb-8">Llamando y enviando mensajes a ChatGPT desde tu teléfono</p>
  
  <div className="flex justify-center mb-8">
    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full"></div>
  </div>
  
  <div className="grid md:grid-cols-2 gap-8 mb-10">
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-bold mb-3 text-blue-700">¿Qué es 1-800-ChatGPT?</h3>
      <p className="text-gray-700">
        1-800-ChatGPT es una función experimental que permite un acceso más amplio a ChatGPT. Puedes interactuar con ChatGPT mediante llamadas telefónicas o mensajes de WhatsApp al 1-800-CHATGPT sin necesitar una cuenta.
      </p>
    </div>
    
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-bold mb-3 text-blue-700">Cómo Conectarte</h3>
      <p className="text-gray-700">
        ChatGPT nunca iniciará una llamada o chat. Puedes comenzar una conversación llamando al 1-800-CHATGPT (1-800-242-8478) desde un número de EE.UU. o Canadá, o enviando mensajes al mismo número vía WhatsApp desde países compatibles.
      </p>
    </div>
  </div>

  <p className="text-sm text-gray-600 mt-8 max-w-2xl mx-auto">
    Al comunicarte con 1-800-ChatGPT, aceptas nuestros Términos de Uso y confirmas haber leído nuestra Política de Privacidad. Recuerda que ChatGPT puede cometer errores, así que verifica la información importante. Este servicio es para mayores de 13 años.
  </p>
  
  <p className="text-xs text-gray-500 mt-4">Se pueden aplicar tarifas estándar del operador.</p>
</div>
    </div>
  );
}