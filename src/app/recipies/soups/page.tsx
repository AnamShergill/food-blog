"use client";

import { useState } from "react"; 
import Image from "next/image"; 
import { motion } from "framer-motion"; // Imported Framer Motion for animations

export default function SoupsPage() {
  const [showRecipe, setShowRecipe] = useState<string | null>(null); 

  const toggleRecipe = (recipeId: string) => {
    if (showRecipe === recipeId) {
      setShowRecipe(null); // Hide recipe if already visible
    } else {
      setShowRecipe(recipeId); // Show recipe when clicked
    }
  };

  const soupsRecipes = [
    {
      id: "tomato",
      title: "Classic Tomato Soup",
      image: "/images/tomato.jpg",
      description:
        "This classic tomato soup recipe is smooth, creamy, and packed with flavor. It’s a great starter or a meal on its own, perfect when paired with a grilled cheese sandwich.",
      backgroundColor: "#D8CAB8", 
      ingredients: [
        "4 cups fresh tomatoes",
        "1 medium onion, chopped",
        "2 cloves garlic, minced",
        "1 cup vegetable broth",
        "1/2 cup cream (optional)",
        "Salt and pepper to taste",
      ],
      instructions: [
        "Heat oil in a large pot and sauté onions and garlic until softened.",
        "Add tomatoes and vegetable broth, then simmer for 20 minutes.",
        "Blend until smooth and creamy.",
        "Add cream (optional) for richness and adjust seasoning. Serve hot and enjoy!",
      ],
    },
    {
      id: "chicken-noodle",
      title: "Chicken Noodle Soup",
      image: "/images/noodlesoup.jpg",
      description:
        "A hearty and comforting soup, Chicken Noodle Soup is made with tender chicken, veggies, and perfectly cooked noodles. It's the ultimate comfort food.",
      backgroundColor: "#FAD6A5", 
      ingredients: [
        "2 chicken breasts, shredded",
        "4 cups chicken broth",
        "2 cups noodles",
        "1 cup carrots, sliced",
        "1 celery stalk, chopped",
        "Salt and pepper to taste",
      ],
      instructions: [
        "In a pot, combine chicken broth, shredded chicken, carrots, and celery.",
        "Bring to a boil, then add noodles and cook for 10 minutes.",
        "Adjust seasoning and serve hot.",
      ],
    },
    {
      id: "creamy-mushroom",
      title: "Creamy Mushroom Soup",
      image: "/images/mushroom1.jpg",
      description:
        "This rich and creamy mushroom soup is full of earthy flavors and the perfect dish to warm up your day. Made with fresh mushrooms and a creamy base, it’s pure comfort in a bowl.",
      backgroundColor: "#D8CAB8", 
      ingredients: [
        "2 cups mushrooms, sliced",
        "1 onion, chopped",
        "2 cloves garlic, minced",
        "2 cups vegetable broth",
        "1/2 cup heavy cream",
        "Salt and pepper to taste",
      ],
      instructions: [
        "Sauté mushrooms, onions, and garlic in a pot until softened.",
        "Add vegetable broth and simmer for 15 minutes.",
        "Blend the soup until smooth, then stir in cream.",
        "Adjust seasoning and serve hot.",
      ],
    },
    {
      id: "lentil",
      title: "Spiced Lentil Soup",
      image: "/images/lentilsoup.jpg",
      description: "A nutritious and flavorful lentil soup infused with aromatic spices. This is a perfect wholesome meal for any day of the week.",
      backgroundColor: "#FAD6A5",
      ingredients: [
        "1 cup red lentils",
        "1 medium onion, chopped",
        "2 cloves garlic, minced",
        "1 teaspoon cumin",
        "1/2 teaspoon turmeric",
        "4 cups vegetable broth",
        "Juice of 1 lemon",
        "Salt and pepper to taste",
      ],
      instructions: [
        "Sauté onion and garlic with cumin and turmeric until fragrant.",
        "Add lentils and vegetable broth, then simmer for 20-25 minutes.",
        "Blend partially for a creamy texture or leave chunky.",
        "Add lemon juice, adjust seasoning, and serve hot.",
      ],
    },
    {
      id: "butternut-squash",
      title: "Roasted Butternut Squash Soup",
      image: "/images/butternutsoup.jpg",
      description: "Sweet and savory roasted butternut squash soup, blended to creamy perfection. A must-try for autumn and winter months.",
      backgroundColor: "#D8CAB8",
      ingredients: [
        "1 medium butternut squash, roasted",
        "1 onion, chopped",
        "2 cups vegetable broth",
        "1/2 cup coconut milk",
        "1 teaspoon nutmeg",
        "Salt and pepper to taste",
      ],
      instructions: [
        "Roast butternut squash until tender and caramelized.",
        "Sauté onion in a pot, then add roasted squash and vegetable broth.",
        "Blend until smooth, then stir in coconut milk and nutmeg.",
        "Adjust seasoning and serve warm.",
      ],
    },
    {
      id: "minestrone",
      title: "Classic Minestrone Soup",
      image: "/images/minestrone.jpg",
      description: "A hearty Italian classic loaded with fresh vegetables, beans, and pasta in a rich tomato broth. Perfect for a wholesome and delicious meal.",
      backgroundColor: "#FAD6A5",
      ingredients: [
        "1 onion, chopped",
        "2 cloves garlic, minced",
        "1 cup diced tomatoes",
        "2 cups vegetable broth",
        "1 cup zucchini, diced",
        "1 cup cooked kidney beans",
        "1/2 cup pasta",
        "1 teaspoon dried oregano",
        "Salt and pepper to taste",
      ],
      instructions: [
        "Sauté onion and garlic in a pot until fragrant.",
        "Add diced tomatoes, vegetable broth, and oregano. Simmer for 10 minutes.",
        "Stir in zucchini, beans, and pasta. Cook until pasta is tender.",
        "Adjust seasoning and serve with a sprinkle of Parmesan cheese, if desired.",
      ],
    },
  ];

  

  return (
    <div className="container mx-auto px-6 py-10">
      <section id="recipes" className="bg-slate-200 text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-4">Soul-Warming Soups Recipes</h1>
          <p className="text-lg text-gray-700">
            Discover a collection of delicious, soul-warming soups perfect for any season. These recipes are packed with flavor and comfort. <br />
            Let's dive in!
          </p>
        </motion.div>
      </section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 px-4">
        {soupsRecipes.map((recipe) => (
          <motion.div
            key={recipe.id}
            className="bg-white rounded-lg overflow-hidden border border-fuchsia-500 shadow-lg hover:shadow-xl transition duration-300"
            whileHover={{ scale: 1.05 }}
            style={{ backgroundColor: recipe.backgroundColor }} 
          >
            <Image
              src={recipe.image}
              alt={recipe.title}
              width={500}
              height={400} 
              className="w-full h-80 object-cover" 
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 underline">{recipe.title}</h3>
              <p className="text-gray-900 text-base mb-4">{recipe.description}</p>
              <button
                onClick={() => toggleRecipe(recipe.id)}
                className="bg-fuchsia-950 text-white px-4 py-2 rounded-md hover:bg-fuchsia-800 transition duration-300"
              >
                {showRecipe === recipe.id ? "Hide Recipe" : "Show Recipe"}
              </button>
              {showRecipe === recipe.id && (
                <div className="mt-5">
                  <h4 className="text-lg font-semibold">Ingredients:</h4>
                  <ul className="list-disc pl-5">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                  <h4 className="text-lg font-semibold mt-4">Instructions:</h4>
                  <ol className="list-decimal pl-5">
                    {recipe.instructions.map((instruction, index) => (
                      <li key={index}>{instruction}</li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
