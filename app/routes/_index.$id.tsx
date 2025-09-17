import type { Route } from "./+types/_index.$id";
import { fetchRecipeById } from "~/actions/Recipes";


export async function loader({ params }: Route.LoaderArgs) {
    const recipe = await fetchRecipeById(params.id);

    return recipe.data;
}

export default function RecipePage({
    loaderData,
}: Route.ComponentProps) {
    return (
        <div className="w-4xl my-20 mx-auto grid grid-cols-[1fr_2fr]">
            <section className="">
                <img src={loaderData?.imageUrl} alt="image of food"
                    className="w-full h-70 object-cover rounded-2xl border"
                />

                <div className="mt-10">
                    <h2 className="text-2xl font-bold">Ingredients</h2>
                    <hr className="mt-3 rounded-full border-1 border-[#bbbbbb]" />
                    <ul className="mt-5 pl-5 list-disc text-lg">
                        {loaderData?.ingredients.map((ingre, i) => <li key={i}>{ingre}</li>)}
                    </ul>
                </div>
            </section>
            <section className="pl-8">
                <h1 className="text-4xl">{loaderData?.title}</h1>
                <hr className="mt-3 rounded-full border-1 border-[#bbbbbb]" />
                <ol className="mt-5 pl-5 list-decimal">
                    {loaderData?.instructions.map((inst, i) => <li key={i} className="mb-2 text-lg">{inst}</li>)}
                </ol>
            </section>
        </div>
    )
}
