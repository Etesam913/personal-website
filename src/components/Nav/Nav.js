import {
  React,
  useEffect,
  Link,
  useHistory,
  withTheme,
} from '../../Dependencies';
import { Container, Header2, NavLink } from '../ComponentsMaster';
import { xVariants, yVariants } from '../../variants/NavVariants';

function Nav(props) {
  const history = useHistory();

  useEffect(() => {
    return history.listen((location) => {
      props.setCurrentPathname('#' + location.pathname);
    });
  }, [history]);
  const navContent = [
    { Projects: { link: '/' } },
    { Experience: { link: '/experience' } },
    { About: { link: '/about' } },
  ];

  function getHeader(direction, item, dictKey, index) {
    if (direction === 'x') {
      return (
        <NavLink
          showCursor
          variants={xVariants}
          custom={index}
          initial='hidden'
          whileHover={{ color: props.theme.colors.mainBlack }}
          animate={
            props.currentPathname === '#' + item[dictKey].link
              ? 'show'
              : 'grayed'
          }
          padding='0.875rem 0.5rem'
          key={index}
        >
          {dictKey}
        </NavLink>
      );
    } else {
      return (
        <NavLink
          showCursor
          variants={yVariants}
          custom={index}
          initial='hidden'
          whileHover={{ color: props.theme.colors.mainBlack }}
          animate={
            props.currentPathname === '#' + item[dictKey].link
              ? 'show'
              : 'grayed'
          }
          padding='0.875rem 0.5rem'
          key={index}
        >
          {dictKey}
        </NavLink>
      );
    }
  }

  function getNavItems(direction) {
    return navContent.map((item, index) => {
      const dictKey = Object.keys(item)[0];
      return (
        <Link
          to={item[dictKey].link}
          key={index}
          style={
            direction === 'x'
              ? { textDecorationColor: 'black' }
              : { textDecorationColor: 'black', marginBottom: '0.9rem' }
          }
        >
          {getHeader(direction, item, dictKey, index, item[dictKey].link)}
        </Link>
      );
    });
  }

  return (
    <>
      {props.width <= 1100 ? (
        <Container
          as={'nav'}
          margin='0 3rem 0 auto'
          className='flex'
          direction='column'
        >
          <></>
          {getNavItems('y')}
        </Container>
      ) : (
        <Container as={'nav'} margin='0 0 0 auto' className='flex'>
          {getNavItems('x')}
        </Container>
      )}
    </>
  );
}

export default withTheme(Nav);
