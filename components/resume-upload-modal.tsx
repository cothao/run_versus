"use client";

import type React from "react";

import { useState, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, Check, X, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

interface ResumeUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeUploadModal({ isOpen, onClose }: ResumeUploadModalProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [base64, setBase64] = useState("");

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0];
      handleFileSelection(droppedFile);
    }
  };

  const handleFileSelection = async (selectedFile: File) => {
    // Check file type
    const validTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!validTypes.includes(selectedFile.type)) {
      setError("Please upload a PDF or Word document");
      return;
    }

    // Check file size (5MB max)
    if (selectedFile.size > 5 * 1024 * 1024) {
      setError("File size must be less than 5MB");
      return;
    }
    const arrayBuffer = await selectedFile.arrayBuffer();
    const uint8Array = new Uint8Array(arrayBuffer);
    const binaryString = uint8Array.reduce(
      (acc, byte) => acc + String.fromCharCode(byte),
      ""
    );
    const base64String = btoa(binaryString);

    setBase64(base64String);
    setFile(selectedFile);
    setError(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFileSelection(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!file) {
      setError("Please upload your resume");
      return;
    }

    if (!email) {
      setError("Please enter your email");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      let fileName = file.name;
      const data = {
        name,
        email,
        fileName,
        base64,
      };

      // In a real application, you would upload the file to your server here
        const response = await fetch(
          "https://96ka9i6n6f.execute-api.us-east-1.amazonaws.com/dev/sendResume",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );

        if (response.status != 200) {
          throw new Error(`Error: ${response.statusText}`);
        }

      setIsSuccess(true);

      // Reset form after 2 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setFile(null);
        setEmail("");
        setName("");
        onClose();
      }, 2000);
    } catch (err) {
      console.log(err)
      setError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const removeFile = () => {
    setFile(null);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Submit Your Resume</DialogTitle>
          <DialogDescription>
            Upload your resume and we'll match you with opportunities that fit
            your skills and experience.
          </DialogDescription>
        </DialogHeader>

        {/* Submission Confirmation */}
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-8">
            <Check className="h-10 w-10 text-green-600 mb-2" />
            <p className="text-lg font-semibold text-green-700 mb-1">Resume Submitted!</p>
            <p className="text-gray-600 text-center">Thank you for submitting your resume. We'll be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 py-4">
            <div className="grid w-full gap-1.5">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Smith"
                required
              />
            </div>

            <div className="grid w-full gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@example.com"
                required
              />
            </div>

            <div className="grid w-full gap-1.5">
              <Label htmlFor="resume">Resume</Label>
              <input
                ref={fileInputRef}
                id="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="hidden"
              />

              {!file ? (
                <div
                  className={cn(
                    "border-2 border-dashed rounded-md p-6 text-center cursor-pointer transition-colors",
                    isDragging
                      ? "border-primary bg-primary/5"
                      : "border-gray-300 hover:border-primary/50"
                  )}
                  onClick={triggerFileInput}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <Upload className="h-10 w-10 mx-auto mb-2 text-gray-400" />
                  <p className="text-sm font-medium">
                    Drag and drop your resume here or click to browse
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Supports PDF, DOC, DOCX (Max 5MB)
                  </p>
                </div>
              ) : (
                <div className="flex items-center justify-between p-3 border rounded-md bg-gray-50">
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium truncate max-w-[180px]">
                      {file.name}
                    </span>
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={removeFile}
                    className="h-8 w-8 p-0"
                  >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Remove file</span>
                  </Button>
                </div>
              )}

              {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
            </div>

            <DialogFooter className="pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className="min-w-[100px]"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-1">
                    <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Uploading...</span>
                  </span>
                ) : isSuccess ? (
                  <span className="flex items-center gap-1">
                    <Check className="h-4 w-4" />
                    <span>Submitted!</span>
                  </span>
                ) : (
                  "Submit Resume"
                )}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
