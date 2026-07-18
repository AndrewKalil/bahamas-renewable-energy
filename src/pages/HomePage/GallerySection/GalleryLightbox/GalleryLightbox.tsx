import { useEffect } from "react";
import { Modal } from "antd";
import { ChevronLeft, ChevronRight } from "lucide-react";

import styles from "../GallerySection.module.scss";
import type { GalleryLightboxProps } from "./GalleryLightbox.types";

export const GalleryLightbox = (props: GalleryLightboxProps) => {
  const { media, index, onClose, onPrev, onNext } = props;
  const current = media[index];

  useEffect(() => {
    const onKeyDownHandler = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") onPrev();
      else if (event.key === "ArrowRight") onNext();
      else if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDownHandler);
    return () => window.removeEventListener("keydown", onKeyDownHandler);
  }, [onClose, onNext, onPrev]);

  const isPrevDisabled = index === 0;
  const isNextDisabled = index === media.length - 1;

  return (
    <Modal
      open
      onCancel={onClose}
      footer={null}
      centered
      width="90vw"
      styles={{ body: { padding: 0 } }}
    >
      <div className={styles.lightboxBody}>
        <button
          className={styles.lightboxNav}
          onClick={onPrev}
          disabled={isPrevDisabled}
          aria-label="Previous"
        >
          <ChevronLeft size={28} />
        </button>

        {current.type === "video" ? (
          // key on src remounts the element so a playing video stops on navigate/close
          <video
            key={current.src}
            className={styles.lightboxVideo}
            src={current.src}
            poster={current.poster}
            controls
          />
        ) : (
          <img
            key={current.src}
            className={styles.lightboxImage}
            src={current.src}
            alt={current.alt}
          />
        )}

        <button
          className={styles.lightboxNav}
          onClick={onNext}
          disabled={isNextDisabled}
          aria-label="Next"
        >
          <ChevronRight size={28} />
        </button>
      </div>
    </Modal>
  );
};
