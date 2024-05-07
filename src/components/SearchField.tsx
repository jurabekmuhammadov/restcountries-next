import { Search } from "lucide-react"

const SearchField = () => {
    return (
        <div className="relative w-full sm:w-3/6 md:w-3/6 lg:w-2/6">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <Search size={18} />
            </div>
            <input type="text" id="email-address-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search country..." />
        </div>
    )
}

export default SearchField