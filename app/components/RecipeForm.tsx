import { useState } from "react";
import { supabase } from "~/lib/supabase";

export const RecipeForm = () => {
    const [title, setTitle] = useState("");
    const [file, setFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (!file || !title) return alert("Please provide a title and image");

        setUploading(true);

        try {
            // 1. Upload image to Supabase Storage
            const filePath = `recipes/${crypto.randomUUID()}-${file.name}`;
            const { data, error } = await supabase.storage
                .from("recipe-images") // bucket name
                .upload(filePath, file);

            if (error) throw error;

            // 2. Get public URL
            const { data: publicUrl } = supabase.storage
                .from("recipe-images")
                .getPublicUrl(filePath);

            // 3. Insert recipe into DB
            const { error: dbError } = await supabase.from("recipes").insert({
                title,
                category: "Pasta", // or dynamic from a form
                prep_time: 30,
                instructions: ["Boil pasta", "Add sauce"],
                ingredients: ["Pasta", "Tomato sauce"],
                image_url: publicUrl.publicUrl,
                notes: "Uploaded via UI",
            });

            if (dbError) throw dbError;

            alert("Recipe uploaded successfully!");
            setTitle("");
            setFile(null);
        } catch (err: any) {
            console.error(err.message);
            alert("Upload failed: " + err.message);
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="p-4 border rounded-lg shadow-md max-w-md space-y-4">
            <input
                type="text"
                placeholder="Recipe Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 border rounded"
            />

            <input type="file" accept="image/*" onChange={handleFileChange} />

            <button
                onClick={handleUpload}
                disabled={uploading}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
            >
                {uploading ? "Uploading..." : "Upload Recipe"}
            </button>
        </div>
        // </div>
    )
}

