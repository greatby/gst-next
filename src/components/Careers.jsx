"use client";

import { useState, useEffect } from "react";

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [locationFilter, setLocationFilter] = useState("All");

  // Lock body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = selectedJob ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [selectedJob]);

  const jobs = [
    {
      id: "1",
      title: "Legal & Policy Interns",
      department: "Legal & Policy",
      location: "New Delhi / Bangalore / Mumbai",
      type: "Internship",
      duration: "3–6 months (conversion possible)",
      description: `
Work on the frontier where law meets execution.  
You’ll decode Acts, map department processes, and contribute to the nation’s first Regulatory Intelligence Graph.

**You’ll do things like:**
- Dissect and codify labour, environment, and safety laws  
- Draft structured workflows from state Acts  
- Assist live filings, inspections, and NOCs  
- Write explainers that turn regulation into code logic  
- Interface with departments, officers, and field agents  

**What you’ll learn:**  
How laws actually operate — beyond books, beyond courts.  
You’ll graduate understanding how regulation moves the real economy.
      `,
    },
    {
      id: "2",
      title: "Company Secretary (CS) Interns",
      department: "Legal & Policy",
      location: "Mumbai / Bangalore / New Delhi",
      type: "Internship",
      duration: "3–6 months (conversion possible)",
      description: `
We’re reimagining what Company Secretaries do in the digital era.  
Beyond filings — CS interns at Workforce work on structuring legal continuity as a product.

**You’ll do things like:**
- Create unified compliance calendars for multi-state entities  
- Work on digital workflows for board filings, MCA, and Labour Acts  
- Support entity lifecycle management (incorporation → closure)  
- Contribute to compliance automation logic  
- Work alongside our product and tech teams to digitize filings  

**What you’ll learn:**  
Corporate law, not as checklists — but as an operating system.  
You’ll help shape how every future company stays legally alive.
      `,
    },
    {
      id: "3",
      title: "Regulatory Research & Policy Engineering Interns",
      department: "Policy Engineering",
      location: "Bangalore / New Delhi",
      type: "Internship",
      duration: "3–6 months",
      description: `
Turn Acts into APIs.  
Work with our Policy Engineering team to structure legal text into machine-readable workflows.  
You’ll bridge the world between law, language, and logic — creating the models that power Workforce’s compliance engine.
      `,
    },
    {
      id: "4",
      title: "Technology & Automation Interns",
      department: "Technology",
      location: "Bangalore",
      type: "Internship",
      duration: "3–6 months",
      description: `
For those who want to build the backend of governance.  
Automation pipelines, department APIs, document classification, data mapping — this is the frontier of GovTech.

**You’ll work on:**
- Regulatory workflow automation  
- Dashboards, data models, and system maps  
- API layers for state departments  
- Secure audit trails and compliance vaults  

You’re not writing just code — you’re writing the law’s execution layer.
      `,
    },
    {
      id: "5",
      title: "Operations & Field Execution Interns",
      department: "Operations",
      location: "Bangalore / Mumbai / Delhi",
      type: "Internship",
      duration: "3–6 months",
      description: `
Execution is our heartbeat.  
You’ll work on the ground — visiting departments, interacting with officers, understanding real-time process flows, and translating them into data.  
You’ll be part of the only team in India that executes compliance both digitally and physically.  
The system learns from your experience.
      `,
    },
    {
      id: "6",
      title: "Design, Communications & Brand Interns",
      department: "Design & Communications",
      location: "Remote or On-site",
      type: "Internship",
      duration: "3–6 months",
      description: `
Help design how trust looks and feels.  
You’ll work on interfaces, brand communication, motion graphics, and storytelling — turning regulation into something people can see, understand, and believe in.
      `,
    },
  ];

  const filteredJobs =
    locationFilter === "All"
      ? jobs
      : jobs.filter((job) =>
          job.location.toLowerCase().includes(locationFilter.toLowerCase())
        );

  return (
    <section className="bg-white text-gray-900">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center pt-24 pb-12 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Workforce</h1>
        <p className="text-lg md:text-xl text-gray-700">
         Where Law Becomes Code. Where Compliance Becomes Infrastructure.
        </p>
      </div>

      {/* Awards Grid */}
      {/* <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 border border-black text-black rounded-lg overflow-hidden">
        <div className="flex flex-col items-center justify-center p-8 border-b sm:border-b-0 sm:border-r border-black">
          <svg
            width="96"
            height="13"
            viewBox="0 0 96 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.7175 0L8.3033 4.8806H13.4351L9.2834 7.8969L10.8692 12.7775L6.7175 9.7611L2.5659 12.7775L4.1517 7.8969L0 4.8806H5.1318L6.7175 0Z"
              className="fill-current"
            ></path>{" "}
            <path
              d="M68.1228 0L69.7086 4.8806H74.8404L70.6887 7.8969L72.2745 12.7775L68.1228 9.7611L63.9712 12.7775L65.557 7.8969L61.4053 4.8806H66.537L68.1228 0Z"
              className="fill-current"
            ></path>{" "}
            <path
              d="M88.591 0L90.177 4.8806H95.309L91.157 7.8969L92.743 12.7775L88.591 9.7611L84.44 12.7775L86.025 7.8969L81.874 4.8806H87.005L88.591 0Z"
              className="fill-current"
            ></path>{" "}
            <path
              d="M47.6541 0L49.2399 4.8806H54.3716L50.2199 7.8969L51.8057 12.7775L47.6541 9.7611L43.5024 12.7775L45.0882 7.8969L40.9365 4.8806H46.0683L47.6541 0Z"
              className="fill-current"
            ></path>{" "}
            <path
              d="M27.1862 0L28.772 4.8806H33.9038L29.7522 7.8969L31.338 12.7775L27.1862 9.7611L23.0345 12.7775L24.6203 7.8969L20.4688 4.8806H25.6004L27.1862 0Z"
              className="fill-current"
            ></path>
          </svg>
          <span className="text-sm text-center px-4">
            Consistently Ranked as a Great Place to Work
          </span>
        </div>
        <a
          href="https://www.glassdoor.com/Overview/Working-at-Techspeed-EI_IE3361160.11,20.htm"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-6 border-b sm:border-b-0 sm:border-r border-black"
        >
          <img
            src="https://wordpress.techspeed.com/wp-content/uploads/2024/02/glassdoor.png"
            alt="Glassdoor"
            className="h-10"
          />
        </a>
        <a
          href="https://www.indeed.com/cmp/Techspeed/reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-6"
        >
          <img
            src="https://wordpress.techspeed.com/wp-content/uploads/2024/02/indeed.png"
            alt="Indeed"
            className="h-10"
          />
        </a>
      </div> */}

      {/* Job Listings */}
      <div className="max-w-6xl mx-auto mt-16 px-4">
        <h1 className="text-center text-4xl font-semibold">Open Positions</h1>
        <div className="flex justify-end mb-6">
          <select
            className="border border-gray-300 rounded-md p-2"
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
          >
            <option value="All">All Locations</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Remote">Remote</option>
          </select>
        </div>

        <ul className="divide-y divide-gray-200">
          {filteredJobs.map((job) => (
            <li
              key={job.id}
              className="py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
            >
              <div>
                <h3 className="text-xl font-semibold">{job.title}</h3>
                <p className="text-gray-600">{job.department}</p>
                <p className="text-gray-500 text-sm">
                  {job.location} • {job.type} • {job.duration}
                </p>
              </div>
              <button
                onClick={() => setSelectedJob(job)}
                className="px-4 py-2 rounded-full bg-black text-white hover:bg-yellow-400 hover:text-black transition"
              >
                View Details →
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center sm:p-6 overflow-y-auto">
          <div className="relative bg-white rounded-2xl w-full max-w-2xl my-auto max-h-[90vh] overflow-y-auto p-6 shadow-xl animate-fadeIn">
            {/* Close button */}
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
            >
              ✕
            </button>

            {/* Modal Content */}
            <h2 className="text-2xl font-bold mb-2">{selectedJob.title}</h2>
            <p className="text-sm text-gray-500 mb-4">
              {selectedJob.department} • {selectedJob.location} •{" "}
              {selectedJob.duration}
            </p>

            <div
              className="prose prose-gray max-w-none text-gray-800"
              dangerouslySetInnerHTML={{
                __html: selectedJob.description
                  .replace(/\n/g, "<br/>")
                  .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                  .replace(/- (.*?)(<br\/>|$)/g, "<li>$1</li>"),
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
