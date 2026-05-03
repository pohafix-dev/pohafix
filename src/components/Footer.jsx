import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
    return (
        <footer className="bg-[#e7e2d9] dark:bg-[#12110e] font-['Epilogue'] uppercase tracking-widest text-xs w-full mt-auto relative overflow-hidden border-t border-[#d32f2f]/10 shadow-inner">
            <div className="flex flex-col md:flex-row justify-between items-start px-6 md:px-12 py-20 w-full gap-12 relative z-10">
                <div className="text-left space-y-6 max-w-sm">
                    <Logo />
                    <p className="normal-case text-on-surface-variant font-medium tracking-normal opacity-80 leading-relaxed">
                        The original Chhappan Dukaan ritual, captured in an instant. Traditional Malwa soul delivered to your doorstep. No laboratory shelf-extenders—just raw, natural ingredients.
                    </p>
                    <div className="normal-case text-on-surface-variant font-medium tracking-normal opacity-80 leading-relaxed mt-4">
                        <p><strong>PohaFix HQ</strong></p>
                        <p>123 Sarafa Bazaar Road, Indore</p>
                        <p>Madhya Pradesh, India 452001</p>
                        <p>Email: pohafix@gmail.com</p>
                    </div>
                </div>
                
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-10">
                    <div className="flex flex-col gap-4">
                        <span className="text-[10px] font-black text-primary tracking-[0.2em]">EXPERIENCE</span>
                        <Link className="text-[#1d1c16] dark:text-[#e7e2d9] hover:text-[#af101a] font-bold transition-all hover:translate-x-1" to="/">Indore Home</Link>
                        <Link className="text-[#1d1c16] dark:text-[#e7e2d9] hover:text-[#af101a] font-bold transition-all hover:translate-x-1" to="/shop">Shop Now</Link>
                        <Link className="text-[#1d1c16] dark:text-[#e7e2d9] hover:text-[#af101a] font-bold transition-all hover:translate-x-1" to="/about">Our Story</Link>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="text-[10px] font-black text-primary tracking-[0.2em]">LEGACY</span>
                        <Link className="text-[#1d1c16] dark:text-[#e7e2d9] hover:text-[#af101a] font-bold transition-all hover:translate-x-1" to="/blog">The Malwa Journal</Link>
                        <Link className="text-[#1d1c16] dark:text-[#e7e2d9] hover:text-[#af101a] font-bold transition-all hover:translate-x-1" to="/contact">Franchise</Link>
                        <Link className="text-[#1d1c16] dark:text-[#e7e2d9] hover:text-[#af101a] font-bold transition-all hover:translate-x-1" to="/contact">Bulk Orders</Link>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="text-[10px] font-black text-primary tracking-[0.2em]">LEGAL & SUPPORT</span>
                        <Link className="text-[#1d1c16] dark:text-[#e7e2d9] hover:text-[#af101a] font-bold transition-all hover:translate-x-1" to="/terms">Terms of Service</Link>
                        <Link className="text-[#1d1c16] dark:text-[#e7e2d9] hover:text-[#af101a] font-bold transition-all hover:translate-x-1" to="/shipping">Shipping Policy</Link>
                        <Link className="text-[#1d1c16] dark:text-[#e7e2d9] hover:text-[#af101a] font-bold transition-all hover:translate-x-1" to="/returns">Refund Policy</Link>
                        <Link className="text-[#1d1c16] dark:text-[#e7e2d9] hover:text-[#af101a] font-bold transition-all hover:translate-x-1" to="/privacy">Privacy Policy</Link>
                        <Link className="text-[#1d1c16] dark:text-[#e7e2d9] hover:text-[#af101a] font-bold transition-all hover:translate-x-1" to="/contact">Contact Us</Link>
                    </div>
                </div>

                <div className="text-left md:text-right flex flex-col items-start md:items-end gap-6">
                    <div>
                        <p className="normal-case font-black text-on-surface text-lg mb-1 tracking-tight">Authentic Indori Zayka</p>
                        <p className="normal-case font-medium opacity-60 text-xs">© 2024 Pohafix. Crafted with Malwa Soul.</p>
                    </div>
                    <div className="flex gap-4">
                        <a href="#" className="w-12 h-12 rounded-xl bg-surface-container-lowest border border-outline-variant/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
                             <span className="material-symbols-outlined text-xl">share</span>
                        </a>
                        <Link to="/contact" className="w-12 h-12 rounded-xl bg-surface-container-lowest border border-outline-variant/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
                             <span className="material-symbols-outlined text-xl">mail</span>
                        </Link>
                    </div>
                </div>
            </div>
            {/* Texture overlay for footer */}
            <div className="absolute inset-0 bg-newsprint pointer-events-none opacity-40 mix-blend-multiply"></div>
        </footer>
    );
};

export default Footer;
