import { useContext, Context, createContext, useState } from "react";

// Context 
// CompA -> CompB=> CompC

// 1. create context
// 2. Provider
// 3. Consumer

// Theme: Dark / Light

 const ThemeContext = createContext();

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('dark')

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    const value = {
        theme, toggleTheme
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeProvider, ThemeContext }