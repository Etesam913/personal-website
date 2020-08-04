import React from "react";
import { Container } from "../../components/Layouts";
import Card from "../../components/Card";
import { Header2 } from "../../components/Titles";

function ProjectCol1() {
  return (
    <Container
      className="flex"
      direction="column"
      width="50%"
      height="100%"
      padding="1rem 0 0"
    >
      <Header2>
        I enjoy making open source projects in React.js that are free to use.
      </Header2>
      <Card src="https://res.cloudinary.com/dz5ashos1/image/upload/v1596514911/github/slick-fox/ootaizslljxswekcd7vl.gif"
        title="Slick-Fox"
        desc="A modern theme for Firefox uses slick animations to create a collapsable url bar. "
      />
    </Container>
  );
}

export default ProjectCol1;
