"use client";

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

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
          {/* Project 1 */}
          <div className="transform hover:scale-105 transition-all duration-300">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center relative">
                <Image 
                  src="/img/elearning.jpg"
                  alt="Online Learning Platform"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3 text-gray-800">Online Learning Platform</h2>
                <p className="text-gray-600">
                  A revolutionary platform that democratizes access to technological knowledge with free, high-quality courses.
                </p>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="transform hover:scale-105 transition-all duration-300">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl">
              <div className="h-48 bg-gradient-to-r from-green-500 to-teal-600 flex items-center justify-center relative">
                <Image 
                  src="/img/consultorias.jpg"
                  alt="Real-Time Collaboration"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3 text-gray-800">Real-Time Collaboration</h2>
                <p className="text-gray-600">
                  Cutting-edge tools to enhance collaboration and productivity in development teams.
                </p>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="transform hover:scale-105 transition-all duration-300">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl">
              <div className="h-48 bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center relative">
                <Image 
                  src="/img/desarrollo.jpg"
                  alt="Project Management"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3 text-gray-800">Project Management</h2>
                <p className="text-gray-600">
                  A comprehensive system for efficient management of projects, tasks, and resources in dynamic teams.
                </p>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className="transform hover:scale-105 transition-all duration-300">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl">
              <div className="h-48 bg-gradient-to-r from-pink-500 to-rose-600 flex items-center justify-center relative">
                <Image 
                  src="/img/comunidad.jpg"
                  alt="Community Support"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3 text-gray-800">Community Support</h2>
                <p className="text-gray-600">
                  A smart platform that connects users with experts to resolve doubts and technical issues.
                </p>
              </div>
            </div>
          </div>

          {/* Project 5 */}
          <div className="transform hover:scale-105 transition-all duration-300">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl">
              <div className="h-48 bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center relative">
                <Image 
                  src="/img/mental-health.jpg"
                  alt="Digital Mental Health"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3 text-gray-800">Digital Mental Health</h2>
                <p className="text-gray-600">
                  An innovative application that provides tools and resources for mental and emotional well-being.
                </p>
              </div>
            </div>
          </div>
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