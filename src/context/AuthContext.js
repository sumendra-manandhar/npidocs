import React, { createContext, useState, useContext, useEffect } from 'react';

// Create Auth Context
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState(null);

  // Simulate getting username from localStorage (Replace this with actual auth logic)
  useEffect(() => {

    if (typeof window !== 'undefined') {
    const storedUser = sessionStorage.getItem('username');
    if (storedUser) {
      setUsername(storedUser);
    }
  }
  }, []);

  return <AuthContext.Provider value={{ username, setUsername }}>{children}</AuthContext.Provider>;
};

// Hook to use Auth Context
export const useAuth = () => {
  return useContext(AuthContext);
};
