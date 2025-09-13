import dummyData from "../../dummyData.json"
import type { IRecipeCard } from "~/models/Recipe";
import { Category } from "~/models/Categories";
import type { Route } from "./+types/_index.$id";

const dataDummy = dummyData[0] as unknown as IRecipeCard;

// provides `loaderData` to the component
export async function loader({ params }: Route.LoaderArgs) {
    // let team = await fetchTeam(params.id);
    // return { name: team.name };
}

// renders after the loader is done
export default function RecipePage({
    loaderData,
}: Route.ComponentProps) {
    return (
        <div className="mt-20 mx-auto grid">
            <section className="w-30 bg-red-200">

            </section>
            <section className="bg-sky-200">

            </section>
        </div>
    )
}
