import { getCars } from '@/api/cars'
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';


export default async function Page({ params }){
    const car = await getCars(params.slug);
    const {title, detailBg, featuredImage, info, specs, worldChampion, description, driver} = car.fields;   
    return(
        <>
            <section className="relative h-screen bg-gray-900 text-white flex items-center">
                <Image
                    src={`https:${detailBg.fields.file.url}`}
                    alt="Car Detail Background"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    className="z-0"
                />
                {worldChampion && (
                    <div className="absolute top-1 left-1 bg-red-600 text-white px-1 py-0.5 rounded-lg text-lg flex items-center">
                        <FontAwesomeIcon icon={faTrophy} /> World Champion
                    </div>
                )}
                <div className="absolute inset-0 bg-gray-900 bg-opacity-50 z-10"></div>
                <div className="container mx-auto relative z-20">
                    <div className="max-w-xl text-left">
                        <h4 className="text-4xl font-bold mb-4">{title}</h4>
                        <ul className="text-lg mb-2">
                            {info.map((infos, index) => (
                                <li key={index}><strong>{infos}</strong></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className="bg-gray-800 py-20">
                <div className="container mx-auto text-center">
                    <p className="text-lg">
                        {description}
                    </p>
                </div>
            </section>

            <section className="py-20 bg-gray-900 text-white">
                <div className="container mx-auto flex flex-wrap items-start">
                    <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                        <Image
                            src={`https:${featuredImage.fields.file.url}`}
                            alt="Featured Image"
                            width={600}
                            height={400}
                            className="rounded-lg"
                        />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <h4 className="text-center font-bold mb-2">Specification</h4>
                        <div className="grid grid-cols-2 gap-4">
                            {specs.map((spec, index) => (
                                <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-md">
                                    <p className="text-base">{spec}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-800 text-white">
                <div className="container mx-auto text-center">
                    <h4 className="text-3xl font-bold mb-8">Drivers</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                        {driver.map((drv, index) => (
                            <div key={index} className="bg-gray-900 p-4 rounded-lg shadow-md">
                                <p className="text-base">{drv}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


        </>
    )

}