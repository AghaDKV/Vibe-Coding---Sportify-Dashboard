import React, { useState } from 'react';
import { Modal } from '../../../components/ui/Modal';
import { Button } from '../../../components/ui/Button';
import { Select } from '../../../components/ui/Select';

export interface WorkoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (workout: { title: string; type: string; date: string; duration: string; intensity: string; calories: number }) => void;
}

export const WorkoutModal: React.FC<WorkoutModalProps> = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    title: '',
    type: 'Kardio',
    date: new Date().toISOString().split('T')[0],
    duration: '',
    intensity: 'Sedang',
    calories: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave({
      title: formData.title || 'Workout Baru',
      type: formData.type,
      date: formData.date,
      duration: `${formData.duration || 0} mnt`,
      intensity: formData.intensity,
      calories: Number(formData.calories) || 0
    });
    setFormData({ title: '', type: 'Kardio', date: new Date().toISOString().split('T')[0], duration: '', intensity: 'Sedang', calories: '' });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Tambah Workout">
      <div className="modal-form-row">
        <label>Latihan</label>
        <input name="title" value={formData.title} onChange={handleChange} placeholder="Lari Pagi" />
      </div>
      
      <div className="modal-form-grid">
        <div className="modal-form-row">
          <label>Tipe</label>
          <Select 
            name="type" 
            value={formData.type} 
            onChange={handleChange}
            options={[
              { value: "Kardio", label: "Kardio" },
              { value: "Kekuatan", label: "Kekuatan" },
              { value: "Mobilitas", label: "Mobilitas" },
              { value: "HIIT", label: "HIIT" }
            ]}
          />
        </div>
        <div className="modal-form-row">
          <label>Intensitas</label>
          <Select 
            name="intensity" 
            value={formData.intensity} 
            onChange={handleChange}
            options={[
              { value: "Ringan", label: "Ringan" },
              { value: "Sedang", label: "Sedang" },
              { value: "Berat", label: "Berat" }
            ]}
          />
        </div>
        <div className="modal-form-row">
          <label>Tanggal</label>
          <input name="date" type="date" value={formData.date} onChange={handleChange} />
        </div>
        <div className="modal-form-row">
          <label>Durasi (mnt)</label>
          <input name="duration" type="number" value={formData.duration} onChange={handleChange} placeholder="30" />
        </div>
      </div>

      <div className="modal-form-row">
        <label>Kalori Terbakar</label>
        <input name="calories" type="number" value={formData.calories} onChange={handleChange} placeholder="300" />
      </div>
      
      <div className="modal-actions">
        <Button fullWidth onClick={handleSave}>Simpan</Button>
      </div>
    </Modal>
  );
};
