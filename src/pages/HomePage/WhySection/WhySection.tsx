import type { ReactElement } from "react";

import { SectionId, WHY_CARDS } from "../HomePage.constants";
import styles from "./WhySection.module.scss";

/* Inline SVG icons — per spec: no emoji, lucide only for UI chrome; these are brand illustrations */
const WHY_ICONS: Record<string, ReactElement> = {
  outage: (
    <svg className={styles.icon} viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <path
        d="M24 4 10 26h9l-3 14 14-22h-9l3-14z"
        fill="#EFB63A"
        stroke="#17325B"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  ),
  storm: (
    <svg className={styles.icon} viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <circle cx="22" cy="22" r="17" stroke="#5E9C34" strokeWidth="2.5" />
      <path d="M22 12v10l7 5" stroke="#17325B" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  duty: (
    <svg className={styles.icon} viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <path d="M8 34V18l14-10 14 10v16" stroke="#17325B" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M16 34v-8h12v8" stroke="#5E9C34" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M4 34h36" stroke="#3D93BC" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
};

export const WhySection = () => (
  <section id={SectionId.Why} className={styles.root}>
    <div className={styles.wrap}>
      <div className={styles.kicker}>Why Solar, Why Now</div>
      <div className={styles.sectionHead}>
        <h2>Built for island conditions, priced for island economics</h2>
        <p>
          Every package is specified around the realities of powering a property in The
          Bahamas: grid interruptions, hurricane season, and some of the highest electricity
          rates in the region.
        </p>
      </div>
      <div className={styles.grid}>
        {WHY_CARDS.map((card) => (
          <div key={card.id} className={styles.card}>
            {WHY_ICONS[card.id]}
            <h3>{card.title}</h3>
            <p>{card.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
