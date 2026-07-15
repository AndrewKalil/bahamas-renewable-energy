import { PROCESS_STEPS, SectionId } from "../HomePage.constants";
import styles from "./ProcessSection.module.scss";

export const ProcessSection = () => (
  <section id={SectionId.Process} className={styles.root}>
    <div className={styles.wrap}>
      <div className={styles.kicker}>How It Works</div>
      <div className={styles.sectionHead}>
        <h2>From first call to first kilowatt-hour</h2>
      </div>
      <div className={styles.steps}>
        {PROCESS_STEPS.map((step) => (
          <div key={step.id} className={styles.step}>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
            <span className={styles.tag}>{step.tag}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);
