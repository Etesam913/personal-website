import Image from "next/image";
import PageWrapper from "./page-wrapper";

export default function Home() {
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
    </>
  );
}
