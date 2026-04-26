import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import VideoCard from '../components/VideoCard';
import { videoData } from '../data/videos';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
            description: "Ready in 5 mins. Authentically Indori.",
            reviews: "6,358",
            price: 189,
            tag: "POPULAR",
            tagColor: "bg-[#716016]",
            images: ["/combo-single.png"],
            theme: "light"
        },
        {
            title: "THE REBEL BUNDLE",
            subtitle: "2 Full 300g Boxes (600g Total)",
            description: "Bulk savings for the true Poha lover.",
            reviews: "2,685",
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
            description: "Limited edition street-style combo.",
            reviews: "1,842",
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
            <Helmet>
                <title>Pohafix | Authentic Indori Poha | Best Ready to Eat Instant Breakfast</title>
                <meta name="description" content="Authentic Indori Poha in 5 mins. Organic, preservative-free ready to use poha mix. The best healthy breakfast option for travel, bachelors, and busy mornings. Experience Indore's Sarafa Bazaar taste." />
                <meta name="keywords" content="instant poha mix, ready to eat poha, best instant breakfast india, travel food instant meals, healthy instant breakfast, quick indian breakfast, preservative free poha, indori poha online, mtr poha alternative, haldirams poha alternative, organic poha mix" />
                
                {/* Social Sharing Metadata */}
                <meta property="og:title" content="Pohafix | Authentic Indori Poha in 5 Minutes" />
                <meta property="og:description" content="Fresh, organic, and authentic Indori Poha delivered to your doorstep. Ready in just 5 minutes!" />
                <meta property="og:image" content="https://pohafix.com/synnc-pohafix-box.png" />
                <meta property="og:url" content="https://pohafix.com" />
                <meta name="twitter:card" content="summary_large_image" />

                <script type="application/ld+json">
                    {`
                    {
                      "@context": "https://schema.org/",
                      "@type": "Product",
                      "name": "Pohafix Authentic Indori Poha",
                      "image": ["https://pohafix.com/box-front.png"],
                      "description": "Premium ready-to-use Indori Poha with authentic spices and Ratlami Sev. No preservatives.",
                      "brand": {
                        "@type": "Brand",
                        "name": "Pohafix"
                      },
                      "offers": {
                        "@type": "Offer",
                        "url": "https://pohafix.com/shop",
                        "priceCurrency": "INR",
                        "price": "189",
                        "priceValidUntil": "2026-12-31",
                        "availability": "https://schema.org/InStock"
                      },
                      "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.9",
                        "reviewCount": "6358"
                      }
                    }
                    `}
                </script>
                
                {/* Organization Schema */}
                <script type="application/ld+json">
                    {`
                    {
                      "@context": "https://schema.org",
                      "@type": "Organization",
                      "name": "Pohafix",
                      "url": "https://pohafix.com",
                      "logo": "https://pohafix.com/logo.png",
                      "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "+91-9754684978",
                        "contactType": "customer service",
                        "areaServed": "IN",
                        "availableLanguage": ["Hindi", "English"]
                      },
                      "sameAs": [
                        "https://www.instagram.com/pohafix"
                      ]
                    }
                    `}
                </script>

                {/* FAQ Schema - The Secret Sauce for Google "People Also Ask" */}
                <script type="application/ld+json">
                    {`
                    {
                      "@context": "https://schema.org",
                      "@type": "FAQPage",
                      "mainEntity": [
                        {
                          "@type": "Question",
                          "name": "Which is the best instant poha brand in India?",
                          "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Pohafix is considered the best instant poha brand for authentic Indori taste. It uses no preservatives and is ready in just 5 minutes with hot water."
                          }
                        },
                        {
                          "@type": "Question",
                          "name": "Is instant poha healthy for weight loss?",
                          "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, Pohafix instant poha is a healthy breakfast option as it is made from organic flattened rice, is light on the stomach, and contains no artificial chemicals."
                          }
                        },
                        {
                          "@type": "Question",
                          "name": "How to make Indori Poha in 5 minutes?",
                          "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Just add 60ml of hot boiling water to one pack of Pohafix, cover for 5 minutes, and stir. Your authentic Indori breakfast is ready!"
                          }
                        }
                      ]
                    }
                    `}
                </script>
            </Helmet>
            <Header />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative min-h-[921px] flex items-center overflow-hidden bg-surface">
                    <div className="absolute inset-0 z-0">
                        <img alt="Indore Street" className="w-full h-full object-cover opacity-20 grayscale brightness-50" data-alt="Blurred, atmospheric night view of Sarafa Bazaar Indore with warm street lights and historic architecture bokeh" src="https://lh3.googleusercontent.com/aida-public/AB6AXuASSLwDz51eJkm7d0B6sAIZZ80lu-apFrOBDhI6cNVzeXZYuOvGDi6uBaJ5z-lc9G9ucsaAx-P6JfMjfCbO0H9kH0MRWOp2CD9oPVrJNS8k4IjpQycKW0hxScNZvUTa6wkEn5U6TIGnk8GkBZ7j9I3hha1rbLkxyfTh8FTCA4GJ__-CfBGi6f7iJigwN_Rj5ZXAdHDmNYS60RqgowG8uCohCk0-du38KgcSBdqsUICVlISqh7pkyTUvkH-hg1Xjvbpx8TnNsEkbmEE" />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                    </div>
                    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10 py-12 md:py-0">
                        <div className="space-y-6">
                            <div className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container rounded-sm text-xs font-bold tracking-widest uppercase mb-4">
                                Breakfast Revolution
                            </div>
                            <h1 className="text-4xl md:text-8xl font-black font-headline text-on-background leading-tight">
                                Authentic Indori Poha in <span className="text-primary italic">5 Minutes</span>
                            </h1>
                            <p className="text-xl md:text-4xl font-hindi text-primary-container font-medium opacity-90">
                                इंदौर का स्वाद, अब कहीं भी
                            </p>

                            {/* Mobile Product Image - Max Impact */}
                            <div className="md:hidden relative group my-2 -mx-2">
                                <div className="absolute -top-4 -left-4 text-7xl font-hindi hindi-layer rotate-[-15deg] opacity-40 z-0">ताज़ा</div>
                                <div className="absolute -bottom-4 -right-4 text-7xl font-hindi hindi-layer rotate-[15deg] opacity-40 z-0">ज़ायका</div>
                                <div className="relative bg-surface/30 rounded-[2.5rem] shadow-none overflow-hidden aspect-square flex items-center justify-center p-0">
                                    {slides.map((slide, index) => (
                                        <img 
                                            key={slide + "-mobile"}
                                            src={slide}
                                            alt={`Pohafix Box ${index + 1}`}
                                            className={`absolute inset-0 w-full h-full object-contain scale-110 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`} 
                                        />
                                    ))}
                                    <div className="absolute bottom-6 flex gap-2 z-20">
                                        {slides.map((_, i) => (
                                            <div key={i} className={`w-2 h-0.5 rounded-full ${i === currentSlide ? 'bg-primary w-6' : 'bg-stone-300'}`} />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 pt-4">
                                <Link to="/shop" className="bg-primary text-on-primary px-6 md:px-10 py-3 md:py-4 rounded-md font-bold text-base md:text-lg hover:bg-primary-container transition-all shadow-xl shadow-primary/30 flex items-center gap-2 group whitespace-nowrap">
                                    Order Now
                                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-sm md:text-base">arrow_forward</span>
                                </Link>
                                <div className="flex -space-x-3 flex-shrink-0">
                                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-surface bg-gray-200 overflow-hidden">
                                        <img alt="User" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZMaD6NT3vB_C-xOnrq1ryqINMVeb6wn3HYk5ThDJxt-JGh62pDrANAzOpMMk5RVmPxOkdRFaRWYXY7cPvowij1L0ic-p6OELBNR69a3K3jF-4j019-5X7traThh-8Du_0bOn1BX8kKv-4nj-wK7TS_P_A7r2N-OHVEHif7tAd2VUAELbDIL8tGPd9eCI4pQD59D3fwXU4ec0pWQqNhwhuOMhdl0DX1P3AM-l36nFV6TpN3n7Lgbln2FHQxObWMlEAoHPCuhSAY9Y" />
                                    </div>
                                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-surface bg-gray-200 overflow-hidden">
                                        <img alt="User" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBy8kUtbzsBmwIUTAO7fyxffDumGLIoJNV29LC8wixog09vBBgzG6uVlv6oC5pIAzof5Sd2jBhJfdOoUFRrZhGCAptFgWgPgiTijl_UFVIog1d0F1LOZV7NreMZCoWBhuLAaIrMUt3NtwQYQDE40VD54dHg7cOilkFJ1Z6xjstpgTpyLkINEyU0C9rPz3nHUTX-TYbUzMwgJjG8ajSm4lxGOl5hQD6kdFh_nGsx7fwnF7ZtZrlgAAKxBQCawJHG8DrKwFf6dHAcnc0" />
                                    </div>
                                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-surface bg-primary flex items-center justify-center text-[8px] md:text-[10px] text-white font-bold">
                                        10k+
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Desktop Product Content (Hidden on Mobile) */}
                        <div className="hidden md:block relative group">
                            <div className="absolute -top-10 -left-10 text-9xl font-hindi hindi-layer rotate-[-15deg]">ताज़ा</div>
                            <div className="absolute -bottom-10 -right-10 text-9xl font-hindi hindi-layer rotate-[15deg]">ज़ायका</div>
                            <div className="relative transform hover:scale-105 transition-transform duration-500 bg-surface-container-lowest rounded-[2rem] shadow-2xl overflow-hidden aspect-[4/5] flex items-center justify-center p-8">
                                {slides.map((slide, index) => (
                                    <img 
                                        key={slide + "-desktop"}
                                        src={slide}
                                        alt={`Pohafix Box ${index + 1}`}
                                        className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`} 
                                    />
                                ))}
                                <div className="absolute top-12 -right-4 bg-surface-container-lowest p-3 rounded-xl shadow-lg rotate-12 max-w-[140px] z-20">
                                    <p className="font-headline font-bold text-xs">Authentic Retained</p>
                                    <p className="font-headline font-bold text-[10px] mt-1 text-on-surface-variant">Extra Sev &amp; Pomegranate Included</p>
                                </div>
                                <div className="absolute bottom-8 flex gap-3 z-20">
                                    {slides.map((_, i) => (
                                        <button 
                                            key={i} 
                                            onClick={() => setCurrentSlide(i)}
                                            className={`w-2 h-2 rounded-full transition-all ${i === currentSlide ? 'bg-primary w-8' : 'bg-outline-variant/30'}`} 
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Global Appeal Section */}
                <section className="py-12 md:py-24 bg-surface-container-low overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col md:flex-row items-center gap-16">
                            <div className="w-full md:w-1/2 relative">
                                {/* Mobile: Swippable Carousel | Desktop: Layered Stack */}
                                <div className="block md:hidden">
                                    <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 no-scrollbar pb-8 px-4">
                                        {[
                                            { id: 1, img: "/diljit.jpg", caption: "DILJIT LOVES IT", rotate: "-rotate-2" },
                                            { id: 2, img: "/david.jpg", caption: "STREET SIDE STORY", rotate: "rotate-2" }
                                        ].map((p) => (
                                            <div key={p.id} className="min-w-[85%] snap-center">
                                                <div className={`bg-white shadow-2xl border-8 border-white p-2 aspect-[4/5] relative ${p.rotate}`}>
                                                    <img src={p.img} alt={p.caption} className="w-full h-full object-cover" />
                                                    <p className="absolute bottom-4 left-4 bg-primary text-white text-[10px] px-3 py-1 font-black uppercase tracking-widest">{p.caption}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex justify-center gap-2 mt-4">
                                        <div className="w-8 h-1 bg-primary rounded-full"></div>
                                        <div className="w-4 h-1 bg-gray-300 rounded-full"></div>
                                    </div>
                                </div>

                                {/* Desktop Stacked View */}
                                <div className="hidden md:flex justify-center">
                                    <div className="relative w-full max-w-md aspect-square lg:scale-110">
                                        <div className="absolute top-0 left-0 w-64 h-80 bg-surface-variant rotate-[-6deg] shadow-lg overflow-hidden border-8 border-white p-2 hover:rotate-0 hover:z-20 transition-all duration-300 cursor-pointer group">
                                            <img alt="Diljit Poha" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/diljit.jpg" />
                                            <p className="absolute bottom-4 left-4 bg-primary text-white text-[10px] px-2 py-1 font-bold">DILJIT LOVES IT</p>
                                        </div>
                                        <div className="absolute bottom-0 right-0 w-64 h-80 bg-surface-variant rotate-[8deg] shadow-xl overflow-hidden border-8 border-white p-2 hover:rotate-0 hover:z-20 transition-all duration-300 cursor-pointer group">
                                            <img alt="David Poha" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/david.jpg" />
                                            <p className="absolute bottom-4 left-4 bg-primary text-white text-[10px] px-2 py-1 font-bold">STREET SIDE STORY</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 space-y-6">
                                <h2 className="text-5xl font-black font-headline text-on-surface leading-[1.1] tracking-tighter uppercase md:normal-case">
                                    From the streets of Indore <br className="hidden md:block"/><span className="text-primary italic">to the world.</span>
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
                <section className="relative py-20 lg:py-48 overflow-hidden flex items-center bg-[#1d1c16]">
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

                {/* Product Combos - Mobile Grid / Desktop Carousel */}
                <section className="py-12 md:py-24 bg-[#fef9f0] relative overflow-hidden">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-12 gap-4">
                            <div>
                                <h2 className="text-3xl md:text-6xl font-black font-headline text-on-surface tracking-tighter uppercase">Pick Your <span className="text-primary italic">Poha Fix.</span></h2>
                            </div>
                        </div>

                        <div className="md:hidden grid grid-cols-1 gap-4">
                            {bundles.map((bundle, idx) => (
                                <div key={idx} className="bg-white rounded-[1.5rem] overflow-hidden shadow-[0_12px_40px_-10px_rgba(0,0,0,0.08)] border border-stone-100 flex flex-col">
                                    {/* Product Visual Header - Zero Blank Space */}
                                    <div className="bg-[#fcf7ec] aspect-[5/4] relative flex items-center justify-center p-0 overflow-hidden">
                                        <img src={bundle.images[0]} alt={bundle.title} className="w-[90%] h-[90%] object-contain mix-blend-multiply transition-transform duration-500 scale-105 drop-shadow-[0_25px_25px_rgba(0,0,0,0.12)]" />
                                        <div className="absolute top-3 right-3 bg-primary text-white text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest shadow-md z-10">
                                            {bundle.tag}
                                        </div>
                                        {/* Bottom Fade Mask to blend with white content */}
                                        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/40 to-transparent pointer-events-none"></div>
                                    </div>

                                    {/* Product Content Details - Tightened */}
                                    <div className="px-5 pt-4 pb-2 flex-1">
                                        <h3 className="text-lg font-bold text-stone-900 mb-0.5 leading-tight">{bundle.title.toLowerCase().includes('the ') ? bundle.title.split('THE ')[1] : bundle.title}</h3>
                                        <p className="text-[10px] text-stone-500 font-bold mb-0.5 leading-tight">{bundle.subtitle}</p>
                                        <p className="text-[10px] text-stone-400 font-medium mb-2 leading-tight">{bundle.description}</p>
                                        
                                        {/* Stars & Reviews */}
                                        <div className="flex items-center gap-1 mb-2">
                                            <div className="flex text-[#ce1d2a]">
                                                <span className="material-symbols-outlined text-[0.9rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                                <span className="material-symbols-outlined text-[0.9rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                                <span className="material-symbols-outlined text-[0.9rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                                <span className="material-symbols-outlined text-[0.9rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                                <span className="material-symbols-outlined text-[0.9rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                            </div>
                                            <span className="text-stone-400 text-[10px] font-semibold">({bundle.reviews})</span>
                                        </div>

                                        <div className="mb-2">
                                            <div className="text-xl font-black text-stone-900 leading-none">₹{bundle.price}</div>
                                            <div className="text-[9px] text-stone-400 font-medium">(Inclusive of all taxes)</div>
                                        </div>
                                    </div>

                                    {/* Footer Button Strategy */}
                                    <div className="border-t border-stone-100 p-4">
                                        <Link 
                                            to={`/order?plan=${idx}`} 
                                            className="block w-full text-center text-[#ce1d2a] font-black text-sm uppercase tracking-widest py-2 hover:opacity-80 transition-opacity"
                                        >
                                            ORDER NOW
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="hidden md:block max-w-5xl mx-auto">
                            <div className="relative group p-8">
                                {/* Desktop Slides Container (Previous Logic) */}
                                <div className="overflow-hidden">
                                    <div 
                                        className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" 
                                        style={{ transform: `translateX(-${bundleSlide * 100}%)` }}
                                    >
                                        {bundles.map((bundle, idx) => (
                                            <div key={idx} className="w-full flex-shrink-0 px-6">
                                                <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col md:flex-row min-h-[450px]">
                                                    <div className="md:w-1/2 p-12 bg-[#fdfaf2] flex items-center justify-center relative border-r border-gray-100">
                                                        <img src={bundle.images[0]} alt="Product" className="w-[85%] h-auto object-contain mix-blend-multiply transition-transform duration-500 hover:scale-105" />
                                                    </div>
                                                    <div className="md:w-1/2 p-12 flex flex-col justify-center">
                                                        <span className="bg-[#eaf4e5] text-[#347b4e] text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full w-fit mb-6">
                                                            {bundle.tag}
                                                        </span>
                                                        <h3 className="text-5xl font-black font-headline text-gray-900 mb-4 leading-[1.1] tracking-tight uppercase">
                                                            Pohafix {bundle.title.split('THE ')[1]}
                                                        </h3>
                                                        <p className="text-gray-500 font-medium leading-relaxed mb-8 pr-4 italic">
                                                            {bundle.subtitle}.
                                                        </p>
                                                        <div className="bg-[#f6f4ed] rounded-xl p-6 mb-6 flex justify-between items-center border border-[#ece9df]">
                                                            <span className="text-4xl font-black font-headline text-[#af101a]">₹{bundle.price}</span>
                                                            <span className="text-[#8b7921] font-bold text-xs uppercase tracking-widest">SAVE ₹{bundle.originalPrice ? bundle.originalPrice - bundle.price : '0'}</span>
                                                        </div>
                                                        <Link to="/shop" className="w-full bg-[#ae1925] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#8f121d] transition-colors text-center shadow-lg active:scale-[0.98]">
                                                            Order Now
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features & Why It Matters Section */}
                <div className="bg-[#fcfaf5] py-12 md:py-8 font-body relative overflow-hidden" id="features">
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
                    <div className="bg-[#fcedea] py-16 md:py-24 lg:py-32 px-6 text-center shadow-inner">
                        <h2 className="text-5xl md:text-7xl font-black font-headline text-[#be1e2d] tracking-tight leading-[1.1] mb-12 max-w-4xl mx-auto">
                            Healthy bhi, tasty bhi –<br className="hidden md:block" /> ab try karo.
                        </h2>
                        <div className="flex justify-center items-center gap-6 relative inline-flex">
                            <Link to="/shop" className="bg-[#be1e2d] text-white px-12 py-5 font-black text-2xl tracking-wide hover:bg-[#a11825] transition-colors shadow-[0_6px_0_0_#8f121b] active:translate-y-1 active:shadow-[0_2px_0_0_#8f121b] min-w-[240px] rounded-sm relative z-10">
                                Order Now
                            </Link>
                            <span className="material-symbols-outlined text-[#fdbd30] text-6xl transform -rotate-[20deg] absolute -right-16 top-4 animate-[bounce_2s_infinite] hidden md:block" style={{ fontVariationSettings: "'FILL' 1" }}>near_me</span>
                        </div>
                    </div>
                </div>


                {/* The World is Poha-Fixated: Celebrity Reels */}
                <section className="py-12 md:py-24 bg-surface">
                    <div className="max-w-screen-2xl mx-auto px-8">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                            <h2 className="font-headline text-5xl md:text-6xl font-black text-primary tracking-tighter uppercase max-w-xl">
                                The World is <span className="text-secondary">Poha-Fixated</span>
                            </h2>
                            <p className="font-label font-semibold text-tertiary uppercase tracking-widest bg-tertiary-container/10 px-4 py-1">Global Endorsements</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {videoData.map((video) => (
                                <VideoCard key={video.id} video={video} />
                            ))}
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
                <section className="py-12 md:py-24 bg-surface-container-low overflow-hidden">
                    <div className="max-w-screen-2xl mx-auto px-8 relative">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="relative">
                                {/* Asymmetric Card Layout */}
                                <div className="absolute -top-12 -left-12 font-headline text-9xl text-primary/5 select-none rotate-[-15deg]">thela</div>
                                <div className="bg-surface-container-lowest p-4 md:p-6 rounded-xl shadow-2xl relative z-10 transform rotate-2">
                                    <img alt="Street Cart Poha" className="w-full aspect-video object-contain rounded-lg mb-4 md:mb-6" src="/thela-v3.png" />
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h4 className="font-headline text-2xl font-bold text-on-surface">The Signature Cart</h4>
                                            <p className="text-on-surface-variant italic">Served with Jeeravan &amp; Love</p>
                                        </div>
                                        <span className="bg-tertiary-container text-on-tertiary-container font-headline font-black px-4 py-2 text-xl">₹49/-</span>
                                    </div>
                                </div>
                                <div className="absolute -bottom-6 -right-4 md:-bottom-8 md:-right-8 bg-secondary-container p-4 md:p-8 rounded-xl shadow-xl z-20 max-w-[200px] md:max-w-xs transform -rotate-3 border-4 border-surface-container-lowest">
                                    <p className="font-headline text-xl md:text-3xl font-black text-secondary leading-tight mb-1 md:mb-2 uppercase">Thela-waala swad</p>
                                    <p className="text-on-secondary-container font-medium text-xs md:text-base">That unmistakable smoky aroma of the street, captured in every bite.</p>
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
                                <Link 
                                    to="/shop" 
                                    className="group bg-primary text-on-primary px-8 md:px-10 py-4 md:py-5 font-headline font-black text-lg md:text-xl tracking-tight uppercase rounded-md shadow-xl flex items-center justify-center md:justify-start gap-4 hover:bg-primary-container transition-all"
                                >
                                    Experience the Ritual
                                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonial Section - Clean Premium Card */}
                <section className="py-16 md:py-24 bg-[#fcfaf5]">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="bg-white p-8 md:p-16 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-stone-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-[0.03] rotate-12 pointer-events-none">
                                <span className="material-symbols-outlined text-[12rem]">format_quote</span>
                            </div>
                            
                            <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full font-headline font-black uppercase tracking-widest text-xs mb-8">
                                Member Spotlight
                            </div>
                            
                            <blockquote className="font-headline text-2xl md:text-4xl font-black text-on-surface italic leading-tight mb-10 relative z-10">
                                "I used to skip breakfast because Indore was 800 miles away. Now, Pohafix brings the Galiyan of my childhood right to my dining table in London."
                            </blockquote>

                            <div className="flex items-center gap-5 relative z-10">
                                <div className="w-14 h-14 rounded-full bg-stone-100 flex items-center justify-center border-2 border-white shadow-sm">
                                    <span className="material-symbols-outlined text-stone-400 text-3xl">person</span>
                                </div>
                                <div className="flex flex-col">
                                    <p className="font-headline font-black text-lg uppercase tracking-tight text-on-surface">Aryan Sharma</p>
                                    <p className="text-sm font-medium text-stone-500 uppercase tracking-wider">Ex-Indori, Software Lead</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final Call to Action - Red Section */}
                <section className="bg-[#be1e2d] py-16 md:py-24 relative overflow-hidden">
                    {/* Hindi Watermarks */}
                    <div className="absolute top-10 right-10 text-8xl md:text-[12rem] font-hindi text-white/5 select-none rotate-12 pointer-events-none">
                        इंदौर
                    </div>
                    <div className="absolute bottom-10 left-10 text-8xl md:text-[10rem] font-hindi text-white/5 select-none -rotate-12 pointer-events-none">
                        स्वादिष्ट
                    </div>

                    <div className="container mx-auto px-6 text-center relative z-10">
                        <h2 className="text-4xl md:text-7xl font-black font-headline text-white mb-6 tracking-tighter leading-tight drop-shadow-lg">
                            Kal se breakfast skip <br className="hidden md:block" /> mat karo.
                        </h2>
                        <p className="text-lg md:text-xl text-white/90 font-medium mb-10 max-w-2xl mx-auto">
                            Pohafix ke saath har subah easy banao. Real Indori taste is just a click away.
                        </p>
                        <Link 
                            to="/shop" 
                            className="inline-block bg-[#fdbd30] text-[#1d1c16] px-12 py-5 rounded-xl font-black text-xl md:text-2xl hover:bg-[#ffcf5c] transition-all shadow-[0_10px_25px_-5px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95"
                        >
                            Order Now
                        </Link>
                    </div>
                </section>

                {/* SEO Knowledge Hub - The "Crazy" Part */}
                <section className="py-20 bg-surface-container-lowest border-t border-outline-variant/10">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                            <div className="space-y-6">
                                <h3 className="font-headline text-2xl font-black text-primary uppercase">The Instant Poha Guide</h3>
                                <p className="text-on-surface-variant text-sm leading-relaxed">
                                    Looking for the best **instant breakfast option**? While brands like **MTR Poha** or **Haldiram's Instant Poha** are popular, Pohafix offers a premium, small-batch **ready to use poha** that retains the authentic handmade texture of Indore. Our process ensures a healthy, **organic** alternative.
                                </p>
                            </div>
                            <div className="space-y-6">
                                <h3 className="font-headline text-2xl font-black text-primary uppercase">Authentic Indori Taste</h3>
                                <p className="text-on-surface-variant text-sm leading-relaxed">
                                    Why is **Indori Poha** world-famous? It's the balance of Jeeravan spices, Ratlami Sev, and the steaming technique. With Pohafix, we've automated this heritage so you can enjoy **ready to use Indori Poha** anywhere in the world.
                                </p>
                            </div>
                            <div className="space-y-6">
                                <h3 className="font-headline text-2xl font-black text-primary uppercase">Healthy & Organic Choice</h3>
                                <p className="text-on-surface-variant text-sm leading-relaxed">
                                    In a world of chemical preservatives, Pohafix stands out as an **organic**-first brand. We use high-quality flattened rice and natural spices, making it the perfect **breakfast option** for fitness enthusiasts and busy professionals.
                                </p>
                            </div>
                        </div>
                        
                        {/* Keyword Cloud for Search Engines */}
                        <div className="mt-20 pt-10 border-t border-outline-variant/5">
                            <h4 className="font-label text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/40 mb-6">Popular Search Topics</h4>
                            <div className="flex flex-wrap gap-x-6 gap-y-3 text-[11px] font-medium text-on-surface-variant/60 uppercase tracking-tighter">
                                <span>#InstantPohaIndore</span>
                                <span>#ReadyToEatPoha</span>
                                <span>#OrganicBreakfastIndia</span>
                                <span>#IndoriZaykaOnline</span>
                                <span>#BestPohaBrand</span>
                                <span>#PohafixVsMTR</span>
                                <span>#FreshInstantBreakfast</span>
                                <span>#HealthyMorningRitual</span>
                                <span>#RatlamiSevPoha</span>
                                <span>#HaldiramsAlternative</span>
                                <span>#JeeravanMasalaPoha</span>
                                <span>#OrganicFoodIndia</span>
                                <span>#SarafaBazaarIndore</span>
                                <span>#QuickPohaRecipe</span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Home;
