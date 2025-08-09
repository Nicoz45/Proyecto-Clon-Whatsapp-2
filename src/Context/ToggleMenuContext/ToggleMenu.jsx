import React, { createContext, useState } from "react";

export const MenuContext = createContext();

export const ToggleMenuProvider = ({ children }) => {
    const [is_menu_open, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((preview) => !preview)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    const openMenu = () => {
        setIsMenuOpen(true)
    }

    return (
        <MenuContext.Provider
            value={{is_menu_open, toggleMenu, closeMenu, openMenu}}>{children}
        </MenuContext.Provider>)
}
