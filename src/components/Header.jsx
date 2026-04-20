import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return;

        // Route everything to shop since there's only 1 product
        navigate('/shop');
        
        setIsSearchOpen(false);
        setSearchQuery('');
    };

    return (
        <nav className="fixed top-0 w-full z-50 bg-[#faf9f6]/95 dark:bg-stone-900/95 backdrop-blur-xl border-b border-outline-variant/10 transition-all duration-300">
            <div className="grid grid-cols-2 md:grid-cols-3 items-center px-6 lg:px-12 py-4 w-full">
                
                {/* Left: Navigation Links */}
                <div className="hidden md:flex items-center gap-8 justify-start">
                    <Link className="text-stone-900 dark:text-stone-100 font-bold tracking-tight hover:text-primary transition-colors text-sm" to="/">Home</Link>
                    <Link className="text-stone-900 dark:text-stone-100 font-bold tracking-tight hover:text-primary transition-colors text-sm" to="/shop">Shop</Link>
                    <Link className="text-stone-900 dark:text-stone-100 font-bold tracking-tight hover:text-primary transition-colors text-sm" to="/about">About Us</Link>
                    <Link className="text-stone-900 dark:text-stone-100 font-bold tracking-tight hover:text-primary transition-colors text-sm" to="/blog">Blogs</Link>
                    <Link className="text-stone-900 dark:text-stone-100 font-bold tracking-tight hover:text-primary transition-colors text-sm" to="/contact">Contact</Link>
                </div>

                {/* Center: Logo Container */}
                <div className="flex justify-start md:justify-center">
                    <Link to="/" className="flex items-center bg-[#ca2221] px-5 py-2.5 rounded shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <span className="text-[#ffdf00] font-black italic text-3xl tracking-tight leading-none" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>Poha</span>
                        <span className="text-white font-black italic text-3xl tracking-tight leading-none" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>fix</span>
                    </Link>
                </div>

                {/* Right: Search Feature */}
                <div className="flex items-center gap-6 justify-end relative">
                    {isSearchOpen ? (
                        <form onSubmit={handleSearch} className="flex items-center absolute right-0 bg-[#f4f3f1] dark:bg-stone-800 border border-outline-variant/30 rounded-full overflow-hidden shadow-lg animate-fade-in origin-right z-50">
                            <input 
                                type="text" 
                                autoFocus
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search products..."
                                className="px-5 py-2.5 bg-transparent outline-none text-sm w-48 md:w-64 text-on-surface"
                            />
                            <button type="submit" className="pr-3 text-stone-500 hover:text-primary transition-colors">
                                <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'wght' 300" }}>search</span>
                            </button>
                            <button type="button" onClick={() => setIsSearchOpen(false)} className="pr-5 pl-1 text-stone-500 hover:text-error transition-colors">
                                <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'wght' 300" }}>close</span>
                            </button>
                        </form>
                    ) : (
                        <button onClick={() => setIsSearchOpen(true)} className="hover:opacity-60 transition-opacity text-stone-900 dark:text-stone-100" aria-label="Search">
                            <span className="material-symbols-outlined text-[26px]" style={{ fontVariationSettings: "'wght' 300" }}>search</span>
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Header;
