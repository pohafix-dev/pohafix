import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ThankYou = () => {
    const location = useLocation();
    const order = location.state?.order;
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-surface text-on-surface font-body selection:bg-secondary-container selection:text-on-secondary-container min-h-screen">
            <Header />
            
            <main className="min-h-[calc(100vh-160px)] flex flex-col items-center justify-center relative overflow-hidden px-4 py-12">
                {/* Background Textural Layer */}
                <div className="absolute inset-0 pointer-events-none opacity-5 mix-blend-multiply select-none flex items-center justify-center overflow-hidden">
                    <span className="text-[20vw] font-black text-primary leading-none rotate-[-5deg] whitespace-nowrap">ताज़ा स्वादिष्ट पोहा</span>
                </div>

                <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
                    {/* Hero Imagery (Asymmetric Bento Style) */}
                    <div className="md:col-span-6 relative">
                        <div className="relative z-20 transform rotate-[-2deg] transition-transform hover:rotate-0 duration-500">
                            <img 
                                alt="Delicious Indori Poha" 
                                className="rounded-xl shadow-2xl grayscale-[0.2] hover:grayscale-0 transition-all duration-700 w-full" 
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1isQatd0_mVLLFTOuNfElrTSZp-B71CCwbrirU6JOIlSnMqlW59ePPQNDlMFprU_zoZVlRrnYY7MJrtkbIa_FVaYqI4YfmUcRL_4unqQKvQP5vCVl1VqlCHe57zEUASe5lc4lo1h4LKACCb5o4qO7PML46ST54d2wxOQ4OnibIH7k5GtrpbmFf5NGrAhcL6si2Z_1ngzGwoh7I8wdIoM3WDBc5bGycTvKEJaD2EaLnB3XD1C4HNP_QYNRjoW5A8_Kng2jsPvISf0"
                            />
                            {/* Overlay Label */}
                            <div className="absolute -bottom-4 -right-4 bg-[#fec330] text-black px-6 py-2 rounded-lg font-headline font-extrabold shadow-lg border-2 border-white transform rotate-[3deg]">
                                CHAMPION NASTA
                            </div>
                        </div>
                        {/* Secondary decorative image */}
                        <div className="absolute -top-12 -left-8 w-40 h-40 hidden md:block transform rotate-[15deg] opacity-80">
                            <img 
                                alt="Indore Streets" 
                                className="rounded-lg shadow-xl" 
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFCD5ZvVhStM4tJDaQ_27P6HrRlXtiwwNuHh2KzlcFT6neiSxFaUTUg0pbg8bMIUB29J6AYTBU8B24UUK-xLwmZ4Dzbe-hoLiEA_5B9t84fS5BQlAYx_xKlkxGeRzFrOnk3v980TPnnylmj3QIrtIOYr2v1ADxbRoc5_J5pDYP8D_Pq-yjZGerwQ8vl4MJNVITPzB2tUOKHUGJp6mjLTLjlA0g3JNFtNCRNQkjZEmahqDLGeWB_7FUZv9SqbEWkPVOgZP-m87Y9MU"
                            />
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="md:col-span-6 flex flex-col space-y-8">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 bg-tertiary-container/10 text-tertiary px-3 py-1 rounded-full text-xs font-label font-bold uppercase tracking-widest">
                                <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                                Order Confirmed
                            </div>
                            <h1 className="text-5xl md:text-7xl font-headline font-black text-primary leading-[0.95] tracking-tighter">
                                Shukriya! <br/>
                                <span className="text-on-surface">Your Indori Breakfast is on its way.</span>
                            </h1>
                            <p className="text-lg text-on-surface-variant font-body max-w-md">
                                The steam is rising, the jeeravan is dusted. We're packing your nostalgia with extra care and a side of Indore's morning soul.
                            </p>
                        </div>

                        {/* Order Details Card (Newspaper Snip Style) */}
                        <div className="bg-surface-variant p-8 relative overflow-hidden" 
                            style={{ 
                                maskImage: "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 100 10\" preserveAspectRatio=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 10 L5 8 L10 10 L15 7 L20 10 L25 8 L30 10 L35 7 L40 10 L45 8 L50 10 L55 7 L60 10 L65 8 L70 10 L75 7 L80 10 L85 8 L90 10 L95 7 L100 10 V0 H0 Z\" fill=\"black\"/></svg>')",
                                WebkitMaskImage: "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 100 10\" preserveAspectRatio=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 10 L5 8 L10 10 L15 7 L20 10 L25 8 L30 10 L35 7 L40 10 L45 8 L50 10 L55 7 L60 10 L65 8 L70 10 L75 7 L80 10 L85 8 L90 10 L95 7 L100 10 V0 H0 Z\" fill=\"black\"/></svg>')"
                            }}
                        >
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <p className="text-[10px] font-label font-bold uppercase tracking-tighter text-on-surface-variant/60 mb-1">Receipt ID</p>
                                    <p className="font-headline font-bold text-xl text-on-surface">{order ? `#${order.orderId}` : `#PFX-${Math.floor(100000 + Math.random() * 900000)}`}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-label font-bold uppercase tracking-tighter text-on-surface-variant/60 mb-1">Estimated Arrival</p>
                                    <p className="font-headline font-bold text-xl text-on-surface">2-3 Days</p>
                                </div>
                            </div>
                            <div className="mt-6 pt-6 border-t border-outline-variant/30 flex items-center justify-between">
                                <span className="font-label font-bold text-sm text-secondary">Awaiting Despatch</span>
                                <div className="flex -space-x-2">
                                    <div className="w-8 h-8 rounded-full bg-primary border-2 border-surface-variant flex items-center justify-center">
                                        <span className="material-symbols-outlined text-white text-xs">local_shipping</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link className="inline-flex items-center justify-center px-8 py-4 bg-primary text-on-primary font-headline font-extrabold rounded-md shadow-[inset_0_2px_4px_rgba(255,255,255,0.1)] hover:scale-105 active:scale-95 transition-all" to="/">
                                Back to Home
                            </Link>
                            <Link className="inline-flex items-center justify-center px-8 py-4 bg-surface-container-highest text-on-surface font-headline font-bold rounded-md hover:bg-outline-variant/20 transition-all gap-2" to="/blog">
                                <span className="material-symbols-outlined text-[18px]">share</span>
                                Poha Journey
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            {/* Success Stats / Social Proof (Bento Section) */}
            <section className="bg-surface-container-low py-20 px-6">
                <div className="max-w-screen-2xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-surface-container-lowest p-10 rounded-xl shadow-sm border-b-4 border-secondary transition-transform hover:-translate-y-2">
                            <h3 className="font-headline font-black text-4xl text-primary mb-2">98%</h3>
                            <p className="font-body text-on-surface-variant">Of our customers say it feels just like Indore morning air.</p>
                        </div>
                        <div className="bg-surface-container-lowest p-10 rounded-xl shadow-sm border-b-4 border-primary transition-transform hover:-translate-y-2">
                            <h3 className="font-headline font-black text-4xl text-primary mb-2">Handmade</h3>
                            <p className="font-body text-on-surface-variant">Steam-cooked following the traditional 4-step artisan process.</p>
                        </div>
                        <div className="bg-surface-container-lowest p-10 rounded-xl shadow-sm border-b-4 border-tertiary transition-transform hover:-translate-y-2">
                            <h3 className="font-headline font-black text-4xl text-primary mb-2">Direct</h3>
                            <p className="font-body text-on-surface-variant">Sourced straight from the malwa region for authentic texture.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

            {/* Newspaper Texture Overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] mix-blend-multiply z-[60]"></div>
        </div>
    );
};

export default ThankYou;
