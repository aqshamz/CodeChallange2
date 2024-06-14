"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function Header(){
    return (
        <header className=" text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                <Image src="/RedbullLogo.png" alt="Redbull Logo" width={60} height={60} className="w-50 h-auto md:w-16" />
                </div>
                <nav className="flex space-x-4 p-2 rounded-md bg-gray-700">
                    <Link href="/">
                        <button className="p-2 rounded hover:bg-gray-600 hover:text-white transition duration-300">Home</button>
                    </Link>
                    <Link href="/aboutus">
                        <button className="p-2 rounded hover:bg-gray-600 hover:text-white transition duration-300">About Us</button>
                    </Link>
                    <Link href="/cars">
                        <button className="p-2 rounded hover:bg-gray-600 hover:text-white transition duration-300">Cars</button>
                    </Link>
                    <Link href="/crews">
                        <button className="p-2 rounded hover:bg-gray-600 hover:text-white transition duration-300">Crews</button>
                    </Link>
                </nav>
            </div>
            </header>
    )
}

