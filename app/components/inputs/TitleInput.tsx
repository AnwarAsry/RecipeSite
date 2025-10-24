interface ITitleInputProps {
    id?: string;
    placeholder?: string;
}

export const TitleInput = ({ id, placeholder }: ITitleInputProps) => {
    return (
        <input
            id={id}
            type="text"
            placeholder={placeholder}
            className="w-full py-3 border-0 border-b-2 border-[#e5e7eb] 
            focus:border-[#4b5563] text-2xl font-bold outline-none 
            transition-colors bg-transparent"
        />
    );
}