import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Flowify from './images/Flowify.png';
import ReactiveButton from './ReactiveButton.js';
import cursor from './images/cursor.png';
import "./index.css";

const ContainerMobile = styled.div`
  position: absolute;
  height: 95%;
  width: 95%;
  margin: 2.5%;
  background-color: #ecede8;
  border-radius: 5rem;
  box-shadow:  27px 27px 53px #e3e4df, 
             -27px -27px 53px #f5f6f1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: url(${cursor}), auto;
`;

const ContainerDesktop = styled.div`
  display: grid;
  grid-template-columns: 52.5% 47.5%;
  grid-template-rows: 100vh;
  cursor: url(${cursor}), auto;
  

`;

const Logo = styled(motion.img)`
  height: ${props => props.height};
  width: ${props => props.width};
  margin-top: 1rem;
`;

const Title = styled(motion.div)`
  font-size: 4vw;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const TitleMobile = styled(Title)`
  font-size: 5vh;
`;

const DescriptionMobile = styled(TitleMobile)`
  font-size: 2.5vh;
  width: 90%;
`;

const Description1 = styled(Title)`
  font-size: 1.5vw; 
  width: 85%;
`;

const Description2 = styled(Description1)`
  width: 75%;
`;
const Description3 = styled(Description2)`
  width: 65%;
`;

const SidebarDesktop = styled(motion.div)`
  width: 100%;
  height: 100%;
  border-bottom-right-radius: 45rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow:hidden;
  background-color: #ecede8;
  box-shadow:  27px 27px 53px #e3e4df, 
             -27px -27px 53px #f5f6f1;
  
`;


export default function FlowifyPage(props) {
  const canvas = useRef(null);
  const canvasMobile = useRef(null);
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } }
  }

  const containerItem = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1 }
  }

  const container2 = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } }
  }

  const containerItem2 = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1 }
  }

  if (props.width < 1100) {
    return (
      <div>
        <ContainerMobile variants={container2} initial="hidden" animate="show" ref={canvasMobile}>
          <Logo variants={containerItem2} src={Flowify} height="6rem" width="6rem" />
          <TitleMobile variants={containerItem2}>Flowify</TitleMobile>
          <DescriptionMobile variants={containerItem2}>A new tab extension that allows for free flowing startpages to be created.</DescriptionMobile>
          <DescriptionMobile variants={containerItem2}>You can create draggable and scalable text, images, searchbars, jokes, todo lists, etc.</DescriptionMobile>
          {props.width > 700 ? <div></div> : <DescriptionMobile variants={containerItem2}> The draggable nature of Flowify allows for ultimate freedom.</DescriptionMobile>}
          <motion.a variants={containerItem2} className="no-underline" href="https://addons.mozilla.org/en-US/firefox/addon/flowify/">
            <ReactiveButton variants={containerItem2} isBig={false} text="Firefox Addon"></ReactiveButton>
          </motion.a>

          <motion.a variants={containerItem2} className="no-underline" href="https://addons.mozilla.org/en-US/firefox/addon/flowify/">
            <ReactiveButton isBig={false} text="Chrome Addon"></ReactiveButton>
          </motion.a>
          {props.width > 700 ?
            <div className="video-container-mobile">
              <iframe className="video-mobile" src="https://www.youtube.com/embed/Oh9byT0PMnc" frameborder="0" allowfullscreen></iframe>
            </div> : <div></div>}
        </ContainerMobile>
      </div>

    );
  }
  else {
    return (
      <div>
        <ContainerDesktop ref={canvas}>
          <SidebarDesktop variants={container} initial="hidden" animate="show">
            <Logo height="10rem" width="10rem" variants={containerItem} src={Flowify} />
            <Title variants={containerItem}>Flowify</Title>
            <Description1 variants={containerItem}> A new tab extension that allows for free flowing startpages to be created. </Description1>
            <Description2 variants={containerItem}> You can create draggable and scalable text, images, searchbars, jokes, todo lists, etc. </Description2>
            <Description3 variants={containerItem}> The draggable nature of Flowify allows for ultimate freedom.</Description3>
            <motion.a variants={containerItem} className="no-underline" href="https://addons.mozilla.org/en-US/firefox/addon/flowify/">
              <ReactiveButton variants={containerItem} isBig={true} text="Firefox Addon"></ReactiveButton>
            </motion.a>

            <motion.a variants={containerItem} className="no-underline" href="https://addons.mozilla.org/en-US/firefox/addon/flowify/">
              <ReactiveButton isBig={true} text="Chrome Addon"></ReactiveButton>
            </motion.a>
            <Description3 variants={containerItem} style={{ fontSize: "1.5rem" }}><Link to="/privacy">Privacy Policy</Link></Description3>
          </SidebarDesktop>
          <motion.div className="video-container-desktop">
            <iframe className="video" src="https://www.youtube.com/embed/Oh9byT0PMnc" frameborder="0" allowfullscreen class="video"></iframe>
          </motion.div>
        </ContainerDesktop>
      </div>

    );
  }
}