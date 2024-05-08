"use client"
import { countries } from "@/data"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

const CountryDetail = ({ params }) => {
    const router = useRouter();

    const countryDetail = countries.filter((c) => c.id === Number(params.countryId));

    return (
        <div className="container px-3 mx-auto mt-20 flex flex-col gap-20 sm:px-0 h-screen">
            <div>
                <button onClick={() => router.back()} className="flex items-center gap-1 cursor-pointer border border-gray-400 p-1 rounded-lg dark:text-white">
                    <ArrowLeft size={20} />
                    Back
                </button>
            </div>
            <div className="flex flex-col items-start gap-10 md:gap-20 md:flex-col md:items-start lg:gap-20 lg:flex-row lg:items-center xl:gap-32 dark:text-white">
                <div className="">
                    <Image src={countryDetail[0].img} alt="germany" width={600} height={300} className="rounded-xl" />
                </div>
                <div className="flex flex-col gap-5 sm:gap-10 sm:flex-row">
                    <div className="flex flex-col gap-2">
                        <p className="font-light text-sm xl:text-lg"><span className="font-medium mr-2 text-sm xl:text-lg dark:text-white">Native Name:</span>{countryDetail[0].name}</p>
                        <p className="font-light text-sm xl:text-lg"><span className="font-medium mr-2 text-sm xl:text-lg">Population:</span>{countryDetail[0].population}</p>
                        <p className="font-light text-sm xl:text-lg"><span className="font-medium mr-2 text-sm xl:text-lg">Region:</span>{countryDetail[0].region}</p>
                        <p className="font-light text-sm xl:text-lg"><span className="font-medium mr-2 text-sm xl:text-lg">Sub Region:</span>Western Europe</p>
                        <p className="font-light text-sm xl:text-lg"><span className="font-medium mr-2 text-sm xl:text-lg">Capital:</span>{countryDetail[0].capital}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="font-light text-sm xl:text-lg"><span className="font-medium mr-2 text-sm xl:text-lg">Top Level Domain:</span>.be</p>
                        <p className="font-light text-sm xl:text-lg"><span className="font-medium mr-2 text-sm xl:text-lg">Currencies:</span>Euro</p>
                        <p className="font-light text-sm xl:text-lg"><span className="font-medium mr-2 text-sm xl:text-lg">Languages:</span>English, French, German</p>
                        <div className="flex item-center font-light text-sm xl:text-lg">
                            <span className="font-medium mr-2 text-sm xl:text-lg">Border countries:</span>
                            <div className="flex items-center gap-4">
                                <span className="border border-gray-300 p-1 rounded-lg text-sm">France</span>
                                <span className="border border-gray-300 p-1 rounded-lg text-sm">Germany</span>
                                <span className="border border-gray-300 p-1 rounded-lg text-sm">Netherlands</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountryDetail