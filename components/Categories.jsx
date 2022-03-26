import React, { useState, useEffect } from "react";
import Link from "next/link";

import { getCategories } from "../services";

const Categories = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		getCategories().then((newCategories) => setCategories(newCategories));
	});

	return (
		<div className="shadow rounded p-4 pb-12 mb-4 d-flex flex-column bg-white">
			<h1 className="fs-3 border-bottom border-gray pb-2">Kategorie</h1>
			<div className="d-flex flex-column">
				{categories.map((category) => (
					<Link key={category.slug} href={`/category/${category.slug}`}>
						<a className="my-link fs-6">{category.name}</a>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Categories;
