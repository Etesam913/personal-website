import styled from "styled-components";
import { motion } from "framer-motion";

export const CardContainer = styled.div`
  width: min(100%, 25rem);
  max-height: 26rem;
  border-radius: 1rem;
  background: ${(props) => props.theme.colors.primary};
  transition: background 200ms;
  box-shadow: 10px 10px 49px -22px rgba(0, 0, 0, 0.35);
  margin: 1.5rem auto 0;
  display: flex;
  flex-direction: column;
`;

export const ImgContainer = styled.a`
  overflow: hidden;
  height: auto;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
`;

export const CardVideo = styled.video`
  height: auto;
  width: 100%;
  object-fit: cover;
  object-position: 100% 50%;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
`;

export const LinkText = styled.span`
  margin: 0;
  font-weight: bold;
  text-align: center;
  color: ${(props) => props.color};
  font-size: 1.5em;
`;

export const CardImg = styled(motion.img)`
  height: auto;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  width: 100%;
  cursor: pointer;
`;

export const CardDesc = styled.div`
  flex-grow: 1;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  text-align: center;
`;
