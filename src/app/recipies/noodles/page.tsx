"use client";

import { useState } from "react"; 
import Image from "next/image";
import { motion } from "framer-motion"; 

export default function NoodlesPage() {
  const [showRecipe, setShowRecipe] = useState<string | null>(null);

  const toggleRecipe = (recipeId: string) => {
    if (showRecipe === recipeId) {
      setShowRecipe(null);
    } else {
      setShowRecipe(recipeId);
    }
  };

  const recipes = [
    {
      id: "pad-thai",
      title: "Classic Pad Thai",
      image: "/images/thai.jpg",
      description:
        "A tantalizing Thai street food dish bursting with flavors of tamarind, fish sauce, and peanuts. The stir-fried noodles, shrimp, and vibrant toppings create the perfect balance of sweet, savory, and sour notes in every bite.",
      backgroundColor: "#F4A261",
        ingredients: [
        "200g rice noodles",
        "100g shrimp (optional)",
        "2 eggs",
        "3 tbsp tamarind paste",
        "2 tbsp fish sauce",
        "1 tbsp sugar",
        "1 cup bean sprouts",
        "1/4 cup chopped peanuts",
        "2 green onions, sliced",
        "Lime wedges for serving",
      ],
      instructions: [
        "Soak rice noodles in warm water until softened, then drain.",
        "In a wok, scramble eggs and set aside.",
        "Cook shrimp until pink, then set aside.",
        "Add tamarind paste, fish sauce, and sugar to the wok. Stir until combined.",
        "Toss in noodles, eggs, and shrimp. Stir-fry for 2-3 minutes.",
        "Garnish with bean sprouts, peanuts, and green onions. Serve with lime wedges.",
      ],
    },
    {
      id: "ramen",
      title: "Spicy Miso Ramen",
      image: "/images/ramen.jpg",
      description:
        "A steaming bowl of ramen packed with spicy miso broth, hearty ramen noodles, and tender toppings. This dish promises a comforting, savory meal with the perfect balance of heat and umami, topped with a soft-boiled egg and fresh vegetables.",
        backgroundColor: "#E76F51",
        ingredients: [
        "200g ramen noodles",
        "4 cups chicken or vegetable broth",
        "2 tbsp miso paste",
        "1 tbsp chili paste",
        "2 soft-boiled eggs",
        "1 cup sliced mushrooms",
        "1/2 cup corn",
        "1 green onion, chopped",
        "Nori sheets for garnish",
      ],
      instructions: [
        "Cook ramen noodles according to package instructions.",
        "In a pot, heat broth and whisk in miso paste and chili paste.",
        "Add mushrooms and corn. Simmer for 5 minutes.",
        "Divide noodles into bowls and pour over the broth.",
        "Top with soft-boiled eggs, green onion, and nori. Serve hot.",
      ],
    },
    {
      id: "chow-mein",
      title: "Vegetable Chow Mein",
      image: "/images/vegchow.jpg",
      description:
        "A stir-fried noodle dish with a rainbow of crisp vegetables, coated in a savory soy and oyster sauce. The vegetables add a refreshing crunch to the chewy noodles, creating a satisfying dish bursting with vibrant flavors.",
      backgroundColor: "#F4A261",
        ingredients: [
        "200g chow mein noodles",
        "1 cup sliced bell peppers",
        "1 cup broccoli florets",
        "1 carrot, julienned",
        "2 tbsp soy sauce",
        "1 tbsp oyster sauce",
        "1 tsp sesame oil",
        "2 cloves garlic, minced",
      ],
      instructions: [
        "Cook chow mein noodles and set aside.",
        "In a wok, heat sesame oil and sauté garlic until fragrant.",
        "Add vegetables and stir-fry for 3-4 minutes.",
        "Toss in noodles, soy sauce, and oyster sauce. Stir-fry for another 2 minutes.",
        "Serve hot.",
      ],
    },
    {
      id: "spaghetti-carbonara",
      title: "Spaghetti Carbonara",
      image: "/images/carbonara.jpeg",
      description:
        "A rich and creamy Italian classic, this dish features al dente spaghetti tossed with crispy pancetta, creamy egg-based sauce, and a generous amount of Parmesan cheese. Every bite is a luxurious combination of smoky, savory, and cheesy goodness.",
        backgroundColor: "#E76F51",
        ingredients: [
        "200g spaghetti",
        "100g pancetta, diced",
        "2 eggs",
        "1/2 cup grated Parmesan cheese",
        "Salt and black pepper to taste",
      ],
      instructions: [
        "Cook spaghetti until al dente. Reserve 1/2 cup pasta water.",
        "In a pan, cook pancetta until crispy.",
        "Whisk eggs and Parmesan cheese together in a bowl.",
        "Toss spaghetti with pancetta and remove from heat. Stir in egg mixture.",
        "Add reserved pasta water if needed to create a creamy sauce. Season with black pepper and serve.",
      ],
    },
    {
      id: "laksa",
      title: "Coconut Curry Laksa",
      image: "/images/laska.jpg",
      description:
        "A fragrant Malaysian noodle soup, with a spicy, coconut-infused broth. This dish combines noodles, chicken or shrimp, and crispy bean sprouts, topped with fresh cilantro and a squeeze of lime for a perfect, flavor-packed meal.",
        backgroundColor: "#F4A261",
        ingredients: [
        "200g rice noodles",
        "3 cups coconut milk",
        "2 cups chicken or shrimp",
        "1 cup bean sprouts",
        "2 tbsp curry paste",
        "1 lime, juiced",
        "Fresh cilantro for garnish",
      ],
      instructions: [
        "Cook rice noodles and set aside.",
        "In a pot, heat curry paste and coconut milk until fragrant.",
        "Add chicken or shrimp and simmer until cooked through.",
        "Divide noodles into bowls and pour over the curry.",
        "Top with bean sprouts, lime juice, and cilantro. Serve hot.",
      ],
    },
    {
      id: "beef-chow-fun",
      title: "Beef Chow Fun",
      image: "/images/beef.jpg", 
      description:
        "A mouthwatering Chinese stir-fry with wide rice noodles, tender slices of beef, and fresh vegetables, all tossed in a savory soy sauce-based glaze. This dish is a perfect combination of tender beef, crisp vegetables, and chewy noodles that will leave you craving more.",
        backgroundColor: "#E76F51",
        ingredients: [
        "200g rice noodles",
        "200g beef, thinly sliced",
        "1 onion, sliced",
        "1 cup bell peppers, sliced",
        "2 tbsp soy sauce",
        "1 tbsp oyster sauce",
        "2 tsp sesame oil",
        "2 cloves garlic, minced",
        "2 green onions, chopped",
      ],
      instructions: [
        "Cook rice noodles according to package instructions and set aside.",
        "In a pan, heat sesame oil and cook beef until browned. Remove and set aside.",
        "In the same pan, sauté garlic, onion, and bell peppers until tender.",
        "Add beef back to the pan along with soy sauce and oyster sauce. Stir-fry for 3-4 minutes.",
        "Add cooked noodles and toss everything together. Garnish with green onions and serve hot.",
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
          <h1 className="text-4xl font-bold mb-4">Savory Noodle Recipes</h1>
          <p className="text-lg text-gray-700">
            Explore a world of noodles with these delectable recipes from across
            the globe. Perfect for every craving and occasion. <br /> Let's dive
            in!
          </p>
        </motion.div>
      </section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 px-4">
        {recipes.map((recipe) => (
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
              <h3 className="text-2xl font-semibold mb-2 underline">
                {recipe.title}
              </h3>
              <p className="text-gray-900 text-base mb-4">
                {recipe.description}
              </p>
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
