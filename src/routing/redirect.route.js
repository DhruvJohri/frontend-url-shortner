import { createRoute } from "@tanstack/react-router";
import RedirectPage from "../pages/RedirectPage";
import { rootRoute } from "./routeTree";

export const redirectRoute = createRoute({
    path: "/:id",
    getParentRoute: () => rootRoute,
    component: RedirectPage,
});
