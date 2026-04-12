import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Order = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        pincode: '',
        city: '',
        address: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handlePayment = () => {
        const { name, phone, address, city, pincode } = formData;
        
        if (!name || !phone || !address || !city || !pincode) {
            alert('Please fill out all shipping details first, rebel!');
            return;
        }

        const currentPack = options.find(o => o.id === selectedOption);
        
        const options_rzp = {
            key: "rzp_live_ScdhUpGns0TDZA", // Your Live Key ID
            amount: currentPack.price * 100, // Amount in paise
            currency: "INR",
            name: "PohaFix | Synnc Foods",
            description: `Order for ${currentPack.title}`,
            image: "/logo.png",
            handler: function (response) {
                alert(`SUCCESS! Payment ID: ${response.razorpay_payment_id}. Your PohaFix is starting its journey.`);
                // In a real production environment, you would call your backend to verify the signature here.
            },
            prefill: {
                name: formData.name,
                contact: formData.phone
            },
            notes: {
                address: `${formData.address}, ${formData.city} - ${formData.pincode}`,
                pack: currentPack.title
            },
            theme: {
                color: "#ffd16c" // PohaFix Primary Yellow
            }
        };

        const rzp = new window.Razorpay(options_rzp);
        rzp.open();
    };

    return (
        <div className="bg-background text-on-background min-h-screen font-body selection:bg-primary selection:text-black overflow-x-hidden">
            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-[300] bg-primary transition-all duration-500 flex flex-col items-center justify-center p-10 ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                <button 
                    onClick={() => setIsMenuOpen(false)}
                    className="absolute top-10 right-10 text-black p-4 border-4 border-black"
                >
                    <span className="material-symbols-outlined text-4xl block">close</span>
                </button>
                <div className="flex flex-col gap-8 text-center">
                    <Link onClick={() => setIsMenuOpen(false)} to="/" className="font-headline text-6xl font-black text-black uppercase italic hover:translate-x-4 transition-transform">HOME</Link>
                    <Link onClick={() => setIsMenuOpen(false)} to="/blog" className="font-headline text-6xl font-black text-black uppercase italic hover:translate-x-4 transition-transform">POHA STORY</Link>
                    <Link onClick={() => setIsMenuOpen(false)} to="/contact" className="font-headline text-6xl font-black text-black uppercase italic hover:translate-x-4 transition-transform">CONTACT</Link>
                </div>
            </div>

            {/* Header / Brand */}
            <header className="p-4 md:p-6 border-b-4 md:border-b-8 border-black bg-black flex justify-between items-center sticky top-0 z-50">
                <Link to="/">
                    <img src="/logo.png" alt="Pohafix Logo" className="h-10 md:h-12 w-auto" />
                </Link>
                <button 
                    onClick={() => setIsMenuOpen(true)}
                    className="md:hidden bg-primary text-black p-2 border-2 border-black"
                >
                    <span className="material-symbols-outlined block">menu</span>
                </button>
                <div className="hidden md:flex gap-8 font-headline font-black uppercase text-sm text-white/50">
                    <Link to="/" className="hover:text-white">HOME</Link>
                    <Link to="/blog" className="hover:text-white">BLOG</Link>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16">
                
                {/* Left Side: Order Selection & Checkout */}
                <div className="lg:col-span-7 space-y-8 md:space-y-12">
                    
                    {/* Welcome / Urgency */}
                    <div className="bg-primary p-6 md:p-8 border-4 md:border-8 border-black shadow-[8px_8px_0px_0px_#e53935] md:shadow-[12px_12px_0px_0px_#e53935]">
                        <h1 className="font-headline text-4xl md:text-5xl font-black text-black uppercase leading-[0.9] tracking-tighter mb-4 text-left">CHOOSE YOUR VICTORY.</h1>
                        <div className="flex flex-wrap gap-4">
                            <p className="text-black/80 font-bold uppercase tracking-widest text-xs md:text-sm text-left">FREE DELIVERY APPLIED AUTOMATICALLY</p>
                            <span className="bg-black text-white px-3 py-1 text-[10px] items-center flex gap-1 font-black uppercase tracking-tighter leading-none italic"><span className="material-symbols-outlined text-xs">shield_check</span> SECURE FULL PAY</span>
                        </div>
                    </div>

                    {/* Options Grid */}
                    <div className="space-y-6">
                        {options.map((opt) => (
                            <div 
                                key={opt.id}
                                onClick={() => setSelectedOption(opt.id)}
                                className={`relative p-6 md:p-8 border-4 md:border-8 cursor-pointer transition-all ${selectedOption === opt.id ? 'border-primary bg-surface-container-high translate-x-2 shadow-[4px_4px_0px_0px_rgba(255,209,108,1)]' : 'border-black bg-black hover:border-white/30'}`}
                            >
                                {selectedOption === opt.id && (
                                    <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 bg-secondary text-black font-black px-3 md:px-4 py-1 uppercase rotate-[-5deg] z-10 text-[10px] md:text-xs">
                                        {opt.badge}
                                    </div>
                                )}
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                    <div>
                                        <h3 className={`font-headline text-2xl md:text-3xl font-black uppercase ${selectedOption === opt.id ? 'text-primary' : 'text-white'}`}>{opt.title}</h3>
                                        <p className="text-white/60 font-medium text-sm md:text-base">{opt.description}</p>
                                    </div>
                                    <div className="text-left md:text-right">
                                        <div className="text-primary font-headline text-3xl md:text-4xl font-black">₹{opt.price}</div>
                                        <div className="text-secondary text-[10px] md:text-xs font-black uppercase tracking-widest">{opt.saving}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Shipping Form */}
                    <div className="bg-black border-2 md:border-4 border-white/10 p-6 md:p-10 space-y-6 md:space-y-8">
                        <h2 className="font-headline text-2xl md:text-3xl font-black uppercase text-white border-b-2 md:border-b-4 border-primary inline-block pb-2">WHERE DO WE SEND IT?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            <input name="name" value={formData.name} onChange={handleInputChange} type="text" placeholder="FULL NAME" className="bg-surface-container p-4 border-2 md:border-4 border-black outline-none focus:border-primary font-black uppercase placeholder:text-black/30 text-sm md:text-base text-white" />
                            <input name="phone" value={formData.phone} onChange={handleInputChange} type="text" placeholder="PHONE NUMBER" className="bg-surface-container p-4 border-2 md:border-4 border-black outline-none focus:border-primary font-black uppercase placeholder:text-black/30 text-sm md:text-base text-white" />
                            <input name="pincode" value={formData.pincode} onChange={handleInputChange} type="text" placeholder="PINCODE" className="bg-surface-container p-4 border-2 md:border-4 border-black outline-none focus:border-primary font-black uppercase placeholder:text-black/30 text-sm md:text-base text-white" />
                            <input name="city" value={formData.city} onChange={handleInputChange} type="text" placeholder="CITY" className="bg-surface-container p-4 border-2 md:border-4 border-black outline-none focus:border-primary font-black uppercase placeholder:text-black/30 text-sm md:text-base text-white" />
                            <textarea name="address" value={formData.address} onChange={handleInputChange} placeholder="FULL ADDRESS" className="md:col-span-2 bg-surface-container p-4 border-2 md:border-4 border-black outline-none focus:border-primary font-black uppercase placeholder:text-black/30 h-24 md:h-32 text-sm md:text-base text-white"></textarea>
                        </div>
                        <button onClick={handlePayment} className="w-full bg-secondary text-black font-black text-2xl md:text-4xl py-6 md:py-8 border-4 md:border-8 border-black shadow-[8px_8px_0px_0px_#ffd16c] md:shadow-[12px_12px_0px_0px_#ffd16c] hover:translate-y-2 hover:translate-x-2 hover:shadow-none transition-all uppercase font-headline">
                            FINISH ORDER & PAY
                        </button>
                        <p className="text-white/20 text-[10px] md:text-xs font-black uppercase text-center tracking-widest italic leading-none pt-4">FULL PAYMENT ONLY. NO CASH ON DELIVERY. SECURE CHECKOUT VIA RAZORPAY LIVE.</p>
                    </div>
                </div>

                {/* Right Side: Trust & Story */}
                <div className="lg:col-span-5 space-y-8 md:space-y-12">
                    
                    {/* Trust Badges */}
                    <div className="grid grid-cols-2 gap-3 md:gap-4">
                        {[
                            { icon: "auto_awesome", label: "ARTISANAL\nQUALITY" },
                            { icon: "package_2", label: "SHIPPED\nFRESH" },
                            { icon: "support_agent", label: "DIRECT\nSUPPORT" },
                            { icon: "lock_reset", label: "SAFE\nCHECKOUT" }
                        ].map((badge, bIdx) => (
                            <div key={bIdx} className="bg-white/5 p-4 md:p-6 border-2 md:border-4 border-black text-center group hover:bg-primary transition-colors">
                                <span className="material-symbols-outlined text-3xl md:text-4xl text-primary group-hover:text-black mb-2">{badge.icon}</span>
                                <div className="font-headline font-black text-[10px] md:text-xs uppercase text-white group-hover:text-black leading-tight whitespace-pre-line">{badge.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Owner Story */}
                    <div className="bg-black border-l-4 md:border-l-8 border-primary p-8 md:p-10 space-y-6">
                        <h3 className="font-headline text-3xl md:text-4xl font-black text-white uppercase tracking-tighter">OUR STORY</h3>
                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary flex items-center justify-center mb-6 border-2 md:border-4 border-white overflow-hidden">
                             <img src="/synnc-pohafix-box.png" className="w-full h-full object-contain p-2" alt="Owner" />
                        </div>
                        <div className="font-body text-base md:text-lg text-white/70 space-y-4 italic leading-relaxed">
                            <p>"I started Pohafix because I was tired of seeing my friends eat chemical-filled instant noodles every single day."</p>
                        </div>
                        <div className="font-headline font-black text-primary uppercase text-lg md:text-xl">- Founder, Synnc Foods</div>
                    </div>

                    {/* Thank You Note */}
                    <div className="pt-8 md:pt-10 text-center border-t-4 md:border-t-8 border-white/10">
                        <div className="glitch-text font-headline text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">THANK YOU!</div>
                        <p className="font-body text-white/50 uppercase tracking-widest text-[10px] md:text-sm font-bold">BY ORDERING, YOU ARE SUPPORTING REAL INDIAN FOOD ARTISANS.</p>
                    </div>
                </div>
            </main>

            <footer className="bg-black border-t-4 md:border-t-8 border-white/20 py-20 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
                    <Link to="/">
                        <img src="/logo.png" alt="Pohafix Logo" className="h-10 md:h-12 w-auto" />
                    </Link>
                    <div className="flex gap-8 font-headline font-black text-white/40 uppercase tracking-widest text-xs md:text-sm">
                        <Link to="/" className="hover:text-white">HOME</Link>
                        <Link to="/blog" className="hover:text-white">POHA STORY</Link>
                        <Link to="/contact" className="hover:text-white">CONTACT US</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Order;
