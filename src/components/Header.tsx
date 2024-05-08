"use client"
import { Moon, Sun } from "lucide-react"
import Link from "next/link";
import { useState } from "react";
import { Dispatch, SetStateAction } from "react";

interface HeaderProps {
    isDark: boolean,
    setIsDark: Dispatch<SetStateAction<boolean>>
}

const Header = ({ isDark, setIsDark }: HeaderProps) => {
    return (
        <header className="bg-white px-3 py-4 border-b border-gray-300 sm:px-0 sm:py-6 dark:bg-slate-800 dark:text-white dark:border-gray-600">
            <div className="container mx-auto flex items-center justify-between">
                <Link href={"/"} className="text-lg font-bold sm:text-2xl">Where in the World?</Link>
                <button className="flex items-center gap-2 dark:text-white" onClick={() => setIsDark(!isDark)}>
                    {isDark ? (
                        <>
                            <Sun className="text-black dark:text-white h-7 w-7" />
                            <span className="font-medium hidden sm:block">Light Mode</span>
                        </>
                    ) : (
                        <>
                            <Moon className="text-black dark:text-white h-7 w-7" />
                            <span className="font-medium hidden sm:block">Dark Mode</span>
                        </>
                    )}
                </button>
            </div>
        </header>
    )
}

export default Header