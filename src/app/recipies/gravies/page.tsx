"use client";

import { useState } from "react"; 
import Image from "next/image"; 
import { motion } from "framer-motion"; 

export default function SoupsPage() {
  const [showRecipe, setShowRecipe] = useState<string | null>(null);

  const toggleRecipe = (recipeId: string) => {
    if (showRecipe === recipeId) {
      setShowRecipe(null); 
    } else {
      setShowRecipe(recipeId); 
    }
  };

  const graviesRecipes = [
    {
      id: "butter-chicken",
      title: "Butter Chicken",
      image: "/images/butter.jpg",
      description:
        "Dive into a luxurious, creamy chicken curry that boasts the perfect balance of spice and smooth, buttery flavor. This irresistible dish will captivate your taste buds with every bite.",
      backgroundColor: "#FF5733",
      ingredients: [
        "500g chicken breast, cut into cubes",
        "1 onion, finely chopped",
        "2 tomatoes, pureed",
        "1/2 cup cream",
        "2 tbsp butter",
        "1 tbsp ginger-garlic paste",
        "1 tsp garam masala",
        "1 tsp chili powder",
        "Salt to taste",
        "Fresh cilantro for garnish",
      ],
      instructions: [
        "Cook chicken until browned and set aside.",
        "In a pan, sauté onions and ginger-garlic paste until fragrant.",
        "Add tomato puree, garam masala, chili powder, and salt. Cook until the oil separates.",
        "Add cream and butter. Stir well.",
        "Return chicken to the gravy and simmer for 10 minutes.",
        "Garnish with cilantro and serve with naan or rice.",
      ],
    },
    {
      id: "chicken-tikka-masala",
      title: "Chicken Tikka Masala",
      image: "/images/tikka.jpg",
      description:
        "Experience the smokiness of perfectly grilled chicken enveloped in a rich, creamy tomato sauce, spiced just right. Each bite of this mouthwatering dish will transport you to a flavorful journey.",
      backgroundColor:"#FFC107",
      ingredients: [
        "500g chicken, marinated in yogurt and spices",
        "1 onion, chopped",
        "2 tomatoes, chopped",
        "1/4 cup cream",
        "2 tbsp tikka masala paste",
        "1 tbsp ginger-garlic paste",
        "1 tsp cumin powder",
        "Fresh coriander leaves for garnish",
      ],
      instructions: [
        "Grill or pan-fry the marinated chicken until fully cooked.",
        "In a pan, sauté onions and ginger-garlic paste.",
        "Add chopped tomatoes and cook until soft.",
        "Stir in tikka masala paste and cook for 5 minutes.",
        "Add cream and combine with cooked chicken.",
        "Garnish with coriander leaves and serve hot.",
      ],
    },
    {
      id: "chili-con-carne",
      title: "Chili Con Carne",
      image: "/images/beefchili.jpg", 
      description:
        "A hearty, spicy, and savory dish filled with tender beef, beans, and tomatoes, all simmered in a rich, smoky gravy. Perfect for warming up on cold nights!",
      backgroundColor: "#FF5733", 
      ingredients: [
        "500g ground beef",
        "1 onion, chopped",
        "2 cloves garlic, minced",
        "1 bell pepper, chopped",
        "2 tomatoes, chopped",
        "1 can kidney beans, drained and rinsed",
        "1 can black beans, drained and rinsed",
        "1 tbsp chili powder",
        "1 tsp cumin powder",
        "1 tsp paprika",
        "1/2 tsp cayenne pepper (optional, for extra heat)",
        "1 can diced tomatoes",
        "1 cup beef broth",
        "Salt and pepper to taste",
        "Fresh cilantro for garnish",
        "Sour cream, shredded cheese, and tortilla chips (optional, for serving)",
      ],
      instructions: [
        "In a large pot, cook the ground beef over medium heat until browned, breaking it apart as it cooks. Drain excess fat.",
        "Add the chopped onion, garlic, and bell pepper to the pot, cooking until softened.",
        "Stir in the chili powder, cumin, paprika, and cayenne pepper. Cook for another 1-2 minutes until the spices are fragrant.",
        "Add the chopped tomatoes, diced tomatoes, beef broth, kidney beans, and black beans. Stir to combine.",
        "Bring the chili to a simmer and cook for 30-40 minutes, stirring occasionally, until the flavors have melded together and the gravy has thickened.",
        "Season with salt and pepper to taste.",
        "Serve hot, topped with fresh cilantro, a dollop of sour cream, shredded cheese, and crispy tortilla chips if desired.",
      ],
    },
    {
      id: "beef-stroganoff",
      title: "Beef Stroganoff",
      image: "/images/beef.jpg",
      description:
        "Savor tender, melt-in-your-mouth beef cooked in a creamy, savory mushroom sauce. This comforting classic will warm your soul and leave you craving more with every bite.",
      backgroundColor: "#FFC107",
      ingredients: [
        "1 lb beef sirloin or tenderloin, thinly sliced",
        "2 tbsp olive oil",
        "1 onion, chopped",
        "2 cups mushrooms, sliced",
        "2 cloves garlic, minced",
        "1 cup beef broth",
        "1 tbsp Dijon mustard",
        "1/2 cup sour cream",
        "1 tbsp flour (optional, for thickening)",
        "Salt and pepper to taste",
        "Fresh parsley, chopped (for garnish)",
        "Egg noodles or rice for serving",
      ],
      instructions: [
        "Heat olive oil in a large skillet over medium-high heat. Add the beef slices and cook until browned on both sides. Remove the beef from the pan and set aside.",
        "In the same skillet, add the chopped onion and mushrooms. Cook until softened and the mushrooms release their moisture.",
        "Add the garlic and cook for another minute.",
        "Stir in the flour (if using) and cook for 1-2 minutes to thicken the sauce.",
        "Add the beef broth and Dijon mustard, scraping up any browned bits from the bottom of the pan. Bring the mixture to a simmer and cook for 4-5 minutes.",
        "Reduce heat to low and stir in the sour cream. Season with salt and pepper to taste.",
        "Return the beef to the skillet and simmer for an additional 2-3 minutes until heated through.",
        "Serve over egg noodles or rice and garnish with fresh parsley.",
      ],
    },
    {
      id: "turkey-gravy",
      title: "Turkey Gravy",
      image: "/images/turkey.jpg",
      description:
        "A silky smooth, savory gravy that perfectly complements your turkey, transforming each bite into a flavor-packed experience. Ideal for Thanksgiving or any feast.",
      backgroundColor: "#FF5733",
      ingredients: [
        "1/4 cup butter",
        "1/4 cup all-purpose flour",
        "2 cups turkey drippings (or chicken broth if you don’t have drippings)",
        "1/2 cup turkey or chicken broth (additional)",
        "Salt and pepper to taste",
        "Fresh thyme (optional)",
      ],
      instructions: [
        "In a saucepan, melt butter over medium heat. Add the flour and whisk to form a roux. Cook for 1-2 minutes until the mixture is golden and bubbling.",
        "Gradually add the turkey drippings (or chicken broth), whisking constantly to prevent lumps. Bring the mixture to a simmer and cook until it thickens, about 5-7 minutes.",
        "If the gravy is too thick, add more broth to reach the desired consistency.",
        "Season with salt and pepper to taste, and add fresh thyme if desired.",
        "Serve hot over turkey or mashed potatoes.",
      ],
    },
    {
      id: "mutton-rogan-josh",
      title: "Mutton Rogan Josh",
      image: "/images/muttonjosh.jpeg",
      description:
        "A hearty, flavorful mutton curry rich in spices, slow-cooked to perfection. The deep, aromatic sauce makes every bite a comforting experience of warmth and depth.",
      backgroundColor: "#FFC107",
      ingredients: [
        "500g mutton pieces",
        "2 onions, chopped",
        "2 tomatoes, chopped",
        "1 tbsp ginger-garlic paste",
        "2 tbsp yogurt",
        "1 tsp garam masala",
        "2 tbsp oil",
        "Salt to taste",
      ],
      instructions: [
        "Heat oil and sauté onions and ginger-garlic paste until soft.",
        "Add tomatoes, yogurt, and spices. Cook for 10 minutes.",
        "Add mutton and cook until browned.",
        "Add water, simmer until mutton is tender.",
        "Serve hot with rice or naan.",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-6 py-10">
 {/* Intro Section */}
 <section className="bg-slate-200 text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-4">Silky & Savory Gravies Recipes</h1>
          <p className="text-lg text-gray-700">
          Explore a world of flavors with these delectable gravies from around the globe.
Perfect for adding richness and depth to any dish.<br/>
Let’s dive in!
          </p>
        </motion.div>
      </section>
      <div id="recipes" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {graviesRecipes.map((recipe) => (
          <motion.div
            key={recipe.id}
            className="rounded-lg overflow-hidden border border-fuchsia-500 shadow-lg hover:shadow-xl transition duration-300"
            whileHover={{ scale: 1.05 }}
            style={{ backgroundColor: recipe.backgroundColor }} 
          >
            <Image
              src={recipe.image}
              alt={recipe.title}
              width={500}
              height={300}
              className="w-full h-80 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold text-gray-800 mt-4 underline">{recipe.title}</h3>
              <p className="text-gray-900 text-base mt-2">{recipe.description}</p>
              <button
              onClick={() => toggleRecipe(recipe.id)}
              className="bg-fuchsia-950 text-white px-6 py-2 rounded-md mt-4 hover:bg-fuchsia-800 transition duration-300"
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
