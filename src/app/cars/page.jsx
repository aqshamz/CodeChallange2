import { getCars } from '@/api/cars'
import CarsCard from '@/components/CarsCard.jsx';


export default async function Cars(){
    const cars = await getCars();

    return (
        <>
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Cars</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {cars.map(car => (
                    <CarsCard key={car.sys.id} car={car}/>
                ))}
                </div>
            </div>
        </>
    )
}