import { React, styled, withTheme } from '../../Dependencies';
import { Container } from '../../components/ComponentsMaster';
import ExperienceItem from './ExperienceItem';

function Experience(props) {
  const experienceItems = [
    {
      ColumbiaSpectator: {
        imgSrc:
          'https://res.cloudinary.com/dz5ashos1/image/upload/v1597019110/github/ols5toqngrrhqi1fdjpa.png',
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
      CorrelationOne: {
        imgSrc:
          'https://res.cloudinary.com/dz5ashos1/image/upload/v1597019107/github/wavttgnmhaerr5t5g99z.png',
        altText: 'Correlation One Logo',
        title: 'Software Developer Intern',
        timePeriod: 'June 2020-Sept 2020',
        companyTitle: 'Correlation One',
        points: [
          'Worked with 2 other developers to overhaul the main website.',
          'Created the connect and about pages using a contentful database.'
        ],
        link: 'https://www.correlation-one.com/',
        color: props.theme.colors.mainBlue
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
            <ExperienceContainer margin='0 0 2rem'>
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
