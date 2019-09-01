import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html,
body,
#App {
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: #f1f1f1;
  font-family: 'Merienda One';
  letter-spacing: 0;
  box-sizing:border-box;
}

#lang {
  grid-area: lang;
  justify-self: left;
  align-self: start;
  width: 90px;
}

#version {
  grid-area: version;
  justify-self: right;
  align-self: start;
}

#github {
  grid-area: github;
  justify-self: right;
  align-self: end;
}

#fb-like {
  grid-area: fb;
  justify-self: left;
  align-self: end;
}

@keyframes empty {

}

.reset-animation {
  animation: empty !important;
}
`;

export default GlobalStyle;
