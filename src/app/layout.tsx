import type { Metadata, Viewport } from "next";

// assets
import "src/app/css/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
};

export const metadata: Metadata = {
  title: "Matchups Planner",
  robots: { index: false, follow: false },
	authors: [{ name: "Fran Mendoza" }],
	description: "Web tool for creating Team matchups based on player list and individdual skill level.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
