import { useCallback, useEffect, useState } from "react";
import { IslandNav, useNavScrollTracking } from "@kalortech/shared-components";

import {
  NAV_ITEMS_DESKTOP,
  NAV_ITEMS_MOBILE,
  NAV_MOBILE_BREAKPOINT,
  NAV_SECTION_IDS,
} from "./IslandNavBar.constants";

export const IslandNavBar = () => {
  const sectionIds = [...NAV_SECTION_IDS];
  const { activeId, isScrolled, suppressHide } = useNavScrollTracking({ sectionIds });

  const [isMobile, setIsMobile] = useState(
    () => window.innerWidth <= NAV_MOBILE_BREAKPOINT,
  );

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${NAV_MOBILE_BREAKPOINT}px)`);
    const onChangeHandler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener("change", onChangeHandler);
    return () => mql.removeEventListener("change", onChangeHandler);
  }, []);

  const onItemClickHandler = useCallback(
    (id: string) => {
      suppressHide();
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    },
    [suppressHide],
  );

  return (
    <IslandNav
      items={isMobile ? NAV_ITEMS_MOBILE : NAV_ITEMS_DESKTOP}
      activeId={activeId}
      isScrolled={isScrolled}
      onItemClick={onItemClickHandler}
    />
  );
};
