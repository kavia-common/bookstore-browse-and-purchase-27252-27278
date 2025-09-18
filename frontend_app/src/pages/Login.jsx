import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Login page placeholder for future auth integration.
 */
export default function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    // Future: call /api/auth/login and persist token.
    alert('Login not yet implemented.');
  };

  return (
    <section className="card" style={{ padding: 20, maxWidth: 420, margin: '24px auto' }}>
      <h1 className="mb-3" style={{ marginTop: 0 }}>Login</h1>
      <form onSubmit={onSubmit} style={{ display: 'grid', gap: 12 }}>
        <label>
          <div className="text-muted mb-2">Email</div>
          <input className="input" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          <div className="text-muted mb-2">Password</div>
          <input className="input" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button className="btn-primary mt-2" type="submit">Sign in</button>
      </form>
    </section>
  );
}
