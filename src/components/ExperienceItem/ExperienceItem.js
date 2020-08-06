import React from 'react';
import styled, {withTheme} from "styled-components";
import { Container } from '../Layouts';
import { Header1, Header2 } from '../Titles';

function ExperienceItem(props) {
  return (
    <Container width='100%'>
      <Container className='flex' align="center">
        <Header1 color={props.theme.colors.mainGreen}>Columbia Daily Spectator</Header1>
        <Container margin='0 0 0 auto'>
          <CompanyLogo src="https://www.columbiaspectator.com/pb/resources/img/spectator-logo.png"/>
        </Container>
      </Container>

      <Container margin="0 0 0 2rem">
        <Header2>Bla bla bla</Header2>
      </Container>
    </Container>
  );
}

const CompanyLogo = styled.img`
  width: 15rem;
  height: auto;
`;

export default withTheme(ExperienceItem);
