import type { Route } from "./+types/_index.$id";
import { fetchRecipeById } from "~/actions/Recipes";
import { BreadcrumbLink } from "~/components/breadcrumbs/BreadcrumbLink";
import { BreadcrumbsSeperator } from "~/components/breadcrumbs/BreadcrumbSeperator";
import { BreadcrumbPage } from "~/components/breadcrumbs/BreadcrumbPage";
import { BreadcrumbList } from "~/components/breadcrumbs/BreadcrumbList";
import { IngredientsItem } from "~/components/Ingredients/IngredientsItem";
import { IngredientsList } from "~/components/Ingredients/IngredientsList";
import { IngredientsBox } from "~/components/Ingredients/IngredientsBox";
import { InstructionStep } from "~/components/Instructions/InstructionStep";
import { ServingsLabel } from "~/components/RecipePageComp/ServingsLabel";
import { TimeLabel } from "~/components/RecipePageComp/TimeLabel";
import { LikeBtn } from "~/components/Buttons/LikeBtn";
import { ShareBtn } from "~/components/Buttons/ShareBtn";
import { RecipeTitle } from "~/components/Text/RecipeTitle";
import { ActionGroup } from "~/components/container/ActionGroup";
import { InfoGroup } from "~/components/container/InfoGroup";
import { RecipeImage } from "~/components/RecipePageComp/RecipeImage";
import { TipsCard } from "~/components/container/TipsCard";
import { NotesList } from "~/components/container/NotesList";
import { VideoContainer } from "~/components/container/VideoContainer";
import { HeadingThree } from "~/components/Text/HeadingThree";


export async function loader({ params }: Route.LoaderArgs) {
    const recipe = await fetchRecipeById(params.id);
    return recipe.data;
}

export default function RecipePage({
    loaderData,
}: Route.ComponentProps) {
    return (
        <section className="max-w-6xl pt-8 pb-16 px-6 mx-auto">
            <BreadcrumbList>
                <BreadcrumbLink text="Home" linkTo="/" />
                <BreadcrumbsSeperator />
                <BreadcrumbPage text={loaderData?.title!} />
            </BreadcrumbList>
            {/* Header */}
            <header className="mb-8">
                <div className="mb-6 flex items-center justify-between">
                    <RecipeTitle title={loaderData?.title!} />
                    <ActionGroup>
                        <LikeBtn liked={false} />
                        <ShareBtn />
                    </ActionGroup>
                </div>
                <InfoGroup>
                    <TimeLabel time={34} />
                    <ServingsLabel servings={4} />
                </InfoGroup>
            </header>
            {/* Image */}
            <section className="mb-12">
                <RecipeImage imageUrl={loaderData?.image_url!} altText={loaderData?.title!} />
            </section>
            {/* Contents */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-1">
                    {/* Ingredients */}
                    <IngredientsBox>
                        <HeadingThree text="Ingredients" />
                        <IngredientsList>
                            {
                                loaderData?.ingredients.map((ingredient, index) => (
                                    <IngredientsItem key={index} ingredient={ingredient} />
                                ))
                            }
                        </IngredientsList>
                    </IngredientsBox>
                </div>

                <div className="lg:col-span-2">
                    {/* Instructions */}
                    <section>
                        <HeadingThree text="Instructions" />
                        <div className="space-y-6">
                            {
                                loaderData?.instructions.map((step, index) => (
                                    <InstructionStep key={index} step={step} index={index + 1} />
                                ))
                            }
                        </div>
                    </section>

                    {/* Notes (Chef's tips & tricks) */}
                    <TipsCard className="mt-12" title="Chef's Notes & Tips">
                        {/* <p className="text-[#374151]">{loaderData?.notes}</p> */}
                        <NotesList>
                            <li>For chewier cookies, slightly underbake them and let them finish cooking on the hot pan</li>
                            <li>Room temperature ingredients mix better - take eggs and butter out 30 minutes before baking</li>
                            <li>Don't skip the parchment paper - it prevents sticking and ensures even browning</li>
                            <li>Store in an airtight container for up to one week, or freeze dough balls for later</li>
                        </NotesList>
                    </TipsCard>

                    {/* Video */}
                    <section className="mt-12">
                        <HeadingThree text="Recipe Video" />
                        <VideoContainer />
                    </section>
                </div>
            </div>
        </section>
    )
}
