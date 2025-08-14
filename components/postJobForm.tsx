"use client";

import { useState } from "react";
import { Check } from "lucide-react"; // Optional: icon for success

export default function PostJobForm(session: any ) {
  const [formData, setFormData] = useState({
    JobTitle: "",
    CompanyName: "",
    Location: "",
    JobType: "",
    SalaryRange: "",
    Description: "",
    Requirements: "",
    Responsibilities: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Rich text handler for Job Description
  const handleDescriptionChange = (e: React.FormEvent<HTMLDivElement>) => {
    setFormData((prev) => ({ ...prev, Description: e.currentTarget.innerHTML }));
  };

  const resetForm = () => {
    setFormData({
      JobTitle: "",
      CompanyName: "",
      Location: "",
      JobType: "",
      SalaryRange: "",
      Description: "",
      Requirements: "",
      Responsibilities: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const jobData = {
      ...formData,
      Session: session.session, // You might want to include the session ID here if needed
    };

    try {
      const response = await fetch(
        "https://6cn9lmzip5.execute-api.us-east-1.amazonaws.com/Dev",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(jobData),
        }
      );

      const result = await response.json();

      if (response.ok) {
        console.log("Job posted successfully:", result);
        setIsSuccess(true);
        resetForm(); // Reset form inputs
        setTimeout(() => setIsSuccess(false), 3000); // Hide success message after 3 seconds
      } else {
        console.error("Error posting job:", result.error);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="jobTitle" className="block text-sm font-medium mb-1">
          Job Title
        </label>
        <input
          type="text"
          id="jobTitle"
          name="JobTitle"
          value={formData.JobTitle}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium mb-1">
          Company
        </label>
        <input
          type="text"
          id="company"
          name="CompanyName"
          value={formData.CompanyName}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>

      <div>
        <label htmlFor="location" className="block text-sm font-medium mb-1">
          Location
        </label>
        <input
          type="text"
          id="location"
          name="Location"
          value={formData.Location}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>

      <div>
        <label htmlFor="jobType" className="block text-sm font-medium mb-1">
          Job Type
        </label>
        <input
          type="text"
          id="jobType"
          name="JobType"
          value={formData.JobType}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>

      <div>
        <label htmlFor="salaryRange" className="block text-sm font-medium mb-1">
          Salary Range
        </label>
        <input
          type="text"
          id="salaryRange"
          name="SalaryRange"
          value={formData.SalaryRange}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>

      <div>
        <label htmlFor="jobDescription" className="block text-sm font-medium mb-1">
          Job Description
        </label>
        {/* Rich Text Editor */}
        <div
          id="jobDescription"
          name="Description"
          contentEditable
          className="w-full px-3 py-2 border rounded-md min-h-[100px] bg-white focus:outline-none"
          onInput={handleDescriptionChange}
          dangerouslySetInnerHTML={{ __html: formData.Description }}
          required
          aria-required="true"
        />
      </div>

      <div>
        <label htmlFor="requirements" className="block text-sm font-medium mb-1">
          Requirements
        </label>
        <textarea
          id="requirements"
          name="Requirements"
          rows={3}
          value={formData.Requirements}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>

      <div>
        <label htmlFor="responsibilities" className="block text-sm font-medium mb-1">
          Responsibilities
        </label>
        <textarea
          id="responsibilities"
          name="Responsibilities"
          rows={3}
          value={formData.Responsibilities}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#282041] text-white py-2 rounded-md"
        disabled={isSubmitting || isSuccess}
      >
        {isSubmitting ? (
          <span className="flex items-center gap-1">
            <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            <span>Posting...</span>
          </span>
        ) : isSuccess ? (
          <span className="flex items-center gap-1">
            <Check className="h-4 w-4" />
            Posted!
          </span>
        ) : (
          "Post Job"
        )}
      </button>
    </form>
  );
}
