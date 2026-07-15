import { IslandNavBar } from "~components";

import { ContactSection } from "./ContactSection";
import { EquipmentSection } from "./EquipmentSection";
import { FaqSection } from "./FaqSection";
import { FooterSection } from "./FooterSection";
import { GallerySection } from "./GallerySection";
import { HeroSection } from "./HeroSection";
import styles from "./HomePage.module.scss";
import { PackagesSection } from "./PackagesSection";
import { ProcessSection } from "./ProcessSection";
import { RuntimeSection } from "./RuntimeSection";
import { WhySection } from "./WhySection";

export const HomePage = () => (
  <div className={styles.root}>
    <IslandNavBar />
    <HeroSection />
    <WhySection />
    <PackagesSection />
    <EquipmentSection />
    <RuntimeSection />
    <ProcessSection />
    <GallerySection />
    <FaqSection />
    <ContactSection />
    <FooterSection />
  </div>
);
