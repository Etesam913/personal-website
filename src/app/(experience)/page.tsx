import Image from "next/image";
import ExperienceRow from "./experience-row";
import CollegeCoursework from "./college-coursework";
import TechnologiesRow from "./technologies-row";

export const metadata = {
  title: "Experience | Etesam Ansari",
  description:
    "Work experience, education, and technologies used by software engineer Etesam Ansari.",
};

export default function Experience() {
  return (
    <>
      <div className="header-row-container">
        <Image
          style={{ marginRight: "1rem" }}
          height={48}
          width={48}
          priority
          alt=""
          src="https://storage.googleapis.com/etesam-public/Personal-Website/my-experience-icon.png"
        />
        <h1>My Experience</h1>
      </div>

      <ExperienceRow
        companyName="Google"
        title="Software Engineer"
        date={{
          from: { display: "November 2024", dateTime: "2024-11" },
          to: { display: "Present" },
        }}
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
            Collaborated with two developers to build the Google Cloud Platform
            UI for the publicly launched Enterprise edition of Firestore, a
            database used by a community of 600,000+ developers.
          </li>
          <li>
            Designed and built the Firestore query insights UI, a
            launch-featured observability tool used by 1,000+ enterprise users
            to identify and optimize high-latency queries.
          </li>
          <li>
            Built GraphQL resolvers connected to Kotlin backend endpoints to
            power the UI&apos;s data layer.
          </li>
          <li>
            Developed the UI and supporting middleware using TypeScript,
            Angular, Java, and Kotlin; earned TypeScript and Kotlin readability
            certifications.
          </li>
        </ul>
        <TechnologiesRow technologies="TypeScript, Angular, Java, Kotlin, GraphQL, Google Cloud Platform, Firestore" />
        <div className="role-progression" aria-label="Google role progression">
          <p className="role-progression-label">Level progression</p>
          <div className="role-progression-row">
            <strong>Software Engineer L4</strong>
            <span>
              <time dateTime="2025-10">October 2025</time> - Present
            </span>
          </div>
          <div className="role-progression-row">
            <strong>Software Engineer L3</strong>
            <span>
              <time dateTime="2024-11">November 2024</time> -{" "}
              <time dateTime="2025-10">October 2025</time>
            </span>
          </div>
        </div>
      </ExperienceRow>

      <ExperienceRow
        companyName="Balyasny Asset Management"
        title="Software Engineer"
        date={{
          from: { display: "June 2023", dateTime: "2023-06" },
          to: { display: "August 2024", dateTime: "2024-08" },
        }}
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
            Released an npm library exposing a React component that
            automatically fetches currency data and visualizes it in a line
            chart.
          </li>
          <li>
            Built a React application with three other developers that enables
            traders to sort and filter macroeconomic data in tables using{" "}
            <strong>AG Grid</strong>, visualize data in graphs with{" "}
            <strong>lightweight-charts</strong>, and query data with{" "}
            <strong>Python</strong> and <strong>Excel</strong>.
          </li>
          <li>
            Delivered a high-priority feature for the{" "}
            <strong>Data Catalog</strong> application, used by 1,000+ traders
            and sector data analysts, enabling written insights to be tagged
            across multiple datasets using GraphQL resolvers, Strapi, and
            PostgreSQL.
          </li>
        </ul>
        <TechnologiesRow technologies="React.js, TypeScript, JavaScript, Python, Excel, GraphQL, Strapi, PostgreSQL" />
        <div
          className="role-progression"
          aria-label="Balyasny Asset Management role progression"
        >
          <p className="role-progression-label">Level progression</p>
          <div className="role-progression-row">
            <strong>Software Engineer II</strong>
            <span>
              <time dateTime="2024-01">January 2024</time> -{" "}
              <time dateTime="2024-08">August 2024</time>
            </span>
          </div>
          <div className="role-progression-row">
            <strong>Software Engineer I</strong>
            <span>
              <time dateTime="2023-06">June 2023</time> -{" "}
              <time dateTime="2024-01">January 2024</time>
            </span>
          </div>
        </div>
      </ExperienceRow>

      <ExperienceRow
        companyName="Columbia University"
        title="Bachelor of Science in Computer Science"
        date={{
          from: { display: "September 2019", dateTime: "2019-09" },
          to: { display: "May 2023", dateTime: "2023-05" },
        }}
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
        date={{
          from: { display: "May 2022", dateTime: "2022-05" },
          to: { display: "August 2022", dateTime: "2022-08" },
        }}
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
            platform that lets researchers publish paid tasks for users to
            complete.
          </li>
          <li>
            Published{" "}
            <a href="https://mephisto.ai/docs/guides/how_to_use/worker_experience/mephisto-worker-addons/">
              a new version of the mephisto-worker-addons npm library
            </a>{" "}
            with 20,000+ downloads, adding two React.js components named
            &quot;tips&quot; and &quot;feedback&quot;.
          </li>
          <li>
            Integrated the components with a Python backend and SQLite database
            to improve worker-to-worker and worker-to-researcher communication.
          </li>
          <li>
            Configured end-to-end testing and continuous integration with
            Cypress and GitHub Actions, achieving 100% test coverage on the
            example projects.
          </li>
        </ul>
        <TechnologiesRow technologies="React.js, Python, SQLite, Cypress, GitHub Actions, HTML, CSS, JavaScript" />
      </ExperienceRow>
      <ExperienceRow
        companyName="Genesys"
        date={{
          from: { display: "June 2021", dateTime: "2021-06" },
          to: { display: "August 2021", dateTime: "2021-08" },
        }}
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
            Developed a serverless application that automatically uploads VPAT
            (Voluntary Product Accessibility Template) files whenever a change
            is made in a GitHub repository.
          </li>
          <li>
            Created a dashboard displaying VPAT files and key metadata,
            including file name, team name, and contact email, adopted by 30+
            internal teams for submitting accessibility documentation.
          </li>
          <li>
            Built the system with an AWS Application Load Balancer, Lambda,
            DynamoDB, S3, and Jenkins.
          </li>
        </ul>
        <TechnologiesRow technologies="AWS Application Load Balancer, AWS Lambda, DynamoDB, S3, Jenkins, HTML, CSS, JavaScript" />
      </ExperienceRow>
      <ExperienceRow
        companyName="Correlation One"
        date={{
          from: { display: "June 2020", dateTime: "2020-06" },
          to: { display: "September 2020", dateTime: "2020-09" },
        }}
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
        date={{
          from: { display: "September 2019", dateTime: "2019-09" },
          to: { display: "May 2023", dateTime: "2023-05" },
        }}
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
