import { getCategories, getCategoryPost } from "../../services";
import { Navbar, Card, Categories, Meta, Footer } from "../../components";
import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";

const CategoryPosts = ({ posts, category }) => {
	return (
		<>
			<Meta title={category.name} />

			<section className="pt-6 pt-md-5 pb-6">
				<MDBContainer>
					<MDBRow between className="gy-5">
						<MDBCol size={12} md={8}>
							<h1 className="fs-3 mb-4 font-semibold border-bottom border-1 border-gray pb-2">
								{category.name}
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
			</section>
		</>
	);
};
export default CategoryPosts;

// Fetch data at build time
export async function getStaticProps({ params }) {
	const posts = await getCategoryPost(params.slug);
	const categories = await getCategories();
	const category = categories.find((category) => category.slug === params.slug);

	return {
		props: { posts, category },
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
