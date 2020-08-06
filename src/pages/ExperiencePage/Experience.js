import React from 'react';
import { Container } from '../../components/Layouts';
import ExperienceItem from '../../components/ExperienceItem/ExperienceItem';
function Experience() {
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ExperienceItem />
    </Container>
  );
}

export default Experience;
