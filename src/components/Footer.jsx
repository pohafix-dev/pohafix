import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="w-full rounded-t-[2rem] bg-[#f4f3f1] dark:bg-stone-950 mt-20">
            <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 gap-8 max-w-7xl mx-auto">
                <div className="text-lg font-bold text-stone-900 dark:text-stone-100">
                    Pohafix Artisanal Foods
                </div>
                <div className="flex flex-wrap justify-center gap-8">
                    <a className="font-['Manrope'] text-sm uppercase tracking-widest text-stone-500 dark:text-stone-400 hover:text-[#b6171e] transition-colors" href="#">Privacy Policy</a>
                    <a className="font-['Manrope'] text-sm uppercase tracking-widest text-stone-500 dark:text-stone-400 hover:text-[#b6171e] transition-colors" href="#">Terms of Service</a>
                    <a className="font-['Manrope'] text-sm uppercase tracking-widest text-stone-500 dark:text-stone-400 hover:text-[#b6171e] transition-colors" href="#">Shipping Info</a>
                    <a className="font-['Manrope'] text-sm uppercase tracking-widest text-stone-500 dark:text-stone-400 hover:text-[#b6171e] transition-colors" href="#">Instagram</a>
                    <a className="font-['Manrope'] text-sm uppercase tracking-widest text-stone-500 dark:text-stone-400 hover:text-[#b6171e] transition-colors" href="#">Facebook</a>
                </div>
                <p className="font-['Manrope'] text-sm uppercase tracking-widest text-stone-500 dark:text-stone-400">
                    © 2024 Pohafix Artisanal Foods. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
