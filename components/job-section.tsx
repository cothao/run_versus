"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ResumeUploadModal } from "@/components/resume-upload-modal"

export function JobSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <h2 className="text-xl font-semibold mb-2">Looking for a Job?</h2>
      <p className="text-gray-600 mb-6">
        If you're a job seeker looking for new opportunities, we'd love to help you find your next role.
      </p>

      <Button onClick={() => setIsModalOpen(true)} className="w-full sm:w-auto">
        Email Your Resume
      </Button>

      <ResumeUploadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
