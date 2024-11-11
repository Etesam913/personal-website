import Navbar from "./(navbar)";
import { bricolageGrotesque } from "./fonts";
import "./global.css";
import PageWrapper from "./page-wrapper";

export const metadata = {
  title: "Etesam Ansari's Personal Website",
  description: "Check out my cool projects!",
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
        <Navbar />
        <PageWrapper>{children}</PageWrapper>
      </body>
    </html>
  );
}
