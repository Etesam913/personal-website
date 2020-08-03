import React from "react";
import { Container } from "./Layouts";
import { withTheme } from "styled-components";
import { Header1 } from "./Titles";

function BasicInfo(props) {
  return (
    <Container className="flex" direction="column">
      <Header1 color={props.theme.colors.mainGreen}>Etesam Ansari</Header1>
      <Header1 color={props.theme.colors.mainBlue}>React Developer</Header1>
      <Header1>Student</Header1>
    </Container>
  );
}

export default withTheme(BasicInfo);
