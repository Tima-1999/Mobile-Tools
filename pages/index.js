import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ background: '#0f172a', color: 'white', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '3rem' }}>📱 MobileTools</h1>
      <p style={{ color: '#94a3b8' }}>SMS we Jaňlary onlaýn dolandyryň</p>
      <div style={{ marginTop: '30px' }}>
        <Link href="/login">
          <button style={{ padding: '12px 24px', background: '#38bdf8', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>Başlaň</button>
        </Link>
      </div>
    </div>
  );
}
