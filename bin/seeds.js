// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Recipe = require("../models/Recipe");
const bcryptSalt = 10;

mongoose
  .connect(process.env.MONGODB_URI ||'mongodb://localhost/barilla', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

let users = [
	{
		username: "alice",
		password: bcrypt.hashSync("alice", bcrypt.genSaltSync(bcryptSalt))
	},
	{
		username: "bob",
		password: bcrypt.hashSync("bob", bcrypt.genSaltSync(bcryptSalt))
	}
];

User.deleteMany()
	.then(() => {
		return User.create(users);
	})
	.then(usersCreated => {
		console.log(
			`${usersCreated.length} users created with the following id:`
		);
		console.log(usersCreated.map(u => u._id));
	})
	.then(() => {
		// Close properly the connection to Mongoose
		mongoose.disconnect();
	})
	.catch(err => {
		mongoose.disconnect();
		throw err;
	});

/// Recipes

const recipes = [
	{
		name: "SPAGHETTI WITH EGGPLANT & ZUCCHINI",
		ingredientsList: [
			"zucchini",
			"chives",
			"garlic",
			"eggplant",
			"parmigiano"
		],
		ingredientsFull: [
			"Half a zucchini sliced in half moons",
			"1 tablespoon chives chopped",
			"1 clove garlic chopped",
			"1 cup eggplant diced",
			"½ cup parmigiano Reggiano cheese shredded"
		],
		pasta: "BARILLA SPAGHETTI n. 5",
		instructions:
			"Bring a large pot of water to a boil. In a large skillet cook the garlic in olive oil for about 2 minutes or until slightly yellow in color. Add eggplant, sauté for 3 minutes. Add zucchini and sauté for 3 more minutes, season with salt and pepper. Cook the pasta according to the package directions, reserve 1 cup of the cooking liquid and add it to the sauce. Bring to a simmer. Drain and toss the pasta with the sauce. Remove from heat and add the chives and parmigiano Reggiano cheese, toss to combine.",
		time: 30,
		image:
			"https://www.barilla.com//-/media/images/en_us/hero-images/gf-spaghetti.jpg"
	},
	{
		name: "SPAGHETTI WITH LEEKS, GRAPE TOMATOES",
		ingredientsList: [
			"leeks",
			"crab",
			"basil",
			"cherry-tomatoes",
			"lemon-zest"
		],
		ingredientsFull: [
			"1 cup leeks cut in rings",
			"½ cup lump crab meat",
			"2 basil leaves torn",
			"½ pint cherry tomatoes halved",
			"½ teaspoon lemon zest"
		],
		pasta: "BARILLA SPAGHETTI n. 5",
		instructions:
			"Bring a large pot of water to a boil. Meanwhile sauté leeks with 2 tablespoons olive oil for three minutes over medium heat, add tomatoes and lemon zest. Blister tomatoes on high heat, about two minutes. Add crab, season with salt and pepper. Meanwhile cook pasta according to package directions, drain reserving about 1/2 cup of cooking water. Toss pasta with crab mixture along with some cooking water. Stir in basil and remaining olive oil, serve immediately.",
		time: 25,
		image:
			"https://www.barilla.com//-/media/images/en_us/recipes/gluten-free/gf_spaghetti_leeks_lemon_zest.jpg"
	},
	{
		name: "ELBOWS IN CREAMY PEAS AND PROSCIUTTO SAUCE",
		ingredientsList: [
			"sherry-wine",
			"peas",
			"parmigiano",
			"onion",
			"prosciutto"
		],
		ingredientsFull: [
			"¼ cup sherry wine",
			"½ cup peas frozen",
			"½ cup parmigiano reggiano cheese grated",
			"¼ yellow onion peeled and chopped",
			"½ cup prosciutto julienne",
			"½ cup chicken broth",
			"½ cup heavy cream"
		],
		pasta: "BARILLA ELBOWS",
		instructions:
			"Bring a large pot of water to a boil, season with salt. Sauté onion with olive oil in a large skillet over medium heat, until translucent, about 5 minutes. Add prosciutto, cook for 1 minute then add wine and reduce well. Add broth, peas, salt and black pepper; bring to a boil. Add heavy cream and bring to a simmer. Cook pasta according to the package directions. Drain pasta and toss with sauce in a large mixing bowl. Top with cheese before serving.",
		time: 30,
		image:
			"https://www.barilla.com//-/media/images/en_us/recipes/gluten-free/gluten-free_barilla-gluten-free-elbows-creamy-peas-and-prosciutto-sauce.jpg"
	},
	{
		name: "SPAGHETTI WITH ROASTED CAULIFLOWER, CAPERS AND GOLDEN RAISINS",
		ingredientsList: [
			"onion",
			"raisins",
			"cauliflower",
			"capers",
			"parsley",
			"parmigiano"
		],
		ingredientsFull: [
			"½ cup onion diced",
			"¼ cup golden raisins soaked in 1 cup water",
			"¼ cauliflower cut into small florets",
			"½ tablespoon capers",
			"½ tablespoon parsley chopped",
			"½ cup parmigiano Reggiano cheese grated"
		],
		pasta: "BARILLA SPAGHETTI n. 5",
		instructions:
			"Pre-heat the oven to 425°F and bring a large pot of water to a boil. Toss the cauliflower in 2 tablespoons of olive oil, season with salt and pepper. Place on a sheet tray and roast in the oven until golden brown. Meanwhile, in a large skillet sauté the onion in 2 tablespoons of olive oil. Cook the pasta according to package directions. Reserve 1 cup of the cooking liquid and add it to the onions. ADD the pasta to the sauce and cook for 1 minute over medium heat, stirring frequently until it becomes creamy. ADD the cauliflower, capers and raisins and toss to combine.",
		time: 30,
		image:
			"https://www.barilla.com//-/media/images/en_us/recipes/gluten-free/gluten-free_barilla-gluten-free-spaghetti-roasted-cauliflower-capers-and-golden-raisins.jpg"
	},
	{
		name: "FETTUCCINE SUMMER PASTA",
		ingredientsList: [
			"garlic",
			"corn",
			"basil",
			"parmigiano",
			"pine-nuts",
			"cherry-tomatoes",
			"thyme",
			"pecorino"
		],
		ingredientsFull: [
			"1 garlic clove, sliced thin",
			"½ bag frozen corn",
			"¼ cup basil leaves",
			"¼ cup parmigiano-Reggiano cheese, shredded",
			"¼ cup pine nuts, toasted",
			"½ pound cherry tomatoes, multi-colored, quartered",
			"½ tablespoon thyme leaves",
			"¼ cup Pecorino Romano cheese"
		],
		pasta: "BARILLA FETTUCCINE",
		instructions:
			"Bring a large pot of water to a boil and cook pasta according to package directions. In a large skillet sauté garlic in olive oil for 1 minute.  Add corn and sauté for 2-3 minutes or until slightly browned.  Add tomatoes and sauté for 1 minute. Add 1 cup of the pasta cooking water to skillet and bring to a simmer. Drain pasta and toss with the sauce. Before serving garnish with fresh herbs, cheese and pine nuts.",
		time: 30,
		image:
			"https://www.barilla.com//-/media/images/en_us/recipes/gluten-free/gf_fettucine_summer_pasta_salad_ff4.jpg"
	},
	{
		name: "FETTUCCINE WITH SHRIMP & ASPARAGUS",
		ingredientsList: ["onion", "shrimp", "basil", "asparagus"],
		ingredientsFull: [
			"1 cup red onion, sliced thin",
			"8 small shrimp, cleaned & deveined",
			"¼ cup basil sliced",
			"½ bunch asparagus, sliced on a bias"
		],
		pasta: "BARILLA FETTUCCINE",
		instructions:
			"Bring a large pot of water to a boil; cook pasta according to package directions. Meanwhile, in a large skillet, sauté onion in olive oil for 2-3 minutes or until slightly browned. Add asparagus and shrimp; cook for 2-3 minutes or until the shrimp are browned on both sides, then season with salt and pepper. Drain pasta, add to skillet and toss with the sauce. Remove from heat, fold in basil and serve immediately.",
		time: 25,
		image:
			"https://www.barilla.com//-/media/images/en_us/recipes/gluten-free/gf_fettucine_shrimp.jpg"
	},
	{
		name: "CHEESE TORTELLINI WITH PANCETTA IN A PINK SAUCE",
		ingredientsList: [
			"tomatoes",
			"heavy-cream",
			"parsley",
			"pancetta",
			"onion",
			"basil",
			"parmigiano"
		],
		ingredientsFull: [
			"14 ounces San Marzano tomatoes, canned, drained",
			"¼ cup heavy cream",
			"½ tablespoon fresh parsley, chopped",
			"1/3 cup Italian pancetta, cut into strips",
			"1/3 cup white onion, chopped",
			"1 tablespoon fresh basil, chopped",
			"1/4 cup parmigiano-Reggiano cheese, freshly grated"
		],
		pasta: "BARILLA COLLEZIONE THREE CHEESE TORTELLINI",
		instructions:
			"Bring a large pot of water to a boil. Sauté pancetta in a large skillet over medium heat until crispy. Drain on a paper towel. Set aside. Heat oil in the same skillet over low heat. Add onions and sauté 10 minutes until tender. Add tomatoes, basil, salt and pepper. Simmer for 5 minutes. Add heavy cream, bring to a boil. Let cool. PROCESS sauce mixture in a blender until smooth. Set aside. Add Three Cheese Tortellini to boiling water and cook according to package directions. Drain and toss with sauce and cheese. Top with pancetta and chopped parsley.",
		time: 30,
		image:
			"https://www.barilla.com//-/media/images/en_us/recipes/collezione/14_barillathreecheesetortelliniwithpancettainapinksauce_9274.jpg"
	},
	{
		name: "CHEESE TORTELLINI & VEGETABLE PRIMAVERA",
		ingredientsList: [
			"scallion",
			"zucchini",
			"parmigiano",
			"asparagus",
			"tomatoes"
		],
		ingredientsFull: [
			"¼ cup scallion, white part only",
			"½ small zucchini diced, seeded",
			"½ cup parmigiano-Reggiano cheese, grated",
			"½ bunch asparagus",
			"1 plum tomatoe diced, peeled"
		],
		pasta: "BARILLA COLLEZIONE THREE CHEESE TORTELLINI",
		instructions:
			"Bring a large pot of water to a boil. Remove the asparagus tips and cut the remaining part into ¼ inch long pieces. Slice scallions into small rings. Sauté the scallions, zucchini and asparagus in oil in a medium skillet over medium heat for about 8 minutes. Add tomatoes and sauté for 2 more minutes. Season with salt and pepper. Cook Three Cheese Tortellini according to package directions. Drain and add to the vegetable sauce. Sprinkle with cheese and serve.",
		time: 20,
		image:
			"https://www.barilla.com//-/media/images/en_us/recipes/collezione/collezione-three-cheese-tortellini-and-vegetable-primavera.png"
	},
	{
		name: "CHEESE TORTELLINI WITH ROASTED RED PEPPER, ZUCCHINI & SPINACH",
		ingredientsList: ["zucchini", "pepper", "tomatoes", "onion", "spinach"],
		ingredientsFull: [
			"1 cup Zucchini Diced",
			"½ cup Roasted Red Pepper Sliced",
			"½ cup Fresh Tomato Diced",
			"½ cup Onion Diced",
			"1/8 tsp. Black Pepper Freshly Ground",
			"4 oz. Fresh Baby Spinach"
		],
		pasta: "BARILLA COLLEZIONE THREE CHEESE TORTELLINI",
		instructions:
			"Bring a large pot of water to a boil. Cook Three Cheese Tortellini according to package directions. Meanwhile, sauté onions in oil in a large skillet over medium heat for 5 minutes. Add zucchini and black pepper, cook for 3 minutes. Season with salt. Add red peppers and baby spinach and sauté for 1 additional minute. Drain Three Cheese Tortellini and mix with sauce in skillet. Stir in tomatoes and serve.",
		time: 15,
		image:
			"https://www.barilla.com//-/media/images/en_us/recipes/collezione/barilla-three-cheese-tortellini-roasted-red-pepper-zucchini-spinach.png"
	},
	{
		name: "CHEESE TORTELLINI WITH PUMPKIN SAGE BUTTER",
		ingredientsList: ["sage", "parmigiano", "butter", "pumpkin"],
		ingredientsFull: [
			"4 leaves Fresh Sage",
			"½ cup parmigiano-Reggiano Cheese, Freshly Grated",
			"¼ pound Sweet Butter",
			"¼ cup Pumpkin Puree (May Substitute Pumpkin Pie Filling)"
		],
		pasta: "BARILLA COLLEZIONE THREE CHEESE TORTELLINI",
		instructions:
			"Bring 6 quarts water to a boil in a large pot. Place butter and sage in a 10- to 12-inch sauté pan over medium-high heat and cook until butter turns golden brown and spatters a bit. Add the pumpkin puree and remove from heat; it will make some noise here and be a little messy. Swirl the pan to mix the butter and pumpkin mixture together and set aside. Drop the Three Cheese Tortellini into the boiling water and cook according to package instructions; drain in a colander and immediately toss the cooked tortellini into the pan with the pumpkin mixture, place over medium heat and toss until pasta is coated with sauce. Mix in half of the grated parmigiano and toss 10 seconds, then pour into a heated bowl and serve immediately.",
		time: 30,
		image:
			"https://www.barilla.com//-/media/images/en_us/recipes/collezione/tortellini_pumpkin_sage_butter.png"
	},
	{
		name:
			"RICOTTA & SPINACH TORTELLINI WITH CREAMY TOMATO & CRISPY BACON SAUCE",
		ingredientsList: [
			"onion",
			"heavy-cream",
			"basil",
			"bacon",
			"tomatoes",
			"parmigiano"
		],
		ingredientsFull: [
			"½ small yellow onion, peeled and chopped",
			"¼ cup heavy cream",
			"4 fresh basil leaves, washed and torn",
			"4 bacon slices, julienned",
			"1 28-oz Italian style canned tomatoes, chopped",
			"1/3 cup parmigiano-Reggiano cheese, grated"
		],
		pasta: "BARILLA COLLEZIONE RICOTTA & SPINACH TORTELLINI",
		instructions:
			"Bring a large pot of water to a boil, season with salt. Render bacon until crispy in a large skillet over medium heat, and set aside to drain. Saute onion in bacon fat over medium heat until translucent, about 4 minutes. Add tomatoes, bring to boil.; season with salt and pepper. Add cream and simmer a few minutes. Cook tortellini according to package directions. Drain tortellini and toss with the sauce in a large mixing bowl. Stir in cheese and basil. Top with crispy bacon over the top before serving.",
		time: 30,
		image:
			"https://www.barilla.com//-/media/images/en_us/recipes/collezione/cheese_spinach_tortellini_creamy_tomato_bacon_sauce.jpg"
	},
	{
		name: "CHEESE & SPINACH TORTELLINI WITH BUTTERNUT SQUASH & SAGE",
		ingredientsList: [
			"butternut-squash",
			"parmigiano",
			"butter",
			"sage",
			"vegetable-broth"
		],
		ingredientsFull: [
			"¼ butternut squash, diced small",
			"½ cup parmigiano-Reggiano cheese, shaved",
			"1.5 tablespoons butter",
			"2 leaves sage",
			"1 cup vegetable broth"
		],
		pasta: "BARILLA COLLEZIONE RICOTTA & SPINACH TORTELLINI",
		instructions:
			"Cook tortellini according to package directions. Meanwhile, cook sage with butter for about two minutes over medium heat. When butter starts bubbling add butternut squash and cook over medium heat until slightly brown. Stir in broth, season with salt and pepper and simmer until thoroughly cooked. Drain tortellini and toss with the sauce. Top with cheese before serving. ",
		time: 30,
		image:
			"https://www.barilla.com//-/media/images/en_us/recipes/collezione/tortellini_cheese_spinach_butternut_squash.jpg"
	},
	{
		name: "LASAGNE WITH BOLOGNESE SAUCE",
		ingredientsList: [
			"beef",
			"onion",
			"red-wine",
			"flour",
			"butter",
			"pork",
			"carrots",
			"celery",
			"tomato-paste",
			"milk",
			"nutmeg",
			"parmigiano"
		],
		ingredientsFull: [
			"4 ounces ground beef",
			"1 3/4 ounces onions",
			"1/3 cup dry red wine",
			"Water (about 1 cup) as needed",
			"5 tablespoons flour",
			"2 tablespoons butter",
			"4 ounces ground pork",
			"1 3/4 ounces carrots",
			"1 3/4 ounces celery",
			"1/2 cup tomato paste",
			"5 1/2 tablespoons butter",
			"6 cups milk",
			"Nutmeg to taste",
			"1 cup parmigiano-Reggiano cheese, grated"
		],
		pasta: "BARILLA LASAGNE",
		instructions:
			"Heat olive oil in a pan over medium heat and sauté minced onion, carrot and celery until golden. Add ground meat and cook over high heat until brown and cooked through. Pour in red wine, season with salt and pepper; reduce until dry. Lower the heat and stir in tomato paste and water. Cook over low heat for about 40 minutes, adding spoonfuls of warm water, if too thick. Prepare Béchamel sauce: Melt butter in a saucepan, stir in sifted flour and cook over low heat for 1 minute, whisking constantly. Add milk in a steady stream and bring to a boil, whisking constantly. Season with salt and nutmeg. Cook for a few more minutes until thick. Preheat oven to 350° F. In 13 x 9 inch baking dish, pour a layer of Bolognese sauce with grated parmigiano, then arrange a layer of pasta to cover the bottom of the dish. Make a layer of Béchamel and a layer of meat sauce with parmigiano. Continue this process, alternating pasta and sauce, and finish with a layer of pasta. Cover with remaining Béchamel sauce and pats of butter. Bake for 30 minutes or until the surface is golden crunchy. Remove from the oven and set aside to rest for 15 - 20 minutes before serving.",
		time: 90,
		image:
			"https://www.barilla.com//-/media/images/en_us/recipes/blue-box/blue-box_barilla-lasagne-alla-bolognese.jpg"
	}
];

Recipe.insertMany(recipes)
	.then(data => {
		console.log(`Created ${data.length} recipes`);
		mongoose.connection.close();
	})
	.catch(err => {
		console.log("Error while creating the recipes: ", err);
	});
