import { Play } from "lucide-react";

import { SectionId } from "../HomePage.constants";
import { GalleryLightbox } from "./GalleryLightbox";
import { GALLERY_MEDIA } from "./GallerySection.constants";
import { useGalleryLightbox } from "./GallerySection.hooks";
import styles from "./GallerySection.module.scss";

export const GallerySection = () => {
  const { activeIndex, isOpen, onOpenHandler, onCloseHandler, onPrevHandler, onNextHandler } =
    useGalleryLightbox(GALLERY_MEDIA.length);

  return (
    <section id={SectionId.Work} className={styles.root}>
      <div className={styles.wrap}>
        <div className={styles.kicker}>Recent Installations</div>
        <div className={styles.sectionHead}>
          <h2>Work we&rsquo;re proud to sign</h2>
        </div>

        <div className={styles.gallery}>
          {GALLERY_MEDIA.map((item, index) => (
            <button
              key={item.src}
              className={styles.photoFrame}
              data-caption={item.caption}
              onClick={onOpenHandler(index)}
              aria-label={`Open ${item.type === "video" ? "video" : "photo"}: ${item.caption}`}
            >
              {item.type === "video" ? (
                <>
                  <video
                    className={styles.photo}
                    src={item.src}
                    poster={item.poster}
                    preload="metadata"
                    muted
                    playsInline
                  />
                  <div className={styles.playOverlay} aria-hidden="true">
                    <Play size={36} />
                  </div>
                </>
              ) : (
                <img className={styles.photo} src={item.src} alt={item.alt} />
              )}
            </button>
          ))}
        </div>

        {isOpen && activeIndex !== null && (
          <GalleryLightbox
            media={GALLERY_MEDIA}
            index={activeIndex}
            onClose={onCloseHandler}
            onPrev={onPrevHandler}
            onNext={onNextHandler}
          />
        )}
      </div>
    </section>
  );
};
