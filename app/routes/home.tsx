import { Header } from "~/components/Header";
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Anwars Saved Recipes" },
    { name: "description", content: "Welcome to Anwars Recipes!" },
  ];
}

export default function Home() {
  return <>
    <Header />
    <p>Hello</p>
  </>;
}
