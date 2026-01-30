'use client';

import React from 'react';
import Link from 'next/link';
import {
    Phone,
    Bot,
    Workflow,
    MessageSquare,
    BarChart3,
    Globe,
    Zap,
    Shield,
    Clock,
    Users,
    Headphones,
    ArrowRight,
    CheckCircle,
    Settings,
    Database,
    Code,
    Smartphone,
    Monitor
} from 'lucide-react';

export default function ContactCenterPage() {
    const services = [
        {
            icon: <Bot className="w-8 h-8" />,
            title: "Agentes de IA Conversacional",
            description: "Agentes multimodales con voz expresiva que manejan conversaciones naturales, desde consultas simples hasta flujos de trabajo complejos."
        },
        {
            icon: <Workflow className="w-8 h-8" />,
            title: "Integración con N8N",
            description: "Automatización avanzada conectando tus agentes con cualquier sistema: CRM, bases de datos, APIs y más mediante workflows visuales."
        },
        {
            icon: <Phone className="w-8 h-8" />,
            title: "Telefonía Empresarial",
            description: "Integración con sistemas telefónicos vía SIP trunk, Twilio, y llamadas en lote para campañas masivas."
        },
        {
            icon: <MessageSquare className="w-8 h-8" />,
            title: "Chat Web y Móvil",
            description: "Widgets personalizables para web, aplicaciones React, iOS y Android con SDKs nativos."
        },
        {
            icon: <BarChart3 className="w-8 h-8" />,
            title: "Análisis y Monitoreo",
            description: "Dashboard completo con análisis de conversaciones, métricas en tiempo real y evaluación de rendimiento."
        },
        {
            icon: <Globe className="w-8 h-8" />,
            title: "Soporte Multiidioma",
            description: "Agentes que hablan múltiples idiomas con voces naturales y culturalmente apropiadas."
        }
    ];

    const capabilities = [
        {
            category: "Diseño y Configuración",
            items: [
                "Workflows personalizados con constructor visual",
                "Prompts del sistema optimizados",
                "Selección de modelos de IA (GPT-4, Claude, etc.)",
                "Flujos de conversación personalizados",
                "Base de conocimiento integrada",
                "Herramientas y funciones personalizadas",
                "Autenticación y seguridad"
            ]
        },
        {
            category: "Conexión y Despliegue",
            items: [
                "Widget embebido para sitios web",
                "SDKs para React, Swift, Kotlin y React Native",
                "Integración SIP trunk para telefonía",
                "Conexión con Twilio",
                "API WebSocket para integraciones custom",
                "Sistema de eventos en tiempo real",
                "Llamadas en lote automatizadas"
            ]
        },
        {
            category: "Monitoreo y Optimización",
            items: [
                "Testing automatizado de agentes",
                "Análisis detallado de conversaciones",
                "Analytics y métricas de rendimiento",
                "Optimización de costos",
                "Privacidad y cumplimiento normativo",
                "Evaluaciones continuas de calidad"
            ]
        }
    ];

    const n8nIntegrations = [
        {
            title: "CRM y Ventas",
            description: "Salesforce, HubSpot, Pipedrive",
            icon: <Users className="w-6 h-6" />
        },
        {
            title: "Bases de Datos",
            description: "MySQL, PostgreSQL, MongoDB",
            icon: <Database className="w-6 h-6" />
        },
        {
            title: "Comunicaciones",
            description: "WhatsApp, Telegram, Email, SMS",
            icon: <MessageSquare className="w-6 h-6" />
        },
        {
            title: "Productividad",
            description: "Google Workspace, Microsoft 365",
            icon: <Monitor className="w-6 h-6" />
        },
        {
            title: "E-commerce",
            description: "Shopify, WooCommerce, Stripe",
            icon: <Settings className="w-6 h-6" />
        },
        {
            title: "APIs Personalizadas",
            description: "Cualquier API REST o GraphQL",
            icon: <Code className="w-6 h-6" />
        }
    ];

    const useCases = [
        {
            title: "Atención al Cliente 24/7",
            description: "Agentes que nunca duermen, respondiendo consultas, resolviendo problemas y escalando casos complejos a humanos cuando es necesario.",
            benefits: ["Reducción de costos hasta 70%", "Tiempo de respuesta instantáneo", "Satisfacción del cliente mejorada"]
        },
        {
            title: "Ventas y Calificación de Leads",
            description: "Agentes que califican prospectos, agendan citas y nutren leads automáticamente, integrándose con tu CRM.",
            benefits: ["Mayor conversión de leads", "Seguimiento automatizado", "Datos sincronizados en tiempo real"]
        },
        {
            title: "Encuestas y Feedback",
            description: "Recopilación automática de opiniones de clientes con análisis de sentimiento y reportes detallados.",
            benefits: ["Insights accionables", "Mayor tasa de respuesta", "Análisis automático"]
        },
        {
            title: "Soporte Técnico",
            description: "Diagnóstico inicial, solución de problemas comunes y creación de tickets automáticos para casos complejos.",
            benefits: ["Resolución más rápida", "Menor carga para el equipo", "Base de conocimiento actualizada"]
        }
    ];

    const benefits = [
        "Implementación rápida en días, no meses",
        "Escalabilidad ilimitada sin contratar personal",
        "Integración con tus sistemas existentes",
        "Voces naturales en múltiples idiomas",
        "Analytics detallados y mejora continua",
        "Soporte técnico especializado en español"
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-900 text-white">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

                <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/20">
                            <Bot className="w-4 h-4" />
                            Powered by ElevenLabs AI
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            Contact Center Inteligente con IA
                        </h1>
                        <p className="text-xl text-purple-100 mb-8 leading-relaxed max-w-3xl mx-auto">
                            Transformo tu atención al cliente con agentes de IA conversacional que hablan naturalmente, se integran con tus sistemas y trabajan 24/7. Implementación completa con ElevenLabs y automatización N8N.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contacto"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-purple-50 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                                Solicitar Demo <ArrowRight size={20} />
                            </Link>
                            <a
                                href="#servicios"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all font-semibold border border-white/20"
                            >
                                Ver Servicios
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section id="servicios" className="max-w-6xl mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Servicios de Contact Center con IA
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Soluciones completas para modernizar tu atención al cliente con tecnología de vanguardia
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-purple-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Capabilities Section */}
            <section className="bg-gradient-to-br from-gray-50 to-purple-50 py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Capacidades de la Plataforma ElevenLabs
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Todo lo que necesitas para construir, desplegar y optimizar agentes de IA a escala
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {capabilities.map((capability, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                        <span className="text-purple-600 font-bold">{index + 1}</span>
                                    </div>
                                    {capability.category}
                                </h3>
                                <ul className="space-y-3">
                                    {capability.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* N8N Integration Section */}
            <section className="max-w-6xl mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full text-sm font-semibold text-purple-700 mb-4">
                        <Workflow className="w-4 h-4" />
                        Automatización Avanzada
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Integración con N8N
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Conecto tus agentes de IA con cualquier sistema mediante workflows visuales sin código
                    </p>
                </div>

                <div className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-3xl p-8 md:p-12 mb-12 text-white">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-3xl font-bold mb-4">¿Qué es N8N?</h3>
                            <p className="text-purple-100 text-lg mb-6 leading-relaxed">
                                N8N es una plataforma de automatización que permite conectar tus agentes de IA con más de 400 aplicaciones y servicios. Creo workflows personalizados que automatizan procesos completos sin escribir código.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <Zap className="w-5 h-5 text-yellow-400" />
                                    <span>Automatización en tiempo real</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Shield className="w-5 h-5 text-green-400" />
                                    <span>Seguro y confiable</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Clock className="w-5 h-5 text-blue-400" />
                                    <span>Ahorra horas de trabajo manual</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                            <h4 className="text-xl font-bold mb-4">Ejemplo de Workflow</h4>
                            <div className="space-y-3 text-sm">
                                <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-xs">1</div>
                                        <span className="font-semibold">Cliente llama al agente</span>
                                    </div>
                                </div>
                                <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-xs">2</div>
                                        <span className="font-semibold">Agente consulta CRM automáticamente</span>
                                    </div>
                                </div>
                                <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-xs">3</div>
                                        <span className="font-semibold">Crea ticket en sistema de soporte</span>
                                    </div>
                                </div>
                                <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-xs">4</div>
                                        <span className="font-semibold">Envía resumen por email y WhatsApp</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {n8nIntegrations.map((integration, index) => (
                        <div
                            key={index}
                            className="p-6 bg-white rounded-xl border border-gray-200 hover:border-purple-500 hover:shadow-lg transition-all"
                        >
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-4">
                                {integration.icon}
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">
                                {integration.title}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {integration.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Use Cases */}
            <section className="bg-gradient-to-br from-gray-50 to-purple-50 py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Casos de Uso
                        </h2>
                        <p className="text-xl text-gray-600">
                            Soluciones probadas para diferentes necesidades empresariales
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {useCases.map((useCase, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    {useCase.title}
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {useCase.description}
                                </p>
                                <div className="space-y-2">
                                    {useCase.benefits.map((benefit, benefitIndex) => (
                                        <div key={benefitIndex} className="flex items-center gap-2">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                            <span className="text-gray-700 text-sm">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="max-w-6xl mx-auto px-6 py-20">
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-200">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                ¿Por qué elegir mis servicios?
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                No solo implemento la tecnología, te acompaño en todo el proceso para asegurar que tu contact center con IA sea un éxito.
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

                        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                Mi Proceso de Implementación
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <span className="text-white font-bold text-sm">1</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Análisis de Necesidades</p>
                                        <p className="text-sm text-gray-600">Entiendo tu negocio y objetivos</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <span className="text-white font-bold text-sm">2</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Diseño de Solución</p>
                                        <p className="text-sm text-gray-600">Creo workflows y configuro agentes</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <span className="text-white font-bold text-sm">3</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Implementación</p>
                                        <p className="text-sm text-gray-600">Despliegue e integración con tus sistemas</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <span className="text-white font-bold text-sm">4</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Capacitación y Soporte</p>
                                        <p className="text-sm text-gray-600">Te enseño a usar y optimizar el sistema</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Demo CTA */}
            <section className="max-w-6xl mx-auto px-6 py-20">
                <div className="bg-gradient-to-br from-purple-900 to-indigo-900 text-white rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>

                    <div className="relative z-10">
                        <Headphones className="w-16 h-16 mx-auto mb-6 opacity-90" />
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            ¿Listo para revolucionar tu atención al cliente?
                        </h2>
                        <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                            Agenda una demo personalizada y descubre cómo un contact center con IA puede transformar tu negocio.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contacto"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-purple-50 transition-all font-semibold shadow-lg hover:shadow-xl"
                            >
                                Solicitar Demo Gratuita <ArrowRight size={20} />
                            </Link>
                            <a
                                href="#servicios"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all font-semibold border border-white/20"
                            >
                                Ver Más Detalles
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
