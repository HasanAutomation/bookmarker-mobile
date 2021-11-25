import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import storage from '../utils/storage';

export default function useAuth() {
  const context = useContext(AuthContext);

  function logout() {
    storage.deleteToken();
    context.setUser(null);
  }

  return { context, logout };
}
