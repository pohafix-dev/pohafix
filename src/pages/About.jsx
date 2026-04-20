import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
    return (
        <>
        <Header />
        <main className="pt-24 lg:pt-32 pb-10 overflow-x-hidden min-h-screen">
            {/* Hero Section */}
            <section className="max-w-4xl mx-auto px-6 text-center mb-16">
                <span className="text-primary font-bold tracking-widest uppercase text-sm mb-6 block">Our Heritage</span>
                <h1 className="text-5xl md:text-7xl font-black text-on-surface tracking-tight mb-8 leading-tight">
                    More than breakfast. <br />
                    <span className="text-outline">It's a feeling.</span>
                </h1>
                <p className="text-xl text-on-surface-variant leading-relaxed max-w-2xl mx-auto">
                    We started Pohafix and Mom Magic to preserve the nostalgic essence of an authentic Indori morning, bringing traditional home-kitchen quality directly to your table.
                </p>
            </section>

            {/* Main Banner Image */}
            <section className="max-w-7xl mx-auto px-6 mb-32">
                <div className="w-full h-[500px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl relative">
                    <div className="absolute inset-0 bg-primary/10 z-10 mix-blend-overlay"></div>
                    <img 
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000" 
                        alt="Sunny morning dining scene with family sharing a meal of poha and tea" 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlu1rndq01aJY3Ca_C6O_RGcpUywsMK0FuA1hqB9riWJfviTht5lu-MRn1uz6_738BRxc13WyTZExI1UFoEjfb0S16CI6l9B-11xkj0c5rvx_o3fvw6AmDuoMwadiHtG_fJ8XmLnL4Z8iK7QoS_r3emVJ7Oe0L9VYEz_fmglfTHR_lWC_A4tdxEcBHmDs3foCJJfUnxXSLiWmhR9uyVKS64U-R46uYXU9xB4Le7Dxom9Tt9MfHK4cJIezj17rCOxlGlyMJgfUiSw" 
                    />
                </div>
            </section>

            {/* Story Grid / Timeline */}
            <section className="max-w-7xl mx-auto px-6 mb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-24">
                    <div className="order-2 md:order-1">
                        <h2 className="text-4xl font-black mb-6">The Industrial Problem</h2>
                        <p className="text-lg text-on-surface-variant leading-relaxed mb-6">
                            For years, the packaged food industry has prioritized shelf life over human life. Mass-produced breakfasts are loaded with hidden chemicals, artificial preservatives, and synthetic colors just so a box can sit in a warehouse for two years.
                        </p>
                        <p className="text-lg text-on-surface-variant leading-relaxed">
                            We realized that true culinary joy—the kind you get from your grandmother's kitchen—was being erased by industrial convenience. We refused to let that happen to our beloved Indori Poha.
                        </p>
                    </div>
                    <div className="order-1 md:order-2 bg-surface-container-low rounded-[2rem] p-12 relative aspect-square flex items-center justify-center">
                        <span className="material-symbols-outlined text-9xl text-outline-variant opacity-20 absolute rotate-12">factory</span>
                        <h3 className="text-3xl font-bold text-center z-10 text-on-surface">"Shelf life<br/>vs<br/>Human life."</h3>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                    <div className="bg-primary/5 rounded-[2rem] p-12 relative aspect-square flex flex-col items-center justify-center border-8 border-surface-container-lowest shadow-xl">
                        <span className="material-symbols-outlined text-6xl text-primary mb-6">group</span>
                        <h3 className="text-3xl font-bold text-center z-10 text-on-surface mb-4">The Home-Kitchen<br/>Revolution</h3>
                        <p className="text-center text-on-surface-variant font-medium">Reclaiming the lost art of maternal cooking.</p>
                    </div>
                    <div>
                        <h2 className="text-4xl font-black mb-6">Our Artisanal Solution</h2>
                        <p className="text-lg text-on-surface-variant leading-relaxed mb-6">
                            We went back to the roots. Instead of building a massive automated factory, we established a network of hygienic home kitchens run by experienced mothers across Malwa. 
                        </p>
                        <p className="text-lg text-on-surface-variant leading-relaxed">
                            Instead of adding preservatives to make our food last for years, we adopted an entirely different philosophy: <strong className="text-primary">We only make it when you order it.</strong> This zero-inventory model guarantees that every packet of Pohafix and Mom Magic Sev you receive is fresh, pure, and filled with authentic soul.
                        </p>
                    </div>
                </div>
            </section>

            {/* The Philosophy Manifesto Bento */}
            <section className="bg-surface-container-high py-24 px-6 mb-24">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-on-background mb-4">Our Non-Negotiables</h2>
                        <p className="text-on-surface-variant text-lg">The three pillars that hold our kitchen together.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-surface-container-lowest p-10 rounded-2xl shadow-sm hover:shadow-xl transition-shadow flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-primary-fixed rounded-2xl flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined text-primary text-3xl">no_drinks</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Zero Chemicals</h3>
                            <p className="text-on-surface-variant">If your grandmother couldn't pronounce the ingredient, it doesn't go into our food. Simple as that.</p>
                        </div>
                        <div className="bg-surface-container-lowest p-10 rounded-2xl shadow-sm hover:shadow-xl transition-shadow flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-secondary-fixed rounded-2xl flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined text-secondary text-3xl">wb_sunny</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Made To Order</h3>
                            <p className="text-on-surface-variant">Production begins strictly after order confirmation. You get the brightest, freshest batch possible.</p>
                        </div>
                        <div className="bg-surface-container-lowest p-10 rounded-2xl shadow-sm hover:shadow-xl transition-shadow flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-tertiary-fixed rounded-2xl flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined text-tertiary text-3xl">handshake</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Empowering Moms</h3>
                            <p className="text-on-surface-variant">Every purchase supports our network of micro-entrepreneur mothers who hand-craft our spices and sev.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Strip */}
            <section className="max-w-5xl mx-auto px-6 text-center">
                <span className="material-symbols-outlined text-6xl text-outline-variant mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                <h2 className="text-4xl md:text-5xl font-black mb-8">Taste the Tradition</h2>
                <p className="text-xl text-on-surface-variant mb-10 max-w-2xl mx-auto">
                    Are you ready to transform your rushed, unhealthy mornings into a genuine culinary experience? 
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link to="/shop" className="px-10 py-5 bg-primary text-on-primary rounded-full font-bold text-lg hover:bg-primary-container transition-all active:scale-95 shadow-xl shadow-primary/20">
                        Shop Pohafix Classic
                    </Link>
                    <Link to="/mom-magic" className="px-10 py-5 bg-secondary text-on-secondary rounded-full font-bold text-lg hover:bg-[#5a4200] transition-all active:scale-95 shadow-xl shadow-secondary/20">
                        Shop Mom Magic Sev
                    </Link>
                </div>
            </section>
        </main>
        <Footer />
        </>
    );
};

export default About;
