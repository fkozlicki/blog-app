import { Navbar, PostCard, PostWidget, Categories, Meta } from "../components";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { getPosts } from "../services";

const blog = ({ posts }) => {
	return (
		<>
			<Meta title="Programista HTML - Blog" />
			<Navbar />
			<main className="pt-6 pt-md-7 bg-background">
				<MDBContainer>
					<MDBRow>
						<MDBCol size="12" lg="8">
							{posts.map((post, i) => (
								<PostCard post={post.node} key={i} />
							))}
						</MDBCol>
						<MDBCol size="12" lg="4">
							<PostWidget />
							<Categories />
						</MDBCol>
					</MDBRow>
				</MDBContainer>
			</main>
		</>
	);
};

export default blog;

export async function getStaticProps() {
	const posts = (await getPosts()) || [];

	return {
		props: { posts },
	};
}
