'use client';

import React, { useState, useEffect } from 'react';
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
  // Add useEffect to handle potential browser extension interference
  useEffect(() => {
    // This helps prevent certain browser extensions from causing errors
    const handleError = (event: ErrorEvent) => {
      if (event.message.includes('Cannot read properties of null') && 
          event.error?.stack?.includes('chrome-extension')) {
        event.preventDefault();
        console.warn('Prevented extension error:', event.message);
      }
    };
    
    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

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
      description: "Sistemas inteligentes para agricultura sostenible basados en conocimientos ancestrales mayas.",
      color: mayaColors.green,
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      icon: GraduationCap,
      title: "Educación Bilingüe",
      description: "Plataformas educativas que preservan y promueven las lenguas mayas con tecnología avanzada.",
      color: mayaColors.amber,
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZWR1Y2F0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      icon: Brain,
      title: "IA Culturalmente Adaptada",
      description: "Inteligencia artificial que incorpora cosmovisión y valores culturales mayas.",
      color: mayaColors.purple,
      image: "https://images.unsplash.com/photo-1677442135136-760c813a878d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YWklMjBicmFpbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      icon: Database,
      title: "Preservación Digital",
      description: "Digitalización y preservación de conocimientos tradicionales en bases de datos seguras.",
      color: mayaColors.blue,
      image: "https://images.unsplash.com/photo-1606765962248-7ff407b51667?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZGF0YWJhc2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
      icon: CloudCog,
      title: "Computación Sostenible",
      description: "Infraestructura de nube optimizada para bajo consumo energético y acceso rural.",
      color: mayaColors.teal,
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xvdWQlMjBjb21wdXRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
      icon: Code,
      title: "Desarrollo Comunitario",
      description: "Formación en programación para jóvenes de comunidades indígenas.",
      color: mayaColors.coral,
      image: "https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      icon: Shapes,
      title: "Diseño Etno-Digital",
      description: "Interfaces inspiradas en patrones y símbolos mayas para una experiencia cultural única.",
      color: mayaColors.pink,
      image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGRlc2lnbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      icon: Network,
      title: "Conectividad Rural",
      description: "Soluciones de red adaptadas para comunidades remotas con tecnologías alternativas.",
      color: mayaColors.cyan,
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmV0d29ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    }
  ];
  
  // Datos para el carrusel de testimonios
  const testimonials = [
    {
      quote: "La plataforma educativa bilingüe ha transformado nuestra escuela, permitiendo a nuestros estudiantes aprender tanto en español como en q'eqchi'.",
      author: "María Caal",
      role: "Directora de Escuela, Alta Verapaz"
    },
    {
      quote: "El sistema de monitoreo agrícola nos ha ayudado a predecir mejor los ciclos de siembra y mejorar nuestra producción respetando las tradiciones.",
      author: "Juan Tzul",
      role: "Agricultor, Quiché"
    },
    {
      quote: "Gracias a la formación en programación, jóvenes de nuestra comunidad ahora desarrollan soluciones tecnológicas para nuestros propios desafíos.",
      author: "Pedro Ixcoy",
      role: "Líder Comunitario, Sololá"
    }
  ];
  
  const testimonialItems = testimonials.map((testimonial, index) => (
    <div key={index} className="bg-gray-800 p-8 rounded-xl shadow-xl">
      <div className="text-white/90 italic mb-4">"{testimonial.quote}"</div>
      <div className="text-teal-400 font-bold">{testimonial.author}</div>
      <div className="text-gray-400 text-sm">{testimonial.role}</div>
    </div>
  ));

  // Función segura para la navegación
  const navigateTo = (path: string) => {
    try {
      window.location.href = path;
    } catch (error) {
      console.error('Navigation error:', error);
    }
  };
  
  return (
    <div className="min-h-screen">
      {/* Hero Section con animación futurista */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900">
        {/* Fondo animado */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="stars"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-blue-900/20 to-teal-900/20"></div>
          
          {/* Grid futurista */}
          <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 gap-4 opacity-20">
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/20 to-transparent"></div>
            <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
            <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-amber-500/20 to-transparent"></div>
            <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>
          </div>
        </div>
        
        <div className="relative z-10 text-center p-8 transition-transform duration-1000 animate-fadeIn">
          <div className="mb-6 relative inline-block">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 animate-pulse absolute blur-xl opacity-30"></div>
            <div className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-300 to-blue-500 text-6xl font-bold">NeuralCodeLab</div>
          </div>
          
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
          Plataformas digitales personalizadas con arquitecturas adaptadas a necesidades comunitarias
          </p>
          
          <button 
            onClick={() => navigateTo('/proyectos')}
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
          <SimpleCarousel items={testimonialItems} />
        </div>
      </div>
      
      {/* Sección de estadísticas */}
      <div className="w-full bg-white py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-md">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500 mb-2">12+</div>
              <div className="text-gray-600">Comunidades Impactadas</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-md">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500 mb-2">5</div>
              <div className="text-gray-600">Lenguas Mayas Soportadas</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-md">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 mb-2">200+</div>
              <div className="text-gray-600">Jóvenes Capacitados</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-md">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500 mb-2">8</div>
              <div className="text-gray-600">Proyectos Tecnológicos</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to action */}
      <div className="w-full bg-gradient-to-r from-teal-500 to-blue-500 py-16 px-8 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Construyamos juntos el futuro digital</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Únete a nuestra misión de crear tecnología que respete y potencie la identidad cultural mientras construimos un futuro digital inclusivo.
          </p>
          <button 
            onClick={() => navigateTo('/contacto')}
            className="px-8 py-3 bg-white text-teal-600 rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 font-bold"
          >
            Contáctanos
          </button>
        </div>
      </div>
      
      {/* Estilos CSS para las estrellas */}
      <style jsx>{`
        @keyframes twinkle {
          0% { opacity: 0.3; }
          50% { opacity: 1; }
          100% { opacity: 0.3; }
        }
        
        .stars {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: radial-gradient(2px 2px at 20px 30px, #eee, rgba(0,0,0,0)), 
                            radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)), 
                            radial-gradient(1px 1px at 90px 40px, #ddd, rgba(0,0,0,0)),
                            radial-gradient(2px 2px at 160px 120px, #fff, rgba(0,0,0,0)),
                            radial-gradient(1px 1px at 230px 180px, #eee, rgba(0,0,0,0));
          background-repeat: repeat;
          background-size: 250px 250px;
          animation: twinkle 4s ease-in-out infinite;
          opacity: 0.3;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}