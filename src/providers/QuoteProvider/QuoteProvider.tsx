import { useMemo, useState } from "react";

import { QuoteContext } from "./QuoteProvider.constants";
import type { QuoteProviderProps } from "./QuoteProvider.types";

export const QuoteProvider = (props: QuoteProviderProps) => {
  const { children } = props;
  const [selectedPackage, setSelectedPackage] = useState("");

  const value = useMemo(
    () => ({ selectedPackage, setSelectedPackage }),
    [selectedPackage],
  );

  return <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>;
};
