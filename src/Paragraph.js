import { useContext } from "react"
import { ThemeContext } from './ThemeProvider'

function Paragraph() {
    const value = useContext(ThemeContext);
    return (
        <div >
            <p className={value.theme}>Context provides a way to poass data through the component tree without having to passs props down manually at every level</p>
        </div>
    )
}

export default Paragraph