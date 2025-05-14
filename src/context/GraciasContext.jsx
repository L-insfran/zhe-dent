import { createContext, useState, useContext } from 'react';

const GraciasContext = createContext();

export const useGracias = () => useContext(GraciasContext);

export const GraciasProvider = ({ children }) => {
  const [autorizado, setAutorizado] = useState(false);

  const autorizar = () => setAutorizado(true);
  const resetear = () => setAutorizado(false);

  return (
    <GraciasContext.Provider value={{ autorizado, autorizar, resetear }}>
      {children}
    </GraciasContext.Provider>
  );
};
