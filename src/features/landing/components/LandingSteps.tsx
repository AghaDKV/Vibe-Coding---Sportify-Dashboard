import React from 'react';

export const LandingSteps: React.FC = () => {
  return (
    <section className="steps-section">
      <div className="landing-container">
        <div className="section-header">
          <span className="section-label">Cara Kerja</span>
          <h2 className="section-title">Tiga langkah, langsung jalan</h2>
        </div>

        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3 className="step-title">Buat akun</h3>
            <p className="step-desc">
              Tidak perlu ribet, langsung masuk dan isi data awal singkat.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">2</div>
            <h3 className="step-title">Catat aktivitas</h3>
            <p className="step-desc">
              Beri makan nutrisi harian dan catat latihanmu dalam hitungan detik.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">3</div>
            <h3 className="step-title">Lihat progresmu</h3>
            <p className="step-desc">
              Semua diolah secara otomatis, kamu tinggal memantau.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
