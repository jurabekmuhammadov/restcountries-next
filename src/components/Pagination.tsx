"use client"
import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onNextPage: () => void;
    onPrevPage: () => void;
    onPageSelect: (pageNumber: number) => void;
    itemsPerPage: number;
    totalItems: number;
}

const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onNextPage,
    onPrevPage,
    onPageSelect,
    itemsPerPage,
    totalItems,
}) => {
    const startRange = (currentPage - 1) * itemsPerPage + 1;
    const endRange = Math.min(currentPage * itemsPerPage, totalItems);

    const renderPagination = () => {
        const maxPagesToShow = 5;
        const pageNumbers: any = [];

        if (totalPages <= maxPagesToShow) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            const middle = Math.ceil(maxPagesToShow / 2);
            let startPage = Math.max(currentPage - middle + 1, 1);
            const endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);

            if (endPage - startPage < maxPagesToShow - 1) {
                startPage = Math.max(endPage - maxPagesToShow + 1, 1);
            }

            if (startPage > 1) {
                pageNumbers.push(1);
                if (startPage > 2) {
                    pageNumbers.push(-1);
                }
            }

            for (let i = startPage; i <= endPage; i++) {
                pageNumbers.push(i);
            }

            if (endPage < totalPages) {
                if (endPage < totalPages - 1) {
                    pageNumbers.push(-1);
                }
                pageNumbers.push(totalPages);
            }
        }

        return (
            <div className="flex justify-center">
                <button
                    onClick={onPrevPage}
                    disabled={currentPage === 1}
                    className="px-3 py-1 mr-2 bg-gray-200 rounded-md dark:bg-slate-700 dark:hover:bg-slate-600"
                >
                    {""}
                    <ChevronLeftIcon className="h-5 w-5" />
                </button>
                {pageNumbers.map((pageNumber: number, index: number) => (
                    <React.Fragment key={index}>
                        {pageNumber === -1 ? (
                            <button
                                onClick={() => onPageSelect(pageNumbers[index - 1] + 1)}
                                className="px-3 py-1 mr-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-white"
                            >
                                ...
                            </button>
                        ) : (
                            <button
                                onClick={() => onPageSelect(pageNumber)}
                                className={
                                    currentPage === pageNumber
                                        ? "px-3 py-1 mr-2 bg-indigo-600 text-white rounded-md"
                                        : "px-3 py-1 mr-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-white"
                                }
                            >
                                {pageNumber}
                            </button>
                        )}
                    </React.Fragment>
                ))}
                <button
                    onClick={onNextPage}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 mr-2 bg-gray-200 rounded-md dark:bg-slate-700 dark:hover:bg-slate-600"
                >
                    {""}
                    <ChevronRightIcon className="h-5 w-5" />
                </button>
            </div>
        );
    };

    return (
        <div className="flex items-center gap-3 flex-col xl:justify-between xl:flex-row bg-white p-5 mt-10 rounded-md dark:bg-slate-800">
            <span className="mr-2">Showing {startRange} to {endRange} of {totalItems} results</span>
            {renderPagination()}
        </div>
    );
};

export default Pagination;
