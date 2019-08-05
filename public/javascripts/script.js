document.addEventListener(
	"DOMContentLoaded",
	() => {
		console.log("IronGenerator JS imported successfully!");
	},
	false
);

function required()
{
let empt = document.form1.userIngredientInput.value;
if (empt === "")
{
document.getElementById('error-msg').innerHTML = "Please Enter At Least One Ingredient"
return false;
}

}