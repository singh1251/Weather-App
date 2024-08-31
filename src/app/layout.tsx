import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SkySphere",
  description: "Search for weather-information by locality",
  icons: {
    icon: "/titleIcon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="video" href="/clouds-1.mp4" type="video/mp4" />
      </head>
      <body className="flex flex-col min-h-screen">
        {/* Video-background container */}
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-[-1]">
          <video
            src="/clouds-1.mp4"
            autoPlay
            loop
            muted
            playsInline
            poster="/video-poster.png"
            className="object-cover w-full h-full"
          />
        </div>
        {/* Main-content */}
        <main className="relative z-10 flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
