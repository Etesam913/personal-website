import React from "react";
import styled from "styled-components";
import { Container } from "../../components/Layouts";
import Card from "../../components/Card";
function ProjectCol2(props) {
  return (
    <ColContainer
      className="flex"
      direction="column"
      width="50%"
      height="100%"
      padding="0 0 0 0.5rem"
    >
      <Container margin="0 0 0 auto">{props.col2Elements}</Container>
    </ColContainer>
  );
}

const ColContainer = styled(Container)`
  @media screen and (max-width: 1100px) {
    margin-right: 3rem !important;
  }
`;

export default ProjectCol2;
