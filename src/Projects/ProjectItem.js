import React, { useContext } from 'react';
import { HomepageContext } from '../Contexts';
import { motion } from 'framer-motion';
import styled from 'styled-components';


const Container = styled(motion.div)`
  width: 7rem;
  height: 7rem;
  background-color: #e0e0e0;
  border-radius: 1rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;


  @media(min-width: 500px) {
    width: 11rem;
    height: 11rem;
  }

  @media(min-width: 768px) {
    width: 15rem;
    height: 15rem;
  }

`;


const Title = styled.div`
  font-size: 1.1rem;
  padding: 0.2rem;
  padding-left: .3rem;
  padding-right: .3rem;

  @media(min-width: 500px) {
    font-size: 1.3rem;
    padding: 0.2rem;
    padding-left: .3rem;
    padding-right: .3rem;
  }

  @media(min-width: 768px) {
    font-size: 1.5rem;
    padding: 0.25rem;
    padding-left: .6rem;
    padding-right: .6rem;
  }
`;

const Subtitle = styled(Title)`
  font-size: 1.05rem;
  @media(min-width: 768px) {
    font-size: 1.35rem;
  }
`;

const GitHub = styled(motion.img)`
  padding: 0.35rem;
  height: 2rem;
  width: 2rem;

  @media(min-width: 768px) {
    height: 3rem;
    width: 3rem;
  }
`;

function ProjectItem(props) {
  const { titles, subtitles, links, width } = useContext(HomepageContext);
  const titlesToDisplay = titles;
  const subtitlesToDisplay = subtitles;
  const linkToRepo = links;
  const windowWidth = width;
  return (
    <Container whileHover={{ scale: 1.05 }}>
      <Title>{titlesToDisplay[props.id]}</Title>

      {width >= 500 
        ? <Subtitle>{subtitlesToDisplay[props.id]}</Subtitle>
        : <div></div>
      }

      <a href={linkToRepo[props.id]}>
        <GitHub src={"https://res.cloudinary.com/dz5ashos1/image/upload/v1589498470/github/e0qxvfz3tdeuxv64qjs2.png"} 
          whileHover={{scale: 1.1}} whileTap={{scale: 1}}
        />
      </a>
    </Container>
  );
}

export default ProjectItem;