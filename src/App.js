import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';
import UploadLog from './components/UploadLog';
import StatsTable from './components/StatsTable';
import StatsChart from './components/StatsChart';
import './App.css';

function App() {
  const [uploads, setUploads] = useState([]);
  const [selectedUpload, setSelectedUpload] = useState(null);
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUploads();
  }, []);

  const fetchUploads = async () => {
    const { data } = await supabase
        .from('upload_log')
        .select('*')
        .order('created_at', { ascending: false });
    setUploads(data || []);
    setLoading(false);
  };

  const fetchStats = async (uploadId) => {
    setSelectedUpload(uploadId);
    const { data } = await supabase
        .from('data_stats')
        .select('*')
        .eq('upload_id', uploadId);
    setStats(data || []);
  };

  if (loading) return <div className="loading">Yükleniyor...</div>;

  return (
      <div className="app">
        <header className="header">
          <h1>📊 ML Data Pipeline Dashboard</h1>
          <p>CSV/Excel dosyalarının analiz sonuçları</p>
        </header>

        <div className="container">
          <div className="section">
            <h2>📁 Upload Geçmişi</h2>
            <UploadLog uploads={uploads} onSelect={fetchStats} selectedId={selectedUpload} />
          </div>

          {stats.length > 0 && (
              <>
                <div className="section">
                  <h2>📈 İstatistikler</h2>
                  <StatsTable stats={stats} />
                </div>
                <div className="section">
                  <h2>📉 Grafik</h2>
                  <StatsChart stats={stats} />
                </div>
              </>
          )}
        </div>
      </div>
  );
}

export default App;