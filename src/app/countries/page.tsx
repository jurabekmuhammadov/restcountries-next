"use client"
import React, { useState } from "react";
import Card from "@/components/Card";
import FilterField from "@/components/FilterField";
import SearchField from "@/components/SearchField";
import useAllCountries from "@/hooks/useAllCountries";
import Pagination from "@/components/Pagination";

export default function Countries() {
    const countries = useAllCountries();
    const [searchQuery, setSearchQuery] = useState("");
    const [filter, setFilter] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    const filteredCountries = countries.filter((country) =>
        country.name.common
            .toLowerCase()
            .includes(searchQuery.toLowerCase().trim()) &&
        (filter === "all" ||
            country.region.toLowerCase() === filter.toLowerCase().trim())
    );

    const totalItems = filteredCountries.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

    const handleFilterChange = (selectedFilter: string) => {
        setFilter(selectedFilter);
        setCurrentPage(1);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSearchQuery(event.target.value);
        setCurrentPage(1);
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const handlePageSelect = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    return (
        <section className="px-3 mt-12 container mx-auto sm:px-0 w-full pb-12">
            <div className="w-full flex flex-col items-center justify-center gap-2 sm:flex sm:flex-row sm:justify-between sm:items-center">
                <SearchField value={searchQuery} onChange={handleSearchChange} />
                <FilterField onChange={handleFilterChange} />
            </div>
            <div className="mt-12 grid grid-cols-2 gap-5 xl:grid xl:grid-cols-4 xl:gap-14 sm:grid sm:grid-cols-2 sm:gap-5 md:grid md:grid-cols-3 md:gap-5 lg:grid lg:grid-cols-4 lg:gap-5">
                {filteredCountries.slice(startIndex, endIndex).map((country) => (
                    <Card
                        key={country.name.common}
                        params={{
                            img: country.flags.svg,
                            commonName: country.name.common,
                            population: country.population,
                            region: country.region,
                            capital: country.capital,
                        }}
                    />
                ))}
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onNextPage={handleNextPage}
                onPrevPage={handlePrevPage}
                onPageSelect={handlePageSelect}
                itemsPerPage={itemsPerPage}
                totalItems={totalItems}
            />
        </section>
    );
}

