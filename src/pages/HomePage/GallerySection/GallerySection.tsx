import { SectionId } from "../HomePage.constants";
import styles from "./GallerySection.module.scss";

export const GallerySection = () => (
  <section id={SectionId.Work} className={styles.root}>
    <div className={styles.wrap}>
      <div className={styles.kicker}>Recent Installations</div>
      <div className={styles.sectionHead}>
        <h2>Work we&rsquo;re proud to sign</h2>
      </div>
      <div className={styles.gallery}>
        <div
          className={styles.photoFrame}
          data-caption="16-panel ground-mount array, Freeport, Grand Bahama"
        >
          <img
            src="/solar-panels-in-yard.png"
            alt="16-panel ground-mount solar array, Freeport, Grand Bahama"
            className={styles.photo}
          />
        </div>

        <div
          className={styles.photoFrame}
          data-caption="Galvanized rail matrix during installation"
        >
          <img
            src="/rail-matrix-installation.jpeg"
            alt="Galvanized rail matrix during solar panel installation"
            className={styles.photo}
          />
        </div>

        <div
          className={styles.photoFrame}
          data-caption="Twin EG4 inverters + BasenGreen battery bank, power shed"
        >
          <img
            src="/battery-and-inverters-system.jpeg"
            alt="Twin EG4 inverters and BasenGreen battery bank in the power shed"
            className={styles.photo}
          />
        </div>
      </div>
    </div>
  </section>
);
