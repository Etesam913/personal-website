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
      <div className="row">
        <h1 className="experience-header">{companyName}</h1>
        <a href={imgData?.href}>
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
        <h3>
          {date?.from} - {date?.to}
        </h3>
      </div>
      {children !== undefined && <section>{children}</section>}
    </section>
  );
}
