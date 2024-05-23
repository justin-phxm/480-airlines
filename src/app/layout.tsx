import "~/styles/globals.css";
import { Nunito_Sans } from "next/font/google";
import AOSinit from "./AOSinit";
import Providers from "@/providers/Provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export const metadata = {
  title: "480 Airlines",
  description: "Your one-stop shop for all things air travel.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};
const nunito = Nunito_Sans({
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${nunito.className}`}>
      <AOSinit />
      <body className="flex h-full min-h-screen w-full flex-col">
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
