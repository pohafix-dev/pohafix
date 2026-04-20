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

            {/* Mobile Navigation Drawer - Matching Screenshot Style */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMenuOpen(false)}
                            className="fixed inset-0 bg-black/40 z-[9998] md:hidden backdrop-blur-[2px]"
                        />

                        {/* Drawer */}
                        <motion.div 
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 left-0 bottom-0 w-[85%] max-w-sm bg-white z-[9999] md:hidden shadow-2xl flex flex-col pt-4 overflow-y-auto"
                        >
                            {/* Drawer Header */}
                            <div className="flex items-center justify-start px-6 mb-8">
                                <button 
                                    onClick={() => setIsMenuOpen(false)}
                                    className="p-2 -ml-2 text-stone-900 transition-transform active:scale-90"
                                >
                                    <span className="material-symbols-outlined text-3xl font-light">close</span>
                                </button>
                            </div>

                            {/* Drawer Links */}
                            <div className="flex flex-col">
                                {[
                                    { name: "Home", path: "/" },
                                    { name: "Shop", path: "/shop", hasSub: true, subItems: ["Combos", "Single Packs", "Jeeravan Spices"] },
                                    { name: "About Us", path: "/about" },
                                    { name: "Journal", path: "/blog" },
                                    { name: "Contact Us", path: "/contact" }
                                ].map((item, idx) => (
                                    <div key={item.name} className="border-b border-stone-100 last:border-0">
                                        <div className="px-6 py-5 flex items-center justify-between group cursor-pointer" onClick={() => !item.hasSub && setIsMenuOpen(false)}>
                                            <Link 
                                                to={item.path}
                                                className="text-2xl font-bold text-stone-900 tracking-tight"
                                            >
                                                {item.name}
                                            </Link>
                                            {item.hasSub && (
                                                <span className="material-symbols-outlined text-stone-900">remove</span>
                                            )}
                                        </div>
                                        
                                        {item.hasSub && (
                                            <div className="px-10 pb-6 flex flex-col gap-6">
                                                {item.subItems.map(sub => (
                                                    <Link 
                                                        key={sub}
                                                        to={item.path}
                                                        onClick={() => setIsMenuOpen(false)}
                                                        className="text-lg font-medium text-stone-600 hover:text-primary transition-colors"
                                                    >
                                                        {sub}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Header;
