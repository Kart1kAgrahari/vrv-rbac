import React from 'react';
import { useAuth } from '../context/AuthContext';
import AdminPanel from '../components/AdminPanel';
import EditorPanel from '../components/EditorPanel';
import ViewerPanel from '../components/ViewerPanel';
import './Home.css';

const Home = () => {
  const { userRole, logout } = useAuth();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome, {userRole}</h1>
      {userRole === 'Admin' && <AdminPanel />}
      {userRole === 'Editor' && <EditorPanel />}
      {userRole === 'Viewer' && <ViewerPanel />}
      <button onClick={logout} style={{ marginTop: '20px' }}>Logout</button>
    </div>
  );
};

export default Home;
