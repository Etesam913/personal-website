import Image from "next/image";
import Card from "./card";

export default function Projects() {
  return (
    <>
      <div className='header-row-container'>
        <Image
          style={{ marginRight: "1rem" }}
          height={48}
          width={48}
          alt='Icon of Me'
          priority
          src='https://etesam.nyc3.cdn.digitaloceanspaces.com/Personal-Website/projects-icon.png'
        />
        <h1>My Projects</h1>
      </div>
      <div className='cards-container'>
        <Card
          projectName='XP Newtab'
          videoSrc='https://etesam.nyc3.cdn.digitaloceanspaces.com/Personal-Website/xp-newtab/xp-newtab-demo.mp4'
          videoPoster='https://etesam.nyc3.cdn.digitaloceanspaces.com/Personal-Website/xp-newtab/xp-newtab-poster.png'
        >
          <a href='https://github.com/Etesam913/xp-newtab'>GitHub Link</a>
          <a href='https://chrome.google.com/webstore/detail/xp-newtab/ncfmlogaelpnniflgipmnnglhfiifkke'>
            Extension Page
          </a>
        </Card>
        <Card projectName='Custoplayer' />
        <Card
          projectName='Euismod'
          videoSrc='https://etesam.nyc3.cdn.digitaloceanspaces.com/Personal-Website/euismod/euismod-video.mp4'
          videoPoster='https://etesam.nyc3.cdn.digitaloceanspaces.com/Personal-Website/euismod/euismod-poster.png'
        >
          <a href='https://github.com/Etesam913/euismod'>GitHub Link</a>
          <a href='https://www.euismod.dev/#/'>Website</a>
        </Card>
        <Card projectName='Slick Fox' />
      </div>
    </>
  );
}
