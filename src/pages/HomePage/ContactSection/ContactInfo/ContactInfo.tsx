import styles from "../ContactSection.module.scss";

export const ContactInfo = () => (
  <div className={styles.info}>
    <div className={styles.kicker}>Get Started</div>
    <h2>Request your quote &amp; site inspection</h2>
    <p className={styles.sub}>
      Tell us about your property and the loads that matter to you. We&rsquo;ll recommend a
      package, confirm hardware pricing, and schedule your site inspection.
    </p>
    <div className={styles.contactItem}>
      <span className={styles.label}>Phone</span>
      <a href="tel:+12421234567">(242) 123-4567</a>
    </div>
    <div className={styles.contactItem}>
      <span className={styles.label}>Email</span>
      <a href="mailto:info@solar-bahamas.com">info@solar-bahamas.com</a>
    </div>
    <div className={styles.contactItem}>
      <span className={styles.label}>Hours</span>
      <span>Mon to Fri, 9am to 4pm</span>
    </div>
  </div>
);
