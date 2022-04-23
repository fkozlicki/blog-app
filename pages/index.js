import { Hero, Recent, Meta, Categories, ContactForm } from "../components/";
import { getPosts } from "../services";
import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";

export default function Home({ posts }) {
	return (
		<>
			<Meta />
			<Hero />
			<MDBContainer>
				<MDBRow between>
					<MDBCol size={12} lg={8} id="posts" className="pb-6 pt-6">
						<Recent posts={posts} />
					</MDBCol>
					<MDBCol size={12} lg={3} className="pb-6 pt-md-6">
						<Categories />
					</MDBCol>
					<MDBCol size={12} lg={8} id="contact" className="pb-6">
						<ContactForm />
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		</>
	);
}

export async function getStaticProps({ req, res }) {
	const posts = (await getPosts()) || [];

	return {
		props: { posts },
		revalidate: 60,
	};
}
