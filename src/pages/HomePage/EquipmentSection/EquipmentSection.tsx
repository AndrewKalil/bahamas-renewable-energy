import { EQUIPMENT, SectionId } from "../HomePage.constants";
import styles from "./EquipmentSection.module.scss";

export const EquipmentSection = () => (
  <section id={SectionId.Equipment} className={styles.root}>
    <div className={styles.wrap}>
      <div className={styles.kicker}>The Equipment</div>
      <div className={styles.sectionHead}>
        <h2>Tier-one components, no compromises</h2>
        <p>
          We publish the full manufacturer specifications for everything we supply. Datasheets
          are available for download on every component.
        </p>
      </div>

      {EQUIPMENT.map((item) => (
        <div key={item.id} className={styles.row}>
          <div className={styles.meta}>
            <div className={styles.brandTag}>{item.brand}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
          <div className={styles.specGrid}>
            {item.specs.map((spec) => (
              <div key={spec.key} className={styles.spec}>
                <div className={styles.specValue}>{spec.value}</div>
                <div className={styles.specKey}>{spec.key}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);
