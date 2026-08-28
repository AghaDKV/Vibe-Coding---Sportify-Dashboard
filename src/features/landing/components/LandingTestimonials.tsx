import React from 'react';
import { Quote } from 'lucide-react';

export const LandingTestimonials: React.FC = () => {
  return (
    <section className="testimonials-section">
      <div className="landing-container">
        <div className="section-header">
          <span className="section-label">Testimoni</span>
          <h2 className="section-title">Dipakai orang yang serius soal progres</h2>
        </div>

        <div className="testimonials-grid">
          <div className="testimonial-card">
            <Quote size={24} className="quote-icon" />
            <p className="testimonial-text">
              "Akhirnya ada aplikasi pelacakan data latihan yang tidak bikin pusing. Grafik progresnya bikin saya lebih termotivasi."
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">B</div>
              <div className="author-info">
                <span className="author-name">Bima Pratama</span>
                <span className="author-role">Fitness Enthusiast</span>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <Quote size={24} className="quote-icon" />
            <p className="testimonial-text">
              "Suka pada Sportify buat catat nutrisi harian. Ringkasan mingguannya bener-bener spot on buat diet kalori."
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">D</div>
              <div className="author-info">
                <span className="author-name">Dinda Ayu</span>
                <span className="author-role">Personal Trainer</span>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <Quote size={24} className="quote-icon" />
            <p className="testimonial-text">
              "Tracking progres menjadi sangat mudah di sini, dari berat badan sampai repetisi beban di gym."
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">R</div>
              <div className="author-info">
                <span className="author-name">Reza Nugraha</span>
                <span className="author-role">Body Builder</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
