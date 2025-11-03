import type { RouteProps } from "react-router";
import { AppRoutes, routePaths } from "@/shared/config";
import { LoginPage } from "@/pages/Login";
import { HomePage } from "@/pages/Home";

export const routeConfig: RouteProps[] = [
  {
    path: routePaths[AppRoutes.HOME],
    element: <HomePage />
  },
  {
    path: routePaths[AppRoutes.LOGIN],
    element: <LoginPage />
  },
]