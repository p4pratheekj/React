import React, { createContext, useState, useEffect } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('aura_theme') || 'minimal'
  })
  useEffect(() => {
    localStorage.setItem('aura_theme', theme)
    document.body.className = `theme-${theme}`}, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
} 