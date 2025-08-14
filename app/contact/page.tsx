import Image from "next/image"
import Link from "next/link"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { JobSection } from "@/components/job-section"
import { MainNav } from "@/components/main-nav"
import Footer from "@/components/ui/footer"
import Header from "@/components/ui/header"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <Header/>

      {/* Main content */}
      <main className="flex-1">
        {/* Hero section */}
        <section className="py-12 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get in touch with our team to discuss your recruitment needs.
          </p>
        </section>

        {/* Contact section */}
        <section className="container mx-auto px-4 pb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <ContactForm />
            <ContactInfo />
          </div>
        </section>

        {/* Job seeker section */}
        <section className="container mx-auto px-4 pb-16">
          <JobSection />
        </section>

        {/* CTA section */}
        <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-[#282041] mb-4">Ready to Find Your Perfect Match?</h2>
          <p className="text-gray-700 mb-8">
            Whether you're looking to hire top talent or find your dream job, we're here to help you succeed.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/become-client" className="bg-[#282041] text-white px-6 py-3 rounded-md font-medium">
              I'm an Employer
            </Link>
            <Link
              href="/job-listings"
              className="bg-transparent border border-[#282041] text-[#282041] px-6 py-3 rounded-md font-medium"
            >
              I'm a Job Seeker
            </Link>
          </div>
        </div>
      </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
