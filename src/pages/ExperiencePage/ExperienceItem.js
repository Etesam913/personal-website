import { React, motion, styled, withTheme } from "Dependencies";
import { Container } from "components/styled/Layouts";
import { Header1, Header2, Header3 } from "components/styled/Titles";
import { Link } from "components/styled/Link";

function ExperienceItem(props) {
  return (
    <Container width="100%">
      <MobileContainer>
        <Link
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1 }}
          underline
          href={props.link}
          underlineColor={props.theme.colors.mainBlue}
        >
          <Header1 textAlign="center" color={props.theme.colors.mainBlue}>
            {props.companyTitle}
          </Header1>
        </Link>
        <MobileRowItem>
          <Link href={props.link}>
            <CompanyLogo
              src={props.imgSrc}
              alt={props.altText}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
            />
          </Link>
        </MobileRowItem>
      </MobileContainer>
      <MobileContainer>
        <Header3 textAlign="center">{props.title}</Header3>
        <MobileRowItem>
          <Header3 textAlign="center">{props.timePeriod}</Header3>
        </MobileRowItem>
      </MobileContainer>

      {props.points.map((text, index) => {
        return (
          <MobileText key={"point-" + index}>
            <Header2>{text}</Header2>
          </MobileText>
        );
      })}
    </Container>
  );
}

const CompanyLogo = styled(motion.img)`
  width: auto;
  height: 2rem;
`;

const MobileText = styled(Container)`
  margin: 1rem 0 1rem 2rem;
  @media screen and (max-width: 930px) {
    text-align: center;
    margin: 1rem 0;
  }
`;

const MobileContainer = styled(Container)`
  display: flex;
  align-items: center;
  flex-direction: row;
  @media screen and (max-width: 930px) {
    flex-direction: column;
  }
`;
const MobileRowItem = styled(Container)`
  margin: 0 0 0 auto;
  @media screen and (max-width: 1100px) and (min-width: 930px) {
    margin-right: 2rem;
  }
  @media screen and (max-width: 930px) {
    margin: 0;
  }
`;

export default withTheme(ExperienceItem);
