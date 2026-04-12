import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Privacy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-black min-h-screen text-white font-body selection:bg-primary selection:text-black">
            <header className="p-6 border-b-8 border-black bg-black flex justify-center sticky top-0 z-50">
                <Link to="/">
                    <img src="/logo.png" alt="Pohafix Logo" className="h-12 w-auto" />
                </Link>
            </header>

            <main className="max-w-4xl mx-auto px-6 py-20">
                <h1 className="font-headline text-6xl md:text-8xl font-black text-primary uppercase tracking-tighter mb-12 italic">PRIVACY POLICY</h1>
                
                <div className="space-y-12 text-lg text-white/70 leading-relaxed uppercase font-bold tracking-tight">
                    <section>
                        <h2 className="text-white text-3xl font-black mb-4 font-headline">1. DATA WE COLLECT</h2>
                        <p>We collect your name, phone number, and address only when you place an order or contact us. We don't sell your data to any third-party garbage companies. Period.</p>
                    </section>

                    <section>
                        <h2 className="text-white text-3xl font-black mb-4 font-headline">2. WHY WE NEED IT</h2>
                        <p>To get the Poha to your doorstep. Without your address, we're just enthusiasts with a lot of Poha. We also use your phone number to update you on shipping status.</p>
                    </section>

                    <section>
                        <h2 className="text-white text-3xl font-black mb-4 font-headline">3. SECURITY</h2>
                        <p>Your information is stored securely. We use industry-standard encryption for payments. Your privacy is as important to us as the quality of our ingredients.</p>
                    </section>

                    <section>
                        <h2 className="text-white text-3xl font-black mb-4 font-headline">4. COOKIES</h2>
                        <p>Our site uses cookies to remember what's in your cart. No intrusive tracking, just functional magic.</p>
                    </section>

                    <section>
                        <h2 className="text-white text-3xl font-black mb-4 font-headline">5. CONTACT</h2>
                        <p>Questions? Reach out to us at pohafix@gmail.com.</p>
                    </section>
                </div>

                <div className="mt-20 pt-10 border-t-8 border-white/10">
                    <Link to="/" className="bg-primary text-black font-headline font-black px-10 py-4 uppercase text-xl inline-block shadow-[8px_8px_0px_0px_#fff]">BACK TO REVOLUTION</Link>
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

export default Privacy;
