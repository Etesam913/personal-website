import styled from "styled-components";
import cursorImg from "../../media/cursor.png";
import { motion } from "framer-motion";

export const CardContainer = styled.div`
  width: 23rem;
  height: 26rem;
  border-radius: 1rem;
  background: ${props => props.theme.colors.mainWhite};
  box-shadow: 10px 10px 49px -22px rgba(0, 0, 0, 0.35);
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 992px) {
    width: 65%;
    height: auto;
  }
`;

export const ImgContainer = styled.a`
  overflow: hidden;
  height: auto;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
`;

export const CardImg = styled(motion.img)`
  height: auto;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  width: 100%;
  cursor: url(${cursorImg}) 24 24, pointer;
`;

export const CardDesc = styled.div`
  flex-grow: 1;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  width: 100%;
  display: flex;
  padding: 0.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
