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

                            {/* Promotional Banners */}
                            <div className="space-y-3 mb-8">
                                <div className="bg-[#e6f4ea] border border-[#a8dab5] border-dashed rounded-lg p-3 flex items-start gap-3">
                                    <span className="material-symbols-outlined text-[#137333]">local_activity</span>
                                    <p className="text-sm font-medium text-[#137333]">Buy now and Get a <strong>Scratch Card</strong> & win a <strong>Free Poha Subscription!</strong></p>
                                </div>

                                <div className="border border-[#f29900]/40 rounded-lg p-4 relative flex items-center gap-4 bg-[#fff9f0]">
                                    <div className="absolute -top-3 left-4 bg-[#116e2b] text-white text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-sm">
                                        Exclusive Offer
                                    </div>
                                    <img src="/combo-single.png" alt="Free gift" className="w-12 h-12 object-contain mix-blend-multiply" />
                                    <div>
                                        <p className="font-bold text-black text-sm">Get FREE Authentic Ratlami Sev Packet</p>
                                        <p className="font-bold text-black/60 text-xs">Worth ₹45</p>
                                    </div>
                                </div>
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
            </main>
            <Footer />
        </>
    );
};

export default Shop;
