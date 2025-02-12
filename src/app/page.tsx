'use client';

import React, { useState } from 'react';
import { Github, ExternalLink, Mail, Linkedin, Brain, Code, Users, Database } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  liveUrl: string;
  tags: string[];
  category: string;
}

interface ProjectCardProps extends Project {}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, liveUrl, tags }) => (
  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border border-purple-100 hover:scale-105">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        {title}
      </h3>
    </div>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {tags.map((tag, index) => (
        <span key={index} 
              className="px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white">
          {tag}
        </span>
      ))}
    </div>
    <div className="flex gap-4">
      <a href={liveUrl} 
         target="_blank" 
         rel="noopener noreferrer"
         className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
        <ExternalLink size={20} />
        <span>Visit Site</span>
      </a>
    </div>
  </div>
);

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 border border-purple-100">
    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
      <Icon size={24} className="text-white" />
    </div>
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default function Page() {
  const [activeSection, setActiveSection] = useState('projects');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'business', name: 'Business' },
    { id: 'education', name: 'Education' },
    { id: 'tools', name: 'Tools & Utilities' },
    { id: 'entertainment', name: 'Entertainment' },
    { id: 'lifestyle', name: 'Lifestyle' }
  ];

  const features = [
    {
      icon: Brain,
      title: "Neural Learning",
      description: "Innovative AI-powered learning solutions for modern education"
    },
    {
      icon: Code,
      title: "Open Source",
      description: "Contributing to the community with free, open-source software"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Building together with developers around the world"
    },
    {
      icon: Database,
      title: "Modern Stack",
      description: "Using cutting-edge technologies for better solutions"
    }
  ];

  const projects: Project[] = [
    {
      title: "ETS Steam Carpet Cleaning",
      description: "Professional carpet cleaning service website with booking system.",
      liveUrl: "https://etsteamcarpetcleaning.com/",
      tags: ["Business", "Web Design"],
      category: "business"
    },
    {
      title: "Data Tool",
      description: "A tool for data analysis and visualization.",
      liveUrl: "https://datasightool.netlify.app/",
      tags: ["Tools", "Data Analysis"],
      category: "tools"
    },
    {
      title: "CleanCarPro GT LandingPage",
      description: "Landing page for a car cleaning service.",
      liveUrl: "https://cleancarprogt.shop/",
      tags: ["Landing Page", "Business"],
      category: "business"
    },
    {
      title: "RetroX Gaming LandingPage",
      description: "Landing page for a retro gaming platform.",
      liveUrl: "https://retrox.netlify.app/",
      tags: ["Landing Page", "Entertainment"],
      category: "entertainment"
    },
    {
      title: "SkateVibes LandingPage",
      description: "Landing page for a skateboarding community.",
      liveUrl: "https://skatevibes.netlify.app/",
      tags: ["Landing Page", "Lifestyle"],
      category: "lifestyle"
    },
    {
      title: "Sport LandingPage",
      description: "Landing page for a sports-related product or service.",
      liveUrl: "https://eclectic-jalebi-ffb392.netlify.app/",
      tags: ["Landing Page", "Lifestyle"],
      category: "lifestyle"
    },
    {
      title: "TechProFree LandingPage",
      description: "Landing page for a tech-related product or service.",
      liveUrl: "https://techprofree.netlify.app/",
      tags: ["Landing Page", "Tools"],
      category: "tools"
    },
    {
      title: "SlimVita",
      description: "A platform for health and wellness tips.",
      liveUrl: "https://slimvita.netlify.app/",
      tags: ["Health", "Lifestyle"],
      category: "lifestyle"
    },
    {
      title: "Learning Website",
      description: "An educational platform for learning new skills.",
      liveUrl: "https://phenomenal-gnome-b602ac.netlify.app/",
      tags: ["Education", "Learning"],
      category: "education"
    },
    {
      title: "MoonPug Token",
      description: "A landing page for a cryptocurrency token.",
      liveUrl: "https://beautiful-croissant-631a28.netlify.app/",
      tags: ["Crypto", "Blockchain"],
      category: "tools"
    },
    {
      title: "Movies Searcher",
      description: "A platform to search and discover movies.",
      liveUrl: "https://peliscout.netlify.app/",
      tags: ["Entertainment", "Movies"],
      category: "entertainment"
    },
    {
      title: "Music Downloader",
      description: "A tool to download music from various sources.",
      liveUrl: "https://downm.netlify.app/",
      tags: ["Tools", "Music"],
      category: "tools"
    },
    {
      title: "Learning For Kids",
      description: "An educational platform designed for children.",
      liveUrl: "https://camilakids.netlify.app/",
      tags: ["Education", "Kids"],
      category: "education"
    },
    {
      title: "Music LandingPage",
      description: "Landing page for a music-related product or service.",
      liveUrl: "https://frolicking-mermaid-89dba4.netlify.app/",
      tags: ["Landing Page", "Music"],
      category: "entertainment"
    },
    {
      title: "FeriaExpo LandingPage",
      description: "Landing page for an expo or fair event.",
      liveUrl: "https://velvety-torrone-1f4973.netlify.app/",
      tags: ["Landing Page", "Events"],
      category: "business"
    },
    {
      title: "Water LandingPage",
      description: "Landing page for a water-related product or service.",
      liveUrl: "https://delicate-crisp-c5f8e3.netlify.app/",
      tags: ["Landing Page", "Lifestyle"],
      category: "lifestyle"
    },
    {
      title: "Wedding Assistance LandingPage",
      description: "Landing page for wedding planning services.",
      liveUrl: "https://classy-donut-0c9792.netlify.app/",
      tags: ["Landing Page", "Events"],
      category: "lifestyle"
    },
    {
      title: "Random YouTube LandingPage",
      description: "A fun landing page for discovering random YouTube videos.",
      liveUrl: "https://randomyd.netlify.app/",
      tags: ["Entertainment", "YouTube"],
      category: "entertainment"
    },
    {
      title: "Image to WebP",
      description: "A tool to convert images to WebP format.",
      liveUrl: "https://flowfix.netlify.app/",
      tags: ["Tools", "Image Processing"],
      category: "tools"
    },
    {
      title: "Life Path Number Calculator",
      description: "A tool to calculate your life path number based on numerology.",
      liveUrl: "https://numerodevida.netlify.app/",
      tags: ["Tools", "Lifestyle"],
      category: "lifestyle"
    },
    {
      title: "HealthTrack Website",
      description: "A platform to track health and fitness progress.",
      liveUrl: "https://healthtrackfit.netlify.app/",
      tags: ["Health", "Fitness"],
      category: "lifestyle"
    }
  ];


  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">


      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Creating Free Software for Learning
          </h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto mb-8">
            We build open-source tools and platforms to empower communities and individuals in their learning journey.
          </p>
          <a href="https://github.com/neuralcodelab" 
             target="_blank" 
             rel="noopener noreferrer"
             className="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            <Github size={24} />
            <span>View Our GitHub</span>
          </a>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-16">
        {activeSection === 'projects' ? (
          <>
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-4 mb-8">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </>
        ) : (
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              About NeuralCodeLab
            </h2>
            <div className="prose prose-lg">
              <p className="text-gray-600 mb-6">
                NeuralCodeLab is dedicated to creating innovative, open-source software solutions 
                that make learning more accessible and engaging. Our focus is on combining 
                artificial intelligence with educational technology to create powerful learning tools.
              </p>
              <p className="text-gray-600 mb-6">
                We believe in the power of community-driven development and open source collaboration. 
                All our projects are free to use and open for contributions from developers around the world.
              </p>
              <div className="flex gap-6 mt-8">
                <a href="https://github.com/neuralcodelab" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors">
                  <Github size={24} />
                  <span>GitHub</span>
                </a>
                <a href="https://linkedin.com/company/neuralcodelab" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors">
                  <Linkedin size={24} />
                  <span>LinkedIn</span>
                </a>
                <a href="mailto:contact@neuralcodelab.com"
                   className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors">
                  <Mail size={24} />
                  <span>Contact</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </main>

    </div>
  );
}