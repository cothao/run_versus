import Image from "next/image"
import Link from "next/link"
import { Phone } from "lucide-react"
import Header from "@/components/ui/header"
import Footer from "@/components/ui/footer"
import Stats from "@/components/ui/stats"

const testimonials = [
  {
    "Name": "Tiara Young",
    "Position": "Cyber Security Consultant",
    "Company": "TWW",
    "Testimonial": `I’m incredibly grateful for the amazing support I received from Ashley Bender! From our first conversation, she was attentive, encouraging, and truly invested in helping me find the right opportunity. Thanks to her guidance and dedication, I successfully landed my role as a Senior Project Manager. She made the entire process smooth, efficient, and even enjoyable. If you’re looking for a recruiter who genuinely cares about your success and goes the extra mile, I highly recommend working with her! Thank you Ashley for your professionalism.` 
  },
  {
    "Name": "Rosa Vento",
    "Position": "",
    "Company": "",
    "Testimonial": `I had the pleasure of working with Ashley Bender during my recent career journey, and I cannot recommend her highly enough. Ashley is a true professional in every sense—her ability to identify and connect with top talent is unparalleled, and her passion for helping candidates find the perfect fit shines through in everything she does.
From our very first conversation, Ashley impressed me with her commitment to aligning my skills with the right opportunities. She is insightful, approachable, and incredibly supportive, making what can be a stressful process feel seamless and exciting.
Ashley doesn’t just find candidates; she invests in them, taking the time to understand their strengths, aspirations, and values. Her expertise and dedication truly make her a standout in the recruiting space. Anyone fortunate enough to work with Ashley will find a recruiter who goes above and beyond to deliver results with care and professionalism.` 
  }
];

const services = 
[
  {
    "Name": "Recruiting Solutions",
    "Description": "End-to-end, full-cycle recruiting tailored to your company's needs — plus our unique Exploratory Candidate Service to proactively surface top talent."
  } , 
  {
    "Name": "Career Services",
    "Description": "Personalized support for job seekers, including résumé writing, LinkedIn optimization, and career coaching to help you stand out and succeed."
  } , 
  {
    "Name": "Talent Strategy & Hiring Support",
    "Description": "Strategic support for employers, offering hiring manager coaching, custom interview frameworks, and bespoke hiring plans designed to build high-performing teams."
  }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header/>

      {/* Hero Section */}
      <section className="bg-[#282041] text-white py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight w-3/4">
              Connecting Top Talent with Leading Employers
            </h1>
            <p className="text-lg w-3/4">
            The Missing Link Between Talent and Opportunity: A boutique talent firm redefining the recruitment experience
              through personalized hiring strategies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/become-client"
                className="bg-white text-[#282041] px-6 py-3 rounded-md font-medium flex items-center justify-center"
              >
                I'm an Employer
              </Link>
              <Link
                href="/job-listings"
                className="bg-transparent border border-white text-white px-6 py-3 rounded-md font-medium flex items-center justify-center"
              >
                I'm a Job Seeker
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
          <Image
  src="/austin-distel-jpHw8ndwJ_Q-unsplash.jpg"
  alt="Recruitment Services"
  width={600}
  height={400}
  className="rounded-lg"
  style={{ width: '700px', height: '400px' }} // Explicitly set fixed size
/>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      
      {/* Services Section 1 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#282041]">Recruitment Services Offered by LotusLynx</h2>
              <p className="text-gray-700">
              LotusLynx is a full-service recruiting agency that connects top talent with companies across various industries, from skilled labor to executive leadership. 
              </p>
            </div>
            <div>
              <Image
                src="/two_people_arms_crossed.avif"
                alt="Recruitment Services"
                width={500}
                height={300}
                className="rounded-lg bg-[#eaeaea]"
                style={{ width: '700px', height: '400px' }} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section 2 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Image
                src="/girl_smiling_at_guy.avif"
                alt="Recruitment Services"
                width={500}
                height={300}
                className="rounded-lg bg-[#eaeaea]"
                style={{ width: '700px', height: '400px' }} 

              />
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-3xl font-bold text-[#282041]">Recruitment Services Offered by LotusLynx</h2>
              <p className="text-gray-700">
              LotusLynx takes a consultative approach to hiring by identifying challenges, streamlining processes, and improving talent acquisition strategies. Whether you need standalone consulting to refine your internal hiring approach or a hands-on recruiting partner, LotusLynx tailors its services to fit your needs. Our full-service approach includes interview coaching, structured interview guidance, offer extensions, reference checks, onboarding support, and much more to help you build stronger teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-[#282041]">Our Recruitment Services</h2>
              <p className="mt-4 text-gray-600">
                We offer specialized recruitment services tailored to your specific industry and needs.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[0, 1, 2].map((i) => (
                <div key={i} className="border rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-[#282041] rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{services[i]["Name"]}</h3>
                  <p className="text-gray-600 text-sm mb-6">
                    {services[i]["Description"]}
                  </p>
                  <Link href="/services" className="border px-6 py-3 rounded-md text-[#282041] font-medium hover:underline">
                    Learn More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            <div>
              <h5 className="text-sm font-medium uppercase tracking-wider text-gray-500">TESTIMONIALS</h5>
              <h2 className="text-3xl font-bold text-[#282041] mt-2">What Our Clients Say</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[0, 1].map((i) => (
                <div key={i} className="border rounded-lg p-8">
                  <div className="text-4xl text-[#282041] font-serif mb-4">"</div>
                  <p className="text-gray-700 mb-6">
                {testimonials[i]["Testimonial"]}
            </p>
                  <div>
                    <p className="font-semibold">{testimonials[i]["Name"]}</p>
                    <p className="text-sm text-gray-600">{testimonials[i]["Position"]}, {testimonials[i]["Company"]}</p>
                  </div>
                </div>
              ))}
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

      {/* Footer */}
      <Footer/>
    </div>
  )
}
