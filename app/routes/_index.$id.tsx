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


export async function loader({ params }: Route.LoaderArgs) {
    const recipe = await fetchRecipeById(params.id);

    return recipe.data;
}

export default function RecipePage({
    loaderData,
}: Route.ComponentProps) {
    return (
        <section className="max-w-6xl py-16 px-6 mx-auto">
            <BreadcrumbList>
                <BreadcrumbLink text="Home" linkTo="/" />
                <BreadcrumbsSeperator />
                <BreadcrumbPage text={loaderData?.title!} />
            </BreadcrumbList>
            <div className="mb-6 flex items-center justify-between">
                <h1 className="text-4xl text-neutral-900 mb-2">{loaderData?.title}</h1>
                <div className="flex items-center space-x-4">
                    <button className="p-3 rounded-full bg-[#f3f4f6] hover:bg-[#e5e7eb] cursor-pointer">
                        <i className="text-xl text-[#4b5563]">
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="currentColor" d="M442.9 144C415.6 144 389.9 157.1 373.9 179.2L339.5 226.8C335 233 327.8 236.7 320.1 236.7C312.4 236.7 305.2 233 300.7 226.8L266.3 179.2C250.3 157.1 224.6 144 197.3 144C150.3 144 112.2 182.1 112.2 229.1C112.2 279 144.2 327.5 180.3 371.4C221.4 421.4 271.7 465.4 306.2 491.7C309.4 494.1 314.1 495.9 320.2 495.9C326.3 495.9 331 494.1 334.2 491.7C368.7 465.4 419 421.3 460.1 371.4C496.3 327.5 528.2 279 528.2 229.1C528.2 182.1 490.1 144 443.1 144zM335 151.1C360 116.5 400.2 96 442.9 96C516.4 96 576 155.6 576 229.1C576 297.7 533.1 358 496.9 401.9C452.8 455.5 399.6 502 363.1 529.8C350.8 539.2 335.6 543.9 320 543.9C304.4 543.9 289.2 539.2 276.9 529.8C240.4 502 187.2 455.5 143.1 402C106.9 358.1 64 297.7 64 229.1C64 155.6 123.6 96 197.1 96C239.8 96 280 116.5 305 151.1L320 171.8L335 151.1z" /></svg>
                        </i>
                    </button>
                    <button className="p-3 rounded-full bg-[#f3f4f6] hover:bg-[#e5e7eb] cursor-pointer">
                        <i className="text-xl text-[#4b5563]">
                            <svg className="w-5 h-5" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="share" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z"></path></svg>
                        </i>
                    </button>
                </div>
            </div>
            <div className="mb-8 flex items-center space-x-4 text-sm text-[#4b5563]">
                {/* <div className="flex items-center">
                    <i className="mr-1"><svg className="w-3.4 h-3.5" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="clock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"></path></svg></i>
                    30 min
                </div> */}
                <div className="flex items-center">
                    <i className="mr-1"><svg className="w-3.5 h-3.5" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="users" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"></path></svg></i>
                    Serves {13}
                </div>
                {/* <div className="flex items-center">
                    <i className="mr-1"><svg className="w-3.5 h-3.5" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="signal" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M576 0c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V32c0-17.7 14.3-32 32-32zM448 96c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V128c0-17.7 14.3-32 32-32zM352 224V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32s32 14.3 32 32zM192 288c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V320c0-17.7 14.3-32 32-32zM96 416v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V416c0-17.7 14.3-32 32-32s32 14.3 32 32z"></path></svg></i>
                    Easy
                </div> */}
            </div>
            <div className="mb-12">
                <div className="h-96 mb-4 flex items-center justify-center rounded-xl text-white text-2xl bg-[#d1d5db] overflow-hidden">
                    <img src={loaderData?.image_url} alt="image of food"
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* <div className="grid grid-cols-4 gap-4">
                    <div className="h-24 bg-[#d1d5db] rounded-lg flex items-center justify-center text-white text-sm">Step 1</div>
                    <div className="h-24 bg-[#d1d5db] rounded-lg flex items-center justify-center text-white text-sm">Step 2</div>
                    <div className="h-24 bg-[#d1d5db] rounded-lg flex items-center justify-center text-white text-sm">Step 3</div>
                    <div className="h-24 bg-[#d1d5db] rounded-lg flex items-center justify-center text-white text-sm">Final</div>
                </div> */}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-1">
                    <IngredientsBox>
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
                    <h3 className="mb-6 text-xl text-[#111827]">Instructions</h3>
                    <div className="space-y-6">
                        {
                            loaderData?.instructions.map((step, index) => (
                                <InstructionStep key={index} step={step} index={index + 1} />
                            ))
                        }
                    </div>

                    <div className="mt-12 p-6 rounded-xl border border-[#e5e7eb] bg-[#f9fafb]">
                        <h4 className="mb-3 flex items-center text-[#111827]">
                            <i className="mr-2 text-[#6b7280]">
                                <svg className="w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="lightbulb" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"></path></svg>
                            </i>
                            Chef's Notes &amp; Tips
                        </h4>
                        <p className="text-[#374151]">{loaderData?.notes}</p>
                        {/* <ul className="pl-5 space-y-2 list-disc text-[#374151]">
                            <li>For chewier cookies, slightly underbake them and let them finish cooking on the hot pan</li>
                            <li>Room temperature ingredients mix better - take eggs and butter out 30 minutes before baking</li>
                            <li>Don't skip the parchment paper - it prevents sticking and ensures even browning</li>
                            <li>Store in an airtight container for up to one week, or freeze dough balls for later</li>
                        </ul> */}
                    </div>

                    {/* <div className="mt-12">
                        <h4 className="mb-6 text-xl text-[#111827]">Recipe Video</h4>
                        <div className="h-64 flex items-center justify-center rounded-xl bg-[#111827] text-white">
                            Video
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}
