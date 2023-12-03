import Image from "next/image";
import Card from "./card";
import { Suspense } from "react";

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
      </div>
    </>
  );
}
