import React, {useContext} from 'react'
import ThemeContext from './context'

const Navbar = () => {
    const {theme, handleChangeTheme} = useContext(ThemeContext)
    
    return (
        <div className="navbar">
            <button
            style={{background: theme.background, color:theme.font,margin:"3px"}}>Inicio</button>
            <button
            onClick={handleChangeTheme}
            style={{background: theme.background, color:theme.font}}
            >
                Cambiar tema
                </button>
        </div>
    )
}

export default Navbar