import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Atin Sahu — Full Stack Developer | React, Next.js & React Native Specialist",
  description:
    "Portfolio of Atin Sahu, Frontend-Focused Full Stack Developer with 4 years of experience engineering high-performance web and mobile applications with React.js, Next.js, React Native, Node.js, and NestJS.",
  keywords: [
    "Atin Sahu",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "React Native",
    "Node.js",
    "NestJS",
    "Software Engineer"
  ],
  authors: [{ name: "Atin Sahu" }],
  openGraph: {
    title: "Atin Sahu — Full Stack Developer",
    description: "4+ years experience building scalable web and mobile architectures.",
    type: "website"
  },
  icons: {
    icon: [
      { url: "https://res.cloudinary.com/mdd0kut0/image/upload/w_256,h_256,c_fill,g_face,r_max,f_png/v1790671528/profile_pic.png" },
      { url: "/icon.png" }
    ],
    apple: [
      { url: "https://res.cloudinary.com/mdd0kut0/image/upload/w_256,h_256,c_fill,g_face,r_max,f_png/v1790671528/profile_pic.png" }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased dark`}
    >
      <body className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col font-sans selection:bg-sky-500/20 selection:text-sky-300">
        {children}
      </body>
    </html>
  );
}
