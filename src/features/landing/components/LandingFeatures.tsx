import React from 'react';
import { Target, Utensils, TrendingUp, Trophy, Flame, PieChart } from 'lucide-react';

export const LandingFeatures: React.FC = () => {
  return (
    <section className="features-section">
      <div className="landing-container">
        <div className="section-header">
          <span className="section-label">Fitur</span>
          <h2 className="section-title">Semua yang kamu butuhkan untuk<br />tetap on track</h2>
          <p className="section-subtitle">
            Dari merekam latihan hingga memantau progres, semuanya ada di satu tempat.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon-wrapper" style={{ backgroundColor: 'rgba(255, 138, 61, 0.1)', color: 'var(--text-brand-primary)' }}>
              <Target size={24} />
            </div>
            <h3 className="feature-title">Workout Log</h3>
            <p className="feature-desc">
              Catat setiap sesi latihan tanpa ribet dengan durasi, intensitas, dan kalori terbakar.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6' }}>
              <Utensils size={24} />
            </div>
            <h3 className="feature-title">Tracking Nutrisi</h3>
            <p className="feature-desc">
              Pantau asupan kalori dan makro harian supaya defisit kalori tubuhmu tetap terpantau.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
              <TrendingUp size={24} />
            </div>
            <h3 className="feature-title">Grafik Progres</h3>
            <p className="feature-desc">
              Visualisasi tren berat badan dan performa mingguan yang mudah dibaca.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper" style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b' }}>
              <Trophy size={24} />
            </div>
            <h3 className="feature-title">Achievement</h3>
            <p className="feature-desc">
              Selesaikan misi dan target mingguan yang bikin kamu makin termotivasi.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper" style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', color: '#ef4444' }}>
              <Flame size={24} />
            </div>
            <h3 className="feature-title">Zona Latihan</h3>
            <p className="feature-desc">
              Kenali batasan dan potensi dari catatan data latihanmu untuk hasil yang maksimal.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper" style={{ backgroundColor: 'rgba(139, 92, 246, 0.1)', color: '#8b5cf6' }}>
              <PieChart size={24} />
            </div>
            <h3 className="feature-title">Ringkasan Harian</h3>
            <p className="feature-desc">
              Satu dashboard ringkas yang gampang dipahami dalam hitungan detik.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
