import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Carnegie Global Services Sarl – Équipements médicaux & maintenance biomédicale",
    template: "%s | Carnegie Global Services",
  },
  description:
    "Carnegie Global Services Sarl : vente d'équipements médicaux, maintenance biomédicale, installation et formation au Cameroun. Au service des hôpitaux, cliniques et laboratoires.",
  keywords: [
    "équipements médicaux Cameroun",
    "maintenance biomédicale Douala",
    "fournisseur hôpital Cameroun",
    "installation équipements médicaux",
    "formation biomédicale",
  ],
  icons: {
    icon: "/carnegie-logo.png",
  },
  authors: [{ name: "Carnegie Global Services Sarl" }],
  openGraph: {
    title: "Carnegie Global Services Sarl",
    description:
      "Vente, maintenance, installation et formation sur équipements médicaux au Cameroun.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" data-theme="carnegie">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}