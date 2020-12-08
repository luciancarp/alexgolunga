import React from 'react'

import GlobalStyle from './src/style/GlobalStyle'
import { ThemeProvider } from './src/style/Theme'

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    <GlobalStyle />
    {element}
  </ThemeProvider>
)
