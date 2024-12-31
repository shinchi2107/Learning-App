import type { Metadata } from "next";
import "./styles/globals.css";
import { geist } from "./styles/fonts";


export const metadata: Metadata = {
  title: "Learning App",
  description: "Programming Learning Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geist.className}`}
      >
          <main>
            {children}
          </main>
      </body>
    </html>
  );
}
