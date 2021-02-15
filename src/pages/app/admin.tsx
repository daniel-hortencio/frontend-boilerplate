import React from 'react';

import DashboardTemplate from '../../layouts/private/Dashboard';

const AdminPage: React.FC = () => {
  return (
    <DashboardTemplate>
      <div className="flex">
        <div className="flex-1 border mx-2">Teste</div>
        <div className="flex-1 border mx-2">Teste</div>
        <div className="flex-1 border mx-2">Teste</div>
      </div>
    </DashboardTemplate>
  );
};

export default AdminPage;
