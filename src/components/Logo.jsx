import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ className = "", onClick }) => {
    return (
        <Link 
            to="/" 
            onClick={onClick}
            className={`inline-block transform hover:scale-105 transition-all duration-300 ${className}`}
        >
            <img 
                src="/logo.webp" 
                alt="Pohafix Logo" 
                className="h-10 md:h-12 w-auto object-contain select-none pointer-events-none drop-shadow-sm" 
                fetchpriority="high"
            />
        </Link>
    );
};

export default Logo;
