import { Link } from "react-router";
import { SectionContainer } from "~/components/container/SectionContainer";
import { SectionHeader } from "~/components/container/SectionHeader";
import { SectionText } from "~/components/container/SectionText";
import { SectionTitle } from "~/components/container/SectionTitle";
import { IngredientInput } from "~/components/inputs/IngredientInput";
import { Label } from "~/components/inputs/Label";
import { NumberInput } from "~/components/inputs/NumberInput";
import { SelectInput } from "~/components/inputs/SelectInput";
import { TitleInput } from "~/components/inputs/TitleInput";

export default function NewRecipe() {
    return (
        <main className="max-w-7xl mx-auto px-6 py-8 pb-15">
            <Link className="mb-8 flex items-center space-x-2 text-[#4b5563] hover:text-[#111827] transition-colors" to="/">
                <svg className="size-4" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"></path></svg>
                <span className="font-medium">Back to Home</span>
            </Link>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left column */}
                <div className="lg:col-span-2">
                    {/* Recipe Title Section */}
                    <SectionContainer>
                        <SectionHeader>
                            <SectionTitle>Recipe Details</SectionTitle>
                            <SectionText>Let's start with the basics of your delicious recipe</SectionText>
                        </SectionHeader>
                        <div className="space-y-6">
                            <div>
                                <Label htmlFor="titleInput">Recipe Title *</Label>
                                <TitleInput id="titleInput" placeholder="Enter your recipe title..." />
                            </div>
                            <div>
                                <Label htmlFor="description">Short Description</Label>
                                <textarea id="description" placeholder="A brief description of your recipe..." className="w-full h-24 p-4 rounded-lg border border-[#d1d5db] focus:border-[#4b5563] outline-none resize-none transition-colors"></textarea>
                            </div>
                        </div>
                    </SectionContainer>
                    {/* Media Upload Section */}
                    <SectionContainer>
                        <SectionHeader>
                            <SectionTitle>Visual Content</SectionTitle>
                            <SectionText>Add photos and videos to make your recipe more appealing</SectionText>
                        </SectionHeader>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <Label htmlFor="imageUpload">Recipe Image *</Label>
                                <div className="p-8 border-2 border-dashed border-[#d1d5db] rounded-lg text-center hover:border-green-400 transition-colors cursor-pointer">
                                    <svg className="size-9 inline-block text-[#4b5563]" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="image" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"></path></svg>
                                    <p className="mb-2 text-[#4b5563]">Drop your image here or click to browse</p>
                                    <p className="text-sm text-[#6b7280]">PNG, JPG up to 10MB</p>
                                    <input id="imageUpload" type="file" className="hidden" accept="image/*" />
                                </div>
                            </div>
                            <div>
                                <Label htmlFor="videoUpload">Recipe Video (Optional)</Label>
                                <div className="p-8 border-2 border-dashed border-[#d1d5db] rounded-lg text-center hover:border-green-400 transition-colors cursor-pointer">
                                    <svg className="size-9 inline-block text-[#4b5563]" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="video" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z"></path></svg>
                                    <p className="mb-2 text-[#4b5563]">Add a cooking video</p>
                                    <p className="text-sm text-[#6b7280]">MP4, MOV up to 100MB</p>
                                    <input id="videoUpload" type="file" className="hidden" accept="video/*" />
                                </div>
                            </div>
                        </div>
                    </SectionContainer>
                    {/* Recipe Metadata Section */}
                    <SectionContainer>
                        <SectionHeader>
                            <SectionTitle>Recipe Information</SectionTitle>
                            <SectionText>Help people find and understand your recipe</SectionText>
                        </SectionHeader>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <Label htmlFor="categoryInp">Category *</Label>
                                <SelectInput id="categoryInp">
                                    <option value="">Select a category</option>
                                    <option value="Chicken">Chicken</option>
                                    <option value="Soup">Soup</option>
                                    <option value="Meat">Meat</option>
                                    <option value="Dessert">Dessert</option>
                                    <option value="Pasta">Pasta</option>
                                </SelectInput>
                            </div>
                            <div>
                                <Label htmlFor="servingsInp">Servings</Label>
                                <NumberInput id="servingsInp" placeholder="4" />
                            </div>
                        </div>
                    </SectionContainer>
                    {/* Ingredients Section */}
                    <SectionContainer>
                        <SectionHeader>
                            <SectionTitle>Ingredients</SectionTitle>
                            <SectionText>List all the ingredients needed for your recipe</SectionText>
                        </SectionHeader>
                        <div id="ingredients-list" className="space-y-4">
                            <IngredientInput />
                            <IngredientInput />
                            <IngredientInput />
                        </div>
                        <button className="mt-4 flex items-center space-x-2 text-green-600 font-medium hover:text-green-700 transition-colors cursor-pointer">
                            <svg className="mr-2 h-4" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                                <path fill="currentColor" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
                            </svg>
                            Add Ingredient
                        </button>
                    </SectionContainer>
                    {/* Instructions Section */}
                    <SectionContainer>
                        <SectionHeader>
                            <SectionTitle>Instructions</SectionTitle>
                            <SectionText>Provide step-by-step instructions for your recipe</SectionText>
                        </SectionHeader>
                        <div id="instructions-list" className="space-y-6">
                            <div className="flex space-x-4">
                                <div className="size-8 flex items-center justify-center rounded-full text-sm font-semibold text-white bg-[#4b5563]">1</div>
                                <div className="flex-1">
                                    <textarea
                                        placeholder="Describe the step..."
                                        className="w-full h-24 p-4 border rounded-lg border-[#d1d5db] focus:border-[#4b5563] outline-none resize-none transition-colors"
                                    ></textarea>
                                    <button className="p-2 text-red-500 hover:text-red-700 cursor-pointer">
                                        <svg className="size-4" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <button className="mt-4 flex items-center space-x-2 text-green-600 font-medium hover:text-green-700 transition-colors cursor-pointer">
                            <svg className="mr-2 h-4" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                                <path fill="currentColor" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
                            </svg>
                            Add Step
                        </button>
                    </SectionContainer>
                    {/* Notes Section */}
                    <SectionContainer>
                        <SectionHeader>
                            <SectionTitle>Chef's Notes & Tips</SectionTitle>
                            <SectionText>Share additional tips, variations, or storage instructions</SectionText>
                        </SectionHeader>
                        <div className="space-y-6">
                            <Label htmlFor="notes">Recipe Notes</Label>
                            <textarea name="notes" id="notes" placeholder="Share any helpful tips, substitutions, or variations..."
                                className="w-full h-32 p-4 border rounded-lg border-gray-200 focus:border-[#4b5563] outline-none resize-none transition-colors"
                            ></textarea>
                        </div>
                    </SectionContainer>
                </div>
                {/* Right column */}
                <div className="lg:col-span-1">
                    <section id="recipe-tips" className="p-6 mb-8 border rounded-xl bg-gradient-to-br from-green-50 to-blue-50 border-green-200">
                        <div className="mb-4 flex items-center space-x-3">
                            <svg className="size-5 text-xl text-yellow-500" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="lightbulb" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"></path></svg>
                            <h3 className="font-bold text-[#111827]">Pro Tips</h3>
                        </div>
                        <div className="space-y-3 text-sm text-[#4b5563]">
                            <p className="flex items-start space-x-2">
                                <svg className="size-3 mt-1 text-xs text-green-600" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg>
                                <span>Use high-quality photos to make your recipe more appealing</span>
                            </p>
                            <p className="flex items-start space-x-2">
                                <svg className="size-3 mt-1 text-xs text-green-600" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg>
                                <span>Be specific with measurements and cooking times</span>
                            </p>
                            <p className="flex items-start space-x-2">
                                <svg className="size-3 mt-1 text-xs text-green-600" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg>
                                <span>Include helpful tips and substitutions in your notes</span>
                            </p>
                            <p className="flex items-start space-x-2">
                                <svg className="size-3 mt-1 text-xs text-green-600" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg>
                                <span>Test your recipe before publishing</span>
                            </p>
                        </div>
                    </section>
                </div>
            </div>
            {/* Bottom Action Bar */}
            <section id="action-bar" className="p-4 fixed bottom-0 left-0 right-0 z-30 border-t border-[#e5e7eb] bg-white">
                <div className="max-w-7xl mx-auto flex items-center justify-end">
                    <div className="flex items-center space-x-3">
                        <button className="px-6 py-2 rounded-lg font-medium text-[#4b5563] bg-[#f3f4f6] hover:bg-[#e5e7eb] transition-colors cursor-pointer">
                            Cancel
                        </button>
                        <button className="px-8 py-2 flex items-center rounded-lg font-medium text-white bg-[#4b5563] hover:bg-[#374151] transition-colors cursor-pointer">
                            <svg className="mr-2 size-4" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="rocket" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"></path></svg>
                            Publish Recipe
                        </button>
                    </div>
                </div>
            </section>
        </main>
    )
}
