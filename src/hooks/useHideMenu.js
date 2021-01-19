import { useContext, useEffect } from 'react';
import { UiContext } from '../context/UiContext';

const useHideMenu = (ocultar) => {
  const { showMenu, hideMenu } = useContext(UiContext);

  useEffect(() => {
    ocultar ? hideMenu() : showMenu();
  }, [ocultar, hideMenu, showMenu]);
};

export default useHideMenu;
