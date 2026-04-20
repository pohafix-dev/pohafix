import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ className = "", onClick }) => {
    return (
        <Link 
            to="/" 
            onClick={onClick}
            className={`inline-flex items-center bg-[#ca2221] px-5 md:px-7 py-2.5 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ${className}`}
        >
            <span className="text-[#ffdf00] font-black italic text-xl md:text-2xl tracking-tighter leading-none select-none" style={{ fontFamily: "'Inter', sans-serif" }}>Poha</span>
            <span className="text-white font-black italic text-xl md:text-2xl tracking-tighter leading-none select-none" style={{ fontFamily: "'Inter', sans-serif" }}>fix</span>
        </Link>
    );
};

export default Logo;
