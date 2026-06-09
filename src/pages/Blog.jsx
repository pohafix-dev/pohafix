import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogs } from '../data/blogs';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Blog = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const featuredBlog = blogs[0];
    const secondaryBlogs = blogs.slice(1, 5);

    return (
        <div className="bg-surface text-on-surface font-body selection:bg-secondary-container selection:text-on-secondary-container min-h-screen">
            <Helmet>
                <title>The Malwa Journal | PohaFix Blog</title>
                <meta name="description" content="Discover the stories of taste, tradition, and the streets with The Malwa Journal. Deep dives into Indori Poha, spices, and the 5-minute breakfast ritual." />
            </Helmet>
            <Header />

            <main className="max-w-screen-2xl mx-auto px-6 pt-24 md:pt-32 pb-24">
                {/* Page Header */}
                <header className="mb-12 relative overflow-hidden pb-4">
                    <div className="flex flex-col md:flex-row md:items-end gap-2 md:gap-6 relative z-10">
                        <h1 className="text-5xl md:text-8xl font-headline font-black tracking-tighter text-primary uppercase leading-none">The Malwa Journal</h1>
                        <div className="h-px flex-1 bg-outline-variant/30 mb-2 md:mb-4 hidden md:block"></div>
                        <span className="text-secondary font-headline font-bold text-lg md:text-xl uppercase tracking-widest whitespace-nowrap mb-1 md:mb-3">Issue No. 04</span>
                    </div>
                    <div className="h-px w-full bg-outline-variant/30 mt-2 md:mt-0 md:hidden relative z-10"></div>
                    <div className="absolute top-0 right-0 opacity-[0.07] pointer-events-none select-none -translate-y-4">
                        <span className="text-9xl md:text-[14rem] font-headline font-black tracking-tighter">सत्य</span>
                    </div>
                </header>

                {/* Hero Section - Clean Typographic Editorial Banner */}
                <Link to={`/blog/${featuredBlog.slug}`} className="block relative group cursor-pointer mb-24 overflow-hidden rounded-2xl border-4 border-double border-primary/20 bg-[#fbf8f2] hover:bg-[#f6f1e5] p-8 md:p-16 transition-colors shadow-lg">
                    <div className="max-w-4xl">
                        <div className="inline-block bg-primary text-white px-4 py-1 text-xs font-label font-bold uppercase tracking-widest mb-6">Featured Narrative</div>
                        <h2 className="text-4xl md:text-7xl font-headline font-black text-black tracking-tighter leading-[0.95] mb-6 group-hover:text-primary transition-colors uppercase">
                            {featuredBlog.title}
                        </h2>
                        <p className="text-xl md:text-2xl text-stone-700 font-body max-w-2xl leading-relaxed">
                            {featuredBlog.summary}
                        </p>
                    </div>
                    <div className="absolute top-12 right-12 flex flex-col items-center hidden md:flex">
                        <span className="text-stone-400 [writing-mode:vertical-rl] font-headline font-bold text-sm tracking-[0.5em] opacity-80 uppercase">EST. 1952</span>
                        <div className="w-px h-24 bg-stone-300 mt-4"></div>
                    </div>
                </Link>

                {/* Editorial Grid - Typographic Newspaper Columns */}
                <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    {/* Article 1: Typographic Column Card */}
                    <article className="md:col-span-4 flex flex-col">
                        <Link to={`/blog/${secondaryBlogs[0].slug}`} className="bg-[#fbf8f2] hover:bg-[#f6f1e5] p-8 flex-1 relative overflow-hidden group border-2 border-dashed border-primary/10 rounded-xl hover:shadow-2xl transition-all">
                            <span className="text-primary font-label text-xs font-bold uppercase tracking-[0.2em] block mb-4">{secondaryBlogs[0].category}</span>
                            <h3 className="text-3xl font-headline font-extrabold tracking-tighter leading-tight mb-4 group-hover:text-primary transition-colors uppercase">
                                {secondaryBlogs[0].title}
                            </h3>
                            <p className="text-stone-600 font-body text-base leading-relaxed mb-8">
                                {secondaryBlogs[0].summary}
                            </p>
                            <div className="flex items-center gap-2 group/btn mt-auto">
                                <span className="text-sm font-bold uppercase font-label">Read Journal</span>
                                <span className="material-symbols-outlined text-primary text-lg transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
                            </div>
                            <div className="absolute -right-6 top-1/4 opacity-[0.03] rotate-90 select-none pointer-events-none">
                                <span className="text-7xl font-headline font-black uppercase">heritage</span>
                            </div>
                        </Link>
                    </article>

                    {/* Middle Column */}
                    <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Article 2: Grand Horizontal Banner (Typographic) */}
                        <article className="md:col-span-2 group">
                            <Link to={`/blog/${secondaryBlogs[1].slug}`} className="bg-[#fbf8f2] hover:bg-[#f6f1e5] flex flex-col overflow-hidden relative rounded-xl border-2 border-double border-primary/25 hover:shadow-2xl transition-all">
                                <div className="p-10 flex flex-col justify-center bg-[#fbf8f2] group-hover:bg-[#f6f1e5] transition-colors">
                                    <div className="absolute top-0 right-0 p-6">
                                        <span className="text-primary/10 text-5xl font-headline font-black">02</span>
                                    </div>
                                    <span className="text-secondary font-label text-xs font-bold uppercase tracking-[0.2em] mb-4">{secondaryBlogs[1].category}</span>
                                    <h3 className="text-3xl font-headline font-extrabold tracking-tighter leading-tight mb-4 group-hover:text-primary transition-colors uppercase max-w-2xl">
                                        {secondaryBlogs[1].title}
                                    </h3>
                                    <p className="text-stone-600 font-body text-base leading-relaxed mb-8 max-w-3xl">
                                        {secondaryBlogs[1].summary}
                                    </p>
                                    <div className="p-4 border border-primary/10 rounded-md bg-white/50 italic text-primary text-xs font-bold font-label max-w-xl relative">
                                        "The steam is the first ingredient of authenticity." — Master Chef of Chhappan
                                        <div className="absolute -bottom-2 -right-2 bg-secondary text-white px-2 py-0.5 rounded text-[8px] uppercase tracking-tighter">Kitchen Note</div>
                                    </div>
                                </div>
                            </Link>
                        </article>

                        {/* Article 3: Pure Typographic Card */}
                        <article className="group">
                            <Link to={`/blog/${secondaryBlogs[2].slug}`} className="bg-white hover:bg-stone-50 p-8 rounded-xl shadow-sm border border-outline-variant/10 hover:shadow-xl transition-all block h-full">
                                <span className="text-xs font-label font-bold text-secondary uppercase tracking-widest block mb-4">{secondaryBlogs[2].category}</span>
                                <h3 className="text-2xl font-headline font-bold tracking-tight mb-4 group-hover:text-primary transition-colors uppercase">
                                    {secondaryBlogs[2].title}
                                </h3>
                                <p className="text-stone-600 text-sm font-body leading-relaxed">
                                    {secondaryBlogs[2].summary}
                                </p>
                            </Link>
                        </article>

                        {/* Article 4: Pure Typographic Card */}
                        <article className="group">
                            <Link to={`/blog/${secondaryBlogs[3].slug}`} className="bg-white hover:bg-stone-50 p-8 flex flex-col h-full relative rounded-xl hover:shadow-xl transition-all border border-outline-variant/10">
                                <span className="text-primary font-label text-xs font-bold uppercase tracking-[0.2em] block mb-4">{secondaryBlogs[3].category}</span>
                                <h3 className="text-2xl font-headline font-bold tracking-tight mb-4 group-hover:text-primary transition-colors uppercase">
                                    {secondaryBlogs[3].title}
                                </h3>
                                <p className="text-stone-600 text-sm font-body leading-relaxed mb-6">
                                    {secondaryBlogs[3].summary}
                                </p>
                                <div className="flex gap-1 mt-auto">
                                    <span className="px-2 py-1 bg-primary text-white text-[9px] font-bold uppercase tracking-tighter rounded">New Series</span>
                                </div>
                                <div className="absolute bottom-6 right-6 opacity-[0.05] pointer-events-none">
                                    <span className="font-headline text-5xl font-black text-primary uppercase">स्वाद</span>
                                </div>
                            </Link>
                        </article>
                    </div>
                </section>

                {/* Additional Typographic Newspaper Articles */}
                <section className="mt-24 pt-16 border-t-4 border-double border-primary/20">
                    <h2 className="text-3xl font-headline font-black uppercase tracking-tight mb-12 text-center text-primary">More Dispatches from the Field</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogs.slice(5).map((blog) => (
                            <article key={blog.id} className="group">
                                <Link to={`/blog/${blog.slug}`} className="bg-white hover:bg-stone-50 p-8 rounded-xl shadow-sm border border-outline-variant/10 hover:shadow-xl transition-all block h-full flex flex-col justify-between">
                                    <div>
                                        <div className="flex justify-between items-center mb-4">
                                            <span className="text-[10px] font-label font-bold text-secondary uppercase tracking-widest">{blog.category}</span>
                                            <span className="text-[9px] font-label text-stone-400 uppercase font-medium">{blog.readTime} Read</span>
                                        </div>
                                        <h3 className="text-xl font-headline font-bold tracking-tight mb-4 group-hover:text-primary transition-colors uppercase leading-snug">
                                            {blog.title}
                                        </h3>
                                        <p className="text-stone-600 text-xs font-body leading-relaxed mb-6">
                                            {blog.summary}
                                        </p>
                                    </div>
                                    <div className="text-[10px] font-label font-bold uppercase text-primary tracking-wider group-hover:underline">
                                        Read Dispatch &rarr;
                                    </div>
                                </Link>
                            </article>
                        ))}
                    </div>
                </section>

                {/* Delivery Locations SEO Section */}
                <section className="mt-24 pt-16 border-t-2 border-dashed border-primary/20">
                    <h2 className="text-3xl font-headline font-black uppercase tracking-tight mb-8 text-center text-primary">Fast Delivery Across India</h2>
                    <p className="text-center text-stone-600 max-w-xl mx-auto mb-10 text-sm font-medium">
                        We dispatch fresh, preservative-free boxes directly from our Malwa facilities to homes, dorms, and offices in all top metro regions.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                        <Link to="/instant-poha-indore" className="bg-[#fbf8f2] hover:bg-[#f6f1e5] text-primary border border-primary/10 px-6 py-3 rounded-lg font-headline font-bold text-sm uppercase hover:scale-105 transition-all">Indore</Link>
                        <Link to="/instant-poha-mumbai" className="bg-[#fbf8f2] hover:bg-[#f6f1e5] text-primary border border-primary/10 px-6 py-3 rounded-lg font-headline font-bold text-sm uppercase hover:scale-105 transition-all">Mumbai</Link>
                        <Link to="/instant-poha-delhi" className="bg-[#fbf8f2] hover:bg-[#f6f1e5] text-primary border border-primary/10 px-6 py-3 rounded-lg font-headline font-bold text-sm uppercase hover:scale-105 transition-all">Delhi NCR</Link>
                        <Link to="/instant-poha-bangalore" className="bg-[#fbf8f2] hover:bg-[#f6f1e5] text-primary border border-primary/10 px-6 py-3 rounded-lg font-headline font-bold text-sm uppercase hover:scale-105 transition-all">Bangalore</Link>
                        <Link to="/instant-poha-hyderabad" className="bg-[#fbf8f2] hover:bg-[#f6f1e5] text-primary border border-primary/10 px-6 py-3 rounded-lg font-headline font-bold text-sm uppercase hover:scale-105 transition-all">Hyderabad</Link>
                        <Link to="/instant-poha-pune" className="bg-[#fbf8f2] hover:bg-[#f6f1e5] text-primary border border-primary/10 px-6 py-3 rounded-lg font-headline font-bold text-sm uppercase hover:scale-105 transition-all">Pune</Link>
                        <Link to="/instant-poha-raipur" className="bg-[#fbf8f2] hover:bg-[#f6f1e5] text-primary border border-primary/10 px-6 py-3 rounded-lg font-headline font-bold text-sm uppercase hover:scale-105 transition-all">Raipur</Link>
                        <Link to="/instant-poha-bhopal" className="bg-[#fbf8f2] hover:bg-[#f6f1e5] text-primary border border-primary/10 px-6 py-3 rounded-lg font-headline font-bold text-sm uppercase hover:scale-105 transition-all">Bhopal</Link>
                        <Link to="/instant-poha-kolkata" className="bg-[#fbf8f2] hover:bg-[#f6f1e5] text-primary border border-primary/10 px-6 py-3 rounded-lg font-headline font-bold text-sm uppercase hover:scale-105 transition-all">Kolkata</Link>
                        <Link to="/instant-poha-chennai" className="bg-[#fbf8f2] hover:bg-[#f6f1e5] text-primary border border-primary/10 px-6 py-3 rounded-lg font-headline font-bold text-sm uppercase hover:scale-105 transition-all">Chennai</Link>
                        <Link to="/instant-poha-ahmedabad" className="bg-[#fbf8f2] hover:bg-[#f6f1e5] text-primary border border-primary/10 px-6 py-3 rounded-lg font-headline font-bold text-sm uppercase hover:scale-105 transition-all">Ahmedabad</Link>
                        <Link to="/instant-poha-surat" className="bg-[#fbf8f2] hover:bg-[#f6f1e5] text-primary border border-primary/10 px-6 py-3 rounded-lg font-headline font-bold text-sm uppercase hover:scale-105 transition-all">Surat</Link>
                        <Link to="/instant-poha-nagpur" className="bg-[#fbf8f2] hover:bg-[#f6f1e5] text-primary border border-primary/10 px-6 py-3 rounded-lg font-headline font-bold text-sm uppercase hover:scale-105 transition-all">Nagpur</Link>
                        <Link to="/instant-poha-jaipur" className="bg-[#fbf8f2] hover:bg-[#f6f1e5] text-primary border border-primary/10 px-6 py-3 rounded-lg font-headline font-bold text-sm uppercase hover:scale-105 transition-all">Jaipur</Link>
                        <Link to="/instant-poha-lucknow" className="bg-[#fbf8f2] hover:bg-[#f6f1e5] text-primary border border-primary/10 px-6 py-3 rounded-lg font-headline font-bold text-sm uppercase hover:scale-105 transition-all">Lucknow</Link>
                        <Link to="/instant-poha-chhattisgarh" className="bg-[#fbf8f2] hover:bg-[#f6f1e5] text-primary border border-primary/10 px-6 py-3 rounded-lg font-headline font-bold text-sm uppercase hover:scale-105 transition-all">Chhattisgarh State</Link>
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

            <Footer />

            {/* Newspaper Texture Overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] mix-blend-multiply z-[60]"></div>
        </div>
    );
};

export default Blog;


