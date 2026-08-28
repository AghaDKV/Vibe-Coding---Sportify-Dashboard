import React from 'react';
import { Button } from '../../../components/ui/Button';
import { Plus } from 'lucide-react';
import './Dashboard.css';

interface DashboardHeaderProps {
  title?: string;
  subtitle?: string;
  actionText?: string;
  onAction?: () => void;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  title = "Halo, Rangga 👋",
  subtitle = "Ini ringkasan performamu minggu ini.",
  actionText = "Tambah Workout",
  onAction
}) => {
  return (
    <div className="dashboard-header">
      <div className="dashboard-header-text">
        <h1 className="dashboard-title">{title}</h1>
        <p className="dashboard-subtitle">{subtitle}</p>
      </div>
      <div className="dashboard-header-actions">
        <Button onClick={onAction}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Plus size={16} />
            {actionText}
          </div>
        </Button>
        <div className="user-badge">
          <div className="user-avatar">R</div>
          <span className="user-name">Rangga</span>
        </div>
      </div>
    </div>
  );
};
