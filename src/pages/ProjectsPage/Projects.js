import { React, styled, withTheme } from '../../Dependencies';
import { Container, Header2, Card } from '../../components/ComponentsMaster';
import ProjectCol1 from './ProjectCol1';
import ProjectCol2 from './ProjectCol2';

function Projects(props) {
  const col1Content = [
    {
      Card1: {
        src:
          'https://res.cloudinary.com/dz5ashos1/video/upload/v1600231657/github/slick-fox/fhijdokyrzooj0boyo6z.mov',
        title: 'Slick-Fox',
        desc:
          'A modern theme for Firefox uses slick animations to create a collapsable url bar.',
        link: 'https://github.com/Etesam913/slick-fox',
        color: props.theme.colors.mainGreen,
        video: true
      }
    },
    {
      Card2: {
        src:
          'https://res.cloudinary.com/dz5ashos1/image/upload/v1596727671/github/react-mouse-blur/zvgjbdjuvqkxdqn7k3xr.gif',
        title: 'React-Mouse-Blur',
        desc: 'A npm package that allows for cool mouse effects to be created.',
        link: 'https://github.com/Etesam913/react-mouse-blur',
        color: props.theme.colors.mainGreen,
        video: false
      }
    }
  ];

  const col2Content = [
    {
      Card1: {
        src:
          'https://res.cloudinary.com/dz5ashos1/video/upload/v1600233519/github/Dragify/lkcfgn5espp1kuwlcint.mov',
        title: 'Dragify',
        desc: 'A Free Flowing New Tab Extension.',
        link: 'https://github.com/Etesam913/dragify',
        color: props.theme.colors.mainBlue,
        video: true
      }
    },
    {
      Card2: {
        src:
          'https://res.cloudinary.com/dz5ashos1/video/upload/v1600234046/github/react-swervy-text/gfpk5dykhnqt7jlnujgx.mov',
        poster: 'https://res.cloudinary.com/dz5ashos1/image/upload/v1600237181/github/react-swervy-text/yhqkjucss1ahfztn0pw8.png',
        title: 'React-Swervy-Text',
        desc:
          'A npm package that provides an easy way for text to be animated along shapes and curves.',
        link: 'https://github.com/Etesam913/react-swervy-text',
        color: props.theme.colors.mainBlue,
        video: true
      }
    }
  ];

  const col1Elements = col1Content.map((elem, index) => {
    const dictKey = Object.keys(elem)[0];
    return (
      <Card
        key={`card-${index}`}
        num={index}
        src={elem[dictKey].src}
        title={elem[dictKey].title}
        desc={elem[dictKey].desc}
        link={elem[dictKey].link}
        color={elem[dictKey].color}
        video={elem[dictKey].video}
      />
    );
  });

  const col2Elements = col2Content.map((elem, index) => {
    const dictKey = Object.keys(elem)[0];
    return (
      <Card
        key={`card-${index + 3}`}
        num={index}
        video={elem[dictKey].video}
        src={elem[dictKey].src}
        title={elem[dictKey].title}
        desc={elem[dictKey].desc}
        link={elem[dictKey].link}
        color={elem[dictKey].color}
      />
    );
  });

  return (
    <>
      <ProjectContainer
        width='100%'
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        padding='0 0 1.5rem'
      >
        {props.width < 993 ? (
          <ParentContainer>
            <Container width='65%' padding='0 0 0 0.5rem'>
              <Header2 padding='0'>
                I enjoy making open source projects in React.js that are free to
                use.
              </Header2>
            </Container>

            {col1Elements}
            {col2Elements}
          </ParentContainer>
        ) : (
          <div style={{display: 'flex'}}>
            <ProjectCol1 col1Elements={col1Elements} />
            <ProjectCol2 col2Elements={col2Elements} />
          </div>
        )}
      </ProjectContainer>
    </>
  );
}

const ProjectContainer = styled(Container)`
  display: flex;
  flex-direction: row;
`;

const ParentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default withTheme(Projects);
