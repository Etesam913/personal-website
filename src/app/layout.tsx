import { inter, manrope } from "@/app/fonts";
import "./global.css";
import Navbar from "./(navbar)";

export const metadata = {
  title: "Etesam Ansari's Personal Website",
  description: "Check out my cool projects!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${manrope.variable}`}>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}