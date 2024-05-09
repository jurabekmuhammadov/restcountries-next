import { useEffect, useState } from "react";
import axios from "axios";

interface Country {
    name: {
        common: string;
        official: string;
    };
    population: number;
    region: string;
    capital: string;
    flags: {
        svg: string;
    };
    tld: string[];
    area: number,
    languages: {
        ron: string;
    };
    borders: string[];
    independent: boolean;
}

const useCountryDetails = (countryName: string) => {
    console.log(countryName);

    const [country, setCountry] = useState<Country | null>(null);

    useEffect(() => {
        const fetchCountryDetails = async () => {
            try {
                const response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`);
                if (response.data.length > 0) {
                    setCountry(response.data[0]);
                } else {
                    setCountry(null);
                }
            } catch (error) {
                console.log(error);
                setCountry(null);
            }
        };

        fetchCountryDetails();
    }, [countryName]);

    const formatCountryName = (name: string) => {
        return name.toLowerCase().replace(/\s+/g, "-");
    };

    const formattedCountryName = formatCountryName(countryName);

    return { country, formattedCountryName };
};

export default useCountryDetails;
