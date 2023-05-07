import Image from "next/image";
import ExperienceRow from "./experience-row";

export default function Experience() {
  return (
    <main>
      <div className='header-row-container'>
        <Image
          style={{ marginRight: "1rem" }}
          height={48}
          width={48}
          priority
          alt='Icon of Desktop Computer'
          src='https://etesam.nyc3.cdn.digitaloceanspaces.com/Personal-Website/my-experience-icon.png'
        />
        <h1>My Experience</h1>
      </div>
      <ExperienceRow
        companyName='Balyasny Asset Management'
        title='Software Engineer'
        date={{ from: "June 2023", to: "Present" }}
        imgData={{
          src: "https://etesam.nyc3.cdn.digitaloceanspaces.com/Personal-Website/bam-logo.jpeg",
          alt: "Balyasny Asset Management Logo",
          width: 200 / 5,
          height: 200 / 5,
          href: "https://www.bamfunds.com/",
        }}
      />
      <ExperienceRow
        companyName='Meta'
        date={{ from: "May 2022", to: "August 2022" }}
        title='Frontend Engineer Intern'
        imgData={{
          src: "https://etesam.nyc3.cdn.digitaloceanspaces.com/Personal-Website/meta-logo.png",
          alt: "Meta Logo",
          width: 300 / 8,
          height: 199 / 8,
          href: "https://www.meta.com/",
        }}
      >
        <ul className='experience-list'>
          <li>
            Worked alongside two other software developers on{" "}
            <a href='https://mephisto.ai/'>Mephisto</a>, a data collection
            platform that allows researchers to easily publish tasks that
            workers can complete for money.
          </li>
          <li>
            I published{" "}
            <a href='https://mephisto.ai/docs/guides/how_to_use/worker_experience/mephisto-worker-addons/'>
              a npm library
            </a>{" "}
            with two React.js components named "tips" and "feedback".
          </li>
          <li>
            These components were used in tandem with the Python backend to
            improve worker-to-worker and worker-to-researcher communication.
          </li>
          <li>
            Made other improvements like adding a search bar to the
            documentation website and beautifying the command line interface.
          </li>
        </ul>
      </ExperienceRow>
      <ExperienceRow
        companyName='Genesys'
        date={{ from: "June 2021", to: "August 2021" }}
        title='Software Engineer Intern'
        imgData={{
          src: "https://etesam.nyc3.cdn.digitaloceanspaces.com/Personal-Website/genesys-logo.png",
          alt: "Genesys Logo",
          width: 518 / 14,
          height: 518 / 14,
          href: "https://www.genesys.com/",
        }}
      >
        <ul className='experience-list'>
          <li>
            Worked with two other developers to create a serverless application
            that automates the uploading of VPAT (Voluntary Product
            Accessibility Template) files whenever a change is made to the VPAT
            in the repository.
          </li>
          <li>
            Created a dashboard which displayed the VPAT files from the database
            as well as other important information (file name, team name, team
            contact email, etc...).
          </li>
          <li>
            Used an AWS application load balancer, lambdas, DynamoDB, s3, and
            Jenkins to make this possible.
          </li>
          <li>
            Worked with one other developer to migrate an old AngularJS app to
            modern Angular 11.
          </li>
        </ul>
      </ExperienceRow>
      <ExperienceRow
        companyName='Correlation One'
        date={{ from: "June 2020", to: "September 2020" }}
        title='Software Engineer Intern'
        imgData={{
          src: "https://etesam.nyc3.cdn.digitaloceanspaces.com/Personal-Website/correlation-one-logo.png",
          alt: "Correlation One Logo",
          width: 518 / 15,
          height: 518 / 15,
          href: "https://www.correlation-one.com/",
        }}
      >
        <ul className='experience-list'>
          <li>
            Worked with two other developers to make substantial UI improvements
            to the Assess, Connect, and About pages of the main website using
            React.js.
          </li>
          <li>
            Worked with a Contentful database to get data for each employee on
            the About page.
          </li>
        </ul>
      </ExperienceRow>

      <ExperienceRow
        companyName='Columbia Daily Spectator'
        date={{ from: "September 2019", to: "May 2023" }}
        title='Software Engineer'
        imgData={{
          src: "https://etesam.nyc3.cdn.digitaloceanspaces.com/Personal-Website/spec-logo.png",
          alt: "Columbia Daily Spectator Logo",
          width: 518 / 15,
          height: 518 / 15,
          href: "https://www.columbiaspectator.com/",
        }}
      >
        <ul className='experience-list'>
          <li>
            Worked with four other developers to create the Columbia Daily
            Spectator Mobile App. Utilized react-native and the expo framework
            to create a cross platform UI.
          </li>
          <li>
            Worked in a team with 10 other developers to migrate Columbia&apos;s
            leading student newspaper&apos;s website to React.js.
          </li>
          <li>
            Worked with three other developers to create react components for{" "}
            <a href='https://www.lionclubs.info/'>lionclubs</a>, a platform
            where Columbia students can apply for clubs.
          </li>
        </ul>
      </ExperienceRow>
    </main>
  );
}
