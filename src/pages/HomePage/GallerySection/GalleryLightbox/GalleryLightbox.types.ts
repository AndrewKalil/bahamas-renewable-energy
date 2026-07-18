import type { GalleryMedia } from "../GallerySection.types";

export interface GalleryLightboxProps {
  media: GalleryMedia[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}
