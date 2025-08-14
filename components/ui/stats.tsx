import Image from "next/image"
import Link from "next/link"
import { Phone } from "lucide-react"
import NavBar from "./navbar"


export default function Stats()
{
    return (
        <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <h3 className="text-3xl md:text-4xl font-bold text-[#282041]">5,000+</h3>
              <p className="text-sm text-gray-600">Placements Made</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl md:text-4xl font-bold text-[#282041]">1,200+</h3>
              <p className="text-sm text-gray-600">Client Companies</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl md:text-4xl font-bold text-[#282041]">98%</h3>
              <p className="text-sm text-gray-600">Client Satisfaction</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl md:text-4xl font-bold text-[#282041]">24hr</h3>
              <p className="text-sm text-gray-600">Average Response Time</p>
            </div>
          </div>
        </div>
      </section>
    )
}