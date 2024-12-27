'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-fuchsia-950">
      <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center px-4 py-3">
        
        {/* Foodie's Delight Logo with Image and New Font Style */}
        <div className="flex items-center space-x-1">
          {/* Add Logo Image */}
          <Image
            src="/images/logo.png" 
            alt="Foodie's Delight Logo"
            width={80} 
            height={80} 
            className="object-contain"
          />
          <Link href={"/"}>
            <span
              className="text-4xl text-yellow-300"
              style={{
                fontFamily: "'Pacifico', cursive",
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                lineHeight: '60px',  
              }}
            >
              Foodie's Delight
            </span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-between md:items-center text-white font-semibold text-xl px-10 md:px-20 space-x-6">
          <Link href="#/" className="text-white">
            Home
          </Link>
          <Link href="#about" className="text-white">
            About
          </Link>
          <Link href="/" scroll={false} className="text-white" onClick={scrollToRecipes}>
            Recipes
          </Link>
        </div>

        {/* Burger Menu Icon */}
        <div className="sm:hidden flex items-center">
          <button
            className="text-white focus:outline-none"
            onClick={() => setMenuOpen(!isMenuOpen)}
          >
            {/* Burger Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Collapsible Menu for Small Screens */}
      {isMenuOpen && (
        <div className="sm:hidden bg-fuchsia-700 text-white flex flex-col items-center space-y-3 py-3">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="#about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link href="/" scroll={false} onClick={(e) => { 
            e.preventDefault(); 
            scrollToRecipes(); 
            setMenuOpen(false); 
          }}>
            Recipes
          </Link>
        </div>
      )}
    </header>
  );

  // Function to handle the scroll to the recipes section on Home page
  function scrollToRecipes() {
    if (window.location.pathname === '/') {
      const recipesSection = document.getElementById('recipes');
      if (recipesSection) {
        recipesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
