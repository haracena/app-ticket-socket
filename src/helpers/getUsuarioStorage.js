export const getUsuariosStorage = () => {
  return {
    agente: localStorage.getItem('agente'),
    escritorio: localStorage.getItem('escritorio'),
  };
};
