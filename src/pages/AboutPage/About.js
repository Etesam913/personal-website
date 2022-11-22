import { React, styled, withTheme, motion } from "Dependencies";
import { Container, Paragraph, Link } from "components/ComponentsMaster";

function About({ theme }) {
  return (
    <DescContainer
      margin='2rem 0 0'
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
    >
      <div>
        <Avatar
          alt='Avatar of Etesam Ansari'
          src='https://etesam.nyc3.digitaloceanspaces.com/Personal-Website/etesam-avatar.png'
        />
      </div>

      <Paragraph margin='1.5rem 0 0 0'>
        I am a software developer who mainly uses React.js. I am a student
        majoring in Computer Science at the Engineering School of Columbia
        University.
      </Paragraph>
      <Paragraph margin='1rem 0'>
        When I am not coding, I like to play basketball.
      </Paragraph>
      <Links>
        <StyledLink
          href='https://etesam.nyc3.digitaloceanspaces.com/Personal-Website/Etesam_Ansari_Resume.pdf'
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
  );
}

const DescContainer = styled(Container)`
  text-align: left;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
`;

const Links = styled(motion.nav)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledLink = styled(Link)`
  width: max-content;
  font-size: 1.5em;
  margin: 0.5rem 0;
`;

const Avatar = styled.img`
  width: min(10rem, 90%);

  height: auto;
  margin: 0 auto 0 0;
  @media screen and (max-width: 600px) {
    margin: 0 auto;
    width: min(8rem, 90%);
  }
`;

export default withTheme(About);
