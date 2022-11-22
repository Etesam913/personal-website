import { React, styled, withTheme } from "Dependencies";
import { Header1, Header2, Header3, Link } from "components/ComponentsMaster";

function ErrorPage({ theme }) {
  return (
    <ErrorContainer>
      <CryingEmoji src='https://etesam.nyc3.digitaloceanspaces.com/Personal-Website/Loudly%20Crying%20Face.png' />
      <Header1>Page not found!</Header1>
      <Header2>
        Sorry, but the page that you were looking for could not be found.
      </Header2>
      <Header3 margin='1rem 0'>
        You can return to the front page{" "}
        <Link
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1 }}
          color={theme.colors.mainBlue}
          fontSize='inherit'
          href='/'
        >
          here
        </Link>
      </Header3>
    </ErrorContainer>
  );
}

const ErrorContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const CryingEmoji = styled.img`
  height: 4.5rem;
  width: 4.5rem;
  margin-bottom: 0.5rem;
`;

export default withTheme(ErrorPage);
