// "use client";

// import { useState, useRef, useEffect } from "react";
// import Link from "next/link";
// import { FiChevronDown, FiArrowLeft } from "react-icons/fi";
// import { motion, AnimatePresence } from "framer-motion";
// import { faqs } from "@/utils/data";

// export default function FaqAccordion() {
//   const [openIndex, setOpenIndex] = useState(null);

  
//   const BATCH_SIZE = 10;
//   const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);

  
//   const loadMoreRef = useRef(null);

//   const toggle = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };


//   useEffect(() => {
//     const target = loadMoreRef.current;
//     if (!target) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         const first = entries[0];
//         if (first.isIntersecting) {
//           setVisibleCount((prev) =>
//             Math.min(prev + BATCH_SIZE, faqs.length)
//           );
//         }
//       },
//       { rootMargin: "200px" }
//     );

//     observer.observe(target);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <main className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
//       {/* Header */}
//       <div className="w-full max-w-2xl mb-8 flex items-center justify-center relative">
//         <Link
//           href="/"
//           className="absolute left-0 flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-black hover:bg-gray-300 transition-colors"
//           aria-label="Back to Home"
//         >
//           <FiArrowLeft className="text-xl" />
//         </Link>
//         <h1 className="text-4xl font-bold text-gray-900">FAQ</h1>
//       </div>

//       {/* Accordion */}
//       <section className="w-full divide-y max-w-2xl divide-gray-200 rounded-xl">
//         {faqs.slice(0, visibleCount).map((faq, i) => (
//           <div key={i} className="py-4">
//             <button
//               onClick={() => toggle(i)}
//               className="flex w-full items-center justify-between text-left text-lg font-medium text-gray-800 hover:text-gray-900 focus:outline-none"
//               aria-expanded={openIndex === i}
//             >
//               {faq.question}
//               <FiChevronDown
//                 className={`ml-2 h-5 w-5 transform transition-transform duration-300 ${
//                   openIndex === i ? "rotate-180" : ""
//                 }`}
//               />
//             </button>

//             <AnimatePresence initial={false}>
//               {openIndex === i && (
//                 <motion.div
//                   key="content"
//                   initial={{ height: 0, opacity: 0 }}
//                   animate={{ height: "auto", opacity: 1 }}
//                   exit={{ height: 0, opacity: 0 }}
//                   transition={{ duration: 0.3, ease: "easeInOut" }}
//                   className="overflow-hidden mt-2"
//                 >
//                   <p className="text-gray-600 leading-relaxed px-1">
//                     {faq.answer}
//                   </p>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         ))}

//         {/* Sentinel element to trigger more loading */}
//         {visibleCount < faqs.length && (
//           <div ref={loadMoreRef} className="py-6 text-center text-gray-500">
//             Loading more…
//           </div>
//         )}
//       </section>
//     </main>
//   );
// }


// "use client";

// import React, { useState, useEffect, useRef, useMemo } from "react";
// import Link from "next/link";
// import { FiChevronDown, FiArrowLeft, FiX } from "react-icons/fi";
// import { motion, AnimatePresence } from "framer-motion";
// import { faqs } from "@/utils/data";



// export default function FaqAccordion() {
//   // --- UI state ---
//   const BATCH_SIZE = 10;
//   const DEBOUNCE_MS = 300;

//   const [openIndex, setOpenIndex] = useState(null);
//   const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);

//   // Search state
//   const [searchTerm, setSearchTerm] = useState("");
//   const [debouncedTerm, setDebouncedTerm] = useState("");
//   const [selectedTags, setSelectedTags] = useState(new Set());
//   const [showSuggestions, setShowSuggestions] = useState(false);

//   // Fuse.js (fuzzy) will be dynamically imported if available
//   const fuseRef = useRef(null);
//   const [fuseReady, setFuseReady] = useState(false);

//   // Load-more sentinel (infinite load)
//   const loadMoreRef = useRef(null);

//   // -------------------------------------------
//   // Debounce search input
//   useEffect(() => {
//     const t = setTimeout(() => setDebouncedTerm(searchTerm.trim()), DEBOUNCE_MS);
//     return () => clearTimeout(t);
//   }, [searchTerm]);

//   // Reset visibleCount when search / tag filter changes
//   useEffect(() => {
//     setVisibleCount(BATCH_SIZE);
//   }, [debouncedTerm, selectedTags]);

//   // Try to dynamically import fuse.js for fuzzy search.
//   // If fuse.js is not installed, we silently fallback to substring search.
//   useEffect(() => {
//     let mounted = true;
//     import("fuse.js")
//       .then(({ default: Fuse }) => {
//         if (!mounted) return;
//         // create Fuse instance with fields we want to search
//         fuseRef.current = new Fuse(faqs, {
//           keys: [
//             { name: "question", weight: 0.8 },
//             { name: "answer", weight: 0.6 },
//             { name: "tags", weight: 0.3 },
//           ],
//           includeMatches: true,
//           threshold: 0.4,
//           ignoreLocation: true,
//           minMatchCharLength: 2,
//         });
//         setFuseReady(true);
//       })
//       .catch(() => {
//         // fuse isn't installed; fallback to basic search (no action required)
//         setFuseReady(false);
//       });
//     return () => {
//       mounted = false;
//     };
//   }, [faqs]);

//   // -------------------------------------------
//   // Helpers: tags, escaping and highlighting
//   const allTags = useMemo(() => {
//     const s = new Set();
//     faqs.forEach((f) => (f.tags || []).forEach((t) => s.add(t)));
//     return Array.from(s).sort();
//   }, [faqs]);

//   const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

//   const escapeRegExp = (str) =>
//     str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

//   const escapeHtml = (unsafe) =>
//     unsafe
//       .replace(/&/g, "&amp;")
//       .replace(/</g, "&lt;")
//       .replace(/>/g, "&gt;")
//       .replace(/"/g, "&quot;")
//       .replace(/'/g, "&#039;");

//   // Highlight when we have Fuse match indices or fallback to simple regex-based highlight
//   const renderHighlighted = (text, faqItem, fieldName) => {
//     if (!text) return text;
//     // If fuse provided matches, use them for precise highlighting
//     if (faqItem && faqItem._matches) {
//       const matchEntry = faqItem._matches.find((m) => m.key === fieldName);
//       if (matchEntry && Array.isArray(matchEntry.indices) && matchEntry.indices.length) {
//         let lastIndex = 0;
//         let out = "";
//         matchEntry.indices.forEach(([start, end]) => {
//           // append text before match
//           out += escapeHtml(text.slice(lastIndex, start));
//           // append highlighted slice (end is inclusive in Fuse indices)
//           out += `<mark>${escapeHtml(text.slice(start, end + 1))}</mark>`;
//           lastIndex = end + 1;
//         });
//         out += escapeHtml(text.slice(lastIndex));
//         return <span dangerouslySetInnerHTML={{ __html: out }} />;
//       }
//     }

//     // Fallback: highlight occurrences of debouncedTerm
//     if (debouncedTerm) {
//       const q = escapeRegExp(debouncedTerm);
//       const re = new RegExp(`(${q})`, "ig");
//       const html = escapeHtml(text).replace(re, "<mark>$1</mark>");
//       return <span dangerouslySetInnerHTML={{ __html: html }} />;
//     }

//     // no highlight
//     return <span>{text}</span>;
//   };

//   // -------------------------------------------
//   // Filtered results (use Fuse results if ready, otherwise simple substring search)
//   const filtered = useMemo(() => {
//     let pool = faqs.slice(); // clone

//     // Apply tag filtering first
//     if (selectedTags.size > 0) {
//       pool = pool.filter((f) => (f.tags || []).some((t) => selectedTags.has(t)));
//     }

//     if (!debouncedTerm) {
//       // no search, return pool without matches
//       return pool;
//     }

//     // If fuse available, use it to search the whole dataset (but only among pool items)
//     if (fuseReady && fuseRef.current) {
//       // Fuse was built on the entire faqs list. To keep order & matches we search and then
//       // filter results to respect tag filtering by checking item existence in pool.
//       const results = fuseRef.current.search(debouncedTerm);
//       // results are sorted by score by Fuse; map to items and include matches in _matches
//       const items = results
//         .map((r) => ({ ...r.item, _matches: r.matches }))
//         .filter((it) => pool.includes(it));
//       // for items that matched tag filters but were not in Fuse hits (unlikely) add them (optional)
//       // return as-is
//       return items;
//     }

//     // Simple substring search fallback
//     const q = debouncedTerm.toLowerCase();
//     return pool.filter(
//       (f) =>
//         (f.question || "").toLowerCase().includes(q) ||
//         (f.answer || "").toLowerCase().includes(q) ||
//         ((f.tags || []).join(" ").toLowerCase().includes(q))
//     );
//   }, [faqs, debouncedTerm, selectedTags, fuseReady]);

//   // Suggestions (live, based on raw searchTerm before debounce)
//   const suggestions = useMemo(() => {
//     const q = searchTerm.trim().toLowerCase();
//     if (!q) return [];
//     const list = faqs
//       .filter(
//         (f) =>
//           (f.question || "").toLowerCase().includes(q) ||
//           (f.answer || "").toLowerCase().includes(q)
//       )
//       .slice(0, 6);
//     return list;
//   }, [searchTerm, faqs]);

//   // -------------------------------------------
//   // IntersectionObserver to load more (works with filtered list)
//   useEffect(() => {
//     const target = loadMoreRef.current;
//     if (!target) return;
//     const obs = new IntersectionObserver(
//       (entries) => {
//         const first = entries[0];
//         if (first.isIntersecting) {
//           setVisibleCount((prev) => Math.min(prev + BATCH_SIZE, filtered.length));
//         }
//       },
//       { rootMargin: "200px" }
//     );
//     obs.observe(target);
//     return () => obs.disconnect();
//   }, [filtered.length]);

//   // -------------------------------------------
//   // UI actions for tags and suggestions
//   const toggleTag = (tag) => {
//     setSelectedTags((prev) => {
//       const next = new Set(prev);
//       if (next.has(tag)) next.delete(tag);
//       else next.add(tag);
//       return next;
//     });
//   };

//   const clearSearch = () => {
//     setSearchTerm("");
//     setDebouncedTerm("");
//     setShowSuggestions(false);
//   };

//   const handleSuggestionClick = (s) => {
//     setSearchTerm(s.question);
//     setDebouncedTerm(s.question);
//     setShowSuggestions(false);
//     // open top result (optional)
//     const idx = filtered.findIndex((f) => f === s);
//     setOpenIndex(idx >= 0 ? idx : null);
//   };

//   // -------------------------------------------
//   return (
//     <main className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
//       {/* Header */}
//       <div className="w-full max-w-3xl mb-6 flex items-center justify-center relative">
//         <Link
//           href="/"
//           className="absolute left-0 flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-black hover:bg-gray-300 transition-colors"
//           aria-label="Back to Home"
//         >
//           <FiArrowLeft className="text-xl" />
//         </Link>
//         <h1 className="text-4xl font-bold text-gray-900">FAQ</h1>
//       </div>

//       {/* Search */}
//       <div className="w-full max-w-3xl mb-4">
//         <label htmlFor="faq-search" className="sr-only">
//           Search FAQs
//         </label>
//         <div className="relative">
//           <input
//             id="faq-search"
//             value={searchTerm}
//             onChange={(e) => {
//               setSearchTerm(e.target.value);
//               setShowSuggestions(true);
//             }}
//             onFocus={() => setShowSuggestions(true)}
//             onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
//             className="w-full rounded-md border border-gray-200 px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
//             placeholder="Search questions, answers, or tags... (try 'refund', 'pricing', etc.)"
//             aria-label="Search FAQs"
//           />
//           {searchTerm && (
//             <button
//               onClick={clearSearch}
//               className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-1 hover:bg-gray-100"
//               aria-label="Clear search"
//             >
//               <FiX />
//             </button>
//           )}

//           {/* Suggestions dropdown */}
//           {showSuggestions && suggestions.length > 0 && (
//             <ul className="absolute z-20 w-full bg-white border mt-1 rounded-md shadow-sm max-h-56 overflow-auto">
//               {suggestions.map((s, i) => (
//                 <li
//                   key={i}
//                   className="px-4 py-2 hover:bg-gray-50 cursor-pointer"
//                   onMouseDown={() => handleSuggestionClick(s)}
//                 >
//                   <div className="text-sm font-medium">
//                     {s.question.length > 100 ? s.question.slice(0, 100) + "…" : s.question}
//                   </div>
//                   <div className="text-xs text-gray-500 line-clamp-2">{s.answer.slice(0, 120)}</div>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>

//         {/* Tag filters */}
//         <div className="mt-3 flex flex-wrap gap-2">
//           {allTags.map((tag) => {
//             const active = selectedTags.has(tag);
//             return (
//               <button
//                 key={tag}
//                 onClick={() => toggleTag(tag)}
//                 className={`px-3 py-1 rounded-full border text-sm transition ${
//                   active ? "bg-indigo-600 text-white border-indigo-600" : "bg-white text-gray-700 border-gray-200"
//                 }`}
//                 aria-pressed={active}
//               >
//                 {tag}
//               </button>
//             );
//           })}
//           {selectedTags.size > 0 && (
//             <button
//               onClick={() => setSelectedTags(new Set())}
//               className="px-3 py-1 rounded-full border text-sm bg-white text-gray-600 border-gray-200"
//             >
//               Clear tags
//             </button>
//           )}
//         </div>

//         {/* result count */}
//         <div className="mt-2 text-sm text-gray-600">
//           {debouncedTerm || selectedTags.size > 0
//             ? `${filtered.length} result${filtered.length === 1 ? "" : "s"}`
//             : `${faqs.length} FAQs`}
//         </div>
//       </div>

//       {/* Accordion */}
//       <section className="w-full divide-y max-w-3xl divide-gray-200 rounded-xl bg-white p-4 shadow-sm">
//         {filtered.slice(0, visibleCount).map((faq, i) => {
//           // key prefer stable id if available
//           const key = faq.id ?? i;
//           return (
//             <div key={key} className="py-4">
//               <button
//                 onClick={() => toggle(i)}
//                 className="flex w-full items-start justify-between text-left gap-4 text-lg font-medium text-gray-800 hover:text-gray-900 focus:outline-none"
//                 aria-expanded={openIndex === i}
//               >
//                 <div className="flex-1">
//                   {renderHighlighted(faq.question, faq, "question")}
//                   <div className="mt-1 text-sm text-gray-500">
//                     {faq.tags && faq.tags.length > 0 && (
//                       <span className="inline-flex gap-1 items-center">
//                         {faq.tags.map((t) => (
//                           <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-gray-100">
//                             {t}
//                           </span>
//                         ))}
//                       </span>
//                     )}
//                   </div>
//                 </div>

//                 <FiChevronDown
//                   className={`ml-2 h-5 w-5 transform transition-transform duration-300 ${
//                     openIndex === i ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>

//               <AnimatePresence initial={false}>
//                 {openIndex === i && (
//                   <motion.div
//                     key="content"
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: "auto", opacity: 1 }}
//                     exit={{ height: 0, opacity: 0 }}
//                     transition={{ duration: 0.28, ease: "easeInOut" }}
//                     className="overflow-hidden mt-2"
//                   >
//                     <p className="text-gray-600 leading-relaxed px-1">
//                       {renderHighlighted(faq.answer, faq, "answer")}
//                     </p>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           );
//         })}

//         {/* Sentinel element to trigger load more */}
//         {visibleCount < filtered.length && (
//           <div ref={loadMoreRef} className="py-6 text-center text-gray-500">
//             Loading more…
//           </div>
//         )}

//         {/* No results */}
//         {filtered.length === 0 && (
//           <div className="py-8 text-center text-gray-500">
//             No results. Try different keywords or clear filters.
//           </div>
//         )}
//       </section>
//     </main>
//   );
// }


"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FiChevronDown, FiArrowLeft } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Fuse from "fuse.js";
import { faqs } from "@/utils/data"; // your FAQ array

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [filteredFaqs, setFilteredFaqs] = useState(faqs);

  const inputRef = useRef(null);
  const faqRefs = useRef([]); // refs for scrolling

  // Initialize Fuse for fuzzy search
  const fuse = new Fuse(faqs, {
    keys: ["question", "answer"],
    threshold: 0.3,
  });

  // Debounced search
  useEffect(() => {
    const handler = setTimeout(() => {
      if (!query.trim()) {
        setFilteredFaqs(faqs);
        setSuggestions([]);
        return;
      }
      const results = fuse.search(query);
      const matched = results.map((r) => r.item);
      setFilteredFaqs(matched);
      setSuggestions(matched.slice(0, 5)); // top 5 suggestions
    }, 300);

    return () => clearTimeout(handler);
  }, [query]);

  // Click suggestion: set query, open accordion, scroll
  const handleSuggestionClick = (faq) => {
    setQuery(faq.question);
    const index = faqs.findIndex((f) => f.question === faq.question);
    setFilteredFaqs([faq]);        // show only the selected FAQ
    setOpenIndex(0);               // open it (since filteredFaqs is now [faq])
    setSuggestions([]);
    // Scroll smoothly to the accordion item
    setTimeout(() => {
      if (faqRefs.current[0]) {
        faqRefs.current[0].scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <main className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      {/* Header */}
      <div className="w-full max-w-2xl mb-6 flex items-center justify-center relative">
        <Link
          href="/"
          className="absolute left-0 flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300"
          aria-label="Back to Home"
        >
          <FiArrowLeft className="text-xl" />
        </Link>
        <h1 className="text-4xl font-bold text-gray-900">FAQ</h1>
      </div>

      {/* Search Input */}
      <div className="w-full max-w-2xl relative mb-4">
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search FAQs..."
          className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        {suggestions.length > 0 && (
          <ul className="absolute w-full bg-white border border-gray-200 rounded-md mt-1 shadow z-10">
            {suggestions.map((s, idx) => (
              <li
                key={idx}
                onClick={() => handleSuggestionClick(s)}
                className="cursor-pointer px-3 py-2 hover:bg-gray-100"
              >
                {s.question}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Results Count */}
      <p className="mb-4 text-gray-600 text-sm w-full max-w-2xl">
        {filteredFaqs.length} results
      </p>

      {/* Accordion */}
      <section className="w-full divide-y max-w-2xl divide-gray-200 rounded-xl bg-white shadow">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, i) => (
            <div
              key={i}
              ref={(el) => (faqRefs.current[i] = el)}
              className="py-4 px-4"
            >
              <button
                onClick={() => toggle(i)}
                className="flex w-full items-center justify-between text-left text-lg font-medium text-gray-800 focus:outline-none"
                aria-expanded={openIndex === i}
              >
                {faq.question}
                <FiChevronDown
                  className={`ml-2 h-5 w-5 transform transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mt-2"
                  >
                    <p className="text-gray-600 leading-relaxed px-1">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))
        ) : (
          <div className="p-8 text-center text-gray-500">
            No results. Try different keywords or clear filters.
          </div>
        )}
      </section>
    </main>
  );
}
