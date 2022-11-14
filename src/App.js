import {
  React,
  useState,
  useEffect,
  styled,
  ThemeProvider,
  Router,
  Switch,
  Route,
  AnimatePresence,
} from "./Dependencies";
import {
  Nav,
  Container,
  BasicInfo,
  lightTheme,
  darkTheme,
  GlobalStyle,
} from "components/ComponentsMaster";
import { Projects, Experience, About, ErrorPage } from "./pages/PagesMaster";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [currentPathname, setCurrentPathname] = useState(window.location.hash);
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    setCurrentPathname(window.location.hash);
    window.addEventListener("resize", updateDimensions);
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  function updateDimensions() {
    setWidth(window.innerWidth);
  }

  return (
    <Router>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <BodyContainer>
          <HeaderContainer>
            <BasicInfo />
            <Nav
              width={width}
              currentPathname={currentPathname}
              setCurrentPathname={setCurrentPathname}
              setIsDarkMode={setIsDarkMode}
              isDarkMode={isDarkMode}
            />
          </HeaderContainer>

          <Route
            render={({ location }) => (
              <MainContainer>
                <AnimatePresence exitBeforeEnter>
                  <Switch location={location} key={location.pathname}>
                    <Route path='/' exact>
                      <Projects width={width} />
                    </Route>
                    <Route path='/experience' exact>
                      <Experience width={width} />
                    </Route>
                    <Route path='/about' exact>
                      <About />
                    </Route>
                    <Route path='*'>
                      <ErrorPage />
                    </Route>
                  </Switch>
                </AnimatePresence>
              </MainContainer>
            )}
          />
        </BodyContainer>
      </ThemeProvider>
    </Router>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
`;

const MainContainer = styled.main`
  margin-top: 2.5rem;
`;

const BodyContainer = styled.div`
  width: min(56.25rem, 80%);
  margin: 0 auto;
  padding-bottom: 2rem;
`;
export default App;
