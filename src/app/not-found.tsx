import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <>
      <div className="header-row-container">
        <Image
          style={{ marginRight: "0.75rem" }}
          height={48}
          width={49}
          priority
          alt="Icon of Desktop Computer"
          src="https://etesam.nyc3.cdn.digitaloceanspaces.com/Personal-Website/not-found-icon.png"
        />
        <h1>Sorry, this page was not found.</h1>
      </div>

      <h2>
        You can see my projects <Link href="/projects">here</Link>.
      </h2>
    </>
  );
}
