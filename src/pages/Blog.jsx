import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { blogs } from '../data/blogs';

const Blog = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-black min-h-screen text-white font-body selection:bg-primary selection:text-black overflow-x-hidden">
             {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-[300] bg-primary transition-all duration-500 flex flex-col items-center justify-center p-10 ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                <button 
                    onClick={() => setIsMenuOpen(false)}
                    className="absolute top-10 right-10 text-black p-4 border-4 border-black"
                >
                    <span className="material-symbols-outlined text-4xl block">close</span>
                </button>
                <div className="flex flex-col gap-8 text-center">
                    <Link onClick={() => setIsMenuOpen(false)} to="/" className="font-headline text-6xl font-black text-black uppercase italic hover:translate-x-4 transition-transform">HOME</Link>
                    <Link onClick={() => setIsMenuOpen(false)} to="/blog" className="font-headline text-6xl font-black text-black uppercase italic hover:translate-x-4 transition-transform underline decoration-white">POHA STORY</Link>
                    <Link onClick={() => setIsMenuOpen(false)} to="/order" className="bg-black text-white px-10 py-5 font-headline text-4xl font-black mt-10 shadow-[8px_8px_0px_0px_#fff]">ORDER NOW</Link>
                </div>
            </div>

            {/* Nav */}
            <header className="p-4 md:p-6 border-b-4 md:border-b-8 border-black bg-black flex justify-between items-center sticky top-0 z-[100]">
                <Link to="/">
                    <img src="/logo.png" alt="Pohafix Logo" className="h-10 md:h-12 w-auto" />
                </Link>
                <div className="flex items-center gap-4">
                    <Link to="/order" className="hidden sm:block bg-primary text-black font-black px-6 py-2 border-4 border-black uppercase font-headline text-sm">DIRECT ORDER</Link>
                    <button 
                        onClick={() => setIsMenuOpen(true)}
                        className="md:hidden bg-secondary text-black p-2 border-2 border-black"
                    >
                        <span className="material-symbols-outlined block">menu</span>
                    </button>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 md:px-6 py-12 lg:py-32">
                <div className="mb-16 md:mb-24 text-center lg:text-left">
                    <h1 className="font-headline text-6xl md:text-[12rem] font-black text-white uppercase leading-[0.8] tracking-tighter mb-8 italic">POHA<br/><span className="text-secondary">STORY</span></h1>
                    <p className="text-white/40 font-headline text-xl md:text-3xl font-black uppercase tracking-widest max-w-3xl lg:mx-0 mx-auto leading-none">THE RAW TRUTH ABOUT THE FOOD REVOLUTION.</p>
                </div>

                {/* Featured Blog */}
                <div className="mb-20 md:mb-32">
                    <Link to={`/blog/${blogs[0].slug}`} className="group block relative bg-primary p-1 md:p-12 border-4 md:border-8 border-black shadow-[12px_12px_0px_0px_#ca2221] md:shadow-[24px_24px_0px_0px_#ca2221] hover:scale-[1.01] transition-transform">
                        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 bg-black p-6 md:p-10 items-center">
                            <div className="w-full lg:w-1/2 overflow-hidden h-64 md:h-96 relative border-4 md:border-8 border-white/10">
                                <img src={blogs[0].image} alt={blogs[0].title} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700" />
                            </div>
                            <div className="w-full lg:w-1/2 space-y-4 md:space-y-6 text-left">
                                <div className="inline-block bg-secondary text-black font-black px-4 py-1 uppercase text-[10px] md:text-sm">{blogs[0].category}</div>
                                <h2 className="font-headline text-3xl md:text-6xl font-black text-white uppercase leading-[0.9] tracking-tighter group-hover:text-primary transition-colors">{blogs[0].title}</h2>
                                <p className="text-white/40 text-lg md:text-xl font-bold uppercase leading-tight line-clamp-3">{blogs[0].summary}</p>
                                <div className="pt-4 md:pt-6 font-headline font-black text-primary text-xl md:text-2xl uppercase italic flex items-center gap-4">
                                    READ THE TRUTH <span className="material-symbols-outlined">arrow_forward</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {blogs.slice(1).map((post) => (
                        <Link key={post.id} to={`/blog/${post.slug}`} className="group bg-white/5 p-1 border-2 md:border-4 border-white/10 hover:border-white transition-all shadow-[8px_8px_0px_0px_rgba(255,255,255,0.05)] md:shadow-[12px_12px_0px_0px_rgba(255,255,255,0.05)] hover:shadow-none hover:translate-x-2 hover:translate-y-2">
                             <div className="bg-black p-6 md:p-8 h-full flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between items-center mb-6">
                                        <span className="text-secondary font-black uppercase text-xs md:text-sm tracking-widest">{post.category}</span>
                                        <span className="text-white/20 font-black uppercase text-[10px] md:text-xs">{post.readTime}</span>
                                    </div>
                                    <h3 className="font-headline text-2xl md:text-3xl font-black text-white uppercase leading-tight mb-4 group-hover:text-primary transition-colors">{post.title}</h3>
                                    <p className="text-white/40 font-bold uppercase tracking-tight leading-snug line-clamp-3 text-xs md:text-sm">{post.summary}</p>
                                </div>
                                <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center">
                                    <span className="text-white/20 font-black text-[10px] md:text-xs uppercase tracking-widest">{post.date}</span>
                                    <span className="material-symbols-outlined text-primary">add_circle</span>
                                </div>
                             </div>
                        </Link>
                    ))}
                </div>
            </main>

            {/* Newsletter CTA */}
            <section className="bg-primary py-24 md:py-32 border-y-4 md:border-y-8 border-black">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="font-headline text-5xl md:text-8xl font-black text-black uppercase leading-[0.8] tracking-tighter mb-10">NEVER MISS<br/>A REBEL'S UPDATE</h2>
                    <form className="flex flex-col md:flex-row gap-4 mt-8 md:mt-12">
                        <input type="email" placeholder="YOUR EMAIL" className="flex-1 bg-white border-4 md:border-8 border-black p-4 md:p-6 font-headline font-black uppercase text-xl md:text-2xl outline-none placeholder:text-black/30 text-black" />
                        <button className="bg-black text-white font-headline font-black text-2xl md:text-3xl px-12 py-5 md:py-6 shadow-[8px_8px_0px_0px_#fff] md:shadow-[10px_10px_0px_0px_#fff] hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all">JOIN NOW</button>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black py-16 md:py-20 border-t-4 md:border-t-8 border-white/10 text-center px-6">
                 <Link to="/">
                    <img src="/logo.png" alt="Pohafix Logo" className="h-10 md:h-12 mx-auto mb-10" />
                 </Link>
                 <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 font-headline font-black text-white/40 uppercase tracking-widest mb-10 text-sm">
                     <Link to="/" className="hover:text-white">BACK TO HOME</Link>
                     <Link to="/contact" className="hover:text-white">CONTACT</Link>
                     <Link to="/privacy" className="hover:text-white">PRIVACY</Link>
                 </div>
                 <p className="text-white/10 font-headline font-black uppercase text-[10px] md:text-xs tracking-[1em]">SYNNNC FOODS 2024</p>
            </footer>
        </div>
    );
};

export default Blog;
