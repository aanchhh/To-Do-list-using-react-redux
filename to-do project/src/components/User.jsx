import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../features/todo/authSlice';

function User() {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    if (username.trim() !== '') {
      dispatch(login({ user: username, token: 'exampleToken123' }));
      setIsModalOpen(false);
    } else {
      alert('Please enter a username.');
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="relative">
      {!isAuthenticated ? (
        <>
          <button
            className="absolute top-4 right-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mr-8 -translate-y-12"
            onClick={() => setIsModalOpen(true)}
          >
            Login
          </button>
          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded shadow-lg w-80 text-center">
                <h2 className="text-xl font-bold mb-4">Login</h2>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded mb-4"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <button
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                  onClick={handleLogin}
                >
                  Submit
                </button>
                <button
                  className="ml-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="absolute top-4 right-4 flex items-center space-x-4">
          <h2 className="text-xl text-white font-medium mr-8 -translate-y-12">Hello, {user}!</h2>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 mr-8 -translate-y-12"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default User;
