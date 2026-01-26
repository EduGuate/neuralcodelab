'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import FeatureCard from '@/components/FeatureCard';
import { features, stats, testimonials } from '@/data/content';
import AnimatedCounter from '@/components/AnimatedCounter';

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-2xl">
          <div className="inline-block mb-4 px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">
            Tecnología con propósito cultural
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Plataformas digitales para comunidades
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Creamos soluciones tecnológicas que respetan la identidad cultural mientras construimos un futuro digital más inclusivo para comunidades indígenas.
          </p>
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
          >
            Explorar soluciones <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-gray-100">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                <AnimatedCounter value={stat.value} />
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t border-gray-100">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Nuestras soluciones</h2>
          <p className="text-gray-600">Tecnología diseñada para responder a necesidades reales</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <FeatureCard key={i} {...feature} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t border-gray-100">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Impacto real</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <div key={i} className="p-6 border border-gray-200 rounded-lg bg-gray-50">
              <p className="text-gray-900 mb-4 leading-relaxed italic">"{item.quote}"</p>
              <div>
                <p className="font-semibold text-gray-900">{item.author}</p>
                <p className="text-sm text-gray-600">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t border-gray-100">
        <div className="bg-gray-900 text-white rounded-lg p-12 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Construyamos juntos</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto text-lg">
            Únete a nuestra misión de crear tecnología que potencie la identidad cultural
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
          >
            Contáctanos <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}