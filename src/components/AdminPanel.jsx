import React, { useState } from 'react';
import './AdminPanel.css';

const AdminPanel = () => {
  const [stats] = useState({
    totalUsers: 120,
    activeUsers: 85,
    systemUptime: '99.9%',
    issuesReported: 3,
  });

  return (
    <div className="admin-panel">
      <h1>Welcome, Admin</h1>

      {/* Statistics Section */}
      <div className="stats">
        <div className="stat">
          <h3>Total Users</h3>
          <p>{stats.totalUsers}</p>
        </div>
        <div className="stat">
          <h3>Active Users</h3>
          <p>{stats.activeUsers}</p>
        </div>
        <div className="stat">
          <h3>System Uptime</h3>
          <p>{stats.systemUptime}</p>
        </div>
        <div className="stat">
          <h3>Issues Reported</h3>
          <p>{stats.issuesReported}</p>
        </div>
      </div>

      {/* Admin options for Management */}
      <div className="admin-options">
        <div className="card">
          <h3>Manage Users</h3>
          <p>View, add, or remove users in the system.</p>
          <button onClick={() => alert('User Management Coming Soon!')}>
            Go to User Management
          </button>
        </div>
        <div className="card">
          <h3>View Analytics</h3>
          <p>Check system usage and performance metrics.</p>
          <button onClick={() => alert('Analytics Dashboard Coming Soon!')}>
            View Analytics
          </button>
        </div>
        <div className="card">
          <h3>Settings</h3>
          <p>Configure system settings and permissions.</p>
          <button onClick={() => alert('Settings Panel Coming Soon!')}>
            Go to Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
