const mongoose = require("mongoose");
const { Schema } = mongoose;

const recipeSchema = new Schema(
	{
		name: String,
		ingredientsList: [],
		ingredientsFull: [],
		pasta: String,
		instructions: String,
		time: Number,
		image: String,
		own: Array,
		buy: Array,
		owner: {
			type: Schema.Types.ObjectId,
			ref: "User"
		}
	},
	{
		timestamps: {
			createdAt: "created_at",
			updatedAt: "updated_at"
		}
	}
);

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
