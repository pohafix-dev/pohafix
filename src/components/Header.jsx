import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    const handleSearch = (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return;
        navigate('/shop');
        setIsSearchOpen(false);
        setSearchQuery('');
    };

    return (
        <nav className="fixed top-0 w-full z-[100] bg-[#faf9f6]/95 dark:bg-[#12110e]/95 backdrop-blur-xl border-b border-outline-variant/10 shadow-sm transition-all duration-300">
            <div className="grid grid-cols-3 items-center px-4 md:px-12 py-3 md:py-4 w-full max-w-screen-2xl mx-auto">
                
                {/* Left: Mobile Hamburger & Desktop Links */}
                <div className="flex items-center justify-start gap-4">
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-stone-900 dark:text-stone-100 hover:text-primary transition-colors"
                        aria-label="Toggle Menu"
                    >
                        <span className="material-symbols-outlined text-[30px]" style={{ fontVariationSettings: `'wght' 300, 'FILL' ${isMenuOpen ? 1 : 0}` }}>
                            {isMenuOpen ? 'close' : 'menu'}
                        </span>
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

                {/* Right: Search & Desktop Contact */}
                <div className="flex items-center gap-6 justify-end relative">
                    <Link className="hidden lg:block text-stone-900 dark:text-stone-100 font-bold tracking-tight hover:text-primary transition-colors text-sm uppercase" to="/contact">Contact</Link>
                    
                    {isSearchOpen ? (
                        <form onSubmit={handleSearch} className="flex items-center absolute right-0 bg-[#f4f3f1] dark:bg-stone-800 border border-outline-variant/30 rounded-full overflow-hidden shadow-lg animate-fade-in origin-right z-50">
                            <input 
                                type="text" 
                                autoFocus
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search..."
                                className="px-5 py-2.5 bg-transparent outline-none text-sm w-40 md:w-64 text-on-surface"
                            />
                            <button type="button" onClick={() => setIsSearchOpen(false)} className="pr-4 text-stone-500 hover:text-error transition-colors">
                                <span className="material-symbols-outlined text-[20px]">close</span>
                            </button>
                        </form>
                    ) : (
                        <button onClick={() => setIsSearchOpen(true)} className="hover:text-primary transition-colors text-stone-900 dark:text-stone-100" aria-label="Search">
                            <span className="material-symbols-outlined text-[26px]" style={{ fontVariationSettings: "'wght' 300" }}>search</span>
                        </button>
                    )}
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
                            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[90] md:hidden"
                        />
                        <motion.div 
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 left-0 bottom-0 w-[80%] max-w-sm bg-[#faf9f6] dark:bg-[#12110e] z-[100] md:hidden shadow-2xl flex flex-col p-8 pt-24"
                        >
                            <div className="flex flex-col gap-8">
                                <Link className="text-3xl font-black font-headline text-on-surface tracking-tighter hover:text-primary transition-colors" to="/">HOME</Link>
                                <Link className="text-3xl font-black font-headline text-on-surface tracking-tighter hover:text-primary transition-colors" to="/shop">SHOP</Link>
                                <Link className="text-3xl font-black font-headline text-on-surface tracking-tighter hover:text-primary transition-colors" to="/about">ABOUT US</Link>
                                <Link className="text-3xl font-black font-headline text-on-surface tracking-tighter hover:text-primary transition-colors" to="/blog">THE JOURNAL</Link>
                                <Link className="text-3xl font-black font-headline text-on-surface tracking-tighter hover:text-primary transition-colors" to="/contact">CONTACT</Link>
                            </div>

                            <div className="mt-auto space-y-6">
                                <div className="h-px w-full bg-outline-variant/20" />
                                <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">Indore ka asli breakfast</p>
                                <div className="flex gap-4">
                                    <Link to="/shop" className="flex-1 bg-primary text-white text-center py-4 font-black rounded-lg shadow-lg">ORDER NOW</Link>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Header;
