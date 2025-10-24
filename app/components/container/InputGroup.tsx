import { Label } from "../inputs/Label";

interface InputGroupProps {
    children: React.ReactNode;
    label: string;
    id?: string;
}

export const InputGroup = ({ children, label, id }: InputGroupProps) => {
    return (
        <div>
            <Label htmlFor={id}>{label}</Label>
            {children}
        </div>
    )
}