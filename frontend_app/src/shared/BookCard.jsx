import React from 'react';
import { Link } from 'react-router-dom';

/**
 * PUBLIC_INTERFACE
 * BookCard displays book cover, title, author, price, and add button.
 * Props:
 * - book: { id, title, author, price, cover_image }
 * - onAdd: function(book) -> void
 */
export default function BookCard({ book, onAdd }) {
  return (
    <div className="card book-card">
      <Link to={`/books/${book.id}`} aria-label={`View details for ${book.title}`}>
        <img
          className="book-cover"
          src={book.cover_image || 'https://picsum.photos/400/600?blur=2'}
          alt={`${book.title} cover`}
        />
      </Link>
      <div className="book-content">
        <Link to={`/books/${book.id}`} className="title">{book.title}</Link>
        <div className="badge">{book.author}</div>
        <div className="price">${Number(book.price ?? 0).toFixed(2)}</div>
        <button className="btn-primary mt-2" onClick={() => onAdd?.(book)}>Add to Cart</button>
      </div>
    </div>
  );
}
