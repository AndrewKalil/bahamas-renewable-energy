export type GalleryMediaType = "image" | "video";

export interface GalleryMedia {
  type: GalleryMediaType;
  /** Root-relative path to the file in `public/`. */
  src: string;
  alt: string;
  caption: string;
  /** Optional still frame shown as the video thumbnail in the grid and lightbox poster. */
  poster?: string;
}
