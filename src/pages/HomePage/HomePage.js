import React from "react";
import "./HomePage.scss";
import { useContext } from "react";
import Loader from "../../components/Loader/Loader";
import CategoryList from "../../components/Category/CategoryList";
import NotFound from "../../components/NotFound/NotFound";
import MealList from "../../components/Meal/MealList";
import MealContext from "../../context/mealContext";

const HomePage = () => {
	const { categories, meals, categoryLoading, mealsLoading } =
		useContext(MealContext);

	return (
		<main className="main-content">
			{mealsLoading ? (
				<Loader />
			) : meals === null ? (
				<NotFound />
			) : meals?.length ? (
				<MealList meals={meals} />
			) : (
				""
			)}
			{categoryLoading ? <Loader /> : <CategoryList categories={categories} />}
		</main>
	);
};

export default HomePage;
