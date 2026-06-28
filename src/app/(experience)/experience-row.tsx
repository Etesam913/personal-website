import Image from "next/image";
import { ReactNode } from "react";
import "./experience.css";

interface DateValue {
  display: string;
  dateTime?: string;
}

interface ExperienceRowProps {
  companyName: string;
  date: { from: DateValue; to: DateValue };
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
  const renderDate = (value: DateValue) => {
    if (value.dateTime === undefined) {
      return <span>{value.display}</span>;
    }
    return <time dateTime={value.dateTime}>{value.display}</time>;
  };

  return (
    <section className="experience-block">
      <header className="experience-header">
        <div className="row">
          <h2>{companyName}</h2>
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
            {renderDate(date.from)} - {renderDate(date.to)}
          </p>
        </div>
      </header>
      {children !== undefined && <div>{children}</div>}
    </section>
  );
}
