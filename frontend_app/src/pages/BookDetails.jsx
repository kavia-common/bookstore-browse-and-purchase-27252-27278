import React from 'react';
import { useParams } from 'react-router-dom';

/**
 * PUBLIC_INTERFACE
 * BookDetails page fetches single book by id and shows details.
 * Props:
 * - onAddToCart: function
 */
export default function BookDetails({ onAddToCart }) {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(true);
  const [book, setBook] = React.useState(null);
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    let alive = true;
    setLoading(true);
    setError('');
    fetch(`/api/books/${id}`)
      .then(async (r) => {
        if (!r.ok) throw new Error(`Failed to load book: ${r.status}`);
        const data = await r.json();
        if (alive) {
          setBook(data);
          setLoading(false);
        }
      })
      .catch((e) => {
        if (alive) {
          setError(e.message);
          setLoading(false);
        }
      });
    return () => { alive = false; };
  }, [id]);

  if (loading) return <div className="card" style={{ padding: 16 }}>Loading...</div>;
  if (error) return <div className="card" style={{ padding: 16, color: 'var(--color-error)' }}>{error}</div>;
  if (!book) return <div className="card" style={{ padding: 16 }}>Not found.</div>;

  return (
    <section className="card" style={{ padding: 16, display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 24 }}>
      <img
        className="book-cover"
        style={{ maxWidth: 420 }}
        src={book.cover_image || 'https://picsum.photos/500/700?blur=2'}
        alt={`${book.title} cover`}
      />
      <div>
        <h1 style={{ marginTop: 0 }}>{book.title}</h1>
        <div className="text-muted mb-3">by {book.author}</div>
        <div className="price mb-3">${Number(book.price ?? 0).toFixed(2)}</div>
        <p className="mb-3">{book.description || 'No description available.'}</p>
        <button className="btn-primary" onClick={() => onAddToCart?.(book)}>Add to Cart</button>
      </div>
    </section>
  );
}
