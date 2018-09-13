import { keyframes } from 'styled-components';

const swoosh = keyframes`
  0%,
  50% {
    transform: scale(0) rotate(-40deg) translate(-500px, -500px);
    opacity: 0;
  }
  100% {
    transform: scale(1) rotate(-10deg) translate(0, 0);
    opacity: 1;
  }
`;

const tada = keyframes`
    0% {
    transform: scale3d(1, 1, 1);
  }
  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -6deg);
  }
  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.3, 1.3, 1.3) rotate3d(0, 0, 1, 6deg);
  }
  40%,
  60%,
  80% {
    transform: scale3d(1.3, 1.3, 1.3) rotate3d(0, 0, 1, -6deg);
  }
  100% {
    transform: scale3d(1, 1, 1);
  }
`;

const fade = keyframes`
  0%,
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export default { fade, swoosh, tada };
