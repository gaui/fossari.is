import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.div`
  font-size: 0.7em;
  opacity: 0.5;
`;

const Version = (props: any) => {
  return <Wrapper id="version">v{props.number}</Wrapper>;
};

export default Version;
