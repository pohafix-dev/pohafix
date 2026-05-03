import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RefundPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-surface min-h-screen text-on-surface font-body selection:bg-secondary-container selection:text-on-secondary-container">
            <Header />

            <main className="max-w-4xl mx-auto px-6 py-20">
                <h1 className="font-headline text-5xl md:text-7xl font-black text-primary uppercase tracking-tighter mb-12 italic">REFUND & RETURN POLICY</h1>
                
                <div className="space-y-12 text-lg text-on-surface-variant leading-relaxed">
                    <section>
                        <h2 className="text-on-surface text-3xl font-black mb-4 font-headline uppercase">1. Return Window</h2>
                        <p>We have a 7-day return policy, which means you have 7 days after receiving your item to request a return or replacement.</p>
                    </section>

                    <section>
                        <h2 className="text-on-surface text-3xl font-black mb-4 font-headline uppercase">2. Eligibility</h2>
                        <p>To be eligible for a return, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging. Because our products are perishable food items, we only accept returns in the case of damaged packaging, expired items, or incorrect items being sent.</p>
                    </section>

                    <section>
                        <h2 className="text-on-surface text-3xl font-black mb-4 font-headline uppercase">3. Damages and issues</h2>
                        <p>Please inspect your order upon reception and contact us immediately if the item is defective, damaged or if you receive the wrong item, so that we can evaluate the issue and make it right.</p>
                    </section>

                    <section>
                        <h2 className="text-on-surface text-3xl font-black mb-4 font-headline uppercase">4. Exchanges & Replacements</h2>
                        <p>If you receive a defective or damaged product, we will replace it at no additional cost. Contact us at <strong>pohafix@gmail.com</strong> with photos of the damaged item to process the replacement.</p>
                    </section>

                    <section>
                        <h2 className="text-on-surface text-3xl font-black mb-4 font-headline uppercase">5. Refunds</h2>
                        <p>We will notify you once we’ve received and inspected your return, and let you know if the refund was approved or not. If approved, you’ll be automatically refunded on your original payment method within 5-7 business days. Please remember it can take some time for your bank or credit card company to process and post the refund too.</p>
                    </section>
                </div>
            </main>
 
            <Footer />
        </div>
    );
};

export default RefundPolicy;
