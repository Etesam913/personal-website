import {
  React,
  useEffect,
  Link,
  useHistory,
  withTheme,
  styled,
  motion,
} from "Dependencies";
import { NavLink } from "../ComponentsMaster";

function Nav(props) {
  const history = useHistory();

  useEffect(() => {
    return history.listen((location) => {
      props.setCurrentPathname("#" + location.pathname);
    });
  }, [history]);
  const navContent = [
    { Projects: { link: "/" } },
    { Experience: { link: "/experience" } },
    { About: { link: "/about" } },
  ];

  function getHeader(item, dictKey, index) {
    return (
      <NavLink
        margin={props.width <= 1100 ? "0" : "0 0.25rem"}
        showCursor
        key={index}
        grayedOut={props.currentPathname !== "#" + item[dictKey].link}
      >
        {dictKey}
      </NavLink>
    );
  }

  function getNavItems(direction) {
    return navContent.map((item, index) => {
      const dictKey = Object.keys(item)[0];
      return (
        <Link
          to={item[dictKey].link}
          key={index}
          style={
            direction === "x"
              ? { textDecoration: "none" }
              : { textDecoration: "none", marginBottom: "0.9rem" }
          }
        >
          {getHeader(item, dictKey, index)}
        </Link>
      );
    });
  }

  return (
    <>
      <NavContainer>
        {getNavItems(props.width <= 1100 ? "y" : "x")}
        <ColorThemeButton
          initial={{ y: -5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => props.setIsDarkMode(!props.isDarkMode)}
        >
          {props.isDarkMode ? (
            <ColorThemeImage src='https://etesam.nyc3.digitaloceanspaces.com/Personal-Website/Moon.png' />
          ) : (
            <ColorThemeImage src='https://etesam.nyc3.digitaloceanspaces.com/Personal-Website/Sun.png' />
          )}
        </ColorThemeButton>
      </NavContainer>
    </>
  );
}

const ColorThemeButton = styled(motion.button)`
  background: transparent;
  border: 0;
  cursor: pointer;
  display: inline-block;
  padding: 0;
  margin: ${(props) => props.margin};
  height: 2.75rem;
  width: 2.75rem;
  color: ${(props) => props.theme.colors.secondary};
`;

const ColorThemeImage = styled.img`
  height: 100%;
  width: 100%;
`;

const NavContainer = styled.nav`
  display: flex;
  height: 4rem;
  @media screen and (max-width: 1100px) {
    flex-direction: column;
    align-items: flex-end;
    height: auto;
  }
`;

export default withTheme(Nav);
