import React from 'react';
import BookCard from '../shared/BookCard.jsx';

/**
 * PUBLIC_INTERFACE
 * Home page: shows a grid of books, supports search via query param 'q'.
 * Props:
 * - onAddToCart: function to open cart/add item
 */
export default function Home({ onAddToCart }) {
  const [loading, setLoading] = React.useState(true);
  const [books, setBooks] = React.useState([]);
  const [error, setError] = React.useState('');
  const params = new URLSearchParams(window.location.search);
  const q = params.get('q') || '';

  React.useEffect(() => {
    let alive = true;
    setLoading(true);
    setError('');
    fetch(`/api/books${q ? `?q=${encodeURIComponent(q)}` : ''}`)
      .then(async (r) => {
        if (!r.ok) throw new Error(`Failed to load books: ${r.status}`);
        const data = await r.json();
        const list = Array.isArray(data) ? data : (data.data || []);
        if (alive) {
          setBooks(list);
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
  }, [q]);

  return (
    <section>
      <div className="grid">
        <div className="grid-12">
          <h1 style={{ margin: 0 }}>Explore Books</h1>
          <p className="text-muted">Discover your next great read.</p>
        </div>

        {loading && <div className="grid-12 card" style={{ padding: 16 }}>Loading books...</div>}
        {error && !loading && <div className="grid-12 card" style={{ padding: 16, color: 'var(--color-error)' }}>{error}</div>}

        {!loading && !error && books.length === 0 && (
          <div className="grid-12 card" style={{ padding: 16 }}>No books found.</div>
        )}

        {!loading && !error && books.map((b) => (
          <div className="grid-3" key={b.id}>
            <BookCard book={b} onAdd={onAddToCart} />
          </div>
        ))}
      </div>
    </section>
  );
}
