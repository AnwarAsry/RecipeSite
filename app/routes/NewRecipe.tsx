import { useState } from "react";
import { postRecipe } from "~/actions/Recipes";
import { supabase } from "~/lib/supabase";
import type { Category } from "~/models/Categories";
import type { IRecipeForm } from "~/models/Recipe";

export default function NewRecipe() {
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");
    const [notes, setNotes] = useState("");
    const [category, setCategory] = useState("Other");
    const [file, setFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // If a file was selected
        if (e.target.files && e.target.files.length > 0) {
            // Update state with the selected file
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = async () => {
        // Basic validation
        if (!title || !file) return alert("Title and image are required");
        setUploading(true);

        try {
            const dataBody: IRecipeForm = {
                category: category as Category,
                title,
                ingredients,
                instructions,
                imageFile: file,
                notes,
            }

            const respsonse = await postRecipe(dataBody);

            if (!respsonse.success) {
                alert("Something went wrong: " + respsonse.message);
            }

            alert("Recipe added!");
            setTitle("");
            setIngredients("");
            setInstructions("");
            setNotes("");
            setFile(null);
        } catch (err: any) {
            alert("Error: " + err.message);
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="w-4xl my-20 mx-auto grid grid-cols-[1fr_2fr]">
            {/* LEFT column */}
            <section>
                <div className="w-74 h-70 border rounded-2xl p-4 bg-gray-50">
                    <label className="block mb-2 font-semibold">Recipe Image</label>
                    <input type="file" accept="image/*" onChange={handleFileChange} />
                </div>

                <div className="mt-10">
                    <h2 className="text-2xl font-bold">Ingredients</h2>
                    <hr className="mt-3 rounded-full border border-[#bbbbbb]" />
                    <textarea
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        placeholder="One ingredient per line"
                        className="w-full mt-4 border rounded-lg p-3 h-40"
                    />
                </div>
            </section>

            {/* RIGHT column */}
            <section className="pl-8 grid gap-4">
                {/* Recipe title */}
                <div>
                    <input
                        id="title"
                        type="text"
                        className="w-full rounded-lg text-4xl outline-none"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Recipe Title"
                    />
                    <hr className="mt-3 rounded-full border border-[#bbbbbb]" />
                </div>

                {/* Category */}
                <div>
                    <label className="block mb-2 font-semibold">Category</label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full border rounded-lg p-2 mb-4"
                    >
                        <option>Other</option>
                        <option>Meat</option>
                        <option>Chicken</option>
                        <option>Pasta</option>
                        <option>Dessert</option>
                        <option>Soup</option>
                    </select>
                </div>

                {/* Instructions */}
                <div>
                    <h2 className="mb-2 text-2xl font-bold">Instructions</h2>
                    <textarea
                        value={instructions}
                        onChange={(e) => setInstructions(e.target.value)}
                        placeholder="One step per line"
                        className="w-full border rounded-lg p-3 h-60"
                    />
                </div>

                <div>
                    <label className="block mb-2 font-semibold">Notes</label>
                    <textarea
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="w-full border rounded-lg p-3 h-32"
                    />
                </div>

                <button
                    onClick={handleSubmit}
                    disabled={uploading}
                    className="mt-6 w-full bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600 disabled:opacity-50"
                >
                    {uploading ? "Saving..." : "Save Recipe"}
                </button>
            </section>
        </div>
    );
}
