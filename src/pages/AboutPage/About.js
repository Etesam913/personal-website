import { React, styled, withTheme } from '../../Dependencies';
import { Container, Header2, Link } from '../../components/ComponentsMaster';

function About({ theme }) {
  return (
    <Container
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className='flex'
      direction='column'
      align='center'
    >
      <ImgOfMe
        alt='photo of me'
        src='https://res.cloudinary.com/dz5ashos1/image/upload/v1597018277/github/bcihzra7fwzqp0pn29hy.jpg'
      />
      <DescContainer>
        <Header2>
          I am a frontend developer that mainly uses React.js. I am a student
          majoring in Computer Science at Columbia University.
        </Header2>

        <Header2>
          When I am not coding I like to play basketball and browse Reddit.
        </Header2>
      </DescContainer>
      <Link
        href='https://github.com/etesam913/'
        underline
        underlineColor={theme.colors.mainBlue}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1 }}
      >
        <Header2 color={theme.colors.mainGreen}>GitHub</Header2>
      </Link>
      <Link
        href='https://www.linkedin.com/in/etesam-ansari-454a0a1b5/'
        underline
        underlineColor={theme.colors.mainBlue}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1 }}
      >
        <Header2 color={theme.colors.mainBlue}>LinkedIn</Header2>
      </Link>

      <Link
        href='https://www.youtube.com/channel/UCl-ua4-WPfbv3YhiYio0yew/'
        underline
        underlineColor={theme.colors.mainOrange}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1 }}
      >
        <Header2 color={theme.colors.mainOrange}>YouTube</Header2>
      </Link>
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

export default withTheme(About);
