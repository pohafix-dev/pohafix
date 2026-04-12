import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogs } from '../data/blogs';

const BlogPost = () => {
    const { slug } = useParams();
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
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
            <div className="bg-black min-h-screen text-white flex flex-col items-center justify-center p-6 text-center">
                <h1 className="font-headline text-5xl md:text-6xl font-black mb-8 italic uppercase">STORY NOT FOUND</h1>
                <Link to="/blog" className="bg-primary text-black font-black px-10 py-4 uppercase font-headline shadow-[8px_8px_0px_0px_#fff]">BACK TO STORIES</Link>
            </div>
        );
    }

    return (
        <div className="bg-black min-h-screen text-white font-body selection:bg-primary selection:text-black overflow-x-hidden">
            {/* Reading Progress Bar */}
            <div className="fixed top-0 left-0 h-1.5 md:h-2 bg-primary z-[200] transition-all duration-100" style={{ width: `${scrollProgress}%` }}></div>

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
                <Link to="/blog" className="flex items-center gap-2 font-headline font-black uppercase text-xs md:text-sm group">
                    <span className="material-symbols-outlined group-hover:-translate-x-2 transition-transform text-primary text-xl md:text-2xl">arrow_back</span>
                    <span className="hidden sm:inline">BACK TO STORY HUB</span>
                    <span className="sm:hidden text-primary">STORY</span>
                </Link>
                <div className="flex items-center gap-4">
                    <Link to="/order" className="hidden sm:block bg-primary text-black font-black px-6 py-2 border-4 border-black uppercase font-headline text-sm">ORDER</Link>
                    <button 
                        onClick={() => setIsMenuOpen(true)}
                        className="md:hidden bg-secondary text-black p-2 border-2 border-black"
                    >
                        <span className="material-symbols-outlined block">menu</span>
                    </button>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-24">
                <div className="max-w-4xl mx-auto mb-12 md:mb-16">
                    <div className="flex flex-wrap gap-4 mb-8">
                        <span className="bg-secondary text-black font-black px-4 py-1 uppercase text-[10px] md:text-xs">{post.category}</span>
                        <span className="text-white/40 font-black uppercase text-[10px] md:text-xs border border-white/10 px-4 py-1">{post.readTime} DEEP READ</span>
                    </div>
                    <h1 className="font-headline text-4xl md:text-8xl font-black text-white uppercase leading-[0.9] md:leading-[0.8] tracking-tighter mb-8 md:mb-10 italic">{post.title}</h1>
                    <div className="flex items-center gap-6 border-t-4 md:border-t-8 border-white/10 pt-8 md:pt-10">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-primary rounded-full border-2 md:border-4 border-black flex items-center justify-center text-black font-black font-headline text-xl italic select-none">PF</div>
                        <div>
                            <p className="font-headline font-black uppercase text-lg md:text-xl leading-none">{post.author}</p>
                            <p className="text-white/40 font-black uppercase text-[10px] md:text-xs tracking-widest mt-2">{post.date}</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">
                    {/* Sticky Sidebar Column */}
                    <aside className="hidden xl:block xl:col-span-3">
                        <div className="sticky top-40 bg-white/5 border-l-4 border-primary p-6">
                            <h4 className="font-headline font-black uppercase text-primary mb-6">INSIDE THIS STORY</h4>
                            <ul className="space-y-4 text-xs font-black uppercase text-white/40">
                                <li className="hover:text-white cursor-pointer transition-colors">• The Hidden Addiction</li>
                                <li className="hover:text-white cursor-pointer transition-colors">• The Lab Report</li>
                                <li className="hover:text-white cursor-pointer transition-colors">• Why PohaFix Says NO</li>
                                <li className="hover:text-white cursor-pointer transition-colors">• The Revolution Path</li>
                            </ul>
                        </div>
                    </aside>

                    {/* Article Column */}
                    <div className="xl:col-span-9">
                        {/* Mobile Table of Contents */}
                        <div className="xl:hidden bg-white/5 border-l-4 border-primary p-6 mb-12">
                             <h4 className="font-headline font-black uppercase text-primary mb-4 text-sm">SUMMARY GOSSIP</h4>
                             <ul className="space-y-3 text-[10px] font-black uppercase text-white/40">
                                 <li>• The Hidden Addiction</li>
                                 <li>• The Lab Report</li>
                                 <li>• Why PohaFix Says NO</li>
                             </ul>
                        </div>

                        <article className="prose prose-invert prose-lg md:prose-2xl max-w-4xl 
                            prose-headings:font-headline prose-headings:font-black prose-headings:uppercase prose-headings:italic prose-headings:tracking-tighter
                            prose-p:text-white/70 prose-p:font-bold prose-p:uppercase prose-p:tracking-tight prose-p:leading-relaxed
                            prose-strong:text-primary prose-strong:font-black
                            prose-img:border-4 md:prose-img:border-8 prose-img:border-black prose-img:shadow-[8px_8px_0px_0px_rgba(255,209,108,1)] md:prose-img:shadow-[20px_20px_0px_0px_rgba(255,209,108,1)]">
                            
                            {/* Dynamic Content Mapping */}
                            <div dangerouslySetInnerHTML={{ __html: post.content }} />

                            {/* Fallback Placeholder */}
                            {!post.content && (
                                <div className="space-y-12">
                                    <p className="text-2xl md:text-3xl font-black italic text-primary">WRITING THE FULL STORY... THIS IS A 2000-WORD DEEP DIVE INTO THE TRUTH.</p>
                                    <p>This article is currently being drafted by the PohaFix research crew. We are meticulously checking every claim to ensure you get nothing but the raw facts.</p>
                                </div>
                            )}
                        </article>
                    </div>
                </div>

                {/* Final Post CTA */}
                <div className="max-w-4xl mx-auto mt-24 md:mt-32 p-8 md:p-12 bg-primary border-4 md:border-8 border-black shadow-[12px_12px_0px_0px_#ca2221] md:shadow-[20px_20px_0px_0px_#ca2221] text-center">
                    <h3 className="font-headline text-3xl md:text-5xl font-black text-black uppercase leading-[0.9] md:leading-none tracking-tighter mb-8 italic">DON'T BE A SLAVE TO PROCESSED GARBAGE.</h3>
                    <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
                        <Link to="/order" className="bg-black text-white font-headline text-lg md:text-2xl font-black px-8 md:px-12 py-4 md:py-5 uppercase shadow-[8px_8px_0px_0px_#fff] md:shadow-[10px_10px_0px_0px_#fff] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all">ORDER NOW</Link>
                        <Link to="/blog" className="bg-white text-black font-headline text-lg md:text-2xl font-black px-8 md:px-12 py-4 md:py-5 uppercase border-2 md:border-4 border-black hover:bg-black hover:text-white transition-all">ALL STORIES</Link>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-black py-16 md:py-20 border-t-4 md:border-t-8 border-white/20 text-center px-6">
                 <Link to="/">
                    <img src="/logo.png" alt="Pohafix Logo" className="h-10 md:h-12 w-auto mx-auto mb-10" />
                 </Link>
                 <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 font-headline font-black text-white/40 uppercase tracking-widest text-xs md:text-sm">
                     <Link to="/" className="hover:text-white">BACK TO HOME</Link>
                     <Link to="/blog" className="hover:text-white">POHA STORY</Link>
                     <Link to="/contact" className="hover:text-white">CONTACT</Link>
                     <p>© SYNNNC FOODS 2024</p>
                 </div>
            </footer>
        </div>
    );
};

export default BlogPost;
