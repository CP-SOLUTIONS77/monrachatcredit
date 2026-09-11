import type { Metadata } from "next";
import Script from "next/script";
import { Poppins, Questrial } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const questrial = Questrial({
  variable: "--font-questrial",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://monrachatcredit.fr"),
  title: {
    default: "Rachat de crédit et regroupement de crédits | Mon Rachat Crédit",
    template: "%s | Mon Rachat Crédit",
  },
  description:
    "Courtier indépendant en rachat et regroupement de crédits. On compare les banques pour vous et on négocie les meilleures conditions, sans engagement.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Mon Rachat Crédit",
  },
  verification: {
    google: "qJFaDuQ82TL2HwbmMNAOAE6-5TZf7a2H0gA_Of3iPI8",
  },
};

const OPENING_HOURS = [
  { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "09:30", closes: "12:30" },
  { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "14:30", closes: "16:30" },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:30",
    closes: "12:30",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "14:00",
    closes: "18:00",
  },
  { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:30", closes: "12:30" },
  { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "13:30", closes: "16:30" },
];

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Rachat et regroupement de crédit",
  url: "https://monrachatcredit.fr",
  areaServed: "FR",
  provider: {
    "@type": "FinancialService",
    name: "CP Solutions",
    image: "https://monrachatcredit.fr/photos/logo.png",
    telephone: "+33164248345",
    url: "https://cpsolutions77.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "35 rue Jean Jaurès",
      postalCode: "77130",
      addressLocality: "Montereau-Fault-Yonne",
      addressCountry: "FR",
    },
    openingHoursSpecification: OPENING_HOURS,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "84",
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${poppins.variable} ${questrial.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-neutral-0 text-neutral-900 font-body">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-99NQ543DL7"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-99NQ543DL7');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
