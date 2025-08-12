// frontend/src/pages/ProfilePage.js
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (!stored) {
      navigate('/auth'); // Redirect to login if not found
    } else {
      setUser(JSON.parse(stored));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/auth'); // Back to login
  };

  if (!user) return null;

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Welcome, {user.name}!</h2>
      <p className="text-sm mb-4 text-gray-600 dark:text-gray-300">Email: {user.email}</p>

      <button
        onClick={handleLogout}
        className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default ProfilePage;
