interface IInstructionStepProps {
    step: string;
    index: number;
}

export const InstructionStep = ({ step, index }: IInstructionStepProps) => {
    return (
        <div className="flex">
            <div className="w-8 h-8 mr-4 mt-1 flex-shrink-0 flex items-center justify-center rounded-full bg-[#4b5563] text-white">{index}</div>
            <p className="text-[#374151]">{step}</p>
        </div>
    )
}