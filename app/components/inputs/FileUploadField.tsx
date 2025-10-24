import type { ReactNode } from "react";
import { Label } from "./Label"

interface FileUploadFieldProps {
    id: string;
    label: string;
    icon: ReactNode;
    description: string;
    subtext: string;
    accept: string;
    required?: boolean;
}

export const FileUploadField = ({ id, label, description, subtext, icon, accept, required }: FileUploadFieldProps) => {
    return (
        <div>
            <Label htmlFor={id}>
                {label} {required && <span>*</span>}
            </Label>
            <div className="p-8 border-2 border-dashed border-[#d1d5db] rounded-lg text-center hover:border-[#4b5563] transition-colors cursor-pointer">
                {icon}
                <p className="mb-2 text-[#4b5563]">{description}</p>
                <p className="text-sm text-[#6b7280]">{subtext}</p>
                <input id={id} type="file" className="hidden" accept={accept} />
            </div>
        </div>
    )
}