export const SearchBar = () => {
    return (
        <div className="max-w-2xl mx-auto mb-8 relative">
            <div className="pl-4 absolute inset-y-0 left-0 flex items-center pointer-events-none">
                <svg className="h-4 text-[#9ca3af]" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="magnifying-glass" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                    <path fill="currentColor" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
                </svg>
            </div>
            <input className="w-full pl-12 pr-4 py-4 text-lg border border-[#d1d5db] rounded-xl focus:ring-2 focus:ring-[#6b7280] focus:border-transparent shadow-sm" type="text" name="searchInp" id="searchInp" placeholder="Search for recipes..." />
            <button className="pr-4 absolute inset-y-0 right-0 flex items-center cursor-pointer">
                <span className="px-6 py-2 bg-[#4b5563] hover:bg-[#374151] text-white rounded-lg">Search</span>
            </button>
        </div>
    )
}