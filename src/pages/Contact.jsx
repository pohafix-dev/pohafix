import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSubmit = (e) => {
        // Formspree or similar can be used here. For now, we simulate success.
        // To get actual mail, the user should point 'action' to their Formspree URL.
    };

    return (
        <div className="bg-surface min-h-screen text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container">
            <Header />

            <main className="max-w-7xl mx-auto px-6 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-20">
                
                {/* Left Side: Info */}
                <div className="space-y-12">
                    <h1 className="font-headline text-7xl md:text-[8rem] font-black text-primary uppercase leading-[0.8] tracking-tighter italic">TALK TO<br/>THE CREW</h1>
                    <p className="text-on-surface-variant font-body text-2xl font-bold uppercase tracking-tight max-w-lg">Got a bulk order? Feedback? Or just want to shout at the moon? We're listening.</p>
                    
                    <div className="space-y-8 pt-10">
                        <div className="flex items-start gap-6 border-l-8 border-primary p-6 bg-surface-container-low shadow-sm">
                            <span className="material-symbols-outlined text-primary text-4xl">mail</span>
                            <div>
                                <h4 className="font-headline text-xl font-black uppercase text-on-surface">EMAIL US</h4>
                                <p className="text-on-surface-variant font-bold text-lg lowercase">pohafix@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-6 border-l-8 border-secondary p-6 bg-surface-container-low shadow-sm">
                            <span className="material-symbols-outlined text-secondary text-4xl">call</span>
                            <div>
                                <h4 className="font-headline text-xl font-black uppercase text-on-surface">WHATSAPP / CALL</h4>
                                <p className="text-on-surface-variant font-bold text-lg">+91 9754684978</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-6 border-l-8 border-primary p-6 bg-surface-container-low shadow-sm">
                            <span className="material-symbols-outlined text-primary text-4xl">location_on</span>
                            <div>
                                <h4 className="font-headline text-xl font-black uppercase text-on-surface">VISIT US</h4>
                                <p className="text-on-surface-variant font-bold text-lg uppercase leading-tight">SYNNNC FOODS, NEAR HANUMAN MANDIR,<br/>DONGARGAON, MANAWAR, DHAR, MP - 454335</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="bg-primary p-1 md:p-12 border-8 border-on-surface shadow-[20px_20px_0px_0px_#ca2221]">
                    <div className="bg-surface p-10 space-y-8">
                        <h2 className="font-headline text-4xl font-black text-on-surface uppercase tracking-tighter">SEND A MESSAGE</h2>
                        <form action="https://formspree.io/f/pohafix@gmail.com" method="POST" className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-on-surface-variant font-black uppercase text-xs">YOUR FULL NAME</label>
                                <input name="name" type="text" placeholder="NAME" required className="w-full bg-surface-container-low p-4 border-4 border-on-surface outline-none focus:border-primary font-black uppercase placeholder:text-on-surface-variant/30 text-on-surface" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-on-surface-variant font-black uppercase text-xs">YOUR EMAIL</label>
                                <input name="email" type="email" placeholder="EMAIL" required className="w-full bg-surface-container-low p-4 border-4 border-on-surface outline-none focus:border-primary font-black uppercase placeholder:text-on-surface-variant/30 text-on-surface" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-on-surface-variant font-black uppercase text-xs">YOUR MESSAGE</label>
                                <textarea name="message" placeholder="WHAT'S ON YOUR MIND?" required className="w-full bg-surface-container-low p-4 border-4 border-on-surface outline-none focus:border-primary font-black uppercase placeholder:text-on-surface-variant/30 h-40 text-on-surface"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-secondary text-on-secondary font-black text-3xl py-6 border-8 border-on-surface shadow-[10px_10px_0px_0px_#ca2221] hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all uppercase font-headline">
                                SEND NOW
                            </button>
                        </form>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Contact;
