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
        <Card projectName='XP Newtab' />
        <Card projectName='Custoplayer' />
        <Card projectName='Euismod' />
        <Card projectName='Slick Fox' />
      </div>
    </>
  );
}
