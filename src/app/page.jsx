// import { createClient } from "contentful";
import Image from "next/image";
import CarsCard from '@/components/CarsCard.jsx';
import { getCars } from '@/api/cars'

export default async function Home() {
  const cars = await getCars();

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen bg-gray-900 text-white flex items-center">
        <Image
          src="/RBBG-enchance.png"
          alt="Redbull BG"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50 z-10"></div>
        <div className="container mx-auto relative z-20">
          <div className="max-w-xl text-left">
            <h1 className="text-4xl font-bold mb-4">Oracle Redbull Racing Team</h1>
            <p className="text-lg italic mb-2">"Our mission is simple – to win and to do it differently."</p>
            <p className="text-lg mb-2">6-time Constructor Championship</p>
            <p className="text-lg">7-time Driver Championship</p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className=" py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">About Us</h2>
          <p className="text-lg mb-8">Born from Red Bull founder Dietrich Mateschitz’s desire to disrupt the status quo in F1 and to bring back the swashbuckling spirit of grand prix racing’s golden age, the Team established itself as a maverick force that played hard off track but worked even harder on it. And with Christian Horner as the sport’s youngest team principal, Red Bull Racing made an immediate impression.</p>
          {/* <Link href="/about"> */}
            <a className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition duration-300">Read More</a>
          {/* </Link> */}
        </div>
      </section>

      {/* Products or Services */}
      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Cars</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map(car => (
            <CarsCard key={car.sys.id} car={car}/>
          ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className=" py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Testimonials</h2>
          <div className="grid grid-cols-3 gap-8">
            {/* Testimonial Cards */}
            <div className="bg-gray-600 p-6 rounded-lg shadow-md">
              <div className="w-full h-48 bg-gray-200 mb-4"></div>
              <p className="text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed magna quis lorem gravida rhoncus.</p>
            </div>
            {/* Repeat testimonial cards for other testimonials */}
          </div>
        </div>
      </section>
    </>
  );
}
