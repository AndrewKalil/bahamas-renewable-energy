import { useCallback } from "react";

import { SectionId, STATS } from "../HomePage.constants";
import styles from "./HeroSection.module.scss";

export const HeroSection = () => {
  const onViewPackagesHandler = useCallback(() => {
    document.getElementById(SectionId.Packages)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const onBookInspectionHandler = useCallback(() => {
    document.getElementById(SectionId.Contact)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section className={styles.root} id={SectionId.Hero}>
      <div className={styles.content}>
        <div className={styles.grid}>
          {/* Text column */}
          <div className={styles.textCol}>
            {/* Brand lockup */}
            <div className={styles.brand}>
              <div className={styles.logoWrapper}>
                <img
                  src="/logo-and-title.png"
                  alt="Bahamas Renewable Energy Solutions Ltd."
                  className={styles.logoTitle}
                />
              </div>
            </div>

            <div className={styles.kicker}>
              Freeport, Grand Bahama &middot; The Bahamas
            </div>
            <h1 className={styles.headline}>
              Own your power.<br />
              Keep the lights on{" "}
              <span className={styles.accent}>when the grid can&rsquo;t.</span>
            </h1>
            <p className={styles.sub}>
              Premium duty-free solar packages for Bahamian homes and businesses —
              bifacial panels, smart inverters, and lithium storage built for island life.
            </p>
            <div className={styles.ctas}>
              <button
                type="button"
                className={styles.btnGhost}
                onClick={onViewPackagesHandler}
              >
                View System Packages
              </button>
              <button
                type="button"
                className={styles.btnPrimary}
                onClick={onBookInspectionHandler}
              >
                Book a Site Inspection
              </button>
            </div>
          </div>

          {/* Hero photo */}
          <div
            className={styles.photoFrame}
            data-caption="Ground-mount array — residential install, Grand Bahama"
          >
            <div className={styles.photo} role="img" aria-label="Ground-mount solar array — residential install, Grand Bahama" />
          </div>
        </div>
      </div>

      {/* Stat band */}
      <div className={styles.statBand}>
        <div className={styles.stats}>
          {STATS.map((stat) => (
            <div key={stat.value} className={styles.stat}>
              <div className={styles.statNum}>
                {stat.value}
                <sup>{stat.sup}</sup>
              </div>
              <div className={styles.statLbl}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
