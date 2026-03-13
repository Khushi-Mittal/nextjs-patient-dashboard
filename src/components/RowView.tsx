import { DataItem } from '@/types';

export default function RowView({ items }: { items: DataItem[] }) {
    return (
        <div className="overflow-x-auto">
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr className="table-head-row">
                        
                        <th style={{ borderBottom: '1px solid #949494', color: '#3b82f6', padding: '12px 16px', textAlign: 'left', fontSize: '11px', fontWeight: 'bold' }}>ID</th>
                        <th style={{ borderBottom: '1px solid #949494', color: '#3b82f6', padding: '12px 16px', textAlign: 'left', fontSize: '11px', fontWeight: 'bold' }}>NAME</th>
                        <th style={{ borderBottom: '1px solid #949494', color: '#3b82f6', padding: '12px 16px', textAlign: 'left', fontSize: '11px', fontWeight: 'bold' }}>AGE</th>
                        <th style={{ borderBottom: '1px solid #949494', color: '#3b82f6', padding: '12px 16px', textAlign: 'left', fontSize: '11px', fontWeight: 'bold' }}>MEDICAL ISSUE</th>
                        <th style={{ borderBottom: '1px solid #949494', color: '#3b82f6', padding: '12px 16px', textAlign: 'left', fontSize: '11px', fontWeight: 'bold' }}>ADDRESS</th>
                        <th style={{ borderBottom: '1px solid #949494', color: '#3b82f6', padding: '12px 16px', textAlign: 'left', fontSize: '11px', fontWeight: 'bold' }}>PHONE</th>
                        <th style={{ borderBottom: '1px solid #949494', color: '#3b82f6', padding: '12px 16px', textAlign: 'left', fontSize: '11px', fontWeight: 'bold' }}>EMAIL</th>
                        <th style={{ borderBottom: '1px solid #949494', color: '#3b82f6', padding: '12px 16px' }}></th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => {
                        const name = item.patient_name || "Guest";
                        const initials = name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
                        const issueClass = (item.medical_issue || 'checkup').toLowerCase().replace(/\s+/g, '-');

                        return (
                            <tr key={item.patient_id} className="patient-row" style={{ transition: 'background 0.2s' }}>
                                
                                <td style={{ padding: '20px 16px', borderBottom: '1px solid #949494', color: '#191D23', fontSize: '12px' }}>
                                    ID-{String(item.patient_id).padStart(4, '0')}
                                </td>
                                <td style={{ padding: '2px 16px', borderBottom: '1px solid #949494' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <div style={{
                                            width: '36px', height: '36px', borderRadius: '50%',
                                            background: '#cbd5e1', display: 'flex', alignItems: 'center',
                                            justifyContent: 'center', fontWeight: 'bold', fontSize: '12px',
                                            overflow: 'hidden', color: '#475569'
                                        }}>
                                            {item.photo_url ? (
                                                <img src={item.photo_url} onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerText = initials; }} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="" />
                                            ) : initials}
                                        </div>
                                        <span style={{ color: '#191D23' }}>{name}</span>
                                    </div>
                                </td>
                                <td style={{ padding: '20px 16px', borderBottom: '1px solid #949494', color: '#1e293b' }}>{item.age || 25}</td>
                                <td style={{ padding: '20px 16px', borderBottom: '1px solid #949494' }}>
                                    <span className={`badge ${issueClass}`}>
                                        {item.medical_issue || 'Checkup'}
                                    </span>
                                </td>
                                <td style={{ padding: '20px 16px', borderBottom: '1px solid #949494', color: '#000000' }}>{item.contact[0]?.address || "123 Health Ave"}</td>
                                <td style={{ padding: '20px 16px', borderBottom: '1px solid #949494', color: '#000000' }}>{item.contact[0]?.number || "555-0199"}</td>
                                <td style={{ padding: '20px 16px', borderBottom: '1px solid #949494', color: '#000000' }}>{item.contact[0]?.email || "patient@care.com"}</td>
                                <td style={{ padding: '20px 16px', borderBottom: '1px solid #949494', color: '#000000', textAlign: 'right' }}>›</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}