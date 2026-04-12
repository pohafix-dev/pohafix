const Shop = () => {
    return (
        <main className="pt-24 lg:pt-32 pb-10 overflow-x-hidden">
            {/* Hero Section: Editorial Layout */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-24">
                {/* Asymmetric Image Column */}
                <div className="lg:col-span-7 relative">
                    <div className="rounded-2xl overflow-hidden bg-surface-container-low aspect-[4/5] lg:aspect-[3/4]">
                        <img 
                            className="w-full h-full object-cover" 
                            alt="Close-up of premium artisanal poha grains in a vintage ceramic bowl" 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXfhYj6wuX-Hu046DbIZwQe_BKGTcBW5VWYGkqpoPwBPmZqTH8T6f1SjfRFiS7XdHa5ExDK4hX79aD_RLZgjudG4G9_bqmglPGHvmp1vo5z3ARHWAcn9PMobdfzPFKxj00p_n3zRorX6zWWgtHJZ_enSpx4lt6Lco8mrpL0eU5HCVNRAKHPNFCzVQyuBEM1J5NG3AaDDTZNBTwmxCpnfp89HWdznWeZFPLDGfRMAsc_aBUcCdO9E2tC4wn2nDjZ-9HtmF9Uv7DZQ" 
                        />
                    </div>
                    <div className="absolute -bottom-8 -right-8 hidden lg:block w-64 h-64 rounded-2xl overflow-hidden border-8 border-surface shadow-xl">
                        <img 
                            className="w-full h-full object-cover" 
                            alt="Traditional Indori breakfast spread with golden poha" 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2AeZj33ZDxr5hstC-U31joqu-6jnKncTsMfDFYg4w3krHL1d-8BsGluiV3WYomQFg2gu6TWWSMC8dB6Oce5GC4lVSVClq6UmeMP8bErLlrBlaf9-dJ18kTdqsIbtrODQ-heZO7zDxAQL8I0plxbFi3bzpCO3Er0VEOdu6BM-Gr6idkgxulLERqwrqRfPgMguRBoX1zxz-OY5FNLFqVx2hNRyvD04K6UUdTBLUsCzqZ1OQ75rZlvKU7TnSCr7P_JbDAillVgH7zA" 
                        />
                    </div>
                </div>
                {/* Product Details Column */}
                <div className="lg:col-span-5 flex flex-col justify-center">
                    <div className="flex gap-2 mb-6">
                        <span className="px-4 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-widest">Made-to-order</span>
                        <span className="px-4 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant text-xs font-bold uppercase tracking-widest">100% Preservative Free</span>
                    </div>
                    <h1 className="text-5xl lg:text-6xl font-black text-on-surface tracking-tight mb-4 leading-tight">
                        Pohafix: Authentic <span className="text-primary">Indori Poha</span>
                    </h1>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="flex text-secondary">
                            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star_half</span>
                        </div>
                        <span className="text-on-surface-variant font-medium">(482 Reviews)</span>
                    </div>
                    <div className="mb-10">
                        <p className="text-4xl font-bold text-on-surface mb-2">₹249.00</p>
                        <p className="text-on-surface-variant leading-relaxed">Pack of 5 individual servings (75g each). Experience the soul of Indore in every bite.</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <button className="w-full bg-primary hover:bg-primary-container text-on-primary py-5 rounded-full font-bold text-lg transition-all active:scale-95 shadow-lg shadow-primary/20">
                            Add to Cart
                        </button>
                        <div className="flex items-center justify-center gap-6 py-4 border-t border-outline-variant/20">
                            <div className="flex items-center gap-2 text-sm font-semibold text-tertiary">
                                <span className="material-symbols-outlined">bolt</span>
                                Just Add Hot Water
                            </div>
                            <div className="flex items-center gap-2 text-sm font-semibold text-secondary">
                                <span className="material-symbols-outlined">eco</span>
                                Healthy & Tasty
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Narrative Section */}
            <section className="bg-surface-container-low py-24">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">The Heritage</span>
                    <h2 className="text-4xl font-extrabold mb-8 tracking-tight">The Authentic Taste of Indore</h2>
                    <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed max-w-3xl mx-auto">
                        <p>Our Pohafix journey begins in the heart of Malwa, where we source premium quality medium-thick rice flakes, specifically chosen for their ability to remain fluffy yet firm. No mass production, no stale inventory.</p>
                        <p>Each batch is crafted only after you place your order, blending handpicked spices—the signature Indori Jeeravan, Fennel seeds, and a hint of turmeric—to recreate that nostalgic morning vibe of Rajwada. It’s not just instant food; it’s a preserved tradition.</p>
                    </div>
                </div>
            </section>

            {/* Preparation Guide: 4-Step Process */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-black mb-16 text-center">Ready in 4 Simple Steps</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="flex flex-col items-center text-center group">
                        <div className="w-20 h-20 rounded-full bg-surface-container-high flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-on-primary transition-colors">
                            <span className="material-symbols-outlined text-4xl">nest_remote_comfort_sensor</span>
                        </div>
                        <h3 className="font-bold mb-2">1. Empty</h3>
                        <p className="text-sm text-on-surface-variant">Pour the Pohafix mix into a bowl.</p>
                    </div>
                    <div className="flex flex-col items-center text-center group">
                        <div className="w-20 h-20 rounded-full bg-surface-container-high flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-on-primary transition-colors">
                            <span className="material-symbols-outlined text-4xl">water_drop</span>
                        </div>
                        <h3 className="font-bold mb-2">2. Add Water</h3>
                        <p className="text-sm text-on-surface-variant">Pour boiling water up to the marked line.</p>
                    </div>
                    <div className="flex flex-col items-center text-center group">
                        <div className="w-20 h-20 rounded-full bg-surface-container-high flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-on-primary transition-colors">
                            <span className="material-symbols-outlined text-4xl">restaurant_menu</span>
                        </div>
                        <h3 className="font-bold mb-2">3. Cover</h3>
                        <p className="text-sm text-on-surface-variant">Close the lid and wait for 4 minutes.</p>
                    </div>
                    <div className="flex flex-col items-center text-center group">
                        <div className="w-20 h-20 rounded-full bg-surface-container-high flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-on-primary transition-colors">
                            <span className="material-symbols-outlined text-4xl">soup_kitchen</span>
                        </div>
                        <h3 className="font-bold mb-2">4. Stir</h3>
                        <p className="text-sm text-on-surface-variant">Give it a gentle stir and enjoy hot!</p>
                    </div>
                </div>
                <div className="mt-16 rounded-2xl overflow-hidden aspect-video max-w-4xl mx-auto shadow-2xl">
                    <img 
                        className="w-full h-full object-cover" 
                        alt="High-resolution lifestyle collage showing steam rising from Indori Poha" 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZ7iGM2C2Br1elRYU3fLeAYYU6vmBk7hZeBHG-RPtVpBRSnKWNEtrtQylQIvyvmeiEND3gTPAaGRhT_7OA5nkh3UUTRk-ofEO5jTZ7UhbBcKhvWjCMIzJX9uZt6Smt2lPmC9eXqbL3RWj5GwhatBA_7JvsNmM3benmbbBc5PKCQNBBRuoflekJbKgbonjlOlg2sW1OlMIrrKFNwoX3YGkZeN73rrORf6s42XG0AznLMHV1EFaE4iRXq1djjgBqZv-CjQ8IiE90CQ" 
                    />
                </div>
            </section>

            {/* Freshness Timeline */}
            <section className="bg-[#1a1c1a] text-white py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black mb-4">Our Freshness Promise</h2>
                        <p className="text-stone-400">We don't stock. We create for you.</p>
                    </div>
                    <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-stone-700 -z-0"></div>
                        
                        <div className="relative z-10 flex flex-col items-center text-center bg-[#1a1c1a] px-4">
                            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4 ring-8 ring-[#1a1c1a]">
                                <span className="material-symbols-outlined">shopping_basket</span>
                            </div>
                            <h4 className="font-bold mb-1">Order Received</h4>
                            <p className="text-xs text-stone-400">Day 0</p>
                        </div>
                        
                        <div className="relative z-10 flex flex-col items-center text-center bg-[#1a1c1a] px-4">
                            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-4 ring-8 ring-[#1a1c1a]">
                                <span className="material-symbols-outlined">outdoor_grill</span>
                            </div>
                            <h4 className="font-bold mb-1">Hand-Mixed Batch</h4>
                            <p className="text-xs text-stone-400">Day 1 Morning</p>
                        </div>
                        
                        <div className="relative z-10 flex flex-col items-center text-center bg-[#1a1c1a] px-4">
                            <div className="w-12 h-12 rounded-full bg-tertiary flex items-center justify-center mb-4 ring-8 ring-[#1a1c1a]">
                                <span className="material-symbols-outlined">inventory_2</span>
                            </div>
                            <h4 className="font-bold mb-1">Packaged Fresh</h4>
                            <p className="text-xs text-stone-400">Day 1 Afternoon</p>
                        </div>
                        
                        <div className="relative z-10 flex flex-col items-center text-center bg-[#1a1c1a] px-4">
                            <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center mb-4 ring-8 ring-[#1a1c1a]">
                                <span className="material-symbols-outlined">local_shipping</span>
                            </div>
                            <h4 className="font-bold mb-1">Express Delivery</h4>
                            <p className="text-xs text-stone-400">Day 2-3</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nutritional & Ingredients */}
            <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="bg-surface-container-low p-8 md:p-12 rounded-2xl">
                    <h3 className="text-2xl font-black mb-8 border-b-2 border-primary/20 pb-4">Ingredients</h3>
                    <p className="text-on-surface-variant leading-relaxed mb-8">
                        Premium Beaten Rice (Poha), Peanut Oil, Peanuts, Onion Flakes, Green Chilli, Curry Leaves, Mustard Seeds, Fennel Seeds (Saunf), Turmeric, Indori Jeeravan Masala (Salt, Coriander, Cumin, Dry Mango, Asafoetida, Black Pepper), Sugar, Lemon Powder.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <span className="px-4 py-2 bg-white rounded-lg text-xs font-bold shadow-sm">NO ARTIFICIAL COLORS</span>
                        <span className="px-4 py-2 bg-white rounded-lg text-xs font-bold shadow-sm">NO MSG</span>
                        <span className="px-4 py-2 bg-white rounded-lg text-xs font-bold shadow-sm">NO PRESERVATIVES</span>
                    </div>
                </div>
                <div className="bg-surface-container-lowest border border-outline-variant/10 p-8 md:p-12 rounded-2xl shadow-sm">
                    <h3 className="text-2xl font-black mb-8 border-b-2 border-secondary/20 pb-4">Nutritional Facts</h3>
                    <div className="space-y-4">
                        <div className="flex justify-between border-b border-outline-variant/10 pb-2">
                            <span className="font-medium">Energy</span>
                            <span className="font-bold">382 kcal</span>
                        </div>
                        <div className="flex justify-between border-b border-outline-variant/10 pb-2">
                            <span className="font-medium">Protein</span>
                            <span className="font-bold">8.4 g</span>
                        </div>
                        <div className="flex justify-between border-b border-outline-variant/10 pb-2">
                            <span className="font-medium">Carbohydrates</span>
                            <span className="font-bold">72.1 g</span>
                        </div>
                        <div className="flex justify-between border-b border-outline-variant/10 pb-2">
                            <span className="font-medium">Total Fat</span>
                            <span className="font-bold">6.8 g</span>
                        </div>
                        <div className="flex justify-between border-b border-outline-variant/10 pb-2">
                            <span className="font-medium">Dietary Fiber</span>
                            <span className="font-bold">4.2 g</span>
                        </div>
                        <div className="flex justify-between border-b border-outline-variant/10 pb-2">
                            <span className="font-medium">Sodium</span>
                            <span className="font-bold">580 mg</span>
                        </div>
                        <p className="text-[10px] text-on-surface-variant italic mt-4">*Values are per 100g of dry mix as per analysis of image-5 data.</p>
                    </div>
                </div>
            </section>

            {/* Final CTA / Bento Grid Elements */}
            <section className="mb-24 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 relative h-80 rounded-2xl overflow-hidden group">
                        <img 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                            alt="Close up of nutritional label and premium quality seal" 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPGa8niynHwEN_g7kEKKDMPv5eqIeJwgSCMYtXcMNmD4rfz7fzWnY3itNwZcIRmlO0HP6g3x2i8XXROU8F2sUDv-Ggwltct3iT0gY_r1ipRA7-rzd9vRQ-G0fPZXTiB7L-DCnzbumYIyCKqIdoRO1M6q1NAeBijZdrKKxziYqPsBKRsimr93hDBi-eE3yrDf-wJJ0pgZMZ_VzR7sIo9KsabRStCL6CbpALfn0J0t0EvA9ZGWwqgL7zFVU5eJPjQZ4GLzNaMddalw" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-10">
                            <h3 className="text-white text-3xl font-black mb-2">Quality is our only ingredient.</h3>
                            <p className="text-stone-300">Lab tested and approved for purity.</p>
                        </div>
                    </div>
                    <div className="bg-secondary-container rounded-2xl p-10 flex flex-col justify-center items-center text-center">
                        <span className="material-symbols-outlined text-5xl mb-4 text-on-secondary-container">local_fire_department</span>
                        <h3 className="text-2xl font-black text-on-secondary-container mb-2">Bestseller</h3>
                        <p className="text-on-secondary-container/80 text-sm mb-6">Join 10,000+ happy breakfast lovers.</p>
                        <button className="bg-on-secondary-container text-secondary-container px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs">Buy Now</button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Shop;
