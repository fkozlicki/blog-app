import React from "react";

import { getCategories, getCategoryPost } from "../../services";
import { Navbar, PostCard, Categories, Meta } from "../../components";
import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";

const CategoryPost = ({ posts }) => {
	return (
		<>
			<Meta title="SmartDev" />
			<Navbar />
			<main className="pt-6 pt-md-7 min-vh-100">
				<MDBContainer>
					<MDBRow>
						<MDBCol size="12" lg="8">
							{posts.map((post, index) => (
								<PostCard key={index} post={post.node} />
							))}
						</MDBCol>
						<MDBCol size="12" lg="4">
							<Categories />
						</MDBCol>
					</MDBRow>
				</MDBContainer>
			</main>
		</>
	);
};
export default CategoryPost;

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
