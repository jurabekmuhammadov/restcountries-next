"use client"
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import useCountryDetails from "@/hooks/useCountryDetail";
import "../../../style/detail-img.css"

interface CountryDetailsProps {
    params: {
        countryName: string;
    };
}

const CountryDetail = ({ params }: CountryDetailsProps) => {
    const router = useRouter();
    const { country } = useCountryDetails(params.countryName);

    if (!country) {
        return <div>Country not found</div>;
    }

    return (
        <div className="container px-3 mx-auto mt-20 flex flex-col gap-20 sm:px-0 h-screen">
            <div>
                <button onClick={() => router.back()} className="flex items-center gap-1 py-2.5 px-3 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-xl border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    <ArrowLeft size={20} />
                    Back
                </button>

            </div>
            <div className="flex flex-col items-start gap-10 md:gap-20 md:flex-col md:items-start lg:gap-20 lg:flex-row lg:items-center xl:gap-32 dark:text-white">
                <div className="detail-image-container">
                    <Image src={country.flags.svg} alt="germany" width={600} height={350} className="rounded-xl detail-image" />
                </div>
                <div className="flex flex-col gap-5 sm:gap-10 sm:flex-row">
                    <div className="flex flex-col gap-2">
                        <p className="font-light text-sm xl:text-lg"><span className="font-medium mr-2 text-sm xl:text-lg dark:text-white">Native Name:</span>{country.name.official}</p>
                        <p className="font-light text-sm xl:text-lg"><span className="font-medium mr-2 text-sm xl:text-lg">Population:</span>{country.population}</p>
                        <p className="font-light text-sm xl:text-lg"><span className="font-medium mr-2 text-sm xl:text-lg">Region:</span>{country.region}</p>
                        <p className="font-light text-sm xl:text-lg"><span className="font-medium mr-2 text-sm xl:text-lg">Sub Region:</span>Western Europe</p>
                        <p className="font-light text-sm xl:text-lg"><span className="font-medium mr-2 text-sm xl:text-lg">Capital:</span>{country.capital}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="font-light text-sm xl:text-lg"><span className="font-medium mr-2 text-sm xl:text-lg">Top Level Domain:</span>{country.tld[0]}</p>
                        <p className="font-light text-sm xl:text-lg"><span className="font-medium mr-2 text-sm xl:text-lg">Area:</span>{country.area} km2</p>
                        <p className="font-light text-sm xl:text-lg"><span className="font-medium mr-2 text-sm xl:text-lg">Languages:</span>{country.languages.ron}</p>
                        {country.borders ? (
                            <div className="flex flex-col item-center font-light text-sm xl:text-lg">
                                <span className="font-medium mr-2 text-sm xl:text-lg">Border countries:</span>
                                <div className="grid grid-cols-6 gap-2 mt-1">
                                    {
                                        country.borders.map((b, i) => (
                                            <span key={i} className="border border-gray-300 p-1 rounded-lg text-sm">{b}</span>

                                        ))
                                    }
                                </div>
                            </div>
                        ) : (
                            <div className="flex item-center font-light text-sm xl:text-lg">
                                <span className="font-medium mr-2 text-sm xl:text-lg">Border countries:</span>
                                <span className="border border-gray-300 p-1 rounded-lg text-sm">No borders</span>
                            </div>
                        )}
                        <p className="font-light text-sm xl:text-lg"><span className="font-medium mr-2 text-sm xl:text-lg">Independent:</span>{country.independent ? "True" : "False"}</p>
                    </div>
                </div>
            </div>
        </div >
    )
};

export default CountryDetail;
