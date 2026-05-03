import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ShippingPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-surface min-h-screen text-on-surface font-body selection:bg-secondary-container selection:text-on-secondary-container">
            <Header />

            <main className="max-w-4xl mx-auto px-6 py-20">
                <h1 className="font-headline text-5xl md:text-7xl font-black text-primary uppercase tracking-tighter mb-12 italic">SHIPPING POLICY</h1>
                
                <div className="space-y-12 text-lg text-on-surface-variant leading-relaxed">
                    <section>
                        <h2 className="text-on-surface text-3xl font-black mb-4 font-headline uppercase">1. Order Processing Time</h2>
                        <p>All orders are processed within 1 to 2 business days (excluding weekends and holidays) after receiving your order confirmation email. You will receive another notification when your order has shipped.</p>
                    </section>

                    <section>
                        <h2 className="text-on-surface text-3xl font-black mb-4 font-headline uppercase">2. Domestic Shipping Rates and Estimates</h2>
                        <p>We offer flat-rate shipping across India. Shipping charges for your order will be calculated and displayed at checkout.</p>
                        <ul className="list-disc pl-6 mt-4 space-y-2 font-medium">
                            <li><strong>Standard Shipping:</strong> ₹50 (Estimated delivery 3-5 business days)</li>
                            <li><strong>Free Shipping:</strong> On orders over ₹500 (Estimated delivery 3-5 business days)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-on-surface text-3xl font-black mb-4 font-headline uppercase">3. Local Delivery</h2>
                        <p>Local delivery is available for addresses within Bhopal, Madhya Pradesh. Deliveries are typically made within 24-48 hours of order placement.</p>
                    </section>

                    <section>
                        <h2 className="text-on-surface text-3xl font-black mb-4 font-headline uppercase">4. How do I check the status of my order?</h2>
                        <p>When your order has shipped, you will receive an email notification from us which will include a tracking number you can use to check its status. Please allow 48 hours for the tracking information to become available.</p>
                    </section>

                    <section>
                        <h2 className="text-on-surface text-3xl font-black mb-4 font-headline uppercase">5. Contact Information</h2>
                        <p>If you have any further questions, please don't hesitate to contact us at <strong>pohafix@gmail.com</strong> or visit our Contact page.</p>
                    </section>
                </div>
            </main>
 
            <Footer />
        </div>
    );
};

export default ShippingPolicy;
