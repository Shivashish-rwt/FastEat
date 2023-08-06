import React from "react";
import { Link } from "react-router-dom";
import './ErrorPage.scss';

function ErrorPage() {
	return (
		<main className="main-content">
			<div className="container text-center py-4">
				<h1 className="py-1">404 Error Page</h1>
				<p className="fw-5 py-1">Sorry, This page doesn't exist</p>
				<Link to="/"><button className="back-button">Go Back</button></Link>
			</div>
		</main>
	);
}

export default ErrorPage;
