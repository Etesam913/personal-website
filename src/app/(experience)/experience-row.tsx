import Image from "next/image";
import { ReactNode } from "react";
import "./experience.css";

interface ExperienceRowProps {
  companyName: string;
  date: { from: string; to: string };
  imgData: {
    src: string;
    alt: string;
    width: number;
    height: number;
    href: string;
    style?: React.CSSProperties;
  };
  title: string;
  children?: ReactNode;
}

export default function ExperienceRow({
  companyName,
  title,
  date,
  imgData,
  children,
}: ExperienceRowProps) {
  return (
    <section className="experience-block">
      <header className="experience-header">
        <div className="row">
          <h2 className="experience-header">{companyName}</h2>
          <a href={imgData?.href} aria-label={`Visit ${companyName} website`}>
            <Image
              style={{ margin: "0.5rem 0", ...imgData?.style }}
              src={imgData?.src}
              alt={imgData?.alt}
              height={imgData?.height}
              width={imgData?.width}
            />
          </a>
        </div>
        <div className="row">
          <h3>{title}</h3>
          <p className="date-range">
            <time dateTime={date?.from}>{date?.from}</time> -{" "}
            <time dateTime={date?.to}>{date?.to}</time>
          </p>
        </div>
      </header>
      {children !== undefined && <div>{children}</div>}
    </section>
  );
}
