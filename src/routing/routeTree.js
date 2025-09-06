import { createRootRoute } from "@tanstack/react-router";
import { homePageRoute } from "./homepage";
import { authRoute } from "./auth.route";
import { dasboardRoute } from "./dashboard";
import RootLayout from "../RootLayout";
import { redirectRoute } from "./redirect.route"; // <-- import the new route

export const rootRoute = createRootRoute({
    component: RootLayout
});

export const routeTree = rootRoute.addChildren([
    homePageRoute,
    authRoute,
    dasboardRoute,
    redirectRoute // <-- add the new route here
]);
