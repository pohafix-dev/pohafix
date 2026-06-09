import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Order from './pages/Order';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Shop from './pages/Shop';
import About from './pages/About';
import ThankYou from './pages/ThankYou';
import ShippingPolicy from './pages/ShippingPolicy';
import RefundPolicy from './pages/RefundPolicy';
import TermsOfService from './pages/TermsOfService';
import LocalLanding from './pages/LocalLanding';
import SugarCareTea from './pages/SugarCareTea';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/sugar-care-tea" element={<SugarCareTea />} />
      <Route path="/about" element={<About />} />
      <Route path="/order" element={<Order />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/shipping" element={<ShippingPolicy />} />
      <Route path="/returns" element={<RefundPolicy />} />
      <Route path="/terms" element={<TermsOfService />} />
      
      {/* Local SEO Landing Pages */}
      <Route path="/instant-poha-raipur" element={<LocalLanding city="Raipur" stateName="Chhattisgarh" />} />
      <Route path="/instant-poha-chhattisgarh" element={<LocalLanding city="Chhattisgarh" stateName="Chhattisgarh" isState={true} />} />
      <Route path="/instant-poha-bhopal" element={<LocalLanding city="Bhopal" stateName="Madhya Pradesh" />} />
      <Route path="/instant-poha-indore" element={<LocalLanding city="Indore" stateName="Madhya Pradesh" />} />
      <Route path="/instant-poha-mumbai" element={<LocalLanding city="Mumbai" stateName="Maharashtra" />} />
      <Route path="/instant-poha-pune" element={<LocalLanding city="Pune" stateName="Maharashtra" />} />
      <Route path="/instant-poha-bangalore" element={<LocalLanding city="Bangalore" stateName="Karnataka" />} />
      <Route path="/instant-poha-delhi" element={<LocalLanding city="Delhi" stateName="Delhi NCR" />} />
      <Route path="/instant-poha-hyderabad" element={<LocalLanding city="Hyderabad" stateName="Telangana" />} />
      <Route path="/instant-poha-kolkata" element={<LocalLanding city="Kolkata" stateName="West Bengal" />} />
      <Route path="/instant-poha-chennai" element={<LocalLanding city="Chennai" stateName="Tamil Nadu" />} />
      <Route path="/instant-poha-ahmedabad" element={<LocalLanding city="Ahmedabad" stateName="Gujarat" />} />
      <Route path="/instant-poha-surat" element={<LocalLanding city="Surat" stateName="Gujarat" />} />
      <Route path="/instant-poha-nagpur" element={<LocalLanding city="Nagpur" stateName="Maharashtra" />} />
      <Route path="/instant-poha-jaipur" element={<LocalLanding city="Jaipur" stateName="Rajasthan" />} />
      <Route path="/instant-poha-lucknow" element={<LocalLanding city="Lucknow" stateName="Uttar Pradesh" />} />

      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
