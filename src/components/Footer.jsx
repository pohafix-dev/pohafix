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
                        <p><strong>SYNNC FOODS</strong></p>
                        <p>Near Hanuman Mandir, Dongargaon</p>
                        <p>Manawar, Dhar, MP - 454335</p>
                        <p>Email: pohafix@gmail.com</p>
                    </div>
                </div>
                
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-10 w-full lg:flex-1">
                    <div className="flex flex-col gap-3">
                        <span className="text-[10px] font-black text-primary tracking-[0.2em]">BUY ONLINE</span>
                        <Link className="text-[#1d1c16] dark:text-[#e7e2d9] hover:text-[#af101a] font-bold transition-all hover:translate-x-1 normal-case tracking-normal text-sm" to="/shop">Buy Instant Poha Online</Link>
                        <Link className="text-[#1d1c16] dark:text-[#e7e2d9] hover:text-[#af101a] font-bold transition-all hover:translate-x-1 normal-case tracking-normal text-sm" to="/shop">Authentic Indori Poha Pack</Link>
                        <Link className="text-[#1d1c16] dark:text-[#e7e2d9] hover:text-[#af101a] font-bold transition-all hover:translate-x-1 normal-case tracking-normal text-sm" to="/shop">Jain Special Instant Poha</Link>
                        <Link className="text-[#0b3a24] dark:text-[#82db7e] hover:text-[#af101a] font-bold transition-all hover:translate-x-1 normal-case tracking-normal text-sm" to="/sugar-care-tea">Buy Sugar Care Tea (New)</Link>
                        <Link className="text-[#1d1c16] dark:text-[#e7e2d9] hover:text-[#af101a] font-bold transition-all hover:translate-x-1 normal-case tracking-normal text-sm" to="/contact">Bulk Office Snack Orders</Link>
                        <Link className="text-[#1d1c16] dark:text-[#e7e2d9] hover:text-[#af101a] font-bold transition-all hover:translate-x-1 normal-case tracking-normal text-sm" to="/about">Our Clean Sourcing Story</Link>
                    </div>
                    <div className="flex flex-col gap-3">
                        <span className="text-[10px] font-black text-primary tracking-[0.2em]">JOURNAL & RECIPES</span>
                        <Link className="text-[#1d1c16] dark:text-[#e7e2d9] hover:text-[#af101a] font-bold transition-all hover:translate-x-1 normal-case tracking-normal text-sm" to="/blog/instant-poha-recipe-ready-5-minutes">Instant Poha Recipe Guide</Link>
                        <Link className="text-[#1d1c16] dark:text-[#e7e2d9] hover:text-[#af101a] font-bold transition-all hover:translate-x-1 normal-case tracking-normal text-sm" to="/blog/is-instant-poha-healthy-nutrition-facts">Is Instant Poha Healthy?</Link>
                        <Link className="text-[#1d1c16] dark:text-[#e7e2d9] hover:text-[#af101a] font-bold transition-all hover:translate-x-1 normal-case tracking-normal text-sm" to="/blog/poha-for-weight-loss-does-it-help">Poha for Weight Loss Guide</Link>
                        <Link className="text-[#1d1c16] dark:text-[#e7e2d9] hover:text-[#af101a] font-bold transition-all hover:translate-x-1 normal-case tracking-normal text-sm" to="/blog/pohafix-vs-mtr-instant-poha">Pohafix vs MTR Comparison</Link>
                        <Link className="text-[#1d1c16] dark:text-[#e7e2d9] hover:text-[#af101a] font-bold transition-all hover:translate-x-1 normal-case tracking-normal text-sm" to="/blog/best-instant-breakfast-options-india-2025">Best Instant Breakfast India</Link>
                    </div>
                    <div className="flex flex-col gap-3">
                        <span className="text-[10px] font-black text-primary tracking-[0.2em]">LOCAL DELIVERY HUBS</span>
                        <Link className="text-[#1d1c16] dark:text-[#e7e2d9] hover:text-[#af101a] font-bold transition-all hover:translate-x-1 normal-case tracking-normal text-sm" to="/instant-poha-indore">Instant Poha in Indore</Link>
                        <Link className="text-[#1d1c16] dark:text-[#e7e2d9] hover:text-[#af101a] font-bold transition-all hover:translate-x-1 normal-case tracking-normal text-sm" to="/instant-poha-mumbai">Instant Poha in Mumbai</Link>
                        <Link className="text-[#1d1c16] dark:text-[#e7e2d9] hover:text-[#af101a] font-bold transition-all hover:translate-x-1 normal-case tracking-normal text-sm" to="/instant-poha-delhi">Instant Poha in Delhi NCR</Link>
                        <Link className="text-[#1d1c16] dark:text-[#e7e2d9] hover:text-[#af101a] font-bold transition-all hover:translate-x-1 normal-case tracking-normal text-sm" to="/instant-poha-bangalore">Instant Poha in Bangalore</Link>
                        <Link className="text-[#1d1c16] dark:text-[#e7e2d9] hover:text-[#af101a] font-bold transition-all hover:translate-x-1 normal-case tracking-normal text-sm" to="/instant-poha-hyderabad">Instant Poha in Hyderabad</Link>
                        <Link className="text-[#1d1c16] dark:text-[#e7e2d9] hover:text-[#af101a] font-bold transition-all hover:translate-x-1 normal-case tracking-normal text-sm" to="/instant-poha-kolkata">Instant Poha in Kolkata</Link>
                        <Link className="text-[#1d1c16] dark:text-[#e7e2d9] hover:text-[#af101a] font-bold transition-all hover:translate-x-1 normal-case tracking-normal text-sm" to="/instant-poha-chennai">Instant Poha in Chennai</Link>
                        <Link className="text-[#1d1c16] dark:text-[#e7e2d9] hover:text-[#af101a] font-bold transition-all hover:translate-x-1 normal-case tracking-normal text-sm" to="/instant-poha-pune">Instant Poha in Pune</Link>
                        <Link className="text-[#1d1c16] dark:text-[#e7e2d9] hover:text-[#af101a] font-bold transition-all hover:translate-x-1 normal-case tracking-normal text-sm" to="/instant-poha-raipur">Instant Poha in Raipur</Link>
                        <Link className="text-[#1d1c16] dark:text-[#e7e2d9] hover:text-[#af101a] font-bold transition-all hover:translate-x-1 normal-case tracking-normal text-sm" to="/instant-poha-chhattisgarh">Poha in Chhattisgarh State</Link>
                    </div>
                    <div className="flex flex-col gap-3">
                        <span className="text-[10px] font-black text-primary tracking-[0.2em]">LEGAL & SUPPORT</span>
                        <Link className="text-[#1d1c16] dark:text-[#e7e2d9] hover:text-[#af101a] font-bold transition-all hover:translate-x-1 normal-case tracking-normal text-sm" to="/terms">Terms of Service</Link>
                        <Link className="text-[#1d1c16] dark:text-[#e7e2d9] hover:text-[#af101a] font-bold transition-all hover:translate-x-1 normal-case tracking-normal text-sm" to="/shipping">Shipping Policy</Link>
                        <Link className="text-[#1d1c16] dark:text-[#e7e2d9] hover:text-[#af101a] font-bold transition-all hover:translate-x-1 normal-case tracking-normal text-sm" to="/returns">Refund & Return Policy</Link>
                        <Link className="text-[#1d1c16] dark:text-[#e7e2d9] hover:text-[#af101a] font-bold transition-all hover:translate-x-1 normal-case tracking-normal text-sm" to="/privacy">Privacy Policy</Link>
                        <Link className="text-[#1d1c16] dark:text-[#e7e2d9] hover:text-[#af101a] font-bold transition-all hover:translate-x-1 normal-case tracking-normal text-sm" to="/contact">Contact Support</Link>
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
