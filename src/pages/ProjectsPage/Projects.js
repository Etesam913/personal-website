import React from "react";
import { Container } from "../../components/Layouts";
import ProjectCol1 from "./ProjectCol1";
import ProjectCol2 from "./ProjectCol2";

function Projects() {
  return (
    <Container
      className="flex"
      width="100%"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{opacity: 0}}
    >
      {/*Col 1*/}
      <ProjectCol1 />
      {/*Col 2*/}
      <ProjectCol2 />
    </Container>
  );
}

export default Projects;
