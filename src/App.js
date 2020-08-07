import React, { useEffect, useState, useRef } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import BasicInfo from './components/BasicInfo';
import { theme } from './components/themes';
import { Container } from './components/styled/Layouts';
import Nav from './components/Nav/Nav';
import Projects from './pages/ProjectsPage/Projects';
import Experience from './pages/ExperiencePage/Experience';

function App() {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);
  const [currentPathname, setCurrentPathname] = useState(
    window.location.pathname
  );

  console.log(window.location.pathname);
  useEffect(() => {
    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  function updateDimensions() {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  }
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Container className='flex' direction='column'>
          <BodyContainer className='flex' margin='3.5rem auto 0 auto'>
            <BasicInfo />
            <Nav
              width={width}
              currentPathname={currentPathname}
              setCurrentPathname={setCurrentPathname}
            />
          </BodyContainer>

          <Route
            render={({ location }) => (
              <BodyContainer margin='3rem auto 0 auto'>                
                  <AnimatePresence exitBeforeEnter>
                    <Switch location={location} key={location.pathname}>
                      <Route path='/' exact>
                        <Projects width={width} />
                      </Route>
                      <Route path='/experience' exact>
                        <Experience width={width}/>
                      </Route>

                      <Route path='/about' exact>
                        <Projects width={width} />
                      </Route>
                    </Switch>
                  </AnimatePresence>
              </BodyContainer>
            )}
          />
        </Container>
      </ThemeProvider>
    </Router>
  );
}

const BodyContainer = styled(Container)`
  width: 100%;
  @media screen and (min-width: 1101px) {
    width: 56.25rem !important;
  }
`;

export default App;
