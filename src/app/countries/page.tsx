// "use client"
// import Card from "@/components/Card";
// import FilterField from "@/components/FilterField";
// import SearchField from "@/components/SearchField";
// import useAllCountries from "@/hooks/useAllCountries";
// import { useState } from "react";

// export default function Countries() {
//     const countries = useAllCountries();
//     const [searchQuery, setSearchQuery] = useState("");
//     const [filter, setFilter] = useState("all");

//     const filteredCountries = countries.filter((country) =>
//         country.name.common.toLowerCase().includes(searchQuery.toLowerCase().trim()) &&
//         (filter === "all" || country.region.toLowerCase() === filter.toLowerCase().trim())
//     );

//     const handleFilterChange = (selectedFilter: any) => {
//         setFilter(selectedFilter);
//     };

//     const handleSearchChange = (event: any) => {
//         setSearchQuery(event.target.value);
//     };


//     return (
//         <section className="px-3 mt-12 container mx-auto sm:px-0 w-full pb-12" >
//             <div className="w-full flex flex-col items-center justify-center gap-2 sm:flex sm:flex-row sm:justify-between sm:items-center">
//                 <SearchField value={searchQuery} onChange={handleSearchChange} />
//                 <FilterField onChange={handleFilterChange} />
//             </div>
//             <div className="mt-12 grid grid-cols-2 gap-5 xl:grid xl:grid-cols-4 xl:gap-14 sm:grid sm:grid-cols-2 sm:gap-5 md:grid md:grid-cols-3 md:gap-5 lg:grid lg:grid-cols-4 lg:gap-5">
//                 {filteredCountries.map((c) => (
//                     <Card key={c.name.common} params={{ img: c.flags.svg, commonName: c.name.common, population: c.population, region: c.region, capital: c.capital }} />
//                 ))}
//             </div>
//         </section>
//     );
// }

"use client"
import React, { useState } from "react";
import Card from "@/components/Card";
import FilterField from "@/components/FilterField";
import SearchField from "@/components/SearchField";
import useAllCountries from "@/hooks/useAllCountries";

export default function Countries() {
    const countries = useAllCountries();
    const [searchQuery, setSearchQuery] = useState("");
    const [filter, setFilter] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12; // Number of items per page

    // Filtered and paginated countries
    const filteredCountries = countries.filter((country) =>
        country.name.common.toLowerCase().includes(searchQuery.toLowerCase().trim()) &&
        (filter === "all" || country.region.toLowerCase() === filter.toLowerCase().trim())
    );

    const totalItems = filteredCountries.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // Calculate start and end indexes for current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

    const handleFilterChange = (selectedFilter: string) => {
        setFilter(selectedFilter);
        setCurrentPage(1); // Reset to first page when filter changes
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSearchQuery(event.target.value);
        setCurrentPage(1); // Reset to first page when search query changes
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };
    const renderPagination = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
        }

        const maxPagesToShow = 5; // Maximum number of pages to show in pagination

        return (
            <div className="flex justify-center mt-4">
                <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className="px-3 py-1 mr-2 bg-gray-200 rounded-md"
                >
                    Previous
                </button>
                {pageNumbers.map((pageNumber) => {
                    if (pageNumber === currentPage) {
                        return (
                            <button
                                key={pageNumber}
                                onClick={() => setCurrentPage(pageNumber)}
                                className="px-3 py-1 mr-2 bg-gray-400 rounded-md"
                            >
                                {pageNumber}
                            </button>
                        );
                    } else if (
                        pageNumber >= currentPage - Math.floor(maxPagesToShow / 2) &&
                        pageNumber <= currentPage + Math.floor(maxPagesToShow / 2)
                    ) {
                        return (
                            <button
                                key={pageNumber}
                                onClick={() => setCurrentPage(pageNumber)}
                                className="px-3 py-1 mr-2 bg-gray-200 rounded-md"
                            >
                                {pageNumber}
                            </button>
                        );
                    } else if (
                        pageNumber === totalPages ||
                        pageNumber === 1 ||
                        (pageNumber === currentPage - Math.ceil(maxPagesToShow / 2) && currentPage - Math.floor(maxPagesToShow / 2) > 1) ||
                        (pageNumber === currentPage + Math.ceil(maxPagesToShow / 2) && currentPage + Math.floor(maxPagesToShow / 2) < totalPages)
                    ) {
                        return (
                            <button
                                key={pageNumber}
                                onClick={() => setCurrentPage(pageNumber)}
                                className="px-3 py-1 mr-2 bg-gray-200 rounded-md"
                            >
                                ...
                            </button>
                        );
                    }
                    return null;
                })}
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 bg-gray-200 rounded-md"
                >
                    Next
                </button>
            </div>
        );
    };
    // const renderPagination = () => {
    //     const pageNumbers = [];
    //     const maxPagesToShow = 5; // Maximum number of pages to show in pagination

    //     let startPage, endPage;
    //     if (totalPages <= maxPagesToShow) {
    //         startPage = 1;
    //         endPage = totalPages;
    //     } else {
    //         const maxPagesBeforeCurrentPage = Math.floor(maxPagesToShow / 2);
    //         const maxPagesAfterCurrentPage = Math.ceil(maxPagesToShow / 2) - 1;

    //         if (currentPage <= maxPagesBeforeCurrentPage) {
    //             startPage = 1;
    //             endPage = maxPagesToShow;
    //         } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
    //             startPage = totalPages - maxPagesToShow + 1;
    //             endPage = totalPages;
    //         } else {
    //             startPage = currentPage - maxPagesBeforeCurrentPage;
    //             endPage = currentPage + maxPagesAfterCurrentPage;
    //         }
    //     }

    //     for (let i = startPage; i <= endPage; i++) {
    //         pageNumbers.push(i);
    //     }

    //     return (
    //         <div className="flex justify-center mt-4">
    //             <button
    //                 onClick={handlePrevPage}
    //                 disabled={currentPage === 1}
    //                 className="px-3 py-1 mr-2 bg-gray-200 rounded-md"
    //             >
    //                 Previous
    //             </button>
    //             {startPage > 1 && (
    //                 <button
    //                     onClick={() => setCurrentPage(1)}
    //                     className="px-3 py-1 mr-2 bg-gray-200 rounded-md"
    //                 >
    //                     1
    //                 </button>
    //             )}
    //             {startPage > 2 && (
    //                 <button
    //                     disabled
    //                     className="px-3 py-1 mr-2 bg-gray-200 rounded-md"
    //                 >
    //                     ...
    //                 </button>
    //             )}
    //             {pageNumbers.map((pageNumber) => (
    //                 <button
    //                     key={pageNumber}
    //                     onClick={() => setCurrentPage(pageNumber)}
    //                     className={`px-3 py-1 mr-2 ${pageNumber === currentPage ? 'bg-gray-400' : 'bg-gray-200'} rounded-md`}
    //                 >
    //                     {pageNumber}
    //                 </button>
    //             ))}
    //             {endPage < totalPages - 1 && (
    //                 <button
    //                     disabled
    //                     className="px-3 py-1 mr-2 bg-gray-200 rounded-md"
    //                 >
    //                     ...
    //                 </button>
    //             )}
    //             {endPage < totalPages && (
    //                 <button
    //                     onClick={() => setCurrentPage(totalPages)}
    //                     className="px-3 py-1 mr-2 bg-gray-200 rounded-md"
    //                 >
    //                     {totalPages}
    //                 </button>
    //             )}
    //             <button
    //                 onClick={handleNextPage}
    //                 disabled={currentPage === totalPages}
    //                 className="px-3 py-1 bg-gray-200 rounded-md"
    //             >
    //                 Next
    //             </button>
    //         </div>
    //     );
    // };

    return (
        <section className="px-3 mt-12 container mx-auto sm:px-0 w-full pb-12">
            <div className="w-full flex flex-col items-center justify-center gap-2 sm:flex sm:flex-row sm:justify-between sm:items-center">
                <SearchField value={searchQuery} onChange={handleSearchChange} />
                <FilterField onChange={handleFilterChange} />
            </div>
            <div className="mt-12 grid grid-cols-2 gap-5 xl:grid xl:grid-cols-4 xl:gap-14 sm:grid sm:grid-cols-2 sm:gap-5 md:grid md:grid-cols-3 md:gap-5 lg:grid lg:grid-cols-4 lg:gap-5">
                {filteredCountries.slice(startIndex, endIndex).map((country) => (
                    <Card key={country.name.common} params={{ img: country.flags.svg, commonName: country.name.common, population: country.population, region: country.region, capital: country.capital }} />
                ))}
            </div>
            {renderPagination()}
        </section>
    );
}
