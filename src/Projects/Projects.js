import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import ProjectItem from './ProjectItem';
const ProjectsContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProjectRow = styled.div`
  display: flex;
`;

function Projects() {
  return (
    <ProjectsContainer>
      <ProjectRow>
        <ProjectItem id={0} />
        <ProjectItem id={1} />
      </ProjectRow>

      <ProjectRow>
        <ProjectItem id={2} />
        <ProjectItem id={3}/>
      </ProjectRow>

    </ProjectsContainer>
  );
}
export default Projects