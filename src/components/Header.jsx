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
                    <Link to="/order" className="bg-primary text-white px-4 md:px-6 py-2 rounded font-black text-xs md:text-sm uppercase tracking-widest shadow-md hover:bg-primary-container transition-colors">
                        Order
                    </Link>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMenuOpen(false)}
                            className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm z-[110] md:hidden"
                        />
                        <motion.div 
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 w-full bg-[#f9f5f0] z-[120] md:hidden flex flex-col shadow-2xl"
                        >
                            {/* Drawer Header - Matching Screenshot */}
                            <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200/50">
                                <Link to="/" className="flex items-center bg-[#ca2221] px-5 py-2 rounded shadow-md">
                                    <span className="text-[#ffdf00] font-black italic text-2xl tracking-tighter leading-none">Poha</span>
                                    <span className="text-white font-black italic text-2xl tracking-tighter leading-none">fix</span>
                                </Link>
                                <button 
                                    onClick={() => setIsMenuOpen(false)}
                                    className="w-12 h-12 rounded-2xl bg-[#e7e2d9] flex items-center justify-center text-stone-900 border border-stone-300/30 shadow-sm transition-transform active:scale-90"
                                >
                                    <span className="material-symbols-outlined text-[28px] font-light">close</span>
                                </button>
                            </div>

                            <div className="flex flex-col gap-8 p-10 mt-8">
                                <Link className="text-5xl font-black font-headline text-stone-900 tracking-tighter hover:text-primary transition-colors block uppercase" to="/">Home</Link>
                                <Link className="text-5xl font-black font-headline text-stone-900 tracking-tighter hover:text-primary transition-colors block uppercase" to="/shop">Shop</Link>
                                <Link className="text-5xl font-black font-headline text-stone-900 tracking-tighter hover:text-primary transition-colors block uppercase" to="/about">About Us</Link>
                                <Link className="text-5xl font-black font-headline text-stone-900 tracking-tighter hover:text-primary transition-colors block uppercase" to="/blog">Journal</Link>
                                <Link className="text-5xl font-black font-headline text-stone-900 tracking-tighter hover:text-primary transition-colors block uppercase" to="/contact">Contact</Link>
                            </div>

                            <div className="mt-auto p-10 pb-12 space-y-8">
                                <div className="h-0.5 w-full bg-stone-900/10" />
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-2">INDORE'S MORNING SOUL</p>
                                    <p className="text-sm text-stone-500 font-medium italic">Traditional Home-Kitchen Quality, Delivered.</p>
                                </div>
                                <Link 
                                    to="/shop" 
                                    className="block w-full bg-[#ca2221] text-white text-center py-5 rounded-xl font-black text-lg uppercase tracking-widest shadow-xl shadow-red-900/20 active:translate-y-1 transition-all"
                                >
                                    GET YOUR POHA NOW
                                </Link>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Header;
