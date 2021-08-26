import React, { useState } from 'react'

import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'

import { lightTheme, darkTheme } from './context/themes'
import { GlobalStyle } from './globalStyle'

import Toggle from './Toggle'

export function App() {
    const [theme, setTheme] = useState('dark')

    const toggleTheme = () => {
       setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <ThemeProvider theme={theme === 'light' ? darkTheme : lightTheme}>
            <GlobalStyle />
                <div>
                    <h1>Lucas</h1>

                    <button>lucas</button>

                    <Toggle themeLabel={theme} toggleTheme={toggleTheme} />
                </div>
            
        </ThemeProvider>
    )
}