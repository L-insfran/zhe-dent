import { Navigate } from 'react-router-dom';
import { useGracias } from '../context/GraciasContext';

const RutaProtegida = ({ children }) => {
  const { autorizado } = useGracias();
  
  if (!autorizado) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default RutaProtegida;
