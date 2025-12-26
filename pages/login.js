import { useEffect, useState } from 'react'; // Şu setire üns ber!
import { auth, db } from '../lib/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const router = useRouter();

  const handleAuth = async (type) => {
    try {
      if(type === 'login') await signInWithEmailAndPassword(auth, email, pass);
      else await createUserWithEmailAndPassword(auth, email, pass);
      router.push('/dashboard');
    } catch (err) { alert(err.message); }
  };

  return (
    <div style={{ background: '#0f172a', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontFamily: 'sans-serif' }}>
      <div style={{ background: '#1e293b', padding: '40px', borderRadius: '20px', width: '350px', textAlign: 'center' }}>
        <h2>Giriş / Hasap aç</h2>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', padding: '12px', margin: '10px 0', borderRadius: '8px', border: 'none' }} />
        <input type="password" placeholder="Parol" onChange={(e) => setPass(e.target.value)} style={{ width: '100%', padding: '12px', margin: '10px 0', borderRadius: '8px', border: 'none' }} />
        <button onClick={() => handleAuth('login')} style={{ width: '100%', padding: '12px', background: '#38bdf8', color: 'black', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>Giriş</button>
        <button onClick={() => handleAuth('reg')} style={{ width: '100%', padding: '12px', background: 'transparent', color: '#38bdf8', border: '1px solid #38bdf8', borderRadius: '8px', cursor: 'pointer', marginTop: '10px' }}>Registrasiýa</button>
      </div>
    </div>
  );
}
