import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { HomepageContext } from './Contexts';

import cursor from './images/cursor.png';
import WavingHand from './WavingHand';
import Projects from './Projects/Projects';
import './index.css';



const Link = styled.a`
  display: inline-block;
`;

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

`;

const Title = styled(motion.div)`
  font-size: 2.35rem;
  font-weight: bold;
  padding: 0.5rem;
  @media(min-width: 500px) {
    font-size: 3rem;
  }

  @media(min-width: 768px) {
    font-size: 3.5rem;
  }
`;

const Description = styled(motion.div)`
  font-weight: 500;
  font-size: 1.35rem;
  padding: 0.5rem;
  
  @media(min-width: 500px) {
    font-size: 1.5rem;
  }

  @media(min-width: 768px) {
    font-size: 2rem;
  }
`;

const DescriptionContainer = styled(motion.div)`
  width: 80%;
  @media(min-width: 768px) {
    width: 60%;
  }
`;


export default function Homepage(props) {
  const parent = useRef(null);
  // My Variants
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } }
  }
  const containerItem = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0 }
  }
  return (

    <Container variants={container} initial="hidden" animate="show" ref={parent}>
      <Title variants={containerItem}>Hi, I'm Etesam <WavingHand /></Title>

      <DescriptionContainer variants={containerItem}>
        {props.width < 768
          ?
          <div>
            <Description>
              I am a React developer from New York City 🍎 I am currently a first year at Columbia University 🦁

            </Description>
            <Description>
              I like making open source software that others can use for free 💻
            </Description>

            <Description>
              When I am not coding, I like to play Basketball 🏀 browse Reddit, and watch YouTube videos.
            </Description>
          </div>
          :
          <div>
            <Description>
              I am a React developer from New York City 🍎 I am currently a first year at Columbia University 🦁
              I like making open source software that others can use for free 💻
            </Description>

            <Description>
              When I am not coding, I like to play Basketball 🏀 browse Reddit, and watch YouTube videos.
            </Description>
          </div>
        }

      </DescriptionContainer>

      <motion.div variants={containerItem} >
        <Title>Other Information</Title>
        <Description>etesamansari13@gmail.com</Description>
        <Link className="no-underline" href="https://drive.google.com/file/d/1SqcobRC-a_WqsB3FzXRrTGMg3CY4qb7P/view?usp=sharing">
          <Description>Resume</Description>
        </Link>
      </motion.div>


      <Title variants={containerItem}>My Projects</Title>
      <HomepageContext.Provider
        value=
        {{
          titles: ["Flowify", "Slick-Fox", "React-Mouse-Blur", "React-Swervy-Text"],
          subtitles: ["Free Flowing New Tab Extension", "A Modern Theme for Firefox that uses Slick Animations", "A Motion Blur npm Package", "Create Wacky Text with this npm Package"],
          links: ["https://github.com/Etesam913/flowify", "https://github.com/Etesam913/slick-fox", "https://github.com/Etesam913/react-mouse-blur", "https://github.com/Etesam913/react-swervy-text"],
          width: props.width
        }}>
        <motion.div variants={containerItem}>
          <Projects />
        </motion.div>

      </HomepageContext.Provider>


    </Container>

  );
}