import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
:root {
    --bg-color: #141414;
}
* {
    box-sizing: border-box;
}
body {
    color: #fff;
    background-color: var(--bg-color);
}
button {
    outline: none;
}
p {
    line-height: 1.4;
}
`

export default GlobalStyle;