import { DataItem } from '@/types';

export default function CardView({ items }: { items: DataItem[] }) {
    return (
        <div className="card-grid">
            {items.map((item) => {
                const initials = (item.patient_name || "G").split(' ').map(n => n[0]).join('').toUpperCase();
                const issueClass = (item.medical_issue || 'fever').toLowerCase().replace(' ', '-');

                return (
                    <div key={item.patient_id} className="patient-card shadow-sm">
                        <div style={{ background: '#eff6ff', padding: '16px', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', gap: '12px' }}>
                                <div style={{ width: '40px', height: '40px', background: 'white', borderRadius: '8px', border: '1px solid #eee', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#3b82f6' }}>
                                    {initials}
                                </div>
                                <div>
                                    <div style={{ fontSize: '13px', fontWeight: 'bold' }}>{item.patient_name || "Guest"}</div>
                                    <div style={{ fontSize: '10px', color: '#94a3b8' }}>ID-{String(item.patient_id).padStart(4, '0')}</div>
                                </div>
                            </div>
                            <div style={{ background: '#3b82f6', color: 'white', fontSize: '10px', padding: '2px 8px', borderRadius: '10px', height: 'fit-content' }}>Age:{item.age || 25}</div>
                        </div>
                        <div style={{ padding: '16px' }}>
                            <span className={`badge ${issueClass}`}>{item.medical_issue || "Checkup"}</span>
                            <div style={{ fontSize: '11px', color: '#64748b', marginTop: '12px', lineHeight: '1.8' }}>
                                <div>📍 {item.contact[0]?.address || "123 Health Ave"}</div>
                                <div>📞 {item.contact[0]?.number || "555-0199"}</div>
                                <div>✉️ {item.contact[0]?.email || "patient@care.com"}</div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}