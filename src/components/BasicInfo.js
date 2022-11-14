import { React, styled, withTheme } from "Dependencies";
import { Container, Header1 } from "./ComponentsMaster";
import WavingHand from "./WavingHand";
import { useWindowSize } from "./Hooks/GenericHooks";

function BasicInfo(props) {
  const size = useWindowSize();

  const item = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -55 },
  };

  return (
    <InfoContainer>
      <Container className='flex' align='center' variants={item}>
        <Header1 color={props.theme.colors.mainGreen}>
          Etesam {size.width <= 600 && <br />} Ansari <WavingHand />
        </Header1>
      </Container>
      <Container variants={item}>
        <Header1 color={props.theme.colors.mainBlue}>
          Software {size.width <= 600 && <br />} Engineer
        </Header1>
      </Container>
      <Container variants={item}>
        <Header1>Student</Header1>
      </Container>
    </InfoContainer>
  );
}

const InfoContainer = styled.div``;

export default withTheme(BasicInfo);
