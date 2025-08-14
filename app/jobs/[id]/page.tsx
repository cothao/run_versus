"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, MapPin, DollarSign, Clock, ArrowLeft } from "lucide-react"
import { useEffect, useState } from "react"
import { use } from 'react'
import Header from "@/components/ui/header"
import Footer from "@/components/ui/footer"
import { ResumeUploadModal } from "@/components/resume-upload-modal"

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



export default function JobDetail({ params }: { params: { id: string } }) {
  const {id} = use(params);

  const [jobs, setJobs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
      const fetchData = async () => {
        const data = await fetchJobs();
        setJobs(data);
      };
      fetchData();
    }, []);

    const job = jobs.find((j) => j.ID === id);

  if (!job) {
    return (
      <div className="container mx-auto py-8 px-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Job not found</h1>
        <p className="mb-6">The job you're looking for doesn't exist or has been removed.</p>
        <Link href="/">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Current Openings
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div>
      <Header/>
    <div className="container mx-auto py-8 px-4">
      <Link href="/job-listings" className="inline-flex items-center mb-6">
        <Button variant="outline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Current Openings
        </Button>
      </Link>

      <Card>
        <CardHeader className="pb-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
            <div>
              <CardTitle className="text-2xl font-bold">{job.JobTitle}</CardTitle>
              <p className="text-xl mt-1">{job.CompanyName}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-4">
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
        </CardHeader>

        <CardContent className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3">Job Description</h2>
            <p className="text-muted-foreground">{job.Description}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Requirements</h2>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              {job.Requirements.split('\n').map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Responsibilities</h2>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              {job.Responsibilities.split('\n').map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
          </section>

          <div className="pt-4">
          <Button onClick={() => setIsModalOpen(true)} className="w-full sm:w-auto">
        Apply Now
      </Button>
      <ResumeUploadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

          </div>
        </CardContent>
      </Card>
    </div>
      <Footer/>
    </div>
  )
}
