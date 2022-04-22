import React, { useState, useEffect } from "react";
import Link from "next/link";

import { getCategories } from "../services";

const Categories = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		getCategories().then((newCategories) => setCategories(newCategories));
	}, [categories]);

	return (
		<div className="d-flex flex-column ">
			<h1
				className="fs-5 text-uppercase mb-6 text-center text-md-start"
				stle={{ fontWeight: 500 }}
			>
				Kategorie
			</h1>

			<div className="d-flex flex-wrap">
				{categories.map((category) => (
					<Link key={category.slug} href={`/category/${category.slug}`}>
						<a className="bg-primary me-2 mb-2 text-black category-badge">
							{category.name}
						</a>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Categories;
