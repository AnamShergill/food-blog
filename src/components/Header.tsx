'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen] = useState(false);

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
        <div className={`flex flex-wrap justify-between md:items-center text-white font-semibold text-xl px-10 md:px-20 space-x-6 ${isMenuOpen ? 'block' : 'hidden sm:flex'}`}>
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

      </div>

      
      
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
