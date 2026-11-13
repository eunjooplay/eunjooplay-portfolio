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
  title: "박은주 | 바이올리니스트 & 교육자",
  description: "바이올리니스트이자 인천가톨릭대학교 겸임교원 박은주의 공식 포트폴리오 웹사이트입니다.",
  openGraph: {
    title: "박은주 | 바이올리니스트 & 교육자",
    description: "바이올리니스트이자 인천가톨릭대학교 겸임교원 박은주의 공식 포트폴리오 웹사이트입니다.",
    url: "https://web-roan-ten-94.vercel.app",
    siteName: "박은주 공식 웹사이트",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
