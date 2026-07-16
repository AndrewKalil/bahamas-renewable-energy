import styles from "./FooterSection.module.scss";

export const FooterSection = () => (
  <footer className={styles.root}>
    <div className={styles.inner}>
      <div className="flex items-center gap-3">
        <img src="/logo.png" alt="Bahamas Renewable Energy Solutions logo" style={{ height: 56, width: "auto" }} />
        <div>
          <div className={styles.company}>BAHAMAS RENEWABLE ENERGY SOLUTIONS LTD.</div>
          <div className={styles.address}>Clean Energy. Sustainable Future. · Freeport, Grand Bahama</div>
        </div>
      </div>
      <div className={styles.tagline}>Powering Today. Preserving Tomorrow.</div>
      <div>&copy; 2026 Bahamas Renewable Energy Solutions Ltd. All rights reserved.</div>
    </div>
  </footer>
);
