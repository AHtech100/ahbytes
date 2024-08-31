// app/layout.tsx
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import { Inter } from "next/font/google";
import "react-modal-video/css/modal-video.css";
import "./globals.css";
import { Metadata } from "next";
import { Providers } from "./providers";
// import NorbyChatWidget from "./components/Chatbot/NorbyChatWidget";
// import LandbotWidget from "./components/Chatbot/LandbotWidget"; // Import the new Landbot widget component

const inter = Inter({ subsets: ["latin"] });

// Replace with your image URL
const imageUrl = "https://www.ahbytes.com/images/meta-logo.png";

export const metadata: Metadata = {
  title: {
    default: "AH BYTES | Empowering Digital Innovation",
    template: "%s | AH BYTES",
  },
  description:
    "Tailored software solutions by AH BYTES. Let's build the future of technology together.",
  keywords:
    "software development, digital innovation, custom applications, technology solutions",
  openGraph: {
    title: "AH BYTES | Empowering Digital Innovation",
    description:
      "Tailored software solutions by AH BYTES. Let's build the future of technology together.",
    url: "https://www.ahbytes.com",
    type: "website",
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: "AH BYTES - Empowering Digital Innovation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Empowering Digital Innovation | AH BYTES",
    description:
      "Tailored software solutions by AHBYTES. Let's build the future of technology together.",
    images: [imageUrl],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <script src="//code.tidio.co/pgo8mul2xnifqj9gvl19zayildtvc9oz.js" async></script>
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
