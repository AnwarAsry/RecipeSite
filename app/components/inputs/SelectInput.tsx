interface ISelectInputProps {
    children?: React.ReactNode;
    id?: string;
}

export const SelectInput = ({ children, id }: ISelectInputProps) => {
    return (
        <select name={id} id={id}
            className="w-full p-3 rounded-lg border border-[#d1d5db] focus:border-[#4b5563] outline-none transition-colors"
        >
            {children}
        </select>
    );
}