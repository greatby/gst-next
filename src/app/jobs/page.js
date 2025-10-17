import CareersPage from '@/components/Careers'
import React from 'react'

export const metadata = {
  title: "Join Workforce",
  description:
    " Where Law Becomes Code. Where Compliance Becomes Infrastructure.",
  alternates: { canonical: "https://unigst.com/jobs" },
  openGraph: {
    title: "Join Workforce",
    url: "https://unigst.com/jobs",
  },
};


const Jobs = () => {
  return (
   <CareersPage />
  )
}

export default Jobs
