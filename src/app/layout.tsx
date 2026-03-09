import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SALARA — AI Assistant for Real Estate Agencies | NZ & Australia",
  description:
    "SALARA gives every real estate agent their own AI assistant that learns over time. Built for NZ & AU agencies. Reduce admin, retain staff, win more listings.",
  keywords: [
    "real estate AI",
    "AI assistant",
    "real estate CRM",
    "VaultRE",
    "New Zealand real estate",
    "Australia real estate",
    "property management AI",
    "real estate SaaS",
  ],
  openGraph: {
    title: "SALARA — AI Assistant for Real Estate Agencies",
    description:
      "Every agent gets their own AI assistant that learns and improves. Built for NZ & AU real estate.",
    url: "https://salara.io",
    siteName: "SALARA",
    type: "website",
    locale: "en_NZ",
  },
  twitter: {
    card: "summary_large_image",
    title: "SALARA — AI Assistant for Real Estate Agencies",
    description:
      "Every agent gets their own AI assistant that learns and improves. Built for NZ & AU real estate.",
  },
  metadataBase: new URL("https://salara.io"),
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-[Inter,system-ui,sans-serif] text-salara-900 bg-white antialiased">
        {children}
      </body>
    </html>
  );
}
