import React, { useContext, useEffect } from "react";
import "./CategoryPage.scss";
import { useParams } from "react-router";
import MealList from "../../components/Meal/MealList";
import MealContext from "../../context/mealContext";
import { startFetchMealByCategory } from "../../actions/mealsActions";

function CategoryPage() {
	const { name } = useParams();
	const { categoryMeals, dispatch, categories } = useContext(MealContext);
	let categoryDescription = "";

	if (categories) {
		categories.forEach((category) => {
			if (category?.strCategory === name)
				categoryDescription = category?.strCategoryDescription;
		});
	}

	useEffect(() => {
		startFetchMealByCategory(dispatch, name);
	}, [name, dispatch]);

	return (
		<main className="main-content py-5">
			<div className="container">
				<div className="cat-description px-4 py-4">
					<h2 className="text-orange fw-8">{name}</h2>
					<p className="fs-18 op-07">{categoryDescription}</p>
				</div>
			</div>
			{categoryMeals?.length ? <MealList meals={categoryMeals} /> : null}
		</main>
	);
}

export default CategoryPage;
