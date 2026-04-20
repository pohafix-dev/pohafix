import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { blogs } from '../data/blogs';
import Header from '../components/Header';

const Blog = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const featuredBlog = blogs[0];
    const secondaryBlogs = blogs.slice(1, 5);

    return (
        <div className="bg-surface text-on-surface font-body selection:bg-secondary-container selection:text-on-secondary-container min-h-screen">
            <Header />

            <main className="max-w-screen-2xl mx-auto px-6 pt-12 pb-24">
                {/* Page Header */}
                <header className="mb-12 relative">
                    <div className="flex items-baseline gap-4">
                        <h1 className="text-6xl md:text-8xl font-headline font-black tracking-tighter text-primary uppercase leading-none">The Malwa Journal</h1>
                        <span className="text-secondary font-headline font-bold text-xl uppercase tracking-widest hidden md:block">Issue No. 04</span>
                    </div>
                    <div className="h-px w-full bg-outline-variant/30 mt-6"></div>
                    <div className="absolute -top-10 right-0 opacity-10 pointer-events-none select-none">
                        <span className="text-9xl font-headline font-black tracking-tighter">सत्य</span>
                    </div>
                </header>

                {/* Hero Section */}
                <Link to={`/blog/${featuredBlog.slug}`} className="block relative group cursor-pointer mb-24 overflow-hidden rounded-lg shadow-2xl">
                    <div className="aspect-[16/9] md:aspect-[21/9] w-full relative overflow-hidden bg-on-background">
                        <img 
                            src={featuredBlog.image} 
                            alt={featuredBlog.title} 
                            className="w-full h-full object-cover opacity-80 mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-105 transition-all duration-700" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                        <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-4xl">
                            <div className="inline-block bg-secondary-container text-on-secondary-container px-4 py-1 text-xs font-label font-bold uppercase tracking-widest mb-4">Featured Narrative</div>
                            <h2 className="text-4xl md:text-7xl font-headline font-extrabold text-white tracking-tighter leading-none mb-6 group-hover:text-[#fec330] transition-colors">
                                {featuredBlog.title}
                            </h2>
                            <p className="text-xl md:text-2xl text-white/90 font-body max-w-2xl leading-relaxed line-clamp-2">
                                {featuredBlog.summary}
                            </p>
                        </div>
                    </div>
                    <div className="absolute top-12 right-12 flex flex-col items-center">
                        <span className="text-white [writing-mode:vertical-rl] font-headline font-bold text-sm tracking-[0.5em] opacity-80 uppercase">EST. 2024</span>
                        <div className="w-px h-24 bg-white/40 mt-4"></div>
                    </div>
                </Link>

                {/* Editorial Grid */}
                <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    {/* Article 1: Large vertical card (Using blogs[1]) */}
                    {secondaryBlogs[0] && (
                        <article className="md:col-span-4 flex flex-col">
                            <Link to={`/blog/${secondaryBlogs[0].slug}`} className="bg-surface-container-low p-1 flex-1 relative overflow-hidden group border border-outline-variant/10 rounded-xl hover:shadow-2xl transition-all">
                                <div className="aspect-[4/5] overflow-hidden rounded-t-lg">
                                    <img 
                                        src={secondaryBlogs[0].image} 
                                        alt={secondaryBlogs[0].title}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                                    />
                                </div>
                                <div className="p-8">
                                    <span className="text-primary font-label text-xs font-bold uppercase tracking-[0.2em] block mb-4">{secondaryBlogs[0].category}</span>
                                    <h3 className="text-3xl font-headline font-extrabold tracking-tighter leading-tight mb-4 group-hover:text-primary transition-colors line-clamp-3">
                                        {secondaryBlogs[0].title}
                                    </h3>
                                    <p className="text-on-surface-variant font-body text-base leading-relaxed mb-6 line-clamp-3">
                                        {secondaryBlogs[0].summary}
                                    </p>
                                    <div className="flex items-center gap-2 group/btn">
                                        <span className="text-sm font-bold uppercase font-label">Read Journal</span>
                                        <span className="material-symbols-outlined text-primary text-lg transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
                                    </div>
                                </div>
                                <div className="absolute -right-6 top-1/4 opacity-5 rotate-90 select-none">
                                    <span className="text-7xl font-headline font-black uppercase">{secondaryBlogs[0].category}</span>
                                </div>
                            </Link>
                        </article>
                    )}

                    {/* Middle Column */}
                    <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Article 2: Horizontal Card (Using blogs[2]) */}
                        {secondaryBlogs[1] && (
                            <article className="md:col-span-2 group">
                                <Link to={`/blog/${secondaryBlogs[1].slug}`} className="bg-surface-container-high flex flex-col md:flex-row overflow-hidden relative rounded-xl border border-outline-variant/10 hover:shadow-2xl transition-all">
                                    <div className="md:w-1/2 aspect-video md:aspect-auto overflow-hidden">
                                        <img 
                                            src={secondaryBlogs[1].image} 
                                            alt={secondaryBlogs[1].title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                                        />
                                    </div>
                                    <div className="md:w-1/2 p-10 flex flex-col justify-center bg-surface-container-high">
                                        <div className="absolute top-0 right-0 p-4">
                                            <span className="text-primary/10 text-4xl font-headline font-black">02</span>
                                        </div>
                                        <span className="text-secondary font-label text-xs font-bold uppercase tracking-[0.2em] mb-4">{secondaryBlogs[1].category}</span>
                                        <h3 className="text-3xl font-headline font-extrabold tracking-tighter leading-tight mb-4 group-hover:text-primary transition-colors">
                                            {secondaryBlogs[1].title}
                                        </h3>
                                        <p className="text-on-surface-variant font-body text-base leading-relaxed mb-8 line-clamp-3">
                                            {secondaryBlogs[1].summary}
                                        </p>
                                        <div className="p-4 border border-outline-variant/15 rounded-md bg-background/50 italic text-primary text-xs font-bold font-label relative">
                                            "A deeper look into the metabolic cost of modern snacking."
                                            <div className="absolute -bottom-2 -right-2 bg-secondary text-white px-2 py-0.5 rounded text-[8px] uppercase tracking-tighter">Editor's Note</div>
                                        </div>
                                    </div>
                                </Link>
                            </article>
                        )}

                        {/* Article 3: Lifestyle (Using blogs[3]) */}
                        {secondaryBlogs[2] && (
                            <article className="group">
                                <Link to={`/blog/${secondaryBlogs[2].slug}`} className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/5 hover:shadow-xl transition-all block h-full">
                                    <div className="aspect-square mb-6 overflow-hidden bg-surface-container-highest flex items-center justify-center p-8 rounded-lg">
                                        <img 
                                            src={secondaryBlogs[2].image} 
                                            alt={secondaryBlogs[2].title}
                                            className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700" 
                                        />
                                    </div>
                                    <h3 className="text-2xl font-headline font-bold tracking-tight mb-2 group-hover:text-primary transition-colors">
                                        {secondaryBlogs[2].title}
                                    </h3>
                                    <p className="text-on-surface-variant text-sm font-body mb-4 line-clamp-3">
                                        {secondaryBlogs[2].summary}
                                    </p>
                                    <span className="text-xs font-label font-bold text-secondary uppercase tracking-widest">{secondaryBlogs[2].category}</span>
                                </Link>
                            </article>
                        )}

                        {/* Article 4: Chronicles (Using blogs[4]) */}
                        {secondaryBlogs[3] && (
                            <article className="group">
                                <Link to={`/blog/${secondaryBlogs[3].slug}`} className="bg-surface-container-highest p-1 flex flex-col h-full relative rounded-xl overflow-hidden hover:shadow-xl transition-all border border-outline-variant/10">
                                    <div className="aspect-square overflow-hidden mb-6">
                                        <img 
                                            src={secondaryBlogs[3].image} 
                                            alt={secondaryBlogs[3].title}
                                            className="w-full h-full object-cover brightness-95 group-hover:brightness-105 transition-all" 
                                        />
                                    </div>
                                    <div className="px-6 pb-10">
                                        <h3 className="text-2xl font-headline font-bold tracking-tight mb-2 group-hover:text-primary transition-colors line-clamp-3">
                                            {secondaryBlogs[3].title}
                                        </h3>
                                        <p className="text-on-surface-variant text-sm font-body mb-4 line-clamp-3">
                                            {secondaryBlogs[3].summary}
                                        </p>
                                        <div className="flex gap-1">
                                            <span className="px-2 py-1 bg-primary text-on-primary text-[10px] font-bold uppercase tracking-tighter rounded">Deep Dive</span>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-6 right-6 opacity-10">
                                        <span className="font-headline text-5xl font-black text-primary uppercase">स्वाद</span>
                                    </div>
                                </Link>
                            </article>
                        )}
                    </div>
                </section>

                {/* Newsletter Section */}
                <section className="mt-32 bg-primary py-24 px-8 relative overflow-hidden text-center rounded-3xl shadow-2xl">
                    <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <span className="text-on-primary font-label text-sm font-bold uppercase tracking-[0.4em] mb-6 block">Join The Dispatch</span>
                        <h2 className="text-5xl md:text-7xl font-headline font-black text-on-primary tracking-tighter leading-none mb-8 italic">The Weekly Dhaba</h2>
                        <p className="text-primary-fixed-dim text-lg mb-12 font-body font-medium">Stories of taste, tradition, and the streets delivered to your inbox every Sunday morning. No fluff, just soul.</p>
                        <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                            <input 
                                className="bg-transparent border-b-2 border-white/30 text-on-primary placeholder:text-white/50 focus:border-secondary-container transition-colors p-4 flex-1 outline-none font-label font-bold text-xl" 
                                placeholder="Your morning email..." 
                                type="email"
                            />
                            <button className="bg-secondary-container text-black px-8 py-4 font-label font-black uppercase tracking-widest hover:bg-white transition-colors duration-300 rounded shadow-lg">Sign Up</button>
                        </form>
                    </div>
                    <div className="absolute -bottom-10 -left-10 md:left-20 opacity-20 transform -rotate-12 pointer-events-none">
                        <span className="text-9xl font-headline font-black text-white uppercase">ताज़ा</span>
                    </div>
                </section>
            </main>

            {/* Newspaper Texture Overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] mix-blend-multiply z-[60]"></div>
        </div>
    );
};

export default Blog;

