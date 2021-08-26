import React from 'react'
import styled from 'styled-components'

const Button = styled.button `
    background: ${({ theme }) => theme.text}
`

const Toggle = ({ themeLabel, toggleTheme }) => {
    return (
        <Button onClick={toggleTheme}>
            Mudar para {themeLabel}
        </Button>
    )
}

export default Toggle