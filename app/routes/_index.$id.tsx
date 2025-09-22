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
            <section>
                <img src={loaderData?.image_url} alt="image of food"
                    className="w-74 h-70 object-cover border rounded-2xl"
                />

                <div className="mt-10">
                    <h2 className="text-2xl font-bold">Ingredients</h2>
                    <hr className="mt-3 rounded-full border border-[#bbbbbb]" />
                    <ul className="mt-5 pl-5 list-disc text-lg">
                        {loaderData?.ingredients.map((ingre, i) => <li key={i}>{ingre}</li>)}
                    </ul>
                </div>
            </section>
            <section className="pl-8">
                <div>
                    <h1 className="text-4xl">{loaderData?.title}</h1>
                    <hr className="mt-3 rounded-full border-1 border-[#bbbbbb]" />
                </div>
                <ol className="mt-5 pl-5 list-decimal">
                    {loaderData?.instructions.map((inst, i) => <li key={i} className="mb-2 text-lg">{inst}</li>)}
                </ol>
                <div className="mt-10">
                    <h4 className="text-xl font-bold">
                        Notes
                    </h4>
                    <p className="mt-1">
                        {loaderData?.notes}
                    </p>
                </div>
            </section>
        </div>
    )
}
