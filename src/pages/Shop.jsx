import React, { useState, useEffect } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Shop = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const planFromUrl = parseInt(searchParams.get('plan'));
    const [selectedPlan, setSelectedPlan] = useState(isNaN(planFromUrl) ? 0 : planFromUrl);
    const [qty, setQty] = useState(1);
    const [openFaq, setOpenFaq] = useState(null);
    const [visibleReviews, setVisibleReviews] = useState(5);
    const [showFloatingCTA, setShowFloatingCTA] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 800) {
                setShowFloatingCTA(true);
            } else {
                setShowFloatingCTA(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const [reviews, setReviews] = useState([
        {
            id: 1,
            name: "Anish Sharma",
            verified: true,
            date: "May 03, 2026",
            stars: 5,
            title: "Exactly like Sarafa Bazaar!",
            body: "I was skeptical about 'instant' poha but this blew my mind. The rice flakes don't get mushy and the Jeeravan taste is spot on. It's like having a breakfast stall in my kitchen. Highly recommended for students abroad!",
            helpful: 42,
            unhelpful: 0,
            reply: "Dear Anish, we are thrilled to hear that PohaFix brought back memories of Sarafa! Our goal was to preserve that exact Indori soul. Thank you for your trust. - Team PohaFix"
        },
        {
            id: 2,
            name: "Priya V.",
            verified: true,
            date: "May 03, 2026",
            stars: 5,
            title: "Clean ingredients, great taste",
            body: "Love that there's no palm oil or MSG. Most instant foods feel heavy, but this one is light and authentic. The Ratlami Sev included is a nice touch. Perfect for my office lunch.",
            helpful: 18,
            unhelpful: 2,
            reply: null
        },
        {
            id: 3,
            name: "Rahul Gupta",
            verified: true,
            date: "May 02, 2026",
            stars: 4,
            title: "Best travel companion",
            body: "Carried 10 packs for my Europe trip. Saved me from expensive, bland food. Only giving 4 stars because I wish the pomegranate flavor was even stronger, but overall a lifesaver!",
            helpful: 56,
            unhelpful: 1,
            reply: "Hi Rahul, thank you for taking us on your trip! We hear you on the pomegranate flavor—we are currently tweaking our mix for more vibrancy. Safe travels! - PohaFix Support"
        },
        {
            id: 4,
            name: "Megha Jain",
            verified: false,
            date: "May 01, 2026",
            stars: 5,
            title: "Bachpan ki yaad aa gayi",
            body: "The ritual of adding hot water and waiting for 5 mins is so simple. My kids love it too. No more morning breakfast stress. Authentic Indori Zayka at its best.",
            helpful: 12,
            unhelpful: 0,
            reply: null
        },
        {
            id: 5,
            name: "Sandeep Patidar",
            verified: true,
            date: "April 29, 2026",
            stars: 5,
            title: "Best Indori Poha Online",
            body: "Being from Indore and living in Bangalore, I missed the morning poha ritual. This is the only brand that gets the texture right. The masala is perfectly balanced.",
            helpful: 34,
            unhelpful: 3,
            reply: "Shukriya Sandeep! Being compared to the original Indore taste is the biggest compliment for us."
        },
        {
            id: 6,
            name: "Kavita R.",
            verified: true,
            date: "April 25, 2026",
            stars: 5,
            title: "Super Convenient",
            body: "Tastes fresh even after 5 mins of soaking. I use it for my early morning shifts. Saved me so much time!",
            helpful: 9,
            unhelpful: 0,
            reply: null
        },
        {
            id: 7,
            name: "Vikram Singh",
            verified: true,
            date: "April 22, 2026",
            stars: 4,
            title: "Good but need more Sev",
            body: "Taste is 5/5. Just wish the sev pack was a bit bigger because it's so tasty! Will order the combo next time.",
            helpful: 21,
            unhelpful: 12,
            reply: "Point noted Vikram! Check out our 'Mystery Combo' for extra Sev lovers."
        },
        {
            id: 8,
            name: "Sunil K.",
            verified: true,
            date: "April 20, 2026",
            stars: 5,
            title: "Authentic spices!",
            body: "The jeeravan is exactly how it should be. Not too salty, just perfectly tangy and spicy. Best for a quick office breakfast.",
            helpful: 7,
            unhelpful: 0,
            reply: null
        },
        {
            id: 9,
            name: "Aditi G.",
            verified: true,
            date: "April 15, 2026",
            stars: 5,
            title: "Lifesaver for students",
            body: "I live in Canada and missing home food is real. This poha is the only thing that tastes like home. Thank you PohaFix!",
            helpful: 112,
            unhelpful: 4,
            reply: "So glad we could help, Aditi! Canada is a long way from home, stay warm!"
        },
        {
            id: 10,
            name: "Rajesh Khanna",
            verified: true,
            date: "April 10, 2026",
            stars: 5,
            title: "Quick and Healthy",
            body: "I've replaced my oily street poha with this. Much cleaner and I don't feel sleepy after breakfast. Great quality.",
            helpful: 19,
            unhelpful: 1,
            reply: null
        },
        {
            id: 11,
            name: "Suresh Meena",
            verified: true,
            date: "April 08, 2026",
            stars: 5,
            title: "Pure Jain Taste!",
            body: "The best part is no onion and garlic. Hard to find such good taste without them. Truly Jain's ultimate choice. My whole family loves it.",
            helpful: 25,
            unhelpful: 0,
            reply: "Thank you Suresh! We take great pride in our Jain-friendly recipe."
        },
        {
            id: 12,
            name: "Manish T.",
            verified: true,
            date: "April 05, 2026",
            stars: 5,
            title: "Indore in Mumbai",
            body: "Living in Mumbai, I was missing my Indori roots. PohaFix is a lifesaver. Ready in 5 mins and taste is 10/10.",
            helpful: 14,
            unhelpful: 0,
            reply: null
        },
        {
            id: 13,
            name: "Pooja Shah",
            verified: true,
            date: "April 02, 2026",
            stars: 5,
            title: "Perfect for Paryushan",
            body: "Clean, pure, and delicious. No onion garlic is a big plus. Buying in bulk for the festive season.",
            helpful: 89,
            unhelpful: 2,
            reply: "So glad to be part of your celebrations, Pooja!"
        },
        {
            id: 14,
            name: "Gautam V.",
            verified: true,
            date: "March 30, 2026",
            stars: 4,
            title: "Very fast delivery",
            body: "Ordered from Pune and got it in 2 days. Packaging is premium. Taste is authentic.",
            helpful: 6,
            unhelpful: 0,
            reply: null
        },
        {
            id: 15,
            name: "Rishi K.",
            verified: true,
            date: "March 28, 2026",
            stars: 5,
            title: "Student essential",
            body: "I'm a student in London and PohaFix is my go-to breakfast. Quick, healthy, and keeps me full. Much better than cereal.",
            helpful: 45,
            unhelpful: 0,
            reply: "Stay focused on your studies, Rishi! Glad we can help with breakfast."
        },
        {
            id: 16,
            name: "Sneha Jain",
            verified: true,
            date: "March 25, 2026",
            stars: 5,
            title: "Absolute Jain Choice",
            body: "Finally a brand that understands the Jain palette. No root vegetables and still so much flavor. 5 stars!",
            helpful: 32,
            unhelpful: 1,
            reply: null
        },
        {
            id: 17,
            name: "Amitabh S.",
            verified: true,
            date: "March 22, 2026",
            stars: 5,
            title: "Poha Lover's Dream",
            body: "The texture of the rice flakes is perfect. Not soggy at all. The Ratlami sev adds that extra punch.",
            helpful: 19,
            unhelpful: 0,
            reply: null
        },
        {
            id: 18,
            name: "Jyoti R.",
            verified: true,
            date: "March 20, 2026",
            stars: 5,
            title: "Morning Routine Fixed",
            body: "No more cutting onions and frying. Just hot water and done. PohaFix has made my mornings so peaceful.",
            helpful: 27,
            unhelpful: 0,
            reply: null
        },
        {
            id: 19,
            name: "Karan B.",
            verified: true,
            date: "March 15, 2026",
            stars: 4,
            title: "Great taste",
            body: "Almost as good as the street poha. Very impressed with the quality and freshness.",
            helpful: 11,
            unhelpful: 0,
            reply: null
        },
        {
            id: 20,
            name: "Sarika M.",
            verified: true,
            date: "March 12, 2026",
            stars: 5,
            title: "Healthy Snacking",
            body: "I use it as an evening snack too. Very light and satisfying. My kids love it without any extra toppings.",
            helpful: 15,
            unhelpful: 0,
            reply: null
        },
        {
            id: 21,
            name: "Vinay Singh",
            verified: true,
            date: "March 10, 2026",
            stars: 5,
            title: "Excellent Service",
            body: "Had a small issue with my order and the support team fixed it immediately. Product is also great.",
            helpful: 8,
            unhelpful: 0,
            reply: "Always here to help, Vinay!"
        },
        {
            id: 22,
            name: "Meera K.",
            verified: true,
            date: "March 05, 2026",
            stars: 5,
            title: "Jain Poha is Best",
            body: "Tried many brands but this is truly Jain friendly. No onion garlic and still authentic. Buying again.",
            helpful: 41,
            unhelpful: 3,
            reply: null
        },
        {
            id: 23,
            name: "Harsh V.",
            verified: true,
            date: "March 01, 2026",
            stars: 5,
            title: "Office Life Savior",
            body: "Keep a box in my desk. Whenever I'm hungry, just add hot water from the pantry. Perfect solution.",
            helpful: 22,
            unhelpful: 0,
            reply: null
        },
        {
            id: 24,
            name: "Deepali S.",
            verified: true,
            date: "February 25, 2026",
            stars: 5,
            title: "Simply Delicious",
            body: "The spices are so vibrant. You can tell they are freshly ground. Love the aroma!",
            helpful: 13,
            unhelpful: 0,
            reply: null
        },
        {
            id: 25,
            name: "Rohan D.",
            verified: true,
            date: "February 20, 2026",
            stars: 4,
            title: "Good product",
            body: "Solid taste and very convenient. Will definitely recommend to friends.",
            helpful: 5,
            unhelpful: 0,
            reply: null
        },
        {
            id: 26,
            name: "Nikhil Jain",
            verified: true,
            date: "February 15, 2026",
            stars: 5,
            title: "Ultimate Jain Choice",
            body: "Being a strict Jain, finding instant food is a nightmare. PohaFix is a blessing. No onion garlic and still better than what I make at home!",
            helpful: 67,
            unhelpful: 0,
            reply: "Jay Jinendra Nikhil! We are happy to serve you."
        },
        {
            id: 27,
            name: "Anjali Deshmukh",
            verified: true,
            date: "February 12, 2026",
            stars: 5,
            title: "Best for Breakfast",
            body: "My kids used to skip breakfast but now they ask for PohaFix. It's so quick and the ratlami sev is just perfect.",
            helpful: 21,
            unhelpful: 0,
            reply: null
        },
        {
            id: 28,
            name: "Sarthak G.",
            verified: true,
            date: "February 10, 2026",
            stars: 4,
            title: "Good for trekking",
            body: "Carried it for my Himalayan trek. Hot water from the flask and my energy was back. 4 stars because I want more varieties soon!",
            helpful: 8,
            unhelpful: 0,
            reply: "Stay tuned Sarthak, new flavors coming soon!"
        },
        {
            id: 29,
            name: "Kavita Maheshwari",
            verified: true,
            date: "February 05, 2026",
            stars: 5,
            title: "Authentic Indori Taste",
            body: "Sahi mein Indore ki yaad dila di. Jeeravan masala is outstanding. Definitely the best Jain Poha online.",
            helpful: 34,
            unhelpful: 0,
            reply: null
        },
        {
            id: 30,
            name: "Rahul Mehra",
            verified: true,
            date: "February 02, 2026",
            stars: 5,
            title: "Impressive Quality",
            body: "Rice flakes are long and clean. Spices are balanced. No oily aftertaste. High quality product.",
            helpful: 12,
            unhelpful: 0,
            reply: null
        },
        {
            id: 31,
            name: "Pooja Varma",
            verified: true,
            date: "January 30, 2026",
            stars: 5,
            title: "Best Travel Friend",
            body: "I travel a lot for work and hotel food is boring. PohaFix keeps me connected to my roots. Love it!",
            helpful: 56,
            unhelpful: 1,
            reply: null
        },
        {
            id: 32,
            name: "Vikrant S.",
            verified: true,
            date: "January 28, 2026",
            stars: 5,
            title: "Super Convenient",
            body: "Add water, wait 5 mins, eat. Can't get simpler than this. Taste is surprisingly fresh.",
            helpful: 18,
            unhelpful: 0,
            reply: null
        },
        {
            id: 33,
            name: "Seema Jain",
            verified: true,
            date: "January 25, 2026",
            stars: 5,
            title: "Sacred Taste",
            body: "Cleanest ingredients I've seen in instant food. No onion garlic makes it very pure. Thank you PohaFix.",
            helpful: 42,
            unhelpful: 0,
            reply: null
        },
        {
            id: 34,
            name: "Yash Patidar",
            verified: true,
            date: "January 22, 2026",
            stars: 4,
            title: "Good snack",
            body: "Really nice and light. Perfect for mid-day hunger. Will order the 600g combo next time.",
            helpful: 9,
            unhelpful: 0,
            reply: null
        },
        {
            id: 35,
            name: "Nandini R.",
            verified: true,
            date: "January 20, 2026",
            stars: 5,
            title: "Bachpan ka Swad",
            body: "The pomegranate seeds and peanut mix is so crunchy. Feels like home made. Highly recommended.",
            helpful: 27,
            unhelpful: 0,
            reply: null
        },
        {
            id: 36,
            name: "Arvind Gupta",
            verified: true,
            date: "January 15, 2026",
            stars: 5,
            title: "No MSG is a big plus",
            body: "Finally a healthy instant meal. No chemicals, just real spices. Feel energetic after eating.",
            helpful: 31,
            unhelpful: 0,
            reply: null
        },
        {
            id: 37,
            name: "Deepak S.",
            verified: true,
            date: "January 12, 2026",
            stars: 5,
            title: "Highly Recommend",
            body: "Fast delivery and great taste. The ratlami sev is the real hero here. Best combo!",
            helpful: 15,
            unhelpful: 0,
            reply: null
        },
        {
            id: 38,
            name: "Mansi Shah",
            verified: true,
            date: "January 10, 2026",
            stars: 5,
            title: "True Jain Friendly",
            body: "No root vegetables used. Very safe for our community. Taste is better than any onion variant.",
            helpful: 88,
            unhelpful: 2,
            reply: "We are honored to be your choice, Mansi!"
        },
        {
            id: 39,
            name: "Rohit K.",
            verified: true,
            date: "January 05, 2026",
            stars: 4,
            title: "Decent Poha",
            body: "Good alternative to regular breakfast. Texture is nice and fluffy.",
            helpful: 7,
            unhelpful: 0,
            reply: null
        },
        {
            id: 40,
            name: "Suman Lal",
            verified: true,
            date: "January 02, 2026",
            stars: 5,
            title: "Very Satisfied",
            body: "Portion size is good for one person. Very filling and the aroma is beautiful.",
            helpful: 12,
            unhelpful: 0,
            reply: null
        },
        {
            id: 41,
            name: "Ashish J.",
            verified: true,
            date: "December 28, 2025",
            stars: 5,
            title: "Best for Bachelors",
            body: "Cooking for one is hard. This is my dinner many nights. Quick and healthy.",
            helpful: 44,
            unhelpful: 0,
            reply: null
        },
        {
            id: 42,
            name: "Priyanka T.",
            verified: true,
            date: "December 25, 2025",
            stars: 5,
            title: "Holiday Lifesaver",
            body: "Carried it on my family trip. Kids loved it and we saved a lot on expensive hotel breakfasts.",
            helpful: 23,
            unhelpful: 0,
            reply: null
        },
        {
            id: 43,
            name: "Sandeep V.",
            verified: true,
            date: "December 22, 2025",
            stars: 5,
            title: "Perfect Spices",
            body: "The jeeravan mix is very balanced. Not too spicy, just perfect. Real Indore feel.",
            helpful: 19,
            unhelpful: 0,
            reply: null
        },
        {
            id: 44,
            name: "Tanvi S.",
            verified: true,
            date: "December 20, 2025",
            stars: 5,
            title: "Love the Crunch",
            body: "The nuts and sev stay crunchy even after adding water. Very high tech packaging!",
            helpful: 14,
            unhelpful: 0,
            reply: null
        },
        {
            id: 45,
            name: "Ramesh Jain",
            verified: true,
            date: "December 15, 2025",
            stars: 5,
            title: "Best Jain Food",
            body: "Cleanest instant food I've seen. No onion garlic is very hard to find with this taste.",
            helpful: 52,
            unhelpful: 1,
            reply: null
        },
        {
            id: 46,
            name: "Kunal G.",
            verified: true,
            date: "December 12, 2025",
            stars: 4,
            title: "Value for money",
            body: "Price is very fair for the quality you get. The combo packs are a steal.",
            helpful: 6,
            unhelpful: 0,
            reply: null
        },
        {
            id: 47,
            name: "Megha D.",
            verified: true,
            date: "December 10, 2025",
            stars: 5,
            title: "Simply Amazing",
            body: "My husband loves it for his late night work snacks. Very light on the stomach.",
            helpful: 11,
            unhelpful: 0,
            reply: null
        },
        {
            id: 48,
            name: "Sanjay Shah",
            verified: true,
            date: "December 05, 2025",
            stars: 5,
            title: "Purity at its best",
            body: "Excellent taste without any root vegetables. Truly the ultimate choice for Jains.",
            helpful: 95,
            unhelpful: 2,
            reply: "Thank you for the high praise, Sanjay!"
        },
        {
            id: 49,
            name: "Rekha P.",
            verified: true,
            date: "December 02, 2025",
            stars: 5,
            title: "Fresh Aroma",
            body: "As soon as you add water, the kitchen smells like an Indori breakfast stall. Loved it!",
            helpful: 17,
            unhelpful: 0,
            reply: null
        },
        {
            id: 50,
            name: "Vivek J.",
            verified: true,
            date: "November 28, 2025",
            stars: 5,
            title: "Excellent Product",
            body: "Highly consistent taste. Have ordered 3 times now and always perfect. 5 stars.",
            helpful: 22,
            unhelpful: 0,
            reply: null
        }
    ]);

    const [showReviewForm, setShowReviewForm] = useState(false);
    const [newReview, setNewReview] = useState({ name: '', title: '', body: '', stars: 5 });

    const handleVote = (id, type) => {
        setReviews(prev => prev.map(rev => {
            if (rev.id === id) {
                return {
                    ...rev,
                    [type]: rev[type] + 1
                };
            }
            return rev;
        }));
    };

    const submitReview = (e) => {
        e.preventDefault();
        const reviewToAdd = {
            ...newReview,
            id: Date.now(),
            verified: false,
            date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
            helpful: 0,
            unhelpful: 0,
            reply: null
        };
        setReviews([reviewToAdd, ...reviews]);
        setShowReviewForm(false);
        setNewReview({ name: '', title: '', body: '', stars: 5 });
    };

    const plans = [
        {
            id: 0,
            name: "Pohafix - Khatta Mitha Indori Poha, 300 Gram Pack of 5 / Real Taste of Indore / No Preservative",
            subtitle: "Premium Ready-to-Eat Indori Poha - Just Add Hot Water for Healthy Breakfast",
            description: "1 Full 300g Box (5 Individual Quick-Prep Servings). 100% natural, trans-fat-free, healthy instant meals. No chemical additives.",
            price: 189,
            originalPrice: 220,
            discount: "14% OFF",
            tag: "POPULAR",
            image: "/box-front.webp",
            thumbnails: ["/box-front.webp", "/box-left.webp", "/box-right.webp", "/ingredients-report.webp"],
            features: ["5 Single Servings", "Jeeravan Spice Mix", "Ratlam Sev Included"]
        },
        {
            id: 1,
            name: "Pohafix - Khatta Mitha Indori Poha, 600 Gram Pack of 10 / Double Joy / Healthy Office Breakfast",
            subtitle: "Best Value Family Combo - Ready in 5 Minutes, Real Indori Taste",
            description: "2 Full 300g Boxes (10 Individual Quick-Prep Servings). Perfect instant breakfast option for weight loss, travel, and active families.",
            price: 290,
            originalPrice: 378,
            discount: "23% OFF",
            tag: "BEST VALUE",
            image: "/combo-2box.webp",
            thumbnails: ["/combo-2box.webp", "/box-group.webp", "/box-front.webp"],
            features: ["10 Single Servings", "2x Sev Packs", "Free Shipping"]
        },
        {
            id: 2,
            name: "Pohafix - Khatta Mitha Indori Poha + Pure Homemade Tasty Ratlami Sev / Double Treat / Real Indori Taste",
            subtitle: "Exclusive Heritage Combo - Authentic Jeeravan Poha with Crispy Ratlami Sev",
            description: "1 Full 300g Box (5 Servings) paired with 150g of crispy Homemade Ratlami Sev. Experience authentic Indore street food instantly.",
            price: 290,
            originalPrice: 350,
            discount: "17% OFF",
            tag: "LIMITED",
            image: "/combo-sev.webp",
            thumbnails: ["/combo-sev.webp", "/combo-single.webp", "/box-front.webp"],
            features: ["5 Single Servings", "150g Extra Sev", "Premium Pomegranate"]
        }
    ];

    const currentPlan = plans[selectedPlan];
    const [mainImage, setMainImage] = useState(currentPlan.image);

    // Zoom & Lightbox States
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [lightboxScale, setLightboxScale] = useState(1);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setZoomPos({ x, y });
    };

    const openLightbox = () => {
        const index = currentPlan.thumbnails?.indexOf(mainImage) ?? 0;
        setLightboxIndex(index >= 0 ? index : 0);
        setLightboxScale(1);
        setIsLightboxOpen(true);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        setMainImage(currentPlan.image);
        setQty(1);
    }, [selectedPlan]);

    const handleBuyNow = () => {
        // Trigger Google Tag Add to Cart Event
        if (currentPlan && typeof window.gtag === 'function') {
            window.gtag('event', 'add_to_cart', {
                value: currentPlan.price * qty,
                currency: 'INR',
                items: [{
                    item_name: currentPlan.name,
                    quantity: qty,
                    price: currentPlan.price
                }]
            });
        }
        navigate(`/order?plan=${selectedPlan}&qty=${qty}`);
    };

    return (
        <>
            <Helmet>
                <title>Pohafix Instant Poha 80g – Ready in 5 Minutes | Buy Online</title>
                <meta name="description" content="Pohafix 80g instant poha – just add hot water, ready in 5 minutes. No preservatives. Order online with fast delivery." />
                <meta name="keywords" content="Instant Poha, buy organic poha, ready to cook poha mix, poha in 5 minutes, instant meals for students abroad, Jain friendly breakfast, ready to eat indori breakfast, Jains ultimate choice" />
                
                {/* Product Schema for Shop */}
                <script type="application/ld+json">
                    {`
                    {
                      "@context": "https://schema.org/",
                      "@type": "Product",
                      "name": "Pohafix Instant Poha",
                      "image": ["https://pohafix.com/box-front.webp"],
                      "description": "Premium ready-to-use Indori Poha with authentic spices and Ratlami Sev. No preservatives. Ready in 5 minutes.",
                      "sku": "PF-ORIG-300",
                      "brand": {
                        "@type": "Brand",
                        "name": "Pohafix"
                      },
                      "offers": {
                        "@type": "AggregateOffer",
                        "url": "https://pohafix.com/shop",
                        "priceCurrency": "INR",
                        "lowPrice": "189",
                        "highPrice": "290",
                        "offerCount": "3",
                        "availability": "https://schema.org/InStock"
                      },
                      "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.4",
                        "reviewCount": "858"
                      }
                    }
                    `}
                </script>
                
                {/* FAQ Schema for Google PAA (People Also Ask) */}
                <script type="application/ld+json">
                    {`
                    {
                      "@context": "https://schema.org",
                      "@type": "FAQPage",
                      "mainEntity": [
                        {
                          "@type": "Question",
                          "name": "Is instant poha healthy?",
                          "acceptedAnswer": { 
                            "@type": "Answer",
                            "text": "Yes. Poha is low in calories, rich in iron and carbohydrates. Pohafix instant poha contains no artificial preservatives or MSG."
                          }
                        },
                        {
                          "@type": "Question",
                          "name": "How do I make Pohafix instant poha?",
                          "acceptedAnswer": { 
                            "@type": "Answer",
                            "text": "Open the pack, add hot water, wait 5 minutes, mix and eat. No cooking needed."
                          }
                        },
                        {
                          "@type": "Question",
                          "name": "How many calories in instant poha?",
                          "acceptedAnswer": { 
                            "@type": "Answer",
                            "text": "One serving of Pohafix (80g) contains approximately 250-280 calories, making it a light and nutritious breakfast."
                          }
                        }
                      ]
                    }
                    `}
                </script>
            </Helmet>
            <Header />
            <main className="pt-32 lg:pt-40 pb-20 bg-white font-body">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                        {/* Left Column: Images */}
                        <div className="flex flex-col gap-4">
                            <div 
                                onMouseMove={handleMouseMove}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => { setIsHovered(false); setZoomPos({ x: 50, y: 50 }); }}
                                onClick={openLightbox}
                                className="aspect-square md:aspect-[4/5] lg:aspect-square w-full rounded-2xl bg-[#f8f5f0] border border-black/5 flex items-center justify-center p-8 relative overflow-hidden group cursor-zoom-in"
                            >
                                <AnimatePresence mode="wait">
                                        <motion.img 
                                            key={mainImage}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.2 }}
                                            src={mainImage}
                                            alt="Pohafix 80g instant poha ready-to-eat pack"
                                            fetchpriority="high"
                                            loading="eager"
                                            style={isHovered ? { transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`, scale: 2 } : { scale: 1 }}
                                            className="w-full h-full object-contain mix-blend-multiply transition-transform duration-100"
                                        />
                                </AnimatePresence>
                                
                                {/* Top Badges */}
                                <div className="absolute top-4 left-4 flex gap-2 items-center pointer-events-none">
                                    {currentPlan.tag && (
                                        <div className="bg-primary text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-sm">
                                            {currentPlan.tag}
                                        </div>
                                    )}
                                </div>

                                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md border border-black/5 px-3 py-1.5 rounded-full flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-sm">
                                    <span className="material-symbols-outlined text-[14px]">zoom_in</span>
                                    <span className="text-[9px] font-label font-bold uppercase tracking-wider text-black/70">Click to Inspect</span>
                                </div>
                            </div>

                            {/* Thumbnails */}
                            <div className="flex gap-3 overflow-x-auto pb-2 snap-x hide-scrollbar">
                                {currentPlan.thumbnails?.map((thumb, idx) => (
                                    <button 
                                        key={idx}
                                        onClick={() => setMainImage(thumb)}
                                        className={`shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-xl border-2 flex items-center justify-center p-2 snap-start transition-all ${
                                            mainImage === thumb ? 'border-primary bg-primary/5' : 'border-black/10 bg-[#f8f5f0] hover:border-black/30'
                                        }`}
                                    >
                                        <img src={thumb} alt={`${currentPlan.name} product image ${idx + 1}`} loading="eager" fetchpriority="high" className="w-full h-full object-contain mix-blend-multiply" />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Right Column: Details */}
                        <div className="flex flex-col">
                            {/* Title & Reviews */}
                            <div className="mb-6">
                                <h1 className="text-3xl md:text-5xl font-black font-headline text-black uppercase tracking-tight mb-2">
                                    Pohafix Instant Poha – Ready in 5 Minutes, No Cooking Needed
                                </h1>
                                <p className="text-primary font-bold text-lg mb-2">
                                    Selected Pack: {currentPlan.name} ({currentPlan.subtitle})
                                </p>
                                <div className="flex items-center gap-2">
                                    <div className="flex text-primary">
                                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0.4" }}>star</span>
                                    </div>
                                    <span className="text-sm font-medium text-black/60">4.4 (858 reviews)</span>
                                </div>
                            </div>

                            {/* Price Section */}
                            <div className="mb-6 border-b border-black/10 pb-6">
                                <div className="flex items-end gap-3 mb-1">
                                    <span className="text-4xl md:text-5xl font-black font-headline tracking-tighter">₹{currentPlan.price}</span>
                                    <span className="text-xl md:text-2xl font-bold text-black/40 line-through mb-1">₹{currentPlan.originalPrice}</span>
                                    <span className="bg-[#e6f4ea] text-[#137333] px-2 py-1 rounded text-xs font-black uppercase tracking-wider mb-2">{currentPlan.discount}</span>
                                </div>
                                <p className="text-xs font-medium text-black/50">MRP Inclusive of all taxes</p>
                            </div>



                            {/* Variant Selector */}
                            <div className="mb-8">
                                <p className="font-bold text-black mb-3">Select Variant</p>
                                <div className="grid grid-cols-2 gap-3">
                                    {plans.map((plan, idx) => (
                                        <button 
                                            key={plan.id}
                                            onClick={() => setSelectedPlan(idx)}
                                            className={`p-3 rounded-lg border text-left transition-all ${
                                                selectedPlan === idx 
                                                ? 'border-primary ring-1 ring-primary bg-primary/5' 
                                                : 'border-black/10 bg-[#f8f5f0] hover:border-black/30'
                                            }`}
                                        >
                                            <div className="flex justify-between items-start mb-2">
                                                <span className={`text-xs font-bold px-2 py-0.5 rounded-sm ${
                                                    selectedPlan === idx ? 'bg-primary text-white' : 'bg-black/10 text-black'
                                                }`}>
                                                    {plan.description.split('(')[0].trim()}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="font-black text-lg font-headline">₹{plan.price}</span>
                                                <span className="text-xs text-black/40 line-through font-bold">₹{plan.originalPrice}</span>
                                                <span className="text-[10px] text-primary font-bold">{plan.discount}</span>
                                            </div>
                                            <p className="text-[10px] text-[#116e2b] font-bold mt-1">Ready in 5 mins</p>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Add to Cart / Buy Now Action */}
                            <div className="flex gap-4 mb-10">
                                <div className="flex items-center bg-[#f8f5f0] border border-black/10 rounded-lg">
                                    <button 
                                        onClick={() => setQty(Math.max(1, qty - 1))}
                                        className="w-10 h-12 flex items-center justify-center text-black/60 hover:text-black font-black"
                                    >−</button>
                                    <input 
                                        type="text" 
                                        readOnly 
                                        value={qty} 
                                        className="w-10 text-center bg-transparent border-none font-bold text-lg p-0 focus:ring-0"
                                    />
                                    <button 
                                        onClick={() => setQty(qty + 1)}
                                        className="w-10 h-12 flex items-center justify-center text-black/60 hover:text-black font-black"
                                    >+</button>
                                </div>
                                <button 
                                    onClick={handleBuyNow}
                                    className="flex-1 bg-gradient-to-r from-[#fcc92f] to-[#f6bb12] text-black font-headline font-black text-xl tracking-tight uppercase rounded-lg hover:shadow-lg hover:from-[#f6bb12] hover:to-[#e5ae10] transition-all"
                                >
                                    BUY NOW
                                </button>
                            </div>

                            {/* Upgraded SEO Rich Description Section */}
                            <div className="mb-10 border-t border-black/10 pt-8">
                                <h2 className="font-headline font-black text-xl md:text-2xl uppercase mb-4 text-primary leading-tight">
                                    Indori Heritage in 5 Minutes – No Cooking, Zero Chemical Preservatives
                                </h2>
                                <p className="text-black/80 text-base leading-relaxed mb-6">
                                    Our signature <strong>{currentPlan.name}</strong> is crafted specifically for food lovers who demand authentic Indori taste without the time-consuming preparation. Sourced directly from the premium rice fields of Malwa, we select only the highest-grade organic flattened rice flakes. Coupled with our authentic hand-mixed Jeeravan spice blend and crispy Ratlami Sev, this instant poha is the healthiest breakfast choice in India. Perfect for busy office mornings, college students studying abroad, or quick travel snacks.
                                </p>

                                <h3 className="font-headline font-black text-lg uppercase mb-3 text-black">
                                    Why Pohafix is India's Safest & Healthiest Breakfast Option:
                                </h3>
                                <ul className="list-disc pl-5 space-y-2 text-sm text-black/70 mb-6">
                                    <li><strong>100% Preservative-Free:</strong> Absolutely no MSG, artificial colors, flavor enhancers, or chemical stabilizers. Just pure, home-style goodness.</li>
                                    <li><strong>Jain-Friendly Recipe:</strong> Completely onion-free and garlic-free, ensuring compatibility with traditional pure vegetarian diets.</li>
                                    <li><strong>Healthy & Weight Loss Friendly:</strong> Naturally low in calories (approx 250 kcal per serving), high in iron, and packed with healthy carbohydrates to keep you energetic all day.</li>
                                    <li><strong>Double-Steamed Texture:</strong> Uses our unique process to replicate the street-side steaming method, keeping each flake fluffy, soft, and non-sticky.</li>
                                </ul>

                                <h3 className="font-headline font-black text-lg uppercase mb-3 text-black">
                                    Quick Prep Instructions: Just Add Hot Water!
                                </h3>
                                <p className="text-black/70 text-sm leading-relaxed mb-4">
                                    Forget cooking pots, frying pans, and dirty stoves. Simply empty the pack contents into a bowl, pour 60ml of hot boiling water over it, and cover for 5 minutes. Stir gently, top it off with the crispy Ratlami Sev packet included in your box, and your warm, authentic Indori breakfast is served!
                                </p>
                            </div>

                            {/* Trust Badges Footer */}
                            <div className="grid grid-cols-4 gap-4 border-t border-black/10 pt-6">
                                <div className="flex flex-col items-center text-center gap-2">
                                    <span className="material-symbols-outlined text-primary text-3xl">local_shipping</span>
                                    <span className="text-[9px] font-bold text-black/80 uppercase tracking-wide">Free<br/>Shipping</span>
                                </div>
                                <div className="flex flex-col items-center text-center gap-2">
                                    <span className="material-symbols-outlined text-primary text-3xl">bolt</span>
                                    <span className="text-[9px] font-bold text-black/80 uppercase tracking-wide">Fast<br/>Delivery</span>
                                </div>
                                <div className="flex flex-col items-center text-center gap-2">
                                    <span className="material-symbols-outlined text-primary text-3xl">replay</span>
                                    <span className="text-[9px] font-bold text-black/80 uppercase tracking-wide">Easy<br/>Return</span>
                                </div>
                                <div className="flex flex-col items-center text-center gap-2">
                                    <span className="material-symbols-outlined text-primary text-3xl">verified_user</span>
                                    <span className="text-[9px] font-bold text-black/80 uppercase tracking-wide">Lab-Tested<br/>& Quality Assured</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            {/* Product Video Section */}
            <section className="py-12 md:py-20 bg-white overflow-hidden">
                <div className="max-w-5xl mx-auto px-4 md:px-6">
                    <motion.div 
                        initial={{ scale: 1.1, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="relative overflow-hidden shadow-[0_30px_60px_-12px_rgba(0,0,0,0.25)] bg-black rounded-xl"
                    >


                        <video 
                            className="w-full h-auto block"
                            controls 
                            autoPlay 
                            muted 
                            loop 
                            playsInline
                            preload="auto"
                        >
                            <source src="/product page video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </motion.div>
                </div>
            </section>

            {/* Preparation Steps Carousel */}
            <section className="py-24 bg-surface border-y border-outline-variant/10 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div>
                            <span className="text-primary font-headline font-black uppercase tracking-[0.2em] text-xs mb-4 block">The 5-Minute Ritual</span>
                            <h2 className="text-4xl md:text-6xl font-black font-headline text-on-surface tracking-tighter uppercase leading-[0.9]">
                                How to make <br/><span className="text-primary italic">Perfect Poha.</span>
                            </h2>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 snap-x snap-mandatory no-scrollbar pb-8 -mb-8">
                            {[
                                { id: "01", title: "POUR", desc: "Empty 1 serving (60 g poha) into a bowl." },
                                { id: "02", title: "HOT WATER", desc: "Add 60 ml hot boiled water." },
                                { id: "03", title: "COVER", desc: "Cover & keep for 5 minutes." },
                                { id: "04", title: "STIR", desc: "Stir well - your Poha is ready!" }
                            ].map((step) => (
                                <div key={step.id} className="min-w-[85vw] md:min-w-0 snap-center">
                                    <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.03)] border border-stone-100 flex flex-col h-full hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all group">
                                        <div className="text-primary font-headline font-black text-5xl md:text-6xl mb-6 opacity-20 group-hover:opacity-40 transition-opacity">{step.id}</div>
                                        <h4 className="font-headline font-black text-xl md:text-2xl mb-4 tracking-tighter uppercase">{step.title}</h4>
                                        <p className="text-on-surface-variant font-medium leading-relaxed text-sm md:text-base">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>



            {/* Ingredient Composition Section */}
            <section className="py-24 bg-[#fdbd30] overflow-hidden">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-[2rem] border border-black/5 shadow-2xl relative">
                        {/* Decorative Flourish */}
                        <div className="absolute -top-10 -right-10 text-9xl text-black/[0.03] font-headline font-black rotate-12 select-none pointer-events-none">PURE</div>
                        
                        <h2 className="text-2xl md:text-3xl font-black font-headline text-black mb-8 tracking-tight uppercase">
                            Ingredient Composition <span className="text-black/50 text-sm block md:inline font-bold italic">(Approx. % by Weight)</span>
                        </h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                            <div className="md:col-span-12">
                                <div className="space-y-3 font-headline font-bold text-sm md:text-base">
                                    <div className="flex justify-between items-center text-black/40 uppercase tracking-widest text-[10px] mb-4 border-b border-black/10 pb-4">
                                        <span>Ingredient</span>
                                        <span>% in Mix</span>
                                    </div>
                                    
                                    {[
                                        { name: "Flattened Rice", val: "51.95%" },
                                        { name: "Sugar", val: "14.84%" },
                                        { name: "Soya Oil", val: "10.89%" },
                                        { name: "Peanuts", val: "8.41%" },
                                        { name: "Green Chilli", val: "6.43%" },
                                        { name: "Salt", val: "2.47%" },
                                        { name: "Coriander Leaves", val: "0.99%" },
                                        { name: "Curry Leaves", val: "0.74%" },
                                        { name: "Fennel Seeds", val: "0.74%" },
                                        { name: "Cumin Seeds", val: "0.74%" },
                                        { name: "Coriander Powder", val: "0.74%" },
                                        { name: "Mustard Seeds", val: "0.49%" },
                                        { name: "Bay Leaf", val: "0.25%" },
                                        { name: "Turmeric", val: "0.30%" },
                                        { name: "Lemon Salt", val: "Trace (<0.3%)" },
                                    ].map((item, idx) => (
                                        <div key={idx} className={`flex justify-between items-center py-1.5 ${idx % 2 === 0 ? 'text-black' : 'text-black/70'}`}>
                                            <span className="flex items-center gap-3">
                                                <div className={`w-1.5 h-1.5 rounded-full ${idx === 0 ? 'bg-primary' : 'bg-black/20'}`}></div>
                                                {item.name}
                                            </span>
                                            <span className="tabular-nums font-black">{item.val}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 flex flex-col md:flex-row items-center gap-6 justify-between border-t border-black/10 pt-8">
                            <div className="flex gap-4 items-center">
                                <div className="p-3 bg-black text-[#fdbd30] rounded-xl font-headline font-black text-xs uppercase tracking-widest">
                                    100% Clean
                                </div>
                                <p className="text-xs font-bold text-black/60 max-w-[200px]">No laboratory stabilizers or artificial preservatives.</p>
                            </div>
                            <span className="material-symbols-outlined text-black/20 text-6xl hidden md:block">nutrition</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dynamic Batch Information */}
            {(() => {
                const epoch = new Date().getTime();
                const cycleDays = 6;
                const cycleMs = cycleDays * 24 * 60 * 60 * 1000;
                const currentCycle = Math.floor(epoch / cycleMs);
                const batchNumber = (currentCycle % 50) + 23; 
                
                const seed = currentCycle;
                const random = (s) => {
                    let x = Math.sin(s) * 10000;
                    return x - Math.floor(x);
                };
                
                const ordered24h = Math.floor(random(seed) * 50) + 30;
                const inQueue = Math.floor(random(seed + 1) * 20) + 5;
                const percentFilled = Math.floor(random(seed + 2) * 15) + 75;
                const spotsLeft = 100 - percentFilled;
                
                return (
                    <section className="py-16 bg-[#fcfaf5] border-t border-black/5">
                        <div className="max-w-4xl mx-auto px-6">
                            <div className="mb-6">
                                <h2 className="text-2xl font-black font-headline text-black mb-1 tracking-tight">Shop — Batch {batchNumber}</h2>
                                <p className="text-sm font-medium text-black/70">Hand-crafted in Indore. Shipped fresh. Limited per batch.</p>
                            </div>
                            
                            <div className="bg-[#fff6ef] border border-[#f3ad81] rounded-lg p-4 mb-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#e8664f] animate-pulse shrink-0"></div>
                                    <p className="text-sm font-bold text-[#b54630]">
                                        <span className="font-black text-[#d64124]">{ordered24h} people</span> ordered in the last 24 hours · <span className="font-black text-[#d64124]">{inQueue} orders</span> currently in queue
                                    </p>
                                </div>
                            </div>
                            
                            <div className="mb-8">
                                <div className="flex justify-between items-end mb-2">
                                    <span className="text-sm font-bold text-black/70">Batch {batchNumber} capacity</span>
                                    <span className="text-sm font-bold text-[#b54630]">{percentFilled}% filled — only {spotsLeft} spots left</span>
                                </div>
                                <div className="w-full h-3 bg-[#f3efe8] rounded-full overflow-hidden">
                                    <div className="h-full bg-[#cc5034] rounded-full" style={{ width: `${percentFilled}%` }}></div>
                                </div>
                            </div>
                            
                            <div className="bg-[#fdbd30] rounded-3xl p-8 md:p-12 mt-12 mb-8 relative overflow-hidden shadow-sm border border-black/5">
                                <div className="absolute top-0 right-0 p-4 opacity-[0.03] font-headline text-9xl -rotate-12 pointer-events-none">PURE</div>
                                
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
                                    {/* Stat 1 */}
                                    <div className="text-center flex flex-col items-center">
                                        <span className="text-3xl mb-3">🌿</span>
                                        <div className="relative inline-block mb-2">
                                            <span className="font-headline font-black text-5xl md:text-6xl text-black">0%</span>
                                            <motion.svg className="absolute -bottom-2 left-0 w-full h-4 overflow-visible" viewBox="0 0 100 20" preserveAspectRatio="none">
                                                <motion.path 
                                                    d="M 0 15 Q 50 0 100 12" 
                                                    fill="transparent" 
                                                    stroke="#be1e2d" 
                                                    strokeWidth="4" 
                                                    strokeLinecap="round"
                                                    initial={{ pathLength: 0 }}
                                                    whileInView={{ pathLength: 1 }}
                                                    viewport={{ once: true, margin: "-50px" }}
                                                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                                                />
                                            </motion.svg>
                                        </div>
                                        <p className="text-sm font-bold text-black/80 leading-tight uppercase tracking-widest">Preservatives &<br/>shortcuts</p>
                                    </div>
                                    
                                    {/* Stat 2 */}
                                    <div className="text-center flex flex-col items-center">
                                        <span className="text-3xl mb-3">👨‍🍳</span>
                                        <div className="relative inline-block mb-2">
                                            <span className="font-headline font-black text-5xl md:text-6xl text-black">100%</span>
                                        </div>
                                        <p className="text-sm font-bold text-black/80 leading-tight uppercase tracking-widest">Home-made<br/>small batch</p>
                                    </div>

                                    {/* Stat 3 */}
                                    <div className="text-center flex flex-col items-center">
                                        <span className="text-3xl mb-3">⭐</span>
                                        <div className="relative inline-block mb-2">
                                            <span className="font-headline font-black text-5xl md:text-6xl text-black">858</span>
                                            <motion.svg className="absolute -inset-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)] overflow-visible pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                                                <motion.ellipse 
                                                    cx="50" cy="50" rx="45" ry="30" 
                                                    fill="transparent" 
                                                    stroke="#be1e2d" 
                                                    strokeWidth="4" 
                                                    strokeLinecap="round"
                                                    transform="rotate(-5 50 50)"
                                                    initial={{ pathLength: 0 }}
                                                    whileInView={{ pathLength: 1 }}
                                                    viewport={{ once: true, margin: "-50px" }}
                                                    transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
                                                />
                                            </motion.svg>
                                        </div>
                                        <p className="text-sm font-bold text-black/80 leading-tight uppercase tracking-widest">Verified 4.4/5<br/>happy orders</p>
                                    </div>

                                    {/* Stat 4 */}
                                    <div className="text-center flex flex-col items-center">
                                        <span className="text-3xl mb-3">⚡</span>
                                        <div className="relative inline-block mb-2">
                                            <span className="font-headline font-black text-5xl md:text-6xl text-black">5</span>
                                        </div>
                                        <p className="text-sm font-bold text-black/80 leading-tight uppercase tracking-widest">Mins to prepare<br/>instant poha</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between bg-white border border-black/5 p-4 rounded-xl shadow-sm">
                                <div className="flex items-center gap-3 mb-3 sm:mb-0">
                                    <div className="bg-[#fcfaf5] p-2 rounded-md">
                                        <span className="material-symbols-outlined text-black/40 text-lg">calendar_month</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-black/80">Batch {batchNumber + 1} Waitlist</p>
                                        <p className="text-xs text-black/50"><span className="font-bold text-black/70">{Math.floor(random(seed + 3) * 30) + 12} people</span> waiting · Opens in {cycleDays - Math.floor((epoch % cycleMs) / (24 * 60 * 60 * 1000))} days</p>
                                    </div>
                                </div>
                                <button onClick={handleBuyNow} className="text-xs font-bold uppercase tracking-wider bg-black text-white hover:bg-black/80 px-5 py-2.5 rounded-lg transition-colors shadow-md active:scale-95 cursor-pointer">
                                    Join Waitlist
                                </button>
                            </div>
                        </div>
                    </section>
                );
            })()}

            {/* FAQ Section */}
            <section className="py-24 max-w-4xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-black font-headline text-center mb-12 tracking-tight">
                    Frequently Asked <span className="text-primary">Questions</span>
                </h2>
                <div className="space-y-4">
                    {[
                        { q: "What makes PohaFix Instant Poha unique?", a: "PohaFix is crafted with authentic Malwa rice flakes and our signature Jeeravan spice mix. Unlike others, we use absolutely zero laboratory stabilizers, artificial flavors, or MSG—just pure, traditional ingredients." },
                        { q: "How should I store the poha for maximum freshness?", a: "Since our product is 100% natural, please store it in a cool, dry place away from direct sunlight. Once opened, ensure the inner packs remain sealed." },
                        { q: "How many plates of poha can I make from a 300g pack?", a: "A single 300g box contains 5 individual sachets (60g each), which yields 5 generous single-serving plates of delicious Indori poha." },
                        { q: "Is this poha blend 100% natural?", a: "Yes! We pride ourselves on a 100% clean ingredient profile. We use high-quality flattened rice, natural spices, and premium soy oil. No chemicals involved." },
                        { q: "Does it contain onions and garlic?", a: "No! PohaFix is 100% Onion and Garlic free. We use a special blend of traditional spices to ensure that authentic Indori taste without any root vegetables, making it the Jain's ultimate choice." },
                        { q: "Is PohaFix suitable for a Jain diet?", a: "Yes, absolutely! Since our recipe is completely free from Onion and Garlic (No Onion No Garlic), it is the perfect, sacred meal for those following a strict Jain diet." },
                        { q: "What is the shelf life of the product?", a: "PohaFix has a shelf life of 6 months from the date of manufacture. Each sachet is nitrogen-flushed and individually sealed to lock in freshness." },
                        { q: "Is it suitable for children?", a: "Absolutely! Since we use zero MSG and zero artificial colors, it's a healthy, energy-packed breakfast or snack for children." },
                        { q: "Can I customize the spice level?", a: "Our signature Jeeravan mix is medium-spiced. You can easily adjust it by adding chopped coriander, fresh pomegranate, or extra sev to suit your taste buds!" },
                        { q: "Where do you deliver?", a: "We deliver PAN India! Being based in Manawar, Dhar, we have a robust logistics network that ensures your Poha reaches you fresh and fast anywhere in the country." },
                        { q: "Do you offer bulk pricing for offices or cafes?", a: "Yes, we do! For bulk orders or B2B inquiries, please reach out to our team at support@pohafix.in for exclusive partnership pricing." }
                    ].map((faq, idx) => (
                        <div key={idx} className="border-b border-black/10 pb-4">
                            <button 
                                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                className="w-full flex justify-between items-center text-left font-headline font-bold text-lg text-black hover:text-primary transition-colors py-2"
                            >
                                <span>{faq.q}</span>
                                <span className={`material-symbols-outlined transform transition-transform ${openFaq === idx ? 'rotate-180 text-primary' : 'text-primary'}`}>
                                    expand_more
                                </span>
                            </button>
                            <AnimatePresence>
                                {openFaq === idx && (
                                    <motion.div 
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="pt-3 text-black/70 font-medium leading-relaxed pb-2">
                                            {faq.a}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </section>

            {/* Loved By Millions */}
            <section className="py-24 bg-[#fef9f0]">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <div className="mb-16">
                        <h3 className="text-4xl text-primary -mb-4 relative z-10" style={{fontFamily: "'Brush Script MT', 'Comic Sans MS', cursive"}}>Indori Poha</h3>
                        <h2 className="text-6xl md:text-8xl font-black font-headline text-black tracking-tighter uppercase leading-none">Loved By MILLIONS</h2>
                        <p className="text-black/60 font-medium mt-4">India's fastest growing instant breakfast brand!</p>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6">
                        {[
                            "/customer-1.webp",
                            "/customer-2.webp",
                            "/customer-3.webp",
                            "/customer-4.webp",
                            "/customer-5.webp",
                            "/diljit.webp",
                            "/david.webp"
                        ].map((img, idx) => (
                            <div key={idx} className="aspect-square rounded-3xl overflow-hidden bg-white shadow-xl hover:scale-105 transition-transform duration-300">
                                <img src={img} alt="PohaFix Fan" loading="lazy" className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Authentic Review System */}
            <section className="py-24 bg-white border-t border-black/5">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-3xl font-black font-headline text-center mb-16 tracking-tight uppercase">Customer Reviews</h2>
                    
                    {/* Review Summary Header */}
                    <div className="grid md:grid-cols-3 gap-12 items-center pb-16 border-b border-black/5 mb-16">
                        <div className="text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start gap-1 mb-2">
                                {[1,2,3,4].map(i => <span key={i} className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>star</span>)}
                                <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 0.4"}}>star</span>
                            </div>
                            <div className="text-3xl font-black font-headline">4.4 out of 5</div>
                            <div className="text-sm text-black/50 font-medium">Based on 858 reviews</div>
                        </div>
                        
                        <div className="space-y-2">
                            {[
                                {stars: 5, pct: 64, count: 549},
                                {stars: 4, pct: 23, count: 198},
                                {stars: 3, pct: 8, count: 69},
                                {stars: 2, pct: 3, count: 26},
                                {stars: 1, pct: 2, count: 16}
                            ].map((row) => (
                                <div key={row.stars} className="flex items-center gap-4">
                                    <div className="flex gap-0.5 w-20">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} className={`material-symbols-outlined text-[12px] ${i < row.stars ? 'text-primary' : 'text-black/10'}`} style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                                        ))}
                                    </div>
                                    <div className="flex-1 h-2 bg-black/5 rounded-full overflow-hidden">
                                        <div className="h-full bg-primary" style={{width: `${row.pct}%`}}></div>
                                    </div>
                                    <div className="text-[10px] font-bold text-black/40 w-8">{row.count}</div>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-center md:justify-end">
                            <button 
                                onClick={() => setShowReviewForm(!showReviewForm)}
                                className="bg-[#014c3e] text-white px-8 py-3 rounded-full font-bold text-sm tracking-wide shadow-lg hover:scale-105 transition-transform"
                            >
                                {showReviewForm ? 'Cancel' : 'Write a review'}
                            </button>
                        </div>
                    </div>

                    {/* Review Submission Form */}
                    <AnimatePresence>
                        {showReviewForm && (
                            <motion.div 
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="overflow-hidden mb-16 bg-stone-50 rounded-3xl p-8 border border-black/5"
                            >
                                <form onSubmit={submitReview} className="max-w-2xl mx-auto space-y-6">
                                    <h3 className="text-2xl font-black font-headline uppercase text-center mb-8">Share Your Experience</h3>
                                    
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-xs font-black uppercase tracking-widest text-black/40 mb-2">Your Name</label>
                                            <input 
                                                required
                                                value={newReview.name}
                                                onChange={e => setNewReview({...newReview, name: e.target.value})}
                                                className="w-full bg-white border border-black/5 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                                                placeholder="e.g. Rahul Sharma"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-black uppercase tracking-widest text-black/40 mb-2">Rating</label>
                                            <div className="flex gap-1 h-12 items-center bg-white border border-black/5 rounded-xl px-4">
                                                {[1,2,3,4,5].map(s => (
                                                    <button 
                                                        key={s}
                                                        type="button"
                                                        onClick={() => setNewReview({...newReview, stars: s})}
                                                        className={`material-symbols-outlined transition-colors ${s <= newReview.stars ? 'text-primary' : 'text-black/10'}`}
                                                        style={{fontVariationSettings: `'FILL' ${s <= newReview.stars ? 1 : 0}`}}
                                                    >
                                                        star
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-black uppercase tracking-widest text-black/40 mb-2">Review Title</label>
                                        <input 
                                            required
                                            value={newReview.title}
                                            onChange={e => setNewReview({...newReview, title: e.target.value})}
                                            className="w-full bg-white border border-black/5 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                                            placeholder="Sum up your experience"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-black uppercase tracking-widest text-black/40 mb-2">Honest Review</label>
                                        <textarea 
                                            required
                                            rows="4"
                                            value={newReview.body}
                                            onChange={e => setNewReview({...newReview, body: e.target.value})}
                                            className="w-full bg-white border border-black/5 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none"
                                            placeholder="What did you like about PohaFix?"
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="w-full bg-primary text-white py-4 rounded-xl font-black uppercase tracking-widest shadow-xl hover:shadow-2xl active:scale-[0.98] transition-all">
                                        Post My Review
                                    </button>
                                </form>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Review Feed */}
                    <div className="space-y-16">
                        {reviews.slice(0, visibleReviews).map((rev) => (
                            <div key={rev.id} className="border-b border-black/5 pb-16 last:border-0">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-400">
                                        <span className="material-symbols-outlined text-2xl">person</span>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="font-bold text-black">{rev.name}</span>
                                            {rev.verified && (
                                                <span className="bg-[#014c3e] text-white text-[8px] font-black px-1.5 py-0.5 rounded flex items-center gap-0.5 uppercase tracking-widest">
                                                    <span className="material-symbols-outlined text-[10px]" style={{fontVariationSettings: "'wght' 700"}}>check</span>
                                                    Verified
                                                </span>
                                            )}
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="flex">
                                                {[...Array(5)].map((_, i) => (
                                                    <span key={i} className={`material-symbols-outlined text-[14px] ${i < rev.stars ? 'text-primary' : 'text-black/10'}`} style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                                                ))}
                                            </div>
                                            <span className="text-[10px] font-bold text-black/30">{rev.date}</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="pl-14">
                                    <h4 className="font-black text-lg text-black mb-2 uppercase tracking-tight">{rev.title}</h4>
                                    <p className="text-black/70 font-medium leading-relaxed mb-6">
                                        {rev.body}
                                    </p>
                                    
                                    <div className="flex items-center gap-6 mb-8 text-black/30">
                                        <button 
                                            onClick={() => handleVote(rev.id, 'helpful')}
                                            className="flex items-center gap-2 hover:text-primary transition-colors"
                                        >
                                            <span className="material-symbols-outlined text-lg">thumb_up</span>
                                            <span className="text-[10px] font-bold">{rev.helpful}</span>
                                        </button>
                                        <button 
                                            onClick={() => handleVote(rev.id, 'unhelpful')}
                                            className="flex items-center gap-2 hover:text-primary transition-colors"
                                        >
                                            <span className="material-symbols-outlined text-lg">thumb_down</span>
                                            <span className="text-[10px] font-bold">{rev.unhelpful}</span>
                                        </button>
                                    </div>

                                    {rev.reply && (
                                        <div className="bg-stone-50 rounded-2xl p-8 border border-black/5 relative">
                                            <div className="absolute top-4 right-6 text-[10px] font-black text-primary uppercase tracking-widest opacity-30">Official Reply</div>
                                            <p className="text-black font-bold mb-2 text-sm">PohaFix Team replied:</p>
                                            <p className="text-black/60 text-sm leading-relaxed italic">
                                                {rev.reply}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* View More Logic */}
                    {visibleReviews < 112 && (
                        <div className="mt-20 text-center">
                            <button 
                                onClick={() => setVisibleReviews(prev => prev + 10)}
                                className="inline-flex flex-col items-center gap-2 group"
                            >
                                <span className="text-black/40 font-black text-sm uppercase tracking-widest group-hover:text-primary transition-colors">View More Reviews</span>
                                <span className="material-symbols-outlined text-black/20 group-hover:text-primary animate-bounce">expand_more</span>
                            </button>
                            <p className="text-[10px] text-black/20 font-bold mt-4 uppercase tracking-widest">Showing {visibleReviews} of 858 Verified Reviews</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Narrative detail */}
            <section className="py-24 max-w-4xl mx-auto px-6 text-center">
                <span className="material-symbols-outlined text-secondary text-5xl mb-8" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
                <h2 className="text-4xl md:text-5xl font-black font-headline text-on-surface mb-8 tracking-tighter">Better for you, <br/>Better than street.</h2>
                <p className="text-xl text-on-surface-variant leading-relaxed font-medium">
                    Most instant foods rely on laboratory-synthesized stabilizers and hidden sugars to extend shelf life. At Pohafix, we believe in the power of raw, natural ingredients. No MSG, no artificial fillers—just the purest Malwa rice flakes and hand-ground spices, batched weekly for maximum vibrancy.
                </p>
            </section>

            {/* Sugar Care Tea Cross-Sell Section */}
            <section className="pb-24 max-w-4xl mx-auto px-6">
                <div className="bg-[#0b3a24] text-white p-8 md:p-12 rounded-[2.5rem] border border-white/10 relative overflow-hidden flex flex-col md:flex-row items-center gap-8 shadow-2xl">
                    <div className="absolute inset-0 bg-newsprint pointer-events-none opacity-5 mix-blend-overlay"></div>
                    <div className="flex-1 text-left space-y-4 relative z-10">
                        <span className="bg-[#fdbd30] text-[#0b3a24] px-3.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest inline-block">
                            NEW ARRIVAL
                        </span>
                        <h3 className="text-3xl font-black font-headline uppercase tracking-tight">
                            SUGAR CARE TEA
                        </h3>
                        <p className="text-white/80 text-sm leading-relaxed">
                            Enjoy premium Assam CTC Tea blended with Stevia, Cinnamon, Tulsi and Ginger. Rich, kadak taste with a naturally sweet profile. Zero added sugar, zero compromise.
                        </p>
                        <p className="text-xs font-bold text-[#fdbd30] uppercase tracking-widest">
                            200g Pack | ₹349 | Free Shipping
                        </p>
                        <div className="pt-2">
                            <Link to="/sugar-care-tea" className="bg-[#fdbd30] text-[#0b3a24] px-6 py-3 rounded-lg font-headline font-black text-sm uppercase tracking-wider hover:bg-[#ffcf4d] transition-colors inline-block text-center">
                                Explore Tea
                            </Link>
                        </div>
                    </div>
                    <div className="w-48 h-48 md:w-56 md:h-56 shrink-0 bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-center backdrop-blur-md relative z-10">
                        <img src="/sugar-care-tea.webp" alt="Sugar Care Tea pack" className="w-full h-full object-contain" />
                    </div>
                </div>
            </section>

            </main>
            <AnimatePresence>
                {showFloatingCTA && (
                    <motion.div 
                        initial={{ y: 100, opacity: 0, x: "-50%" }}
                        animate={{ y: 0, opacity: 1, x: "-50%" }}
                        exit={{ y: 100, opacity: 0, x: "-50%" }}
                        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-sm"
                    >
                        <div className="bg-black/90 backdrop-blur-md rounded-full p-1.5 pl-6 flex items-center justify-between border border-white/10 shadow-2xl overflow-hidden">
                            <div className="flex flex-col">
                                <span className="text-white font-headline font-black text-lg tracking-tight leading-none uppercase">Order Now</span>
                                <span className="text-[#fdbd30] text-[10px] font-bold uppercase tracking-[0.2em]">PohaFix</span>
                            </div>
                            <button 
                                onClick={handleBuyNow}
                                className="bg-[#be1e2d] text-white px-8 py-3 rounded-full font-headline font-black flex items-center gap-2 hover:bg-[#d12435] transition-colors active:scale-95"
                            >
                                ₹{plans[selectedPlan].price * qty}
                                <span className="material-symbols-outlined text-sm font-bold">arrow_forward</span>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Full-Screen Interactive Lightbox Modal */}
            <AnimatePresence>
                {isLightboxOpen && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/95 z-[999] flex flex-col justify-between p-6 select-none"
                    >
                        {/* Lightbox Header */}
                        <div className="flex justify-between items-center text-white/80 w-full z-10">
                            <div className="font-headline font-bold text-xs uppercase tracking-widest">
                                Checking: {currentPlan.name} ({lightboxIndex + 1}/{currentPlan.thumbnails?.length})
                            </div>
                            <button 
                                onClick={() => setIsLightboxOpen(false)}
                                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center text-white text-2xl font-bold cursor-pointer"
                            >
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>

                        {/* Lightbox Body: Image Viewer */}
                        <div className="flex-1 flex items-center justify-center relative overflow-hidden my-4">
                            {/* Prev Button */}
                            <button 
                                onClick={() => {
                                    setLightboxIndex((prev) => (prev === 0 ? currentPlan.thumbnails.length - 1 : prev - 1));
                                    setLightboxScale(1);
                                }}
                                className="absolute left-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center text-white z-10 cursor-pointer"
                            >
                                <span className="material-symbols-outlined">chevron_left</span>
                            </button>

                            {/* Main Zoomable Image */}
                            <div className="w-full h-full max-w-4xl max-h-[70vh] flex items-center justify-center overflow-auto p-4 cursor-grab active:cursor-grabbing">
                                <motion.img 
                                    key={lightboxIndex}
                                    src={currentPlan.thumbnails[lightboxIndex]} 
                                    alt="Zoomed Product View"
                                    animate={{ scale: lightboxScale }}
                                    transition={{ duration: 0.15 }}
                                    drag={lightboxScale > 1}
                                    dragConstraints={{ left: -300, right: 300, top: -300, bottom: 300 }}
                                    className="max-w-full max-h-full object-contain pointer-events-none"
                                />
                            </div>

                            {/* Next Button */}
                            <button 
                                onClick={() => {
                                    setLightboxIndex((prev) => (prev === currentPlan.thumbnails.length - 1 ? 0 : prev + 1));
                                    setLightboxScale(1);
                                }}
                                className="absolute right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center text-white z-10 cursor-pointer"
                            >
                                <span className="material-symbols-outlined">chevron_right</span>
                            </button>
                        </div>

                        {/* Lightbox Footer Controls: Zoom In / Zoom Out */}
                        <div className="flex flex-col items-center gap-4 w-full z-10">
                            {/* Zoom controls */}
                            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 shadow-lg">
                                <button 
                                    onClick={() => setLightboxScale(prev => Math.max(1, prev - 0.25))}
                                    disabled={lightboxScale <= 1}
                                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg hover:bg-white/10 transition-all cursor-pointer ${lightboxScale <= 1 ? 'opacity-40 cursor-not-allowed' : ''}`}
                                >
                                    <span className="material-symbols-outlined">zoom_out</span>
                                </button>
                                <span className="text-white text-xs font-headline font-bold tracking-widest min-w-[70px] text-center">
                                    {Math.round(lightboxScale * 100)}%
                                </span>
                                <button 
                                    onClick={() => setLightboxScale(prev => Math.min(3, prev + 0.25))}
                                    disabled={lightboxScale >= 3}
                                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg hover:bg-white/10 transition-all cursor-pointer ${lightboxScale >= 3 ? 'opacity-40 cursor-not-allowed' : ''}`}
                                >
                                    <span className="material-symbols-outlined">zoom_in</span>
                                </button>
                                <div className="h-4 w-px bg-white/20"></div>
                                <button 
                                    onClick={() => setLightboxScale(1)}
                                    className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-all cursor-pointer"
                                    title="Reset Zoom"
                                >
                                    <span className="material-symbols-outlined">restart_alt</span>
                                </button>
                            </div>

                            {/* Thumbnail row below */}
                            <div className="flex gap-2 justify-center">
                                {currentPlan.thumbnails?.map((thumb, idx) => (
                                    <button 
                                        key={idx}
                                        onClick={() => {
                                            setLightboxIndex(idx);
                                            setLightboxScale(1);
                                        }}
                                        className={`w-12 h-12 rounded-lg border-2 overflow-hidden bg-white/5 transition-all p-1 ${
                                            lightboxIndex === idx ? 'border-primary scale-105' : 'border-white/10 opacity-60 hover:opacity-100'
                                        }`}
                                    >
                                        <img src={thumb} alt="thumbnail" className="w-full h-full object-contain" />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />
        </>
    );
};

export default Shop;
