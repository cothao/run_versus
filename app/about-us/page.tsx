import Image from "next/image"
import Link from "next/link"
import Header from "@/components/ui/header"
import Footer from "@/components/ui/footer"

const founders = [
  {
    "Name": "Ashley Bender",
    "Role": "Founder/Principal Recruiter",
    "Link": "https://www.linkedin.com/in/ashley-bender-6730b578/",
    "Image": './ashley_headshot.png'
  },
  // {
  //   "Name": "Kevin McKenzie",
  //   "Role": "Director of Operations & Strategy",
  //   "Link": "https://www.linkedin.com/in/kevin-mckenzie-557b2434/",
  //   "Image": './Portion2.png'
  // },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header/>

      {/* Main Content */}
      <main className="flex-grow">
        {/* About Section */}
        <section className="container mx-auto px-4 py-12 text-center">
  <h1 className="text-4xl font-bold text-[#282041] mb-4">About LotusLynx: The LotusLynx Story</h1>
  <p className="max-w-4xl mx-auto text-gray-700 mb-8">
  The Missing Link Between Talent and Opportunity
  </p>

  <h2 className="text-3xl font-bold text-[#282041] mb-4">Who We Are</h2>
  <p className="max-w-4xl mx-auto text-gray-700">
    LotusLynx isn’t your typical recruiting firm, and that’s by design. After over a decade in professional recruiting, our founder Ashley Bender decided to build something different: a boutique agency focused on real connections, not transactions.
    <br /><br />
    After years of success in the recruiting world, she realized something was missing: a human-centered approach that puts people before quotas. With that vision in mind, she launched LotusLynx — a firm built on the belief that recruiting can be personal, principled, and powerful without sacrificing results.
    <br /><br />
    We offer recruiting, career services, and strategic hiring solutions built on relationships, honesty, and personalized service. From technical roles to leadership positions, and everything in between, we partner with both clients and candidates to make hiring feel more meaningful, empowering, and efficient.
    <br /><br />
    Whether you're looking to build a stronger team or take the next step in your career, we’re here to help you do it with purpose.
  </p>
</section>


        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="./ashley_headshot_2.jpeg"
                alt="Company Image"
                width={400}
                height={300}
                className="w-full h-auto bg-[#eaeaea] rounded"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#282041] mb-4">Mission</h2>
              <p className="text-gray-700">
              At LotusLynx, our mission is to bring the human touch back to hiring.  We’re here to create thoughtful connections, deliver strategic results, and make the recruitment process easier, more personal, and more impactful for everyone involved.
              </p>
            </div>
          </div>
        </section>

        {/* Heading Section */}
        <section className="container mx-auto px-4 py-12">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
    <div>
      <Image
        src="./ashley_family.jpg"
        alt="Company Image"
        width={400}
        height={300}
        className="w-full h-auto bg-[#eaeaea] rounded"
      />
    </div>
    <div>
      <h2 className="text-3xl font-bold text-[#282041] mb-6">Values</h2>
      <ul className="list-none space-y-4 text-gray-700">
        <li>
          <strong>Authenticity</strong><br />
          We build trust through transparency—being clear, consistent, and real in everything we do.
        </li>
        <li>
          <strong>Connection</strong><br />
          Relationships come first. Hiring and career moves should never feel like a cold transaction.
        </li>
        <li>
          <strong>Strategy</strong><br />
          We don’t do one-size-fits-all. Every solution is designed with purpose and precision.
        </li>
        <li>
          <strong>Empowerment</strong><br />
          We exist to help people take control of their growth, whether they’re building a business or building a future.
        </li>
        <li>
          <strong>Flexibility</strong><br />
          We work how today’s world works—with adaptability, empathy, and a no red-tape approach.
        </li>
      </ul>
    </div>
  </div>
</section>


        {/* Team Section */}
        <section className="container mx-auto px-4 py-12 text-center">
  <h2 className="text-3xl font-bold text-[#282041] mb-12">Our Team</h2>
  <div className="flex flex-wrap justify-center gap-36">
    {[0].map((i) => (
      <div key={i} className="flex flex-col items-center">
        <a href={founders[i]["Link"]} target="_blank" rel="noopener noreferrer">
          <img
            src={founders[i]["Image"]}
            alt={founders[i]["Name"]}
            className="w-40 h-40 rounded-full object-cover mb-4 hover:opacity-90 transition"
          />
        </a>
        <h3 className="text-xl font-semibold">{founders[i]["Name"]}</h3>
        <p className="text-gray-600">{founders[i]["Role"]}</p>
      </div>
    ))}
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
            <Link href="//become-client" className="bg-[#282041] text-white px-6 py-3 rounded-md font-medium">
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
