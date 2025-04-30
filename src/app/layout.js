import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title:
    "Riz Interiors | Best Interior Designers in Prayagraj, Kanpur, Lucknow, UP",
  description:
    "Riz Interiors is a leading interior design studio in Prayagraj (Allahabad), Kanpur, Lucknow, Varanasi, and Fatehpur. We create modern, elegant, and functional home and office interiors tailored to your style.",
  keywords: [
    "Best interior designer in Prayagraj",
    "Best interior designer in Allahabad",
    "Interior designers in Kanpur",
    "Interior design services in Lucknow",
    "Top interior designers in Varanasi",
    "Home interior design in Fatehpur",
    "Riz Interiors Uttar Pradesh",
    "Office design Prayagraj",
    "Modular kitchen Prayagraj",
    "Living room design UP",
    "Riz Interiors",
  ],
  openGraph: {
    title:
      "Riz Interiors | Elegant Interior Design in Prayagraj, Kanpur, Lucknow",
    description:
      "Transform your home or office with Riz Interiors. We specialize in modern and traditional interiors across major cities of Uttar Pradesh.",
    url: "https://www.rizinteriors.netlify.app",
    siteName: "Riz Interiors",
    // images: [
    //   {
    //     url: "/og-image.jpg", // Replace with actual path to your image
    //     width: 1200,
    //     height: 630,
    //     alt: "Elegant interior design by Riz Interiors",
    //   },
    // ],
    type: "website",
    locale: "en_IN",
  },
  alternates: {
    canonical: "https://www.rizinteriors.netlify.app",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className={`flex-grow transition-opacity duration-500 `}>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
