import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';

export default function CarsCard({ car }){
    const {title, slug, thumbnail, info, worldChampion} = car.fields;
    // console.log(worldChampion)
    return (
        <div className="bg-gray-600 p-6 rounded-lg shadow-md relative">
            <div className="w-full h-48 bg-gray-200 mb-4 relative">
            <Image
                src={`https:${thumbnail.fields.file.url}`} // Replace with your actual image path
                alt="Car Image"
                layout="fill"
                objectFit="cover"
                className="rounded"
            />
            </div>
            {worldChampion && (
                <div className="absolute top-1 left-1 bg-red-600 text-white px-1 py-0.5 rounded-lg text-xs flex items-center">
                    <FontAwesomeIcon icon={faTrophy} /> World Champion
                </div>
            )}            
            <h3 className="text-2xl font-bold mb-3 text-center">{title}</h3>
            <ul className="text-lg mb-4">
            {info.map(infos => (
                <li><strong>{infos}</strong></li>            
            ))}
            </ul>
            {/* <Link href="/products"> */}
            <a className="inline-block bg-gray-800 text-gray-400 px-6 py-2 rounded-full hover:bg-gray-700 transition duration-300">Details</a>
            {/* </Link> */}
        </div>
    );
}