import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid,
    Tooltip, Legend, ResponsiveContainer
} from 'recharts';

function StatsChart({ stats }) {
    const data = stats.map(s => ({
        name: s.column_name,
        Mean: parseFloat(s.mean?.toFixed(2)),
        Median: parseFloat(s.median?.toFixed(2)),
        'Std Dev': parseFloat(s.std_dev?.toFixed(2)),
    }));

    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Mean" fill="#4f46e5" />
                <Bar dataKey="Median" fill="#06b6d4" />
                <Bar dataKey="Std Dev" fill="#f59e0b" />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default StatsChart;