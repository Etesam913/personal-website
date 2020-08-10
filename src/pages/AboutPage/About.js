import React from 'react';
import styled from 'styled-components';
import { Container } from '../../components/styled/Layouts';
import { Header2 } from '../../components/styled/Titles';
function About() {
  return (
    <Container
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className='flex'
      direction='column'
      align="center"
    >
      <ImgOfMe alt="photo of me" src='https://res.cloudinary.com/dz5ashos1/image/upload/v1597018277/github/bcihzra7fwzqp0pn29hy.jpg' />
      <DescContainer>
        <Header2>
          I am a frontend developer that mainly uses React.js. I am a student
          majoring in Computer Science at Columbia University.
        </Header2>

        <Header2>
          When I am not coding I like to play basketball and browse Reddit.
        </Header2>
      </DescContainer>
    </Container>
  );
}

const ImgOfMe = styled.img`
  width: auto;
  height: 35rem;
  padding: 0 0 2rem 0;
`;

const DescContainer = styled(Container)`
  text-align: left;
  padding-bottom: 2rem;
  @media screen and (max-width: 1100px) {
    padding-left: 6rem !important;
    padding-right: 6rem !important;
  }

  @media screen and (max-width: 600px) {
    padding-left: 2rem !important;
    padding-right: 2rem !important;
    text-align: center;
  }
`;

export default About;
