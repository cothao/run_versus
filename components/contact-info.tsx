import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
      <p className="text-gray-600 mb-6 text-sm">Reach out to us directly using the information below.</p>

      <div className="space-y-6">
        <div className="flex gap-3">
          <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-medium">Address</h3>
            <p className="text-gray-600">
              {/* 123 Recruitment St
              <br />
              Business District
              <br /> */}
              Freeport, Illinois 61032
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-medium">Phone</h3>
            <p className="text-gray-600">+1 815-616-7384</p>
          </div>
        </div>

        <div className="flex gap-3">
          <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-medium">Email</h3>
            <p className="text-gray-600">abender@lotuslynx.com</p>
          </div>
        </div>

        {/* <div className="flex gap-3">
          <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-medium">Business Hours</h3>
            <p className="text-gray-600">
              Monday - Friday: 9:00 AM - 5:00 PM
              <br />
              Saturday - Sunday: Closed
            </p>
          </div>
        </div> */}
      </div>
    </div>
  )
}
