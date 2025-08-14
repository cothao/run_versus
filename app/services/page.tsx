import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Circle } from "lucide-react"
import Header from "@/components/ui/header"
import Footer from "@/components/ui/footer"

const services = [
  "Resume Writing: Crafting compelling resumes that highlight your strengths.",
  "LinkedIn Optimization: Enhancing your online presence to attract opportunities.",
  "Career Coaching: Providing guidance to navigate your career path confidently.",
];

const support = 
[
  "Hiring Manager Coaching: Equipping your team with effective hiring practices.",
  "Custom Interview Frameworks: Designing structured interviews to identify the best candidates.",
  "Bespoke Hiring Plans: Creating tailored strategies that align with your organizational goals.",
];

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header/>
      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-[#282041] mb-4">
              Our Recruitment Services
            </h1>
            <p className="text-center text-gray-600 max-w-3xl mx-auto">
            At LotusLynx, we redefine recruitment by placing relationships at the heart of hiring. We offer personalized, strategic services designed to meet the unique needs of both employers and job seekers.
            </p>

            {/* Service Cards */}
            {/* <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="p-6 flex flex-col items-center text-center">
                <div className="bg-[#282041] rounded-full p-2 mb-4">
                  <Circle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Executive Search</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Find top-tier executives and leaders for your organization with our process.
                </p>
                <Button variant="outline" size="sm" className="mt-auto">
                  Learn More
                </Button>
              </Card>

              <Card className="p-6 flex flex-col items-center text-center">
                <div className="bg-[#282041] rounded-full p-2 mb-4">
                  <Circle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Heading 3</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Find top-tier executives and leaders for your organization with our process.
                </p>
                <Button variant="outline" size="sm" className="mt-auto">
                  Learn More
                </Button>
              </Card>

              <Card className="p-6 flex flex-col items-center text-center">
                <div className="bg-[#282041] rounded-full p-2 mb-4">
                  <Circle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Heading 3</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Find top-tier executives and leaders for your organization with our process.
                </p>
                <Button variant="outline" size="sm" className="mt-auto">
                  Learn More
                </Button>
              </Card>
            </div> */}
          </div>
        </section>

        {/* Services Section 1 */}
        {/* <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#282041] mb-4">
                  Recruitment Services
                  <br />
                  Offered by Lotus Lynx
                </h2>
                <p className="text-gray-700 mb-4">
                  The name LotusLynx was inspired by two powerful symbols: the lotus flower, representing growth and
                  rebirth.
                </p>
              </div>
              <div className="bg-[#eaeaea] h-48 md:h-64 rounded-md"></div>
            </div>
          </div>
        </section> */}

        {/* Services Section 2 */}
        {/* <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#282041] mb-4">
                  Recruitment Services
                  <br />
                  Offered by Lotus Lynx H2
                </h2>
                <p className="text-gray-700 mb-4">
                  The name LotusLynx was inspired by two powerful symbols: the lotus flower, representing growth and
                  rebirth.
                </p>
                <Button variant="outline" className="rounded-full">
                  <span className="flex items-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2"
                    >
                      <path
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    I'm a Job Seeker
                  </span>
                </Button>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start">
                    <div className="bg-[#eaeaea] rounded-full h-6 w-6 mt-1 mr-3"></div>
                    <div>
                      <h3 className="font-semibold text-lg">Heading 3</h3>
                      <p className="text-gray-700">
                        The name LotusLynx was inspired by two powerful symbols: the lotus flower, representing growth
                        and rebirth.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#eaeaea] rounded-full h-6 w-6 mt-1 mr-3"></div>
                    <div>
                      <h3 className="font-semibold text-lg">Heading 3</h3>
                      <p className="text-gray-700">
                        The name LotusLynx was inspired by two powerful symbols: the lotus flower, representing growth
                        and rebirth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#eaeaea] h-80 rounded-md"></div>
            </div>
          </div>
        </section> */}

        {/* Services Section 3 */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 bg-[#eaeaea] rounded-md">
                <Image
                    src="/amy-hirschi-K0c8ko3e6AA-unsplash.jpg" // Replace with your actual image path
                    alt="Client banner"
                    width={900} // Adjust as needed
                    height={600} // Adjust as needed
                    className="object-contain rounded"
                  />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-2xl md:text-3xl font-bold text-[#282041] mb-4">
                  Career Services
                  <br />
                  Offered by Lotus Lynx
                </h2>
                <p className="text-gray-700 mb-4">
                Empowering job seekers with personalized support, we offer:
                </p>
                <div className="space-y-4">
                   {services.map((item) => (
                     <div key={item} className="flex items-center">
                       <div className="bg-[#eaeaea] rounded-full h-4 w-4 mr-3"></div>
                       <p className="text-gray-700">{item}</p>
                     </div>
                   ))}
                 </div>
                {/* <Button variant="outline" className="rounded-full mb-8">
                  <span className="flex items-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2"
                    >
                      <path
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    I'm a Job Seeker
                  </span>
                </Button> */}

                {/* <div className="space-y-4">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="flex items-center">
                      <div className="bg-[#eaeaea] rounded-full h-4 w-4 mr-3"></div>
                      <p className="text-gray-700">The name LotusLynx was inspired by two powerful</p>
                    </div>
                  ))}
                </div> */}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 bg-[#eaeaea] rounded-md">
              <Image
                    src="/resume-genius-wNC266LJamg-unsplash.jpg" // Replace with your actual image path
                    alt="Client banner"
                    width={900} // Adjust as needed
                    height={600} // Adjust as needed
                    className="object-contain rounded"
                  />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-2xl md:text-3xl font-bold text-[#282041] mb-4">
                  Recruiting Solutions
                  <br />
                  Offered by Lotus Lynx
                </h2>
                <p className="text-gray-700 mb-4">
                From entry level to executive leadership, we provide end-to-end, full cycle recruiting tailored to your company's needs. Our unique Exploratory Candidate Service proactively surfaces top talent, ensuring you find the right fit before the need becomes urgent.
                </p>
                {/* <Button variant="outline" className="rounded-full mb-8">
                  <span className="flex items-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2"
                    >
                      <path
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    I'm a Job Seeker
                  </span>
                </Button> */}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 bg-[#eaeaea] rounded-md">
              <Image
                    src="/christina-wocintechchat-com-vzfgh3RAPzM-unsplash.jpg" // Replace with your actual image path
                    alt="Client banner"
                    width={900} // Adjust as needed
                    height={600} // Adjust as needed
                    className="object-contain rounded"
                  />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-2xl md:text-3xl font-bold text-[#282041] mb-4">
                Talent Strategy & Hiring Support
                  <br />
                  Offered by Lotus Lynx
                </h2>
                <p className="text-gray-700 mb-4">
                We partner with employers to build high performing teams through:
                </p>
                {/* <Button variant="outline" className="rounded-full mb-8">
                  <span className="flex items-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2"
                    >
                      <path
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    I'm a Job Seeker
                  </span>
                </Button> */}

                <div className="space-y-4">
                  {support.map((item) => (
                    <div key={item} className="flex items-center">
                      <div className="bg-[#eaeaea] rounded-full h-4 w-4 mr-3"></div>
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
                {/* <p className="text-gray-700 mb-4">
                Ready to find your perfect match? Whether you're looking to hire top talent or find your dream job, we're here to help you succeed.
                </p> */}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-[#282041] mb-4">Ready to Find Your Perfect Match?</h2>
          <p className="text-gray-700 mb-8">
            Whether you're looking to hire top talent or find your dream job, we're here to help you succeed.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/employer" className="bg-[#282041] text-white px-6 py-3 rounded-md font-medium">
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
      <Footer/>
    </div>
  )
}
