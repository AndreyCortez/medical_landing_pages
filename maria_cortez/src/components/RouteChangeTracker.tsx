import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

const RouteChangeTracker = () => {
  const location = useLocation();
  const [initialized, setInitialized] = useState(false);

  // Inicializa o GA uma vez quando o componente é montado
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      // Substitua pelo seu ID de Medição se não o fez no main.tsx
      // ReactGA.initialize("G-XXXXXXXXXX");
      setInitialized(true);
    }
  }, []);

  // Rastreia a visualização de página sempre que a rota muda
  useEffect(() => {
    if (initialized) {
      ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
    }
  }, [initialized, location]);

  return null; // Este componente não renderiza nada
};

export default RouteChangeTracker;
