import React, { useState } from 'react';
import DialogBox from '../components/DialogBox';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Login.css';

const Login = () => {
  const [dialog, setDialog] = useState(null);
  const [adminError, setAdminError] = useState('');
  const [editorError, setEditorError] = useState('');
  const [viewerError, setViewerError] = useState('');
  const [isRegister, setIsRegister] = useState(false); // Toggle for Login/Register

  const navigate = useNavigate(); // Initialize navigate

  const openDialog = (type) => {
    setDialog(type);
    setAdminError('');
    setEditorError('');
    setViewerError('');
    setIsRegister(false); // Default to Login mode
  };

  const closeDialog = () => {
    setDialog(null);
    setAdminError('');
    setEditorError('');
    setViewerError('');
  };

  // Mock admin login
  const handleAdminLogin = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    if (username === 'admin' && password === 'password123') {
      alert('Admin login successful!');
      closeDialog();
      navigate('/admin'); // Redirect to Admin Panel
    } else {
      setAdminError('Invalid admin username or password');
    }
  };

  // Mock editor login/register
  const handleEditorSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    if (isRegister) {
      // Register logic
      if (username && password) {
        alert('Editor registered successfully!');
        closeDialog();
        navigate('/editor'); // Redirect to Editor Panel after registration
      } else {
        setEditorError('Please fill in all fields');
      }
    } else {
      // Login logic
      if (username && password) {
        alert('Editor login successful!');
        closeDialog();
        navigate('/editor'); // Redirect to Editor Panel after login
      } else {
        setEditorError('Invalid username or password');
      }
    }
  };

  // Mock viewer login/register
  const handleViewerSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    if (isRegister) {
      // Register logic
      if (username && password) {
        alert('Viewer registered successfully!');
        closeDialog();
        navigate('/viewer'); // Redirect to Viewer Panel after registration
      } else {
        setViewerError('Please fill in all fields');
      }
    } else {
      // Login logic
      if (username && password) {
        alert('Viewer login successful!');
        closeDialog();
        navigate('/viewer'); // Redirect to Viewer Panel after login
      } else {
        setViewerError('Invalid username or password');
      }
    }
  };

  return (
    <div className="login-page">
    <div className="login-container">
      <h1>Login</h1>
      <button onClick={() => openDialog('admin')}>Login as Admin</button>
      <button onClick={() => openDialog('editor')}>Login/Register as Editor</button>
      <button onClick={() => openDialog('viewer')}>Login/Register as Viewer</button>

      {/* Admin Dialog */}
      {dialog === 'admin' && (
        <DialogBox title="Admin Login" onClose={closeDialog}>
          <form onSubmit={handleAdminLogin}>
            <input type="text" name="username" placeholder="Admin Username" required />
            <input type="password" name="password" placeholder="Admin Password" required />
            {adminError && <p className="error-message">{adminError}</p>}
            <button type="submit">Login</button>
          </form>
        </DialogBox>
      )}

      {/* Editor Dialog */}
      {dialog === 'editor' && (
        <DialogBox title={isRegister ? 'Editor Register' : 'Editor Login'} onClose={closeDialog}>
          <form onSubmit={handleEditorSubmit}>
            <input type="text" name="username" placeholder="Editor Username" required />
            <input type="password" name="password" placeholder="Editor Password" required />
            {editorError && <p className="error-message">{editorError}</p>}
            <button type="submit">{isRegister ? 'Register' : 'Login'}</button>
          </form>
          <p className="toggle-link" onClick={() => setIsRegister(!isRegister)}>
            {isRegister ? 'Already have an account? Login' : "Don't have an account? Register"}
          </p>
        </DialogBox>
      )}

      {/* Viewer Dialog */}
      {dialog === 'viewer' && (
        <DialogBox title={isRegister ? 'Viewer Register' : 'Viewer Login'} onClose={closeDialog}>
          <form onSubmit={handleViewerSubmit}>
            <input type="text" name="username" placeholder="Viewer Username" required />
            <input type="password" name="password" placeholder="Viewer Password" required />
            {viewerError && <p className="error-message">{viewerError}</p>}
            <button type="submit">{isRegister ? 'Register' : 'Login'}</button>
          </form>
          <p className="toggle-link" onClick={() => setIsRegister(!isRegister)}>
            {isRegister ? 'Already have an account? Login' : "Don't have an account? Register"}
          </p>
        </DialogBox>
      )}
    </div>
    </div>
  );
};

export default Login;
