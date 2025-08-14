import Image from "next/image"
import Link from "next/link"

export default function NavBar()
{
    return (
        <nav className="bg-white text-black">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/Stationery Cut - Transparent.png"
              alt="LotusLynx Logo"
              width={160}
              height={80}
              className="h-10"
            />
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/job-listings" className="hover:text-[#282041]/80">
              Job List
            </Link>
            <Link href="./services" className="hover:text-[#282041]/80">
              Services
            </Link>
            <Link href="/about-us" className="hover:text-[#282041]/80">
              About
            </Link>
            <Link href="/contact" className="hover:text-[#282041]/80">
              Contact
            </Link>
            <Link href="/become-client" className="bg-[#282041] text-white px-4 py-2 rounded hover:bg-[#282041]/90">
              Become a Client
            </Link>
          </div>
        </div>
      </nav>
    )
}