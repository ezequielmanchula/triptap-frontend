import type { Metadata } from "next";
import MainLayout from "../layouts/MainLayout";
import { Rubik, Noto_Sans} from "next/font/google";
import "../styles/globals.css";
import TapiButton from "./components/common/TapiButton";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "TripTap",
  description: "Viajar nunca fue tan fácil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.variable} ${notoSans.variable} antialiased`}
      >
        <MainLayout>
          {children}
          <TapiButton />
        </MainLayout>
      </body>
    </html>
  );
}
