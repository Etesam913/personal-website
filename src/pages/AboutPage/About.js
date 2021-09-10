import { React, styled, withTheme, motion } from '../../Dependencies';
import {
  Container,
  Header2,
  Link,
} from '../../components/ComponentsMaster';

function About({ theme }) {
  return (
    <Container
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className='flex'
      direction='column'
      align='flex-start'
    >
      <DescContainer>
        <Header2>
          I am a frontend developer that mainly uses React.js. I am a student
          majoring in Computer Science at Columbia University.
        </Header2>

        <Header2 margin='1rem 0'>When I am not coding I like to play basketball.</Header2>
        <Links>
          <StyledLink
            href='https://etesam.nyc3.digitaloceanspaces.com/Personal-Website/EtesamAnsariResume.pdf'
            underline
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            color={theme.colors.mainBlue}
            underlineColor={theme.colors.mainBlue}
          >
            Resume
          </StyledLink>
          <StyledLink
            href='https://github.com/etesam913/'
            underline
            underlineColor={theme.colors.mainBlue}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            color={theme.colors.mainBlue}
          >
            GitHub
          </StyledLink>
          <StyledLink
            href='https://www.linkedin.com/in/etesam-ansari-454a0a1b5/'
            underline
            underlineColor={theme.colors.mainBlue}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            color={theme.colors.mainBlue}
          >
            LinkedIn
          </StyledLink>

          <StyledLink
            href='https://www.youtube.com/channel/UCl-ua4-WPfbv3YhiYio0yew/'
            underline
            underlineColor={theme.colors.mainBlue}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            color={theme.colors.mainBlue}
          >
            YouTube
          </StyledLink>
        </Links>
      </DescContainer>
    </Container>
  );
}

const DescContainer = styled(Container)`
  text-align: left;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
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

const Links = styled(motion.nav)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (max-width: 600px) {
    align-items: center;
  }
`;

const StyledLink = styled(Link)`
  width: max-content;
  font-size: 1.5em;
  margin: 0.5rem 0;
`;

export default withTheme(About);
