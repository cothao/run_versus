"use client";
import { Suspense } from "react";
import { Dashboard } from "@/components/dashboard";

export default function RecruiterDashboard() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Suspense fallback={<div>Loading jobs...</div>}>
        <Dashboard />
      </Suspense>
    </div>
  );
}
