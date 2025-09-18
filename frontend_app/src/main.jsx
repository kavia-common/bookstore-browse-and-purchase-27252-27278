import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './theme.css';
import Header from './shared/Header.jsx';
import Footer from './shared/Footer.jsx';
import CartSidebar from './shared/CartSidebar.jsx';
import Home from './pages/Home.jsx';
import BookDetails from './pages/BookDetails.jsx';
import Login from './pages/Login.jsx';
import Orders from './pages/Orders.jsx';

/**
 * App shell provides layout, routing, and global sidebar/state placeholder.
 */
function AppShell() {
  const [isCartOpen, setCartOpen] = React.useState(false);

  // PUBLIC_INTERFACE
  const toggleCart = () => {
    /** Toggle cart sidebar open/closed state. */
    setCartOpen((v) => !v);
  };

  return (
    <div className="app-container">
      <Header onCartClick={toggleCart} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home onAddToCart={toggleCart} />} />
          <Route path="/books/:id" element={<BookDetails onAddToCart={toggleCart} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </main>
      <Footer />
      <CartSidebar open={isCartOpen} onClose={toggleCart} />
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  </React.StrictMode>
);
