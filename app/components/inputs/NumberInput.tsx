interface INumberInputProps {
    id?: string;
    placeholder?: string;
}

export const NumberInput = ({ placeholder, id }: INumberInputProps) => {
    return (
        <input id={id} type="number" placeholder={placeholder}
            className="w-full p-3 rounded-lg border border-[#d1d5db] focus:border-[#4b5563] outline-none transition-colors"
        />
    );
}