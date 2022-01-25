import { React, styled, withTheme } from 'Dependencies';
import { Container } from 'components/ComponentsMaster';
import ExperienceItem from './ExperienceItem';

function Experience(props) {
  const experienceItems = [
    {
      ColumbiaSpectator: {
        imgSrc:
          'https://etesam.nyc3.digitaloceanspaces.com/Personal-Website/spec-logo.png',
        altText: 'Spectator Logo',
        title: 'Software Developer',
        timePeriod: 'Sept 2019-Present',
        companyTitle: 'Columbia Daily Spectator',
        points: [
          'Worked in a team with 10 other developers to overhaul Columbia’s leading student newspaper’s website with React.js. The website receives 50 million impressions annualy.',
          'Worked in a committee to help improve the developer training experience for incoming students'
        ],
        link: 'https://www.columbiaspectator.com/',
        color: props.theme.colors.mainGreen
      }
    },
    {
      Genesys: {
        imgSrc:
          'https://etesam.nyc3.digitaloceanspaces.com/Personal-Website/genesys-logo.png',
        altText: 'Genesys Logo',
        title: 'Software Developer Intern',
        timePeriod: 'June 2021-August 2021',
        companyTitle: 'Genesys',
        points: [
          'Worked with two other developers to create a serverless application that automates the uploading of VPAT (Voluntary Product Accessibility Template) files whenever a change is made to the VPAT in the repository.',
          'Created a dashboard which displayed the VPAT files from the database as well as other important information (file name, team name, team contact email, etc...).',
          'Used an AWS application load balancer, lambdas, DynamoDB, s3, and Jenkins to make this possible.',
          'Worked with one other developer to migrate an old AngularJS app to modern Angular 11.',
          'Used technologies like RxJS to manage state flow'
        ],
        link: 'https://www.genesys.com/',
        color: props.theme.colors.mainBlue
      }
    },
    {
      CorrelationOne: {
        imgSrc:
          'https://etesam.nyc3.digitaloceanspaces.com/Personal-Website/correlation-one-logo.png',
        altText: 'Correlation One Logo',
        title: 'Software Developer Intern',
        timePeriod: 'June 2020-Sept 2020',
        companyTitle: 'Correlation One',
        points: [
          'Worked with two other developers to make substantial UI improvements to the Assess, Connect, and About pages of the main website using React.js.',
          'Worked with a Contentful database to get data for each employee on the About page.'
        ],
        link: 'https://www.correlation-one.com/',
        color: props.theme.colors.mainGreen
      }
    }
  ];

  return (
    <Container
      width='100%'
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
    >
      <>
        {experienceItems.map((item, index) => {
          const dictKey = Object.keys(item)[0];
          return (
            <ExperienceContainer
              margin='0 0 2rem'
              key={`experience-container-${index}`}
            >
              <ExperienceItem
                key={'experience-item-' + index}
                imgSrc={item[dictKey].imgSrc}
                altText={item[dictKey].altText}
                title={item[dictKey].title}
                timePeriod={item[dictKey].timePeriod}
                companyTitle={item[dictKey].companyTitle}
                points={item[dictKey].points}
                link={item[dictKey].link}
                color={item[dictKey].color}
              />
            </ExperienceContainer>
          );
        })}
      </>
    </Container>
  );
}

const ExperienceContainer = styled(Container)`
  @media screen and (max-width: 1100px) {
    padding: 0 6rem !important;
  }

  @media screen and (max-width: 792px) {
    padding: 0 2rem !important;
  }
`;
export default withTheme(Experience);
