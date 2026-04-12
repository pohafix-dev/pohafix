import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSubmit = (e) => {
        // Formspree or similar can be used here. For now, we simulate success.
        // To get actual mail, the user should point 'action' to their Formspree URL.
    };

    return (
        <div className="bg-black min-h-screen text-white font-body selection:bg-primary selection:text-black">
            <header className="p-6 border-b-8 border-black bg-black flex justify-center sticky top-0 z-50">
                <Link to="/">
                    <img src="/logo.png" alt="Pohafix Logo" className="h-12 w-auto" />
                </Link>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-20">
                
                {/* Left Side: Info */}
                <div className="space-y-12">
                    <h1 className="font-headline text-7xl md:text-[8rem] font-black text-secondary uppercase leading-[0.8] tracking-tighter italic">TALK TO<br/>THE CREW</h1>
                    <p className="text-white/60 font-body text-2xl font-bold uppercase tracking-tight max-w-lg">Got a bulk order? Feedback? Or just want to shout at the moon? We're listening.</p>
                    
                    <div className="space-y-8 pt-10">
                        <div className="flex items-start gap-6 border-l-8 border-primary p-6 bg-white/5">
                            <span className="material-symbols-outlined text-primary text-4xl">mail</span>
                            <div>
                                <h4 className="font-headline text-xl font-black uppercase text-white">EMAIL US</h4>
                                <p className="text-white/40 font-bold text-lg">pohafix@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-6 border-l-8 border-secondary p-6 bg-white/5">
                            <span className="material-symbols-outlined text-secondary text-4xl">call</span>
                            <div>
                                <h4 className="font-headline text-xl font-black uppercase text-white">WHATSAPP / CALL</h4>
                                <p className="text-white/40 font-bold text-lg">+91 9754684978</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-6 border-l-8 border-primary p-6 bg-white/5">
                            <span className="material-symbols-outlined text-primary text-4xl">location_on</span>
                            <div>
                                <h4 className="font-headline text-xl font-black uppercase text-white">VISIT US</h4>
                                <p className="text-white/40 font-bold text-lg uppercase leading-tight">SYNNNC FOODS, NEAR HANUMAN MANDIR,<br/>DONGARGAON, MANAWAR, DHAR, MP - 454335</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="bg-primary p-1 md:p-12 border-8 border-black shadow-[20px_20px_0px_0px_#ca2221]">
                    <div className="bg-black p-10 space-y-8">
                        <h2 className="font-headline text-4xl font-black text-white uppercase tracking-tighter">SEND A MESSAGE</h2>
                        <form action="https://formspree.io/f/pohafix@gmail.com" method="POST" className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-white/40 font-black uppercase text-xs">YOUR FULL NAME</label>
                                <input name="name" type="text" placeholder="NAME" required className="w-full bg-surface-container p-4 border-4 border-black outline-none focus:border-primary font-black uppercase placeholder:text-black/30 text-black" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-white/40 font-black uppercase text-xs">YOUR EMAIL</label>
                                <input name="email" type="email" placeholder="EMAIL" required className="w-full bg-surface-container p-4 border-4 border-black outline-none focus:border-primary font-black uppercase placeholder:text-black/30 text-black" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-white/40 font-black uppercase text-xs">YOUR MESSAGE</label>
                                <textarea name="message" placeholder="WHAT'S ON YOUR MIND?" required className="w-full bg-surface-container p-4 border-4 border-black outline-none focus:border-primary font-black uppercase placeholder:text-black/30 h-40 text-black"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-secondary text-black font-black text-3xl py-6 border-8 border-black shadow-[10px_10px_0px_0px_#fff] hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all uppercase font-headline">
                                SEND NOW
                            </button>
                        </form>
                    </div>
                </div>
            </main>

            <footer className="bg-black border-t-8 border-white/20 py-32 px-10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20">
                    <div className="md:col-span-2">
                         <Link to="/">
                             <img src="/logo.png" alt="Pohafix Logo" className="h-20 w-auto mb-10" />
                         </Link>
                         <p className="text-white/40 font-headline font-black uppercase text-xl max-w-md tracking-tighter">Reinventing healthy eating for the modern hustler. No compromises. No lies.</p>
                    </div>
                    <div className="space-y-6">
                        <h5 className="text-white font-black text-2xl uppercase font-headline italic">QUICK LINKS</h5>
                        <ul className="text-white/40 font-body text-xl font-bold uppercase space-y-2">
                             <li><Link to="/" className="hover:text-primary transition-colors">HOME</Link></li>
                             <li><Link to="/contact" className="hover:text-primary transition-colors">CONTACT US</Link></li>
                             <li><Link to="/privacy" className="hover:text-primary transition-colors">PRIVACY POLICY</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-6">
                        <h5 className="text-white font-black text-2xl uppercase font-headline italic">HQ</h5>
                        <p className="text-white/40 font-body text-xl font-bold uppercase leading-tight">SYNNC FOODS<br/>DHAR, MP<br/>INDIA - 454335</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Contact;
