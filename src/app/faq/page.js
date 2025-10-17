import FaqAccordion from '@/components/Faq'
import React from 'react'

export const metadata = {
  title: "UNIGST — The Fiscal Operating System of a New India",
  description:
    "UNIGST exists to keep that rhythm unbroken. We are not a product, not a SaaS, not a consultancy. We are the execution layer of India’s fiscal sovereignty — the system that ensures compliance isn’t a burden, but a backbone.",
  alternates: { canonical: "https://unigst.com/faq" },
  openGraph: {
    title: "UNIGST — The Fiscal Operating System of a New India",
    url: "https://unigst.com/faq",
  },
};

const Page = () => {
  return (
    <>
      <FaqAccordion />
    </>
  )
}

export default Page
