import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogs } from '../data/blogs';
import Header from '../components/Header';

const BlogPost = () => {
    const { slug } = useParams();
    const [scrollProgress, setScrollProgress] = useState(0);
    const post = blogs.find(b => b.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
        const handleScroll = () => {
            const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolledHeight = window.scrollY;
            setScrollProgress((scrolledHeight / documentHeight) * 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [slug]);

    if (!post) {
        return (
            <div className="bg-surface min-h-screen text-on-surface flex flex-col items-center justify-center p-6 text-center">
                <h1 className="font-headline text-5xl md:text-6xl font-black mb-8 tracking-tighter text-primary uppercase">JOURNAL NOT FOUND</h1>
                <Link to="/blog" className="bg-primary text-white font-black px-10 py-4 uppercase font-headline rounded-md shadow-lg">BACK TO JOURNAL</Link>
            </div>
        );
    }

    return (
        <div className="bg-surface text-on-surface font-body selection:bg-secondary-container selection:text-on-secondary-container min-h-screen relative">
            <Header />

            {/* Reading Progress Bar */}
            <div className="fixed top-0 left-0 h-1 bg-primary z-[200] transition-all duration-100" style={{ width: `${scrollProgress}%` }}></div>

            <main className="max-w-screen-2xl mx-auto px-6 pt-24 md:pt-32 pb-24 relative z-10">
                {/* Editorial Header */}
                <div className="max-w-4xl mx-auto mb-16">
                    <div className="flex items-center gap-4 mb-8">
                        <Link to="/blog" className="text-primary font-label text-xs font-bold uppercase tracking-widest flex items-center gap-2 group">
                            <span className="material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform">arrow_back</span>
                            Back to Journal
                        </Link>
                        <span className="h-px flex-1 bg-outline-variant/30"></span>
                        <span className="text-secondary font-headline font-bold text-xs uppercase tracking-widest whitespace-nowrap italic">{post.category}</span>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-headline font-black text-on-surface tracking-tighter leading-[0.9] mb-12 uppercase">
                        {post.title}
                    </h1>

                    <div className="flex items-center justify-between py-8 border-y border-outline-variant/20">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-headline font-black text-lg">
                                {post.author.charAt(0)}
                            </div>
                            <div>
                                <p className="font-headline font-bold text-sm uppercase tracking-tight">{post.author}</p>
                                <p className="text-on-surface-variant text-[10px] uppercase font-bold tracking-widest">{post.date}</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-[10px] font-black uppercase tracking-widest text-secondary mb-1">Duration</p>
                            <p className="font-headline font-bold text-sm uppercase">{post.readTime} Deep Read</p>
                        </div>
                    </div>
                </div>

                {/* Hero Asset */}
                <div className="max-w-5xl mx-auto mb-16 relative group">
                    <div className="aspect-video overflow-hidden rounded-2xl shadow-3xl bg-on-background relative">
                        <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    </div>
                    {/* Floating Accent */}
                    <div className="absolute -bottom-6 -right-6 bg-secondary-container text-on-secondary-container px-6 py-4 rounded-xl font-headline font-black shadow-2xl border-2 border-white transform rotate-3 hidden md:block">
                        ISSUE NO. 04 / EXCLUSIVE
                    </div>
                </div>

                {/* Content Area */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 max-w-6xl mx-auto">
                    {/* Left Rail / Metadata */}
                    <aside className="lg:col-span-3 hidden lg:block sticky top-40 h-fit">
                        <div className="space-y-12">
                            <div>
                                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-6">Dispatch Details</h4>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Region</p>
                                        <p className="font-headline font-bold text-sm">Malwa Plateau</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Trust Score</p>
                                        <p className="font-headline font-bold text-sm">Level: Verified Truth</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 bg-surface-container-high rounded-xl border border-outline-variant/10">
                                <p className="text-xs font-medium leading-relaxed italic text-on-surface-variant">
                                    "The steam is the first ingredient of authenticity. We trace the flavor back to the 4 AM street rituals."
                                </p>
                            </div>
                        </div>
                    </aside>

                    {/* Article Body */}
                    <div className="lg:col-span-9">
                        <article 
                            className="prose prose-xl prose-stone max-w-none 
                            prose-h2:text-4xl prose-h2:font-headline prose-h2:font-black prose-h2:uppercase prose-h2:tracking-tighter 
                            prose-p:text-lg prose-p:font-medium prose-p:leading-relaxed prose-p:text-on-surface-variant
                            prose-strong:text-primary prose-strong:font-black 
                            prose-blockquote:border-l-primary prose-blockquote:text-2xl prose-blockquote:font-headline prose-blockquote:font-bold prose-blockquote:italic prose-blockquote:text-on-surface transition-all"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        {/* End Note */}
                        <div className="mt-20 pt-12 border-t-4 border-primary">
                            <h3 className="text-3xl font-headline font-black uppercase tracking-tighter mb-6 underline decoration-secondary decoration-4 underline-offset-8">THE POHAFix VOW</h3>
                            <p className="text-lg text-on-surface-variant mb-12 font-medium">
                                We believe in a food revolution that starts with transparency. Every ingredient in our Poha kit is traced back to source, ensuring zero palm oil and zero medical short-cuts.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-6">
                                <Link to="/shop" className="inline-flex items-center justify-center px-10 py-5 bg-primary text-white font-headline font-black uppercase tracking-widest rounded-md hover:scale-105 transition-all shadow-xl">
                                    Fuel Your Hustle
                                </Link>
                                <button className="inline-flex items-center justify-center px-10 py-5 bg-surface-container-highest text-on-surface font-headline font-bold uppercase tracking-widest rounded-md hover:bg-outline-variant/20 transition-all gap-2">
                                    <span className="material-symbols-outlined text-[18px]">share</span>
                                    Spread the Truth
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Newsletter Section (Reused Design) */}
            <section className="bg-primary/5 py-24 px-8 mt-20 relative overflow-hidden">
                <div className="max-w-2xl mx-auto text-center relative z-10">
                    <span className="text-primary font-label text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Continue the Journey</span>
                    <h2 className="text-5xl font-headline font-black text-on-surface tracking-tighter mb-6 italic">Stay Connected</h2>
                    <p className="text-on-surface-variant text-lg mb-10 font-medium">Get the latest Malwa field reports and bio-hacking secrets delivered to your inbox.</p>
                    <Link to="/blog" className="font-headline font-black uppercase tracking-widest text-primary border-b-2 border-primary pb-2 hover:text-secondary hover:border-secondary transition-all">Back to Issue No. 04</Link>
                </div>
            </section>

            {/* Newspaper Texture Overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] mix-blend-multiply z-[60]"></div>
        </div>
    );
};

export default BlogPost;

