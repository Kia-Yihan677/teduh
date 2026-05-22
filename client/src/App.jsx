import { useEffect, useState } from 'react';

const apiUrl = import.meta.env.VITE_API_URL ?? 'http://localhost:3000';

export default function App() {
  const [apiStatus, setApiStatus] = useState('Mengecek backend...');

  useEffect(() => {
    fetch(`${apiUrl}/api/health`)
      .then((response) => response.json())
      .then((data) => setApiStatus(data.message))
      .catch(() => setApiStatus('Backend belum berjalan'));
  }, []);

  return (
    <main className="app-shell">
      <section className="intro">
        <p className="eyebrow">Kerangka website</p>
        <h1>React untuk tampilan, Node.js untuk API.</h1>
        <p className="lead">
          Mulai dari sini: ubah halaman di folder <code>client</code>, lalu buat
          endpoint, login, atau database di folder <code>server</code>.
        </p>
      </section>

      <section className="status-panel" aria-label="Status backend">
        <span>Status backend</span>
        <strong>{apiStatus}</strong>
      </section>
    </main>
  );
}
