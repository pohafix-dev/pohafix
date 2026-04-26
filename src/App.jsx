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
import Admin from './pages/Admin';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/about" element={<About />} />
      <Route path="/order" element={<Order />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
