import { useEffect, useState } from 'react'; // Şu setire üns ber!
import { auth, db } from '../lib/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

export default function Dashboard() {
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (u) => {
      if (u) {
        setUser(u);
        const q = query(collection(db, "reports"), orderBy("time", "desc"));
        onSnapshot(q, (snap) => {
          setMessages(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        });
      } else { router.push('/login'); }
    });
  }, []);

  return (
    <div style={{ background: '#0f172a', minHeight: '100vh', color: 'white', padding: '30px', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #334155', paddingBottom: '20px' }}>
        <h1>Panel</h1>
        <button onClick={() => signOut(auth)} style={{ background: '#ef4444', border: 'none', padding: '10px', borderRadius: '8px', color: 'white', cursor: 'pointer' }}>Çykyş</button>
      </div>
      <div style={{ marginTop: '20px' }}>
        {messages.map(m => (
          <div key={m.id} style={{ background: '#1e293b', padding: '15px', borderRadius: '10px', margin: '10px 0', borderLeft: '4px solid #38bdf8' }}>
            <strong>{m.sender}</strong> <small style={{color: '#94a3b8'}}>{m.time}</small>
            <p>{m.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
