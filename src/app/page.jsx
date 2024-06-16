import { getDriver } from "@/api/driver";
import Image from "next/image";
import DriverCard from '@/components/DriverCard';
import Link from 'next/link';

export default async function Home() {
  const driver = await getDriver();

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
            <p className="text-lg italic mb-2">&quot;Our mission is simple – to win and to do it differently.&quot;</p>
            <p className="text-lg mb-2">6-time Constructor Championship</p>
            <p className="text-lg">7-time Driver Championship</p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className=" py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Who We Are</h2>
          <p className="text-lg mb-8">
            Oracle Red Bull Racing is a premier Formula 1 team renowned for its competitive spirit and innovative engineering. 
            Based in Milton Keynes, England, the team has achieved significant success since its debut in 2005. 
            With a strong partnership with Oracle and a commitment to pushing technological boundaries, Red Bull Racing has secured multiple Constructors&apos; and Drivers&apos; Championships. 
            The team&apos;s dynamic driver lineup, including stars like Max Verstappen, continues to captivate fans and maintain Red Bull Racing&apos;s position at the forefront of the Formula 1 grid.
          </p>
          <Link href="/aboutus">
            <button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition duration-300">Learn More</button>
          </Link>
        </div>
      </section>

      {/* Products or Services */}
      <section className="relative h-screen bg-gray-900 text-white flex items-center">
        <Image
          src="/TeamPhoto.png"
          alt="Redbull Team"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50 z-10"></div>
        <div className="container mx-auto relative z-20 h-full">
          <div className="absolute top-4 left-4 flex items-center mb-4">
            <Image src="/f1logonobg.png" width={40} height={40} alt="F1 Logo" />
            <h1 className="text-4xl font-bold ml-2">2024 Season</h1>
          </div>
          <div className="absolute top-20 left-4 flex flex-wrap text-sm space-x-2">
            <span>RB20 Car</span>
            <span>9 Races</span>
            <span>6 Wins</span>
            <span>11 Podiums</span>
            <span>7 Poles</span>
          </div>
          <div className="absolute bottom-4 left-4 flex items-center">
            <Image src="/Mexico.png" width={30} height={20} alt="Mexico Flag" />
            <span className="ml-2 text-lg">Sergio Perez</span>
          </div>
          <div className="absolute bottom-4 right-4 flex items-center">
            <span className="mr-2 text-lg">Max Verstappen</span>
            <Image src="/Netherland.png" width={30} height={20} alt="Netherlands Flag" />
          </div>
        </div>
      </section>

      {/* Notable Drivers */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Notable Drivers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {driver.map(driver => (
              <DriverCard key={driver.sys.id} driver={driver}/>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
