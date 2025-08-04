import React, { useContext } from "react";
import { IconContext } from "../../Context/IconContext/IconContext";
import "./iconHover.css"

const IconHover = ({ name, children }) => {
    const { iconFloating, handleIconFloating, handleIconLeave } = useContext(IconContext)

    const handleMouseOver = () => {
        handleIconFloating(name)
    }

    const handleMouseLeave = () => {
        handleIconLeave()
    }

    return (
        <div className="icon-hover" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
            {children}
            {iconFloating === name && (
                <div className="icon-floating">
                    {name}
                </div>
            )}
        </div>
    )
}

export default IconHover