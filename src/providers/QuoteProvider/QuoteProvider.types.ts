import type { ReactNode } from "react";

export interface QuoteContextValue {
  selectedPackage: string;
  setSelectedPackage: (value: string) => void;
}

export interface QuoteProviderProps {
  children: ReactNode;
}
