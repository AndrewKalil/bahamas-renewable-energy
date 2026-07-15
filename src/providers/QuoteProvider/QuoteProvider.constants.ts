import { createContext } from "react";

import type { QuoteContextValue } from "./QuoteProvider.types";

export const QuoteContext = createContext<QuoteContextValue>({
  selectedPackage: "",
  setSelectedPackage: () => undefined,
});
