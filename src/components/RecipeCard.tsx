"use client";
import Image from "next/image";
import Link from "next/link"; 

export default function RecipeCards() {
  return (
    <section id="recipes" className="px-5 py-16">
      <div className="bg-slate-200 text-center mb-14">
        <h1 className="text-4xl font-bold mb-4">Our Delicious Recipes</h1>
        <p className="text-lg text-gray-700">
          Discover a collection of tasty and easy-to-make recipes from around
          the world. Whether you're looking for a quick meal or an indulgent
          treat, we've got you covered with flavorful dishes for every occasion!
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
        {/* Recipe Card 1 */}
        <div className="bg-white rounded-lg overflow-hidden border border-fuchsia-500 shadow-xl hover:shadow-xl transition duration-300">
          <Image
            src="/images/soup.jpg"
            alt="Recipe-image"
            width={500} 
            height={300} 
            className="w-full h-60 object-cover"
          />
          <div className="bg-[#00a0a3] p-5">
            <h3 className="text-xl font-semibold mb-2">
              Soul-Warming Soups Recipes
            </h3>
            <p className="text-gray-900 text-base mb-4">
              "Warm, comforting, and packed with flavor, these soups are perfect
              for every season. Savor the goodness in every spoonful."
            </p>
            {/* Link to Soup Recipe Page */}
            <Link href="/recipies/soups">
              <button className="bg-fuchsia-950 text-white px-4 py-2 rounded-md hover:bg-fuchsia-800 transition duration-300">
                Get Recipes
              </button>
            </Link>
          </div>
        </div>

        {/* Recipe Card 2 */}
        <div className="bg-white rounded-lg overflow-hidden border border-fuchsia-500 shadow-lg hover:shadow-xl transition duration-300">
          <Image
            src="/images/noodles1.jpg"
            alt="Recipe 2"
            width={500}
            height={300}
            className="w-full h-60 object-cover"
          />
          <div className="bg-[#f3ef28] p-5">
            <h3 className="text-xl font-semibold mb-2">
              Sizzling Hot Noodles Recipes
            </h3>
            <p className="text-gray-900 text-base mb-4">
              "Perfectly cooked, perfectly sauced. Slurp-worthy noodles in every
              bite! From classic to bold flavors, these dishes will satisfy your
              noodle cravings."
            </p>
            {/* Link to Noodles Recipe Page */}
            <Link href="/recipies/noodles">
              <button className="bg-fuchsia-950 text-white px-4 py-2 rounded-md hover:bg-fuchsia-800 transition duration-300">
                Get Recipes
              </button>
            </Link>
          </div>
        </div>

        {/* Recipe Card 3 */}
        <div className="bg-white rounded-lg overflow-hidden border border-fuchsia-500 shadow-lg hover:shadow-xl transition duration-300">
          <Image
            src="/images/rice.jpg"
            alt="Recipe 3"
            width={500}
            height={300}
            className="w-full h-60 object-cover"
          />
          <div className="bg-[#00a0a3] p-5">
            <h3 className="text-xl font-semibold mb-2">
              Fluff & Flavor: Rice Recipes
            </h3>
            <p className="text-gray-900 text-base mb-4">
              "The humble grain that transforms every meal into a culinary
              experience. Explore rice dishes that range from light and fragrant
              to rich and hearty."
            </p>
            {/* Link to Rice Recipe Page */}
            <Link href="/recipies/rice">
              <button className="bg-fuchsia-950 text-white px-4 py-2 rounded-md hover:bg-fuchsia-800 transition duration-300">
                Get Recipes
              </button>
            </Link>
          </div>
        </div>

        {/* Recipe Card 4 */}
        <div className="bg-white rounded-lg overflow-hidden border border-fuchsia-500 shadow-lg hover:shadow-xl transition duration-300">
          <Image
            src="/images/gravy.jpg"
            alt="Recipe 4"
            width={500}
            height={300}
            className="w-full h-60 object-cover"
          />
          <div className="bg-[#f3ef28] p-5">
            <h3 className="text-xl font-semibold mb-2">
              Silky & Savory Gravies Recipes
            </h3>
            <p className="text-gray-900 text-base mb-4">
              "Rich, savory, and mouthwatering! These gravies add the perfect
              finishing touch to any dish, creating a symphony of flavor."
            </p>
            {/* Link to Gravies Recipe Page */}
            <Link href="/recipies/gravies">
              <button className="bg-fuchsia-950 text-white px-4 py-2 rounded-md hover:bg-fuchsia-800 transition duration-300">
                Get Recipes
              </button>
            </Link>
          </div>
        </div>

        {/* Recipe Card 5 */}
        <div className="bg-white rounded-lg overflow-hidden border border-fuchsia-500 shadow-lg hover:shadow-xl transition duration-300">
          <Image
            src="/images/salad2.jpg"
            alt="Recipe 5"
            width={500}
            height={300}
            className="w-full h-60 object-cover"
          />
          <div className="bg-[#00a0a3] p-5">
            <h3 className="text-xl font-semibold mb-2">Fresh & Crisp Salads</h3>
            <p className="text-gray-900 text-base mb-4">
              "Fresh, crisp, and bursting with color. These salads are the
              perfect blend of healthy and delicious, perfect for any occasion."
            </p>
            {/* Link to Salads Recipe Page */}
            <Link href="/recipies/salads">
              <button className="bg-fuchsia-950 text-white px-4 py-2 rounded-md hover:bg-fuchsia-800 transition duration-300">
                Get Recipes
              </button>
            </Link>
          </div>
        </div>

        {/* Recipe Card 6 */}
        <div className="bg-white rounded-lg overflow-hidden border border-fuchsia-500 shadow-lg hover:shadow-xl transition duration-300">
          <Image
            src="/images/dessert.jpg"
            alt="Recipe 6"
            width={500}
            height={300}
            className="w-full h-60 object-cover"
          />
          <div className="bg-[#f3ef28] p-5">
            <h3 className="text-xl font-semibold mb-2">
              Decadent Dessert Delights
            </h3>
            <p className="text-gray-900 text-base mb-4">
              "Sweet, indulgent, and irresistible. End your meal on a sweet note
              with these irresistible desserts that are as beautiful as they are
              delicious."
            </p>
            {/* Link to Dessert Recipe Page */}
            <Link href="/recipies/desserts">
              <button className="bg-fuchsia-950 text-white px-4 py-2 rounded-md hover:bg-fuchsia-800 transition duration-300">
                Get Recipes
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
