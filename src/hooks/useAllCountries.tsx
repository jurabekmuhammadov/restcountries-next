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
    currencies: {
        MDL: {
            name: string;
        };
    };
    languages: {
        ron: string;
    };
    borders: string[];
    independent: boolean;
}

const useAllCountries = () => {
    const [countries, setCountries] = useState<Country[]>([]);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await axios.get("https://restcountries.com/v3.1/all");
                setCountries(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchCountries();
    }, []);

    return countries;
};

export default useAllCountries;
