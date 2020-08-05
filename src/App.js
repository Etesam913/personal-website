import React, { useEffect, useState, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import BasicInfo from "./components/BasicInfo";
import { theme } from "./components/themes";
import { Container } from "./components/Layouts";
import Nav from "./components/Nav/Nav";
import Projects from "./pages/ProjectsPage/Projects";

function App() {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);
  const [currentPathname, setCurrentPathname] = useState("/");

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  function updateDimensions() {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  }
  return (
    <ThemeProvider theme={theme}>
      <Container className="flex" direction="column">
        <BrowserRouter>
          <BodyContainer className="flex" margin="3.5rem auto 0 auto">
            <BasicInfo />
            <Nav
              width={width}
              currentPathname={currentPathname}
              setCurrentPathname={setCurrentPathname}
            />
          </BodyContainer>
          <BodyContainer margin="3.5rem auto 0 auto">
            <Route
              render={({ location }) => (
                <AnimatePresence>
                  <Switch location={location} key={location.pathname}>
                    <Route path="/" exact>
                      <Projects width={width} />
                    </Route>
                    <Route path="/experience" exact></Route>
                    <Route path="/about" exact></Route>
                  </Switch>
                </AnimatePresence>
              )}
            />
          </BodyContainer>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

const BodyContainer = styled(Container)`
  width: 100%;
  @media screen and (min-width: 1101px) {
    width: 56.25rem !important;
  }
`;

export default App;
