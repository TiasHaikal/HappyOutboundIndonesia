import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AOSProvider from "@/components/AOSInit";

export const metadata: Metadata = {
  metadataBase: new URL("https://outboundlampung.com"),

  title: "Outbound Lampung Terbaik | Happy Outbound Indonesia",
  description:
    "Jasa outbound Lampung profesional untuk perusahaan, sekolah, dan gathering. Paket team building, fun games, dan event organizer terbaik di Lampung.",

  keywords: [
    "outbound lampung",
    "jasa outbound lampung",
    "team building lampung",
    "event organizer lampung",
    "paket outbound lampung",
  ],

  openGraph: {
    title: "Outbound Lampung Terbaik | Happy Outbound Indonesia",
    description:
      "Layanan outbound Lampung profesional dengan berbagai paket menarik untuk perusahaan dan sekolah.",
    url: "https://outboundlampung.com",
    siteName: "Happy Outbound Indonesia",

    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
      },
    ],

    locale: "id_ID",
    type: "website",
  },
};
const HeroSection = dynamic(() => import("@/components/HeroSection"));
const AboutSection = dynamic(() => import("@/components/AboutSection"));
const OrganizationSection = dynamic(
  () => import("@/components/OrganizationSection"),
);
const VisionMissionSection = dynamic(
  () => import("@/components/VisionMissionSection"),
);
const ValuesSection = dynamic(() => import("@/components/ValuesSection"));
const ServicesSection = dynamic(() => import("@/components/ServicesSection"));
const ProductsSection = dynamic(() => import("@/components/ProductsSection"));
const LegalitySection = dynamic(() => import("@/components/LegalitySection"));
const CertificatesSection = dynamic(
  () => import("@/components/CertificatesSection"),
);
const ClientsSection = dynamic(() => import("@/components/ClientsSection"));
const ContactSection = dynamic(() => import("@/components/ContactSection"));

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <AOSProvider />

      <Navbar />

      <HeroSection />
      <AboutSection />
      <OrganizationSection />
      <VisionMissionSection />
      <ValuesSection />
      <ServicesSection />
      <ProductsSection />
      <LegalitySection />
      <CertificatesSection />
      <ClientsSection />
      <ContactSection />

      <Footer />
    </main>
  );
}
