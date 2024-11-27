import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import AdminPanel from './components/AdminPanel';
import EditorPanel from './components/EditorPanel';
import ViewerPanel from './components/ViewerPanel';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/editor" element={<EditorPanel />} />
        <Route path="/viewer" element={<ViewerPanel />} />
      </Routes>
    </Router>
  );
};

export default App;
