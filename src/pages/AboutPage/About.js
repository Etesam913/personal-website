import { React, styled, withTheme, motion } from '../../Dependencies';
import { Container, Header2, Link } from '../../components/ComponentsMaster';
import { spring } from 'popmotion';

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

        <Header2>When I am not coding I like to play basketball.</Header2>
        <Links>
          <StyledLink
            href='https://u.pcloud.link/publink/show?code=XZUJgJXZ2CucTsD4DQf72kTgphF0BR2l7eTy'
            underline
            underlineColor={theme.colors.mainPurple}
          >
            <LinkText
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              color={theme.colors.mainPurple}
            >
              Resume
            </LinkText>
          </StyledLink>
          <StyledLink
            href='https://github.com/etesam913/'
            underline
            underlineColor={theme.colors.mainGreen}
          >
            <LinkText
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              color={theme.colors.mainGreen}
            >
              GitHub
            </LinkText>
          </StyledLink>
          <StyledLink
            href='https://www.linkedin.com/in/etesam-ansari-454a0a1b5/'
            underline
            underlineColor={theme.colors.mainBlue}
          >
            <LinkText
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              color={theme.colors.mainBlue}
            >
              LinkedIn
            </LinkText>
          </StyledLink>

          <StyledLink
            href='https://www.youtube.com/channel/UCl-ua4-WPfbv3YhiYio0yew/'
            underline
            underlineColor={theme.colors.mainOrange}
          >
            <LinkText
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              color={theme.colors.mainOrange}
            >
              YouTube
            </LinkText>
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

const Links = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (max-width: 600px) {
    align-items: center;
  }
`;

const LinkText = styled(Header2)`
  /*display: inline-block;
  width: auto;*/
`;

const StyledLink = styled(Link)`
  width: max-content;
`;

export default withTheme(About);
