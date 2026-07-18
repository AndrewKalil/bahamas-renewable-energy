import { useCallback, useState } from "react";

export const useGalleryLightbox = (count: number) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const onOpenHandler = useCallback(
    (index: number) => () => setActiveIndex(index),
    [],
  );

  const onCloseHandler = useCallback(() => setActiveIndex(null), []);

  const onPrevHandler = useCallback(
    () => setActiveIndex((i) => (i !== null && i > 0 ? i - 1 : i)),
    [],
  );

  const onNextHandler = useCallback(
    () => setActiveIndex((i) => (i !== null && i < count - 1 ? i + 1 : i)),
    [count],
  );

  return {
    activeIndex,
    isOpen: activeIndex !== null,
    onOpenHandler,
    onCloseHandler,
    onPrevHandler,
    onNextHandler,
  };
};
