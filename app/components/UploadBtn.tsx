import { IoMdAdd } from "react-icons/io"
import { Link } from "react-router";

export const UploadBtn = () => {
    return (
        <Link
            to="/new"
            className="w-fit px-6 py-3 flex gap-2 items-center justify-center rounded-full bg-white cursor-pointer"
        >
            <IoMdAdd className="size-6" />
            <span>Add recipe</span>
        </Link>
    )
}