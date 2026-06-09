import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ThankYou = () => {
    const location = useLocation();
    const [order, setOrder] = useState(() => {
        // Try getting from navigation state first
        if (location.state?.order) {
            try {
                localStorage.setItem('lastOrder', JSON.stringify(location.state.order));
            } catch (err) {
                console.error("Failed to save order to localStorage:", err);
            }
            return location.state.order;
        }
        
        // Fallback to localStorage on refresh
        try {
            const saved = localStorage.getItem('lastOrder');
            return saved ? JSON.parse(saved) : null;
        } catch (err) {
            console.error("Failed to parse order from localStorage:", err);
            return null;
        }
    });

    useEffect(() => {
        window.scrollTo(0, 0);
        
        // Trigger Google Tag Purchase Event for real orders
        if (location.state?.order && typeof window.gtag === 'function') {
            window.gtag('event', 'purchase', {
                transaction_id: location.state.order.orderId,
                value: location.state.order.amount,
                currency: 'INR',
                items: [{
                    item_name: location.state.order.product,
                    quantity: 1,
                    price: location.state.order.amount
                }]
            });
        }
    }, [location.state]);

    // Create a beautiful default mock order if none exists (for preview/design testing)
    const mockOrder = {
        orderId: "pay_PFXmock108920",
        date: new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }),
        product: "1x Pohafix instant poha 300 Gram Pack",
        amount: 189,
        customer: {
            name: "Aman Sharma",
            phone: "+91 98765 43210",
            address: "56, Malwa Colony, near Rajwada Palace",
            city: "Indore",
            pincode: "452001"
        }
    };

    const isPreview = !location.state?.order && !localStorage.getItem('lastOrder');
    const orderToShow = order || mockOrder;

    return (
        <div className="bg-surface text-on-surface font-body selection:bg-secondary-container selection:text-on-secondary-container min-h-screen">
            <Helmet>
                <title>Order Confirmed | PohaFix</title>
                <meta name="description" content="Thank you for your order! Your authentic Indori Poha is on its way. We're excited for you to experience the true taste of Indore." />
            </Helmet>
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

                        {/* Order Details Card (Indori Breakfast Ticket / Invoice Style) */}
                        <div className="bg-surface-container-lowest border-2 border-dashed border-outline-variant/60 rounded-2xl shadow-xl overflow-hidden relative transition-all duration-300 hover:shadow-2xl hover:border-outline-variant"
                             style={{
                                 backgroundImage: "radial-gradient(#af101a03 1.5px, transparent 1.5px)",
                                 backgroundSize: "24px 24px"
                             }}>
                            
                            {isPreview && (
                                <div className="absolute top-12 left-1/2 transform -translate-x-1/2 z-30 bg-secondary-container text-on-secondary-fixed text-[9px] font-label font-black uppercase tracking-widest px-3 py-1 rounded-full border border-secondary shadow-sm">
                                    Preview Receipt
                                </div>
                            )}

                            {/* Decorative Ticket Stub Header */}
                            <div className="bg-primary text-on-primary p-6 relative flex flex-col items-center justify-center text-center">
                                {/* Jagged / Serrated Top Edge */}
                                <div className="absolute top-0 inset-x-0 h-2 bg-background"
                                     style={{
                                         backgroundImage: "radial-gradient(circle, #fef9f0 4px, transparent 5px)",
                                         backgroundSize: "12px 12px",
                                         backgroundPosition: "center -6px",
                                         backgroundRepeat: "repeat-x"
                                     }}>
                                </div>
                                <span className="material-symbols-outlined text-4xl text-secondary-container mb-2 animate-bounce" style={{ fontVariationSettings: "'FILL' 1" }}>
                                    receipt_long
                                </span>
                                <h3 className="font-headline font-black text-2xl uppercase tracking-wider text-secondary-container">
                                    ORDER RECEIVED
                                </h3>
                                <p className="font-label text-xs uppercase tracking-widest text-primary-fixed opacity-90 mt-1">
                                    Indore Morning Soul Ticket
                                </p>
                                
                                {/* Asymmetrical side ticket notches */}
                                <div className="absolute -left-3 bottom-0 w-6 h-6 rounded-full bg-[#fef9f0]"></div>
                                <div className="absolute -right-3 bottom-0 w-6 h-6 rounded-full bg-[#fef9f0]"></div>
                            </div>

                            {/* Receipt Body */}
                            <div className="p-6 md:p-8 space-y-6 font-body text-on-surface">
                                {/* Top summary row: ID & Date */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4 border-b border-dashed border-outline-variant/50">
                                    <div>
                                        <p className="text-[10px] font-label font-bold uppercase tracking-wider text-on-surface-variant/60 mb-0.5">Receipt ID</p>
                                        <p className="font-headline font-black text-lg text-primary tracking-tight">
                                            #{orderToShow.orderId}
                                        </p>
                                    </div>
                                    <div className="sm:text-right">
                                        <p className="text-[10px] font-label font-bold uppercase tracking-wider text-on-surface-variant/60 mb-0.5">Order Date</p>
                                        <p className="font-label font-bold text-xs text-on-surface-variant">
                                            {orderToShow.date}
                                        </p>
                                    </div>
                                </div>

                                {/* Product Items Details */}
                                <div className="space-y-4">
                                    <h4 className="font-label text-[11px] font-black uppercase tracking-widest text-secondary flex items-center gap-1.5">
                                        <span className="material-symbols-outlined text-sm">shopping_basket</span>
                                        ITEMS DELIGHT
                                    </h4>
                                    <div className="flex justify-between items-center bg-surface-container-low p-4 rounded-xl border border-outline-variant/30">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                                                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                                                    restaurant
                                                </span>
                                            </div>
                                            <div>
                                                <p className="font-headline font-bold text-sm uppercase leading-tight text-on-surface">
                                                    {orderToShow.product}
                                                </p>
                                                <p className="text-[10px] font-label text-on-surface-variant/70 uppercase tracking-widest mt-0.5">
                                                    Authentic Indori Poha
                                                </p>
                                            </div>
                                        </div>
                                        <div className="text-right ml-4">
                                            <p className="font-headline font-black text-md text-primary">
                                                ₹{orderToShow.amount}.00
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Pricing Calculations */}
                                <div className="space-y-2.5 pt-2">
                                    <div className="flex justify-between text-xs font-label font-bold text-on-surface-variant/80">
                                        <span>Subtotal</span>
                                        <span>₹{orderToShow.amount}.00</span>
                                    </div>
                                    <div className="flex justify-between text-xs font-label font-bold text-tertiary">
                                        <span className="flex items-center gap-1">
                                            Shipping
                                            <span className="bg-tertiary-container/20 text-tertiary text-[9px] font-black px-1.5 py-0.5 rounded">FREE</span>
                                        </span>
                                        <span>₹0.00</span>
                                    </div>
                                    <div className="flex justify-between text-xs font-label font-bold text-on-surface-variant/80">
                                        <span>Taxes (GST Included)</span>
                                        <span>₹0.00</span>
                                    </div>
                                    <div className="flex justify-between items-end pt-3 border-t border-dashed border-outline-variant/60">
                                        <span className="font-headline font-black text-lg uppercase italic text-on-surface">TOTAL PAID</span>
                                        <span className="font-headline font-black text-2xl text-primary tracking-tighter">
                                            ₹{orderToShow.amount}.00
                                        </span>
                                    </div>
                                </div>

                                {/* Customer Shipping Address details */}
                                <div className="pt-4 border-t border-dashed border-outline-variant/50 space-y-4">
                                    <h4 className="font-label text-[11px] font-black uppercase tracking-widest text-secondary flex items-center gap-1.5">
                                        <span className="material-symbols-outlined text-sm">local_shipping</span>
                                        DELIVERY DETAILS
                                    </h4>
                                    <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/30 space-y-3 text-xs">
                                        <div className="flex items-start gap-2">
                                            <span className="material-symbols-outlined text-secondary text-sm mt-0.5">person</span>
                                            <div>
                                                <p className="text-[10px] font-label font-black uppercase tracking-wider text-on-surface-variant/50">Recipient Name</p>
                                                <p className="font-headline font-extrabold text-sm text-on-surface mt-0.5">{orderToShow.customer.name}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="material-symbols-outlined text-secondary text-sm mt-0.5">phone</span>
                                            <div>
                                                <p className="text-[10px] font-label font-black uppercase tracking-wider text-on-surface-variant/50">Contact Number</p>
                                                <p className="font-label font-bold text-sm text-on-surface mt-0.5">{orderToShow.customer.phone}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="material-symbols-outlined text-secondary text-sm mt-0.5">home</span>
                                            <div>
                                                <p className="text-[10px] font-label font-black uppercase tracking-wider text-on-surface-variant/50">Shipping Address</p>
                                                <p className="font-body text-on-surface-variant leading-relaxed mt-1 font-medium">
                                                    {orderToShow.customer.address}, {orderToShow.customer.city} - <span className="font-bold text-on-surface">{orderToShow.customer.pincode}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Estimated Arrival / Status */}
                                <div className="pt-4 border-t border-dashed border-outline-variant/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                                    <div className="flex items-center gap-2">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span>
                                        </span>
                                        <span className="font-label font-black text-tertiary uppercase tracking-wider">Awaiting Despatch</span>
                                    </div>
                                    <div className="font-label font-bold text-on-surface-variant/70 text-center sm:text-right">
                                        Estimated Delivery: <span className="text-primary font-black uppercase">4-6 Days</span>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Decorative Bottom Edge */}
                            <div className="absolute bottom-0 inset-x-0 h-2 bg-background"
                                 style={{
                                     backgroundImage: "radial-gradient(circle, #fef9f0 4px, transparent 5px)",
                                     backgroundSize: "12px 12px",
                                     backgroundPosition: "center 4px",
                                     backgroundRepeat: "repeat-x"
                                 }}>
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
