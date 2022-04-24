import { useState, useEffect } from "react";
import Link from "next/link";

import { getCategories } from "../services";

const Categories = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		let abortController = new AbortController();

		getCategories().then((newCategories) => setCategories(newCategories));

		return () => {
			abortController.abort();
		};
	}, []);

	return (
		<section className="d-flex flex-column ">
			<h1 className="fs-3 mb-4 font-semibold border-bottom border-1 border-gray pb-2">
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
		</section>
	);
};

export default Categories;
