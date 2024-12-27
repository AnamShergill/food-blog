"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function About() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<{ name: string; comment: string }[]>([]);

  const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name && comment) {
      const newComment = { name, comment };
      setComments([newComment, ...comments]);
      setName("");
      setComment("");
    } else {
      alert("Please fill in both fields.");
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  return (
    <div
      id="about"
      className="flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-8"
    >
      <motion.div
        className="container w-full sm:w-3/4 md:w-1/2 bg-pink-200 py-12 px-6 mb-10 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <style jsx global>{`
          @import url("https://fonts.googleapis.com/css2?family=Great+Vibes&family=Merriweather:wght@300;400;700&display=swap");
        `}</style>

        <h2
          className="text-3xl sm:text-4xl md:text-5xl mb-6 text-fuchsia-800 text-center"
          style={{
            fontFamily: "'Great Vibes', cursive",
            letterSpacing: "0.05em",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
          }}
        >
          About Me
        </h2>
        <p
          className="text-base sm:text-lg leading-relaxed text-gray-700 mb-8 text-center"
          style={{ fontFamily: "'Merriweather', serif" }}
        >
          Hi there! I'm{" "}
          <span className="text-fuchsia-600 font-semibold">Anam Shergill</span>, a
          passionate food enthusiast, home chef, and Web Developer. Growing up,
          my love for food was nurtured in a cozy kitchen filled with tantalizing
          aromas and endless culinary experiments. Whether it's recreating
          traditional recipes or inventing something entirely new, cooking has
          always been my creative escape.
        </p>
        <p
          className="text-base sm:text-lg leading-relaxed text-gray-700 mb-8 text-center"
          style={{ fontFamily: "'Merriweather', serif" }}
        >
          I created{" "}
          <span className="text-fuchsia-600 font-semibold">'Foodie's Delight'</span>{" "}
          as a space to celebrate the magic of food. This blog is my way of
          sharing easy-to-follow recipes. Whether you're a seasoned cook or a
          curious beginner, there's something here for everyone.
        </p>
        <p
          className="text-base sm:text-lg leading-relaxed text-gray-700 text-center"
          style={{ fontFamily: "'Merriweather', serif" }}
        >
          I’m so glad you’re here! Feel free to explore, try out some recipes,
          and let me know what you think. Your feedback and shared experiences
          inspire me to keep creating. Let's make the world a tastier place, one
          recipe at a time!
        </p>

        {/* Comment Section */}
        <div className="mt-12">
          <h3 className="text-2xl sm:text-3xl mb-4 text-center text-fuchsia-800">
            Leave a Comment
          </h3>
          <form onSubmit={handleCommentSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-lg text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="comment" className="block text-lg text-gray-700">
                Your Comment
              </label>
              <textarea
                id="comment"
                value={comment}
                onChange={handleCommentChange}
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg"
                rows={4}
                placeholder="Enter your comment"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-fuchsia-600 text-white py-2 rounded-lg mt-4"
            >
              Submit Comment
            </button>
          </form>

          {/* Display Comments */}
          <div className="mt-8 space-y-4">
            {comments.length > 0 ? (
              comments.map((comment, index) => (
                <div key={index} className="p-4 bg-white shadow-md rounded-lg">
                  <p className="font-semibold text-gray-800">{comment.name}</p>
                  <p className="text-gray-600">{comment.comment}</p>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">
                No comments yet. Be the first to comment!
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
