import styled, { css } from 'styled-components';
import keyframes from '../misc/keyframes';
import StyledComponentsHelper from '../misc/StyledComponentsHelper';

const propHelper = new StyledComponentsHelper({
  color: '#000',
  size: '1em',
  duration: '1s',
  timingfunction: 'ease-in',
  delay: '0s',
  iterationcount: 1,
  direction: 'normal',
  fillmode: 'both',
  playstate: 'running',
});

const AnimatedText = styled.div.attrs(
  (props: { [key: string]: string }): StyledComponentsHelperProps => ({
    ...propHelper.getPropObject(props),
  })
)`
  color: ${(props: any) => props.color};
  font-size: ${(props: any) => props.size};
  animation: ${(props: any) => createAnimationString(props)};
`;

function createAnimationString(props: any) {
  const animationDetails = `${props.duration} ${props.timingfunction} ${props.delay} ${props.iterationcount} ${props.direction} ${props.fillmode}`;

  return css`
    ${keyframes[props.animationname]} ${animationDetails};
  `;
}

export default AnimatedText;
