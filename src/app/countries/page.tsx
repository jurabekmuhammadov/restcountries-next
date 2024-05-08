"use client"
import FilterField from "@/components/FilterField";
import SearchField from "@/components/SearchField";
import { countries } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Countries() {
    const router = useRouter()
    return (
        <section className="px-3 mt-12 container mx-auto sm:px-0 w-full pb-12">
            <div className="w-full flex flex-col items-center justify-center gap-2 sm:flex sm:flex-row sm:justify-between sm:items-center">
                <SearchField />
                <FilterField />
            </div>
            <div className="mt-12 grid grid-cols-2 gap-10 xl:grid xl:grid-cols-4 xl:gap-14 sm:grid sm:grid-cols-2 sm:gap-10 md:grid md:grid-cols-3 md:gap-10 lg:grid lg:grid-cols-4 lg:gap-10">
                {countries.map((c, i) => (
                    <Link href={`/countries/${c.id}`} key={i} className="bg-white flex flex-col items-start justify-start rounded-lg overflow-hidden cursor-pointer dark:bg-slate-800 dark:text-white">
                        <Image alt={c.img} src={c.img} width={400} height={200} className="" />
                        <div className="px-4 mt-4 pb-8 xl:px-6 xl:mt-6 xl:pb-11">
                            <h3 className="font-bold sm:text-lg md:text-xl">{c.name}</h3>
                            <div className="flex flex-col gap-1 mt-4">
                                <p className="text-sm xl:text-lg"><span className="font-bold mr-2 text-sm xl:text-lg">Population:</span>{c.population}</p>
                                <p className="text-sm xl:text-lg"><span className="font-bold mr-2 text-sm xl:text-lg">Region:</span>{c.region}</p>
                                <p className="text-sm xl:text-lg"><span className="font-bold mr-2 text-sm xl:text-lg">Capital:</span>{c.capital}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
