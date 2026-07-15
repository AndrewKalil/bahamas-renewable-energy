import { Route, Routes } from "react-router-dom";

import { AppRoute } from "~constants";
import { HomePage } from "~pages";

export const AppRoutes = () => (
  <Routes>
    <Route path={AppRoute.Home} element={<HomePage />} />
  </Routes>
);
