import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';

const Shop = () => {
    const [selectedPlan, setSelectedPlan] = useState(0);

    const plans = [
        {
            id: 0,
            name: "THE STARTER PACK",
            description: "1 Full 300g Box (5 Individual Packs)",
            price: 189,
            tag: "POPULAR",
            image: "/box-front.png",
            features: ["5 Single Servings", "Jeeravan Spice Mix", "Ratlam Sev Included"]
        },
        {
            id: 1,
            name: "THE REBEL BUNDLE",
            description: "2 Full 300g Boxes (600g Total)",
            price: 290,
            originalPrice: 378,
            tag: "BEST VALUE",
            image: "/combo-2box.png",
            features: ["10 Single Servings", "2x Sev Packs", "Free Shipping"]
        },
        {
            id: 2,
            name: "THE MYSTERY COMBO",
            description: "1 Box 300g Pohafix + 1 Secret Sev (150g)",
            price: 290,
            tag: "LIMITED",
            image: "/combo-sev.png",
            features: ["5 Single Servings", "150g Extra Sev", "Premium Pomegranate"]
        }
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />
            <main className="pt-24 lg:pt-32 pb-20 bg-background selection:bg-primary/10">
                {/* Main Product Stage */}
            <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                
                {/* Visual Showcase */}
                <div className="relative sticky top-32">
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={selectedPlan}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.05 }}
                            transition={{ duration: 0.4 }}
                            className="aspect-square rounded-[3rem] bg-surface-container-low overflow-hidden shadow-2xl flex items-center justify-center p-12"
                        >
                            <img 
                                src={plans[selectedPlan].image} 
                                alt={plans[selectedPlan].name}
                                className="w-full h-full object-contain mix-blend-multiply drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
                            />
                        </motion.div>
                    </AnimatePresence>
                    
                    {/* Floating Badges */}
                    <div className="absolute -top-6 -left-6 bg-primary text-on-primary px-6 py-2 rounded-full font-headline font-black text-xs uppercase tracking-[0.2em] shadow-xl rotate-[-4deg]">
                        Indore Certified
                    </div>
                </div>

                {/* Configuration details */}
                <div className="flex flex-col">
                    <div className="mb-10">
                        <div className="flex items-center gap-3 mb-4">
                             <span className="material-symbols-outlined text-secondary text-base" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                             <span className="text-secondary font-headline font-bold text-xs uppercase tracking-widest">Small Batch Produced Weekly</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-black font-headline text-on-surface leading-[1.1] tracking-tighter mb-6 uppercase">
                            Authentic <br/><span className="text-primary italic">Indori Poha</span>
                        </h1>
                        <p className="text-lg text-on-surface-variant font-medium leading-relaxed max-w-xl">
                            The original Chhappan Dukaan ritual, captured in an instant. No laboratory shelf-extenders—just raw, natural ingredients and the soul of Malwa.
                        </p>
                    </div>

                    {/* Plan Selection Grid */}
                    <div className="space-y-4 mb-10">
                        <h3 className="font-headline font-black text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-6 flex items-center gap-2">
                             Select Your Experience
                             <div className="h-px flex-1 bg-outline-variant/20"></div>
                        </h3>
                        
                        {plans.map((plan, idx) => (
                            <button 
                                key={plan.id}
                                onClick={() => setSelectedPlan(idx)}
                                className={`w-full text-left p-6 rounded-2xl border-4 transition-all duration-300 relative overflow-hidden group ${
                                    selectedPlan === idx 
                                    ? 'border-primary bg-surface-container-lowest shadow-xl' 
                                    : 'border-outline-variant/10 bg-surface-container-low hover:border-primary/30'
                                }`}
                            >
                                {plan.tag && (
                                    <div className={`absolute top-0 right-0 px-4 py-1.5 font-headline font-black text-[9px] uppercase tracking-widest rounded-bl-xl ${
                                        selectedPlan === idx ? 'bg-primary text-on-primary' : 'bg-outline-variant/20 text-on-surface-variant'
                                    }`}>
                                        {plan.tag}
                                    </div>
                                )}
                                <div className="flex justify-between items-center mb-1">
                                    <h4 className="font-headline font-black text-lg group-hover:text-primary transition-colors">{plan.name}</h4>
                                    <span className="text-2xl font-black font-headline">₹{plan.price}</span>
                                </div>
                                <p className={`text-sm font-medium transition-colors ${selectedPlan === idx ? 'text-on-surface' : 'text-on-surface-variant'}`}>
                                    {plan.description}
                                </p>
                            </button>
                        ))}
                    </div>



                    {/* Action Block */}
                    <div className="space-y-6 pt-6 border-t border-outline-variant/10">
                        <Link 
                            to="/order" 
                            className="w-full bg-primary text-on-primary py-6 rounded-2xl font-headline font-black text-xl uppercase tracking-tight flex items-center justify-center gap-3 hover:bg-primary-container transition-all shadow-[0_12px_24px_rgba(175,16,26,0.25)] active:scale-[0.98]"
                        >
                            Grab Your Pack
                            <span className="material-symbols-outlined font-black">arrow_forward</span>
                        </Link>
                        
                        {/* Trust Icons Grid */}
                        <div className="grid grid-cols-3 gap-2 mt-4 pt-4">
                            <div className="flex flex-col items-center text-center gap-2">
                                <span className="material-symbols-outlined text-secondary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                                <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest leading-tight">Premium<br/>Quality</span>
                            </div>
                            <div className="flex flex-col items-center text-center gap-2">
                                <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>local_shipping</span>
                                <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest leading-tight">Fast<br/>Delivery</span>
                            </div>
                            <div className="flex flex-col items-center text-center gap-2">
                                <span className="material-symbols-outlined text-tertiary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
                                <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest leading-tight">Safe<br/>Payment</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Preparation ritual */}
            <section className="mt-32 border-y border-outline-variant/10">
                <div className="max-w-7xl mx-auto grid md:grid-cols-4 divide-x divide-outline-variant/10">
                    <div className="p-12 text-center group bg-surface-container-low/30 hover:bg-background transition-colors">
                        <div className="text-primary font-headline font-black text-5xl mb-6 group-hover:scale-110 transition-transform">01</div>
                        <h4 className="font-headline font-black text-lg mb-2">POUR</h4>
                        <p className="text-sm font-medium text-on-surface-variant">Empty the 75g pack into a bowl.</p>
                    </div>
                    <div className="p-12 text-center group bg-surface-container-low/30 hover:bg-background transition-colors">
                        <div className="text-primary font-headline font-black text-5xl mb-6 group-hover:scale-110 transition-transform">02</div>
                        <h4 className="font-headline font-black text-lg mb-2">HOT WATER</h4>
                        <p className="text-sm font-medium text-on-surface-variant">Add 80ml of boiling water.</p>
                    </div>
                    <div className="p-12 text-center group bg-surface-container-low/30 hover:bg-background transition-colors">
                        <div className="text-primary font-headline font-black text-5xl mb-6 group-hover:scale-110 transition-transform">03</div>
                        <h4 className="font-headline font-black text-lg mb-2">COVER</h4>
                        <p className="text-sm font-medium text-on-surface-variant">Close the lid for 5 minutes.</p>
                    </div>
                    <div className="p-12 text-center group bg-surface-container-low/30 hover:bg-background transition-colors">
                        <div className="text-primary font-headline font-black text-5xl mb-6 group-hover:scale-110 transition-transform">04</div>
                        <h4 className="font-headline font-black text-lg mb-2">STIR</h4>
                        <p className="text-sm font-medium text-on-surface-variant">Uncover, stir, and enjoy Indori love.</p>
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
        </main>
        </>
    );
};

export default Shop;
