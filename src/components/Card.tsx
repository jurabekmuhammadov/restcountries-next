import Image from "next/image"
import Link from "next/link"

interface CardProps {
    params: {
        img: string,
        population: number,
        region: string,
        capital: string,
        commonName: string,
    }
}
const Card = ({ params }: CardProps) => {
    const { img, population, region, capital, commonName } = params;
    const formatCountryName = (name: string) => {
        return name.toLowerCase().replace(/\s+/g, "-");
    };

    return (
        <Link href={`/countries/${commonName}`} key={commonName} className="bg-white flex flex-col items-start justify-start rounded-lg overflow-hidden cursor-pointer dark:bg-slate-800 dark:text-white">
            <div className="image-container">
                <Image alt={img} src={img} width={384} height={208} className="image w-96 h-52" />
            </div>
            <style jsx>{`
             .image-container {
                width: 400px;
                height: 200px;
                overflow: hidden;
            }
        
            .image {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: center center;
            }
            @media screen and (max-width: 640px){
                .image-container {
                    height: 130px;
                }
            }
            `}</style>
            <div className="px-4 mt-4 pb-8 xl:px-6 xl:mt-6 xl:pb-11">
                <h3 className="font-bold sm:text-lg md:text-xl">{commonName}</h3>
                <div className="flex flex-col gap-1 mt-4">
                    <p className="text-sm xl:text-lg"><span className="font-bold mr-2 text-sm xl:text-lg">Population:</span>{population}</p>
                    <p className="text-sm xl:text-lg"><span className="font-bold mr-2 text-sm xl:text-lg">Region:</span>{region}</p>
                    <p className="text-sm xl:text-lg"><span className="font-bold mr-2 text-sm xl:text-lg">Capital:</span>{capital}</p>
                </div>
            </div>
        </Link>
    )
}

export default Card