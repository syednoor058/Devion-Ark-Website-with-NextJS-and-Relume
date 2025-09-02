import { CallToAction } from "@/components/call-to-action/CallToAction";
import { Footer } from "@/components/footer/Footer";
import { Navbar } from "@/components/navbar/Navbar";
import { DM_Sans, Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Devion Ark – Custom Software & Digital Marketing Solutions",
  description:
    "Grow your business with Devion Ark. We build custom software, web apps, and deliver powerful digital marketing strategies to help brands scale globally.",
  icons: {
    icon: "/favicon.svg", // /public path
  },
};

export default function RootLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Devion Ark Digital Solutions",
    url: "https://www.devionark.com/",
    logo: "https://www.devionark.com/logo.png",
    description:
      "A leading software development and digital marketing agency in Bangladesh.",
    foundingDate: "2022", // Add if applicable
    founder: {
      "@type": "Person",
      name: "Syed Shaeduzzaman Noor",
      url: "https://www.linkedin.com/in/shaednoor/",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+8801782734573",
      contactType: "technical support",
      email: "info@devionark.com",
      areaServed: ["BD", "US", "GB"],
      availableLanguage: ["English", "Bengali"],
    },
    sameAs: [
      "https://www.facebook.com/devion.ark/",
      "https://www.linkedin.com/company/devion-ark/",
      "https://www.instagram.com/devionark/",
    ],
    address: {
      // Optional but recommended
      "@type": "PostalAddress",
      streetAddress: "08 Tootpara Central Rd",
      addressLocality: "Khulna",
      addressRegion: "Khulna",
      postalCode: "9100",
      addressCountry: "BD",
    },
    telephone: "+8801782734573",
  };

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:site_name" content="Devion Ark Digital Solutions" />
        <meta
          property="og:title"
          content="Devion Ark – Custom Software & Digital Marketing Solutions"
        />
        <meta
          property="og:description"
          content="Grow your business with Devion Ark. We build custom software, web apps, and deliver powerful digital marketing strategies to help brands scale globally."
        />
        <meta property="og:url" content="https://www.devionark.com" />
        <meta property="og:image" content="/og-image.jpg" />{" "}
        {/* Replace with your OG image URL */}
        <meta property="og:type" content="website" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Devion Ark – Custom Software & Digital Marketing Solutions"
        />
        <meta
          name="twitter:description"
          content="Grow your business with Devion Ark. We build custom software, web apps, and deliver powerful digital marketing strategies to help brands scale globally."
        />
        <meta name="twitter:image" content="/og-image.jpg" />
        <meta
          name="p:domain_verify"
          content="6ae3592a7e634c7108a3584716e170be"
        />
        {/* Favicon Links */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-3YRX0462MW"
        ></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-3YRX0462MW');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Devion Ark",
              url: "https://devionark.com",
            }),
          }}
        />
      </head>
      <body className={`${dmSans.className} antialiased`}>
        {" "}
        <Navbar />
        {children}
        <CallToAction />
        <Footer />
      </body>
    </html>
  );
}
