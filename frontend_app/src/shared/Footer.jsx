import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Footer with copyright and links placeholder.
 */
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>© {new Date().getFullYear()} Ocean Books</div>
        <div className="text-muted">Crafted with the Ocean Professional theme</div>
      </div>
    </footer>
  );
}
