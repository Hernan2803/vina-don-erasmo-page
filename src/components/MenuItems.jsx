import React from "react";
import { useContext } from "react"
import CloseIcon from '@mui/icons-material/Close';
import { ThemeContext } from "./../context/ThemeContext"

const MenuItems = ({showMenu, active}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div onClose={showMenu}>
      <ul className={active ? 'flex-col flex items-center fixed inset-0 right-1/4 uppercase backdrop-blur-sm gap-8 p-8 md:hidden' + theme.primaryText + theme.softBg : 'hidden'}>
        <button onClick={showMenu}><CloseIcon/></button>
        <li><a href="#home" onClick={showMenu} className="text-center hover:underline">Inicio</a></li>
        <li><a href="#products" onClick={showMenu} className="text-center hover:underline">Productos</a></li>
        <li><a href="#about" onClick={showMenu} className="text-center hover:underline">Nosotros</a></li>
        <li><a href="#blog" onClick={showMenu} className="text-center hover:underline">Blog</a></li>
      </ul>
    </div>
  );
};

export default MenuItems;