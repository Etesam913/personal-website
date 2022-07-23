import { React, styled, withTheme } from "Dependencies";
import { Header1, Header2, Header3, Link } from "components/ComponentsMaster";

function ErrorPage({ theme }) {
  return (
    <ErrorContainer>
      <Header1>Page not found!</Header1>
      <Header2>
        Sorry, but the page that you were looking for could not be found.
      </Header2>
      <Header3 margin="1.5rem 0">
        You can return to the front page{" "}
        <Link
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1 }}
          color={theme.colors.mainBlue}
          fontSize="inherit"
          href="/"
        >
          here
        </Link>
      </Header3>
    </ErrorContainer>
  );
}

const ErrorContainer = styled.section`
  @media screen and (max-width: 1100px) {
    padding-left: 6rem !important;
    padding-right: 6rem !important;
  }

  @media screen and (max-width: 600px) {
    padding-left: 2rem !important;
    padding-right: 2rem !important;
    text-align: center;
  }
`;

export default withTheme(ErrorPage);
