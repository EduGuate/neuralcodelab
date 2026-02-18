'use client';

import React from 'react';
import Link from 'next/link';
import FloatingWidget from '@/components/FloatingWidget';
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
    Monitor
} from 'lucide-react';
import { useTranslation } from '@/lib/useTranslation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function ContactCenterPage() {
    const { t } = useTranslation();

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
            benefits: ["Insights accionables", "Mayor tasa de response", "Análisis automático"]
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
        <div className="min-h-screen bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-primary text-primary-foreground">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-foreground/10 via-transparent to-transparent opacity-30"></div>

                <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <Badge variant="secondary" className="mb-6 gap-2 px-4 py-1.5">
                            <Bot className="w-4 h-4" />
                            {t('contactCenter.badge')}
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            {t('contactCenter.hero')}
                        </h1>
                        <p className="text-xl text-primary-foreground/80 mb-10 leading-relaxed max-w-3xl mx-auto">
                            {t('contactCenter.description')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" variant="secondary" className="gap-2 px-8 py-6 text-lg">
                                <Link href="/contacto">
                                    {t('contactCenter.requestDemo')} <ArrowRight size={20} />
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground/20 hover:bg-primary-foreground/10 px-8 py-6 text-lg">
                                <a href="#servicios">
                                    {t('contactCenter.viewServices')}
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section id="servicios" className="max-w-6xl mx-auto px-6 py-24">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-foreground mb-4">
                        {t('contactCenter.servicesTitle')}
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        {t('contactCenter.servicesDesc')}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Card
                            key={index}
                            className="group hover:border-primary hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <CardHeader>
                                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center text-primary-foreground mb-4 group-hover:scale-110 transition-transform">
                                    {service.icon}
                                </div>
                                <CardTitle className="text-xl font-bold">
                                    {service.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground leading-relaxed">
                                    {service.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Capabilities Section */}
            <section className="bg-muted/30 py-24 border-y">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-foreground mb-4">
                            {t('contactCenter.capabilitiesTitle')}
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            {t('contactCenter.capabilitiesDesc')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {capabilities.map((capability, index) => (
                            <Card key={index} className="shadow-lg border-none bg-background">
                                <CardHeader>
                                    <CardTitle className="text-2xl font-bold flex items-center gap-3">
                                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                            <span className="text-primary font-bold">{index + 1}</span>
                                        </div>
                                        {capability.category}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3">
                                        {capability.items.map((item, itemIndex) => (
                                            <li key={itemIndex} className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                                <span className="text-muted-foreground">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* N8N Integration Section */}
            <section className="max-w-6xl mx-auto px-6 py-24">
                <div className="text-center mb-16">
                    <Badge variant="outline" className="mb-4 gap-2">
                        <Workflow className="w-4 h-4" />
                        Automatización Avanzada
                    </Badge>
                    <h2 className="text-4xl font-bold text-foreground mb-4">
                        {t('contactCenter.n8nTitle')}
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        {t('contactCenter.n8nDesc')}
                    </p>
                </div>

                <Card className="bg-primary text-primary-foreground border-none shadow-2xl overflow-hidden mb-12">
                    <CardContent className="p-8 md:p-12 relative">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
                        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                            <div>
                                <h3 className="text-3xl font-bold mb-6">¿Qué es N8N?</h3>
                                <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
                                    N8N es una plataforma de automatización que permite conectar tus agentes de IA con más de 400 aplicaciones y servicios. Creo workflows personalizados que automatizan procesos completos sin escribir código.
                                </p>
                                <div className="space-y-4">
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
                            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-primary-foreground">
                                <CardHeader>
                                    <CardTitle className="text-xl">Ejemplo de Workflow</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    {[
                                        "Cliente llama al agente",
                                        "Agente consulta CRM automáticamente",
                                        "Crea ticket en sistema de soporte",
                                        "Envía resumen por email y WhatsApp"
                                    ].map((step, i) => (
                                        <div key={i} className="bg-white/5 rounded-lg p-3 border border-white/10 flex items-center gap-3">
                                            <div className="w-6 h-6 bg-primary-foreground/20 rounded-full flex items-center justify-center text-xs font-bold">{i + 1}</div>
                                            <span className="font-medium">{step}</span>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        </div>
                    </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {n8nIntegrations.map((integration, index) => (
                        <Card
                            key={index}
                            className="hover:border-primary transition-all duration-300"
                        >
                            <CardHeader>
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-2">
                                    {integration.icon}
                                </div>
                                <CardTitle className="text-lg font-bold">
                                    {integration.title}
                                </CardTitle>
                                <CardDescription>
                                    {integration.description}
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Use Cases */}
            <section className="bg-muted/30 py-24 border-y">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-foreground mb-4">
                            Casos de Uso
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            Soluciones probadas para diferentes necesidades empresariales
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {useCases.map((useCase, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow border-none shadow-md bg-background">
                                <CardHeader>
                                    <CardTitle className="text-2xl font-bold">
                                        {useCase.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                                        {useCase.description}
                                    </p>
                                    <div className="space-y-3">
                                        {useCase.benefits.map((benefit, benefitIndex) => (
                                            <div key={benefitIndex} className="flex items-center gap-2">
                                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                                                <span className="text-foreground">{benefit}</span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Demo Phone Section */}
            <section id="demo" className="bg-primary text-primary-foreground py-24 relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <Headphones className="w-20 h-20 mx-auto mb-8 opacity-90" />
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        {t('contactCenter.demoTitle')}
                    </h2>
                    <p className="text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
                        {t('contactCenter.demoDesc')}
                    </p>
                    <Card className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border-white/20 inline-block text-primary-foreground shadow-2xl">
                        <p className="text-sm text-primary-foreground/70 mb-4 uppercase tracking-widest">{t('contactCenter.demoNumber')}</p>
                        <a
                            href="tel:+18054396103"
                            className="text-4xl md:text-6xl font-bold hover:text-white transition-colors block mb-6"
                        >
                            +1 805 439 6103
                        </a>
                        <div className="flex flex-col gap-2 items-center text-primary-foreground/80">
                            <p className="flex items-center gap-2">
                                <Globe className="w-4 h-4" />
                                {t('contactCenter.location')}
                            </p>
                            <Badge variant="secondary" className="gap-2 px-4 py-1.5 mt-4">
                                <Bot className="w-4 h-4" />
                                {t('contactCenter.aiPowered')}
                            </Badge>
                        </div>
                    </Card>
                </div>
            </section>

            {/* Benefits & Process */}
            <section className="max-w-6xl mx-auto px-6 py-24">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-foreground mb-8">
                            {t('contactCenter.whyChoose')}
                        </h2>
                        <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                            {t('contactCenter.whyChooseDesc')}
                        </p>
                        <div className="space-y-4">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                                        <CheckCircle className="w-4 h-4 text-primary" />
                                    </div>
                                    <p className="text-foreground text-lg leading-tight">{benefit}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Card className="border-none shadow-2xl bg-muted/30">
                        <CardHeader className="pb-4">
                            <CardTitle className="text-2xl font-bold">
                                {t('contactCenter.implementationProcess')}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-8">
                            {[
                                { title: "Análisis de Necesidades", desc: "Entiendo tu negocio y objetivos" },
                                { title: "Diseño de Solución", desc: "Creo workflows y configuro agentes" },
                                { title: "Implementación", desc: "Despliegue e integración con tus sistemas" },
                                { title: "Capacitación y Soporte", desc: "Te enseño a usar y optimizar el sistema" }
                            ].map((step, i) => (
                                <div key={i} className="flex items-start gap-4 relative group">
                                    {i < 3 && <div className="absolute left-5 top-10 w-0.5 h-10 bg-primary/20"></div>}
                                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center flex-shrink-0 z-10 shadow-lg group-hover:scale-110 transition-transform text-white">
                                        <span className="font-bold">{i + 1}</span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-foreground text-lg">{step.title}</p>
                                        <p className="text-muted-foreground">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Final CTA */}
            <section className="max-w-6xl mx-auto px-6 py-24">
                <Card className="bg-primary text-primary-foreground p-12 md:p-16 text-center border-none overflow-hidden relative shadow-2xl">
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
                    <div className="relative z-10">
                        <Headphones className="w-16 h-16 mx-auto mb-8 opacity-90" />
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            {t('contactCenter.readyToRevolutionize')}
                        </h2>
                        <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
                            {t('contactCenter.readyToRevolutionizeDesc')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" variant="secondary" className="gap-2 px-8 py-6 text-lg font-bold">
                                <Link href="/contacto">
                                    Solicitar Demo Gratuita <ArrowRight size={20} />
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="bg-transparent border-white/20 hover:bg-white/10 text-white px-8 py-6 text-lg">
                                <a href="#servicios">
                                    Ver Más Detalles
                                </a>
                            </Button>
                        </div>
                    </div>
                </Card>
            </section>
            <FloatingWidget />
        </div>
    );
}
