"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, MapPin, DollarSign, Clock, ChevronLeft, ChevronRight } from "lucide-react"
import Header from "@/components/ui/header"
import Footer from "@/components/ui/footer"

const fetchJobs = async () => {
  try {
    const res = await fetch('https://01yahy0rib.execute-api.us-east-1.amazonaws.com/Dev', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    const jobs = await res.json();
    return JSON.parse(jobs.body); // or use in state
  } catch (error) {
    console.error('Error fetching jobs:', error);
  }
};

export default function JobListings() {
  const [currentPage, setCurrentPage] = useState(1);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchJobs();
      setJobs(data);
    };
    fetchData();
  }, []);

  const jobsPerPage = 4

  // Calculate total pages
  const totalPages = Math.ceil(jobs.length / jobsPerPage)

  // Get current jobs
  const indexOfLastJob = currentPage * jobsPerPage
  const indexOfFirstJob = indexOfLastJob - jobsPerPage
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob)
  console.log(currentJobs);
  // Change page
  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    window.scrollTo(0, 0)
  }

  return (
    <div>
      <Header/>
    <div className="container mx-auto py-8 px-4">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Current Openings</h1>
        <p className="text-muted-foreground">Find your perfect role from our curated job listings</p>
      </header>

      <div className="grid gap-6 mb-8">
        {currentJobs.map((job) => (
          <Card key={job.ID} className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold mb-2">{job.JobTitle}</h2>
                  <p className="text-lg mb-2">{job.CompanyName}</p>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-3">
                    <div className="flex items-center">
                      <MapPin className="mr-1 h-4 w-4" />
                      {job.Location}
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="mr-1 h-4 w-4" />
                      {job.JobType}
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="mr-1 h-4 w-4" />
                      {job.SalaryRange}
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-1 h-4 w-4" />
                      Posted {job.DatePosted}
                    </div>
                  </div>
                </div>

                <div className="mt-4 md:mt-0">
                  <Link href={`/jobs/${job.ID}`}>
                    <Button>View Details</Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-2 mt-8">
        <Button
          variant="outline"
          size="icon"
          disabled={currentPage === 1}
          onClick={() => goToPage(currentPage - 1)}
          aria-label="Previous page"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div className="flex items-center space-x-1">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "outline"}
              size="sm"
              onClick={() => goToPage(page)}
              aria-label={`Page ${page}`}
              aria-current={currentPage === page ? "page" : undefined}
            >
              {page}
            </Button>
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          disabled={currentPage === totalPages}
          onClick={() => goToPage(currentPage + 1)}
          aria-label="Next page"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="text-center text-sm text-muted-foreground mt-4">
        Showing {indexOfFirstJob + 1}-{Math.min(indexOfLastJob, jobs.length)} of {jobs.length} jobs
      </div>
    </div>
    <Footer/>
    </div>
  )
}
