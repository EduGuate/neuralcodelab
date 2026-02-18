'use client';

import React from 'react';
import Link from 'next/link';
import {
    MessageSquare,
    Bot,
    Shield,
    ShieldCheck,
    ArrowRight,
    Headphones,
    CheckCircle,
    AlertTriangle,
    Lock,
    Eye,
    Activity
} from 'lucide-react';
import { useTranslation } from '@/lib/useTranslation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ChatServicesPage() {
    const { t } = useTranslation();

    const features = [
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Consultas de Seguridad 24/7",
            description: "Respuestas instantáneas sobre servicios de ciberseguridad, monitoreo AI, pentesting y protección de infraestructura crítica."
        },
        {
            icon: <AlertTriangle className="w-8 h-8" />,
            title: "Evaluación de Amenazas",
            description: "Ayudamos a identificar vulnerabilidades potenciales y recomienda servicios específicos según el nivel de riesgo."
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
            title: "Describe su situación",
            description: "Identificamos si es una consulta general, evaluación de riesgo o emergencia activa."
        },
        {
            number: "2",
            title: "Análisis inteligente",
            description: "Basado en la información, recomendamos servicios específicos adaptados."
        },
        {
            number: "3",
            title: "Información detallada",
            description: "Reciba detalles sobre monitoreo AI, pentesting, CISO as a Service, etc."
        },
        {
            number: "4",
            title: "Conexión con expertos",
            description: "Para casos complejos o emergencias, conectamos con un especialista en ciberseguridad."
        }
    ];

    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-primary text-primary-foreground">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-foreground/10 via-transparent to-transparent opacity-30"></div>

                <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <Badge variant="secondary" className="mb-6 gap-2 px-4 py-1.5 border-primary-foreground/20">
                            <Bot className="w-4 h-4" />
                            {t('chatServices.badge')}
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            {t('chatServices.hero')}
                        </h1>
                        <p className="text-xl text-primary-foreground/80 mb-10 leading-relaxed max-w-3xl mx-auto">
                            {t('chatServices.description')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" variant="secondary" className="gap-2 px-8 py-6 text-lg">
                                <Link href="/contacto">
                                    <MessageSquare size={20} /> {t('chatServices.tryChatNow')}
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground/20 hover:bg-primary-foreground/10 px-8 py-6 text-lg">
                                <a href="#como-funciona">
                                    {t('chatServices.howItWorks')}
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="max-w-6xl mx-auto px-6 py-24">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-foreground mb-4">
                        {t('chatServices.featuresTitle')}
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        {t('chatServices.featuresDesc')}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <Card
                            key={index}
                            className="group hover:border-primary transition-all duration-300 transform hover:-translate-y-1 border-none shadow-md"
                        >
                            <CardHeader>
                                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <CardTitle className="text-xl font-bold">
                                    {feature.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground leading-relaxed">
                                    {feature.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* How it Works */}
            <section id="como-funciona" className="bg-muted/30 py-24 border-y">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-foreground mb-4">
                            {t('chatServices.howItWorksTitle')}
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            {t('chatServices.howItWorksDesc')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {steps.map((step, index) => (
                            <div key={index} className="relative group">
                                <Card className="text-center h-full border-none shadow-lg group-hover:shadow-xl transition-shadow bg-background">
                                    <CardContent className="pt-8">
                                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xl font-bold mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                                            {step.number}
                                        </div>
                                        <h3 className="text-lg font-bold text-foreground mb-3">
                                            {step.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            {step.description}
                                        </p>
                                    </CardContent>
                                </Card>
                                {index < steps.length - 1 && (
                                    <div className="hidden md:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10 opacity-20">
                                        <ArrowRight className="w-6 h-6 text-primary" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits + CTA */}
            <section className="max-w-6xl mx-auto px-6 py-24">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-foreground mb-8">
                            {t('chatServices.automateTitle')}
                        </h2>
                        <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                            {t('chatServices.automateDesc')}
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
                        <CardHeader>
                            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-primary-foreground mb-6 shadow-lg">
                                <Shield className="w-10 h-10" />
                            </div>
                            <CardTitle className="text-2xl font-bold">
                                {t('chatServices.wantChatbot')}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                                {t('chatServices.wantChatbotDesc')}
                            </p>
                            <Button asChild size="lg" className="w-full py-8 text-lg font-bold gap-3">
                                <Link href="/contacto">
                                    {t('chatServices.requestImplementation')} <ArrowRight size={24} />
                                </Link>
                            </Button>
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
                            {t('chatServices.readyToAutomate')}
                        </h2>
                        <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                            {t('chatServices.readyToAutomateDesc')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" variant="secondary" className="gap-2 px-8 py-6 text-lg font-bold">
                                <Link href="/contacto">
                                    {t('header.contact')} <ArrowRight size={20} />
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="bg-transparent border-white/20 hover:bg-white/10 text-white px-8 py-6 text-lg">
                                <Link href="/contact-center">
                                    {t('chatServices.viewContactCenter')}
                                </Link>
                            </Button>
                        </div>
                    </div>
                </Card>
            </section>
        </div>
    );
}
