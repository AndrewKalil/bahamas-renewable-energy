import { useCallback } from "react";
import cn from "classnames";

import { useQuote } from "~providers";

import { PACKAGES, SectionId } from "../HomePage.constants";
import { PackagesComparisonTable } from "./PackagesComparisonTable";
import styles from "./PackagesSection.module.scss";

export const PackagesSection = () => {
  const { setSelectedPackage } = useQuote();

  const onSelectPackageHandler = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const { optionLabel } = event.currentTarget.dataset;
      if (optionLabel) {
        setSelectedPackage(optionLabel);
        document.getElementById(SectionId.Contact)?.scrollIntoView({ behavior: "smooth" });
      }
    },
    [setSelectedPackage],
  );

  return (
    <section id={SectionId.Packages} className={styles.root}>
      <div className={styles.wrap}>
        <div className={styles.kicker}>System Packages</div>
        <div className={styles.sectionHead}>
          <h2>Three systems. One standard of equipment.</h2>
          <p>
            Every tier uses the same premium components: Trina 725W bifacial panels, EG4
            smart inverters, BasenGreen lithium storage, scaled to your load. All prices are
            duty-free hardware supply, VAT applied.
          </p>
        </div>

        <div className={styles.grid}>
          {PACKAGES.map((pkg) => (
            <div key={pkg.id} className={cn(styles.card, pkg.featured && styles.featured)}>
              {pkg.featured && <div className={styles.flag}>Most Popular</div>}

              <div className={styles.cardHead}>
                <div className={styles.tier}>{pkg.tier}</div>
                <h3>{pkg.name}</h3>
                <div className={styles.fit}>{pkg.fit}</div>
              </div>

              <div className={styles.price}>
                <div className={styles.amount}>
                  {pkg.price} <span>hardware total</span>
                </div>
                <div className={styles.duty}>DUTY-FREE · VAT APPLIED</div>
              </div>

              <div className={styles.body}>
                <ul>
                  {pkg.specs.map((spec) => (
                    <li key={spec.label}>
                      {spec.label}
                      <span className={styles.qty}>{spec.qty}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.runtime}>
                <div className={styles.rtLabel}>Nighttime battery runtime</div>
                {pkg.runtimeRows.map((row) => (
                  <div key={row.profile} className={styles.rtRow}>
                    {row.profile} <b>{row.runtime}</b>
                  </div>
                ))}
              </div>

              <div className={styles.cta}>
                <button
                  type="button"
                  className={pkg.featured ? styles.btnPrimary : styles.btnGhost}
                  data-option-label={pkg.optionLabel}
                  onClick={onSelectPackageHandler}
                >
                  {pkg.ctaLabel}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.note}>
          <strong>What&rsquo;s included:</strong> these packages cover the supply of core
          system hardware: solar panels, roof mounts, inverter, battery bank, and disconnect
          switch. On-site installation labor, electrical labor, and localized
          balance-of-system materials are quoted separately after a physical site inspection
          of your property.
        </div>

        <PackagesComparisonTable />
      </div>
    </section>
  );
};
