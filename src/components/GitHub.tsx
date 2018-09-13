import styled from 'styled-components';
import React from 'react';

const githubLogo = require('../assets/github.png');

const Wrapper = styled.div`
  opacity: 0.5;
  background: url(${githubLogo}) no-repeat center;
  background-size: 150px;
  width: 50px;
  height: 50px;
`;

const GitHub = (props: any) => <Wrapper as="a" id="github" href={props.url} />;

export default GitHub;
