import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import AOSinit from "./AOSinit";
import Providers from "@/providers/Provider";
export const metadata = {
  title: "480 Airlines",
  description: "Your one-stop shop for all things air travel.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <AOSinit />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
