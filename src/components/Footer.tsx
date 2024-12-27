import React from 'react';
import { FaGithub } from 'react-icons/fa'; 
import { MdEmail } from 'react-icons/md'; 
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex flex-col md:flex-row gap-6 justify-around bg-fuchsia-950 text-white p-10 md:p-12 items-center"
    >
      {/* Footer Left: Contact Info */}
      <div className="flex items-center space-x-1 ">
        <Image
                    src="/images/logo.png" 
                    alt="Foodie's Delight Logo"
                    width={80} 
                    height={70} 
                    className="self-center" 
                  />
          <Link href={"/"}>
            <span
              className="text-4xl text-yellow-300"
              style={{
                fontFamily: "'Pacifico', cursive",
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
              }}
            >
              Foodie's Delight
            </span>
          </Link>
        </div>

      {/* Footer Middle: Navigation Links */}
      <ul className="text-sm md:text-xl flex flex-col md:flex-row gap-4">
        <li className="flex items-center gap-1">
          <a href="/" className="hover:text-yellow-300">Home</a>
        </li>
        <li className="flex items-center gap-1">
          <a href="#about" className="hover:text-yellow-300">About</a>
        </li>
        <li className="flex items-center gap-1">
          <a href="#recipes" className="hover:text-yellow-300">Recipes</a>
        </li>
      </ul>

      {/* Footer Right: Social Media & Email */}
      <div className="flex flex-col items-center md:items-start">
        <ul className="text-sm md:text-xl">
          {/* Email */}
          <li className="flex items-center gap-2 mb-2">
            <MdEmail size={20} />
            <a href="mailto:pinkyshergill1986@gmail.com?subject=Subject%20Here&body=Hello%2C%20I'd%20like%20to%20..." className="hover:text-yellow-300">
              Send me an Email
            </a>
          </li>

          {/* GitHub */}
          <li className="flex items-center gap-2 mb-2">
            <FaGithub size={20} />
            <a href="https://github.com/AnamShergill" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
              github.com/AnamShergill
            </a>
          </li>

          
        </ul>
      </div>
    </div>
  );
};

export default Footer;
