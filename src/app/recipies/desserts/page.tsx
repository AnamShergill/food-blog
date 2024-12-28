"use client";

import { useState } from "react"; 
import Image from "next/image"; 
import { motion } from "framer-motion"; 

// Default export for the desserts page component
export default function DessertsPage() {
  const [showRecipe, setShowRecipe] = useState<string | null>(null); // State to toggle recipe view

  const toggleRecipe = (recipeId: string) => {
    if (showRecipe === recipeId) {
      setShowRecipe(null); 
    } else {
      setShowRecipe(recipeId); 
    }
  };

  const dessertsRecipes = [
    {
      id: "chocolate-cake",
      title: "Chocolate Cake",
      image: "/images/cake1.jpg",
      description:
        "Indulge in this rich, velvety chocolate cake that melts in your mouth. The layers of moist chocolate sponge are enveloped in a smooth, decadent frosting, making every bite an irresistible experience. Perfect for any celebration, this cake is the epitome of comfort and luxury.",
      backgroundColor: "#F5D0C5", 
      ingredients: [
        "1 1/2 cups all-purpose flour",
        "1 cup sugar",
        "1/2 cup cocoa powder",
        "1 tsp baking powder",
        "1/2 tsp baking soda",
        "1/2 tsp salt",
        "2 eggs",
        "1/2 cup milk",
        "1/2 cup vegetable oil",
        "1 tsp vanilla extract",
        "1/2 cup boiling water",
      ],
      instructions: [
        "Preheat the oven to 350°F (175°C). Grease and flour a cake pan.",
        "Mix all dry ingredients in a bowl.",
        "Add eggs, milk, oil, and vanilla, and stir well.",
        "Add boiling water to the batter and mix.",
        "Pour batter into the pan and bake for 30 minutes.",
        "Let cool and frost with chocolate frosting.",
      ],
    },
    {
      id: "cheesecake",
      title: "Cheesecake",
      image: "/images/cake2.jpg",
      description:
        "Creamy, smooth, and sinfully delicious! This cheesecake is a dream come true for dessert lovers. With a buttery graham cracker crust that gives way to a rich and velvety filling, every bite is pure indulgence. Whether you serve it plain or with a topping of fresh berries, this cheesecake is sure to be a hit.",
      backgroundColor: "#E0BBE4",
      ingredients: [
        "1 1/2 cups graham cracker crumbs",
        "1/4 cup sugar",
        "1/2 cup butter, melted",
        "3 packages cream cheese",
        "1 cup sugar",
        "1 tsp vanilla extract",
        "3 eggs",
        "1/2 cup sour cream",
      ],
      instructions: [
        "Preheat the oven to 325°F (163°C).",
        "Mix graham cracker crumbs, sugar, and butter, then press into a pan.",
        "Beat cream cheese with sugar and vanilla.",
        "Add eggs one at a time, then stir in sour cream.",
        "Pour mixture into the crust and bake for 55 minutes.",
        "Let cool, then chill before serving.",
      ],
    },
    {
      id: "apple-pie",
      title: "Apple Pie",
      image: "/images/pie.jpg",
      description:
        "Nothing says 'comfort food' like a classic apple pie. The sweet, cinnamon-spiced apples are nestled between layers of flaky, buttery crust, creating the ultimate cozy dessert. Each bite is a perfect harmony of flavors, with the juicy apples and the perfectly crisp pastry melting together in every forkful.",
      backgroundColor: "#F5D0C5", 
      ingredients: [
        "2 1/2 cups all-purpose flour",
        "1 tsp salt",
        "1 cup butter",
        "6 cups apples, peeled and sliced",
        "1 cup sugar",
        "1 tbsp cinnamon",
        "1 tbsp lemon juice",
        "1 egg (for egg wash)",
      ],
      instructions: [
        "Preheat the oven to 375°F (190°C).",
        "Make pie crust by mixing flour and salt, then cutting in butter.",
        "Roll out dough and fit into a pie dish.",
        "Combine apples, sugar, cinnamon, and lemon juice.",
        "Fill the pie crust with apple mixture.",
        "Cover with another pie crust and bake for 45-50 minutes.",
      ],
    },
    {
      id: "trifle",
      title: "Trifle",
      image: "/images/trifle.jpg",
      description:
        "This layered dessert is an absolute showstopper. Fluffy sponge cake, rich custard, and sweet fruit come together in perfect harmony, creating a delightful symphony of textures and flavors. Topped with a cloud of whipped cream, this trifle is as delicious as it is beautiful, making it perfect for any occasion.",
      backgroundColor: "#E0BBE4", 
      ingredients: [
        "1 sponge cake (or pound cake), cut into cubes",
        "1 cup custard",
        "1 cup heavy cream, whipped",
        "1/2 cup fruit (berries, peaches, or your choice)",
        "1/4 cup jam (optional)",
        "1 tbsp sherry or orange juice (optional)",
      ],
      instructions: [
        "Layer the bottom of a large glass trifle bowl with cubes of sponge cake.",
        "Pour some sherry or juice over the cake, if desired.",
        "Spread a layer of custard over the cake.",
        "Add a layer of fresh fruit on top of the custard.",
        "Top with a layer of whipped cream.",
        "Repeat the layers until the bowl is filled.",
        "Chill for at least 2 hours before serving.",
      ],
    },
    {
      id: "tiramisu",
      title: "Tiramisu",
      image: "/images/tiramisu.jpg",
      description:
        "A delightful marriage of espresso-soaked ladyfingers and creamy mascarpone filling, this Italian classic is simply irresistible. The delicate layers of rich coffee flavor and smooth cream create an indulgent treat that will transport your taste buds straight to Italy.",
      backgroundColor: "#F5D0C5", 
      ingredients: [
        "1 cup strong coffee, cooled",
        "1/4 cup sugar",
        "3/4 cup mascarpone cheese",
        "1 cup heavy cream",
        "1 tsp vanilla extract",
        "24 ladyfingers",
        "Cocoa powder for dusting",
      ],
      instructions: [
        "Whip mascarpone with sugar, vanilla, and cream until thick.",
        "Dip ladyfingers in coffee and layer them in a dish.",
        "Spread mascarpone mixture over ladyfingers.",
        "Repeat the layers and refrigerate for 4 hours.",
        "Dust with cocoa powder before serving.",
      ],
    },
    {
      id: "panna-cotta",
      title: "Panna Cotta",
      image: "/images/panna.jpg",
      description:
        "This luscious Italian dessert is the epitome of elegance. The silky, creamy texture of the Panna Cotta is perfectly balanced with a hint of vanilla, creating a melt-in-your-mouth sensation. Topped with fresh berries or fruit compote, it’s a light yet indulgent treat that will leave you wanting more.",
      backgroundColor: "#E0BBE4", 
      ingredients: [
        "2 cups heavy cream",
        "1/2 cup sugar",
        "1 tsp vanilla extract",
        "1 packet gelatin",
        "1/4 cup milk",
      ],
      instructions: [
        "Heat cream, sugar, and vanilla over low heat until sugar dissolves.",
        "Soften gelatin in milk, then add to the cream mixture.",
        "Pour into molds and chill for 4 hours.",
        "Serve with fresh berries or fruit compote.",
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
          <h1 className="text-4xl font-bold mb-4">Decadent Dessert Recipes</h1>
          <p className="text-lg text-gray-700">
            Discover a collection of irresistible desserts. From rich and
            indulgent cakes to light and refreshing treats, these recipes are
            perfect for every occasion. <br />
            Let's dive into these sweet delights!
          </p>
        </motion.div>
      </section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 px-4">
        {dessertsRecipes.map((recipe) => (
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
              <h3 className="text-2xl font-semibold mb-2 underline">{recipe.title}</h3>
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
