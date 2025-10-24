import { Link } from "react-router"

interface BreadcrumbLinkProps {
    text: string;
    linkTo: string;
}

export const BreadcrumbLink = ({ text, linkTo }: BreadcrumbLinkProps) => {
    return (
        <Link to={linkTo} className="hover:text-[#374151]">
            {text}
        </Link>
    )
}