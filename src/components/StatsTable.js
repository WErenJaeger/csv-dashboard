import React from 'react';

function StatsTable({ stats }) {
    return (
        <table className="table">
            <thead>
            <tr>
                <th>Kolon</th>
                <th>Mean</th>
                <th>Median</th>
                <th>Std Dev</th>
                <th>Min</th>
                <th>Max</th>
                <th>Null</th>
                <th>Outlier</th>
            </tr>
            </thead>
            <tbody>
            {stats.map(s => (
                <tr key={s.id}>
                    <td><strong>{s.column_name}</strong></td>
                    <td>{s.mean?.toFixed(2)}</td>
                    <td>{s.median?.toFixed(2)}</td>
                    <td>{s.std_dev?.toFixed(2)}</td>
                    <td>{s.min_val?.toFixed(2)}</td>
                    <td>{s.max_val?.toFixed(2)}</td>
                    <td>{s.null_count}</td>
                    <td>
              <span className={s.outlier_count > 0 ? 'badge-error' : 'badge-success'}>
                {s.outlier_count}
              </span>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default StatsTable;