import {React, styled, keyframes} from '../Dependencies';

function WavingHand() {
  return (
    <Wave role='img' aria-label='wave emoji'>
      👋
    </Wave>
  );
}

const waveAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(-10deg);
  }
  20% {
    transform: rotate(12deg);
  }
  30% {
    transform: rotate(-10deg);
  }
  40% {
    transform: rotate(9deg);
  }
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;


const Wave = styled.div`
  animation-name: ${waveAnimation};
  animation-duration: 4s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
`;


export default WavingHand;
