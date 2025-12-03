import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import DashboardLayout from './components/dashboard/DashboardLayout';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import Support from './pages/Support';
import FAQ from './pages/FAQ';
import Testimonials from './pages/Testimonials';
import TenantDashboard from './pages/dashboard/TenantDashboard';
import ProductManagement from './pages/dashboard/ProductManagement';
import Reports from './pages/dashboard/Reports';
import TenantSupport from './pages/dashboard/TenantSupport';
import { CartProvider } from './context/CartProvider';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/support" element={<Support />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/testimonials" element={<Testimonials />} />
          </Route>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<TenantDashboard />} />
            <Route path="products" element={<ProductManagement />} />
            <Route path="reports" element={<Reports />} />
            <Route path="support" element={<TenantSupport />} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
