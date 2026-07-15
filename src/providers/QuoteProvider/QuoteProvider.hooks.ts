import { useContext } from "react";

import { QuoteContext } from "./QuoteProvider.constants";

export const useQuote = () => useContext(QuoteContext);
