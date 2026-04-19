import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        "/box-front.png",
        "/box-right.png",
        "/box-left.png",
        "/box-group.png"
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

                {/* Why Pohafix Section */}
                <section className="py-24 bg-surface-container-high bg-newsprint relative" id="features">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                    <div className="container mx-auto px-6 text-center">
                        <h3 className="text-4xl font-black font-headline mb-16">The Pohafix Promise</h3>
                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Card 1 */}
                            <div className="bg-surface-container-lowest p-10 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-b-4 border-secondary">
                                <div className="w-20 h-20 bg-secondary-container/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="material-symbols-outlined text-secondary text-5xl">health_and_safety</span>
                                </div>
                                <h4 className="text-xl font-bold font-headline mb-3">No Preservatives</h4>
                                <p className="text-on-surface-variant font-medium">Just pure, natural ingredients sun-dried and packed with love.</p>
                            </div>
                            {/* Card 2 */}
                            <div className="bg-surface-container-lowest p-10 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-b-4 border-primary">
                                <div className="w-20 h-20 bg-primary-container/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="material-symbols-outlined text-primary text-5xl">flight_takeoff</span>
                                </div>
                                <h4 className="text-xl font-bold font-headline mb-3">Travel Friendly</h4>
                                <p className="text-on-surface-variant font-medium">Fits in your backpack, office bag, or carry-on. Anywhere you go, Indore follows.</p>
                            </div>
                            {/* Card 3 */}
                            <div className="bg-surface-container-lowest p-10 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-b-4 border-tertiary">
                                <div className="w-20 h-20 bg-tertiary-container/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="material-symbols-outlined text-tertiary text-5xl">timer</span>
                                </div>
                                <h4 className="text-xl font-bold font-headline mb-3">Ready in 5 Mins</h4>
                                <p className="text-on-surface-variant font-medium">Add hot water, wait for 5 mins, and your morning ritual is served.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Target Audience (Split Screen) */}
                <section className="flex flex-col md:flex-row min-h-[819px]">
                    {/* Left Side */}
                    <div className="flex-1 relative group overflow-hidden bg-surface-container-lowest flex items-center justify-center px-12 py-24">
                        <img alt="Late Risers" className="absolute inset-0 w-full h-full object-cover opacity-10 grayscale group-hover:scale-110 transition-transform duration-1000" data-alt="Interior of a student hostel room with books scattered on a desk and morning light filtering through curtains" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSNBqIhLfBY71L-9ZEoAbI0rx5v0jX_P4F5nD32vzeYttWI2QyuK8hxU7B2BO4xnwWzc7BPRBCPdAEaYuKfcRFo2uizksYWWuL-Lqph5uu49WUsL1aoGNB7tkZ74lCeS_0gbPe9Gyo7xe5_ryzr6s8nZpBvSj3yoaVf3xV45HzqEBFeUoWe1TbkdZBk25NDX5cxyIwHMXJOLIMyP14rYByw0cR3UGHA1-V0KlhILm2psnALtk-3fPKVBXlMdDxHyEqB2fRgURRobs" />
                        <div className="relative z-10 text-center space-y-4">
                            <h2 className="text-5xl md:text-7xl font-black font-headline text-on-surface">Late uthte ho?</h2>
                            <p className="text-xl font-medium text-on-surface-variant">The perfect hostel savior when the canteen is closed.</p>
                        </div>
                    </div>
                    {/* Center Floating Element */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block">
                        <div className="bg-primary-container text-on-primary-container p-8 rounded-full shadow-2xl backdrop-blur-md border-4 border-surface rotate-12">
                            <p className="font-headline font-black text-2xl uppercase tracking-tighter text-center">Pohafix<br /><span className="text-sm font-label">is your solution.</span></p>
                        </div>
                    </div>
                    {/* Right Side */}
                    <div className="flex-1 relative group overflow-hidden bg-surface-container-highest flex items-center justify-center px-12 py-24">
                        <img alt="Office Rush" className="absolute inset-0 w-full h-full object-cover opacity-10 grayscale group-hover:scale-110 transition-transform duration-1000" data-alt="Blurry view of a busy corporate office at rush hour with people in formal wear moving quickly" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEYeJBMSvFlfa-CSPGEcpu2U_792BKDHrtq9X1G5byczSaVT40SxrPPfE2tNYhx0CjvgCMeD4iG2WpMnw25yTnrOAxQwfO_hJHt-hzrlemk6QO6L1-iWBUOTkv6Ut9MzWNAfsV4OfkZey_TgQP0-0AwOzEmsWBLgNfps5BqaZxxUg8xeM6U7UyEbphmSM0WDBdmj5F_aRIW1DsnxWtpXF-aDV2no4x2eVSjoOFYhQZRm4zsarGqAiSCnQJ9QPe8YiQwmjdcEAog58" />
                        <div className="relative z-10 text-center space-y-4">
                            <h2 className="text-5xl md:text-7xl font-black font-headline text-on-surface">Breakfast skip karte ho?</h2>
                            <p className="text-xl font-medium text-on-surface-variant">Don't compromise on taste for your morning meeting.</p>
                        </div>
                    </div>
                </section>

                {/* How It Works */}
                <section className="py-32 bg-surface">
                    <div className="container mx-auto px-6">
                        <h2 className="text-4xl font-black font-headline text-center mb-24 uppercase tracking-widest">3 Steps to Indori Heaven</h2>
                        <div className="grid md:grid-cols-3 gap-12 text-center">
                            <div className="space-y-8">
                                <div className="relative inline-block">
                                    <img alt="Step 1" className="rounded-2xl shadow-lg w-full aspect-square object-cover" data-alt="Hands pouring steaming hot water from a kettle into a colorful food packaging pouch" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMHFPTN18cb11r1SHHhp1ljpZJ5xAhQWFyUfRUKfO1nrGvbvmE7nmHQ1SzUJZ4e_L5TvSFcNXCaDrqjEy25BNBZyJMmueLP5Ap7IzVbQ0NK_6mQ1wlon6eyjEjVdVdl8LDyWDPs7n6PP1_Q42tux_u3AwLW1ORATd3l5Ywt3ff5v-AofMfJd8CpRSZUSVpZ8J3EACriH22qaWhbb6nFwkTmtGmWEC97vBmEfdElx1MouqW8nTKagXZw55MkjNXLFrn0uQkIM_ObgA" />
                                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-on-primary flex items-center justify-center font-black text-2xl rounded-full">1</div>
                                </div>
                                <p className="text-2xl font-bold font-headline">Pour hot water</p>
                            </div>
                            <div className="space-y-8">
                                <div className="relative inline-block">
                                    <img alt="Step 2" className="rounded-2xl shadow-lg w-full aspect-square object-cover" data-alt="Close up of a sealed food container with wisps of white steam rising from the edges" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3C2pfmB5hggMiDrLGVgNh8Kp74Pdjvm_wmw0MlSa_g_pOM6Rh7xtCz9CGwz9uVfWgKPGJhrvvyJ1pnm0EqQ48GIRuDMhM9q9wq0jKRsxPW0mrcjwhhKYb1ik4_fUF-KapxxmArg_CPznd7fphYtf2VyUPVXu4dFlYahB_Ccf9m0hBY1Hitqk6C8-CZ43a8abwFlmhpTpd7atm3cMKwsV2OkcLXCoLGbzJfxlBpbZBZwSp655ANTcv2NjusLcXSucTBV_ltYH5xR8" />
                                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-on-primary flex items-center justify-center font-black text-2xl rounded-full">2</div>
                                </div>
                                <p className="text-2xl font-bold font-headline">Wait for 5 mins</p>
                            </div>
                            <div className="space-y-8">
                                <div className="relative inline-block">
                                    <img alt="Step 3" className="rounded-2xl shadow-lg w-full aspect-square object-cover" data-alt="Overhead view of a ready to eat bowl of poha garnished with sev and a lemon wedge on the side" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzeIQOi75Jv1MloavqRN_AiF9iQ7zgt8pRLE4sFHy3Dbegwciu8eqEQ2P56ms6K30Zp5r8alWS4bjTOGVk2MzmzAue4eeUt6hJj-YGlp32vapDIHWyZ1ua6pKEnzbt5gX_g_nkv9jmb4v09VO1idrpd5aTfE-0nz8dzP42Yr6ug2gGSIbXqJ2fsKtNd6P0H1uSRNPqg0bqgEgN_OqFK3Pa3I8qvQYM9m0P-ZuJZiVeZS3q-Oqhisgm1mBSHKr5xupqfYZVTMRnovg" />
                                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-on-primary flex items-center justify-center font-black text-2xl rounded-full">3</div>
                                </div>
                                <p className="text-2xl font-bold font-headline">Garnish and Enjoy!</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Indore Connect Section */}
                <section className="relative h-[600px] flex items-center" id="street">
                    <div className="absolute inset-0">
                        <img alt="Indore Market" className="w-full h-full object-cover grayscale brightness-50" data-alt="Dynamic night photography of a crowded Indian night market with glowing stalls and vibrant energy" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8JH_4eW2GjM3UfuShzHd981SuddxqnvlJQeBFG-ihj4uGNBRGHRo5iCKYvfMl45ress3_3SxwEMYMyCghCz5Rlygk950ol31s3hD00j8NHI2fZvqf9TXEgYcX7YtyKZrh_y-V4pf8lY0pRu81yM9kDCaf5pYar3JC-cFmYhF5eR7eGr2DzilBzceYf_iWyEFXa2Vxr5KaMyCzMVaIFhXiuDgIomHLsMKqDKvqJJrKuaWbC4FWdDrDKKTEz7GZT6FFnvbXn9XRK3g" />
                        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
                    </div>
                    <div className="container mx-auto px-6 relative z-10 text-white">
                        <div className="max-w-2xl bg-on-background/10 backdrop-blur-sm p-12 border-l-8 border-primary">
                            <h2 className="text-5xl font-black font-headline mb-6">Indore ki galiyon se inspired.</h2>
                            <p className="text-2xl font-medium leading-relaxed opacity-90">Same taste, same feeling. We didn't just bottle the recipe, we bottled the nostalgia of 7:00 AM at the street corner.</p>
                            <div className="mt-8 text-7xl font-hindi opacity-40">सराफा बाज़ार</div>
                        </div>
                    </div>
                </section>

                {/* Social Proof Section */}
                <section className="py-24 bg-surface-container-low">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-20">
                            <h2 className="text-4xl font-black font-headline">What the Poha-Army Says</h2>
                        </div>
                        <div className="grid md:grid-cols-4 gap-4">
                            {/* Newspaper Snip Testimonials */}
                            <div className="bg-surface-variant p-6 rotate-[-2deg] shadow-md relative group hover:rotate-0 transition-transform">
                                <span className="material-symbols-outlined absolute top-2 right-2 text-primary/30">format_quote</span>
                                <p className="font-headline font-bold mb-4">"Bilkul Indore jaisa taste 😍 Hostel mein toh life saver hai!"</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                                        <img alt="User" data-alt="Portrait of a young Indian man" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7ioauVT9rwWrFtnQHXpAdXLEa4FgT45SzUcrQ6ZOImU0UqYtU1YO9Ne4PCZ2INheGrkCknYxmW2CnR34kqB1gsEnzojMkEJznTBygVspnZ7fCQO_lhhnCL90pnRI56GnbvFrHearB-aZpl2ID7z2A_kuEMgJxGRjYX0NOixSD-Z5ESn8GW3-ESdFnvgG1aVsV_wzcod2Hubm088CEvu4xDmEOLcr3K2F9nncqHGIbFM8ZSqdok1bU8CBdtbjam0QHGdMJcNhSKjg" />
                                    </div>
                                    <span className="text-xs font-bold font-label">Aman V.</span>
                                </div>
                            </div>
                            <div className="bg-surface-variant p-6 rotate-[1deg] shadow-md relative mt-8 md:mt-0 hover:rotate-0 transition-transform">
                                <span className="material-symbols-outlined absolute top-2 right-2 text-primary/30">format_quote</span>
                                <p className="font-headline font-bold mb-4">"Office mein sab mujhse chura ke khaate hain. Best breakfast!"</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                                        <img alt="User" data-alt="Portrait of a young Indian woman" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2QmOaJolYVqSbQNCKdyX2exjr3-eggTaHXf8nm10vydcALni3QOoIbZV5y8MYZYWwfagTtghE-veXtTzCzfV1QsttHbJIe7Yd58Fwu_0we7-b-yKgwN5q71WnES1l2ypfgEFy1XCLXry5Va1M2vj6upUqZvgRU5fzRkWnozl9IT8TpPvKdkVdJf5CY0F7o0MbQPQukGje02rFrzABi6QCOM6WIshclIuAJXlAiopPUODwQaIDVWIhQDwh0fYA3o8WvX_YxvPIjc0" />
                                    </div>
                                    <span className="text-xs font-bold font-label">Priya K.</span>
                                </div>
                            </div>
                            <div className="bg-surface-variant p-6 rotate-[-1deg] shadow-md relative group hover:rotate-0 transition-transform">
                                <span className="material-symbols-outlined absolute top-2 right-2 text-primary/30">format_quote</span>
                                <p className="font-headline font-bold mb-4">"The sev is actually crunchy. Travel ke liye 10/10."</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                                        <img alt="User" data-alt="Portrait of an adult man with a short beard" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjBGJnq7H-xCPKujFJU_3UiDBdI3ZajO1VpR74FhYIuV6MfOZ0fexM2Lh4Hm-hCf-KbUIhYGT0_nK33_buBndo211GWZNFhV_EC0iNqThC6qmhG9n64SVkBfdNJ_zXZrT3NO5vqbGulzXrRiwFDqfaYeTCxarS1W6AJM28jAZoFS33HPzTC2WzQ-v3H0yqZAfu-MdU8nPAVu6rnQjJBMp5YDnW3UOiQnteDrx8elOUue1Nj9cBnWMnq_9wTWaVhFpOI3xq7SaEzRQ" />
                                    </div>
                                    <span className="text-xs font-bold font-label">Rahul S.</span>
                                </div>
                            </div>
                            <div className="bg-surface-variant p-6 rotate-[3deg] shadow-md relative mt-8 md:mt-0 hover:rotate-0 transition-transform">
                                <span className="material-symbols-outlined absolute top-2 right-2 text-primary/30">format_quote</span>
                                <p className="font-headline font-bold mb-4">"Finally someone did Poha right. No weird oily aftertaste."</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                                        <img alt="User" data-alt="Portrait of a woman with curly hair" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAKQ83-CbLa9UgHlHreQpdSUPEMenGxsOUlSgoHS5aOSyWSs0jJyvA8iKHqKi_BguN2M8RTtKY_-pR4HceMcK2qu0K7hQtm0YXkZZofKWvLmxgzWGc9x4_0PhvVvpQthZr1mFK-mH9O4kFY3qBY5UHKBF0niS4CA4YN08dHlpcj-rQH490VKtI6qsRFE3LW0QQ8kLaUd5B5fli5w_Jfct4V6R5eLY_YanFhdEOzgW00QdibWlRUxFnLCwpSVefnVURMH1ZgBa9NSY" />
                                    </div>
                                    <span className="text-xs font-bold font-label">Sneha R.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Product Display (Bento Style) */}
                <section className="py-24 bg-surface overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[800px]">
                            <div className="md:col-span-2 md:row-span-2 bg-surface-container-low rounded-3xl overflow-hidden relative group">
                                <img alt="Pohafix Hero" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Overhead macro shot of Indori Poha with vibrant garnishes lemon peanuts and sev scattered artistically around a steel plate" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAG2_8UQEoRVzIeP1OmBscWJPYnNtXABbY5kyu47M_Kk_3CR0HZayWBSXsDxKfajIwUYXopO1QO2Pu-Fq0xv2NsFYKPg1EVsikBcYgjxxPzDlJ0uTV-oO9Cpzh5wciug7MqHsJaovd73P2_Ik82ejdhrzHelpnC5l_-G39sJ9ZxTvwy4YZmG-kj8oo3Wox4Y6up4lxdcvo3IJIX-YAc8OzoGcPHTjHCAwIsNVk4aEPFx5zMnU9sqULVh859d4IG-hWfQvaoERlmz1I" />
                                <div className="absolute inset-0 bg-gradient-to-t from-on-background/80 to-transparent p-12 flex flex-col justify-end text-white">
                                    <h2 className="text-5xl font-black font-headline">The Pack of Joy</h2>
                                    <p className="text-xl opacity-80 mt-4">Everything you need, including the spoon and sev.</p>
                                </div>
                            </div>
                            <div className="md:col-span-2 bg-secondary-container p-12 rounded-3xl relative overflow-hidden">
                                <div className="relative z-10">
                                    <h3 className="text-4xl font-black font-headline text-on-secondary-container">Ingredients Matter</h3>
                                    <p className="mt-4 text-on-secondary-container/80 font-medium">Sourced directly from Malwa farms. High-quality flattened rice, local spices, and the signature crunchy sev.</p>
                                </div>
                                <span className="material-symbols-outlined absolute -bottom-10 -right-10 text-[200px] text-on-secondary-container/10">eco</span>
                            </div>
                            <div className="md:col-span-1 bg-primary p-12 rounded-3xl text-on-primary flex flex-col justify-center items-center text-center">
                                <span className="text-6xl font-black font-headline">0%</span>
                                <p className="font-bold uppercase tracking-widest mt-2">Added Sugar</p>
                            </div>
                            <div className="md:col-span-1 bg-surface-container-highest p-12 rounded-3xl flex flex-col justify-center items-center text-center border-4 border-dashed border-outline-variant">
                                <span className="text-6xl font-black font-headline">5</span>
                                <p className="font-bold uppercase tracking-widest mt-2">Mins Only</p>
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
