import type { GalleryMedia } from "./GallerySection.types";

export const GALLERY_MEDIA: GalleryMedia[] = [
  {
    type: "image",
    src: "/solar-panels-in-yard.png",
    alt: "16-panel ground-mount solar array, Freeport, Grand Bahama",
    caption: "16-panel ground-mount array, Freeport, Grand Bahama",
  },
  {
    type: "image",
    src: "/rail-matrix-installation.jpeg",
    alt: "Galvanized rail matrix during solar panel installation",
    caption: "Galvanized rail matrix during installation",
  },
  {
    type: "image",
    src: "/battery-and-inverters-system.jpeg",
    alt: "Twin EG4 inverters and BasenGreen battery bank in the power shed",
    caption: "Twin EG4 inverters + BasenGreen battery bank, power shed",
  },
  {
    type: "image",
    src: "/roof-installation.jpeg",
    alt: "Rooftop solar array installation complete, New Providence",
    caption: "Rooftop array installation complete, New Providence",
  },
  {
    type: "video",
    src: "/roof-installation-video.mp4",
    alt: "Time-lapse of a full rooftop solar array installation",
    caption: "Installation day — full roof array build",
    poster: "/roof-installation.jpeg",
  },
];
