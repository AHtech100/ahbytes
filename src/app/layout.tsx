import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import { Inter } from "next/font/google";
import "react-modal-video/css/modal-video.css";
import "./globals.css";
import { Metadata } from "next";
import { Providers } from "./providers";
const inter = Inter({ subsets: ["latin"] });


// Replace with your image URL
const imageUrl = "https://www.ahbytes.com/images/meta-logo.png";

export const metadata: Metadata = {
  title:{
   default: " AH BYTES | Empowering Digital Innovation",
   template: "%s | AH BYTES"},
  description: "Tailored software solutions by AH BYTES. Let's build the future of technology together.",
  keywords: "software development, digital innovation, custom applications, technology solutions",
  openGraph: {
    title: " AH BYTES | Empowering Digital Innovation ",
    description: "Tailored software solutions by AH BYTES. Let's build the future of technology together.",
    url: "https://www.ahbytes.com",
    type: "website",
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: "AH BYTES - Empowering Digital Innovation"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Empowering Digital Innovation | AH BYTES",
    description: "Tailored software solutions by AHBYTES. Let's build the future of technology together.",
    images: [imageUrl]
  },

};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
     <script src="https://chat.ordemio.com/lib/w.js" assistant-id="93eb4b2d-b472-496f-8de3-05870122266b" async></script>
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
