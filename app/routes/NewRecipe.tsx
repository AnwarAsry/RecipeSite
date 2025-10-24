import { Link } from "react-router";

// Buttons
import { AddInpBtn } from "~/components/Buttons/AddInpBtn";
import { CancelBtn } from "~/components/Buttons/CancelBtn";
import { PublishBtn } from "~/components/Buttons/PublishBtn";
import { TrashBtn } from "~/components/Buttons/TrashBtn";

// Containers
import { SectionContainer } from "~/components/container/SectionContainer";
import { SectionHeader } from "~/components/container/SectionHeader";
import { SectionText } from "~/components/container/SectionText";
import { SectionTitle } from "~/components/container/SectionTitle";
import { TipsCard } from "~/components/container/TipsCard";
import { InputGroup } from "~/components/container/InputGroup";

// Misc
import { Camera } from "~/components/IconsTags/Camera";
import { Photo } from "~/components/IconsTags/Photo";
import { NumberStepLabel } from "~/components/RecipePageComp/NumberStepLabel";

// Inputs
import { FileUploadField } from "~/components/inputs/FileUploadField";
import { IngredientInput } from "~/components/inputs/IngredientInput";
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
                            <InputGroup label="Recipe Title *" id="titleInput">
                                <TitleInput id="titleInput" placeholder="Enter your recipe title..." />
                            </InputGroup>
                            <InputGroup label="Short Description" id="description">
                                <textarea id="description" placeholder="A brief description of your recipe..." className="w-full h-24 p-4 rounded-lg border border-[#d1d5db] focus:border-[#4b5563] outline-none resize-none transition-colors"></textarea>
                            </InputGroup>
                        </div>
                    </SectionContainer>
                    {/* Media Upload Section */}
                    <SectionContainer>
                        <SectionHeader>
                            <SectionTitle>Visual Content</SectionTitle>
                            <SectionText>Add photos and videos to make your recipe more appealing</SectionText>
                        </SectionHeader>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FileUploadField
                                id="imageUpload"
                                label="Recipe Image"
                                required
                                icon={<Photo />}
                                description="Drop your image here or click to browse"
                                subtext="PNG, JPG up to 10MB"
                                accept="image/*"
                            />
                            <FileUploadField
                                id="videoUpload"
                                label="Recipe Video (Optional)"
                                required
                                icon={<Camera />}
                                description="Add a cooking video"
                                subtext="MP4, MOV up to 100MB"
                                accept="video/*"
                            />
                        </div>
                    </SectionContainer>
                    {/* Recipe Metadata Section */}
                    <SectionContainer>
                        <SectionHeader>
                            <SectionTitle>Recipe Information</SectionTitle>
                            <SectionText>Help people find and understand your recipe</SectionText>
                        </SectionHeader>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <InputGroup label="Category *" id="categoryInp">
                                <SelectInput id="categoryInp">
                                    <option value="">Select a category</option>
                                    <option value="Chicken">Chicken</option>
                                    <option value="Soup">Soup</option>
                                    <option value="Meat">Meat</option>
                                    <option value="Dessert">Dessert</option>
                                    <option value="Pasta">Pasta</option>
                                </SelectInput>
                            </InputGroup>
                            <InputGroup label="Servings" id="servingsInp">
                                <NumberInput id="servingsInp" placeholder="4" />
                            </InputGroup>
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
                        <AddInpBtn text="Ingredient" />
                    </SectionContainer>
                    {/* Instructions Section */}
                    <SectionContainer>
                        <SectionHeader>
                            <SectionTitle>Instructions</SectionTitle>
                            <SectionText>Provide step-by-step instructions for your recipe</SectionText>
                        </SectionHeader>
                        <div id="instructions-list" className="space-y-6">
                            <div className="flex space-x-4">
                                <NumberStepLabel index={1} />
                                <div className="flex-1 flex items-center space-x-4">
                                    <textarea
                                        placeholder="Describe the step..."
                                        className="w-full h-24 p-4 border rounded-lg border-[#d1d5db] focus:border-[#4b5563] outline-none resize-none transition-colors"
                                    ></textarea>
                                    <TrashBtn />
                                </div>
                            </div>
                        </div>
                        <AddInpBtn text="Step" />
                    </SectionContainer>
                    {/* Notes Section */}
                    <SectionContainer>
                        <SectionHeader>
                            <SectionTitle>Chef's Notes & Tips</SectionTitle>
                            <SectionText>Share additional tips, variations, or storage instructions</SectionText>
                        </SectionHeader>
                        <div className="space-y-6">
                            <div className="flex-1 flex items-center space-x-4">
                                <textarea
                                    id="notes"
                                    name="notes"
                                    placeholder="Share any helpful tips, substitutions, or variations..."
                                    className="w-full h-24 p-4 border rounded-lg border-[#d1d5db] focus:border-[#4b5563] outline-none resize-none transition-colors"
                                ></textarea>
                                <TrashBtn />
                            </div>
                        </div>
                        <AddInpBtn text="Note" />
                    </SectionContainer>
                </div>
                {/* Right column */}
                <div className="lg:col-span-1">
                    {/* Tips box */}
                    <TipsCard className="mb-8" variant="tips" title="Pro Tips">
                        <ul className="space-y-3 text-sm text-[#374151]">
                            <li className="flex space-x-2">
                                <svg className="size-3 mt-1 text-xs text-green-600" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg>
                                <span>Use high-quality photos to make your recipe more appealing</span>
                            </li>
                            <li className="flex space-x-2">
                                <svg className="size-3 mt-1 text-xs text-green-600" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg>
                                <span>Be specific with measurements and cooking times</span>
                            </li>
                            <li className="flex space-x-2">
                                <svg className="size-3 mt-1 text-xs text-green-600" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg>
                                <span>Include helpful tips and substitutions in your notes</span>
                            </li>
                            <li className="flex space-x-2">
                                <svg className="size-3 mt-1 text-xs text-green-600" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg>
                                <span>Test your recipe before publishing</span>
                            </li>
                        </ul>
                    </TipsCard>
                </div>
            </div>
            {/* Bottom Action Bar */}
            <section id="action-bar" className="p-4 fixed bottom-0 left-0 right-0 z-30 border-t border-[#e5e7eb] bg-white">
                <div className="max-w-7xl mx-auto flex items-center justify-end space-x-3">
                    <CancelBtn />
                    <PublishBtn />
                </div>
            </section>
        </main>
    )
}
