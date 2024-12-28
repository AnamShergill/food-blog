"use client";

import React, { useState } from "react"; // Import useState for dynamic year
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  // Specify that the state will hold a number, not null
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());

  return (
    <div
      id="Footer"
      className="flex flex-col md:flex-row gap-32 justify-between bg-fuchsia-950 text-white p-6 md:p-12"
    >
      {/* Footer Left: Contact Info */}
      <div className="flex items-center space-x-2 flex-1 md:flex-none justify-center md:justify-start">
        <Image
          src="/images/logo.png"
          alt="Foodie's Delight Logo"
          width={80}
          height={70}
          className="self-center"
        />
        <Link href={"/"}>
          <span
            className="text-3xl md:text-4xl text-yellow-300"
            style={{
              fontFamily: "'Pacifico', cursive",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
            }}
          >
            Foodie's Delight
          </span>
        </Link>
      </div>

      {/* Footer Center: Social Media & Email */}
      <div className="flex flex-col items-center md:items-start flex-1 justify-center md:justify-start">
        <ul className="text-sm md:text-lg space-y-3">
          {/* Email */}
          <li className="flex items-center gap-2">
            <MdEmail size={20} />
            <a
              href="mailto:pinkyshergill1986@gmail.com?subject=Subject%20Here&body=Hello%2C%20I'd%20like%20to%20..."
              className="hover:text-yellow-300"
            >
              Send me an Email
            </a>
          </li>

          {/* GitHub */}
          <li className="flex items-center gap-2">
            <FaGithub size={20} />
            <a
              href="https://github.com/AnamShergill"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300"
            >
              github.com/AnamShergill
            </a>
          </li>
        </ul>
      </div>

      {/* Footer Bottom: Copyright */}
      <div className="w-full text-white text-center py-4 mt-6">
        <p>
          &copy; {currentYear} Foodie's Delight. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
