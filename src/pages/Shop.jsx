import React, { useState, useEffect } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Shop = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const planFromUrl = parseInt(searchParams.get('plan'));
    const [selectedPlan, setSelectedPlan] = useState(isNaN(planFromUrl) ? 0 : planFromUrl);
    const [qty, setQty] = useState(1);

    const plans = [
        {
            id: 0,
            name: "THE STARTER PACK",
            subtitle: "Premium Ready-to-Eat Indori Poha",
            description: "1 Full 300g Box (5 Individual Packs)",
            price: 189,
            originalPrice: 220,
            discount: "14% OFF",
            tag: "POPULAR",
            image: "/box-front.png",
            thumbnails: ["/box-front.png", "/box-left.png", "/box-right.png", "/ingredients-report.png"],
            features: ["5 Single Servings", "Jeeravan Spice Mix", "Ratlam Sev Included"]
        },
        {
            id: 1,
            name: "THE REBEL BUNDLE",
            subtitle: "Double the Poha, Double the Fun",
            description: "2 Full 300g Boxes (600g Total)",
            price: 290,
            originalPrice: 378,
            discount: "23% OFF",
            tag: "BEST VALUE",
            image: "/combo-2box.png",
            thumbnails: ["/combo-2box.png", "/box-group.png", "/box-front.png"],
            features: ["10 Single Servings", "2x Sev Packs", "Free Shipping"]
        },
        {
            id: 2,
            name: "THE MYSTERY COMBO",
            subtitle: "Poha + Secret Authentic Sev",
            description: "1 Box 300g Pohafix + 1 Secret Sev (150g)",
            price: 290,
            originalPrice: 350,
            discount: "17% OFF",
            tag: "LIMITED",
            image: "/combo-sev.png",
            thumbnails: ["/combo-sev.png", "/combo-single.png", "/box-front.png"],
            features: ["5 Single Servings", "150g Extra Sev", "Premium Pomegranate"]
        }
    ];

    const currentPlan = plans[selectedPlan];
    const [mainImage, setMainImage] = useState(currentPlan.image);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        setMainImage(currentPlan.image);
        setQty(1);
    }, [selectedPlan]);

    const handleBuyNow = () => {
        navigate(`/order?plan=${selectedPlan}&qty=${qty}`);
    };

    return (
        <>
            <Helmet>
                <title>Buy Organic Instant Poha | Ready to Eat Indori Poha | Travel Food India</title>
                <meta name="description" content="Shop organic, preservative-free ready to use Indori Poha. The ultimate travel food for Indians abroad and best quick breakfast for bachelors. Order Pohafix now." />
                <meta name="keywords" content="buy organic poha, travel food india, instant meals for students abroad, bachelors breakfast ideas, ready to eat indori breakfast, pohafix price india" />
                
                {/* Product Schema for Shop */}
                <script type="application/ld+json">
                    {`
                    {
                      "@context": "https://schema.org/",
                      "@type": "Product",
                      "name": "Pohafix Instant Poha",
                      "image": ["https://pohafix.com/box-front.png"],
                      "description": "Premium ready-to-use Indori Poha with authentic spices and Ratlami Sev. No preservatives. Ready in 5 minutes.",
                      "sku": "PF-ORIG-300",
                      "brand": {
                        "@type": "Brand",
                        "name": "Pohafix"
                      },
                      "offers": {
                        "@type": "AggregateOffer",
                        "url": "https://pohafix.com/shop",
                        "priceCurrency": "INR",
                        "lowPrice": "189",
                        "highPrice": "290",
                        "offerCount": "3",
                        "availability": "https://schema.org/InStock"
                      },
                      "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.9",
                        "reviewCount": "1200"
                      }
                    }
                    `}
                </script>
            </Helmet>
            <Header />
            <main className="pt-24 lg:pt-32 pb-20 bg-white font-body">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                        {/* Left Column: Images */}
                        <div className="flex flex-col gap-4">
                            <div className="aspect-square md:aspect-[4/5] lg:aspect-square w-full rounded-2xl bg-[#f8f5f0] border border-black/5 flex items-center justify-center p-8 relative overflow-hidden group">
                                <AnimatePresence mode="wait">
                                    <motion.img 
                                        key={mainImage}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                        src={mainImage}
                                        alt={currentPlan.name}
                                        className="w-full h-full object-contain mix-blend-multiply drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                                    />
                                </AnimatePresence>
                                {currentPlan.tag && (
                                    <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-sm">
                                        {currentPlan.tag}
                                    </div>
                                )}
                            </div>

                            {/* Thumbnails */}
                            <div className="flex gap-3 overflow-x-auto pb-2 snap-x hide-scrollbar">
                                {currentPlan.thumbnails?.map((thumb, idx) => (
                                    <button 
                                        key={idx}
                                        onClick={() => setMainImage(thumb)}
                                        className={`shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-xl border-2 flex items-center justify-center p-2 snap-start transition-all ${
                                            mainImage === thumb ? 'border-primary bg-primary/5' : 'border-black/10 bg-[#f8f5f0] hover:border-black/30'
                                        }`}
                                    >
                                        <img src={thumb} alt="thumbnail" className="w-full h-full object-contain mix-blend-multiply" />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Right Column: Details */}
                        <div className="flex flex-col">
                            {/* Title & Reviews */}
                            <div className="mb-6">
                                <h1 className="text-3xl md:text-5xl font-black font-headline text-black uppercase tracking-tight mb-2">
                                    {currentPlan.name}
                                </h1>
                                <p className="text-primary font-bold text-lg mb-2">
                                    {currentPlan.subtitle}
                                </p>
                                <div className="flex items-center gap-2">
                                    <div className="flex text-[#fcc92f]">
                                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star_half</span>
                                    </div>
                                    <span className="text-sm font-medium text-black/60">4.9 (1,240 reviews)</span>
                                </div>
                            </div>

                            {/* Price Section */}
                            <div className="mb-6 border-b border-black/10 pb-6">
                                <div className="flex items-end gap-3 mb-1">
                                    <span className="text-4xl md:text-5xl font-black font-headline tracking-tighter">₹{currentPlan.price}</span>
                                    <span className="text-xl md:text-2xl font-bold text-black/40 line-through mb-1">₹{currentPlan.originalPrice}</span>
                                    <span className="bg-[#e6f4ea] text-[#137333] px-2 py-1 rounded text-xs font-black uppercase tracking-wider mb-2">{currentPlan.discount}</span>
                                </div>
                                <p className="text-xs font-medium text-black/50">MRP Inclusive of all taxes</p>
                            </div>



                            {/* Variant Selector */}
                            <div className="mb-8">
                                <p className="font-bold text-black mb-3">Select Variant</p>
                                <div className="grid grid-cols-2 gap-3">
                                    {plans.map((plan, idx) => (
                                        <button 
                                            key={plan.id}
                                            onClick={() => setSelectedPlan(idx)}
                                            className={`p-3 rounded-lg border text-left transition-all ${
                                                selectedPlan === idx 
                                                ? 'border-primary ring-1 ring-primary bg-primary/5' 
                                                : 'border-black/10 bg-[#f8f5f0] hover:border-black/30'
                                            }`}
                                        >
                                            <div className="flex justify-between items-start mb-2">
                                                <span className={`text-xs font-bold px-2 py-0.5 rounded-sm ${
                                                    selectedPlan === idx ? 'bg-primary text-white' : 'bg-black/10 text-black'
                                                }`}>
                                                    {plan.description.split('(')[0].trim()}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="font-black text-lg font-headline">₹{plan.price}</span>
                                                <span className="text-xs text-black/40 line-through font-bold">₹{plan.originalPrice}</span>
                                                <span className="text-[10px] text-primary font-bold">{plan.discount}</span>
                                            </div>
                                            <p className="text-[10px] text-[#116e2b] font-bold mt-1">Ready in 5 mins</p>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Add to Cart / Buy Now Action */}
                            <div className="flex gap-4 mb-10">
                                <div className="flex items-center bg-[#f8f5f0] border border-black/10 rounded-lg">
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
                                    className="flex-1 bg-gradient-to-r from-[#fcc92f] to-[#f6bb12] text-black font-headline font-black text-xl tracking-tight uppercase rounded-lg hover:shadow-lg hover:from-[#f6bb12] hover:to-[#e5ae10] transition-all"
                                >
                                    BUY NOW
                                </button>
                            </div>

                            {/* Description */}
                            <div className="mb-10">
                                <h3 className="font-headline font-black text-lg uppercase mb-3">Product Description</h3>
                                <p className="text-black/70 text-sm leading-relaxed mb-4">
                                    Experience the pinnacle of Indori breakfast, subtly infused with authentic spices for an aromatic finish. Our Pohafix {currentPlan.name} is crafted for those who demand authentic taste without the hassle. Sourced from the finest farms in Malwa, this blend ensures a perfect fluffy texture that revitalizes your mornings. Designed for the modern professional who values purity, health, and authentic flavor.
                                </p>
                                <ul className="text-sm text-black/70 space-y-2 list-disc pl-4">
                                    <li><strong>100% Natural:</strong> No MSG or preservatives.</li>
                                    <li><strong>Instant:</strong> Just add hot water, ready in 5 minutes.</li>
                                    <li><strong>Authentic:</strong> Includes traditional Ratlami Sev and Jeeravan.</li>
                                </ul>
                            </div>

                            {/* Trust Badges Footer */}
                            <div className="grid grid-cols-4 gap-4 border-t border-black/10 pt-6">
                                <div className="flex flex-col items-center text-center gap-2">
                                    <span className="material-symbols-outlined text-primary text-3xl">local_shipping</span>
                                    <span className="text-[9px] font-bold text-black/80 uppercase tracking-wide">Free<br/>Shipping</span>
                                </div>
                                <div className="flex flex-col items-center text-center gap-2">
                                    <span className="material-symbols-outlined text-primary text-3xl">bolt</span>
                                    <span className="text-[9px] font-bold text-black/80 uppercase tracking-wide">Fast<br/>Delivery</span>
                                </div>
                                <div className="flex flex-col items-center text-center gap-2">
                                    <span className="material-symbols-outlined text-primary text-3xl">replay</span>
                                    <span className="text-[9px] font-bold text-black/80 uppercase tracking-wide">Easy<br/>Return</span>
                                </div>
                                <div className="flex flex-col items-center text-center gap-2">
                                    <span className="material-symbols-outlined text-primary text-3xl">verified_user</span>
                                    <span className="text-[9px] font-bold text-black/80 uppercase tracking-wide">Lab-Tested<br/>& Quality Assured</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            {/* Preparation Steps Carousel */}
            <section className="py-24 bg-surface border-y border-outline-variant/10 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div>
                            <span className="text-primary font-headline font-black uppercase tracking-[0.2em] text-xs mb-4 block">The 5-Minute Ritual</span>
                            <h2 className="text-4xl md:text-6xl font-black font-headline text-on-surface tracking-tighter uppercase leading-[0.9]">
                                How to make <br/><span className="text-primary italic">Perfect Poha.</span>
                            </h2>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 snap-x snap-mandatory no-scrollbar pb-8 -mb-8">
                            {[
                                { id: "01", title: "POUR", desc: "Empty 1 serving (60 g poha) into a bowl." },
                                { id: "02", title: "HOT WATER", desc: "Add 60 ml hot boiled water." },
                                { id: "03", title: "COVER", desc: "Cover & keep for 5 minutes." },
                                { id: "04", title: "STIR", desc: "Stir well - your Poha is ready!" }
                            ].map((step) => (
                                <div key={step.id} className="min-w-[85vw] md:min-w-0 snap-center">
                                    <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.03)] border border-stone-100 flex flex-col h-full hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all group">
                                        <div className="text-primary font-headline font-black text-5xl md:text-6xl mb-6 opacity-20 group-hover:opacity-40 transition-opacity">{step.id}</div>
                                        <h4 className="font-headline font-black text-xl md:text-2xl mb-4 tracking-tighter uppercase">{step.title}</h4>
                                        <p className="text-on-surface-variant font-medium leading-relaxed text-sm md:text-base">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Ingredient Composition Section */}
            <section className="py-24 bg-[#ffdf00] overflow-hidden">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-[2rem] border border-black/5 shadow-2xl relative">
                        {/* Decorative Flourish */}
                        <div className="absolute -top-10 -right-10 text-9xl text-black/[0.03] font-headline font-black rotate-12 select-none pointer-events-none">PURE</div>
                        
                        <h2 className="text-2xl md:text-3xl font-black font-headline text-black mb-8 tracking-tight uppercase">
                            Ingredient Composition <span className="text-black/50 text-sm block md:inline font-bold italic">(Approx. % by Weight)</span>
                        </h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                            <div className="md:col-span-12">
                                <div className="space-y-3 font-headline font-bold text-sm md:text-base">
                                    <div className="flex justify-between items-center text-black/40 uppercase tracking-widest text-[10px] mb-4 border-b border-black/10 pb-4">
                                        <span>Ingredient</span>
                                        <span>% in Mix</span>
                                    </div>
                                    
                                    {[
                                        { name: "Flattened Rice", val: "51.95%" },
                                        { name: "Sugar", val: "14.84%" },
                                        { name: "Soya Oil", val: "10.89%" },
                                        { name: "Peanuts", val: "8.41%" },
                                        { name: "Green Chilli", val: "6.43%" },
                                        { name: "Salt", val: "2.47%" },
                                        { name: "Coriander Leaves", val: "0.99%" },
                                        { name: "Curry Leaves", val: "0.74%" },
                                        { name: "Fennel Seeds", val: "0.74%" },
                                        { name: "Cumin Seeds", val: "0.74%" },
                                        { name: "Coriander Powder", val: "0.74%" },
                                        { name: "Mustard Seeds", val: "0.49%" },
                                        { name: "Bay Leaf", val: "0.25%" },
                                        { name: "Turmeric", val: "0.30%" },
                                        { name: "Lemon Salt", val: "Trace (<0.3%)" },
                                    ].map((item, idx) => (
                                        <div key={idx} className={`flex justify-between items-center py-1.5 ${idx % 2 === 0 ? 'text-black' : 'text-black/70'}`}>
                                            <span className="flex items-center gap-3">
                                                <div className={`w-1.5 h-1.5 rounded-full ${idx === 0 ? 'bg-primary' : 'bg-black/20'}`}></div>
                                                {item.name}
                                            </span>
                                            <span className="tabular-nums font-black">{item.val}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 flex flex-col md:flex-row items-center gap-6 justify-between border-t border-black/10 pt-8">
                            <div className="flex gap-4 items-center">
                                <div className="p-3 bg-black text-[#ffdf00] rounded-xl font-headline font-black text-xs uppercase tracking-widest">
                                    100% Clean
                                </div>
                                <p className="text-xs font-bold text-black/60 max-w-[200px]">No laboratory stabilizers or artificial preservatives.</p>
                            </div>
                            <span className="material-symbols-outlined text-black/20 text-6xl hidden md:block">nutrition</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Narrative detail */}
            <section className="py-24 max-w-4xl mx-auto px-6 text-center">
                <span className="material-symbols-outlined text-secondary text-5xl mb-8" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
                <h2 className="text-4xl md:text-5xl font-black font-headline text-on-surface mb-8 tracking-tighter">Better for you, <br/>Better than street.</h2>
                <p className="text-xl text-on-surface-variant leading-relaxed font-medium">
                    Most instant foods rely on laboratory-synthesized stabilizers and hidden sugars to extend shelf life. At Pohafix, we believe in the power of raw, natural ingredients. No MSG, no artificial fillers—just the purest Malwa rice flakes and hand-ground spices, batched weekly for maximum vibrancy.
                </p>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-[#e9e6dd] border-t border-outline-variant/10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-black font-headline text-on-surface mb-2 tracking-tighter">
                                Trusted by <span className="text-[#ce1d2a]">Indoris</span> Worldwide
                            </h2>
                            <p className="text-on-surface-variant font-medium text-sm md:text-base">
                                Hear it from our community of poha lovers.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        {/* Card 1 */}
                        <div className="md:col-span-6 bg-white p-8 md:p-10 rounded-xl shadow-sm border border-outline-variant/10">
                            <div className="text-[#8c7423] mb-6 flex gap-1">
                                <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                            </div>
                            <p className="font-headline font-bold text-xl md:text-2xl text-on-surface leading-snug italic mb-8">
                                "Bilkul Indore jaisa taste 😍. I live in London and I missed this so much. Pohafix saved my mornings!"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-[#fbc62f] rounded-[10px]"></div>
                                <div>
                                    <p className="font-bold text-sm text-on-surface leading-tight mb-1">Rahul Sharma</p>
                                    <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">Verified Buyer</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="md:col-span-6 bg-[#dedad0] p-8 md:p-10 rounded-xl shadow-sm border border-outline-variant/5 text-center flex flex-col justify-center">
                            <h3 className="font-headline font-black text-[#ce1d2a] text-xl md:text-2xl mb-4 tracking-tight uppercase">"THE BEST INSTANT POHA EVER!"</h3>
                            <p className="text-sm font-medium text-on-surface-variant mb-6 leading-relaxed max-w-sm mx-auto">
                                "Better than most street stalls. The Jeeravan spice is exactly right. 10/10 would recommend."
                            </p>
                            <p className="text-xs font-bold text-on-surface">— Priya M., Food Critic</p>
                        </div>

                        {/* Card 3 */}
                        <div className="md:col-span-3 bg-white p-8 rounded-xl shadow-sm border border-outline-variant/5">
                            <div className="text-[#8c7423] mb-4 flex gap-1">
                                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                            </div>
                            <p className="text-sm font-medium text-on-surface mb-6 leading-relaxed">
                                "The pomegranate crunch is the game changer. So fresh!"
                            </p>
                            <p className="text-[10px] font-bold text-on-surface uppercase tracking-widest">Asiah K.</p>
                        </div>

                        {/* Card 4 */}
                        <div className="md:col-span-3 bg-[#116e2b] p-8 rounded-xl shadow-sm flex flex-col justify-between">
                            <span className="material-symbols-outlined text-[#72ae7e] text-3xl mb-4 rotate-180" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
                            <p className="text-sm font-bold text-white mb-6 leading-relaxed">
                                "Perfect for my office breakfast. Healthy and super tasty."
                            </p>
                            <p className="text-[10px] font-bold text-[#b4d6ba] uppercase tracking-widest">ADITI VERMA</p>
                        </div>

                        {/* Card 5 */}
                        <div className="md:col-span-6 bg-[#f7bc25] p-8 rounded-xl shadow-sm flex items-center lg:items-start gap-6 border border-yellow-500/20">
                            <div className="w-20 h-20 rounded-xl bg-black/30 shrink-0 border-2 border-white/20 overflow-hidden mix-blend-multiply flex items-center justify-center">
                               <span className="material-symbols-outlined text-5xl text-white opacity-80" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
                            </div>
                            <div className="flex flex-col justify-center h-full">
                                <h4 className="font-headline font-black text-[#604300] text-xl mb-2">"Authenticity Delivered."</h4>
                                <p className="text-sm font-medium text-[#7a5900] leading-relaxed max-w-sm">
                                    Finally a brand that doesn't compromise on the real Malwa flavor.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 max-w-7xl mx-auto bg-white">
                <div className="bg-gradient-to-br from-[#9b151a] to-[#6d0006] rounded-[2rem] p-12 md:p-24 text-center shadow-2xl relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-5xl md:text-7xl font-black font-headline text-white mb-8 tracking-tighter leading-[1.1] drop-shadow-md">
                            Ready for the Indori <br className="hidden md:block" /> Morning Ritual?
                        </h2>
                        <p className="text-white/90 text-sm md:text-lg font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
                            Join over 50,000+ satisfied poha lovers and get your authentic Malwa fix today.
                        </p>
                        <button 
                            onClick={handleBuyNow}
                            className="inline-block bg-[#fcc92f] text-black px-12 py-5 rounded font-headline font-black text-xl hover:bg-[#f6bb12] transition-colors shadow-[0_8px_0_0_#b78401] active:translate-y-2 active:shadow-[0_0px_0_0_#b78401]"
                        >
                            Order Your Pack Now
                        </button>
                    </div>
                </div>
            </section>
            </main>
            <Footer />
        </>
    );
};

export default Shop;
