import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}

html {
  font-family: "Inter", sans-serif;
  color: #333;
}

body {
  padding: 2rem;
}

ion-icon {
  color: red;
}

`;

export default GlobalStyles;
