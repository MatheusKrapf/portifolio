import { createGlobalStyle, css } from 'styled-components'

export const fontFaces = css`
  /* @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;700&display=swap'); */

  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;700&display=swap');
`

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* overflow-y: auto; */
    /* overflow-x: hidden; */
    /* -webkit-font-smoothing: antialiased; */
  }

  html {
    
    font-size: 62.5%; // to use rem
  }

  html, body, #__next {
    height: 100%;
    width: 100%;
  }

  body {
    /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif */
    /* font-family: 'Poppins', sans-serif; */

    font-family: 'Roboto', sans-serif;
  }
`

export default GlobalStyles
