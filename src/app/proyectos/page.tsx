"use client";

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  liveUrl: string;
  imageUrl: string;
  tags: string[];
  category: string;
}

const projects: Project[] = [
  {
    title: "ETS Steam Carpet Cleaning",
    description: "Professional carpet cleaning service website with booking system.",
    liveUrl: "https://etsteamcarpetcleaning.com/",
    imageUrl: "https://picsum.photos/400/300?random=1",
    tags: ["Business", "Web Design"],
    category: "business"
  },
  {
    title: "Data Tool",
    description: "A tool for data analysis and visualization.",
    liveUrl: "https://datasightool.netlify.app/",
    imageUrl: "https://picsum.photos/400/300?random=2",
    tags: ["Tools", "Data Analysis"],
    category: "tools"
  },
  {
    title: "CleanCarPro GT LandingPage",
    description: "Landing page for a car cleaning service.",
    liveUrl: "https://cleancarprogt.shop/",
    imageUrl: "https://picsum.photos/400/300?random=3",
    tags: ["Landing Page", "Business"],
    category: "business"
  },
  {
    title: "RetroX Gaming LandingPage",
    description: "Landing page for a retro gaming platform.",
    liveUrl: "https://retrox.netlify.app/",
    imageUrl: "https://picsum.photos/400/300?random=4",
    tags: ["Landing Page", "Entertainment"],
    category: "entertainment"
  },
  {
    title: "SkateVibes LandingPage",
    description: "Landing page for a skateboarding community.",
    liveUrl: "https://skatevibes.netlify.app/",
    imageUrl: "https://picsum.photos/400/300?random=5",
    tags: ["Landing Page", "Lifestyle"],
    category: "lifestyle"
  },
  {
    title: "Sport LandingPage",
    description: "Landing page for a sports-related product or service.",
    liveUrl: "https://eclectic-jalebi-ffb392.netlify.app/",
    imageUrl: "https://picsum.photos/400/300?random=6",
    tags: ["Landing Page", "Lifestyle"],
    category: "lifestyle"
  },
  {
    title: "TechProFree LandingPage",
    description: "Landing page for a tech-related product or service.",
    liveUrl: "https://techprofree.netlify.app/",
    imageUrl: "https://picsum.photos/400/300?random=7",
    tags: ["Landing Page", "Tools"],
    category: "tools"
  },
  {
    title: "SlimVita",
    description: "A platform for health and wellness tips.",
    liveUrl: "https://slimvita.netlify.app/",
    imageUrl: "https://picsum.photos/400/300?random=8",
    tags: ["Health", "Lifestyle"],
    category: "lifestyle"
  },
  {
    title: "Learning Website",
    description: "An educational platform for learning new skills.",
    liveUrl: "https://phenomenal-gnome-b602ac.netlify.app/",
    imageUrl: "https://picsum.photos/400/300?random=9",
    tags: ["Education", "Learning"],
    category: "education"
  },
  {
    title: "MoonPug Token",
    description: "A landing page for a cryptocurrency token.",
    liveUrl: "https://beautiful-croissant-631a28.netlify.app/",
    imageUrl: "https://picsum.photos/400/300?random=10",
    tags: ["Crypto", "Blockchain"],
    category: "tools"
  },
  {
    title: "Movies Searcher",
    description: "A platform to search and discover movies.",
    liveUrl: "https://peliscout.netlify.app/",
    imageUrl: "https://picsum.photos/400/300?random=11",
    tags: ["Entertainment", "Movies"],
    category: "entertainment"
  },
  {
    title: "Music Downloader",
    description: "A tool to download music from various sources.",
    liveUrl: "https://downm.netlify.app/",
    imageUrl: "https://picsum.photos/400/300?random=12",
    tags: ["Tools", "Music"],
    category: "tools"
  },
  {
    title: "Learning For Kids",
    description: "An educational platform designed for children.",
    liveUrl: "https://camilakids.netlify.app/",
    imageUrl: "https://picsum.photos/400/300?random=13",
    tags: ["Education", "Kids"],
    category: "education"
  },
  {
    title: "Music LandingPage",
    description: "Landing page for a music-related product or service.",
    liveUrl: "https://frolicking-mermaid-89dba4.netlify.app/",
    imageUrl: "https://picsum.photos/400/300?random=14",
    tags: ["Landing Page", "Music"],
    category: "entertainment"
  },
  {
    title: "FeriaExpo LandingPage",
    description: "Landing page for an expo or fair event.",
    liveUrl: "https://velvety-torrone-1f4973.netlify.app/",
    imageUrl: "https://picsum.photos/400/300?random=15",
    tags: ["Landing Page", "Events"],
    category: "business"
  },
  {
    title: "Water LandingPage",
    description: "Landing page for a water-related product or service.",
    liveUrl: "https://delicate-crisp-c5f8e3.netlify.app/",
    imageUrl: "https://picsum.photos/400/300?random=16",
    tags: ["Landing Page", "Lifestyle"],
    category: "lifestyle"
  },
  {
    title: "Wedding Assistance LandingPage",
    description: "Landing page for wedding planning services.",
    liveUrl: "https://classy-donut-0c9792.netlify.app/",
    imageUrl: "https://picsum.photos/400/300?random=17",
    tags: ["Landing Page", "Events"],
    category: "lifestyle"
  },
  {
    title: "Random YouTube LandingPage",
    description: "A fun landing page for discovering random YouTube videos.",
    liveUrl: "https://randomyd.netlify.app/",
    imageUrl: "https://picsum.photos/400/300?random=18",
    tags: ["Entertainment", "YouTube"],
    category: "entertainment"
  },
  {
    title: "Image to WebP",
    description: "A tool to convert images to WebP format.",
    liveUrl: "https://flowfix.netlify.app/",
    imageUrl: "https://picsum.photos/400/300?random=19",
    tags: ["Tools", "Image Processing"],
    category: "tools"
  },
  {
    title: "Life Path Number Calculator",
    description: "A tool to calculate your life path number based on numerology.",
    liveUrl: "https://numerodevida.netlify.app/",
    imageUrl: "https://picsum.photos/400/300?random=20",
    tags: ["Tools", "Lifestyle"],
    category: "lifestyle"
  },
  {
    title: "HealthTrack Website",
    description: "A platform to track health and fitness progress.",
    liveUrl: "https://healthtrackfit.netlify.app/",
    imageUrl: "https://picsum.photos/400/300?random=21",
    tags: ["Health", "Fitness"],
    category: "lifestyle"
  }
  // ... (resto de los proyectos)
];

const Projects: React.FC = () => {
  return (
    <>
      <Head>
        <title>Projects - Neural Code Lab</title>
        <meta name="description" content="Neural Code Lab Projects Page" />
      </Head>
      
      {/* Hero Section with animated gradient */}
      <div className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-[url('/img/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="relative px-6 py-24 mx-auto max-w-7xl">
          <h1 className="text-5xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Our Innovative Projects
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-gray-300">
            At Neural Code Lab, we are working on revolutionary projects that transform technology into accessible and effective solutions for everyone.
          </p>
        </div>
      </div>

      <main className="p-8 max-w-7xl mx-auto -mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="transform hover:scale-105 transition-all duration-300">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl h-full flex flex-col">
                <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center relative">
                  <Image 
                    src={project.imageUrl} 
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-2xl font-bold mb-3 text-gray-800">{project.title}</h2>
                  <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-2 px-4 rounded-full hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink size={18} />
                    <span>Visit Project</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Final Section with CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-purple-100 to-blue-100">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Interested in our projects?</h2>
            <p className="text-gray-600 mb-6">Join our community and be part of the future of technology</p>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-3 px-8 rounded-full hover:opacity-90 transition-opacity">
              Contact Us
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Projects;