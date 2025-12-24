import { Routes, Route } from "react-router-dom";
import { AppLayout } from "../components/layout/AppLayout";
import { DashboardPage } from "../pages/DashboardPage";
import { UsersPage } from "../pages/UsersPage";
import { ProductsPage } from "../pages/ProductsPage";
import { SettingsPage } from "../pages/SettingsPage";

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<AppLayout />}>
      <Route path="dashboard" element={<DashboardPage />} />
      <Route path="users" element={<UsersPage />} />
      <Route path="products" element={<ProductsPage />} />
      <Route path="settings" element={<SettingsPage />} />
      <Route path="" element={<DashboardPage />} />
    </Route>
  </Routes>
);
