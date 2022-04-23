import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";

import { getSimilarPosts } from "../services";

const PostWidget = ({ categories, slug }) => {
	const [relatedPosts, setRelatedPosts] = useState([]);

	useEffect(() => {
		let abortController = new AbortController();
		if (slug) {
			getSimilarPosts(categories, slug).then((result) => {
				setRelatedPosts(result);
			});
		}
		return () => {
			abortController.abort();
		};
	}, [categories, slug]);

	return (
		relatedPosts.length > 0 && (
			<section className="mb-5">
				<h1 className="fs-3 mb-3 font-semibold border-bottom border-1 border-gray pb-2">
					{slug ? "Powiązane Posty" : "Ostatnie Posty"}
				</h1>
				<div className="d-flex flex-column gap-2">
					{relatedPosts.map((post, index) => (
						<div key={index} className="d-flex align-items-center w-100 gap-3">
							<Image
								alt={post.title}
								src={post.featuredImage.url}
								width={80}
								height={45}
								className="rounded"
							/>
							<div className="flex-grow-1">
								<p className="text-dark m-0 fs-6 fw-bold">
									{moment(post.createdAt).format("DD MMM YYYY")}
								</p>
								<Link href={`/post/${post.slug}`}>
									<a className="link">{post.title}</a>
								</Link>
							</div>
						</div>
					))}
				</div>
			</section>
		)
	);
};

export default PostWidget;
