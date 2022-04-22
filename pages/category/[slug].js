import React from "react";

import { getCategories, getCategoryPost } from "../../services";
import { Navbar, Card, Categories, Meta } from "../../components";
import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";

const CategoryPosts = ({ posts }) => {
	return (
		<>
			<Meta title="SmartDev" />
			<Navbar />
			<main className="pt-7 pt-md-5 pb-4 min-vh-100">
				<MDBContainer>
					<MDBRow between className="gy-5">
						<MDBCol size={12} md={8}>
							<h1
								className="fs-5 text-uppercase text-secondary mb-6 text-center text-md-start"
								stle={{ fontWeight: 500 }}
							>
								Ostatnie posty
							</h1>
							<MDBRow>
								{posts.map((post, i) => (
									<MDBCol key={i} size={12} md={6}>
										<Card
											img={post.node.featuredImage.url}
											title={post.node.title}
											excerpt={post.node.excerpt}
											author={post.node.author.name}
											date={post.node.createdAt}
											slug={post.node.slug}
										/>
									</MDBCol>
								))}
							</MDBRow>
						</MDBCol>
						<MDBCol size={12} lg={3}>
							<Categories />
						</MDBCol>
					</MDBRow>
				</MDBContainer>
			</main>
		</>
	);
};
export default CategoryPosts;

// Fetch data at build time
export async function getStaticProps({ params }) {
	const posts = await getCategoryPost(params.slug);

	return {
		props: { posts },
	};
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
	const categories = await getCategories();
	return {
		paths: categories.map(({ slug }) => ({ params: { slug } })),
		fallback: false,
	};
}
