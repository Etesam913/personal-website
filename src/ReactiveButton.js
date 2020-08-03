import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";
import cursor from './images/cursor.png';

const Button = styled(motion.div)`
   height: ${props=>props.isBig ? "2.5rem" : "2rem"};
   border-radius: .5rem;
   margin-left: .75rem;
   margin-right: .75rem;
   margin-bottom: 1rem;
   border-width: 1.5px;
   border-style: solid;
   border-color: rgb(232, 232, 232);
   filter: invert(${props => props.invert}%);
   outline: none;
   font-size: ${props=>props.isBig ? "1.35rem" : "1rem"};
   cursor: url(${cursor}), auto;
   
`;
const ButtonContent = styled(motion.div)`
   height: 100%;
   width: 100%;
   border-radius: .4rem;
   display:flex;
   justify-content: center;
   align-items: center;
   background-color: rgb(230, 230, 230);
   
`;

const Text = styled.div`
  color: black;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  text-align: center;
  padding-left: .5rem;
  padding-right: .5rem;
  
`;

function ReactiveButton(props) {
  let button = {
    whileHover: {
      scale: 1.15, 
      backgroundColor: "rgb(220, 220, 220)",
      boxShadow: props.darkMode ? "0px 16px 10px 0px rgba(232, 232, 232, 0)" : "0px 16px 10px 0px rgba(215, 215, 215, 0.5)"}, 
    whileTap: {
      scale: 1.05,
      boxShadow: "0px 16px 10px 0px rgba(232, 232, 232, 0)",
      backgroundColor: "rgb(230, 230, 230)"
    }}
  return (
    <Button isBig={props.isBig} drag dragConstraints={props.dragContainer} invert={props.darkMode ? 100 : 0}>
      <ButtonContent variants={button}        
        whileHover="whileHover"
        whileTap="whileTap"
        transition={{ duration: 0.25 }}
        onClick={props.showWindow}
      >
        <Text>{props.text}</Text>
      </ButtonContent>
    </Button>
  );
}
export default ReactiveButton;