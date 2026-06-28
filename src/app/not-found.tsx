import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Page Not Found | Etesam Ansari",
};

export default function NotFound() {
  return (
    <>
      <div className="header-row-container">
        <Image
          style={{ marginRight: "0.75rem" }}
          height={48}
          width={49}
          priority
          alt=""
          src="https://storage.googleapis.com/etesam-public/Personal-Website/not-found-icon.png"
        />
        <h1>Sorry, this page was not found.</h1>
      </div>

      <h2>
        You can see my projects <Link href="/projects">here</Link>.
      </h2>
    </>
  );
}
