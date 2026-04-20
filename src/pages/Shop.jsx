import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Shop = () => {
    const [selectedPlan, setSelectedPlan] = useState(0);
    const [currentStep, setCurrentStep] = useState(0);

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
                <div className="relative lg:sticky lg:top-32 mb-4 lg:mb-0">
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
                    <div className="absolute top-4 left-4 bg-primary text-on-primary px-6 py-2 rounded-full font-headline font-black text-xs uppercase tracking-[0.2em] shadow-xl rotate-[-4deg]">
                        Indore Certified
                    </div>
                </div>

                {/* Configuration details */}
                <div className="flex flex-col -mt-4 lg:mt-0">
                    <div className="mb-10">
                        <div className="flex items-center gap-3 mb-4">
                             <span className="material-symbols-outlined text-secondary text-base" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                             <span className="text-secondary font-headline font-bold text-xs uppercase tracking-widest">Small Batch Produced Weekly</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black font-headline text-on-surface leading-[1.1] tracking-tighter mb-6 uppercase">
                            Your Go-To <br/><span className="text-primary">Instant Indori Breakfast</span>
                        </h1>
                        <div className="space-y-4 text-on-surface-variant font-medium leading-relaxed max-w-xl">
                            <p className="text-lg font-bold text-on-surface">Pohafix – Fresh. Authentic. Indori.</p>
                            <p>
                                Enjoy the authentic taste of Indore in every bite! Made with premium quality poha and handpicked spices, Pohafix is completely free from chemicals and preservatives – just pure, wholesome taste.
                            </p>
                            <p>
                                Make your plate even more delicious with chopped onions, jeeravan, and crunchy sev – the true Indori style. We always ensure you get the latest manufacturing lot, so the freshness and flavor are at their best every time.
                            </p>
                        </div>
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
                            Order Now
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

            {/* Preparation Steps Carousel */}
            <section className="py-24 bg-surface border-y border-outline-variant/10 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div>
                            <span className="text-primary font-headline font-black uppercase tracking-[0.2em] text-xs mb-4 block">The 5-Minute Ritual</span>
                            <h2 className="text-4xl md:text-6xl font-black font-headline text-on-surface tracking-tighter uppercase leading-none">
                                How to make <br/><span className="text-primary italic">Perfect Poha.</span>
                            </h2>
                        </div>
                        <div className="flex gap-4">
                            <button 
                                onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
                                disabled={currentStep === 0}
                                className="w-14 h-14 rounded-full border-2 border-outline-variant/20 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-current transition-all"
                            >
                                <span className="material-symbols-outlined">arrow_back</span>
                            </button>
                            <button 
                                onClick={() => setCurrentStep(prev => Math.min(3, prev + 1))}
                                disabled={currentStep === 3}
                                className="w-14 h-14 rounded-full border-2 border-outline-variant/20 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-current transition-all"
                            >
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </button>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="overflow-hidden p-4 -m-4">
                            <motion.div 
                                animate={{ x: `-${currentStep * (100 / (window.innerWidth >= 1024 ? 4 : 1))}%` }}
                                transition={{ type: 'spring', damping: 25, stiffness: 120 }}
                                className="flex gap-8"
                                style={{ width: window.innerWidth >= 1024 ? '100%' : '400%' }}
                            >
                                {[
                                    { id: "01", title: "POUR", desc: "Empty 1 serving (60 g poha) into a bowl." },
                                    { id: "02", title: "HOT WATER", desc: "Add 60 ml hot boiled water." },
                                    { id: "03", title: "COVER", desc: "Cover & keep for 5 minutes." },
                                    { id: "04", title: "STIR", desc: "Stir well - your Poha is ready!" }
                                ].map((step) => (
                                    <div key={step.id} className="min-w-0 flex-[0_0_100%] md:flex-[0_0_calc(25%-1.5rem)]">
                                        <div className="bg-white p-10 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-stone-100 flex flex-col h-full hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all">
                                            <div className="text-primary font-headline font-black text-6xl mb-8 opacity-20">{step.id}</div>
                                            <h4 className="font-headline font-black text-2xl mb-4 tracking-tighter uppercase">{step.title}</h4>
                                            <p className="text-on-surface-variant font-medium leading-relaxed">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
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
                        <Link to="/shop" className="text-[#ce1d2a] font-bold text-sm tracking-widest uppercase hover:underline flex items-center gap-1">
                            VIEW ALL 1,200 REVIEWS <span className="material-symbols-outlined text-sm font-bold">arrow_forward</span>
                        </Link>
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
            <section className="py-24 px-6 max-w-7xl mx-auto bg-[#fef9f0]">
                <div className="bg-gradient-to-br from-[#9b151a] to-[#6d0006] rounded-[2rem] p-12 md:p-24 text-center shadow-2xl relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-5xl md:text-7xl font-black font-headline text-white mb-8 tracking-tighter leading-[1.1] drop-shadow-md">
                            Ready for the Indori <br className="hidden md:block" /> Morning Ritual?
                        </h2>
                        <p className="text-white/90 text-sm md:text-lg font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
                            Join over 50,000+ satisfied poha lovers and get your authentic Malwa fix today.
                        </p>
                        <Link 
                            to="/shop" 
                            className="inline-block bg-[#fcc92f] text-black px-12 py-5 rounded font-headline font-black text-xl hover:bg-[#f6bb12] transition-colors shadow-[0_8px_0_0_#b78401] active:translate-y-2 active:shadow-[0_0px_0_0_#b78401]"
                        >
                            Order Your Pack Now
                        </Link>
                    </div>
                </div>
            </section>
        </main>
        <Footer />
        </>
    );
};

export default Shop;
