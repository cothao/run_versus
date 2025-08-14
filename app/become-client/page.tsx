import Image from "next/image"
import Link from "next/link"
import {ContactForm} from "@/components/contact-form"
import Header from "@/components/ui/header"
import Footer from "@/components/ui/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header/>

      {/* Main Content */}
      <main className="flex-grow py-8 px-4 md:px-8">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-[#282041] mb-8">Become a Client</h1>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left side - placeholder for image */}
            <div className="bg-gray-100 min-h-[400px] md:min-h-[600px]">
            <Image
    src="/lady-smiling-on-phone.jpg" // Replace with your actual image path
    alt="Client banner"
    width={700} // Adjust as needed
    height={600} // Adjust as needed
    className="object-contain rounded"
  />
            </div>

            {/* Right side - contact form */}
            <ContactForm />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer/>
    </div>
  )
}
