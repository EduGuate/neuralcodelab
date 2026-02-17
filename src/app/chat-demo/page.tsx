'use client';

import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import {
    MessageSquare,
    Bot,
    Shield,
    ShieldCheck,
    Zap,
    Clock,
    ArrowRight,
    Headphones,
    CheckCircle,
    AlertTriangle,
    Lock,
    Eye,
    Activity
} from 'lucide-react';

export default function ChatDemoPage() {
    const features = [
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Consultas de Seguridad 24/7",
            description: "Respuestas instantáneas sobre servicios de ciberseguridad, monitoreo AI, pentesting y protección de infraestructura crítica."
        },
        {
            icon: <AlertTriangle className="w-8 h-8" />,
            title: "Evaluación de Amenazas",
            description: "El chatbot ayuda a identificar vulnerabilidades potenciales y recomienda servicios específicos según el nivel de riesgo."
        },
        {
            icon: <Eye className="w-8 h-8" />,
            title: "Información sobre Monitoreo AI",
            description: "Detalles sobre cómo funciona el monitoreo 24/7 con machine learning para detección de anomalías en tiempo real."
        },
        {
            icon: <Lock className="w-8 h-8" />,
            title: "Servicios de Pentesting",
            description: "Información sobre pruebas de penetración automatizadas y validación manual por expertos en seguridad ética."
        },
        {
            icon: <Activity className="w-8 h-8" />,
            title: "Respuesta a Incidentes",
            description: "Guía sobre cómo activar el servicio de respuesta rápida ante amenazas activas y análisis forense."
        },
        {
            icon: <ShieldCheck className="w-8 h-8" />,
            title: "CISO as a Service",
            description: "Consultas sobre liderazgo estratégico en seguridad, evaluaciones de riesgo y cumplimiento ISO 27001."
        }
    ];

    const benefits = [
        "Respuestas inmediatas sobre servicios de ciberseguridad",
        "Evaluación preliminar de necesidades de seguridad",
        "Información sobre precios y planes personalizados",
        "Guía para activar servicios de emergencia",
        "Disponibilidad 24/7 sin tiempos de espera",
        "Escalamiento directo a especialistas cuando sea necesario"
    ];

    const steps = [
        {
            number: "1",
            title: "Cliente describe su situación",
            description: "El chatbot identifica si es una consulta general, evaluación de riesgo o emergencia activa."
        },
        {
            number: "2",
            title: "Análisis inteligente",
            description: "Basado en la información, el bot recomienda servicios específicos de AuraLink."
        },
        {
            number: "3",
            title: "Información detallada",
            description: "El cliente recibe detalles sobre monitoreo AI, pentesting, CISO as a Service, etc."
        },
        {
            number: "4",
            title: "Conexión con expertos",
            description: "Para casos complejos o emergencias, se escala a un especialista en ciberseguridad."
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
            {/* Dialogflow Messenger Script */}
            <Script
                src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"
                strategy="afterInteractive"
            />

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

                <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-emerald-500/20">
                            <Bot className="w-4 h-4 text-emerald-400" />
                            <span className="text-emerald-300">Powered by Dialogflow ES</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            Chat Inteligente para Ciberseguridad
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                            Experimenta cómo <strong className="text-emerald-400">Neuralie</strong>, nuestro agente conversacional de IA, puede ayudar a tus clientes a entender servicios de seguridad, evaluar riesgos y conectar con expertos en tiempo real.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="#chat-live"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                                <MessageSquare size={20} /> Probar Chat Ahora
                            </a>
                            <a
                                href="#como-funciona"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all font-semibold border border-white/20"
                            >
                                ¿Cómo Funciona?
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="max-w-6xl mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        ¿Qué puede hacer este chatbot?
                    </h2>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                        Diseñado para AuraLink AI Security — consultas sobre servicios de ciberseguridad proactiva
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group p-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* How it Works */}
            <section id="como-funciona" className="bg-slate-900/50 backdrop-blur-sm py-20 border-y border-slate-800">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">
                            ¿Cómo funciona el chatbot de seguridad?
                        </h2>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                            Un proceso inteligente que conecta clientes con soluciones de ciberseguridad
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {steps.map((step, index) => (
                            <div key={index} className="relative">
                                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-slate-700 text-center h-full">
                                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                                        {step.number}
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                                {index < steps.length - 1 && (
                                    <div className="hidden md:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                                        <ArrowRight className="w-6 h-6 text-emerald-500" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Live Chat Section */}
            <section id="chat-live" className="bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <MessageSquare className="w-16 h-16 mx-auto mb-6 text-emerald-400" />
                    <h2 className="text-4xl font-bold mb-6">
                        Prueba Neuralie ahora mismo
                    </h2>
                    <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                        Haz clic en el ícono de chat en la esquina inferior derecha para iniciar una conversación. Pregunta sobre servicios de monitoreo AI, pentesting, respuesta a incidentes o CISO as a Service.
                    </p>
                    <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-emerald-500/20 inline-block mb-6">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <Bot className="w-10 h-10 text-emerald-400" />
                            <div className="text-left">
                                <p className="text-2xl font-bold text-white">Neuralie</p>
                                <p className="text-sm text-emerald-300">Agente de Ciberseguridad con IA</p>
                            </div>
                        </div>
                        <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700 text-left space-y-3 mb-4">
                            <p className="text-sm text-emerald-300 font-semibold">💬 Prueba preguntar:</p>
                            <ul className="space-y-2 text-sm text-slate-300">
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-400">→</span>
                                    <span>&quot;¿Qué incluye el servicio de monitoreo 24/7?&quot;</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-400">→</span>
                                    <span>&quot;Necesito un pentest para mi aplicación web&quot;</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-400">→</span>
                                    <span>&quot;¿Qué es CISO as a Service?&quot;</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-400">→</span>
                                    <span>&quot;Tengo una emergencia de seguridad activa&quot;</span>
                                </li>
                            </ul>
                        </div>
                        <p className="text-xs text-slate-400 flex items-center justify-center gap-2">
                            <Bot className="w-4 h-4" />
                            Powered by Google Dialogflow ES
                        </p>
                    </div>
                    <p className="text-sm text-emerald-300 max-w-lg mx-auto">
                        👇 Busca el ícono de chat flotante en la esquina inferior derecha de la pantalla
                    </p>
                </div>
            </section>

            {/* Benefits + CTA */}
            <section className="max-w-6xl mx-auto px-6 py-20">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 border border-slate-700">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-white mb-6">
                                Automatiza consultas de ciberseguridad
                            </h2>
                            <p className="text-lg text-slate-400 mb-8">
                                Implementamos chatbots inteligentes para empresas de seguridad que educan clientes, califican leads y conectan con expertos en tiempo real.
                            </p>
                            <div className="space-y-4">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                                        <p className="text-slate-300 text-lg">{benefit}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-emerald-900/30 to-emerald-950/30 rounded-2xl p-8 border border-emerald-500/20">
                            <Shield className="w-12 h-12 text-emerald-400 mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-4">
                                ¿Quieres un chatbot así para tu empresa?
                            </h3>
                            <p className="text-slate-300 mb-6 leading-relaxed">
                                Diseñamos e implementamos chatbots con Dialogflow adaptados a servicios de ciberseguridad, compliance, y consultoría técnica.
                            </p>
                            <Link
                                href="/contacto"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-all font-semibold shadow-lg hover:shadow-xl w-full"
                            >
                                Solicitar Implementación <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="max-w-6xl mx-auto px-6 py-20">
                <div className="bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white rounded-3xl p-12 md:p-16 text-center relative overflow-hidden border border-emerald-500/20">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>

                    <div className="relative z-10">
                        <Headphones className="w-16 h-16 mx-auto mb-6 text-emerald-400" />
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            ¿Listo para automatizar consultas de seguridad?
                        </h2>
                        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                            Mejora la experiencia de tus clientes con chatbots de IA especializados en ciberseguridad, compliance y servicios técnicos.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contacto"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-all font-semibold shadow-lg hover:shadow-xl"
                            >
                                Contáctanos <ArrowRight size={20} />
                            </Link>
                            <Link
                                href="/contact-center"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all font-semibold border border-white/20"
                            >
                                Ver Contact Center con IA
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dialogflow Messenger Widget */}
            <div
                dangerouslySetInnerHTML={{
                    __html: `<df-messenger
                        chat-title="Neuralie"
                        agent-id="1196c3a8-2613-4ed7-81e4-76ea73f3dfbf"
                        language-code="en"
                    ></df-messenger>`
                }}
            />

            {/* Custom styles for the Dialogflow widget */}
            <style jsx global>{`
                df-messenger {
                    --df-messenger-bot-message: #064e3b;
                    --df-messenger-button-titlebar-color: #10b981;
                    --df-messenger-chat-background-color: #0f172a;
                    --df-messenger-font-color: #e2e8f0;
                    --df-messenger-send-icon: #10b981;
                    --df-messenger-user-message: #10b981;
                    --df-messenger-titlebar-font-color: #ffffff;
                    z-index: 9999;
                }
            `}</style>
        </div>
    );
}
