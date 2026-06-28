import Navbar from "./(navbar)";
import { bricolageGrotesque } from "./fonts";
import "./global.css";
import PageWrapper from "./page-wrapper";

export const metadata = {
  title: "Etesam Ansari",
  description:
    "Software engineer portfolio for Etesam Ansari, including experience, projects, and contact links.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bricolageGrotesque.variable}`}>
      <body className={`${bricolageGrotesque.variable}`}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <PageWrapper>{children}</PageWrapper>
      </body>
    </html>
  );
}
