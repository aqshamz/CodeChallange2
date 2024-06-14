import Image from "next/image";

export default function DriverCard({ driver }){
    const {title, inYear, outYear, championTimes, championYears, photo} = driver.fields;
    // console.log(worldChampion)
    let done = "Present";
    if(outYear){
        done = outYear;
    }
    return (
        <div className="bg-gray-600 p-6 rounded-lg shadow-md flex mb-8">
            <div className="w-1/2 pr-4">
                <div className="w-full h-64 bg-gray-200 relative">
                    <Image
                        src={`https:${photo.fields.file.url}`}
                        alt="Driver Photo"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="top"
                        className="rounded"
                    />
                </div>
            </div>
            <div className="w-1/2">
                <h3 className="text-2xl font-bold mb-3">{title}</h3>
                <p className="text-lg mb-4">{inYear} - {done}</p>
                <p className="text-lg mb-4">{championTimes}x World Champion</p>
                <ul className="text-lg mb-4">
                    {championYears.map((year, index) => (
                        <li key={index}><strong>{year}</strong></li>
                    ))}
                </ul>
            </div>
        </div>
    );
}