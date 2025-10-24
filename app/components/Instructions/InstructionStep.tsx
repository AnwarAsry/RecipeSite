import { NumberStepLabel } from "../RecipePageComp/NumberStepLabel";

interface IInstructionStepProps {
    step: string;
    index: number;
}

export const InstructionStep = ({ step, index }: IInstructionStepProps) => {
    return (
        <div className="flex">
            <NumberStepLabel index={index} />
            <p className="text-[#374151]">{step}</p>
        </div>
    )
}