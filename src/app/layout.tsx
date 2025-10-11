import type { Metadata } from "next";
import MainLayout from "../layouts/MainLayout";
import "../styles/globals.css";

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
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
