import React, { useState, useContext } from "react";
import "./Header.scss";
import { BsSearch } from "react-icons/bs";
import MealContext from "../../context/mealContext";
import { useNavigate } from "react-router";
import { startFetchMealBySearch } from "../../actions/mealsActions";

function SearchForm() {
	const navigate = useNavigate();
	const [searchTerm, setSearchTerm] = useState("");
	const [errorMsg, setErrorMsg] = useState("");
	const { dispatch, meals } = useContext(MealContext);

	const handleSearchTerm = (e) => {
		e.preventDefault();
		if (e.target.value.replace(/[^\w\s]/gi, "").length !== 0) {
			setSearchTerm(e.target.value);
			setErrorMsg("");
		} else {
			setErrorMsg("Invalid search term ...");
		}
	};

    const handleSearchResult = (e) => {
        e.preventDefault();
        navigate("/");
        startFetchMealBySearch(dispatch, searchTerm);
    };

	return (
		<form className="search-form flex align-center" onSubmit={(e) => handleSearchResult(e)}>
			<input
				type="text"
				className="form-control-input text-dark-grey fs-15"
				placeholder="Search recipes here ..."
                onChange={(e) => handleSearchTerm(e)}
			/>
			<button
				type="submit"
				className="form-submit-btn text-white text-uppercase fs-14"
			>
				<BsSearch className="btn-icon" size={20} />
			</button>
		</form>
	);
}

export default SearchForm;
