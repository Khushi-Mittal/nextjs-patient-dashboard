'use client';
import { useState, useEffect } from 'react';
import RowView from '@/components/RowView';
import CardView from '@/components/CardView';

export default function Home() {
  const [data, setData] = useState([]);
  const [view, setView] = useState('row');
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`/api/data?page=${page}&limit=12`).then(res => res.json()).then(json => setData(json.data));
  }, [page]);

  return (
    <div>
      <div className="header-bg">
        <div>
          <h1 style={{margin: 0, fontSize: '32px'}}>Patient Directory</h1>
          <p style={{margin: '4px 0', opacity: 0.8}}>1000 Patient Found</p>
        </div>
      </div>

      <div className="content-box">
        <div className="top-bar">
          <button onClick={() => setView('row')} className={`tab ${view === 'row' ? 'active' : ''}`}>TABLE VIEW</button>
          <button onClick={() => setView('card')} className={`tab ${view === 'card' ? 'active' : ''}`}>CARD VIEW</button>
        </div>

        <div style={{padding: '24px'}}>
          <input placeholder="Search patient..." style={{width:'100%', padding:'12px', border:'1px solid #eee', borderRadius:'8px', marginBottom:'20px'}} />
          
          {view === 'row' ? <RowView items={data} /> : <CardView items={data} />}

          <div style={{marginTop: '40px', display: 'flex', justifyContent: 'center', gap: '10px'}}>
             <button onClick={() => setPage(p => Math.max(1, p-1))} style={{padding:'8px 20px', border:'1px solid #ddd', borderRadius:'4px', cursor:'pointer', background:'white'}}>Previous</button>
             <button onClick={() => setPage(p => p + 1)} style={{padding:'8px 20px', border:'1px solid #ddd', borderRadius:'4px', cursor:'pointer', background:'white'}}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}