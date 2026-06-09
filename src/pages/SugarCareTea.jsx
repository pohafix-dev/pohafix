import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SugarCareTea = () => {
    const navigate = useNavigate();
    const [qty, setQty] = useState(1);
    const [activeFaq, setActiveFaq] = useState(null);

    // Image Zoom & Lightbox States
    const teaImage = "/sugar-care-tea.webp";
    const thumbnails = [
        teaImage,
        "/sugar-care-spices.webp",
        "/sugar-care-pour.webp",
        "/sugar-care-table.webp",
        "/sugar-care-marble.webp",
        "/sugar-care-sweetest.webp",
        "/sugar-care-man.webp",
        "/sugar-care-family.webp",
        "/sugar-care-spoon.webp"
    ];
    const [mainImage, setMainImage] = useState(teaImage);
    
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [lightboxScale, setLightboxScale] = useState(1);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setZoomPos({ x, y });
    };

    const openLightbox = () => {
        const index = thumbnails.indexOf(mainImage);
        setLightboxIndex(index >= 0 ? index : 0);
        setLightboxScale(1);
        setIsLightboxOpen(true);
    };

    const trustPoints = [
        "No Added Sugar",
        "Premium Assam CTC Tea",
        "Naturally Sweet Taste",
        "Rich Chai Experience",
        "Crafted With Natural Ingredients"
    ];

    const benefits = [
        {
            title: "Naturally Sweet Taste",
            description: "Enjoy a pleasant sweetness without adding sugar.",
            icon: "nest_eco_glove"
        },
        {
            title: "Premium Assam CTC Blend",
            description: "Strong, rich and satisfying chai flavor in every cup.",
            icon: "coffee"
        },
        {
            title: "Perfect For Daily Tea Lovers",
            description: "Crafted for people who want great taste every day.",
            icon: "local_cafe"
        },
        {
            title: "Rich Aroma",
            description: "A delightful blend of spices and tea leaves creates a premium tea experience.",
            icon: "air"
        },
        {
            title: "High Quality Ingredients",
            description: "Made using carefully selected tea and natural ingredients.",
            icon: "verified"
        }
    ];

    const ingredients = [
        { name: "Premium Assam CTC Tea (84.0%)", desc: "Sourced from high-altitude estates for a bold, malty flavor and robust red-brown liquor." },
        { name: "Cinnamon (Dalchini) (6.0%)", desc: "Adds sweet-spicy warmth and helps trigger insulin-like glycemic responses." },
        { name: "Tulsi (Holy Basil) (4.0%)", desc: "Rich in antioxidants that protect pancreatic cells and soothe taste profile." },
        { name: "Ginger (Adrak) (2.0%)", desc: "Dry ginger powder for that familiar spicy kick and GLUT4 transporter activation." },
        { name: "Cardamom (Elaichi) (2.0%)", desc: "Ground cardamom pods that enrich the blend with a fragrant, authentic chai aroma." },
        { name: "Stevia Extract (2.0%)", desc: "Highly purified zero-calorie steviol glycosides that sweeten without blood sugar spikes." }
    ];

    const animFadeUp = {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    };

    const animStaggerContainer = {
        initial: {},
        whileInView: { transition: { staggerChildren: 0.08 } },
        viewport: { once: true, margin: "-100px" }
    };

    const animStaggerItem = {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    };


    const specialPoints = [
        "Rich Chai Taste",
        "Naturally Sweet Profile",
        "No Added Sugar",
        "Premium Tea Experience",
        "Carefully Selected Ingredients"
    ];

    const prepSteps = [
        { step: "Step 1", title: "ADD TEA", desc: "Add 1 teaspoon Sugar Care Tea to water." },
        { step: "Step 2", title: "BOIL", desc: "Boil for 2-3 minutes to release the rich flavors." },
        { step: "Step 3", title: "ADD MILK", desc: "Add milk if desired (works beautifully with or without)." },
        { step: "Step 4", title: "ENJOY", desc: "Enjoy a rich cup of naturally sweet, guilt-free chai." }
    ];

    const reviews = [
        {
            text: "Finally a tea that gives me the taste of real chai without feeling like a herbal drink.",
            author: "Satish K.",
            stars: 5
        },
        {
            text: "Rich aroma, smooth taste and naturally pleasant sweetness. My family enjoys it every morning.",
            author: "Priyanka M.",
            stars: 5
        },
        {
            text: "I was skeptical about stevia in chai, but this blend is perfect. No bitter aftertaste at all!",
            author: "Anil S.",
            stars: 5
        }
    ];

    const faqs = [
        {
            q: "Does it contain added sugar?",
            a: "No. Sugar Care Tea contains no added sugar. Its pleasant sweetness comes naturally from Stevia leaves."
        },
        {
            q: "Can I add milk?",
            a: "Yes. It works beautifully with milk and also tastes great without milk (as black tea)."
        },
        {
            q: "Can I add sugar if I want?",
            a: "Yes. You may add sugar according to your preference, though the blend is designed to be naturally sweet on its own."
        },
        {
            q: "What makes Sugar Care Tea unique?",
            a: "Its combination of Premium Assam CTC Tea, Stevia, Cinnamon, Tulsi, and Ginger creates a rich, full-bodied chai experience with a naturally sweet taste without the calories or blood sugar spikes."
        }
    ];

    const handleBuyNow = () => {
        // Trigger Google Tag Add to Cart Event for Tea
        if (typeof window.gtag === 'function') {
            window.gtag('event', 'add_to_cart', {
                value: 349 * qty,
                currency: 'INR',
                items: [{
                    item_name: "Sugar Care Tea 200 Gram Pack",
                    quantity: qty,
                    price: 349
                }]
            });
        }
        navigate(`/order?plan=3&qty=${qty}`);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-background text-on-surface font-body selection:bg-[#0b3a24]/10 selection:text-[#0b3a24]">
            <Helmet>
                <title>Sugar Care Tea – Premium Assam CTC, Stevia & Spices | Buy Online</title>
                <meta name="description" content="Enjoy the rich taste of premium chai without compromising your lifestyle choices. Sugar Care Tea is a blend of Premium Assam CTC, Stevia, Cinnamon, Tulsi & Ginger." />
                <meta name="keywords" content="sugar care tea, sugar free tea, natural sweet tea, stevia chai, healthy chai, assam ctc tea online, sugar free chai india" />
            </Helmet>
            <Header />

            <main className="pt-32 lg:pt-40 pb-20">
                {/* Hero Section */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                        
                        {/* Interactive Image Showcase with Zoom & Multi-thumbnails */}
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="flex flex-col gap-4 lg:sticky lg:top-28">
                            <div 
                                onMouseMove={handleMouseMove}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => { setIsHovered(false); setZoomPos({ x: 50, y: 50 }); }}
                                onClick={openLightbox}
                                className="aspect-square md:aspect-[4/5] lg:aspect-square w-full rounded-2xl bg-[#f4f7f5] border border-black/5 flex items-center justify-center p-8 relative overflow-hidden group cursor-zoom-in shadow-inner"
                            >
                                <AnimatePresence mode="wait">
                                    <motion.img 
                                        key={mainImage}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                        src={mainImage}
                                        alt="Sugar Care Tea premium wellness blend"
                                        style={isHovered ? { transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`, scale: 2.2 } : { scale: 1 }}
                                        className="w-full h-full object-contain transition-transform duration-100 rounded-lg"
                                    />
                                </AnimatePresence>
                                
                                <div className="absolute top-4 left-4 flex gap-2 items-center pointer-events-none">
                                    <div className="bg-[#0b3a24] text-white px-3 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-sm">
                                        NEW LAUNCH
                                    </div>
                                    <div className="bg-amber-500 text-black px-2.5 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-sm">
                                        100% NATURAL
                                    </div>
                                </div>

                                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md border border-black/5 px-3 py-1.5 rounded-full flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-sm">
                                    <span className="material-symbols-outlined text-[14px]">zoom_in</span>
                                    <span className="text-[9px] font-label font-bold uppercase tracking-wider text-black/70">Click to Inspect</span>
                                </div>
                            </div>

                            {/* Multi Thumbnails */}
                            <div className="flex gap-3 overflow-x-auto pb-2 snap-x hide-scrollbar justify-center">
                                {thumbnails.map((thumb, idx) => (
                                    <button 
                                        key={idx}
                                        onClick={() => setMainImage(thumb)}
                                        className={`shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-xl border-2 flex items-center justify-center p-2 snap-start transition-all ${
                                            mainImage === thumb ? 'border-[#0b3a24] bg-[#0b3a24]/5' : 'border-black/10 bg-[#f4f7f5] hover:border-black/30'
                                        }`}
                                    >
                                        <img src={thumb} alt={`Sugar Care Tea thumbnail ${idx + 1}`} className="w-full h-full object-contain rounded-lg" />
                                    </button>
                                ))}
                            </div>
                        </motion.div>

                        {/* Product Details Column */}
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }} className="flex flex-col">
                            <div>
                                <span className="text-[#0b3a24] font-headline font-black uppercase tracking-[0.2em] text-xs mb-3 block">Chai Reimagined</span>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-headline text-black uppercase tracking-tight mb-2 leading-tight">
                                    SUGAR CARE TEA
                                </h1>
                                <h2 className="text-xl md:text-2xl font-bold text-[#0b3a24] italic mb-6">
                                    Wahi Chai Ka Maza. Ab Healthy Mode Mein.
                                </h2>
                                
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="flex text-amber-500">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} className="material-symbols-outlined text-sm font-bold" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                        ))}
                                    </div>
                                    <span className="text-xs font-semibold text-black/60">5.0 (42 verified reviews)</span>
                                </div>

                                <p className="text-black/70 text-base md:text-lg leading-relaxed mb-8">
                                    Enjoy the rich taste of premium chai without compromising on your lifestyle choices. Sugar Care Tea is a carefully crafted blend of Premium Assam CTC Tea, Stevia, Cinnamon, Tulsi and Ginger that delivers a naturally sweet and satisfying tea experience.
                                </p>
                            </div>

                            {/* Price Section */}
                            <div className="mb-6 border-b border-black/10 pb-6">
                                <div className="flex items-end gap-3 mb-1">
                                    <span className="text-4xl md:text-5xl font-black font-headline tracking-tighter text-[#0b3a24]">₹349</span>
                                    <span className="text-lg font-bold text-black/40 mb-1">/ 200g Pack</span>
                                    <span className="bg-[#e6f4ea] text-[#137333] px-3 py-1 rounded text-xs font-black uppercase tracking-wider mb-2">ZERO SUGAR</span>
                                </div>
                                <p className="text-xs font-semibold text-black/50">MRP Inclusive of all taxes • Free Delivery</p>

                                {/* 10-Day Delivery Banner */}
                                <div className="flex items-center gap-3 text-xs font-bold text-amber-800 dark:text-amber-300 uppercase tracking-widest bg-amber-50 dark:bg-amber-950/20 px-4 py-3 rounded-lg border border-amber-200/50 mt-4 shadow-sm animate-pulse">
                                    <span className="material-symbols-outlined text-base">local_shipping</span>
                                    <span>Delivery: Takes 10 Days (Freshly Packaged &amp; Blended to Order)</span>
                                </div>
                            </div>

                            {/* Buy Now & Qty Selector */}
                            <div className="flex gap-4 mb-8">
                                <div className="flex items-center bg-[#f4f7f5] border border-black/10 rounded-lg">
                                    <button 
                                        onClick={() => setQty(Math.max(1, qty - 1))}
                                        className="w-10 h-12 flex items-center justify-center text-black/60 hover:text-black font-black"
                                    >−</button>
                                    <input 
                                        type="text" 
                                        readOnly 
                                        value={qty} 
                                        className="w-10 text-center bg-transparent border-none font-bold text-lg p-0 focus:ring-0"
                                    />
                                    <button 
                                        onClick={() => setQty(qty + 1)}
                                        className="w-10 h-12 flex items-center justify-center text-black/60 hover:text-black font-black"
                                    >+</button>
                                </div>
                                <button 
                                    onClick={handleBuyNow}
                                    className="flex-1 bg-gradient-to-r from-[#0b3a24] to-[#145336] text-white font-headline font-black text-xl tracking-tight uppercase rounded-lg hover:shadow-lg hover:from-[#145336] hover:to-[#0b3a24] transition-all"
                                >
                                    BUY NOW
                                </button>
                            </div>

                            {/* Checkout guarantees */}
                            <div className="flex flex-col gap-2 text-[10px] font-bold text-black/60 uppercase tracking-wider border-t border-black/5 pt-4">
                                <span className="flex items-center gap-1.5">
                                    <span className="material-symbols-outlined text-sm text-[#0b3a24]" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
                                    100% Encrypted Secure Checkout
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <span className="material-symbols-outlined text-sm text-[#0b3a24]" style={{ fontVariationSettings: "'FILL' 1" }}>local_shipping</span>
                                    Guaranteed Delivery in 10 Days
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Trust Section */}
                <motion.section {...animFadeUp} className="bg-[#0b3a24] text-white py-12 mb-20 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-around items-center gap-6 md:gap-8">
                        {trustPoints.map((point, idx) => (
                            <div key={idx} className="flex items-center gap-2.5 font-headline font-black uppercase text-sm md:text-base tracking-widest py-2">
                                <span className="material-symbols-outlined text-xl text-[#fdbd30]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                                {point}
                            </div>
                        ))}
                    </div>
                    <div className="absolute inset-0 bg-newsprint pointer-events-none opacity-10 mix-blend-overlay"></div>
                </motion.section>

                {/* Dynamic Tea Sourcing & Batch Section */}
                {(() => {
                    const epoch = new Date().getTime();
                    const cycleDays = 8;
                    const cycleMs = cycleDays * 24 * 60 * 60 * 1000;
                    const currentCycle = Math.floor(epoch / cycleMs);
                    const batchNumber = (currentCycle % 20) + 7; 
                    
                    const seed = currentCycle + 5;
                    const random = (s) => {
                        let x = Math.sin(s) * 10000;
                        return x - Math.floor(x);
                    };
                    
                    const ordered24h = Math.floor(random(seed) * 30) + 12;
                    const inQueue = Math.floor(random(seed + 1) * 15) + 3;
                    const percentFilled = Math.floor(random(seed + 2) * 10) + 82;
                    const spotsLeft = 100 - percentFilled;
                    
                    return (
                        <motion.section {...animFadeUp} className="py-16 bg-[#fcfaf5] border-y border-black/5 mb-24">
                            <div className="max-w-4xl mx-auto px-6">
                                <div className="mb-6 text-center md:text-left">
                                    <h2 className="text-2xl font-black font-headline text-black mb-1 tracking-tight">Weekly Harvest Blend — Batch {batchNumber}</h2>
                                    <p className="text-sm font-medium text-black/70">Freshly ground spices combined with estate Assam leaves. Blended to order for premium aroma.</p>
                                </div>
                                
                                <div className="bg-[#fffcf9] border border-amber-300/60 rounded-xl p-5 mb-8 shadow-sm">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#0b3a24] animate-pulse shrink-0"></div>
                                        <p className="text-sm font-semibold text-black/80">
                                            <span className="font-black text-[#0b3a24]">{ordered24h} tea lovers</span> ordered this batch in the last 24 hours · <span className="font-black text-[#0b3a24]">{inQueue} blends</span> in queue for manual packaging
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="mb-4">
                                    <div className="flex justify-between items-end mb-2">
                                        <span className="text-xs font-bold text-black/70 uppercase tracking-wider">Weekly Sourcing Slabs</span>
                                        <span className="text-xs font-bold text-amber-800">{percentFilled}% allocated — only {spotsLeft} packs left for this cycle</span>
                                    </div>
                                    <div className="w-full h-3 bg-[#e8eae6] rounded-full overflow-hidden">
                                        <div className="h-full bg-[#0b3a24] rounded-full" style={{ width: `${percentFilled}%` }}></div>
                                    </div>
                                </div>
                                <p className="text-[10px] text-black/40 font-bold text-right uppercase tracking-widest">
                                    *Due to our small-batch, hand-blended ritual, delivery takes 10 days.
                                </p>
                            </div>
                        </motion.section>
                    );
                })()}

                {/* Why Sugar Care Tea Section */}
                <motion.section {...animFadeUp} className="max-w-7xl mx-auto px-6 mb-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <span className="text-[#0b3a24] font-headline font-extrabold uppercase tracking-widest text-xs block mb-4">The Compromise is Over</span>
                            <h2 className="text-3xl md:text-5xl font-black font-headline text-black leading-tight mb-8 uppercase tracking-tight">
                                Because Tea Lovers Shouldn't Have To Compromise.
                            </h2>
                            <div className="space-y-6 text-black/80 text-base md:text-lg leading-relaxed border-l-4 border-[#0b3a24] pl-6">
                                <p>
                                    For many people, reducing sugar often means sacrificing the joy of a great cup of chai.
                                </p>
                                <p>
                                    <strong>Sugar Care Tea</strong> is specially crafted to deliver the same rich, kadak chai experience you love while offering a naturally sweet taste from carefully selected ingredients.
                                </p>
                                <p>
                                    Every sip combines the strength of Premium Assam CTC Tea with the goodness of Stevia, Cinnamon, Tulsi, Cardamom, and Ginger.
                                </p>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-black/5 aspect-[4/3] group">
                                <img 
                                    src="/sugar-care-man.webp" 
                                    alt="Enjoying Sugar Care Tea in the morning" 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent flex items-end p-6">
                                    <p className="text-white text-xs font-bold uppercase tracking-widest">
                                        Wahi Chai Ka Maza. Ab Healthy Mode Mein.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Key Benefits Grid */}
                <motion.section {...animFadeUp} className="bg-[#f4f7f5] py-20 mb-24 relative overflow-hidden border-y border-[#0b3a24]/10">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <span className="text-[#0b3a24] font-headline font-black uppercase tracking-widest text-xs mb-3 block">Wellness & Taste</span>
                            <h2 className="text-3xl md:text-5xl font-black font-headline text-black uppercase tracking-tight">
                                KEY BENEFITS
                            </h2>
                        </div>
                        <motion.div variants={animStaggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {benefits.map((benefit, idx) => (
                                <motion.div variants={animStaggerItem} key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-start border border-black/5">
                                    <div className="bg-[#0b3a24]/10 p-3 rounded-xl mb-6 text-[#0b3a24]">
                                        <span className="material-symbols-outlined text-3xl">{benefit.icon}</span>
                                    </div>
                                    <h4 className="font-headline font-black text-xl mb-3 uppercase tracking-tight text-[#0b3a24]">
                                        {benefit.title}
                                    </h4>
                                    <p className="text-black/70 text-sm leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.section>

                {/* Ingredients Section */}
                <motion.section {...animFadeUp} className="max-w-7xl mx-auto px-6 mb-24">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-5">
                            <span className="text-[#0b3a24] font-headline font-black uppercase tracking-widest text-xs mb-3 block">100% Natural Recipe</span>
                            <h2 className="text-3xl md:text-5xl font-black font-headline text-black uppercase tracking-tight leading-none mb-6">
                                INGREDIENTS
                            </h2>
                            <p className="text-black/70 text-base md:text-lg leading-relaxed mb-6">
                                Every ingredient is sourced with absolute care. We don't use chemical sweeteners, synthetic flavors, or stabilizers. Just real ingredients for real tea lovers.
                            </p>

                            <div className="mb-6 rounded-2xl overflow-hidden border border-black/5 shadow-md aspect-[4/3] bg-[#f4f7f5] p-2 flex items-center justify-center">
                                <img src="/sugar-care-spices.webp" alt="Raw spices and tea blend composition" className="w-full h-full object-contain rounded-xl" />
                            </div>

                            {/* FSSAI & Safety Warning Block */}
                            <div className="p-6 bg-amber-50/60 border border-amber-300/60 rounded-2xl flex flex-col gap-3 shadow-inner">
                                <div className="flex items-center gap-2 text-amber-800 text-xs font-black uppercase tracking-widest">
                                    <span className="material-symbols-outlined text-sm font-bold text-amber-600">warning</span>
                                    FSSAI Compliance Declarations
                                </div>
                                <div className="space-y-2 text-[11px] text-stone-600 font-semibold leading-relaxed">
                                    <p>• <span className="font-bold text-[#0b3a24] uppercase">Contains Non-Caloric Sweetener</span> (Purified Steviol Glycosides).</p>
                                    <p>• <span className="font-bold text-[#0b3a24] uppercase">Not For Medicinal Use.</span> This tea blend is a dietary food product for wellness, not a drug or cure for diabetes. It is designed to support healthy lifestyles.</p>
                                    <p>• <span className="font-bold text-amber-900 uppercase">Consult Your Physician</span> if you are on glycemic control medications (e.g., insulin or metformin), as active herbs like Cinnamon may influence glycemic responses.</p>
                                </div>
                            </div>
                        </div>
                        <motion.div variants={animStaggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true, margin: "-100px" }} className="lg:col-span-7 space-y-4">
                            {ingredients.map((ing, idx) => (
                                <motion.div variants={animStaggerItem} key={idx} className="bg-[#f4f7f5] p-6 rounded-xl border border-black/5 flex items-start gap-4">
                                    <div className="text-2xl font-headline font-black text-[#0b3a24] opacity-40">0{idx + 1}</div>
                                    <div>
                                        <h4 className="font-body font-black text-lg text-black uppercase tracking-tight">{ing.name}</h4>
                                        <p className="text-sm text-black/60 mt-1 leading-relaxed">{ing.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.section>

                {/* Science & Formulation Recipe Study Section */}
                <motion.section {...animFadeUp} className="bg-[#fcfaf5] py-20 border-y border-black/5 mb-24 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <span className="text-[#0b3a24] font-headline font-black uppercase tracking-widest text-xs mb-3 block">R&D Formulation Study</span>
                            <h2 className="text-3xl md:text-5xl font-black font-headline text-black uppercase tracking-tight mb-4">
                                THE SCIENCE OF SWEET BALANCE
                            </h2>
                            <p className="text-black/70 max-w-2xl mx-auto text-base md:text-lg">
                                We tested three optimized prototype recipes alongside our baseline control to achieve the perfect balance between authentic chai taste and therapeutic glycemic support.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                            {/* Table Column */}
                            <div className="lg:col-span-7 overflow-x-auto bg-white p-6 rounded-2xl border border-black/5 shadow-sm">
                                <table className="w-full text-left border-collapse text-sm">
                                    <thead>
                                        <tr className="border-b border-black/10">
                                            <th className="p-3 font-headline font-black uppercase text-black/55 text-xs">Ingredients</th>
                                            <th className="p-3 font-headline font-black uppercase text-black/55 text-xs text-center">Baseline</th>
                                            <th className="p-3 font-headline font-black uppercase text-[#0b3a24] text-xs text-center bg-[#e6f4ea]/40 rounded-t-lg">Recipe A (Winner)</th>
                                            <th className="p-3 font-headline font-black uppercase text-black/55 text-xs text-center">Recipe B</th>
                                            <th className="p-3 font-headline font-black uppercase text-black/55 text-xs text-center">Recipe C</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-black/5 font-semibold text-black/80">
                                        <tr>
                                            <td className="p-3 font-bold text-black text-xs md:text-sm">Assam CTC Tea</td>
                                            <td className="p-3 text-center text-black/60 text-xs md:text-sm">89.0%</td>
                                            <td className="p-3 text-center text-[#0b3a24] font-black bg-[#e6f4ea]/40 text-xs md:text-sm">84.0%</td>
                                            <td className="p-3 text-center text-black/60 text-xs md:text-sm">85.0%</td>
                                            <td className="p-3 text-center text-black/60 text-xs md:text-sm">78.0%</td>
                                        </tr>
                                        <tr>
                                            <td className="p-3 font-bold text-black text-xs md:text-sm">Cinnamon</td>
                                            <td className="p-3 text-center text-black/60 text-xs md:text-sm">5.0%</td>
                                            <td className="p-3 text-center text-[#0b3a24] font-black bg-[#e6f4ea]/40 text-xs md:text-sm">6.0%</td>
                                            <td className="p-3 text-center text-black/60 text-xs md:text-sm">5.0%</td>
                                            <td className="p-3 text-center text-black/60 text-xs md:text-sm">5.0%</td>
                                        </tr>
                                        <tr>
                                            <td className="p-3 font-bold text-black text-xs md:text-sm">Tulsi</td>
                                            <td className="p-3 text-center text-black/60 text-xs md:text-sm">3.0%</td>
                                            <td className="p-3 text-center text-[#0b3a24] font-black bg-[#e6f4ea]/40 text-xs md:text-sm">4.0%</td>
                                            <td className="p-3 text-center text-black/60 text-xs md:text-sm">6.0%</td>
                                            <td className="p-3 text-center text-black/60 text-xs md:text-sm">3.0%</td>
                                        </tr>
                                        <tr>
                                            <td className="p-3 font-bold text-black text-xs md:text-sm">Ginger</td>
                                            <td className="p-3 text-center text-black/60 text-xs md:text-sm">2.0%</td>
                                            <td className="p-3 text-center text-[#0b3a24] font-black bg-[#e6f4ea]/40 text-xs md:text-sm">2.0%</td>
                                            <td className="p-3 text-center text-black/60 text-xs md:text-sm">2.0%</td>
                                            <td className="p-3 text-center text-black/60 text-xs md:text-sm">2.0%</td>
                                        </tr>
                                        <tr>
                                            <td className="p-3 font-bold text-black text-xs md:text-sm">Cardamom</td>
                                            <td className="p-3 text-center text-black/60 text-xs md:text-sm">0.0%</td>
                                            <td className="p-3 text-center text-[#0b3a24] font-black bg-[#e6f4ea]/40 text-xs md:text-sm">2.0%</td>
                                            <td className="p-3 text-center text-black/60 text-xs md:text-sm">1.0%</td>
                                            <td className="p-3 text-center text-black/60 text-xs md:text-sm">4.0%</td>
                                        </tr>
                                        <tr className="border-b border-black/10">
                                            <td className="p-3 font-bold text-black text-xs md:text-sm">Stevia Extract</td>
                                            <td className="p-3 text-center text-black/60 text-xs md:text-sm">1.0%</td>
                                            <td className="p-3 text-center text-[#0b3a24] font-black bg-[#e6f4ea]/40 rounded-b-lg text-xs md:text-sm">2.0%</td>
                                            <td className="p-3 text-center text-black/60 text-xs md:text-sm">1.0%</td>
                                            <td className="p-3 text-center text-black/60 text-xs md:text-sm">8.0%</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="mt-4 p-4 bg-[#0b3a24]/5 border border-[#0b3a24]/10 rounded-xl text-xs font-semibold text-[#0b3a24] flex items-center gap-2">
                                    <span className="material-symbols-outlined text-sm">science</span>
                                    Recipe A achieved an 88% overall sensory acceptance score in blind testing.
                                </div>
                            </div>

                            {/* Rationale Column */}
                            <div className="lg:col-span-5 space-y-6">
                                <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm">
                                    <h3 className="font-headline font-black text-lg text-black uppercase tracking-tight mb-3">Why Recipe A Wins</h3>
                                    <p className="text-xs text-black/70 leading-relaxed mb-4">
                                        Most diabetic-friendly teas taste bitter, grassy, or medicinal. We designed Recipe A to prioritize a real chai experience:
                                    </p>
                                    <ul className="space-y-3 text-xs font-bold text-black/80">
                                        <li className="flex items-start gap-2">
                                            <span className="material-symbols-outlined text-[#0b3a24] text-base shrink-0">check_circle</span>
                                            <span>Authentic Body: 84% Premium Assam CTC preserves the strong, comforting malty chai flavor.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="material-symbols-outlined text-[#0b3a24] text-base shrink-0">check_circle</span>
                                            <span>Smooth Sweetness: 2% Stevia provides a clean, sugar-like sweetness with zero metallic aftertaste.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="material-symbols-outlined text-[#0b3a24] text-base shrink-0">check_circle</span>
                                            <span>Optimal Sourcing: 4% Tulsi and 2% Ginger for robust antioxidant and metabolic synergy.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="material-symbols-outlined text-[#0b3a24] text-base shrink-0">check_circle</span>
                                            <span>Rich Fragrance: 2% Cardamom and 6% Cinnamon provide a warm, aromatic spice finish.</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-[#0b3a24] text-white p-6 rounded-2xl shadow-lg relative overflow-hidden">
                                    <h4 className="font-headline font-black text-sm text-[#fdbd30] uppercase tracking-wider mb-2">Read The Formulation Papers</h4>
                                    <p className="text-xs text-white/80 leading-relaxed mb-6">
                                        Explore our deep dives on clinical trials for cinnamon, tulsi, ginger, and the safety profiles of natural sweeteners.
                                    </p>
                                    <a href="/blog/science-and-research-behind-sugar-care-tea" className="inline-block bg-[#fdbd30] text-[#0b3a24] font-headline font-black text-xs uppercase tracking-widest px-6 py-3 rounded hover:bg-[#ffcf4d] transition-colors">
                                        View Science Blogs
                                    </a>
                                    <div className="absolute -right-6 -bottom-6 opacity-5 pointer-events-none">
                                        <span className="material-symbols-outlined text-9xl">menu_book</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>


                {/* What Makes It Special Section */}
                <motion.section {...animFadeUp} className="bg-[#0b3a24] text-white py-24 mb-24 relative overflow-hidden">
                    <div className="max-w-5xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <span className="text-[#fdbd30] font-headline font-black uppercase tracking-[0.2em] text-xs mb-3 block">Best of Both Worlds</span>
                            <h2 className="text-4xl md:text-6xl font-black font-headline tracking-tighter uppercase leading-none mb-6">
                                WHAT MAKES IT SPECIAL
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-center">
                            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md">
                                <p className="text-lg font-bold opacity-75 mb-2">Most Wellness Teas</p>
                                <p className="text-2xl font-black text-red-300 font-headline uppercase">Taste Herbal</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md">
                                <p className="text-lg font-bold opacity-75 mb-2">Most Premium Teas</p>
                                <p className="text-2xl font-black text-red-300 font-headline uppercase">Require Sugar</p>
                            </div>
                            <div className="bg-white/10 border border-[#fdbd30]/30 p-8 rounded-2xl backdrop-blur-md scale-105 shadow-xl relative">
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#fdbd30] text-[#0b3a24] px-3 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest">
                                    THE SOLUTION
                                </div>
                                <p className="text-lg font-bold text-[#fdbd30] mb-2">Sugar Care Tea</p>
                                <p className="text-2xl font-black text-green-300 font-headline uppercase">Brings Both Together</p>
                            </div>
                        </div>

                        <div className="border-t border-white/10 pt-12 flex flex-wrap justify-center gap-x-12 gap-y-6">
                            {specialPoints.map((pt, idx) => (
                                <div key={idx} className="flex items-center gap-2 font-headline font-black text-sm uppercase tracking-wider text-green-100">
                                    <span className="material-symbols-outlined text-[#fdbd30]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                                    {pt}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="absolute inset-0 bg-newsprint pointer-events-none opacity-5 mix-blend-overlay"></div>
                </motion.section>

                {/* How To Prepare Section */}
                <motion.section {...animFadeUp} className="max-w-7xl mx-auto px-6 mb-24">
                    <div className="text-center mb-16">
                        <span className="text-[#0b3a24] font-headline font-black uppercase tracking-widest text-xs mb-3 block">Simple Ritual</span>
                        <h2 className="text-3xl md:text-5xl font-black font-headline text-black uppercase tracking-tight">
                            HOW TO PREPARE
                        </h2>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                        <motion.div variants={animStaggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true, margin: "-100px" }} className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {prepSteps.map((step, idx) => (
                                <motion.div variants={animStaggerItem} key={idx} className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
                                    <div>
                                        <div className="text-4xl md:text-5xl font-headline font-black text-[#0b3a24] opacity-20 mb-6 group-hover:opacity-40 transition-opacity">
                                            {step.step}
                                        </div>
                                        <h4 className="font-headline font-black text-xl mb-3 uppercase tracking-tight text-black">{step.title}</h4>
                                        <p className="text-black/60 text-sm leading-relaxed">{step.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                        <div className="lg:col-span-4">
                            <div className="h-full rounded-3xl overflow-hidden border border-black/5 shadow-md relative min-h-[320px]">
                                <img src="/sugar-care-pour.webp" alt="Pouring hot brewed tea" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                                    <p className="text-white text-xs font-bold uppercase tracking-widest leading-relaxed">
                                        Kadak and aromatic, brewed to order.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Customer Experience (Reviews) */}
                <motion.section {...animFadeUp} className="bg-[#f4f7f5] py-20 mb-24 border-y border-[#0b3a24]/10">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <span className="text-[#0b3a24] font-headline font-black uppercase tracking-widest text-xs mb-3 block">Tea Lovers Speak</span>
                            <h2 className="text-3xl md:text-5xl font-black font-headline text-black uppercase tracking-tight">
                                CUSTOMER EXPERIENCE
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                            <div className="lg:col-span-6 space-y-6">
                                {reviews.map((rev, idx) => (
                                    <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-black/5">
                                        <div className="flex text-amber-500 mb-4">
                                            {[...Array(rev.stars)].map((_, i) => (
                                                <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                            ))}
                                        </div>
                                        <blockquote className="text-lg font-medium text-black/80 italic mb-4 leading-relaxed">
                                            "{rev.text}"
                                        </blockquote>
                                        <cite className="font-headline font-black text-xs text-[#0b3a24] not-italic uppercase tracking-widest">
                                            — {rev.author}
                                        </cite>
                                    </div>
                                ))}
                            </div>
                            <div className="lg:col-span-6">
                                <div className="rounded-3xl overflow-hidden border border-black/5 shadow-lg relative aspect-[4/3] group bg-white">
                                    <img src="/sugar-care-family.webp" alt="Family drinking Sugar Care Tea" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-8">
                                        <span className="text-[#fdbd30] font-headline font-black uppercase tracking-widest text-xs mb-2 block">Loved By All Generations</span>
                                        <p className="text-white text-lg font-headline font-bold leading-tight">
                                            "A single cup that binds the family together. Healthy for parents, sweet enough for kids."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Product Details Section */}
                <motion.section {...animFadeUp} className="max-w-3xl mx-auto px-6 mb-24">
                    <div className="text-center mb-12">
                        <span className="text-[#0b3a24] font-headline font-black uppercase tracking-widest text-xs mb-3 block">Specifications</span>
                        <h2 className="text-3xl md:text-5xl font-black font-headline text-black uppercase tracking-tight">
                            PRODUCT DETAILS
                        </h2>
                    </div>
                    <div className="bg-white rounded-2xl border border-black/5 shadow-sm overflow-hidden">
                        <div className="divide-y divide-black/5">
                            {[
                                { name: "Product Name", val: "Sugar Care Tea" },
                                { name: "Net Weight", val: "200g" },
                                { name: "Tea Type", val: "Premium Assam CTC Blend" },
                                { name: "Flavor Profile", val: "Rich, Kadak, Naturally Sweet" },
                                { name: "Delivery Timeline", val: "10 Days (Guaranteed Freshness)" },
                                { name: "Storage", val: "Store in a cool and dry place." }
                            ].map((det, idx) => (
                                <div key={idx} className="grid grid-cols-3 p-6 text-sm">
                                    <div className="font-headline font-black text-black/50 uppercase tracking-wider">{det.name}</div>
                                    <div className="col-span-2 font-bold text-black text-base">{det.val}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* FAQ Section */}
                <motion.section {...animFadeUp} className="max-w-3xl mx-auto px-6 mb-24">
                    <div className="text-center mb-16">
                        <span className="text-[#0b3a24] font-headline font-black uppercase tracking-widest text-xs mb-3 block">Clear Doubts</span>
                        <h2 className="text-3xl md:text-5xl font-black font-headline text-black uppercase tracking-tight">
                            FAQ
                        </h2>
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="bg-white rounded-xl border border-black/5 overflow-hidden">
                                <button 
                                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                                    className="w-full p-6 text-left font-headline font-black text-lg uppercase tracking-tight text-black flex justify-between items-center hover:bg-[#f4f7f5] transition-colors"
                                >
                                    <span>{faq.q}</span>
                                    <span className="material-symbols-outlined text-[#0b3a24] transform transition-transform duration-200" style={{ transform: activeFaq === idx ? 'rotate(180deg)' : 'none' }}>
                                        expand_more
                                    </span>
                                </button>
                                <AnimatePresence initial={false}>
                                    {activeFaq === idx && (
                                        <motion.div 
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <div className="p-6 pt-0 border-t border-black/5 text-black/70 leading-relaxed text-sm">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* Final CTA Section */}
                <motion.section {...animFadeUp} className="max-w-4xl mx-auto px-6">
                    <div className="bg-[#0b3a24] text-white rounded-3xl p-12 md:p-20 text-center relative overflow-hidden shadow-2xl border border-white/10">
                        <div className="absolute top-0 right-0 p-8 opacity-[0.03] select-none text-9xl font-headline font-black tracking-tighter pointer-events-none">
                            CHAI
                        </div>
                        <h2 className="text-3xl md:text-6xl font-black font-headline text-white mb-4 tracking-tighter uppercase leading-[1.1]">
                            Experience Premium Chai <br />In A Smarter Way.
                        </h2>
                        <h3 className="text-xl md:text-2xl font-bold text-[#fdbd30] italic mb-6">
                            SUGAR CARE TEA
                        </h3>
                        <p className="text-white/60 font-headline font-black text-sm uppercase tracking-widest mb-10 flex flex-wrap justify-center gap-x-6 gap-y-2">
                            <span>200g | ₹349</span>
                            <span>•</span>
                            <span>Naturally Sweet</span>
                            <span>•</span>
                            <span>10 Days Delivery</span>
                        </p>
                        <button 
                            onClick={handleBuyNow}
                            className="bg-[#fdbd30] text-[#0b3a24] px-12 py-5 font-black text-2xl tracking-wide uppercase hover:bg-[#ffcf4d] transition-colors shadow-[0_6px_0_0_#051c11] active:translate-y-1 active:shadow-none min-w-[240px] rounded-lg relative z-10"
                        >
                            BUY NOW
                        </button>
                    </div>
                </motion.section>
            </main>

            {/* Full-Screen Interactive Lightbox Modal */}
            <AnimatePresence>
                {isLightboxOpen && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/95 z-[99999] flex flex-col justify-between p-6 select-none"
                    >
                        {/* Lightbox Header */}
                        <div className="flex justify-between items-center text-white/80 w-full z-10">
                            <div className="font-headline font-bold text-xs uppercase tracking-widest">
                                Checking: Sugar Care Tea ({lightboxIndex + 1}/{thumbnails.length})
                            </div>
                            <button 
                                onClick={() => setIsLightboxOpen(false)}
                                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center text-white text-2xl font-bold cursor-pointer"
                            >
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>

                        {/* Lightbox Body: Image Viewer */}
                        <div className="flex-1 flex items-center justify-center relative overflow-hidden my-4">
                            {/* Prev Button */}
                            <button 
                                onClick={() => {
                                    setLightboxIndex((prev) => (prev === 0 ? thumbnails.length - 1 : prev - 1));
                                    setLightboxScale(1);
                                }}
                                className="absolute left-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center text-white z-10 cursor-pointer"
                            >
                                <span className="material-symbols-outlined">chevron_left</span>
                            </button>

                            {/* Main Zoomable Image */}
                            <div className="w-full h-full max-w-4xl max-h-[70vh] flex items-center justify-center overflow-auto p-4 cursor-grab active:cursor-grabbing">
                                <motion.img 
                                    key={lightboxIndex}
                                    src={thumbnails[lightboxIndex]} 
                                    alt="Zoomed Product View"
                                    animate={{ scale: lightboxScale }}
                                    transition={{ duration: 0.15 }}
                                    drag={lightboxScale > 1}
                                    dragConstraints={{ left: -300, right: 300, top: -300, bottom: 300 }}
                                    className="max-w-full max-h-full object-contain pointer-events-none rounded-lg"
                                />
                            </div>

                            {/* Next Button */}
                            <button 
                                onClick={() => {
                                    setLightboxIndex((prev) => (prev === thumbnails.length - 1 ? 0 : prev + 1));
                                    setLightboxScale(1);
                                }}
                                className="absolute right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center text-white z-10 cursor-pointer"
                            >
                                <span className="material-symbols-outlined">chevron_right</span>
                            </button>
                        </div>

                        {/* Lightbox Footer Controls */}
                        <div className="flex flex-col items-center gap-4 w-full z-10">
                            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 shadow-lg">
                                <button 
                                    onClick={() => setLightboxScale(prev => Math.max(1, prev - 0.25))}
                                    disabled={lightboxScale <= 1}
                                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg hover:bg-white/10 transition-all cursor-pointer ${lightboxScale <= 1 ? 'opacity-40 cursor-not-allowed' : ''}`}
                                >
                                    <span className="material-symbols-outlined">zoom_out</span>
                                </button>
                                <span className="text-white text-xs font-headline font-bold tracking-widest min-w-[70px] text-center">
                                    {Math.round(lightboxScale * 100)}%
                                </span>
                                <button 
                                    onClick={() => setLightboxScale(prev => Math.min(3, prev + 0.25))}
                                    disabled={lightboxScale >= 3}
                                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg hover:bg-white/10 transition-all cursor-pointer ${lightboxScale >= 3 ? 'opacity-40 cursor-not-allowed' : ''}`}
                                >
                                    <span className="material-symbols-outlined">zoom_in</span>
                                </button>
                                <div className="h-4 w-px bg-white/20"></div>
                                <button 
                                    onClick={() => setLightboxScale(1)}
                                    className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-all cursor-pointer"
                                    title="Reset Zoom"
                                >
                                    <span className="material-symbols-outlined">restart_alt</span>
                                </button>
                            </div>

                            {/* Thumbnail row below */}
                            <div className="flex gap-2 justify-center">
                                {thumbnails.map((thumb, idx) => (
                                    <button 
                                        key={idx}
                                        onClick={() => {
                                            setLightboxIndex(idx);
                                            setLightboxScale(1);
                                        }}
                                        className={`w-12 h-12 rounded-lg border-2 overflow-hidden bg-white/5 transition-all p-1 ${
                                            lightboxIndex === idx ? 'border-amber-400 scale-105' : 'border-white/10 opacity-60 hover:opacity-100'
                                        }`}
                                    >
                                        <img src={thumb} alt="thumbnail" className="w-full h-full object-contain rounded" />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />
        </div>
    );
};

export default SugarCareTea;
