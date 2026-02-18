'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, CheckCircle, Smartphone, Building2, Users, Headphones, ArrowRight, MessageSquare, Shield, Zap } from 'lucide-react';
import { useTranslation } from '@/lib/useTranslation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ThreeCXPage() {
    const { t } = useTranslation();
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
        <div className="min-h-screen bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-primary text-primary-foreground">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-foreground/10 via-transparent to-transparent opacity-30"></div>

                <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <Badge variant="secondary" className="mb-6 gap-2 px-4 py-1.5">
                                <Phone className="w-4 h-4" />
                                {t('threeCX.badge')}
                            </Badge>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                                {t('threeCX.hero')}
                            </h1>
                            <p className="text-xl text-primary-foreground/80 mb-10 leading-relaxed">
                                {t('threeCX.description')}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button asChild size="lg" variant="secondary" className="gap-2 px-8 py-6 text-lg">
                                    <a href="tel:+15674061261">
                                        <Phone size={20} /> {t('threeCX.callNow')}
                                    </a>
                                </Button>
                                <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground/20 hover:bg-primary-foreground/10 px-8 py-6 text-lg">
                                    <a href="#demo">
                                        {t('threeCX.viewDemo')} <ArrowRight size={20} />
                                    </a>
                                </Button>
                            </div>
                        </div>

                        <div className="relative">
                            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-primary-foreground shadow-2xl">
                                <CardHeader className="flex flex-row items-center gap-4">
                                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                                        <Phone className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-xl">{t('threeCX.demoLineActive')}</p>
                                        <p className="text-primary-foreground/70 text-sm">{t('threeCX.trySystemNow')}</p>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="bg-white/5 rounded-2xl p-6 mb-6 border border-white/10">
                                        <p className="text-sm text-primary-foreground/70 mb-2">{t('threeCX.demoNumber')}</p>
                                        <a href="tel:+15674061261" className="text-3xl md:text-4xl font-bold hover:text-white transition-colors block">
                                            +1 567 406 1261
                                        </a>
                                    </div>
                                    <p className="text-sm text-primary-foreground/80 italic">
                                        {t('threeCX.demoQualityDesc')}
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="max-w-6xl mx-auto px-6 py-24">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-foreground mb-4">
                        {t('threeCX.whyChoose')}
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        {t('threeCX.whyChooseDesc')}
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

            {/* Benefits Section */}
            <section className="bg-muted/30 py-24 border-y">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-foreground mb-8">
                                {t('threeCX.benefitsTitle')}
                            </h2>
                            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                                {t('threeCX.benefitsDesc')}
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

                        <Card className="shadow-2xl border-none">
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold">
                                    {t('threeCX.whatIncluded')}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-8">
                                {[
                                    { title: "Instalación en tu dispositivo", desc: "App configurada y lista para usar" },
                                    { title: "Capacitación básica", desc: "Aprende a usar todas las funciones" },
                                    { title: "Soporte inicial", desc: "Asistencia durante la configuración" },
                                    { title: "Consultoría de integración", desc: "Orientación para tu negocio" }
                                ].map((step, i) => (
                                    <div key={i} className="flex items-start gap-4 relative group">
                                        {i < 3 && <div className="absolute left-5 top-10 w-0.5 h-10 bg-primary/20"></div>}
                                        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center flex-shrink-0 z-10 shadow-lg group-hover:scale-110 transition-transform">
                                            <span className="text-white font-bold">{i + 1}</span>
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
                </div>
            </section>

            {/* Use Cases */}
            <section className="max-w-6xl mx-auto px-6 py-24">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-foreground mb-4">
                        {t('threeCX.idealFor')}
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        {t('threeCX.idealForDesc')}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {useCases.map((useCase, index) => (
                        <Card
                            key={index}
                            className="p-2 hover:shadow-lg transition-all border-muted-foreground/10"
                        >
                            <CardHeader>
                                <CardTitle className="text-lg font-bold">
                                    {useCase.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {useCase.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Demo Section */}
            <section id="demo" className="bg-primary text-primary-foreground py-24 relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <Headphones className="w-20 h-20 mx-auto mb-8 opacity-90" />
                    <h2 className="text-4xl font-bold mb-6">
                        {t('threeCX.tryRightNow')}
                    </h2>
                    <p className="text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
                        {t('threeCX.tryRightNowDesc')}
                    </p>
                    <Card className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border-white/20 inline-block text-primary-foreground shadow-2xl">
                        <p className="text-sm text-primary-foreground/70 mb-4 uppercase tracking-widest">{t('threeCX.demoNumber')}</p>
                        <a
                            href="tel:+15674061261"
                            className="text-4xl md:text-6xl font-bold hover:text-white transition-colors block mb-6"
                        >
                            +1 567 406 1261
                        </a>
                        <p className="text-sm text-primary-foreground/80">
                            {t('threeCX.available247')}
                        </p>
                    </Card>
                </div>
            </section>

            {/* Final CTA */}
            <section className="max-w-6xl mx-auto px-6 py-24">
                <Card className="bg-primary text-primary-foreground p-12 md:p-16 text-center border-none overflow-hidden relative shadow-2xl">
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            {t('threeCX.modernizeToday')}
                        </h2>
                        <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
                            {t('threeCX.modernizeDesc')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" variant="secondary" className="gap-2 px-8 py-6 text-lg font-bold">
                                <a href="tel:+15674061261">
                                    <Phone size={20} /> {t('threeCX.callNow')}
                                </a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="bg-transparent border-white/20 hover:bg-white/10 text-white px-8 py-6 text-lg">
                                <Link href="/contacto">
                                    {t('threeCX.moreInfo')} <ArrowRight size={20} />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </Card>
            </section>
        </div>
    );
}
