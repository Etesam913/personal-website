import Image from "next/image";
import ExperienceRow from "./experience-row";
import CollegeCoursework from "./college-coursework";
import TechnologiesRow from "./technologies-row";

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
          src="https://storage.googleapis.com/etesam-public/Personal-Website/my-experience-icon.png"
        />
        <h1>My Experience</h1>
      </div>

      <ExperienceRow
        companyName="Google"
        title="Software Engineer (L4)"
        date={{ from: "November 2025", to: "Present" }}
        imgData={{
          src: "https://storage.googleapis.com/etesam-public/Personal-Website/google-logo.png",
          alt: "Google Logo",
          width: 512 / 14,
          height: 512 / 14,
          href: "https://www.google.com/",
        }}
      >
        <ul className="experience-list">
          <li>Currently working on Google Cloud Console features.</li>
        </ul>
      </ExperienceRow>

      <ExperienceRow
        companyName="Google"
        title="Software Engineer (L3)"
        date={{ from: "November 2024", to: "November 2025" }}
        imgData={{
          src: "https://storage.googleapis.com/etesam-public/Personal-Website/google-logo.png",
          alt: "Google Logo",
          width: 512 / 14,
          height: 512 / 14,
          href: "https://www.google.com/",
        }}
      >
        <ul className="experience-list">
          <li>
            Collaborated with a team of four developers to build new Firestore
            database features in the Google Cloud Console using Angular,
            TypeScript, and GraphQL.
          </li>
          <li>
            Developed the Firestore query-insights page which displays query
            performance metrics and insights. Utilized by 500+ developers daily.
          </li>
          <li>
            Implemented UI functionality enabling users to add, delete, and
            update BSON fields (e.g., ObjectId, Int32, Decimal128) in Firestore
            Enterprise edition. This gave Firestore the ability to store and
            query data in a MongoDB-compatible format.
          </li>
          <li>
            Re-architected the Firestore document data model in the Console UI
            to unify data representations across the Firestore Web SDK and HTTP
            API resulting in a more streamlined and type-safe development
            experience.
          </li>
        </ul>
        <TechnologiesRow technologies="Angular, TypeScript, JavaScript, HTML, CSS, GraphQL" />
      </ExperienceRow>

      <ExperienceRow
        companyName="Balyasny Asset Management"
        title="Software Engineer"
        date={{ from: "January 2024", to: "August 2024" }}
        imgData={{
          src: "https://storage.googleapis.com/etesam-public/Personal-Website/bam-logo.jpeg",
          alt: "Balyasny Asset Management Logo",
          width: 200 / 5,
          height: 200 / 5,
          href: "https://www.bamfunds.com/",
        }}
      >
        <ul className="experience-list">
          <li>
            {" "}
            Collaborated with another developer, a designer, and a product
            manager to build a React web application enabling traders, analysts,
            and portfolio managers to monitor active quality control incidents
            for their subscribed datasets.{" "}
          </li>{" "}
          <li>
            {" "}
            Designed a PostgreSQL database schema and developed GraphQL API
            endpoints to power frontend retrieval of dataset incident data.{" "}
          </li>{" "}
          <li>
            {" "}
            Deployed to production and used by over 300 traders and analysts to
            track and manage dataset quality in real time.{" "}
          </li>
        </ul>
        <TechnologiesRow technologies="Python, React.js, HTML, CSS, TypeScript, JavaScript, PostgreSQL" />
      </ExperienceRow>

      <ExperienceRow
        companyName="Balyasny Asset Management"
        title="Associate Software Engineer"
        date={{ from: "June 2023", to: "January 2024" }}
        imgData={{
          src: "https://storage.googleapis.com/etesam-public/Personal-Website/bam-logo.jpeg",
          alt: "Balyasny Asset Management Logo",
          width: 200 / 5,
          height: 200 / 5,
          href: "https://www.bamfunds.com/",
        }}
      >
        <ul className="experience-list">
          <li>
            {" "}
            Collaborated with three developers to build a React application that
            enables traders to sort and filter macroeconomic data using{" "}
            <strong>AgGrid</strong> tables, visualize trends with{" "}
            <strong>lightweight-charts</strong>, and query data through{" "}
            <strong>Python</strong> and <strong>Excel</strong>{" "}
            integrations.{" "}
          </li>{" "}
          <li>
            {" "}
            Delivered a high-priority feature for the{" "}
            <strong>Data Catalog</strong> application—used by over 500 traders
            and sector analysts—that allowed research insights to be tagged
            across multiple datasets.{" "}
          </li>
        </ul>
        <TechnologiesRow technologies="React.js, Apollo GraphQL, HTML, CSS, TypeScript, JavaScript, PostgreSQL" />
      </ExperienceRow>

      <ExperienceRow
        companyName="Columbia University"
        title="Bachelors in Computer Science"
        date={{ from: "September 2019", to: "May 2023" }}
        imgData={{
          src: "https://storage.googleapis.com/etesam-public/Personal-Website/columbia-logo.png",
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
          src: "https://storage.googleapis.com/etesam-public/Personal-Website/meta-logo.png",
          alt: "Meta Logo",
          width: 300 / 8,
          height: 199 / 8,
          href: "https://www.meta.com/",
        }}
      >
        <ul className="experience-list">
          <li>
            Worked alongside two other software engineers on{" "}
            <a href="https://mephisto.ai/">Mephisto</a>, a data collection
            platform that allows researchers to easily publish tasks that
            workers can complete for money.
          </li>
          <li>
            Published{" "}
            <a href="https://mephisto.ai/docs/guides/how_to_use/worker_experience/mephisto-worker-addons/">
              the mephisto-worker-addons npm library
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
        <TechnologiesRow technologies="React.js, Python, HTML, CSS, JavaScript" />
      </ExperienceRow>
      <ExperienceRow
        companyName="Genesys"
        date={{ from: "June 2021", to: "August 2021" }}
        title="Software Engineer Intern"
        imgData={{
          src: "https://storage.googleapis.com/etesam-public/Personal-Website/genesys-logo.png",
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
            Created a dashboard that displayed the VPAT files from the database
            as well as other important information (file name, team name, team
            contact email, etc.).
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
        <TechnologiesRow technologies="React.js, Angular, AWS Lambda, DynamoDB, s3, Serverless Framework, Jenkins, HTML, CSS, JavaScript" />
      </ExperienceRow>
      <ExperienceRow
        companyName="Correlation One"
        date={{ from: "June 2020", to: "September 2020" }}
        title="Software Engineer Intern"
        imgData={{
          src: "https://storage.googleapis.com/etesam-public/Personal-Website/correlation-one-logo.png",
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
            Integrated with a Contentful database to retrieve and display data
            for each employee on the About page.
          </li>
        </ul>
        <TechnologiesRow technologies="React.js, HTML, CSS, JavaScript" />
      </ExperienceRow>

      <ExperienceRow
        companyName="Columbia Daily Spectator"
        date={{ from: "September 2019", to: "May 2023" }}
        title="Software Engineer"
        imgData={{
          src: "https://storage.googleapis.com/etesam-public/Personal-Website/spec-logo.png",
          alt: "Columbia Daily Spectator Logo",
          width: 518 / 15,
          height: 518 / 15,
          href: "https://www.columbiaspectator.com/",
        }}
      >
        <ul className="experience-list">
          <li>
            Worked with four other developers to create the Columbia Daily
            Spectator Mobile App. Utilized React Native and the Expo framework
            to create a cross-platform UI.
          </li>
          <li>
            Worked in a team with 10 other developers to migrate Columbia&apos;s
            leading student newspaper&apos;s website to React.js.
          </li>
          <li>
            Worked with three other developers to create React components for
            lionclubs, a platform where Columbia students can apply for clubs.
          </li>
        </ul>
        <TechnologiesRow technologies="React.js, React Native, HTML, CSS, JavaScript" />
      </ExperienceRow>
    </>
  );
}
