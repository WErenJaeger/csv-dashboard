import React from 'react';

function UploadLog({ uploads, onSelect, selectedId }) {
    return (
        <table className="table">
            <thead>
            <tr>
                <th>Dosya Adı</th>
                <th>Tür</th>
                <th>Satır</th>
                <th>Kolon</th>
                <th>Durum</th>
                <th>Süre</th>
                <th>Tarih</th>
            </tr>
            </thead>
            <tbody>
            {uploads.map(u => (
                <tr
                    key={u.id}
                    onClick={() => onSelect(u.id)}
                    className={selectedId === u.id ? 'selected' : ''}
                    style={{ cursor: 'pointer' }}
                >
                    <td>{u.file_name}</td>
                    <td>{u.file_type}</td>
                    <td>{u.row_count}</td>
                    <td>{u.column_count}</td>
                    <td>
              <span className={u.status === 'SUCCESS' ? 'badge-success' : 'badge-error'}>
                {u.status}
              </span>
                    </td>
                    <td>{u.duration_ms}ms</td>
                    <td>{new Date(u.created_at).toLocaleString('tr-TR')}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default UploadLog;