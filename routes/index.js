const express = require("express");
const router = express.Router();
const Recipe = require("../models/Recipe");


/* GET home page */
router.get("/", (req, res, next) => {
	Recipe.find({})
		.then(recipe => {
			const arrIngr = recipe.map(x => x.ingredientsList);
			const arrIngrFlat = [].concat.apply([], arrIngr);
			const objIngr = new Set(arrIngrFlat);
			const arrIngrNoDup = [...objIngr].sort()

			res.render("index", { arrIngrNoDup });
		})
		.catch(err => {
			console.log("Error while updating the search bar: ", err);
		});
});


router.get("/recipes", (req, res) => {
	Recipe.find({})
		.then(recipes => {
			res.render("recipes", { recipes });
		})
		.catch(err => {
			console.log("Error while retrieving the recipes: ", err);
		});
});

router.post("/ingredients/", (req, res) => {
	const search = req.body.userIngredientInput;
	Recipe.find({ ingredientsList: { $in: search } })
		.then(recipes => {

			recipes.sort((a, b) => {
				const aScore = a.ingredientsList.filter(ingredient => {
					return search.includes(ingredient);
				}).length;

				const bScore = b.ingredientsList.filter(ingredient => {
					return search.includes(ingredient);
				}).length;

				return bScore - aScore;
			});

			const slicedRecipes = recipes.slice(0, 3);
			const resultsArr = slicedRecipes.map(el => {
				const toBuyArr = [];
				const ownedArr = [];
				el.ingredientsList.forEach(ingredient => {
					if (search.includes(ingredient)) {
						ownedArr.push(ingredient);
					} else {
						toBuyArr.push(ingredient);
					}
				});
				el.buy = toBuyArr;
				el.own = ownedArr;
				return el;
			});
			res.render("ingredients", { resultsArr });
		})
		.catch(err => {
			console.log("Error while updating the recipe: ", err);
		});
});

module.exports = router;
