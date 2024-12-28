"use client";

import { useState } from "react"; 
import Image from "next/image"; 
import { motion } from "framer-motion"; 

export default function RicePage() {
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
      id: "fried-rice",
      title: "Classic Fried Rice",
      image: "/images/friedrice.jpg",
      description: "A timeless crowd-pleaser, this flavorful fried rice blends tender veggies, eggs, and your choice of protein, all sautéed to perfection with savory soy sauce and sesame oil. It's the perfect one-pan meal for any time of day.",
      backgroundColor : "#4C9B9B",
      ingredients: [
        "2 cups cooked rice (preferably day-old)",
        "1 cup mixed vegetables (carrots, peas, corn)",
        "2 eggs",
        "2 tbsp soy sauce",
        "1 tbsp sesame oil",
        "2 cloves garlic, minced",
        "1/4 cup green onions, chopped",
        "1/2 cup cooked chicken, shrimp, or tofu (optional)",
      ],
      instructions: [
        "Heat sesame oil in a pan and sauté garlic until fragrant.",
        "Add mixed vegetables and stir-fry for 3 minutes.",
        "Push vegetables to the side and scramble the eggs in the pan.",
        "Add rice and soy sauce, then stir everything together.",
        "Add your choice of protein and green onions, stir well, and serve hot.",
      ],
    },
    {
      id: "biryani",
      title: "Chicken Biryani",
      image: "/images/biryani.jpg",
      description: "Experience the rich, aromatic flavors of India with this Chicken Biryani. Layers of tender chicken and fragrant basmati rice, cooked with a blend of exotic spices and herbs, will transport your taste buds to another world.",
      backgroundColor: "#FFDD57",
      ingredients: [
        "2 cups basmati rice",
        "500g chicken, cut into pieces",
        "2 onions, thinly sliced",
        "2 tomatoes, chopped",
        "1/4 cup yogurt",
        "1 tbsp ginger-garlic paste",
        "1 tbsp biryani masala",
        "1 tsp turmeric powder",
        "1 tsp cumin seeds",
        "2 cups water",
        "Fresh cilantro and mint for garnish",
      ],
      instructions: [
        "Marinate chicken with yogurt, biryani masala, turmeric, and ginger-garlic paste for 30 minutes.",
        "Cook rice until 70% done, then drain and set aside.",
        "In a pan, heat oil and sauté onions until golden. Add tomatoes and cook for 2-3 minutes.",
        "Add marinated chicken and cook until tender. Add water and bring to a boil.",
        "Layer the cooked rice over the chicken, cover, and simmer for 15 minutes.",
        "Garnish with cilantro and mint leaves before serving.",
      ],
    },
    {
      id: "afghani-pulao",
      title: "Afghani Pulao",
      image: "/images/Kabuli.jpg",
      description: "Afghani Pulao is a fragrant and flavorful rice dish infused with spices, raisins, and tender lamb or chicken. The sweet and savory combination makes this dish a perfect centerpiece for any special occasion.",
      backgroundColor : "#4C9B9B",
      ingredients: [
        "2 cups basmati rice",
        "500g lamb or chicken, cut into pieces",
        "1 large onion, thinly sliced",
        "1/2 cup raisins",
        "1/2 cup slivered almonds",
        "2 tbsp ghee or vegetable oil",
        "1 tsp cumin seeds",
        "1 tsp coriander powder",
        "1/2 tsp cinnamon powder",
        "4-5 green cardamom pods",
        "1 bay leaf",
        "4 cups water or broth",
        "Salt to taste",
        "Fresh cilantro for garnish (optional)"
      ],
      instructions: [
        "Rinse the basmati rice under cold water until the water runs clear. Set aside to soak for 20-30 minutes.",
        "Heat ghee or oil in a large pot over medium heat. Add cumin seeds, cardamom pods, and a bay leaf. Sauté for a minute until fragrant.",
        "Add the sliced onions and sauté until golden brown. Add the meat (lamb or chicken) and cook until browned on all sides.",
        "Stir in coriander powder, cinnamon powder, and salt. Add water or broth and bring it to a boil. Let it simmer for 20 minutes until the meat is tender and cooked through.",
        "Add the soaked rice to the pot with the meat. Stir gently and then cover with a tight-fitting lid. Reduce the heat to low and cook for 15-20 minutes until the rice is fully cooked and the flavors have melded.",
        "In a separate pan, dry roast the almonds and raisins until golden and fragrant.",
        "Once the rice is cooked, fluff it gently with a fork and top with the toasted almonds and raisins.",
        "Garnish with fresh cilantro and serve hot with yogurt or a side salad."
      ]
    },
    {
      id: "paella",
      title: "Seafood Paella",
      image: "/images/paella.jpg",
      description: "This vibrant Spanish dish features a tantalizing mix of succulent seafood, including shrimp and mussels, cooked with saffron-infused rice. Paella is a feast for the senses with every bite bursting with flavor.",
      backgroundColor: "#FFDD57",
      ingredients: [
        "2 cups short-grain rice",
        "4 cups chicken or seafood broth",
        "200g shrimp, peeled",
        "200g mussels",
        "1/2 cup peas",
        "1 red bell pepper, chopped",
        "1/2 tsp saffron threads",
        "1 onion, chopped",
        "2 cloves garlic, minced",
        "Lemon wedges for serving",
      ],
      instructions: [
        "In a large pan, sauté onions and garlic until fragrant.",
        "Add bell pepper, peas, and shrimp. Cook for 2 minutes.",
        "Stir in rice and saffron, then pour in broth.",
        "Bring to a boil, then lower heat and simmer until rice is tender and seafood is cooked.",
        "Add mussels during the last 5 minutes of cooking.",
        "Garnish with lemon wedges and serve hot.",
      ],
    },
    {
      id: "risotto",
      title: "Mushroom Risotto",
      image: "/images/risotto.jpg",
      description: "Indulge in this creamy, velvety risotto made with earthy mushrooms, white wine, and a generous amount of Parmesan. A luxurious dish that’s rich in flavor and perfect for a cozy dinner.",
      backgroundColor : "#4C9B9B",
      ingredients: [
        "1 1/2 cups Arborio rice",
        "4 cups vegetable or chicken broth",
        "1 cup white wine",
        "200g mushrooms, sliced",
        "1 onion, chopped",
        "2 tbsp butter",
        "1/2 cup grated Parmesan cheese",
        "Salt and pepper to taste",
      ],
      instructions: [
        "In a pan, sauté onions and mushrooms in butter until soft.",
        "Add rice and stir to coat with butter. Pour in white wine and cook until absorbed.",
        "Gradually add broth, one ladle at a time, stirring constantly until absorbed.",
        "Continue adding broth and stirring until rice is creamy and tender.",
        "Stir in Parmesan cheese, season with salt and pepper, and serve hot.",
      ],
    },
    {
      id: "risotto-arancini",
      title: "Arancini (Rice Balls)",
      image: "/images/riceballs.jpg",
      description: "Transform your leftover risotto into crispy, cheesy rice balls. These Italian treats are stuffed with gooey mozzarella and fried to golden perfection, making them an irresistible appetizer or snack.",
      backgroundColor: "#FFDD57",
      ingredients: [
        "2 cups leftover risotto (preferably cooled)",
        "1/2 cup mozzarella cheese, cubed",
        "1 cup breadcrumbs",
        "2 eggs, beaten",
        "Oil for frying",
      ],
      instructions: [
        "Take small portions of leftover risotto and form into balls around a cube of mozzarella.",
        "Dip each rice ball into beaten eggs, then coat in breadcrumbs.",
        "Heat oil in a frying pan and fry the rice balls until golden and crispy.",
        "Drain on paper towels and serve hot.",
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
            <h1 className="text-4xl font-bold mb-4">Savory Rice Recipes</h1>
          <p className="text-lg text-gray-700">
            Discover a variety of rice dishes from around the world, each bursting with rich flavors and unique ingredients. Perfect for every occasion. <br /> Let's dive in!
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
