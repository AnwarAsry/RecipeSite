interface HeadingThreeProps {
    text: string;
}

export const HeadingThree = ({ text }: HeadingThreeProps) => {
    return (
        <h3 className="mb-6 text-xl text-[#111827]">{text}</h3>
    );
}