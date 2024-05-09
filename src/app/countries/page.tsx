"use client"
import Card from "@/components/Card";
import FilterField from "@/components/FilterField";
import SearchField from "@/components/SearchField";
import useAllCountries from "@/hooks/useAllCountries";

export default function Countries() {
    const countries = useAllCountries();

    return (
        <section className="px-3 mt-12 container mx-auto sm:px-0 w-full pb-12" >
            <div className="w-full flex flex-col items-center justify-center gap-2 sm:flex sm:flex-row sm:justify-between sm:items-center">
                <SearchField />
                <FilterField />
            </div>
            <div className="mt-12 grid grid-cols-2 gap-5 xl:grid xl:grid-cols-4 xl:gap-14 sm:grid sm:grid-cols-2 sm:gap-5 md:grid md:grid-cols-3 md:gap-5 lg:grid lg:grid-cols-4 lg:gap-5">
                {countries.map((c) => (
                    <Card key={c.name.common} params={{ img: c.flags.svg, commonName: c.name.common, population: c.population, region: c.region, capital: c.capital }} />
                ))}
            </div>
        </section>
    );
}
