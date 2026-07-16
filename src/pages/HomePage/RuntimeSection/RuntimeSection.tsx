import cn from "classnames";

import { RUNTIME_ROWS, SectionId } from "../HomePage.constants";
import styles from "./RuntimeSection.module.scss";

export const RuntimeSection = () => (
  <section id={SectionId.Runtime} className={styles.root}>
    <div className={styles.wrap}>
      <div className={styles.kicker}>Battery Runtime, Honestly Stated</div>
      <div className={styles.sectionHead}>
        <h2>What actually stays on overnight</h2>
        <p>
          No vague promises. Here is the calculated nighttime runtime for the Pro Advanced
          Power System (32 kWh storage) across four real household load profiles.
        </p>
      </div>

      <div className={styles.tableWrap}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Operational profile</th>
            <th>Demand draw</th>
            <th>Calculated runtime</th>
          </tr>
        </thead>
        <tbody>
          {RUNTIME_ROWS.map((row) => (
            <tr key={row.profile}>
              <td className={styles.profile}>
                <b>{row.profile}</b>
                <span>{row.description}</span>
              </td>
              <td>{row.demand}</td>
              <td className={cn(styles.runtime, row.warn && styles.warn)}>{row.runtime}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

      <p className={styles.foot}>
        Runtimes are battery-only calculations for overnight use; solar recharges the bank each
        morning. Essential and Elite package runtime tables are provided in each package brochure.
        Actual figures vary with usage patterns and appliance efficiency.
      </p>
    </div>
  </section>
);
