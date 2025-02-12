"use client";

import React from 'react';
import Image from 'next/image';

// Team data
const teamMembers = [
  {
    name: "Lewis Ortiz",
    role: "Founder & CEO",
    image: "/img/profile.png" // Added the image path here
  }
];

const AboutContactTeam: React.FC = () => {
  return (
    <div>
      {/* About Us Section */}
      <section id="about" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image 
                src="/img/contactImg.png" 
                alt="Neural Code Lab Team" 
                className="rounded-lg shadow-lg" 
                width={1350} // Added image width
                height={750} // Added image height
              />
            </div>
            <div className="md:w-1/2 md:pl-10">
              <p className="text-gray-600 mb-4">
                Neural Code Lab is an organization dedicated to creating free software that benefits communities and individuals who want to learn about technology and software development.
              </p>
              <p className="text-gray-600 mb-4">
                Our team is composed of technology enthusiasts who strive to create accessible and useful tools for everyone. We believe in the power of software to change the world and constantly work to deliver innovative solutions.
              </p>
              <p className="text-gray-600">
                Our mission is to democratize access to technological knowledge and foster a global community of developers committed to continuous learning and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section id="team" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
          <div className="flex justify-center">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden max-w-xs mx-2">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover" 
                  width={400} // Added image width
                  height={256} // Added image height
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-center">{member.name}</h3>
                  <p className="text-gray-600 text-center">{member.role}</p>
                  <a 
                    href="https://www.linkedin.com/in/devlewiso" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutContactTeam;