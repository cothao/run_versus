import Header from "@/components/ui/header";
import { Footer } from "@/components/footer";
import PostJobForm from "@/components/postJobForm";
import { useEffect, useState } from "react";
import { Trash2, X } from "lucide-react";
import { useSearchParams } from "next/navigation";

export const Dashboard = () => {
  const [jobToDelete, setJobToDelete] = useState<string | null>(null);
  const [jobToEdit, setJobToEdit] = useState<any>(null);
  const [editFormData, setEditFormData] = useState({
    JobTitle: "",
    Company: "",
    Location: "",
    JobType: "",
    Salary: "",
    DatePosted: "",
  });
  const [jobs, setJobs] = useState([]);
  const searchParams = useSearchParams();
  const Session = searchParams.get("session");

  const fetchJobs = async () => {
    try {
      const res = await fetch(
        "https://01yahy0rib.execute-api.us-east-1.amazonaws.com/Dev",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const jobs = await res.json();
      return JSON.parse(jobs.body);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchJobs();
      setJobs(data);
    };
    if (Session) fetchData();
  }, [Session]);

  const openDeleteConfirmation = (jobId: string) => {
    setJobToDelete(jobId);
  };

  const closeDeleteConfirmation = () => {
    setJobToDelete(null);
  };

  const handleDeleteJob = async (jobId: string) => {
    try {
      const response = await fetch(
        "https://mcejnt9v3g.execute-api.us-east-1.amazonaws.com/Dev",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ID: jobId, Session: Session }),
        }
      );

      const result = await response.json();

      if (response.ok) {
        console.log("Delete successful:", result.message);
        const updated = await fetchJobs();
        setJobs(updated);
      } else {
        console.error("Delete failed:", result.error);
      }
    } catch (error) {
      console.error("Error deleting job:", error);
    }

    setJobToDelete(null);
  };

  const openEditModal = (job: any) => {
    setJobToEdit(job);
    setEditFormData({
      JobTitle: job.JobTitle,
      Company: job.Company,
      Location: job.Location,
      JobType: job.JobType,
      Salary: job.Salary,
      DatePosted: job.DatePosted,
    });
  };

  const handleEditJob = async (jobId: string, updatedData: any) => {
    try {
      const response = await fetch(
        `https://kjvlynirs3.execute-api.us-east-1.amazonaws.com/dev/jobs/JobId`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: "{\"ID\": \"45b88a31-7f05-4a3b-8bc7-25d8cc9075b1\"}",
        }
      );

      const result = await response.json();

      if (response.ok) {
        console.log("Edit successful:", result.message);
        const updated = await fetchJobs();
        setJobs(updated);
      } else {
        console.error("Edit failed:", result.message);
      }
    } catch (error) {
      console.error("Error editing job:", error);
    }
  };

  return (
    <>
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-8">Recruiter Dashboard</h1>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Post a New Job</h2>
            {Session && <PostJobForm session={Session} />}
          </div>

          <div className="space-y-4">
            {jobs.map((job, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex justify-between">
                  <h3 className="font-semibold">{job.JobTitle}</h3>
                  <div className="flex space-x-2">
                    <button
                      className="text-blue-600"
                      onClick={() => openEditModal(job)}
                    >
                      ✏️
                    </button>
                    <button
                      className="text-[#ef4444]"
                      onClick={() => openDeleteConfirmation(job.ID)}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
                <p className="text-sm">{job.Company}</p>
                <div className="flex flex-wrap gap-4 mt-2 text-sm">
                  <div className="flex items-center gap-1">{job.Location}</div>
                  <div className="flex items-center gap-1">{job.JobType}</div>
                  <div className="flex items-center gap-1">{job.Salary}</div>
                  <div className="flex items-center gap-1">
                    {job.DatePosted}
                  </div>
                </div>
              </div>
            ))}

            <div className="flex justify-center items-center gap-4 mt-6">
              <button className="p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <span>Page 1</span>
              <button className="p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Delete Confirmation Modal */}
      {jobToDelete !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Confirm Deletion</h3>
              <button
                onClick={closeDeleteConfirmation}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>
            <p className="mb-6">
              Are you sure you want to delete this job posting?
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={closeDeleteConfirmation}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDeleteJob(jobToDelete)}
                className="px-4 py-2 bg-[#ef4444] text-white rounded-md hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Job Modal */}
      {jobToEdit && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Edit Job</h3>
              <button
                onClick={() => setJobToEdit(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>

            <form
              onSubmit={async (e) => {
                e.preventDefault();
                await handleEditJob(jobToEdit.ID, editFormData);
                setJobToEdit(null);
              }}
              className="space-y-4"
            >
              {Object.keys(editFormData).map((field) => (
                <div key={field}>
                  <label className="block text-sm font-medium text-gray-700 capitalize">
                    {field.replace(/([A-Z])/g, " $1")}
                  </label>
                  <input
                    type="text"
                    value={editFormData[field]}
                    onChange={(e) =>
                      setEditFormData({
                        ...editFormData,
                        [field]: e.target.value,
                      })
                    }
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
              ))}

              <div className="flex justify-end space-x-3 pt-2">
                <button
                  type="button"
                  onClick={() => setJobToEdit(null)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
