import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/_index.tsx"),
    route(":id", "./routes/_index.$id.tsx"),
    route("/new", "./routes/NewRecipe.tsx"),
] satisfies RouteConfig;
