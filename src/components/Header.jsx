import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    return (
        <nav className="fixed top-0 w-full z-[100] bg-[#faf9f6]/95 dark:bg-[#12110e]/95 backdrop-blur-xl border-b border-outline-variant/10 shadow-sm transition-all duration-300">
            <div className="grid grid-cols-3 items-center px-4 md:px-12 py-3 md:py-4 w-full max-w-screen-2xl mx-auto">
                
                {/* Left: Mobile Hamburger & Desktop Links */}
                <div className="flex items-center justify-start gap-4">
                    <button 
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsMenuOpen(true);
                        }}
                        className="md:hidden text-stone-900 dark:text-stone-100 hover:text-primary transition-colors p-3 -ml-3 relative z-[110]"
                        aria-label="Open Menu"
                    >
                        <span className="material-symbols-outlined text-[34px]" style={{ fontVariationSettings: "'wght' 300" }}>menu</span>
                    </button>
                    
                    <div className="hidden md:flex items-center gap-8">
                        <Link className="text-stone-900 dark:text-stone-100 font-bold tracking-tight hover:text-primary transition-colors text-sm uppercase" to="/">Home</Link>
                        <Link className="text-stone-900 dark:text-stone-100 font-bold tracking-tight hover:text-primary transition-colors text-sm uppercase" to="/shop">Shop</Link>
                        <Link className="text-stone-900 dark:text-stone-100 font-bold tracking-tight hover:text-primary transition-colors text-sm uppercase" to="/about">About</Link>
                        <Link className="text-stone-900 dark:text-stone-100 font-bold tracking-tight hover:text-primary transition-colors text-sm uppercase" to="/blog">Journal</Link>
                    </div>
                </div>

                {/* Center: Logo */}
                <div className="flex justify-center">
                    <Link to="/" className="flex items-center bg-[#ca2221] px-3 md:px-5 py-2 md:py-2.5 rounded shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <span className="text-[#ffdf00] font-black italic text-xl md:text-3xl tracking-tighter leading-none">Poha</span>
                        <span className="text-white font-black italic text-xl md:text-3xl tracking-tighter leading-none">fix</span>
                    </Link>
                </div>

                {/* Right: Desktop Contact */}
                <div className="flex items-center gap-6 justify-end">
                    <Link className="hidden md:block text-stone-900 dark:text-stone-100 font-bold tracking-tight hover:text-primary transition-colors text-sm uppercase" to="/contact">Contact</Link>
                </div>
            </div>

            {/* Mobile Navigation Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-[#f9f5f0]/90 backdrop-blur-xl z-[150] md:hidden flex flex-col"
                    >
                        {/* Overlay Header - Matching Screenshot */}
                        <div className="flex items-center justify-between px-6 py-4 w-full">
                            <Link to="/" className="flex items-center bg-[#ca2221] px-5 py-2 rounded shadow-md" onClick={() => setIsMenuOpen(false)}>
                                <span className="text-[#ffdf00] font-black italic text-2xl tracking-tighter leading-none">Poha</span>
                                <span className="text-white font-black italic text-2xl tracking-tighter leading-none">fix</span>
                            </Link>
                            <button 
                                onClick={() => setIsMenuOpen(false)}
                                className="w-12 h-12 rounded-2xl bg-[#e7e2d9] flex items-center justify-center text-stone-900 border border-stone-300/30 shadow-sm transition-transform active:scale-95"
                            >
                                <span className="material-symbols-outlined text-[28px] font-light">close</span>
                            </button>
                        </div>

                        {/* Centered Navigation Links */}
                        <div className="flex-1 flex flex-col items-center justify-center gap-8 pb-12">
                            <Link 
                                className="text-5xl font-black font-headline text-stone-900 tracking-tighter hover:text-primary transition-all transform hover:scale-110 active:scale-95 uppercase" 
                                to="/"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link 
                                className="text-5xl font-black font-headline text-stone-900 tracking-tighter hover:text-primary transition-all transform hover:scale-110 active:scale-95 uppercase" 
                                to="/shop"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Shop
                            </Link>
                            <Link 
                                className="text-5xl font-black font-headline text-stone-900 tracking-tighter hover:text-primary transition-all transform hover:scale-110 active:scale-95 uppercase" 
                                to="/about"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About Us
                            </Link>
                            <Link 
                                className="text-5xl font-black font-headline text-stone-900 tracking-tighter hover:text-primary transition-all transform hover:scale-110 active:scale-95 uppercase" 
                                to="/blog"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Journal
                            </Link>
                            <Link 
                                className="text-5xl font-black font-headline text-stone-900 tracking-tighter hover:text-primary transition-all transform hover:scale-110 active:scale-95 uppercase" 
                                to="/contact"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </Link>
                        </div>

                        {/* Bottom CTA */}
                        <div className="p-8 pb-12 w-full max-w-sm mx-auto">
                            <Link 
                                to="/shop" 
                                onClick={() => setIsMenuOpen(false)}
                                className="block w-full bg-[#ca2221] text-white text-center py-5 rounded-xl font-black text-lg uppercase tracking-widest shadow-2xl shadow-red-900/40 active:translate-y-1 transition-all"
                            >
                                GET YOUR POHA NOW
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Header;
