import React from 'react'

import GlobalStyle from './src/style/GlobalStyle'
import { ThemeProvider } from './src/style/Theme'

import './src/style/bg.css'

export const wrapPageElement = ({ element }) => (
  <ThemeProvider>
    <GlobalStyle />
    {element}
  </ThemeProvider>
)
