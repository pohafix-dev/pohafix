import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LocalLanding = ({ city, stateName, isState = false }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [city]);

    const titleText = isState 
        ? `Instant Poha in ${city} | Ready to Eat Indori Poha Online` 
        : `Instant Poha ${city} | Buy Authentic Indori Poha in ${city}`;

    const metaDescription = `Looking for the best instant poha in ${city}? Order Pohafix – ready in 5 minutes, no cooking, 100% natural. Express delivery across ${city}, ${stateName}. Shop now!`;

    return (
        <div className="bg-background text-on-surface font-body min-h-screen flex flex-col">
            <Helmet>
                <title>{titleText}</title>
                <meta name="description" content={metaDescription} />
                <meta name="keywords" content={`instant poha ${city}, buy ready to eat poha ${city}, best instant breakfast ${city}, online poha delivery ${city}`} />
            </Helmet>
            <Header />

            <main className="flex-1 pt-32 lg:pt-40">
                {/* Hero Section */}
                <section className="bg-[#fef9f0] py-16 md:py-24 border-b border-black/5">
                    <div className="max-w-5xl mx-auto px-6 text-center">
                        <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full font-headline font-black uppercase tracking-widest text-xs mb-6">
                            Local Delivery Promise
                        </div>
                        <h1 className="text-4xl md:text-7xl font-black font-headline text-primary uppercase tracking-tighter leading-none mb-6">
                            Instant Poha in <span className="text-secondary italic">{city}</span> – Ready in 5 Minutes!
                        </h1>
                        <p className="text-xl md:text-2xl text-stone-600 font-medium max-w-3xl mx-auto leading-relaxed mb-10">
                            Experience the authentic taste of street-side Indori breakfast delivered directly to your home in {city}. No cooking needed—just add hot water!
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link to="/shop" className="bg-primary text-white px-10 py-4.5 rounded-xl font-black text-sm uppercase tracking-widest shadow-lg hover:bg-primary/95 transition-all">
                                Shop Poha Packs
                            </Link>
                            <a href="#details" className="bg-[#e7e2d9] text-stone-800 px-10 py-4.5 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-stone-200 transition-all">
                                Read Local Details
                            </a>
                        </div>
                    </div>
                </section>

                {/* Localized SEO Content Section */}
                <section id="details" className="py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="prose prose-stone max-w-none space-y-8">
                            <h2 className="text-3xl font-black font-headline uppercase text-stone-900 border-b-2 border-primary/20 pb-2">
                                Why {city} Loves Pohafix Instant Poha
                            </h2>
                            
                            <p className="text-stone-700 leading-relaxed text-lg">
                                Missing the iconic morning street-side breakfast in {city}? You don't have to compromise on health or authenticity anymore! Whether you are a student, a busy working professional, or an avid traveler living in {city}, <strong>Pohafix</strong> is your ultimate breakfast savior. Made from premium, small-batch organic flattened rice and freshly ground traditional spices, it delivers the exact taste of Indore's Sarafa Bazaar straight to your kitchen table in {city}.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                                <div className="bg-[#fef9f0] p-6 rounded-2xl border border-black/5">
                                    <h3 className="font-headline font-black text-lg text-primary uppercase mb-3">📍 Express Delivery Area</h3>
                                    <p className="text-sm text-stone-600 leading-relaxed">
                                        We provide guaranteed local shipping and door-to-door courier service across all neighborhoods in {isState ? city : `${city}, ${stateName}`}. Your order is packed fresh and dispatched immediately to arrive at your door within 24 to 48 hours.
                                    </p>
                                </div>
                                <div className="bg-[#fef9f0] p-6 rounded-2xl border border-black/5">
                                    <h3 className="font-headline font-black text-lg text-primary uppercase mb-3">🌱 Healthy &amp; Pure</h3>
                                    <p className="text-sm text-stone-600 leading-relaxed">
                                        Unlike ordinary ready-to-eat brands that contain high sodium, MSG, or artificial preservatives, our recipe is 100% natural, trans-fat-free, and contains no onion or garlic (perfectly Jain-friendly).
                                    </p>
                                </div>
                            </div>

                            <h3 className="text-2xl font-black font-headline uppercase text-stone-900 mt-12">
                                How to Enjoy Indori Poha in 5 Minutes:
                            </h3>
                            <p className="text-stone-700 leading-relaxed">
                                The traditional Indori method requires soaking, double-steaming, and constant supervision. We automated that heritage so you can skip the cutting, frying, and messy clean-ups:
                            </p>
                            
                            <ol className="list-decimal pl-6 space-y-3 text-stone-700">
                                <li>Empty one serving of <strong>Pohafix Instant Poha</strong> into a bowl.</li>
                                <li>Add 60ml of hot boiling water.</li>
                                <li>Cover the bowl and wait for exactly 5 minutes (no gas or stove required!).</li>
                                <li>Stir well, sprinkle the included crispy <strong>Ratlami Sev</strong>, and enjoy fresh, steaming breakfast!</li>
                            </ol>

                            <p className="text-stone-700 leading-relaxed mt-8">
                                Order your Poha pack online today and get ready to upgrade your morning routine. With free shipping options and secure payment methods (including UPI, NetBanking, and credit cards) via Razorpay, enjoying home-style food in {city} has never been easier!
                            </p>
                        </div>

                        <div className="mt-16 bg-primary text-white p-8 md:p-12 rounded-[2rem] text-center shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                                <span className="material-symbols-outlined text-[10rem]">local_shipping</span>
                            </div>
                            <h3 className="text-3xl md:text-5xl font-black font-headline uppercase tracking-tight mb-4">
                                Get Your Box Delivered to {city}
                            </h3>
                            <p className="text-white/80 max-w-xl mx-auto mb-8 font-medium">
                                Join thousands of ex-Indoris, students, and breakfast lovers who have made the switch to a healthier, faster morning.
                            </p>
                            <Link to="/shop" className="inline-block bg-[#fdbd30] text-[#1d1c16] px-10 py-4.5 rounded-xl font-black text-sm uppercase tracking-widest shadow-lg hover:bg-[#ffcf5c] transition-all">
                                Order Now (Free Delivery)
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default LocalLanding;
