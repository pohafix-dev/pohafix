import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Privacy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-surface min-h-screen text-on-surface font-body selection:bg-secondary-container selection:text-on-secondary-container">
            <Header />

            <main className="max-w-4xl mx-auto px-6 py-20">
                <h1 className="font-headline text-6xl md:text-8xl font-black text-primary uppercase tracking-tighter mb-12 italic">PRIVACY POLICY</h1>
                
                <div className="space-y-12 text-lg text-on-surface-variant leading-relaxed uppercase font-bold tracking-tight">
                    <section>
                        <h2 className="text-on-surface text-3xl font-black mb-4 font-headline">1. DATA WE COLLECT</h2>
                        <p>We collect your name, phone number, and address only when you place an order or contact us. We don't sell your data to any third-party garbage companies. Period.</p>
                    </section>

                    <section>
                        <h2 className="text-on-surface text-3xl font-black mb-4 font-headline">2. WHY WE NEED IT</h2>
                        <p>To get the Poha to your doorstep. Without your address, we're just enthusiasts with a lot of Poha. We also use your phone number to update you on shipping status.</p>
                    </section>

                    <section>
                        <h2 className="text-on-surface text-3xl font-black mb-4 font-headline">3. SECURITY</h2>
                        <p>Your information is stored securely. We use industry-standard encryption for payments. Your privacy is as important to us as the quality of our ingredients.</p>
                    </section>

                    <section>
                        <h2 className="text-on-surface text-3xl font-black mb-4 font-headline">4. COOKIES</h2>
                        <p>Our site uses cookies to remember what's in your cart. No intrusive tracking, just functional magic.</p>
                    </section>

                    <section>
                        <h2 className="text-on-surface text-3xl font-black mb-4 font-headline">5. CONTACT</h2>
                        <p>Questions? Reach out to us at pohafix@gmail.com.</p>
                    </section>
                </div>
            </main>
 
            <Footer />
        </div>
    );
};

export default Privacy;
