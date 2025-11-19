"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <footer className="bg-[#3a0820] relative text-white overflow-hidden ">
      {/* Top Section */}
      <div className="relative max-w-[90rem] mx-auto pt-16 py-16 sm:py-0 flex flex-col md:flex-row md:items-start gap-12">
        {/* Left Content */}
        <div className="flex-1 order-2 md:order-1 p-[20px] md:p-[80px]">
          <h3 className="text-2xl md:text-4xl text-orange-500">
            Transform Your GST Compliance Today
          </h3>
          <p className="mt-4  max-w-2xl text-orange-500">
            Ready to stop fighting with your GST software and start experiencing
            flawless compliance with the ultimate operators?
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <Link
              href="mailto:hello@unigst.com?subject=GST%20Consultation&body=Hi%20Team,%0A%0AI%20would%20like%20to%20get%20started%20with%20your%20GST%20services.%0A%0AThanks."
              className="flex justify-between items-center gap-2 px-6 py-3 bg-white text-black rounded-2xl font-medium hover:bg-[#c7e410] transition"
            >
              Get Started <FiArrowRight size={16} />
            </Link>
            <motion.a
              href="tel:+919945933333"
              onHoverStart={() => setHovered(true)}
              onHoverEnd={() => setHovered(false)}
              className="relative md:flex items-center rounded-full overflow-hidden px-4 py-2 cursor-pointer"
            >
              <motion.span
                className="absolute inset-0 bg-[#c7e410]"
                initial={{ x: "100%" }}
                animate={{ x: hovered ? "0%" : "100%" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
              <span
                className={`relative flex items-center justify-between w-full gap-2 text-[${
                  hovered ? "#000" : "#c7e410"
                }] font-medium`}
              >
                <motion.span
                  key={hovered ? "number" : "text"}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {hovered ? "+919945933333" : "Give us a Call"}
                </motion.span>
                <motion.span
                  className="flex items-center justify-center w-6 h-6 rounded-full text-white"
                  animate={{ backgroundColor: hovered ? "#460021" : "#c7e410" }}
                  transition={{ duration: 0.3 }}
                >
                  <FiArrowRight size={16} />
                </motion.span>
              </span>
            </motion.a>
          </div>
        </div>

        {/* Right Visual (replace canvas with image) */}
        <div className="relative w-full md:w-1/2 order-1 md:order-2">
          <img
            src="/images/footer-bg.png" // replace with your actual image
            alt="Footer visual"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      
      <div className="max-w-[90rem] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-orange-500">
        {/* Social Section */}
        <div>
          <Link href="/" className="flex items-center">
            <img
              src="images/UNIGST.png"
              alt="Techspeed Logo"
              className="w-full h-auto mb-7"
            />
          </Link>
          <h4 className="uppercase text-[#b866fa] text-sm">Social</h4>
          <div className="mt-4 flex items-center gap-4 text-gray-300">
            <a
              href="https://www.linkedin.com/unigst"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[rgb(209,244,112)] transition"
            >
              <FaLinkedinIn size={18} />
            </a>
            {/* <a
              href="https://www.facebook.com/unigst"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[rgb(209,244,112)] transition"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="https://twitter.com/unigst"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[rgb(209,244,112)] transition"
            >
              <FaTwitter size={18} />
            </a> */}
            <a
              href="https://www.instagram.com/unigstindia"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[rgb(209,244,112)] transition"
            >
              <FaInstagram size={18} />
            </a>
            {/* <a
              href="https://www.youtube.com/@unigst"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[rgb(209,244,112)] transition"
            >
              <FaYoutube size={18} />
            </a> */}
          </div>
        </div>
        <div>
          <h4 className="uppercase text-[#b866fa] text-sm">Locations</h4>
          <ul className="mt-4 space-y-1 text-sm text-gray-300">
            <li>
              <a
                href="https://gst-next.vercel.app/gst-consultants-bangalore"
                target="_blank"
                rel="noreferrer"
                className="text-[#ec5b29] hover:text-[#c7e410]"
              >
                Bangalore
              </a>
            </li>

            <li>
              <a
                href="https://gst-next.vercel.app/gst-consultants-mumbai"
                target="_blank"
                rel="noreferrer"
                className="text-[#ec5b29] hover:text-[#c7e410]"
              >
                Mumbai
              </a>
            </li>

            <li>
              <a
                href="https://gst-next.vercel.app/gst-consultants-delhi"
                target="_blank"
                rel="noreferrer"
                className="text-[#ec5b29] hover:text-[#c7e410]"
              >
                Delhi
              </a>
            </li>

            <li>
              <a
                href="https://gst-next.vercel.app/gst-consultants-chennai"
                target="_blank"
                rel="noreferrer"
                className="text-[#ec5b29] hover:text-[#c7e410]"
              >
                Chennai
              </a>
            </li>

            <li>
              <a
                href="https://gst-next.vercel.app/gst-consultants-hyderabad"
                target="_blank"
                rel="noreferrer"
                className="text-[#ec5b29] hover:text-[#c7e410]"
              >
                Hyderabad
              </a>
            </li>

            <li>
              <a
                href="https://gst-next.vercel.app/gst-consultants-pune"
                target="_blank"
                rel="noreferrer"
                className="text-[#ec5b29] hover:text-[#c7e410]"
              >
                Pune
              </a>
            </li>

            <li>
              <a
                href="https://gst-next.vercel.app/gst-consultants-kolkata"
                target="_blank"
                rel="noreferrer"
                className="text-[#ec5b29] hover:text-[#c7e410]"
              >
                Kolkata
              </a>
            </li>

            <li>
              <a
                href="https://gst-next.vercel.app/gst-consultants-ahmedabad"
                target="_blank"
                rel="noreferrer"
                className="text-[#ec5b29] hover:text-[#c7e410]"
              >
                Ahmedabad
              </a>
            </li>

            <li>
              <a
                href="https://gst-next.vercel.app/gst-consultants-surat"
                target="_blank"
                rel="noreferrer"
                className="text-[#ec5b29] hover:text-[#c7e410]"
              >
                Surat
              </a>
            </li>

            <li>
              <a
                href="https://gst-next.vercel.app/gst-consultants-gurgaon"
                target="_blank"
                rel="noreferrer"
                className="text-[#ec5b29] hover:text-[#c7e410]"
              >
                Gurgaon
              </a>
            </li>

            <li>
              <a
                href="https://gst-next.vercel.app/gst-consultants-noida"
                target="_blank"
                rel="noreferrer"
                className="text-[#ec5b29] hover:text-[#c7e410]"
              >
                Noida
              </a>
            </li>

            <li>
              <a
                href="https://gst-next.vercel.app/gst-consultants-jaipur"
                target="_blank"
                rel="noreferrer"
                className="text-[#ec5b29] hover:text-[#c7e410]"
              >
                Jaipur
              </a>
            </li>

            <li>
              <a
                href="https://gst-next.vercel.app/gst-consultants-lucknow"
                target="_blank"
                rel="noreferrer"
                className="text-[#ec5b29] hover:text-[#c7e410]"
              >
                Lucknow
              </a>
            </li>

            <li>
              <a
                href="https://gst-next.vercel.app/gst-consultants-indore"
                target="_blank"
                rel="noreferrer"
                className="text-[#ec5b29] hover:text-[#c7e410]"
              >
                Indore
              </a>
            </li>

            <li>
              <a
                href="https://gst-next.vercel.app/gst-consultants-coimbatore"
                target="_blank"
                rel="noreferrer"
                className="text-[#ec5b29] hover:text-[#c7e410]"
              >
                Coimbatore
              </a>
            </li>

            <li>
              <a
                href="https://gst-next.vercel.app/gst-consultants-vadodara"
                target="_blank"
                rel="noreferrer"
                className="text-[#ec5b29] hover:text-[#c7e410]"
              >
                Vadodara
              </a>
            </li>

            <li>
              <a
                href="https://gst-next.vercel.app/gst-consultants-visakhapatnam"
                target="_blank"
                rel="noreferrer"
                className="text-[#ec5b29] hover:text-[#c7e410]"
              >
                Visakhapatnam
              </a>
            </li>

            <li>
              <a
                href="https://gst-next.vercel.app/gst-consultants-nagpur"
                target="_blank"
                rel="noreferrer"
                className="text-[#ec5b29] hover:text-[#c7e410]"
              >
                Nagpur
              </a>
            </li>

            <li>
              <a
                href="https://gst-next.vercel.app/gst-consultants-bhopal"
                target="_blank"
                rel="noreferrer"
                className="text-[#ec5b29] hover:text-[#c7e410]"
              >
                Bhopal
              </a>
            </li>

            <li>
              <a
                href="https://gst-next.vercel.app/gst-consultants-kanpur"
                target="_blank"
                rel="noreferrer"
                className="text-[#ec5b29] hover:text-[#c7e410]"
              >
                Kanpur
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="uppercase text-[#b866fa] text-sm">Industries</h4>
        
          <ul className="mt-4 space-y-1 text-sm text-gray-300">
            <li className="">
              <a
                href="https://www.epfdesk.com/pf-esic-consultant-education-sector-bangalore/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ec5b29] hover:text-[#c7e410]"
              >
                Education
              </a>
            </li>
            <li className=" ">
              <a
                href="https://www.epfdesk.com/pf-esic-consultant-hospitality-bangalore/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ec5b29] hover:text-[#c7e410]"
              >
                Hospitality
              </a>
            </li>
            <li className=" ">
              <a
                href="https://www.epfdesk.com/pf-esic-consultant-facility-management-bangalore/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ec5b29] hover:text-[#c7e410]"
              >
                Facility Management
              </a>
            </li>
            <li className=" ">
              <a
                href="https://www.epfdesk.com/pf-esic-consultant-transport-logistics-bangalore/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ec5b29] hover:text-[#c7e410]"
              >
                Transport Logistics
              </a>
            </li>
            <li className=" ">
              <a
                href="https://www.epfdesk.com/pf-esic-consultant-construction-bangalore/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ec5b29] hover:text-[#c7e410]"
              >
                Construction
              </a>
            </li>
            <li className=" ">
              <a
                href="https://www.epfdesk.com/pf-esic-consultant-manufacturing-bangalore/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ec5b29] hover:text-[#c7e410]"
              >
                Manufacturing
              </a>
            </li>
          </ul>
        </div>

        {/* Get In Touch Section */}
        <div>
          <h4 className="uppercase text-[#b866fa] text-sm">Get In Touch</h4>
          <ul className="mt-4 space-y-2 text-sm text-[#ec5b29] cursor-none pointer-events-none">
            <li>
              Headquarters - India <br />
              <a href="" target="_blank" rel="noreferrer">
                62/63 Church Street, Karnataka, 560001
              </a>
            </li>
            <li>
              <a href="tel:+919980511980">+919945933333</a>
            </li>
            <li>
              <a href="mailto:hello@unigst.com">hello@unigst.com</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-[90rem] mx-auto px-6 py-8 border-t border-orange-500 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
        <p>© 2025 | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
