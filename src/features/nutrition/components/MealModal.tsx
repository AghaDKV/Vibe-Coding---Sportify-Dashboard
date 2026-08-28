import React, { useState } from 'react';
import { Modal } from '../../../components/ui/Modal';
import { Button } from '../../../components/ui/Button';
import { Select } from '../../../components/ui/Select';

export interface MealModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (meal: { name: string; category: string; calories: number; protein: number; carbs: number; fat: number; macros: string }) => void;
}

export const MealModal: React.FC<MealModalProps> = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    category: 'Sarapan',
    calories: '',
    protein: '',
    carbs: '',
    fat: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    const p = Number(formData.protein) || 0;
    const k = Number(formData.carbs) || 0;
    const l = Number(formData.fat) || 0;
    const macros = `P ${p}g • K ${k}g • L ${l}g`;
    
    onSave({
      name: formData.name || 'Makanan Baru',
      category: formData.category,
      calories: Number(formData.calories) || 0,
      protein: p,
      carbs: k,
      fat: l,
      macros
    });
    
    setFormData({ name: '', category: 'Sarapan', calories: '', protein: '', carbs: '', fat: '' });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Catat Makanan">
      <div className="modal-form-row">
        <label>Nama makanan</label>
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Nasi ayam bakar" />
      </div>
      <div className="modal-form-row">
        <label>Waktu makan</label>
        <Select 
          name="category" 
          value={formData.category} 
          onChange={handleChange}
          options={[
            { value: "Sarapan", label: "Sarapan" },
            { value: "Makan Siang", label: "Makan Siang" },
            { value: "Makan Malam", label: "Makan Malam" },
            { value: "Snack", label: "Snack" }
          ]}
        />
      </div>
      
      <div className="modal-form-grid">
        <div className="modal-form-row">
          <label>Kalori</label>
          <input name="calories" type="number" value={formData.calories} onChange={handleChange} placeholder="350" />
        </div>
        <div className="modal-form-row">
          <label>Protein (g)</label>
          <input name="protein" type="number" value={formData.protein} onChange={handleChange} placeholder="20" />
        </div>
        <div className="modal-form-row">
          <label>Karbo (g)</label>
          <input name="carbs" type="number" value={formData.carbs} onChange={handleChange} placeholder="40" />
        </div>
        <div className="modal-form-row">
          <label>Lemak (g)</label>
          <input name="fat" type="number" value={formData.fat} onChange={handleChange} placeholder="10" />
        </div>
      </div>
      
      <div className="modal-actions">
        <Button fullWidth onClick={handleSave}>Simpan</Button>
      </div>
    </Modal>
  );
};
