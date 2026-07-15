import { QueryProvider } from "@kalortech/shared-components";
import { BrowserRouter } from "react-router-dom";

import { QuoteProvider } from "~providers";

import { AppRoutes } from "./AppRoutes";

export const App = () => (
  <BrowserRouter>
    <QueryProvider>
      <QuoteProvider>
        <AppRoutes />
      </QuoteProvider>
    </QueryProvider>
  </BrowserRouter>
);
