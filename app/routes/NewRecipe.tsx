import { useState } from "react";
import { supabase } from "~/lib/supabase";

export default function NewRecipe() {
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");
    const [notes, setNotes] = useState("");
    const [category, setCategory] = useState("Other");
    const [file, setFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = async () => {
        if (!title || !file) return alert("Title and image are required");
        setUploading(true);

        try {
            // Upload image
            const filePath = `recipes/${crypto.randomUUID()}-${file.name}`;
            const { error: uploadError } = await supabase.storage
                .from("recipe-images")
                .upload(filePath, file);
            if (uploadError) throw uploadError;

            const { data: publicUrl } = supabase.storage
                .from("recipe-images")
                .getPublicUrl(filePath);

            // Insert into DB
            const { error: dbError } = await supabase.from("recipes").insert({
                title,
                category,
                prep_time: 30, // could add a separate input
                ingredients: ingredients.split("\n"),
                instructions: instructions.split("\n"),
                image_url: publicUrl.publicUrl,
                notes,
            });
            if (dbError) throw dbError;

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
                <div className="border rounded-2xl p-4 bg-gray-50">
                    <label className="block mb-2 font-semibold">Recipe Image</label>
                    <input type="file" accept="image/*" onChange={handleFileChange} />
                </div>

                <div className="mt-10">
                    <h2 className="text-2xl font-bold">Ingredients</h2>
                    <hr className="mt-3 border-[#bbbbbb]" />
                    <textarea
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        placeholder="One ingredient per line"
                        className="w-full mt-4 border rounded-lg p-3 h-40"
                    />
                </div>
            </section>

            {/* RIGHT column */}
            <section className="pl-8">
                <label className="block mb-2 font-semibold">Title</label>
                <input
                    type="text"
                    className="w-full border rounded-lg p-2 mb-4"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Recipe Title"
                />

                <label className="block mb-2 font-semibold">Category</label>
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full border rounded-lg p-2 mb-4"
                >
                    <option>Breakfast</option>
                    <option>Lunch</option>
                    <option>Dinner</option>
                    <option>Snack</option>
                    <option>Dessert</option>
                    <option>Beverage</option>
                    <option>Other</option>
                </select>

                <h2 className="text-2xl font-bold">Instructions</h2>
                <hr className="mt-3 border-[#bbbbbb]" />
                <textarea
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                    placeholder="One step per line"
                    className="w-full mt-4 border rounded-lg p-3 h-60"
                />

                <label className="block mt-6 mb-2 font-semibold">Notes</label>
                <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full border rounded-lg p-3 h-32"
                />

                <button
                    onClick={handleSubmit}
                    disabled={uploading}
                    className="mt-6 w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
                >
                    {uploading ? "Saving..." : "Save Recipe"}
                </button>
            </section>
        </div>
    );
}
