import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsOfService = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-surface min-h-screen text-on-surface font-body selection:bg-secondary-container selection:text-on-secondary-container">
            <Header />

            <main className="max-w-4xl mx-auto px-6 py-20">
                <h1 className="font-headline text-5xl md:text-7xl font-black text-primary uppercase tracking-tighter mb-12 italic">TERMS OF SERVICE</h1>
                
                <div className="space-y-12 text-lg text-on-surface-variant leading-relaxed">
                    <section>
                        <h2 className="text-on-surface text-3xl font-black mb-4 font-headline uppercase">1. General</h2>
                        <p>This website is operated by PohaFix. Throughout the site, the terms “we”, “us” and “our” refer to PohaFix. By visiting our site and/ or purchasing something from us, you engage in our “Service” and agree to be bound by the following terms and conditions.</p>
                    </section>

                    <section>
                        <h2 className="text-on-surface text-3xl font-black mb-4 font-headline uppercase">2. Online Store Terms</h2>
                        <p>By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence. You may not use our products for any illegal or unauthorized purpose.</p>
                    </section>

                    <section>
                        <h2 className="text-on-surface text-3xl font-black mb-4 font-headline uppercase">3. Products or Services</h2>
                        <p>Certain products or services may be available exclusively online through the website. These products or services may have limited quantities and are subject to return or exchange only according to our Return Policy.</p>
                    </section>

                    <section>
                        <h2 className="text-on-surface text-3xl font-black mb-4 font-headline uppercase">4. Billing and Account Information</h2>
                        <p>We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order. You agree to provide current, complete and accurate purchase and account information for all purchases made at our store.</p>
                    </section>

                    <section>
                        <h2 className="text-on-surface text-3xl font-black mb-4 font-headline uppercase">5. Contact Information</h2>
                        <p>Questions about the Terms of Service should be sent to us at <strong>pohafix@gmail.com</strong>.</p>
                    </section>
                </div>
            </main>
 
            <Footer />
        </div>
    );
};

export default TermsOfService;
