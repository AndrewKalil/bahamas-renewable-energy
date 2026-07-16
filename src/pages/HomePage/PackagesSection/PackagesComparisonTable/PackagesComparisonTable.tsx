import styles from "../PackagesSection.module.scss";

export const PackagesComparisonTable = () => (
  <div className={styles.comparisonWrap}>
    <h3>Side-by-side comparison</h3>
    <table className={styles.table}>
      <thead>
        <tr>
          <th />
          <th>Essential</th>
          <th>Pro</th>
          <th>Elite</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Solar array</th>
          <td>12 × 725W (8.70 kW)</td>
          <td>16 × 725W (11.60 kW)</td>
          <td>18 × 725W (13.05 kW)</td>
        </tr>
        <tr>
          <th>Inverter output</th>
          <td>15 kW (18 kW surge)</td>
          <td>15 kW (18 kW surge)</td>
          <td>30 kW (2× stacked)</td>
        </tr>
        <tr>
          <th>Battery storage</th>
          <td>16 kWh</td>
          <td>32 kWh</td>
          <td>48 kWh</td>
        </tr>
        <tr>
          <th>Max continuous capacity</th>
          <td>15,000W</td>
          <td>15,000W</td>
          <td>30,000W</td>
        </tr>
        <tr>
          <th>Essential-load runtime</th>
          <td>~25.6 hrs</td>
          <td>~42.6 hrs</td>
          <td>~48.0 hrs</td>
        </tr>
        <tr>
          <th>Best suited for</th>
          <td>Essential backup &amp; small homes</td>
          <td>Family homes w/ AC</td>
          <td>Villas &amp; commercial</td>
        </tr>
        <tr className={styles.priceRow}>
          <th>Hardware investment</th>
          <td>BSD 11,354</td>
          <td>BSD 16,172</td>
          <td>BSD 24,356</td>
        </tr>
      </tbody>
    </table>
  </div>
);
