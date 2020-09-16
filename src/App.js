import {
  React,
  useState,
  useEffect,
  styled,
  ThemeProvider,
  Router,
  Switch,
  Route,
  AnimatePresence
} from './Dependencies';
import {
  Nav,
  Container,
  BasicInfo,
  theme
} from './components/ComponentsMaster';
import { Projects, Experience, About } from './pages/PagesMaster';

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [currentPathname, setCurrentPathname] = useState(
    window.location.hash
  );
  useEffect(() => {
    setCurrentPathname(window.location.hash)
    window.addEventListener('resize', updateDimensions);
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  function updateDimensions() {
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
                      <Experience width={width} />
                    </Route>

                    <Route path='/about' exact>
                      <About />
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
