import {
  React,
  useEffect,
  Link,
  useHistory,
  withTheme,
  styled,
  motion,
} from "Dependencies";
import { Container, NavLink, Icons } from "../ComponentsMaster";

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

  function getHeader(direction, item, dictKey, index) {
    return (
      <NavLink
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
          {getHeader(direction, item, dictKey, index, item[dictKey].link)}
        </Link>
      );
    });
  }

  return (
    <>
      <NavContainer>
        {getNavItems(props.width < 1100 ? "y" : "x")}
        <ColorThemeButton
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          margin={props.width < 1100 ? "0.5rem 0 0 0" : "0 0 0 0.35rem"}
          onClick={() => props.setIsDarkMode(!props.isDarkMode)}
        >
          <Icons id={props.isDarkMode ? "moon" : "sun"} />
        </ColorThemeButton>
      </NavContainer>
    </>
  );
}

const ColorThemeButton = styled(motion.button)`
  background: transparent;
  border: 0;
  cursor: pointer;
  padding: 0;
  margin: ${(props) => props.margin};
  height: 28px;
  width: 28px;
  color: ${(props) => props.theme.colors.secondary};
`;

const NavContainer = styled.nav`
  display: flex;
  @media screen and (max-width: 1100px) {
    flex-direction: column;
    align-items: flex-end;
  }
`;

export default withTheme(Nav);
