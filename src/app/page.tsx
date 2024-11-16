'use client'; // Indica que este componente utiliza características de React en el lado del cliente

// Importar dependencias necesarias de React y Material UI
import { useState } from 'react';
import Image from 'next/image';
import { Container, Grid, Typography, Button, Box } from '@mui/material';

// Definición de la interfaz para los proyectos
interface Project {
  id: number; // Identificador único del proyecto
  title: string; // Título del proyecto
  description: string; // Descripción del proyecto
  image: string; // Ruta de la imagen del proyecto
}

// Datos de los servicios
const services = [
  {
    title: "Educación",
    description: "Proporcionamos herramientas y recursos educativos para empoderar a las comunidades a través del aprendizaje.",
    icon: "🎓",
    imageUrl: "/img/educacion.jpg" // Asegúrate de tener esta imagen en public/img
  },
  {
    title: "Desarrollo",
    description: "Nos enfocamos en construir proyectos de código abierto que inspiran a otros a crear e innovar.",
    icon: "💻",
    imageUrl: "/img/desarrollo.jpg" // Asegúrate de tener esta imagen en public/img
  },
  {
    title: "Consultoría",
    description: "Ofrecemos servicios de consultoría para guiar la transformación digital y la adopción de tecnología.",
    icon: "📊",
    imageUrl: "/img/consultorias.jpg" // Asegúrate de tener esta imagen en public/img
  },
  {
    title: "Comunidad",
    description: "Construimos una red de aprendices y desarrolladores para compartir conocimientos y colaborar.",
    icon: "👥",
    imageUrl: "/img/comunidad.jpg" // Asegúrate de tener esta imagen en public/img
  },
  {
    title: "Soporte",
    description: "Dedicados a proporcionar apoyo y orientación para asegurar el éxito en los esfuerzos tecnológicos.",
    icon: "🛠️",
    imageUrl: "/img/soporte.jpg" // Asegúrate de tener esta imagen en public/img
  }
];

// Componente principal de la página de inicio
export default function Home() {
  // Estados para manejar el estado de hover y el proyecto seleccionado
  const [isHovered, setIsHovered] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Datos de los proyectos
  const projects: Project[] = [
    { id: 1, title: 'AprendeGT', description: 'Aplicacion de aprendizaje para edad de 4 a 5 años', image: '/img/proyecto1.png' },
    { id: 2, title: 'Proyecto 2', description: 'Descripción breve del Proyecto 2', image: '/img/proyecto2.jpg' },
    { id: 3, title: 'Proyecto 3', description: 'Descripción breve del Proyecto 3', image: '/img/proyecto3.jpg' },
    { id: 4, title: 'Proyecto 4', description: 'Descripción breve del Proyecto 4', image: '/img/proyecto4.jpg' }
  ];

  // Función para manejar clics en proyectos
  const handleProjectClick = (project: Project) => {
    setSelectedProject(project); // Establece el proyecto seleccionado
  };

  // Función para cerrar el popup de proyecto seleccionado
  const handleClosePopup = () => {
    setSelectedProject(null); // Restablece el proyecto seleccionado
  };

  return (
    <div>
      {/* Contenedor principal con fondo */}
      <Container
        maxWidth={false}
        disableGutters
        sx={{ position: 'relative', minHeight: '100vh' }}
        onMouseEnter={() => setIsHovered(true)} // Cambia el estado de hover al entrar
        onMouseLeave={() => setIsHovered(false)} // Cambia el estado de hover al salir
      >
        <Box sx={{ position: 'absolute', inset: 0 }}>
          {/* Imagen de fondo */}
          <Image
            src="/img/background.webp"  // Ruta a la imagen en la carpeta public/img
            alt="Background"
            fill
            className={`object-cover transition-transform duration-700 ease-out ${isHovered ? 'scale-110' : 'scale-100'}`} // Efecto de zoom al hacer hover
          />
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7))',
              transition: 'opacity 0.7s',
              opacity: isHovered ? 0.4 : 0.7, // Cambia la opacidad del overlay al hacer hover
            }}
          />
        </Box>

        {/* Sección del encabezado */}
        <Box sx={{ position: 'relative', zIndex: 10, textAlign: 'center', py: 10 }}>
          <Typography variant="h2" component="h1" sx={{ color: 'black', fontWeight: 'bold' }}>
            Neural Code Lab
          </Typography>
          <Box
            sx={{
              height: 4,
              width: isHovered ? 120 : 80, // Cambia el ancho del indicador al hacer hover
              backgroundColor: 'purple',
              mx: 'auto',
              my: 2,
              transition: 'width 0.7s',
            }}
          />
          <Typography variant="body1" sx={{ color: 'black', maxWidth: '600px', mx: 'auto' }}>
            Creando software gratuito para beneficiar a comunidades y personas que quieren aprender.
          </Typography>
        </Box>
      </Container>

      {/* Sección de servicios */}
      <Box sx={{ py: 5, backgroundColor: '#f0f0f0' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" sx={{ textAlign: 'center', mb: 4 }}>
            Nuestros Servicios
          </Typography>
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box
                  sx={{
                    border: '1px solid #e0e0e0',
                    borderRadius: 2,
                    textAlign: 'center',
                    padding: 2,
                    boxShadow: 1,
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  <Image src={service.imageUrl} alt={service.title} width={300} height={200} style={{ borderRadius: '8px' }} />
                  <Box sx={{ mt: 2 }}>
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <Typography variant="h6" gutterBottom>{service.title}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{service.description}</Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Sección de proyectos */}
      <Container maxWidth="lg" sx={{ py: 5 }}>
        <Typography variant="h4" gutterBottom>
          Proyectos
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid item xs={12} sm={6} md={3} key={project.id}>
              <Box
                sx={{
                  transition: 'transform 0.3s', // Efecto de transición para el hover
                  '&:hover': {
                    transform: 'translateY(-10px)', // Mueve el proyecto hacia arriba al hacer hover
                  },
                  p: 2,
                  borderRadius: 2,
                  backgroundColor: 'white',
                }}
              >
                {/* Imagen del proyecto */}
                <Image src={project.image} alt={project.title} width={300} height={200} style={{ borderRadius: '8px' }} />
                <Typography variant="h6" sx={{ mt: 2 }}>{project.title}</Typography>
                <Typography variant="body2">{project.description}</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleProjectClick(project)} // Manejar clic en el proyecto
                  sx={{ mt: 2 }}
                >
                  Ver Proyecto
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Popup para mostrar detalles del proyecto */}
      {selectedProject && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bgcolor: 'rgba(0,0,0,0.7)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
          onClick={handleClosePopup} // Cierra el popup al hacer clic
        >
          <Box
            sx={{
              bgcolor: 'white',
              padding: 4,
              borderRadius: 2,
              width: '80%',
              maxWidth: 600,
              textAlign: 'center',
            }}
          >
            <Typography variant="h5">{selectedProject.title}</Typography>
            <Typography variant="body2" sx={{ mt: 2 }}>{selectedProject.description}</Typography>
            <Button variant="contained" color="primary" onClick={handleClosePopup} sx={{ mt: 3 }}>
              Cerrar
            </Button>
          </Box>
        </Box>
      )}
    </div>
  );
}
