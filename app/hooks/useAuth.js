import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import authApi from '../utils/api/auth';
import storage from '../utils/storage';

export default function useAuth() {
  const [loading, setLoading] = useState(true);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    const fetchUser = async () => {
      const accessToken = storage.getToken();

      if (!accessToken) return setLoading(false);

      const res = await authApi.getCurrentUser();
      if (!res.ok) return setLoading(false);
      authContext.setUser(res.data.data);
      setLoading(false);
    };

    fetchUser();
  }, []);

  return { loading };
}
