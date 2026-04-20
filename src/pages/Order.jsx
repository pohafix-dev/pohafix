import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Order = () => {
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        pincode: '',
        city: '',
        address: ''
    });

    const options = [
        {
            id: 1,
            title: "THE STARTER PACK",
            description: "1 Full 300g Box (5 Individual Packs)",
            price: 189,
            saving: "SAVE 0%",
            badge: "POPULAR",
            image: "/box-front.png"
        },
        {
            id: 2,
            title: "THE REBEL BUNDLE",
            description: "2 Full 300g Boxes (600g Total)",
            price: 290,
            saving: "SAVE ₹88",
            badge: "BEST VALUE",
            image: "/combo-2box.png"
        },
        {
            id: 3,
            title: "THE MYSTERY COMBO",
            description: "1 Box 300g Pohafix + 1 Secret Sev (150g)",
            price: 290,
            saving: "LIMITED",
            badge: "TASTE TEST",
            image: "/combo-sev.png"
        }
    ];

    const currentPack = options.find(o => o.id === selectedOption);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handlePayment = (e) => {
        if (e) e.preventDefault();
        const { name, phone, address, city, pincode } = formData;
        
        if (!name || !phone || !address || !city || !pincode) {
            alert('Please fill out all shipping details first, rebel!');
            return;
        }

        if (typeof window.Razorpay === 'undefined') {
            alert('Razorpay is still loading... Please wait a few seconds and try again.');
            return;
        }

        const options_rzp = {
            key: "rzp_live_ScdhUpGns0TDZA", // Your Live Key ID
            amount: currentPack.price * 100, // Amount in paise
            currency: "INR",
            name: "PohaFix | Synnc Foods",
            description: `Order for ${currentPack.title}`,
            image: "/logo.png",
            handler: function (response) {
                alert(`SUCCESS! Payment ID: ${response.razorpay_payment_id}. Your PohaFix is starting its journey.`);
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
                color: "#af101a" 
            }
        };

        const rzp = new window.Razorpay(options_rzp);
        rzp.open();
    };

    return (
        <div className="bg-surface font-body text-on-surface min-h-screen">
            {/* TopAppBar */}
            <header className="bg-[#f8f3ea] dark:bg-stone-900 transition-colors duration-300 shadow-sm dark:shadow-none w-full top-0 sticky z-50">
                <div className="flex justify-between items-center w-full px-6 py-4 max-w-screen-2xl mx-auto">
                    <div className="flex items-center gap-4">
                        <button onClick={() => navigate(-1)} className="scale-95 active:opacity-80 transition-transform">
                            <span className="material-symbols-outlined text-[#af101a] dark:text-[#d32f2f] text-2xl">arrow_back</span>
                        </button>
                        <h1 className="font-epilogue font-black italic tracking-tighter text-[#af101a] dark:text-[#d32f2f] text-3xl uppercase">Pohafix</h1>
                    </div>
                    <div className="flex items-center gap-6">
                        <span className="material-symbols-outlined text-stone-600 dark:text-stone-400">shopping_cart</span>
                        <span className="material-symbols-outlined text-stone-600 dark:text-stone-400">account_circle</span>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Left Side: Shipping & Payment */}
                    <div className="lg:col-span-7 space-y-12">
                        {/* Delivery Section */}
                        <section>
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="font-headline text-3xl font-bold tracking-tight border-b-4 border-secondary pb-1">Shipping Details</h2>
                                <div className="bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full text-xs font-label font-bold flex items-center gap-1">
                                    <span className="material-symbols-outlined text-sm">local_shipping</span>
                                    GET IT IN 2-3 DAYS
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="font-label text-sm font-semibold uppercase tracking-wider text-on-surface-variant">Full Name</label>
                                    <input 
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full bg-surface-container-lowest border-0 border-b-2 border-transparent focus:ring-0 focus:border-secondary transition-all p-4 rounded-lg font-body" 
                                        placeholder="Aman Sharma" 
                                        type="text"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="font-label text-sm font-semibold uppercase tracking-wider text-on-surface-variant">Phone Number</label>
                                    <input 
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full bg-surface-container-lowest border-0 border-b-2 border-transparent focus:ring-0 focus:border-secondary transition-all p-4 rounded-lg font-body" 
                                        placeholder="+91 98765 43210" 
                                        type="tel"
                                    />
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <label className="font-label text-sm font-semibold uppercase tracking-wider text-on-surface-variant">Shipping Address</label>
                                    <textarea 
                                        name="address"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        className="w-full bg-surface-container-lowest border-0 border-b-2 border-transparent focus:ring-0 focus:border-secondary transition-all p-4 rounded-lg font-body" 
                                        placeholder="House No, Street Name, Locality" 
                                        rows="3"
                                    ></textarea>
                                </div>
                                <div className="space-y-2">
                                    <label className="font-label text-sm font-semibold uppercase tracking-wider text-on-surface-variant">City</label>
                                    <input 
                                        name="city"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        className="w-full bg-surface-container-lowest border-0 border-b-2 border-transparent focus:ring-0 focus:border-secondary transition-all p-4 rounded-lg font-body" 
                                        placeholder="Indore" 
                                        type="text"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="font-label text-sm font-semibold uppercase tracking-wider text-on-surface-variant">PIN Code</label>
                                    <input 
                                        name="pincode"
                                        value={formData.pincode}
                                        onChange={handleInputChange}
                                        className="w-full bg-surface-container-lowest border-0 border-b-2 border-transparent focus:ring-0 focus:border-secondary transition-all p-4 rounded-lg font-body" 
                                        placeholder="452001" 
                                        type="text"
                                    />
                                </div>
                            </div>
                        </section>

                        {/* Options Selection */}
                        <section>
                            <h2 className="font-headline text-3xl font-bold tracking-tight mb-8">Select Your Pack</h2>
                            <div className="grid grid-cols-1 gap-4">
                                {options.map(opt => (
                                    <button 
                                        key={opt.id}
                                        onClick={() => setSelectedOption(opt.id)}
                                        className={`flex items-center justify-between p-6 bg-surface-container-lowest rounded-xl cursor-pointer border-2 transition-all ${selectedOption === opt.id ? 'border-secondary bg-secondary-fixed/10' : 'border-transparent hover:border-outline-variant'}`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-16 h-16 bg-surface-container-low rounded-lg overflow-hidden flex items-center justify-center p-2">
                                                <img src={opt.image} alt={opt.title} className="w-full h-full object-contain" />
                                            </div>
                                            <div className="text-left">
                                                <h4 className="font-body font-black text-lg uppercase tracking-tight">{opt.title}</h4>
                                                <p className="text-xs font-medium text-on-surface-variant uppercase tracking-widest">{opt.description}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-headline font-black text-2xl">₹{opt.price}</div>
                                            <div className="text-[10px] font-black uppercase text-secondary tracking-widest">{opt.saving}</div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </section>

                        {/* Payment Section */}
                        <section className="bg-surface-container-low p-8 rounded-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10 select-none">
                                <span className="text-6xl font-black italic text-primary">SECURE</span>
                            </div>
                            <h2 className="font-headline text-3xl font-bold tracking-tight mb-8">Payment Method</h2>
                            <div className="space-y-4">
                                <label className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-lg cursor-pointer border-2 border-secondary group transition-all">
                                    <div className="flex items-center gap-4">
                                        <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>qr_code_2</span>
                                        <span className="font-body font-bold">UPI / QR (Recommended)</span>
                                    </div>
                                    <input checked readOnly className="text-secondary focus:ring-secondary border-secondary" name="payment" type="radio"/>
                                </label>
                                <label className="opacity-50 flex items-center justify-between p-4 bg-surface-container-lowest rounded-lg cursor-not-allowed border-2 border-transparent transition-all">
                                    <div className="flex items-center gap-4">
                                        <span className="material-symbols-outlined text-on-surface-variant">credit_card</span>
                                        <span className="font-body font-bold">Credit / Debit Card</span>
                                    </div>
                                    <input disabled className="text-stone-300 focus:ring-stone-300" name="payment" type="radio"/>
                                </label>
                                <label className="opacity-50 flex items-center justify-between p-4 bg-surface-container-lowest rounded-lg cursor-not-allowed border-2 border-transparent transition-all">
                                    <div className="flex items-center gap-4">
                                        <span className="material-symbols-outlined text-on-surface-variant">payments</span>
                                        <span className="font-body font-bold">Cash on Delivery (Disabled)</span>
                                    </div>
                                    <input disabled className="text-stone-300 focus:ring-stone-300" name="payment" type="radio"/>
                                </label>
                            </div>
                        </section>

                        {/* Trust Signals */}
                        <section className="grid grid-cols-3 gap-4 pt-4">
                            <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
                                <span className="material-symbols-outlined text-tertiary mb-2 text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                                <span className="font-label text-[10px] font-bold uppercase tracking-tighter">FSSAI Certified</span>
                            </div>
                            <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
                                <span className="material-symbols-outlined text-primary mb-2 text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
                                <span className="font-label text-[10px] font-bold uppercase tracking-tighter">100% Secure</span>
                            </div>
                            <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
                                <span className="material-symbols-outlined text-secondary mb-2 text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
                                <span className="font-label text-[10px] font-bold uppercase tracking-tighter">Made in India</span>
                            </div>
                        </section>
                    </div>

                    {/* Right Side: Order Summary */}
                    <aside className="lg:col-span-5 lg:sticky lg:top-28">
                        <div className="bg-surface-container-highest p-1 rounded-xl shadow-xl">
                            <div className="bg-surface-container-lowest rounded-lg overflow-hidden">
                                {/* Header Newsprint Snip */}
                                <div className="bg-surface-variant p-6 relative pb-10" style={{ maskImage: "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 100 10\" preserveAspectRatio=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 10 L5 0 L10 10 L15 0 L20 10 L25 0 L30 10 L35 0 L40 10 L45 0 L50 10 L55 0 L60 10 L65 0 L70 10 L75 0 L80 10 L85 0 L90 10 L95 0 L100 10 Z\" fill=\"black\"/></svg>')", maskSize: "100% 10px", maskRepeat: "no-repeat", maskPosition: "bottom" }}>
                                    <h3 className="font-headline text-2xl font-black uppercase tracking-tighter text-on-surface-variant">Order Summary</h3>
                                    <p className="font-label text-xs font-medium opacity-70">Review your fresh delights before we ship.</p>
                                </div>
                                <div className="p-6 -mt-6">
                                    {/* Items List */}
                                    <div className="space-y-6 mb-8">
                                        <div className="flex gap-4 items-center">
                                            <div className="relative w-24 h-24 flex-shrink-0 bg-surface-container-low rounded-md overflow-hidden flex items-center justify-center p-2">
                                                <img src={currentPack.image} alt="Indori Poha" className="w-full h-full object-contain" />
                                                <div className="absolute top-1 right-1 bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded">x 1</div>
                                            </div>
                                            <div className="flex-grow">
                                                <h4 className="font-headline font-bold text-lg leading-tight uppercase">{currentPack.title}</h4>
                                                <p className="font-label text-sm text-on-surface-variant uppercase tracking-widest">{currentPack.description}</p>
                                                <p className="font-body font-black text-primary mt-1">₹{currentPack.price}.00</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Cost Calculations */}
                                    <div className="space-y-3 pt-6 border-t border-outline-variant/30">
                                        <div className="flex justify-between text-sm font-label font-semibold text-on-surface-variant">
                                            <span>Subtotal</span>
                                            <span>₹{currentPack.price}.00</span>
                                        </div>
                                        <div className="flex justify-between text-sm font-label font-semibold text-tertiary">
                                            <span>Shipping</span>
                                            <span>FREE</span>
                                        </div>
                                        <div className="flex justify-between text-sm font-label font-semibold text-on-surface-variant">
                                            <span>Taxes (GST Included)</span>
                                            <span>₹0.00</span>
                                        </div>
                                        <div className="flex justify-between items-end pt-4 border-t border-secondary">
                                            <span className="font-headline font-black text-2xl uppercase italic text-on-surface">Total</span>
                                            <span className="font-headline font-black text-4xl text-primary leading-none tracking-tighter">₹{currentPack.price}.00</span>
                                        </div>
                                    </div>
                                    {/* CTA */}
                                    <button onClick={handlePayment} className="w-full mt-10 bg-primary hover:bg-primary-container text-on-primary font-headline font-black text-xl py-5 rounded-md shadow-[0_6px_0_0_#930010] active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-3">
                                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>shopping_bag</span>
                                        PLACE YOUR ORDER
                                    </button>
                                    <p className="text-center mt-6 text-[10px] font-label font-bold uppercase tracking-widest text-on-surface-variant flex items-center justify-center gap-2">
                                        <span className="material-symbols-outlined text-sm">lock</span>
                                        Encrypted Secure Payment
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Emotional Accent */}
                        <div className="mt-8 px-4 opacity-40 select-none hidden lg:block">
                            <span className="font-headline text-5xl font-black italic text-secondary-container leading-none block uppercase">स्वादिष्ट</span>
                            <span className="font-headline text-5xl font-black italic text-secondary-container leading-none block ml-12 uppercase">ताज़ा</span>
                        </div>
                    </aside>
                </div>
            </main>

            {/* Success Indicator Floating */}
            <div className="fixed bottom-10 left-10 hidden md:flex items-center gap-4 bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-2xl border border-white/50 animate-bounce transition-all z-[100]">
                <div className="w-10 h-10 bg-secondary-container rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
                </div>
                <div>
                    <p className="font-label text-xs font-bold uppercase">Trending Now</p>
                    <p className="font-body text-xs text-on-surface-variant">24 people ordered in last hour</p>
                </div>
            </div>
        </div>
    );
};

export default Order;
