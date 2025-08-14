import Image from "next/image"
import Link from "next/link"
import { Phone } from "lucide-react"
import NavBar from "./navbar"


export default function Header()
{
    return (
        <header className="bg-[#282041] text-white border">
        <div className="container mx-auto px-4 py-2 flex justify-end items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4" />
            <span className="text-sm">+1 815-616-7384</span>
          </div>
            <Link href="/sign-in" className="text-sm hover:underline">
            Client Login
            </Link>
        </div>
        <NavBar/>
        </header>
    )
}