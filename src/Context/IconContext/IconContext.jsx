import React, { createContext, useState } from "react";

export const IconContext = createContext()

export const IconContextProvider = ({ children }) => {
    const [icon_floating, setIconFloating] = useState(null)

    const handleIconFloating = (icon_text) => {
        setIconFloating(icon_text)
    }

    const handleIconLeave = () => {
        setIconFloating(null)
    }

    return (
        <IconContext.Provider value=
            {
                {
                    iconFloating: icon_floating,
                    handleIconFloating: handleIconFloating,
                    handleIconLeave: handleIconLeave
                }}>
            {children}
        </IconContext.Provider>
    )
}