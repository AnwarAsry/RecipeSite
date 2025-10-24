interface RecipeImageProps {
    imageUrl: string;
    altText?: string;
}

export const RecipeImage = ({ imageUrl, altText }: RecipeImageProps) => {
    return (
        <div className="h-96 mb-4 flex items-center justify-center rounded-xl overflow-hidden">
            <img src={imageUrl} alt={altText}
                className="w-full h-full object-cover"
            />
        </div>
    )
}