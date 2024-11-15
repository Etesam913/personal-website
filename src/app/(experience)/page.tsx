import Image from "next/image";
import ExperienceRow from "./experience-row";
import CollegeCoursework from "./college-coursework";

export default function Experience() {
  return (
    <>
      <div className="header-row-container">
        <Image
          style={{ marginRight: "1rem" }}
          height={48}
          width={48}
          priority
          alt="Icon of Desktop Computer"
          src="https://etesam.nyc3.cdn.digitaloceanspaces.com/Personal-Website/my-experience-icon.png"
        />
        <h1>My Experience</h1>
      </div>
      <ExperienceRow
        companyName="Google"
        title="Software Engineer (L3)"
        date={{ from: "November 2024", to: "Present" }}
        imgData={{
          src: "https://etesam.nyc3.cdn.digitaloceanspaces.com/Personal-Website/google-logo.png",
          alt: "Google Logo",
          width: 512 / 14,
          height: 512 / 14,
          href: "https://www.google.com/",
        }}
      >
        <ul className="experience-list">
          <li>Present</li>
        </ul>
      </ExperienceRow>

      <ExperienceRow
        companyName="Balyasny Asset Management"
        title="Software Engineer"
        date={{ from: "January 2024", to: "August 2024" }}
        imgData={{
          src: "https://etesam.nyc3.cdn.digitaloceanspaces.com/Personal-Website/bam-logo.jpeg",
          alt: "Balyasny Asset Management Logo",
          width: 200 / 5,
          height: 200 / 5,
          href: "https://www.bamfunds.com/",
        }}
      >
        <ul className="experience-list">
          <li>
            Worked with one other developer, a designer, and a product manager
            to create a React web application that help traders, analysts, and
            portfolio managers observe the active quality control incidents
            associated with the datasets that they are subscribed to.
          </li>

          <li>
            Created a PostgreSQL database schema and GraphQL api endpoints that
            allowed for the frontend to retrieve the incident data for a given
            dataset.
          </li>
          <li>
            Utilized by over 300+ traders and analysts to monitor the quality of
            their datasets.
          </li>
        </ul>
        <div className="technology-row">
          <h3>Technologies: &nbsp; </h3> Python, React.js, HTML, CSS,
          JavaScript, PostgreSQL
        </div>
      </ExperienceRow>

      <ExperienceRow
        companyName="Balyasny Asset Management"
        title="Associate Software Engineer"
        date={{ from: "June 2023", to: "January 2024" }}
        imgData={{
          src: "https://etesam.nyc3.cdn.digitaloceanspaces.com/Personal-Website/bam-logo.jpeg",
          alt: "Balyasny Asset Management Logo",
          width: 200 / 5,
          height: 200 / 5,
          href: "https://www.bamfunds.com/",
        }}
      >
        <ul className="experience-list">
          <li>
            Worked with three other developers to create a React application
            that helps traders sort and filter macroeconomic data using tables
            (AgGrid), visualize data using graphs (lightweight-charts), and
            query data using Python & Excel code
          </li>
          <li>
            Added a high priority feature to the Data Catalog application (used
            by 500+ traders and sector data analysts) that enabled research
            insights to be tagged to multiple datasets
          </li>
        </ul>
        <div className="technology-row">
          <h3>Technologies: &nbsp; </h3> React.js, Apollo GraphQL, HTML, CSS,
          JavaScript, PostgreSQL
        </div>
      </ExperienceRow>

      <ExperienceRow
        companyName="Columbia University"
        title="Bachelors in Computer Science"
        date={{ from: "September 2019", to: "May 2023" }}
        imgData={{
          src: "https://etesam.nyc3.cdn.digitaloceanspaces.com/Personal-Website/columbia-logo.png",
          alt: "Columbia University Logo",
          width: 640 / 15,
          height: 507 / 15,
          href: "https://www.columbia.edu/",
        }}
      >
        <ul className="experience-list">
          <li>
            Programming coursework
            <CollegeCoursework />
          </li>
        </ul>
      </ExperienceRow>

      <ExperienceRow
        companyName="Meta"
        date={{ from: "May 2022", to: "August 2022" }}
        title="Frontend Engineer Intern"
        imgData={{
          src: "https://etesam.nyc3.cdn.digitaloceanspaces.com/Personal-Website/meta-logo.png",
          alt: "Meta Logo",
          width: 300 / 8,
          height: 199 / 8,
          href: "https://www.meta.com/",
        }}
      >
        <ul className="experience-list">
          <li>
            Worked alongside two other software engineer on{" "}
            <a href="https://mephisto.ai/">Mephisto</a>, a data collection
            platform that allows researchers to easily publish tasks that
            workers can complete for money.
          </li>
          <li>
            I published{" "}
            <a href="https://mephisto.ai/docs/guides/how_to_use/worker_experience/mephisto-worker-addons/">
              a npm library
            </a>{" "}
            with two React.js components named &quot;tips&quot; and
            &quot;feedback&quot;.
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
        <div className="technology-row">
          <h3>Technologies: &nbsp; </h3> React.js, Python, HTML, CSS, JavaScript
        </div>
      </ExperienceRow>
      <ExperienceRow
        companyName="Genesys"
        date={{ from: "June 2021", to: "August 2021" }}
        title="Software Engineer Intern"
        imgData={{
          src: "https://etesam.nyc3.cdn.digitaloceanspaces.com/Personal-Website/genesys-logo.png",
          alt: "Genesys Logo",
          width: 518 / 14,
          height: 518 / 14,
          href: "https://www.genesys.com/",
        }}
      >
        <ul className="experience-list">
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
        <div className="technology-row">
          <h3>Technologies: &nbsp; </h3> React.js, Angular, AWS Lambda,
          DynamoDB, s3, Serverless Framework, Jenkins, HTML, CSS, JavaScript
        </div>
      </ExperienceRow>
      <ExperienceRow
        companyName="Correlation One"
        date={{ from: "June 2020", to: "September 2020" }}
        title="Software Engineer Intern"
        imgData={{
          src: "https://etesam.nyc3.cdn.digitaloceanspaces.com/Personal-Website/correlation-one-logo.png",
          alt: "Correlation One Logo",
          width: 518 / 15,
          height: 518 / 15,
          href: "https://www.correlation-one.com/",
        }}
      >
        <ul className="experience-list">
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
        <div className="technology-row">
          <h3>Technologies: &nbsp; </h3> React.js, HTML, CSS, JavaScript
        </div>
      </ExperienceRow>

      <ExperienceRow
        companyName="Columbia Daily Spectator"
        date={{ from: "September 2019", to: "May 2023" }}
        title="Software Engineer"
        imgData={{
          src: "https://etesam.nyc3.cdn.digitaloceanspaces.com/Personal-Website/spec-logo.png",
          alt: "Columbia Daily Spectator Logo",
          width: 518 / 15,
          height: 518 / 15,
          href: "https://www.columbiaspectator.com/",
        }}
      >
        <ul className="experience-list">
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
            <a href="https://www.lionclubs.info/">lionclubs</a>, a platform
            where Columbia students can apply for clubs.
          </li>
        </ul>
        <div className="technology-row">
          <h3>Technologies: &nbsp; </h3> React.js, React Native, HTML, CSS,
          JavaScript
        </div>
      </ExperienceRow>
    </>
  );
}
