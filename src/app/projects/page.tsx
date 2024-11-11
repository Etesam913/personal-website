import Image from "next/image";
import "./projects.css";
import { YoutubeEmbed } from "../(youtube-embed)";
import CardLink from "./card-link";

export default function Projects() {
  return (
    <>
      <div className="header-row-container">
        <Image
          style={{ marginRight: "1rem" }}
          height={48}
          width={48}
          alt="Icon of Me"
          priority
          src="https://etesam.nyc3.cdn.digitaloceanspaces.com/Personal-Website/projects-icon.png"
        />
        <h1>My Projects</h1>
      </div>
      <div className="cards-container">
        <div className="card">
          <CardLink
            href="https://www.react-magic-motion.com/"
            projectName="react-magic-motion"
          />
          <YoutubeEmbed id="YAGUrNB564o" title="Demo of react-magic-motion" />
          <ul>
            <li>
              A npm package that automatically animates React.js components
            </li>
            <li>
              Implemented automated testing with vitest, react-testing-library,
              and GitHub actions.
            </li>
            <li>
              Created a documentation website for the package that got 7,500
              visitors and 25,000 page views in the first 15 days
            </li>
            <li>Received 1100+ stars on GitHub</li>
          </ul>
        </div>

        <div className="card">
          <CardLink
            href="https://chromewebstore.google.com/detail/xp-newtab/ncfmlogaelpnniflgipmnnglhfiifkke"
            projectName="xp-newtab"
          />
          <YoutubeEmbed id="hzRWYV3Seno" title="Demo of xp-newtab" />
          <ul>
            <li>
              A browser extension that replaces your new tab page with page that
              looks like Windows 98/xp/7
            </li>
            <li>Obtained 2000+ users of the extension</li>
            <li>Achieved 100+ reviews with an average rating of 4.7.</li>
            <li>Built with React.js and Styled Components</li>
          </ul>
        </div>

        <div className="card">
          <CardLink href="https://www.euismod.dev/#/" projectName="euismod" />
          <YoutubeEmbed id="zhhZDKhK-NU" title="Demo of Euismod" />
          <ul>
            <li>A website that makes learning CSS grid easy and interactive</li>
            <li>
              Has 4 lessons dedicated to learning about the most used properties
              in CSS grid
            </li>

            <li>
              Achieved 20,000+ unique visitors in a month and got featured on
              css-tricks.com/euismod
            </li>
            <li>Received 250+ stars on GitHub</li>
          </ul>
        </div>

        <div className="card">
          <CardLink
            href="https://github.com/Etesam913/slick-fox"
            projectName="slick-fox"
          />
          <YoutubeEmbed id="0Oa4HRkC_A4" title="Demo of Slick Fox" />
          <ul>
            <li>A css configuration for the Firefox browser</li>
            <li>
              Adds a slick hiding animation to the url bar when it is not
              hovered over.
            </li>
            <li>Received 375+ stars on GitHub</li>
          </ul>
        </div>

        <div className="card">
          <CardLink
            href="https://etesam913.github.io/Custoplayer/"
            projectName="custoplayer"
          />

          <YoutubeEmbed id="bjJStMfG0o0" title="Demo of Custoplayer" />
          <ul>
            <li>
              A React.js npm package that allows for the quick creation of
              beautiful video players.
            </li>
            <li>
              Supports presets and custom composable controls for the video
              player.
            </li>
            <li>
              Built with React.js, Typescript, Styled Components, Cypress, and
              Vitest
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="cards-container">
        <Suspense fallback={<div>loading...</div>}>
          <Card
            href="https://www.react-magic-motion.com/"
            projectName="react-magic-motion"
            videoSrc="https://react-magic-motion.nyc3.cdn.digitaloceanspaces.com/react-magic-motion-full-demo.mp4"
            videoPoster="https://react-magic-motion.nyc3.cdn.digitaloceanspaces.com/react-magic-motion-full-demo-poster.png"
          />
        </Suspense>

        <Card
          href="https://chrome.google.com/webstore/detail/xp-newtab/ncfmlogaelpnniflgipmnnglhfiifkke"
          projectName="XP Newtab"
          videoSrc="https://etesam.nyc3.cdn.digitaloceanspaces.com/Personal-Website/xp-newtab/xp-newtab-demo.mp4"
          videoPoster="https://etesam.nyc3.cdn.digitaloceanspaces.com/Personal-Website/xp-newtab/xp-newtab-poster.png"
        />
        <Card
          href="https://etesam913.github.io/Custoplayer/"
          projectName="Custoplayer"
          videoSrc="https://custoplayer.nyc3.cdn.digitaloceanspaces.com/docs/custoplayer-demo.mp4"
          videoPoster="https://custoplayer.nyc3.cdn.digitaloceanspaces.com/docs/custoplayer-demo-poster.png"
        />
        <Card
          href="https://www.euismod.dev/#/"
          projectName="Euismod"
          videoSrc="https://etesam.nyc3.cdn.digitaloceanspaces.com/Personal-Website/euismod/euismod-video.mp4"
          videoPoster="https://etesam.nyc3.cdn.digitaloceanspaces.com/Personal-Website/euismod/euismod-poster.png"
        />

        <Card
          projectName="Slick Fox"
          href="https://github.com/Etesam913/slick-fox"
          videoSrc="https://etesam.nyc3.cdn.digitaloceanspaces.com/Personal-Website/slick-fox/slick-fox-demo.mp4"
          videoPoster="https://etesam.nyc3.cdn.digitaloceanspaces.com/Personal-Website/slick-fox/slick-fox-poster.png"
        />
      </div> */}
    </>
  );
}
