interface ILabelProps {
    children: React.ReactNode;
    htmlFor?: string;
}

export const Label = ({ children, htmlFor }: ILabelProps) => {
    return (
        <label htmlFor={htmlFor} className="mb-3 block text-sm font-semibold text-[#374151]">
            {children}
        </label>
    );
}