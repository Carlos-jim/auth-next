"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { jwtDecode } from 'jwt-decode';

const PrivateRoute = ({ children, rol }) => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');  // Usa localStorage en lugar de cookies

    if (token) {
      try {
        const user = jwtDecode(token);

        // Redirige si el usuario tiene un rol diferente
        if (user.rol === 'admin' && rol !== 'admin') {
          router.push('/admin/home');
          return;
        } else if (rol && user.rol !== rol) {
          router.push('/user/landing');
          return;
        }

        setIsAuthenticated(true);
        setLoading(false);
      } catch (error) {
        // Token inválido
        setIsAuthenticated(false);
        setLoading(false);
        router.push('/');
      }
    } else {
      // Si no hay token
      setIsAuthenticated(false);
      setLoading(false);
      router.push('/');
    }
  }, [router, rol]);

  if (loading) return <div>Loading...</div>;

  if (!isAuthenticated) return null;

  return <>{children}</>;
};

export default PrivateRoute;
