import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '../../../components/ui/Button';

export const LandingPricing: React.FC = () => {
  return (
    <section className="pricing-section">
      <div className="landing-container">
        <div className="section-header">
          <span className="section-label">Harga</span>
          <h2 className="section-title">Mulai gratis, upgrade kalau perlu</h2>
        </div>

        <div className="pricing-grid">
          <div className="pricing-card">
            <div className="pricing-name">Starter</div>
            <div className="pricing-price">
              Gratis <span>/ selamanya</span>
            </div>
            <div className="pricing-features">
              <div className="pricing-feature">
                <Check size={16} className="feature-check" />
                <span>Workout log tanpa batas</span>
              </div>
              <div className="pricing-feature">
                <Check size={16} className="feature-check" />
                <span>Tracking nutrisi dasar</span>
              </div>
              <div className="pricing-feature">
                <Check size={16} className="feature-check" />
                <span>Grafik progres harian</span>
              </div>
            </div>
            <Button variant="outline" className="w-full">
              Mulai gratis
            </Button>
          </div>

          <div className="pricing-card popular">
            <div className="popular-badge">Populer</div>
            <div className="pricing-name">Pro</div>
            <div className="pricing-price">
              Rp49rb <span>/ bulan</span>
            </div>
            <div className="pricing-features">
              <div className="pricing-feature">
                <Check size={16} className="feature-check" />
                <span>Semua fitur Starter</span>
              </div>
              <div className="pricing-feature">
                <Check size={16} className="feature-check" />
                <span>Analitik makro lengkap</span>
              </div>
              <div className="pricing-feature">
                <Check size={16} className="feature-check" />
                <span>Target & Achievement kustom</span>
              </div>
              <div className="pricing-feature">
                <Check size={16} className="feature-check" />
                <span>Ekspor data latihan</span>
              </div>
            </div>
            <Button className="w-full">
              Coba Pro
            </Button>
          </div>

          <div className="pricing-card">
            <div className="pricing-name">Coach</div>
            <div className="pricing-price">
              Rp149rb <span>/ bulan</span>
            </div>
            <div className="pricing-features">
              <div className="pricing-feature">
                <Check size={16} className="feature-check" />
                <span>Semua fitur Pro</span>
              </div>
              <div className="pricing-feature">
                <Check size={16} className="feature-check" />
                <span>Kelola hingga 20 klien</span>
              </div>
              <div className="pricing-feature">
                <Check size={16} className="feature-check" />
                <span>Progres terintegrasi klien</span>
              </div>
            </div>
            <Button variant="outline" className="w-full">
              Hubungi Kami
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
