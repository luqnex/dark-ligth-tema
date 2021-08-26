import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle `
    body {
        background-color: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
    }
` 