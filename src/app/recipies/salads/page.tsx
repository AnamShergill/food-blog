'use client';

import { useState } from "react"; 
import Image from "next/image"; 
import { motion } from "framer-motion"; 

export default function SaladsPage() {
  const [showRecipe, setShowRecipe] = useState<string | null>(null);

  const toggleRecipe = (recipeId: string) => {
    if (showRecipe === recipeId) {
      setShowRecipe(null); 
    } else {
      setShowRecipe(recipeId); 
    }
  };

  const saladsRecipes = [
    {
      id: "greek-salad",
      title: "Greek Salad",
      image: "/images/greeksalad.jpg",
      description:
        "This traditional Greek salad brings together the fresh, vibrant flavors of the Mediterranean. With juicy tomatoes, crunchy cucumbers, tangy Kalamata olives, and creamy feta cheese, it’s a simple, refreshing dish perfect for any occasion.",
      backgroundColor: "#A5D6A7", 
      ingredients: [
        "1 cucumber, sliced",
        "2 tomatoes, chopped",
        "1/4 red onion, thinly sliced",
        "1/2 cup Kalamata olives",
        "100g feta cheese, crumbled",
        "2 tbsp olive oil",
        "1 tbsp lemon juice",
        "Salt and pepper to taste",
      ],
      instructions: [
        "Combine all the vegetables and olives in a bowl.",
        "Add crumbled feta cheese.",
        "Drizzle with olive oil and lemon juice.",
        "Season with salt and pepper, toss gently, and serve.",
      ],
    },
    {
      id: "caesar-salad",
      title: "Caesar Salad",
      image: "/images/caesarsalad.jpg",
      description:
        "A timeless favorite, Caesar salad is loved for its crispy romaine lettuce, rich and creamy dressing, and crunchy croutons. The salty Parmesan adds the perfect finishing touch to this indulgent yet simple salad.",
      backgroundColor: "#FFCC80", 
      ingredients: [
        "4 cups romaine lettuce, chopped",
        "1/2 cup Parmesan cheese, grated",
        "1 cup croutons",
        "1/4 cup Caesar dressing",
      ],
      instructions: [
        "Toss the lettuce with Caesar dressing.",
        "Top with grated Parmesan and croutons.",
        "Serve immediately.",
      ],
    },
    {
      id: "cabbage-slaw",
      title: "Cabbage Slaw",
      image: "/images/slaw.jpg",
      description:
        "A crunchy and tangy slaw made with shredded cabbage, carrots, and a creamy dressing. Perfect as a side dish or a topping for tacos and burgers.",
      backgroundColor: "#A5D6A7", 
      ingredients: [
        "2 cups shredded cabbage",
        "1 cup shredded carrots",
        "1/2 cup mayonnaise",
        "1 tbsp apple cider vinegar",
        "1 tsp sugar",
        "Salt and pepper to taste",
      ],
      instructions: [
        "In a bowl, mix cabbage and carrots.",
        "In a separate bowl, combine mayonnaise, vinegar, sugar, salt, and pepper.",
        "Pour dressing over cabbage mixture and toss well.",
        "Chill before serving.",
      ],
    },
    {
      id: "quinoa-salad",
      title: "Quinoa Salad",
      image: "/images/quinoasalad.jpg",
      description:
        "A healthy, protein-packed salad featuring quinoa, chickpeas, cucumbers, and a tangy lemon vinaigrette. Perfect for meal prep or a light lunch.",
      backgroundColor: "#FFCC80", 
      ingredients: [
        "1 cup cooked quinoa",
        "1 cup cooked chickpeas",
        "1 cucumber, chopped",
        "1/4 cup red onion, chopped",
        "2 tbsp olive oil",
        "1 tbsp lemon juice",
        "Salt and pepper to taste",
      ],
      instructions: [
        "Mix cooked quinoa, chickpeas, cucumber, and red onion in a bowl.",
        "Whisk together olive oil, lemon juice, salt, and pepper.",
        "Toss the salad with the dressing.",
        "Serve chilled.",
      ],
    },
    {
      id: "avocado-salad",
      title: "Avocado Salad",
      image: "/images/avocadosalad.jpg",
      description:
        "A creamy avocado salad with fresh tomatoes, lime, and cilantro. A delicious and refreshing dish that's perfect as a side or a light meal.",
      backgroundColor: "#A5D6A7", 
      ingredients: [
        "2 avocados, diced",
        "1 tomato, chopped",
        "1/4 cup red onion, chopped",
        "1 tbsp lime juice",
        "1/4 cup fresh cilantro, chopped",
        "Salt and pepper to taste",
      ],
      instructions: [
        "Combine avocado, tomato, and onion in a bowl.",
        "Drizzle with lime juice and sprinkle with cilantro.",
        "Season with salt and pepper, toss gently, and serve.",
      ],
    },
    {
      id: "pasta-salad",
      title: "Pasta Salad",
      image: "/images/pastasalad.jpg",
      description:
        "A refreshing pasta salad with mixed vegetables and Italian dressing. This easy-to-make salad is perfect for a picnic or potluck.",
      backgroundColor: "#FFCC80", 
      ingredients: [
        "2 cups cooked pasta",
        "1/2 cup cherry tomatoes, halved",
        "1/4 cup black olives, sliced",
        "1/4 cup red bell pepper, chopped",
        "2 tbsp Italian dressing",
      ],
      instructions: [
        "Combine cooked pasta, tomatoes, olives, and bell pepper in a bowl.",
        "Toss with Italian dressing.",
        "Chill before serving.",
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
          <h1 className="text-4xl font-bold mb-4">Fresh & Crisp Salads</h1>
          <p className="text-lg text-gray-700">
            "Explore a variety of fresh and flavorful salads, perfect for any occasion. <br /> Let’s dive in!"
          </p>
        </motion.div>
      </section>

      <div id="recipes" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {saladsRecipes.map((recipe) => (
          <motion.div
            key={recipe.id}
            className="bg-white rounded-lg overflow-hidden border border-green-500 shadow-lg hover:shadow-xl transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={recipe.image}
              alt={recipe.title}
              width={500}
              height={300}
              className="w-full h-80 object-cover"
            />
            <div
              className="p-5 flex flex-col h-full"
              style={{ backgroundColor: recipe.backgroundColor }}
            >
              <h3 className="text-2xl font-semibold mb-2 underline">{recipe.title}</h3>
              <p className="text-gray-900 text-base mb-4">{recipe.description}</p>
              <div className="flex justify-start"> 
                <button
                  onClick={() => toggleRecipe(recipe.id)}
                  className="bg-fuchsia-950 text-white px-3 py-1.5 text-medium rounded-md hover:bg-fuchsia-800 transition duration-300"
                >
                  {showRecipe === recipe.id ? "Hide Recipe" : "Show Recipe"}
                </button>
              </div>
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
