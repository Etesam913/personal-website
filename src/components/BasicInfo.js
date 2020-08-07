import React from "react";
import { Container } from "./styled/Layouts";
import styled, { withTheme } from "styled-components";
import { Header1 } from "./styled/Titles";
import WavingHand from "./WavingHand";
function BasicInfo(props) {
  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  };

  const item = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -55 }
  };

  return (
    <InfoContainer
      className="flex"
      direction="column"
      variants={list}
      initial="hidden"
      animate="visible"
    >
      <Container className="flex" align="center" variants={item}>
        <Header1 color={props.theme.colors.mainGreen}>
          Etesam Ansari <WavingHand />
        </Header1>
      </Container>
      <Container variants={item}>
        <Header1 color={props.theme.colors.mainBlue}>React Developer</Header1>
      </Container>
      <Container variants={item}>
        <Header1>Student</Header1>
      </Container>
    </InfoContainer>
  );
}

const InfoContainer = styled(Container)`
  @media screen and (max-width: 1100px) {
    padding-left: 6rem !important;
  }
  @media screen and (max-width: 600px) {
    padding-left: 3rem !important;
  }
`;

export default withTheme(BasicInfo);
