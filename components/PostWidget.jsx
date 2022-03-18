import React, { useState, useEffect } from "react";
import moment from "moment";

import { getSimilarPosts, getRecentPosts } from "../services";

const PostWidget = ({ categories, slug }) => {
	const [relatedPosts, setRelatedPosts] = useState([]);

	useEffect(() => {
		if (slug) {
			getSimilarPosts(categories, slug).then((result) => {
				setRelatedPosts(result);
			});
		} else {
			getRecentPosts().then((result) => {
				setRelatedPosts(result);
			});
		}
	}, [slug]);

	return (
		<div className="shadow-lg rounded-3 p-4 mb-4 bg-white">
			<h1 className="fs-3 mb-2 font-semibold border-bottom border-1 border-gray pb-1">
				{slug ? "Powiązane Posty" : "Ostatnie Posty"}
			</h1>
			<div className="d-flex flex-column gap-2">
				{relatedPosts.map((post, index) => (
					<div key={index} className="d-flex align-items-center w-100 gap-2">
						<div className="rounded-pill overflow-hidden">
							<img alt={post.title} width="60" src={post.featuredImage.url} />
						</div>
						<div className="flex-grow-1">
							<p className="text-dark m-0 fs-6 fw-bold">
								{moment(post.createdAt).format("MMM DD, YYYY")}
							</p>
							<a href={`/post/${post.slug}`} key={index} className="my-link">
								{post.title}
							</a>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default PostWidget;
