import React, { useEffect, useState } from "react";
import {motion} from 'framer-motion'
import { Container } from "../Layouts";
import { Header2 } from "../Titles";
import { Link, useHistory } from "react-router-dom";
import { withTheme } from "styled-components";
import { xVariants, yVariants } from "../../variants/NavVariants";

function Nav(props) {
  const history = useHistory();

  useEffect(() => {
    return history.listen(location => {
      props.setCurrentPathname(location.pathname);
    });
  }, [history]);
  const navContent = [
    { Projects: { link: "/" } },
    { Experience: { link: "/experience" } },
    { About: { link: "/about" } }
  ];

  function getHeader(direction, item, dictKey, index) {
    if (direction === "x") {
      return (
        <Header2
          cursor
          variants={xVariants}
          custom={index}
          initial="hidden"
          whileHover={{ color: props.theme.colors.mainBlack }}
          animate={props.currentPathname === item[dictKey].link ? "show" : "grayed"}
          padding="0.875rem 0.5rem"
          key={index}
        >
          {dictKey}
        </Header2>
      );
    } else {
      return (
        <Header2
          cursor
          variants={yVariants}
          custom={index}
          initial="hidden"
          whileHover={{ color: props.theme.colors.mainBlack }}
          animate={props.currentPathname === item[dictKey].link ? "show" : "grayed"}
          padding="0.875rem 0.5rem"
          key={index}
        >
          {dictKey}
        </Header2>
      );
    }
  }

  function getNavItems(direction) {
    return navContent.map((item, index) => {
      const dictKey = Object.keys(item)[0];

      return (
        <Link
          to={item[dictKey].link}
          key={index}
          style={{ textDecoration: "none" }}
        >
          {getHeader(direction, item, dictKey, index)}
        </Link>
      );
    });
  }

  return (
    <>
      
      {props.width <= 1100 ? (
        <Container margin="0 3rem 0 auto" className="flex" direction="column">
          <></>
          {getNavItems("y")}
        </Container>
      ) : (
        <Container margin="0 0 0 auto" className="flex">
          {getNavItems("x")}
        </Container>
      )}
    </>
  );
}



export default withTheme(Nav);
