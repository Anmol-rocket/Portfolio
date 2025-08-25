import React from "react";

export default function ResumePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900">
      <div className="w-full max-w-4xl p-4 md:p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800">
        <h1 className="text-4xl font-bold mb-6 text-blue-400 text-center">Anmol Upadhyay Resume</h1>
        <iframe
          src="/resume.pdf"
          title="Resume PDF"
          width="100%"
          height="800px"
          style={{ border: "none", borderRadius: "8px", boxShadow: "0 2px 8px #818cf8" }}
        />
        <p className="text-center text-gray-500 mt-4">If the PDF does not display, <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">click here to download</a>.</p>
      </div>
    </main>
  );
}
