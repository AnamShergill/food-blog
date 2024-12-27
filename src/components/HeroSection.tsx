import React from "react";


export default function HeroSection() {
  return (
    <section
      className="relative w-full h-[700px] bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/foodbg.jpg')",
        backgroundSize: "cover", 
        backgroundPosition: "center", 
      }}
    >
      {/* Overlay with a black transparent background */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      
      {/* Content container */}
      <div className="absolute top-0 left-0 flex flex-col justify-center h-full pl-5 sm:pl-10 md:pl-20 lg:pl-32 z-10 px-5 sm:px-10 lg:px-20">
        {/* Heading with animation */}
        <h1 className="text-black text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 animate-fade-up">
          HELLO FOODIES!
        </h1>

        {/* Animated welcome message */}
        <p className="text-fuchsia-950 font-medium text-3xl pb-2">
          {`Welcome to Foodie's Delight!`.split(' ').map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block animate-word-repeat" style={{ animationDelay: `${wordIndex * 0.5}s` }}>
              {word}
              {/* Add space between words */}
              <span>&nbsp;</span>
            </span>
          ))}
        </p>

        <p className="text-gray-900 font-semibold text-base sm:text-lg md:text-xl lg:text-2xl max-w-full sm:max-w-2xl leading-relaxed text-justify">
          Where every bite tells a story, and
          every dish is a new adventure. Whether you're a passionate home
          cook, a curious food lover, or just someone who enjoys savoring the
          best culinary experiences, this blog is your go-to guide. From
          mouthwatering recipes and hidden food gems to culinary tips and food
          trends, Foodie's Delight brings you a feast for the eyes and the
          tastebuds. Join me on this delicious journey, as we explore the
          world of flavors, one recipe at a time!
        </p>
      </div>
    </section>
  );
}

