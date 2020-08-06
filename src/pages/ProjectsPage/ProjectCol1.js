import React from "react";
import styled from "styled-components";
import { Container } from "../../components/Layouts";
import { Header2 } from "../../components/Titles";

function ProjectCol1(props) {
  return (
    <ColContainer className="flex" direction="column" width="50%" height="100%">
      <Header2 padding="0">
        I enjoy making open source projects in React.js that are free to use.
      </Header2>
      {props.col1Elements}
    </ColContainer>
  );
}

const ColContainer = styled(Container)`
  padding-left: 0.5rem;
  @media screen and (max-width: 1100px) {
    padding-left: 6rem !important;
  }
`;

export default ProjectCol1;
