import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [bundleSlide, setBundleSlide] = useState(0);
    const slides = [
        "/box-front.png",
        "/box-right.png",
        "/box-left.png",
        "/box-group.png"
    ];

    const bundles = [
        {
            title: "THE STARTER PACK",
            subtitle: "1 Full 300g Box (5 Individual Packs)",
            price: 189,
            tag: "POPULAR",
            tagColor: "bg-[#716016]",
            images: ["/combo-single.png"],
            theme: "light"
        },
        {
            title: "THE REBEL BUNDLE",
            subtitle: "2 Full 300g Boxes (600g Total)",
            price: 290,
            originalPrice: 378,
            tag: "SAVE ₹88",
            tagColor: "bg-[#af101a]",
            images: ["/combo-2box.png"],
            theme: "dark"
        },
        {
            title: "THE MYSTERY COMBO",
            subtitle: "1 Box 300g Pohafix + 1 Secret Sev (150g)",
            price: 290,
            tag: "LIMITED",
            tagColor: "bg-[#716016]",
            images: ["/combo-sev.png"],
            theme: "dark"
        }
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-background text-on-surface font-body selection:bg-secondary-container selection:text-on-secondary-container flex flex-col min-h-screen">
            {/* TopAppBar Component */}
            <nav className="bg-[#fef9f0] dark:bg-[#1d1c16] font-['Epilogue'] tracking-tight font-bold full-width top-0 sticky z-50 shadow-none">
                <div className="flex justify-between items-center px-6 py-4 w-full max-w-screen-2xl mx-auto">
                    <div className="text-3xl font-black text-[#af101a] dark:text-[#d32f2f] italic">
                        <Link to="/">Pohafix</Link>
                    </div>
                    <div className="hidden md:flex gap-8 items-center">
                        <Link className="text-[#af101a] dark:text-[#d32f2f] border-b-4 border-[#af101a] pb-1 hover:opacity-100 hover:text-[#af101a] transition-all duration-300" to="/blog">Our Story</Link>
                        <a className="text-[#1d1c16] dark:text-[#e7e2d9] opacity-80 hover:opacity-100 hover:text-[#af101a] transition-all duration-300" href="#features">The Secret</a>
                        <Link className="text-[#1d1c16] dark:text-[#e7e2d9] opacity-80 hover:opacity-100 hover:text-[#af101a] transition-all duration-300" to="/order">Bulk Orders</Link>
                        <a className="text-[#1d1c16] dark:text-[#e7e2d9] opacity-80 hover:opacity-100 hover:text-[#af101a] transition-all duration-300" href="#street">Street View</a>
                    </div>
                    <Link to="/order" className="bg-primary text-on-primary px-6 py-2 rounded-lg font-bold scale-95 active:scale-90 transition-transform shadow-lg shadow-primary/20 inline-block">
                        Order Now
                    </Link>
                </div>
            </nav>

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative min-h-[921px] flex items-center overflow-hidden bg-surface">
                    <div className="absolute inset-0 z-0">
                        <img alt="Indore Street" className="w-full h-full object-cover opacity-20 grayscale brightness-50" data-alt="Blurred, atmospheric night view of Sarafa Bazaar Indore with warm street lights and historic architecture bokeh" src="https://lh3.googleusercontent.com/aida-public/AB6AXuASSLwDz51eJkm7d0B6sAIZZ80lu-apFrOBDhI6cNVzeXZYuOvGDi6uBaJ5z-lc9G9ucsaAx-P6JfMjfCbO0H9kH0MRWOp2CD9oPVrJNS8k4IjpQycKW0hxScNZvUTa6wkEn5U6TIGnk8GkBZ7j9I3hha1rbLkxyfTh8FTCA4GJ__-CfBGi6f7iJigwN_Rj5ZXAdHDmNYS60RqgowG8uCohCk0-du38KgcSBdqsUICVlISqh7pkyTUvkH-hg1Xjvbpx8TnNsEkbmEE" />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                    </div>
                    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
                        <div className="space-y-6">
                            <div className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container rounded-sm text-xs font-bold tracking-widest uppercase mb-4">
                                Breakfast Revolution
                            </div>
                            <h1 className="text-6xl md:text-8xl font-black font-headline text-on-background leading-tight">
                                Authentic Indori Poha in <span className="text-primary italic">5 Minutes</span>
                            </h1>
                            <p className="text-4xl font-hindi text-primary-container font-medium opacity-90">
                                इंदौर का स्वाद, अब कहीं भी
                            </p>
                            <div className="flex items-center gap-6 pt-4">
                                <Link to="/order" className="bg-primary text-on-primary px-10 py-4 rounded-md font-bold text-lg hover:bg-primary-container transition-all shadow-xl shadow-primary/30 flex items-center gap-2 group">
                                    Order Now
                                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </Link>
                                <div className="flex -space-x-3">
                                    <div className="w-10 h-10 rounded-full border-2 border-surface bg-gray-200 overflow-hidden">
                                        <img alt="User" data-alt="close up headshot of a smiling young man" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZMaD6NT3vB_C-xOnrq1ryqINMVeb6wn3HYk5ThDJxt-JGh62pDrANAzOpMMk5RVmPxOkdRFaRWYXY7cPvowij1L0ic-p6OELBNR69a3K3jF-4j019-5X7traThh-8Du_0bOn1BX8kKv-4nj-wK7TS_P_A7r2N-OHVEHif7tAd2VUAELbDIL8tGPd9eCI4pQD59D3fwXU4ec0pWQqNhwhuOMhdl0DX1P3AM-l36nFV6TpN3n7Lgbln2FHQxObWMlEAoHPCuhSAY9Y" />
                                    </div>
                                    <div className="w-10 h-10 rounded-full border-2 border-surface bg-gray-200 overflow-hidden">
                                        <img alt="User" data-alt="close up headshot of a smiling young woman" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBy8kUtbzsBmwIUTAO7fyxffDumGLIoJNV29LC8wixog09vBBgzG6uVlv6oC5pIAzof5Sd2jBhJfdOoUFRrZhGCAptFgWgPgiTijl_UFVIog1d0F1LOZV7NreMZCoWBhuLAaIrMUt3NtwQYQDE40VD54dHg7cOilkFJ1Z6xjstpgTpyLkINEyU0C9rPz3nHUTX-TYbUzMwgJjG8ajSm4lxGOl5hQD6kdFh_nGsx7fwnF7ZtZrlgAAKxBQCawJHG8DrKwFf6dHAcnc0" />
                                    </div>
                                    <div className="w-10 h-10 rounded-full border-2 border-surface bg-primary flex items-center justify-center text-[10px] text-white font-bold">
                                        10k+
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="absolute -top-10 -left-10 text-9xl font-hindi hindi-layer rotate-[-15deg]">ताज़ा</div>
                            <div className="absolute -bottom-10 -right-10 text-9xl font-hindi hindi-layer rotate-[15deg]">ज़ायका</div>
                            {/* Main Product Carousel */}
                            <div className="relative transform hover:scale-105 transition-transform duration-500 bg-surface-container-lowest rounded-[2rem] shadow-2xl overflow-hidden aspect-[4/5] flex items-center justify-center">
                                {slides.map((slide, index) => (
                                    <img 
                                        key={slide}
                                        src={slide}
                                        alt={`Pohafix Box Design ${index + 1}`}
                                        className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`} 
                                    />
                                ))}
                                
                                {/* Carousel Indicators */}
                                <div className="absolute bottom-6 flex gap-2 z-20">
                                    {slides.map((_, idx) => (
                                        <button 
                                            key={idx}
                                            onClick={() => setCurrentSlide(idx)}
                                            className={`w-3 h-3 rounded-full transition-colors duration-300 ${idx === currentSlide ? 'bg-primary' : 'bg-surface-variant hover:bg-surface-dim'}`}
                                            aria-label={`Go to slide ${idx + 1}`}
                                        />
                                    ))}
                                </div>

                                <div className="absolute top-12 -right-4 bg-surface-container-lowest p-3 rounded-xl shadow-lg rotate-12 max-w-[140px] z-20">
                                    <p className="font-headline font-bold text-xs">Authentic Retained</p>
                                    <p className="font-headline font-bold text-[10px] mt-1 text-on-surface-variant">Extra Sev &amp; Pomegranate Included</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Global Appeal Section */}
                <section className="py-24 bg-surface-container-low overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col md:flex-row items-center gap-16">
                            <div className="w-full md:w-1/2 relative flex justify-center">
                                {/* Layered Image Stack */}
                                <div className="relative w-full max-w-md aspect-square">
                                    <div className="absolute top-0 left-0 w-64 h-80 bg-surface-variant rotate-[-6deg] shadow-lg overflow-hidden border-8 border-white p-2">
                                        <img alt="Diljit Poha" className="w-full h-full object-cover" data-alt="Editorial portrait of a famous celebrity laughing while eating street food from a paper bowl in a vibrant city setting" src="/diljit.jpg" />
                                        <p className="absolute bottom-4 left-4 bg-primary text-white text-[10px] px-2 py-1 font-bold">DILJIT LOVES IT</p>
                                    </div>
                                    <div className="absolute bottom-0 right-0 w-64 h-80 bg-surface-variant rotate-[8deg] shadow-xl overflow-hidden border-8 border-white p-2">
                                        <img alt="David Poha" className="w-full h-full object-cover" data-alt="A distinguished international statesman smiling warmly while holding a traditional leaf bowl of Indian street food" src="/david.jpg" />
                                        <p className="absolute bottom-4 left-4 bg-primary text-white text-[10px] px-2 py-1 font-bold">STREET SIDE STORY</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 space-y-6">
                                <h2 className="text-5xl font-black font-headline text-on-surface leading-tight">
                                    From the streets of Indore <span className="text-primary italic">to the world.</span>
                                </h2>
                                <p className="text-xl text-on-surface-variant leading-relaxed font-medium">
                                    Whether it's the backstage of a global concert or the quiet halls of diplomacy, the taste of Malwa finds its way. Loved by everyone who seeks the warmth of a home-cooked morning.
                                </p>
                                <div className="pt-4 flex gap-4">
                                    <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
                                    <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
                                    <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Nostalgia Section */}
                <section className="relative py-32 lg:py-48 overflow-hidden flex items-center bg-[#1d1c16]">
                    <div className="absolute inset-0 z-0">
                        <img alt="Sarafa Bazaar Indore" className="w-full h-full object-cover opacity-40 grayscale" src="/sarafa-bg.jpg" />
                        <div className="absolute inset-0 bg-black/60"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
                    </div>
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-3xl border-l-[6px] border-[#af101a] pl-8 md:pl-12 py-2">
                            <h2 className="text-5xl md:text-7xl font-black font-headline text-white leading-tight mb-6 tracking-tight">
                                Indore ki galiyon se <br/> inspired.
                            </h2>
                            <p className="text-xl md:text-2xl text-gray-300 font-medium leading-relaxed mb-8 max-w-xl">
                                Same taste, same feeling. We didn't just bottle<br className="hidden md:block" /> the recipe, we bottled the nostalgia of 7:00 AM<br className="hidden md:block" /> at the street corner.
                            </p>
                            <p className="text-7xl md:text-9xl font-hindi text-white/10 font-bold tracking-wider mt-4">
                                सराफ़ा बाज़ार
                            </p>
                        </div>
                    </div>
                </section>

                {/* Product Combos Carousel */}
                <section className="pt-24 pb-4 bg-[#fef9f0] relative overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="max-w-5xl mx-auto">
                            <div className="relative group p-4 md:p-8">
                                {/* Slides Container */}
                                <div className="overflow-hidden">
                                    <div 
                                        className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" 
                                        style={{ transform: `translateX(-${bundleSlide * 100}%)` }}
                                    >
                                        {bundles.map((bundle, idx) => (
                                            <div key={idx} className="w-full flex-shrink-0 px-2 md:px-6">
                                                {/* Editorial Combo Card */}
                                                <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 overflow-hidden flex flex-col md:flex-row min-h-[450px]">
                                                    {/* Left Image Section */}
                                                    <div className="md:w-1/2 p-12 bg-[#fdfaf2] flex items-center justify-center relative border-b md:border-b-0 md:border-r border-gray-100">
                                                        <div className="flex flex-col items-center">
                                                            <div className="flex gap-2 items-center justify-center relative w-full h-full min-h-[300px]">
                                                                <img src={bundle.images[0]} alt="Product" className="w-[85%] h-auto md:max-w-md object-contain mix-blend-multiply relative z-10 hover:scale-105 transition-transform duration-500" />
                                                            </div>
                                                            {/* Tiny pseudo-thumbnails at bottom based on user design */}
                                                            <div className="flex gap-2 mt-8 absolute bottom-6 right-6">
                                                                <div className="w-10 h-10 bg-white rounded shadow overflow-hidden p-1 border-2 border-transparent hover:border-gray-300 transition-colors cursor-pointer">
                                                                     <img src="/combo-single.png" className="w-full h-full object-cover" />
                                                                </div>
                                                                <div className="w-10 h-10 bg-white rounded shadow flex items-center justify-center overflow-hidden p-1 border-2 border-transparent hover:border-gray-300 transition-colors cursor-pointer text-[10px] font-bold text-gray-500">
                                                                     +1
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    {/* Right Content Section */}
                                                    <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white">
                                                        <div className="flex items-center gap-3 mb-4 md:mb-6">
                                                            <span className="bg-[#eaf4e5] text-[#347b4e] text-[9px] md:text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                                                                {bundle.tag}
                                                            </span>
                                                            <div className="flex text-[#8b7921] text-xs md:text-sm">
                                                                <span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                                                <span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                                                <span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                                                <span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                                                <span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                                            </div>
                                                        </div>
                                                        
                                                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-black font-headline text-gray-900 mb-4 leading-[1.1] tracking-tight">
                                                            Pohafix {bundle.title === 'THE STARTER PACK' ? 'Starter Pack' : bundle.title === 'THE REBEL BUNDLE' ? 'Rebel Bundle' : 'Mystery Combo'}
                                                        </h3>
                                                        
                                                        <p className="text-gray-500 font-medium leading-relaxed mb-8 font-body text-sm md:text-base pr-4">
                                                            {bundle.subtitle}. The ultimate breakfast solution for busy mornings. Each pack comes with authentic Jeeravan spices and a separate sachet of crispy Indori Sev for that perfect crunch.
                                                        </p>
                                                        
                                                        {/* Pricing Block */}
                                                        <div className="bg-[#f6f4ed] rounded-xl p-4 md:p-6 mb-6 flex justify-between items-center border border-[#ece9df]">
                                                            <div className="flex items-baseline gap-3">
                                                                <span className="text-3xl md:text-4xl font-black font-headline text-[#af101a]">₹{bundle.price}</span>
                                                                {bundle.originalPrice && <span className="text-gray-400 line-through font-bold text-sm md:text-base">₹{bundle.originalPrice}</span>}
                                                            </div>
                                                            <span className="text-[#8b7921] font-bold text-[10px] md:text-xs uppercase tracking-widest text-right">
                                                                {bundle.originalPrice ? `SAVE ₹${bundle.originalPrice - bundle.price} TODAY` : 'LIMITED STOCK TODAY'}
                                                            </span>
                                                        </div>
                                                        
                                                        <Link to="/order" className="w-full bg-[#ae1925] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#8f121d] transition-colors text-center shadow-[0_4px_14px_0_rgb(174,25,37,0.39)] hover:shadow-[0_6px_20px_rgba(174,25,37,0.23)] active:scale-[0.98] duration-200">
                                                            Buy Now
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                
                                {/* Carousel Navigation */}
                                <button 
                                    onClick={() => setBundleSlide(prev => prev === 0 ? bundles.length - 1 : prev - 1)}
                                    className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 bg-white border-4 border-black w-14 h-14 flex items-center justify-center rounded-full shadow-[4px_4px_0_0_#af101a] hover:translate-x-1 hover:shadow-none transition-all z-20"
                                >
                                    <span className="material-symbols-outlined text-black font-bold text-3xl">west</span>
                                </button>
                                <button 
                                    onClick={() => setBundleSlide(prev => (prev + 1) % bundles.length)}
                                    className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 bg-white border-4 border-black w-14 h-14 flex items-center justify-center rounded-full shadow-[4px_4px_0_0_#af101a] hover:-translate-x-1 hover:shadow-none transition-all z-20"
                                >
                                    <span className="material-symbols-outlined text-black font-bold text-3xl">east</span>
                                </button>

                                {/* Dot Indicators */}
                                <div className="flex justify-center gap-3 mt-12">
                                    {bundles.map((_, idx) => (
                                        <button 
                                            key={idx}
                                            onClick={() => setBundleSlide(idx)}
                                            className={`h-3 transition-all duration-300 ${idx === bundleSlide ? 'w-12 bg-[#af101a]' : 'w-3 bg-surface-variant hover:bg-black'} rounded-full border border-black/10`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features & Why It Matters Section */}
                <div className="bg-[#fcfaf5] pt-8 font-body relative overflow-hidden" id="features">
                    <div className="container mx-auto px-6 max-w-6xl">
                        {/* Top 3 Cards */}
                        <div className="grid md:grid-cols-3 gap-6 mb-24">
                            <div className="bg-white p-10 rounded shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-[#ffe8e8] text-[#d63535] rounded-xl flex items-center justify-center mb-6">
                                    <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
                                </div>
                                <h4 className="text-xl font-black font-headline text-gray-900 mb-4 tracking-tight">No Preservatives</h4>
                                <p className="text-gray-500 font-medium text-sm leading-relaxed">Milled fresh, Zero chemicals in. We rely on moisture control, not laboratory shelf-extenders.</p>
                            </div>
                            
                            <div className="bg-white p-10 rounded shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-[#fdf2d0] text-[#b68c1c] rounded-xl flex items-center justify-center mb-6">
                                    <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>military_tech</span>
                                </div>
                                <h4 className="text-xl font-black font-headline text-gray-900 mb-4 tracking-tight">Premium Quality Poha</h4>
                                <p className="text-gray-500 font-medium text-sm leading-relaxed">Soft, light & perfectly cooked texture. Selected fresh poha grains that don't go mushy.</p>
                            </div>
                            
                            <div className="bg-white p-10 rounded shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-[#e4f0e6] text-[#347b4e] rounded-xl flex items-center justify-center mb-6">
                                    <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>local_florist</span>
                                </div>
                                <h4 className="text-xl font-black font-headline text-gray-900 mb-4 tracking-tight">Real Indian Spices</h4>
                                <p className="text-gray-500 font-medium text-sm leading-relaxed">Awesome style authentic Indori flavor. Our spice mix is pounded fresh every week.</p>
                            </div>
                        </div>

                        {/* Why It Matters Header */}
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-black font-headline text-[#be1e2d] tracking-tight">Why It Matters.</h2>
                        </div>

                        {/* 3 Staggered Grid Boxes */}
                        <div className="flex flex-col md:flex-row gap-6 mb-8">
                            <div className="md:w-[50%] lg:w-[60%] bg-gradient-to-r from-[#efe0bc] to-[#dfc38f] p-8 md:p-12 rounded relative overflow-hidden flex flex-col justify-end min-h-[260px] group">
                                <span className="text-[#dbb771] opacity-50 text-8xl font-black absolute top-2 left-6 group-hover:scale-110 transition-transform duration-500">01</span>
                                {/* Floating abstract flakes using text shapes */}
                                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
                                    <div className="absolute top-1/4 left-1/3 w-8 h-4 bg-white/40 rounded-full rotate-45 blur-[1px]"></div>
                                    <div className="absolute top-1/2 left-2/3 w-6 h-3 bg-white/40 rounded-full -rotate-12 blur-[1px]"></div>
                                    <div className="absolute bottom-1/3 left-1/2 w-10 h-5 bg-white/40 rounded-full rotate-[60deg] blur-[1px]"></div>
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-3xl md:text-4xl font-black font-headline text-gray-900 mb-2">Light Poha</h3>
                                    <p className="text-gray-800 text-sm md:text-base font-medium pr-12 md:pr-24">Easy to digest, keeps you active without the mid-morning slump.</p>
                                </div>
                            </div>
                            <div className="md:w-[25%] lg:w-[20%] bg-[#fdbd30] p-8 md:p-10 rounded flex flex-col min-h-[260px]">
                                <span className="material-symbols-outlined text-gray-900 mb-auto text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                                <div>
                                    <h3 className="text-2xl font-black font-headline text-gray-900 mb-2">Peanuts</h3>
                                    <p className="text-gray-900 font-medium text-xs md:text-sm">Crunchy bursts energy boost in every bite.</p>
                                </div>
                            </div>
                            <div className="md:w-[25%] lg:w-[20%] bg-[#e7e7e3] p-8 md:p-10 rounded flex flex-col min-h-[260px] relative border-t-[8px] border-[#be1e2d]">
                                <h3 className="text-sm md:text-base font-black font-headline text-[#be1e2d] mb-auto">Fresh Spices</h3>
                                <p className="text-gray-700 font-medium text-xs md:text-sm mt-8">Authentic taste using age-old Jeeravan techniques.</p>
                            </div>
                        </div>

                        {/* Green Banner */}
                        <div className="bg-[#0b6c28] rounded p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8 mb-20 shadow-xl border border-[#0d5924]">
                            <div className="text-white max-w-2xl text-center md:text-left">
                                <h3 className="text-2xl md:text-4xl font-black font-headline mb-4 tracking-tight">No Preservatives = Healthy Choice</h3>
                                <p className="text-green-100/90 font-medium text-sm md:text-base leading-relaxed max-w-xl mx-auto md:mx-0">Most instant foods use stabilizers that slow your metabolism. Pohafix uses the power of nature to stay fresh.</p>
                            </div>
                            <div className="border border-green-400/30 bg-[#127e32] px-8 py-6 rounded min-w-[160px] text-center shadow-inner">
                                <p className="text-white font-black font-headline text-sm md:text-base uppercase tracking-widest leading-tight">100%<br/>Natural</p>
                            </div>
                        </div>
                    </div>
                        
                    {/* Comparison Block (Full Width Background) */}
                    <div className="bg-[#1e201b]">
                        <div className="max-w-6xl mx-auto flex flex-col md:flex-row">
                            {/* Left: Other Instant Foods */}
                            <div className="w-full md:w-1/2 p-12 lg:p-20 border-b md:border-b-0 md:border-r border-[#2d2e29]">
                                <h4 className="text-[#db3838] font-black font-headline text-2xl mb-10 tracking-tight">Other instant foods</h4>
                                <ul className="space-y-8 text-gray-400 font-medium text-sm md:text-base">
                                    <li className="flex items-center gap-4">
                                        <span className="material-symbols-outlined text-[#db3838] text-xl font-bold">close</span>
                                        Chemicals & Preservatives
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <span className="material-symbols-outlined text-[#db3838] text-xl font-bold">close</span>
                                        Heavy, bloated feeling
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <span className="material-symbols-outlined text-[#db3838] text-xl font-bold">close</span>
                                        Artificial, flat taste
                                    </li>
                                </ul>
                            </div>
                            {/* Right: Pohafix Heritage */}
                            <div className="w-full md:w-1/2 p-12 lg:p-20 bg-[#1c1d18]">
                                <h4 className="text-[#dbb771] font-black font-headline text-2xl mb-10 tracking-tight">Pohafix Heritage</h4>
                                <ul className="space-y-8 text-gray-300 font-medium text-sm md:text-base">
                                    <li className="flex items-center gap-4">
                                        <span className="material-symbols-outlined text-[#dbb771] text-xl font-bold" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                                        Natural, raw ingredients only
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <span className="material-symbols-outlined text-[#dbb771] text-xl font-bold" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                                        Light, filling & energetic
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <span className="material-symbols-outlined text-[#dbb771] text-xl font-bold" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                                        Real, homemade Indori taste
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* Bottom Banner Tags */}
                        <div className="bg-[#f0ece1] py-6 w-full border-t-[12px] border-[#ede8db]">
                            <div className="max-w-5xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center text-xs md:text-sm font-black tracking-[0.2em] text-gray-500 uppercase gap-8">
                                <span className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[#b96b6b] text-xl">verified</span>
                                    Made in Hygienic Facility
                                </span>
                                <span className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[#b96b6b] text-xl">task_alt</span>
                                    FSSAI Approved
                                </span>
                                <span className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[#b96b6b] text-xl">science</span>
                                    Quality Checked Batches
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Try Now Callout */}
                    <div className="bg-[#fcedea] py-24 lg:py-32 px-6 text-center shadow-inner">
                        <h2 className="text-5xl md:text-7xl font-black font-headline text-[#be1e2d] tracking-tight leading-[1.1] mb-12 max-w-4xl mx-auto">
                            Healthy bhi, tasty bhi –<br className="hidden md:block" /> ab try karo.
                        </h2>
                        <div className="flex justify-center items-center gap-6 relative inline-flex">
                            <Link to="/order" className="bg-[#be1e2d] text-white px-12 py-5 font-black text-2xl tracking-wide hover:bg-[#a11825] transition-colors shadow-[0_6px_0_0_#8f121b] active:translate-y-1 active:shadow-[0_2px_0_0_#8f121b] min-w-[240px] rounded-sm relative z-10">
                                Order Now
                            </Link>
                            <span className="material-symbols-outlined text-[#fdbd30] text-6xl transform -rotate-[20deg] absolute -right-16 top-4 animate-[bounce_2s_infinite] hidden md:block" style={{ fontVariationSettings: "'FILL' 1" }}>near_me</span>
                        </div>
                    </div>
                </div>
                {/* Hero Section: Recall from Screen 6 */}
                <section className="relative bg-surface-container-low pt-12 pb-24 px-8 overflow-hidden">
                    <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="font-headline text-7xl md:text-8xl font-black tracking-tighter text-primary leading-[0.9] mb-8 uppercase">
                                Late uthte ho?<br/>
                                <span className="text-secondary">Breakfast skip</span><br/>
                                karte ho?
                            </h1>
                            <p className="text-xl max-w-lg mb-10 text-on-surface-variant leading-relaxed">
                                Don't let the morning rush steal your Indori ritual. Authentic, steamy Poha delivered before your first meeting starts.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button className="bg-primary text-on-primary px-8 py-4 font-headline font-bold text-lg tracking-tight uppercase rounded-md active:scale-95 transition-transform">Fix My Morning</button>
                                <button className="bg-secondary-container text-on-secondary-container px-8 py-4 font-headline font-bold text-lg tracking-tight uppercase rounded-md active:scale-95 transition-transform">Explore Menu</button>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -top-10 -right-10 text-9xl font-black opacity-5 text-on-surface rotate-12 select-none">स्वादिष्ट</div>
                            <img alt="Authentic Indori Poha" className="rounded-xl shadow-2xl relative z-10 w-full object-cover aspect-[4/3] transform -rotate-2" data-alt="Close-up of steaming Indori Poha in a stainless steel plate, topped with yellow sev, pomegranate seeds, and fresh coriander, morning light." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnztsELaOsYUUF8xPImC0C2KakyarWOJsz18T6w8nOF70SaXwml4Azq-cr-oNXn59Zdi6QHpjoimz1WT3kddqLsfs3sp16RqunKMEDYumzhZLFmLBDuGxIla8AuJL3lZq8Jj5NYpyyrDquZDcx33F0Bh8Ga-Z2-S2zXyeZ5glW9exe0wW7Dzmji0qNiLZcKZ50l5dGUfIobZ6SensGELIjshjBZhvdGIhyW7-rq9TzOErNyBSxzOsSpsGyJZfluU4vapCtaPMRtX8" />
                        </div>
                    </div>
                </section>

                {/* The World is Poha-Fixated: Celebrity Reels */}
                <section className="py-24 bg-surface">
                    <div className="max-w-screen-2xl mx-auto px-8">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                            <h2 className="font-headline text-5xl md:text-6xl font-black text-primary tracking-tighter uppercase max-w-xl">
                                The World is <span className="text-secondary">Poha-Fixated</span>
                            </h2>
                            <p className="font-label font-semibold text-tertiary uppercase tracking-widest bg-tertiary-container/10 px-4 py-1">Global Endorsements</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {/* Reel Card 1: Diljit */}
                            <div className="group relative aspect-[9/16] overflow-hidden rounded-xl bg-surface-container-highest shadow-xl transition-all hover:scale-[1.02]">
                                <img alt="Diljit Dosanjh" className="absolute inset-0 h-full w-full object-cover" data-alt="Portrait of a stylish Indian man with a bright turban smiling and enjoying a plate of street food, vibrant warm lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHaJQFrW_i9vuAasgeVSU0PmmBTRonFhBAEnRQnj37WSE44QGnpW3FIldk9CIZyQcldCDX1HlXWuO5LqvYDFJipNwWUz-mGQKxLxM0GOpv3IsgU4MXUMdySG929GjuOJbji40xutKBflbgnok7kVIjaopMXlLqHe7onMZU0VwmBu6cbmV-cWtVrUbbfv7Tue7qaSd0OKqIOR4HCqiXR94WGVj5C9aQsQJ4HB6lqjcuZY_iGeo_7FDMr4rwA6ULzQ18v5CgmWdNAL0" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                <div className="absolute bottom-6 left-6 right-6">
                                    <span className="bg-secondary text-on-secondary px-3 py-1 rounded-full text-xs font-bold font-label mb-2 inline-block">@diljitdosanjh</span>
                                    <blockquote className="text-white font-headline text-2xl font-bold italic leading-tight mb-4">"Asli Swad!"</blockquote>
                                    <button className="w-full bg-primary text-on-primary py-3 rounded-md font-headline font-bold uppercase tracking-tight flex items-center justify-center gap-2 backdrop-blur-sm bg-opacity-90 hover:bg-opacity-100 transition-all">
                                        <span className="material-symbols-outlined text-sm">shopping_bag</span> Order Now
                                    </button>
                                </div>
                            </div>
                            {/* Reel Card 2: David Cameron */}
                            <div className="group relative aspect-[9/16] overflow-hidden rounded-xl bg-surface-container-highest shadow-xl transition-all hover:scale-[1.02]">
                                <img alt="David Cameron Lookalike/Rep" className="absolute inset-0 h-full w-full object-cover" data-alt="Dignified older gentleman in a suit sitting at a traditional Indian street stall, holding a plate of poha, authentic atmosphere." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiTTQElcqshMCzikh2aIRE39bERZry32TaiP2BhL7m-PZlFOKSPi3fUvhNmhvwPdjuoVJwbJ2ur0rWVSZHRj4qAgr5j1Eesy0bonAeG8gvl7xFylrAppZnKE021_kh5TS9U7B7PxeRX5OXInhwD2neqpMeiecFDy744P2SBbXlFbzznTn35C8TgPJlfeOaBuToToMkwyxIH04ky7eFluLanpyvMp4JbkpmCPsJKfbeyb5UF0FDqOoCgaoAaGLW_arq5yMefluhu7Y" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                <div className="absolute bottom-6 left-6 right-6">
                                    <span className="bg-tertiary text-on-tertiary px-3 py-1 rounded-full text-xs font-bold font-label mb-2 inline-block">Global Diplomat</span>
                                    <blockquote className="text-white font-headline text-2xl font-bold italic leading-tight mb-4">"Truly Authentic"</blockquote>
                                    <button className="w-full bg-primary text-on-primary py-3 rounded-md font-headline font-bold uppercase tracking-tight flex items-center justify-center gap-2 backdrop-blur-sm bg-opacity-90 hover:bg-opacity-100 transition-all">
                                        <span className="material-symbols-outlined text-sm">shopping_bag</span> Order Now
                                    </button>
                                </div>
                            </div>
                            {/* Reel Card 3: Lifestyle */}
                            <div className="group relative aspect-[9/16] overflow-hidden rounded-xl bg-surface-container-highest shadow-xl transition-all hover:scale-[1.02] hidden lg:block">
                                <img alt="Food Blogger" className="absolute inset-0 h-full w-full object-cover" data-alt="Overhead close-up of hands reaching for a vibrant bowl of poha on a rustic wooden table with morning shadows." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1UozEW7ue-kWcq-ldZH1at2QitPJ-XT72E2iT7naTbi1cn3692NsH0wx5s8oUf7jTWMuPJfc10J3HMcOELzwuZieQrx0SNkH4GYcwFbN_cSDm3ypgHOs-KwhFDb4KietqOYLY3uvgVFig_yiTiTOg65d-fbjNnKqtUNNl9n_pHYnnT7PqL7ek6EG9jH9TW48fhC3cNYboPuc5Z6JijJj4kF8ENpw971Oy9IJ05hZEcp2RBPux8SDCFk-mPw0N6jWUCZbggmDYA2c" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                <div className="absolute bottom-6 left-6 right-6">
                                    <span className="bg-secondary text-on-secondary px-3 py-1 rounded-full text-xs font-bold font-label mb-2 inline-block">Indore Diaries</span>
                                    <blockquote className="text-white font-headline text-2xl font-bold italic leading-tight mb-4">"Morning Fuel!"</blockquote>
                                    <button className="w-full bg-primary text-on-primary py-3 rounded-md font-headline font-bold uppercase tracking-tight flex items-center justify-center gap-2 backdrop-blur-sm bg-opacity-90 hover:bg-opacity-100 transition-all">
                                        <span className="material-symbols-outlined text-sm">shopping_bag</span> Order Now
                                    </button>
                                </div>
                            </div>
                            {/* Reel Card 4: Chef */}
                            <div className="group relative aspect-[9/16] overflow-hidden rounded-xl bg-surface-container-highest shadow-xl transition-all hover:scale-[1.02] hidden lg:block">
                                <img alt="Chef Detail" className="absolute inset-0 h-full w-full object-cover" data-alt="Chef in a white coat sprinkling fresh pomegranate seeds over a steaming mountain of yellow poha, focus on motion." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7SCKVzc-i55yZStyOXRHxVi9X7u6qWJp1ksw2u--BssbAWSYzY7MSX3lYzLPKsxlXs2O8c3BRNZp444tz6gtU0y1TD6BZ4koXkaAliENSplqFDfOCIpjJckNu2TuzLtJY0WkuaHtvN3VD6e2KL2iwCHAwu4qZCLDPPnhvyvFaQGek6oAV7O_jVe-4dBpx6CF-H7UZ2Z5F0MOqVw-JFo60KqUAGMXTnOLfBgkvlzkdlJB1YpTflvWWVO1bxrx4cOTX7ax_fG5wRBU" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                <div className="absolute bottom-6 left-6 right-6">
                                    <span className="bg-primary text-on-primary px-3 py-1 rounded-full text-xs font-bold font-label mb-2 inline-block">Craftsman</span>
                                    <blockquote className="text-white font-headline text-2xl font-bold italic leading-tight mb-4">"Pure Craft"</blockquote>
                                    <button className="w-full bg-primary text-on-primary py-3 rounded-md font-headline font-bold uppercase tracking-tight flex items-center justify-center gap-2 backdrop-blur-sm bg-opacity-90 hover:bg-opacity-100 transition-all">
                                        <span className="material-symbols-outlined text-sm">shopping_bag</span> Order Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Powerful Street View: Sarafa Bazaar */}
                <section className="relative h-[819px] w-full flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-black/40 z-10"></div>
                    <img alt="Sarafa Bazaar at Dawn" className="absolute inset-0 w-full h-full object-cover grayscale-[20%] brightness-[70%]" data-alt="Cinematic wide shot of a bustling Indian street food market at dawn with thick steam rising from large copper pots and warm glowing lights." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZ9XlFqJx7nDJ3BqSEVAnFf6nQI2b4SJ2MHnattAg45Vx6HNOFZku9m5PFYRxqbGrNmWmpdAMhR_KeeAInZZnsWLlZM1jCEJj9gcrVFdHDhXuHkAh67iAAYa7upgiLp650-EAvCDm8sXOYJS4hF9489d53Ft-QGgqis0Gd8gChLyu8wbkXdGfjaHeYtUwtHE6RnGOf0-e17RYXHk-aAM9G8CGxmcSAaXRfdsoe4UeulyGoG2Mxu_waEUeAnAgCE4QSQ2iN8ZOswVQ" />
                    <div className="relative z-20 text-center px-8">
                        <h3 className="font-headline text-white text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-4">
                            Born in the <br/><span className="text-secondary-fixed">Galiyan</span> of Indore
                        </h3>
                        <p className="text-white/80 font-label tracking-widest text-lg uppercase mb-8">Sarafa Bazaar • Chhappan Dukaan • Every Corner</p>
                        <div className="h-1 w-32 bg-primary mx-auto"></div>
                    </div>
                </section>

                {/* Thelagadi Experience */}
                <section className="py-24 bg-surface-container-low overflow-hidden">
                    <div className="max-w-screen-2xl mx-auto px-8 relative">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="relative">
                                {/* Asymmetric Card Layout */}
                                <div className="absolute -top-12 -left-12 font-headline text-9xl text-primary/5 select-none rotate-[-15deg]">thela</div>
                                <div className="bg-surface-container-lowest p-6 rounded-xl shadow-2xl relative z-10 transform rotate-2">
                                    <img alt="Street Cart Poha" className="w-full aspect-video object-cover rounded-lg mb-6" data-alt="A stylized, premium Indian street cart decorated with brass details, featuring a large heap of yellow poha and bowls of sev and lemon." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8_ksPOcAWXxBSKHYO9Kh6gW9b5_1DcltbPse_S2f5onONNs7UzRlJT8FJx4_JZ7o3AvzUC5MynwWIkJn2zCkwDnS10NwPngGbeV3i88SYuON0rCk5XMHgym7hDxuAQpvxZbw-t7MsifA8XcSpE70vWQhOPqCZRyDOtHIec_3P-dGwzpX99Gg5sOl7SiLBnbdlopyjpZvk8BhzjIekceVlE-yWHLnJG9Ijvz0HRksIfzZjAvK7vp33wlnUHMBKB4WhsD3voS_aV7c" />
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h4 className="font-headline text-2xl font-bold text-on-surface">The Signature Cart</h4>
                                            <p className="text-on-surface-variant italic">Served with Jeeravan &amp; Love</p>
                                        </div>
                                        <span className="bg-tertiary-container text-on-tertiary-container font-headline font-black px-4 py-2 text-xl">₹49/-</span>
                                    </div>
                                </div>
                                <div className="absolute -bottom-8 -right-8 bg-secondary-container p-8 rounded-xl shadow-xl z-20 max-w-xs transform -rotate-3 border-4 border-surface-container-lowest">
                                    <p className="font-headline text-3xl font-black text-secondary leading-tight mb-2 uppercase">Thela-waala swad</p>
                                    <p className="text-on-secondary-container font-medium">That unmistakable smoky aroma of the street, captured in every bite.</p>
                                </div>
                            </div>
                            <div className="lg:pl-12">
                                <span className="text-primary font-headline font-extrabold uppercase tracking-widest block mb-4">Indori Heritage</span>
                                <h2 className="font-headline text-5xl md:text-7xl font-black text-on-surface tracking-tighter leading-[0.9] mb-8 uppercase">
                                    The Authentic <span className="text-primary">Thela Experience</span>, Delivered.
                                </h2>
                                <div className="space-y-6 mb-12">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-primary-container p-2 rounded-lg">
                                            <span className="material-symbols-outlined text-on-primary-container">done_all</span>
                                        </div>
                                        <div>
                                            <h5 className="font-headline font-bold text-xl uppercase">Steamy Texture</h5>
                                            <p className="text-on-surface-variant">Soft, flattened rice steamed over a double boiler just like the vendors.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="bg-secondary-container p-2 rounded-lg">
                                            <span className="material-symbols-outlined text-on-secondary-container">restaurant_menu</span>
                                        </div>
                                        <div>
                                            <h5 className="font-headline font-bold text-xl uppercase">The Fixings Cluster</h5>
                                            <p className="text-on-surface-variant">Ratlam-grade Sev, Indori Jeeravan, freshly chopped onions, and lemon.</p>
                                        </div>
                                    </div>
                                </div>
                                <button className="group bg-primary text-on-primary px-10 py-5 font-headline font-black text-xl tracking-tight uppercase rounded-md shadow-xl flex items-center gap-4 hover:bg-primary-container transition-all">
                                    Experience the Ritual
                                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Newspaper Snip (Testimonial) */}
                <section className="py-20 bg-surface">
                    <div className="max-w-4xl mx-auto px-8">
                        <div className="bg-surface-variant p-12 relative" style={{ WebkitMaskImage: "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 100 10\" preserveAspectRatio=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 10 L5 8 L10 10 L15 7 L20 10 L25 8 L30 10 L35 7 L40 10 L45 8 L50 10 L55 7 L60 10 L65 8 L70 10 L75 7 L80 10 L85 8 L90 10 L95 7 L100 10 V0 H0 Z\" fill=\"black\"/></svg>')", maskImage: "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 100 10\" preserveAspectRatio=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 10 L5 8 L10 10 L15 7 L20 10 L25 8 L30 10 L35 7 L40 10 L45 8 L50 10 L55 7 L60 10 L65 8 L70 10 L75 7 L80 10 L85 8 L90 10 L95 7 L100 10 V0 H0 Z\" fill=\"black\"/></svg>')" }}>
                            <div className="absolute -top-6 left-12 bg-primary text-on-primary px-4 py-1 font-headline font-bold uppercase tracking-widest text-sm">Special Dispatch</div>
                            <blockquote className="font-headline text-3xl font-black text-on-surface-variant italic leading-tight mb-8">
                                "I used to skip breakfast because Indore was 800 miles away. Now, Pohafix brings the Galiyan of my childhood right to my dining table in London."
                            </blockquote>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-outline-variant"></div>
                                <div>
                                    <p className="font-headline font-bold uppercase">Aryan Sharma</p>
                                    <p className="text-sm font-label text-on-surface-variant/70">Ex-Indori, Software Lead</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer Component */}
            <footer className="bg-[#e7e2d9] dark:bg-[#12110e] font-['Epilogue'] uppercase tracking-widest text-xs w-full mt-auto relative overflow-hidden border-t border-[#d32f2f]/10 shadow-inner">
                <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 w-full gap-8">
                    <div className="text-left space-y-4">
                        <div className="text-xl font-bold text-[#1d1c16] dark:text-[#fef9f0]">Pohafix</div>
                        <p className="normal-case text-on-surface-variant font-medium tracking-normal opacity-80">Indore ka asli breakfast — anywhere, anytime.</p>
                    </div>
                    <div className="flex flex-wrap gap-8 justify-center">
                        <Link className="text-[#1d1c16] dark:text-[#e7e2d9] opacity-60 hover:text-[#af101a] dark:hover:text-[#fec330] transition-colors duration-200" to="/privacy">Privacy</Link>
                        <Link className="text-[#1d1c16] dark:text-[#e7e2d9] opacity-60 hover:text-[#af101a] dark:hover:text-[#fec330] transition-colors duration-200" to="/privacy">Refund Policy</Link>
                        <Link className="text-[#1d1c16] dark:text-[#e7e2d9] opacity-60 hover:text-[#af101a] dark:hover:text-[#fec330] transition-colors duration-200" to="/contact">Our Kitchens</Link>
                        <Link className="text-[#1d1c16] dark:text-[#e7e2d9] opacity-60 hover:text-[#af101a] dark:hover:text-[#fec330] transition-colors duration-200" to="/contact">Franchise</Link>
                    </div>
                    <div className="text-center md:text-right">
                        <p className="mb-4">© 2024 Pohafix - असली इन्दौरी ज़ायका</p>
                        <div className="flex gap-4 justify-center md:justify-end border-none">
                            <span className="material-symbols-outlined text-primary cursor-pointer hover:scale-110 transition-transform">share</span>
                            <span className="material-symbols-outlined text-primary cursor-pointer hover:scale-110 transition-transform">person</span>
                        </div>
                    </div>
                </div>
                {/* Texture overlay for footer */}
                <div className="absolute inset-0 bg-newsprint pointer-events-none opacity-40"></div>
            </footer>
        </div>
    );
};

export default Home;
