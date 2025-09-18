import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

/**
 * PUBLIC_INTERFACE
 * Header component with brand, navigation, search input, and cart button.
 * Props:
 * - onCartClick: function to open/close the cart sidebar
 */
export default function Header({ onCartClick }) {
  const navigate = useNavigate();
  const [q, setQ] = React.useState('');

  const onSearch = (e) => {
    e.preventDefault();
    // Navigate to home with query param for now
    navigate(`/?q=${encodeURIComponent(q)}`);
  };

  return (
    <header className="header">
      <div className="header-inner">
        <div className="brand" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <div className="brand-badge">📘</div>
          Ocean Books
        </div>

        <form className="searchbar" onSubmit={onSearch}>
          <input
            className="input"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search books, authors, keywords..."
            aria-label="Search books"
          />
          <button className="btn-primary" type="submit" aria-label="Search">Search</button>
        </form>

        <nav className="nav" aria-label="Primary">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/orders">Orders</NavLink>
          <NavLink to="/login">Login</NavLink>
          <button className="btn-secondary" onClick={onCartClick} aria-label="Open cart">Cart</button>
        </nav>
      </div>
    </header>
  );
}
