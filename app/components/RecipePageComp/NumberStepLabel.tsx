export const NumberStepLabel = ({ index }: { index: number }) => {
    return (
        <div className="w-8 h-8 mr-4 mt-1 flex-shrink-0 flex items-center justify-center rounded-full font-semibold text-sm text-white bg-[#4b5563]">
            {index}
        </div>
    )
}