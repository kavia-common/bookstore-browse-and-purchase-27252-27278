import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Orders page placeholder; will require auth token in future.
 */
export default function Orders() {
  const [orders] = React.useState([]);
  return (
    <section>
      <h1>My Orders</h1>
      <p className="text-muted">Sign in to view your orders. This will list your recent purchases.</p>
      {orders.length === 0 && <div className="card" style={{ padding: 16 }}>No orders yet.</div>}
    </section>
  );
}
