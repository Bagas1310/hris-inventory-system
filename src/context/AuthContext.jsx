import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

const DEMO_USER = {
  name: 'Administrator',
  email: 'admin@demo.com',
  role: 'Super Admin',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('hris_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const login = (email, password) => {
    if (email === 'admin@demo.com' && password === '123456') {
      setUser(DEMO_USER);
      localStorage.setItem('hris_user', JSON.stringify(DEMO_USER));
      return { success: true };
    }
    return { success: false, message: 'Email atau password tidak sesuai!' };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('hris_user');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: Boolean(user), login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
