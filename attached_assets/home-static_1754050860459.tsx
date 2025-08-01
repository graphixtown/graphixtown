import NavigationStatic from "@/components/navigation-static";
import HeroSectionStatic from "@/components/hero-section-static";
import ServicesSectionStatic from "@/components/services-section-static";
import PortfolioSectionStatic from "@/components/portfolio-section-static";
import AboutSectionStatic from "@/components/about-section-static";
import ContactSectionStatic from "@/components/contact-section-static";
import FooterStatic from "@/components/footer-static";

export default function HomeStatic() {
  return (
    <div className="min-h-screen">
      <NavigationStatic />
      <main>
        <HeroSectionStatic />
        <ServicesSectionStatic />
        <PortfolioSectionStatic />
        <AboutSectionStatic />
        <ContactSectionStatic />
      </main>
      <FooterStatic />
    </div>
  );
}