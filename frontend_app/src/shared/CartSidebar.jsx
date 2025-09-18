import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Slide-in cart sidebar with simple placeholder list.
 * Props:
 * - open: boolean
 * - onClose: function
 */
export default function CartSidebar({ open, onClose }) {
  // In future, wire real cart state here.
  const items = [];

  return (
    <aside className={`cart-sidebar ${open ? 'open' : ''}`} aria-hidden={!open} aria-label="Cart sidebar">
      <div className="cart-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <strong>Your Cart</strong>
        <button onClick={onClose} aria-label="Close cart">Close</button>
      </div>
      <div className="cart-items">
        {items.length === 0 ? (
          <div className="text-muted">Your cart is empty.</div>
        ) : (
          items.map((it, idx) => (
            <div key={idx} className="card" style={{ padding: 12, marginBottom: 8 }}>
              <div>{it.title}</div>
              <div className="text-muted">x{it.quantity}</div>
            </div>
          ))
        )}
      </div>
      <div className="cart-footer">
        <button className="btn-primary" style={{ width: '100%' }}>Checkout</button>
      </div>
    </aside>
  );
}
