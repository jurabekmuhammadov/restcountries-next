"use client"
import { Moon, Sun } from "lucide-react"
import { useState } from "react";

const Header = () => {
    const [isDark, setIsDark] = useState(false);
    return (
        <header className="bg-white px-3 py-4 border-b border-gray-300 sm:px-0 sm:py-6">
            <div className="container mx-auto flex items-center justify-between">
                <h1 className="text-lg font-bold sm:text-2xl">Where in the World?</h1>
                <button className="flex items-center gap-2" onClick={() => setIsDark(!isDark)}>
                    {isDark ? (
                        <>
                            <Sun className="text-black h-7 w-7" />
                            <span className="font-medium hidden sm:block">Light Mode</span>
                        </>
                    ) : (
                        <>
                            <Moon className="text-black h-7 w-7" />
                            <span className="font-medium hidden sm:block">Dark Mode</span>
                        </>
                    )}
                </button>
            </div>
        </header>
    )
}

export default Header