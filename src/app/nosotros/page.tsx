'use client';

import Image from 'next/image';
import { Linkedin, Code2, Heart, Rocket, Users, Globe2, Sparkles, Github, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: 'Iran Lewis',
    role: 'Founder & Developer',
    image: '/img/my-profile.jpg',
    bio: 'Desarrollador apasionado por crear tecnología que empodera comunidades. Especializado en IA, desarrollo web y soluciones de código abierto.',
    skills: ['Full-Stack Development', 'AI/ML', 'Cloud Architecture', 'Open Source']
  }
];

const values = [
  {
    icon: Rocket,
    title: 'Innovación',
    desc: 'Buscamos constantemente nuevas formas de resolver problemas comunitarios con tecnología de vanguardia.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Heart,
    title: 'Transparencia',
    desc: 'Código abierto y procesos claros para generar confianza y colaboración en cada proyecto.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Users,
    title: 'Colaboración',
    desc: 'Creemos en el poder del trabajo en equipo y la construcción de soluciones junto a las comunidades.',
    color: 'from-orange-500 to-red-500'
  }
];

const stats = [
  { value: '12+', label: 'Comunidades Impactadas' },
  { value: '200+', label: 'Jóvenes Capacitados' },
  { value: '8', label: 'Proyectos Activos' },
  { value: '5', label: 'Lenguas Mayas' }
];

const mission = {
  title: 'Nuestra Misión',
  description: 'Crear software libre que beneficie a las comunidades y personas interesadas en la tecnología, haciendo herramientas accesibles y útiles para todos.',
  highlights: [
    'Desarrollo de plataformas digitales personalizadas',
    'Capacitación tecnológica en comunidades',
    'Preservación cultural a través de la tecnología',
    'Promoción del software libre en Guatemala'
  ]
};

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>

        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/20">
              <Code2 className="w-4 h-4" />
              Tecnología con Propósito Cultural
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Sobre <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Neural Code Lab</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              {mission.description}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-6xl mx-auto px-6 -mt-16 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 text-center transform hover:-translate-y-1 transition-all duration-300">
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Sparkles className="w-10 h-10 text-blue-600" />
              {mission.title}
            </h2>
            <div className="space-y-4">
              {mission.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-gray-700 text-lg">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <Globe2 className="w-16 h-16 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Impacto Global, Raíces Locales</h3>
              <p className="text-gray-600 leading-relaxed">
                Desde Guatemala, trabajamos con comunidades indígenas para crear soluciones tecnológicas que respetan y potencian su identidad cultural, mientras construimos un futuro digital más inclusivo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Valores</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Los principios que guían cada proyecto y decisión que tomamos
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300" style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestro Equipo</h2>
          <p className="text-xl text-gray-600">
            Apasionados por la tecnología y el impacto social
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="grid md:grid-cols-5 gap-8 p-8 md:p-12">
                <div className="md:col-span-2">
                  <div className="relative h-80 md:h-full rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 group">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="md:col-span-3 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-xl text-blue-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed mb-6">{member.bio}</p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Especialidades:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium border border-gray-200">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <a
                      href="https://www.linkedin.com/in/devlewiso"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      <Linkedin size={18} />
                      LinkedIn
                    </a>
                    <a
                      href="https://github.com/devlewiso"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
                    >
                      <Github size={18} />
                      GitHub
                    </a>
                    <a
                      href="mailto:devlewiso@gmail.com"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition-colors font-medium border border-gray-200"
                    >
                      <Mail size={18} />
                      Email
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">¿Listo para colaborar?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Únete a nuestra misión de crear tecnología que potencie la identidad cultural y fortalezca comunidades
            </p>
            <a
              href="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
            >
              Contáctanos
              <Sparkles size={20} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}