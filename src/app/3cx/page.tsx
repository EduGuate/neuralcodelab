'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, CheckCircle, Smartphone, Building2, Users, Headphones, ArrowRight, MessageSquare, Shield, Zap } from 'lucide-react';

export default function ThreeCXPage() {
    const features = [
        {
            icon: <Smartphone className="w-8 h-8" />,
            title: "3CX Gratis en tu Teléfono",
            description: "Configura 3CX en tu smartphone Android o iOS sin costo. Llamadas profesionales desde cualquier lugar."
        },
        {
            icon: <Building2 className="w-8 h-8" />,
            title: "Integración Empresarial",
            description: "Te orientamos en la implementación de 3CX en tu negocio, optimizando tu sistema de comunicaciones."
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Soporte Personalizado",
            description: "Acompañamiento completo desde la instalación hasta la configuración avanzada de tu sistema."
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Seguro y Confiable",
            description: "Sistema de comunicaciones empresarial con encriptación y alta disponibilidad."
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Fácil de Usar",
            description: "Interfaz intuitiva que no requiere conocimientos técnicos avanzados para operar."
        },
        {
            icon: <MessageSquare className="w-8 h-8" />,
            title: "Múltiples Canales",
            description: "Voz, video, chat y SMS integrados en una sola plataforma de comunicación."
        }
    ];

    const benefits = [
        "Reduce costos de telefonía hasta un 80%",
        "Trabaja desde cualquier lugar con internet",
        "Integración con CRM y herramientas empresariales",
        "Grabación de llamadas y análisis de métricas",
        "Extensiones ilimitadas según tu plan",
        "Soporte técnico en español"
    ];

    const useCases = [
        {
            title: "Pequeños Negocios",
            description: "Profesionaliza tu atención al cliente sin invertir en infraestructura costosa."
        },
        {
            title: "Equipos Remotos",
            description: "Mantén a tu equipo conectado sin importar dónde se encuentren."
        },
        {
            title: "Call Centers",
            description: "Gestiona grandes volúmenes de llamadas con herramientas profesionales."
        },
        {
            title: "Emprendedores",
            description: "Comienza con una línea profesional sin costos iniciales."
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

                <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/20">
                                <Phone className="w-4 h-4" />
                                Sistema de Comunicaciones Profesional
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                                3CX Gratis en tu Teléfono
                            </h1>
                            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                                Transforma tu smartphone en un sistema telefónico empresarial. Te ayudo a configurar 3CX gratis y a integrarlo en tu negocio.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="tel:18054396103"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                >
                                    <Phone size={20} /> Llamar Ahora
                                </a>
                                <a
                                    href="#demo"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all font-semibold border border-white/20"
                                >
                                    Ver Demo <ArrowRight size={20} />
                                </a>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                                        <Phone className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-lg">Línea Demo Activa</p>
                                        <p className="text-blue-100 text-sm">Prueba el sistema ahora</p>
                                    </div>
                                </div>
                                <div className="bg-white/5 rounded-lg p-6 mb-4">
                                    <p className="text-sm text-blue-100 mb-2">Número de Demostración:</p>
                                    <a href="tel:18054396103" className="text-3xl font-bold hover:text-blue-200 transition-colors">
                                        1-805-439-6103
                                    </a>
                                </div>
                                <p className="text-sm text-blue-100">
                                    Llama para experimentar la calidad de 3CX en tiempo real
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="max-w-6xl mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        ¿Por qué elegir 3CX?
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Un sistema completo de comunicaciones empresariales al alcance de tu mano
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Benefits Section */}
            <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                Beneficios que transforman tu negocio
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                3CX no es solo un sistema telefónico, es una solución completa que moderniza tu forma de comunicarte.
                            </p>
                            <div className="space-y-4">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <p className="text-gray-700 text-lg">{benefit}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                Lo que incluye tu configuración:
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <span className="text-blue-600 font-bold">1</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Instalación en tu dispositivo</p>
                                        <p className="text-sm text-gray-600">App configurada y lista para usar</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <span className="text-blue-600 font-bold">2</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Capacitación básica</p>
                                        <p className="text-sm text-gray-600">Aprende a usar todas las funciones</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <span className="text-blue-600 font-bold">3</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Soporte inicial</p>
                                        <p className="text-sm text-gray-600">Asistencia durante la configuración</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <span className="text-blue-600 font-bold">4</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Consultoría de integración</p>
                                        <p className="text-sm text-gray-600">Orientación para tu negocio</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="max-w-6xl mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Ideal para todo tipo de negocios
                    </h2>
                    <p className="text-xl text-gray-600">
                        Sin importar el tamaño de tu empresa, 3CX se adapta a tus necesidades
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {useCases.map((useCase, index) => (
                        <div
                            key={index}
                            className="p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all"
                        >
                            <h3 className="text-lg font-bold text-gray-900 mb-3">
                                {useCase.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {useCase.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Demo Section */}
            <section id="demo" className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <Headphones className="w-16 h-16 mx-auto mb-6 opacity-90" />
                    <h2 className="text-4xl font-bold mb-6">
                        Prueba el sistema ahora mismo
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Llama a nuestra línea demo y experimenta la calidad de 3CX. Sin compromisos, solo para que veas cómo funciona.
                    </p>
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 inline-block">
                        <p className="text-sm text-blue-100 mb-2">Número de Demostración</p>
                        <a
                            href="tel:18054396103"
                            className="text-5xl font-bold hover:text-blue-200 transition-colors block mb-4"
                        >
                            1-805-439-6103
                        </a>
                        <p className="text-sm text-blue-100">
                            Disponible 24/7 • Llamada gratuita desde EE.UU.
                        </p>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="max-w-6xl mx-auto px-6 py-20">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Moderniza tu comunicación empresarial hoy
                        </h2>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            No esperes más para tener un sistema telefónico profesional. Es gratis, es fácil y te ayudo en todo el proceso.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="tel:18054396103"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-semibold shadow-lg hover:shadow-xl"
                            >
                                <Phone size={20} /> Llamar Ahora
                            </a>
                            <Link
                                href="/contacto"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all font-semibold border border-white/20"
                            >
                                Más Información <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
