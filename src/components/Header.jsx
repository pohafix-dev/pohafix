import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    // Close menu when route changes and handle body scroll lock
    useEffect(() => {
        setIsMenuOpen(false);
        document.body.style.overflow = 'auto';
    }, [location]);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => { document.body.style.overflow = 'auto'; };
    }, [isMenuOpen]);

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
                    <Logo />
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
                        className="fixed inset-0 z-[9999] md:hidden flex flex-col"
                    >
                        {/* Pure Opaque Background Layer */}
                        <div 
                            className="absolute inset-0 bg-[#fef9f0] opacity-100" 
                            style={{ backgroundColor: '#fef9f0' }}
                        />
                        
                        {/* Overlay Content */}
                        <div className="relative z-10 flex flex-col h-full justify-between pb-12">
                            <div className="flex items-center justify-between px-6 py-4 w-full">
                                <Logo onClick={() => setIsMenuOpen(false)} />
                            <button 
                                onClick={() => setIsMenuOpen(false)}
                                className="w-12 h-12 rounded-2xl bg-[#e7e2d9] flex items-center justify-center text-stone-900 border border-stone-300/30 shadow-sm transition-transform active:scale-95"
                            >
                                <span className="material-symbols-outlined text-[28px] font-light">close</span>
                            </button>
                        </div>

                        {/* Navigation Links - Matching Screenshot Style strictly */}
                        <div className="flex-1 flex flex-col items-start justify-start gap-12 px-10 pt-32">
                            {[
                                { name: "Home", path: "/" },
                                { name: "Shop Now", path: "/shop" },
                                { name: "Our Story", path: "/about" },
                                { name: "Journal", path: "/blog" },
                                { name: "Contact Us", path: "/contact" }
                            ].map((item) => (
                                <Link 
                                    key={item.name}
                                    to={item.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-4xl font-headline font-black text-stone-900 tracking-tighter transition-colors hover:text-primary active:opacity-70"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Header;
