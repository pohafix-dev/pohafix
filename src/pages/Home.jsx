import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { blogs } from '../data/blogs';

const Home = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-background text-white selection:bg-primary selection:text-black overflow-x-hidden">
            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-[300] bg-primary transition-all duration-500 flex flex-col items-center justify-center p-10 ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                <button 
                    onClick={() => setIsMenuOpen(false)}
                    className="absolute top-10 right-10 text-black p-4 border-4 border-black"
                >
                    <span className="material-symbols-outlined text-4xl block">close</span>
                </button>
                <div className="flex flex-col gap-8 text-center">
                    <Link onClick={() => setIsMenuOpen(false)} to="/blog" className="font-headline text-6xl font-black text-black uppercase italic hover:translate-x-4 transition-transform">POHA STORY</Link>
                    <a onClick={() => setIsMenuOpen(false)} href="#gear" className="font-headline text-6xl font-black text-black uppercase italic hover:translate-x-4 transition-transform">SPECS</a>
                    <a onClick={() => setIsMenuOpen(false)} href="#join" className="font-headline text-6xl font-black text-black uppercase italic hover:translate-x-4 transition-transform">JOIN CREW</a>
                    <Link onClick={() => setIsMenuOpen(false)} to="/order" className="bg-black text-white px-10 py-5 font-headline text-4xl font-black mt-10 shadow-[10px_10px_0px_0px_#fff]">ORDER NOW</Link>
                </div>
            </div>

            {/* Top Navigation */}
            <nav className="flex justify-between items-center w-full px-6 py-4 bg-black border-b-4 md:border-b-8 border-yellow-500 shadow-[4px_4px_0px_0px_rgba(229,57,53,1)] md:shadow-[8px_8px_0px_0px_rgba(229,57,53,1)] sticky top-0 z-[100]">
                <Link to="/" className="flex items-center">
                    <img src="/logo.png" alt="Pohafix Logo" className="h-10 md:h-16 w-auto object-contain" />
                </Link>
                <div className="hidden md:flex gap-8 font-headline uppercase tracking-tighter leading-none font-black text-sm text-white">
                    <Link className="text-primary underline decoration-4 underline-offset-8" to="/blog">POHA STORY</Link>
                    <a className="hover:text-yellow-500 transition-colors" href="#gear">SPECS</a>
                    <a className="hover:text-yellow-500 transition-colors" href="#join">JOIN THE CREW</a>
                </div>
                <div className="flex items-center gap-4">
                    <Link to="/order" className="hidden sm:block bg-primary text-black font-black px-6 py-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:translate-x-1 active:shadow-none transition-all uppercase font-headline text-sm">DIRECT ORDER</Link>
                    <button 
                        onClick={() => setIsMenuOpen(true)}
                        className="md:hidden bg-secondary text-black p-2 border-2 border-black"
                    >
                        <span className="material-symbols-outlined block">menu</span>
                    </button>
                </div>
            </nav>

            <main>
                {/* 1. HERO SECTION */}
                <section className="min-h-screen bg-black flex flex-col items-center justify-center text-center px-6 py-20 md:py-32 overflow-hidden relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-full bg-[radial-gradient(circle_at_center,rgba(255,209,108,0.1)_0%,transparent_70%)] pointer-events-none"></div>
                    
                    <div className="relative z-10 space-y-6 w-full">
                        <div className="inline-block bg-primary text-black font-headline font-black px-4 py-1 uppercase tracking-[0.2em] text-[10px] md:text-xs mb-4">BATCH #402 IS LIVE</div>
                        <h2 className="font-headline text-2xl md:text-6xl text-transparent uppercase tracking-tighter opacity-20" style={{ WebkitTextStroke: '1px white' }}>Kya Khaoge?</h2>
                        <h2 className="font-headline text-3xl md:text-8xl text-white uppercase tracking-tighter opacity-40 leading-none">Soch rahe ho?</h2>
                        <h2 className="font-headline text-4xl md:text-[10rem] text-secondary uppercase tracking-tighter font-black leading-[0.8]">Craving...</h2>
                        
                        <div className="mt-8 md:mt-12 bg-primary p-8 md:p-16 rotate-[-2deg] border-4 md:border-8 border-black shadow-[12px_12px_0px_0px_#e53935] md:shadow-[24px_24px_0px_0px_#e53935] hover:rotate-0 transition-transform duration-500 mx-auto max-w-sm md:max-w-none">
                            <h1 className="font-headline text-5xl md:text-[12rem] font-black text-black leading-[0.8] tracking-full uppercase">POHA<br/>KHA LO</h1>
                        </div>

                        <div className="pt-16 flex justify-center">
                            <Link to="/order" className="group relative">
                                <div className="absolute inset-0 bg-white translate-x-3 translate-y-3 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform border-4 border-black"></div>
                                <div className="relative bg-secondary text-black font-black text-3xl md:text-5xl px-12 py-6 border-4 border-black uppercase font-headline">START REVOLUTION</div>
                            </Link>
                        </div>
                    </div>

                    <div className="absolute bottom-10 left-10 flex items-center gap-4">
                        <span className="material-symbols-outlined text-primary text-5xl animate-bounce">keyboard_double_arrow_down</span>
                    </div>
                </section>

                {/* 2. THE STORY */}
                <section className="bg-black py-10 md:py-20" id="story">
                    {/* Student Card */}
                    <div className="min-h-[70vh] md:min-h-screen flex flex-col md:flex-row items-stretch border-t-4 md:border-t-8 border-primary">
                        <div className="w-full md:w-1/2 min-h-[300px] md:min-h-screen relative overflow-hidden group border-b-4 md:border-b-0 border-primary">
                            <img loading="lazy" alt="Stressed student studying late in hostel craving PohaFix" className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZo2kBy51vVSz1ZZX6CjDZcnWc3IUgpvNmGd7DYti6j5UiVIoAxgw3OVY3zdUYyQxnivw2uAE9Bhsm4gN_snEfG_PBp5qrxvSsLbF5aOn3iB6ZHTWxab42AgABUYPGDBN4oz_0d8GPqiyBPCMgnIpKwkROojf6IRiObMa7Nyp5qTsuIdwKF44bZdS5znm1lCDUNd326FXJQmsQTsKBeWNexJP_4xjwXKmlHlmKRoeW54lPKDQ11bZ_sfssvqGT4bkMz0SNlt7bXYsP"/>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                        </div>
                        <div className="w-full md:w-1/2 p-10 md:p-24 flex flex-col justify-center bg-black border-l-0 md:border-l-8 border-primary">
                            <h2 className="font-headline text-5xl md:text-9xl font-black text-primary uppercase leading-[0.8] tracking-tighter mb-8 md:mb-10 italic">HOSTEL<br/>MAYA</h2>
                            <p className="font-body text-xl md:text-3xl text-white/50 max-w-lg leading-tight mb-10 md:mb-16 uppercase italic">Exam kal hai, bhook abhi lagi hai. Mess band ho gaya. Ab kya karega beta?</p>
                            <Link to="/order" className="self-start bg-secondary text-black font-black px-8 md:px-12 py-4 md:py-5 uppercase text-xl md:text-2xl shadow-[8px_8px_0px_0px_#fff] md:shadow-[12px_12px_0px_0px_#fff] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all">RELATABLE?</Link>
                        </div>
                    </div>

                    {/* Corporate Card */}
                    <div className="min-h-[70vh] md:min-h-screen flex flex-col md:flex-row-reverse items-stretch border-t-4 md:border-t-8 border-secondary">
                        <div className="w-full md:w-1/2 min-h-[300px] md:min-h-screen relative overflow-hidden group border-b-4 md:border-b-0 border-secondary">
                            <img alt="Corporate worker" className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9eYoOx9ZazxuJ-Nk2Sp0oAydXZCkX_5uuE4lGUtcD6cSzNuof-8qK7qPl_KKXKfbrg8_hgzYp5PS1Fjrn5xLIEYM7J816dIpViU7OQyGWunh5uDPtUjQqZ0lR6v8OjPqtetmxQUGyr1Un2o5VQLeYvhyDyqDcvdJB2z0RCX8iQ1nj9rGEjnW75x9wSH5uw_4nUyhNeFXPiPrpRgAyTFvrC4YW8HwmcMw7cazZyBUzEYtqXVON-HGWXK6UJGUcD9mzWAEYS8hJgsbj"/>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                        </div>
                        <div className="w-full md:w-1/2 p-10 md:p-24 flex flex-col justify-center bg-black border-r-0 md:border-r-8 border-secondary text-left md:text-right items-start md:items-end">
                            <h2 className="font-headline text-5xl md:text-9xl font-black text-secondary uppercase leading-[0.8] tracking-tighter mb-8 md:mb-10 italic">CORPORATE<br/>HUSTLERS</h2>
                            <p className="font-body text-xl md:text-3xl text-white/50 max-w-lg leading-tight mb-10 md:mb-16 uppercase italic">6 PM wali bhook. Canteen ki wahi sad-looking sandwich? Ya 200 rupaye ka delivery tax? Dimag mat chala, Poha Kha.</p>
                            <Link to="/order" className="self-start md:self-end bg-primary text-black font-black px-8 md:px-12 py-4 md:py-5 uppercase text-xl md:text-2xl shadow-[8px_8px_0px_0px_#fff] md:shadow-[-12px_12px_0px_0px_#fff] hover:shadow-none hover:translate-x-[-2px] hover:translate-y-2 transition-all">VIBE CHECK</Link>
                        </div>
                    </div>
                </section>

                {/* 3. PAIN SECTION */}
                <section className="bg-black py-24 md:py-48 px-6 border-y-4 md:border-y-8 border-white overflow-hidden relative text-center">
                    <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
                        <h3 className="hidden md:block font-headline text-[20vw] leading-[0.7] font-black text-white/5 uppercase mb-[-8vw] select-none tracking-tighter">TRAGEDY</h3>
                        <div className="space-y-8 md:space-y-12 text-center">
                            <div className="glitch-text font-headline text-4xl md:text-[8rem] font-black uppercase tracking-tighter text-secondary transform -rotate-2">NOODLES KHATAM?</div>
                            <div className="glitch-text font-headline text-4xl md:text-[7rem] font-black uppercase tracking-tighter text-white transform rotate-2">ONLINE MEHANGA HE?</div>
                            <div className="glitch-text font-headline text-4xl md:text-[8rem] font-black uppercase tracking-tighter text-primary transform -rotate-1">MAID KE NAKHRE?</div>
                        </div>
                        <h3 className="hidden md:block font-headline text-[20vw] leading-[0.7] font-black text-white/5 uppercase mt-[-8vw] select-none tracking-tighter">KAHANI</h3>
                    </div>
                </section>

                {/* 4. PRODUCT SECTION */}
                <section className="bg-primary py-24 md:py-48 px-6 flex flex-col items-center border-b-4 md:border-b-8 border-black relative" id="gear">
                    <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-12 md:gap-16">
                        <div className="w-full md:w-1/2">
                            <div className="bg-black text-primary inline-block px-4 py-1 font-headline font-black uppercase mb-6 transform -skew-x-12 tracking-widest text-xs md:text-sm">THE SOLUTION</div>
                            <h2 className="font-headline text-5xl md:text-8xl font-black text-black leading-none tracking-tighter mb-8 text-left">NATURAL.<br/>CLEAN.<br/>FAST.</h2>
                            <p className="font-body text-lg md:text-xl text-black/70 max-w-md font-bold uppercase tracking-tighter mb-10 text-left">PohaFix isn't just instant food. It's a refusal to eat garbage. No MSG. No palm oil. Just 5 minutes to heaven.</p>
                            <Link to="/order" className="bg-black text-white font-headline text-xl md:text-2xl font-black px-10 md:px-12 py-4 md:py-5 border-4 border-black shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] md:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all inline-block uppercase italic float-left">Grab a Batch</Link>
                        </div>
                        <div className="w-full md:w-1/2 relative mt-16 md:mt-0">
                            <div className="bg-white p-6 md:p-8 border-4 md:border-8 border-black shadow-[12px_12px_0px_0px_#e53935] md:shadow-[24px_24px_0px_0px_#e53935] hover:scale-105 transition-transform duration-500">
                                <img alt="Pohafix product box" className="w-full drop-shadow-2xl" src="/synnc-pohafix-box.png"/>
                                <div className="absolute -top-6 -right-6 md:-top-10 md:-right-10 bg-secondary text-black font-headline font-black px-4 md:px-6 py-1 md:py-2 border-2 md:border-4 border-black rotate-12 text-sm md:text-xl">HEALTHY AF</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. TRANSPARENCY REPORT */}
                <section className="bg-black py-24 md:py-48 px-6">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center">
                        <div>
                            <div className="bg-secondary inline-block px-4 md:px-6 py-1 md:py-2 mb-8 transform -skew-x-12">
                                <span className="font-headline text-black font-black text-xl md:text-2xl uppercase tracking-tighter">THE TRUTH</span>
                            </div>
                            <h2 className="font-headline text-5xl md:text-[7rem] font-black text-white uppercase leading-[0.8] tracking-tighter mb-10 text-left">WHAT'S IN<br/>THE BOX?</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 font-headline uppercase font-black text-base md:text-lg text-white/40 border-t-4 md:border-t-8 border-white/10 pt-10">
                                <div className="flex justify-between border-b-2 border-white/10 pb-2"><span>Flattened Rice</span><span className="text-primary font-black">51.9%</span></div>
                                <div className="flex justify-between border-b-2 border-white/10 pb-2"><span>Sugar</span><span className="text-primary font-black">14.8%</span></div>
                                <div className="flex justify-between border-b-2 border-white/10 pb-2"><span>Soya Oil</span><span className="text-primary font-black">10.8%</span></div>
                                <div className="flex justify-between border-b-2 border-white/10 pb-2"><span>Peanuts</span><span className="text-primary font-black">8.4%</span></div>
                                <div className="flex justify-between border-b-2 border-white/10 pb-2"><span>Green Chilli</span><span className="text-primary font-black">6.4%</span></div>
                                <div className="flex justify-between border-b-2 border-white/10 pb-2"><span>Natural Spices</span><span className="text-primary font-black">7.7%</span></div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {[
                                { icon: "favorite", bg: "bg-primary", label: "HEALTHY & TASTY" },
                                { icon: "eco", bg: "bg-secondary", label: "NO ADDED MSGS" },
                                { icon: "bolt", bg: "bg-primary", label: "READY IN 5 MINS" }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white/5 border-2 md:border-4 border-white/10 p-6 md:p-8 flex flex-col items-center text-center shadow-[6px_6px_0px_0px_rgba(255,209,108,1)] md:shadow-[10px_10px_0px_0px_rgba(255,209,108,1)] transform hover:-translate-y-2 transition-transform">
                                    <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full ${item.bg} flex items-center justify-center mb-6 shadow-xl border-2 md:border-4 border-black`}>
                                        <span className="material-symbols-outlined text-3xl md:text-4xl text-black font-black">{item.icon}</span>
                                    </div>
                                    <div className="text-white font-headline text-base md:text-lg font-black uppercase leading-tight">{item.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 6. HOW IT WORKS */}
                <section className="bg-white py-24 md:py-48 border-y-4 md:border-y-8 border-black">
                    <div className="max-w-7xl mx-auto text-center">
                        <h2 className="font-headline text-5xl md:text-9xl font-black text-black uppercase tracking-tighter mb-16 md:mb-24 px-6">4 STEPS TO HEAVEN</h2>
                        
                        {/* Mobile Carousel / Desktop Grid */}
                        <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-4 gap-6 md:gap-12 px-6 pb-12 md:pb-0">
                            {[
                                { step: "1", title: "EMPTY", body: "Pour 60g in a bowl.", icon: "soup_kitchen" },
                                { step: "2", title: "POUR", body: "Add 60ml hot water.", icon: "water_drop" },
                                { step: "3", title: "WAIT", body: "Cover for 5 minutes.", icon: "timer" },
                                { step: "4", title: "EAT", body: "Stir and enjoy!", icon: "restaurant" }
                            ].map((s) => (
                                <div key={s.step} className="min-w-[85vw] md:min-w-0 snap-start snap-always group relative p-8 md:p-12 bg-white border-4 md:border-8 border-black shadow-[8px_8px_0px_0px_#ca2221] md:shadow-[16px_16px_0px_0px_#ca2221] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all">
                                    <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-black text-white font-headline text-3xl md:text-5xl font-black flex items-center justify-center mx-auto mb-6 md:mb-8 border-4 md:border-8 border-white group-hover:bg-[#ca2221] transition-colors shadow-xl md:shadow-2xl">
                                        <span className="material-symbols-outlined text-2xl md:text-4xl">{s.icon}</span>
                                    </div>
                                    <h4 className="font-headline text-3xl md:text-4xl font-black uppercase text-black mb-2 md:mb-4">{s.step}. {s.title}</h4>
                                    <p className="text-black/60 font-body font-bold text-lg md:text-xl leading-tight uppercase tracking-tighter">{s.body}</p>
                                </div>
                            ))}
                        </div>
                        
                        {/* Mobile Swipe Indicator */}
                        <div className="flex justify-center gap-2 md:hidden mt-4">
                            {[0,1,2,3].map(i => (
                                <div key={i} className="w-8 h-2 bg-black/10 border border-black/20"></div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 7. THE CREW */}
                <section className="bg-black py-24 md:py-48 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-16 md:mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                            <div>
                                <h2 className="font-headline text-6xl md:text-[10rem] font-black text-white uppercase leading-[0.8] tracking-tighter mb-4">THE POHAFIX<br/><span className="text-secondary italic">CREW</span></h2>
                                <p className="text-white/40 font-body text-xl md:text-2xl font-bold uppercase tracking-widest text-left">Join the 45k+ healthy rebels.</p>
                            </div>
                            <div className="bg-primary text-black font-black px-8 md:px-10 py-3 md:py-4 uppercase font-headline text-2xl md:text-4xl shadow-[8px_8px_0px_0px_#fff] md:shadow-[12px_12px_0px_0px_#fff]">5.0 STAR</div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white/5 p-8 md:p-10 border-b-4 md:border-b-8 border-secondary flex flex-col justify-between min-h-[300px] md:h-[400px]">
                                <p className="font-body text-2xl md:text-3xl font-bold text-white tracking-tighter leading-tight italic">"Finally an instant food that doesn't feel like a regret. Clean AF."</p>
                                <div className="mt-8 flex items-center gap-4">
                                    <div className="w-12 h-12 md:w-16 md:h-16 bg-primary rounded-full border-2 md:border-4 border-black font-black flex items-center justify-center text-black text-xl md:text-2xl font-headline italic">RV</div>
                                    <div className="font-headline font-black uppercase text-white tracking-tighter text-sm md:text-base">Rohan Varma, IIT Delhi</div>
                                </div>
                            </div>
                            <div className="md:col-span-2 bg-primary p-8 md:p-12 border-b-4 md:border-b-8 border-black flex flex-col justify-between min-h-[300px]">
                                <p className="font-headline text-4xl md:text-5xl font-black text-black uppercase leading-[0.9] tracking-tighter italic">"THE BEST POHA I'VE EVER HAD OUTSIDE INDORE. PERIOD."</p>
                                <div className="mt-8 flex items-center gap-4">
                                    <div className="w-12 h-12 md:w-16 md:h-16 bg-black rounded-full border-2 md:border-4 border-white font-black flex items-center justify-center text-white text-xl md:text-2xl font-headline italic">SK</div>
                                    <div className="font-headline font-black uppercase text-black tracking-tighter text-sm md:text-base">Sanya Kapoor, Creative Lead</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 8. BATCH STATUS */}
                <section className="bg-black py-24 md:py-48 px-6">
                    <div className="max-w-6xl mx-auto bg-[#1a1c1a] border-4 md:border-8 border-white/10 rounded-[2rem] md:rounded-[4rem] overflow-hidden flex flex-col lg:flex-row shadow-[20px_20px_0px_0px_#ffd16c] md:shadow-[40px_40px_0px_0px_#ffd16c]">
                        <div className="p-10 md:p-20 lg:w-3/5 text-center lg:text-left">
                            <div className="inline-block bg-primary text-black font-headline font-black px-4 py-1 md:py-2 uppercase mb-8 md:mb-10 text-lg md:text-xl tracking-full rotate-[-2deg]">LIVE STATUS</div>
                            <h2 className="font-headline text-6xl md:text-[10rem] font-black text-white uppercase leading-[0.7] tracking-tighter mb-10">TODAY'S<br/>BATCH</h2>
                            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mb-12 md:mb-16">
                                <div className="bg-primary p-6 md:p-10 rounded-[1.5rem] md:rounded-[2rem] border-4 md:border-8 border-black shadow-[8px_8px_0px_0px_rgba(255,209,108,0.2)]">
                                    <span className="text-black font-headline text-6xl md:text-8xl font-black tabular-nums">42</span>
                                </div>
                                <span className="text-white/40 font-headline text-2xl md:text-4xl font-bold uppercase tracking-tighter leading-none">PACKS LEFT<br/>IN THIS BATCH</span>
                            </div>
                            <Link to="/order" className="bg-primary text-black font-headline text-3xl md:text-4xl font-black px-12 py-6 md:px-16 md:py-8 border-4 md:border-8 border-black shadow-[8px_8px_0px_0px_#fff] md:shadow-[12px_12px_0px_0px_#fff] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all block text-center uppercase">DIRECT ORDER</Link>
                        </div>
                        <div className="lg:w-2/5 bg-gradient-to-br from-primary/10 to-transparent flex items-center justify-center p-10 md:p-20">
                            <img alt="Pohafix product" className="w-full h-auto drop-shadow-[0_0_100px_rgba(255,209,108,0.3)] hover:scale-110 transition-transform duration-1000" src="/synnc-pohafix-box.png"/>
                        </div>
                    </div>
                </section>

                {/* 9. FINAL CTA */}
                <section className="bg-black py-48 md:py-72 px-6 text-center" id="join">
                    <h2 className="font-headline text-6xl md:text-[15rem] font-black text-white uppercase leading-[0.7] tracking-tighter mb-12 md:mb-20">DON'T BE<br/><span className="text-primary italic">A SLAVE.</span></h2>
                    <p className="font-headline text-2xl md:text-5xl text-white/40 font-black uppercase max-w-4xl mx-auto mb-16 md:mb-20 leading-none tracking-tighter">STOP EATING GARBAGE PACKAGED FOOD. JOIN THE REVOLUTION TODAY.</p>
                    <Link to="/order" className="bg-primary text-black font-black text-3xl md:text-7xl px-12 py-6 md:px-24 md:py-10 border-4 md:border-8 border-black shadow-[8px_8px_0px_0px_#e53935] md:shadow-[20px_20px_0px_0px_#e53935] hover:shadow-none hover:translate-x-3 hover:translate-y-3 transition-all uppercase font-headline italic">START NOW</Link>
                </section>
            </main>

            {/* Polish Footer */}
            <footer className="bg-black border-t-8 border-white/20 py-32 px-10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20">
                    <div className="md:col-span-2">
                         <Link to="/">
                             <img src="/logo.png" alt="Pohafix Logo" className="h-20 w-auto mb-10" />
                         </Link>
                         <p className="text-white/40 font-headline font-black uppercase text-xl max-w-md tracking-tighter">Reinventing healthy eating for the modern hustler. No compromises. No lies.</p>
                    </div>
                    <div className="space-y-6">
                        <h5 className="text-white font-black text-2xl uppercase font-headline italic">QUICK LINKS</h5>
                        <ul className="text-white/40 font-body text-xl font-bold uppercase space-y-2">
                             <li><Link to="/" className="hover:text-primary transition-colors">HOME</Link></li>
                             <li><Link to="/blog" className="hover:text-primary transition-colors">POHA STORY</Link></li>
                             <li><Link to="/contact" className="hover:text-primary transition-colors">CONTACT US</Link></li>
                             <li><Link to="/privacy" className="hover:text-primary transition-colors">PRIVACY POLICY</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-6">
                        <h5 className="text-white font-black text-2xl uppercase font-headline italic">HQ</h5>
                        <p className="text-white/40 font-body text-xl font-bold uppercase leading-tight">SYNNC FOODS<br/>DHAR, MP<br/>INDIA - 454335</p>
                    </div>
                    <div className="space-y-6 text-right">
                        <h5 className="text-white font-black text-2xl uppercase font-headline italic">CONTACT</h5>
                        <p className="text-white/40 font-body text-xl font-bold uppercase leading-tight">POHAFIX@GMAIL.COM<br/>+91 9754684978</p>
                        <div className="flex gap-4 justify-end pt-4">
                             <a href="https://www.instagram.com/pohafix/" className="bg-primary p-2 text-black hover:bg-white transition-colors"><span className="material-symbols-outlined">link</span></a>
                        </div>
                    </div>
                </div>
                <div className="mt-32 pt-10 border-t border-white/5 text-center">
                     <p className="text-white/20 font-headline font-black uppercase text-sm tracking-[1em]">FSSAI: 21425990000996</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;
