import Image from "next/image"
import Link from "next/link"

interface CardProps {
    params: {
        id: number,
        img: string,
        population: string,
        region: string,
        capital: string,
        name: string,
    }
}
const Card = ({ params }: CardProps) => {
    const { img, id, population, region, capital, name } = params;

    return (
        <Link href={`/countries/${id}`} key={id} className="bg-white flex flex-col items-start justify-start rounded-lg overflow-hidden cursor-pointer dark:bg-slate-800 dark:text-white">
            <Image alt={img} src={img} width={400} height={200} className="" />
            <div className="px-4 mt-4 pb-8 xl:px-6 xl:mt-6 xl:pb-11">
                <h3 className="font-bold sm:text-lg md:text-xl">{name}</h3>
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