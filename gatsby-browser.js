import React from 'react'

import GlobalStyle from './src/style/GlobalStyle'

export const wrapRootElement = ({ element }) => (
  <>
    <GlobalStyle />
    {element}
  </>
)
