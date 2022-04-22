import {
	Navbar,
	Hero,
	Recent,
	Footer,
	Meta,
	PostCard,
	PostWidget,
	Categories,
	Card,
	ContactForm,
} from "../components/";
import { getPosts } from "../services";
import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";

export default function Home({ posts }) {
	return (
		<>
			<Meta />
			<div className="app">
				<Navbar />
				<Hero />
				<main>
					<MDBContainer>
						<MDBRow between>
							<MDBCol size={12} lg={8} className="py-6">
								<Recent posts={posts} />
							</MDBCol>
							<MDBCol size={12} lg={3} className="py-6">
								<Categories />
							</MDBCol>
							<MDBCol size={12} lg={8} className="py-6">
								<ContactForm />
							</MDBCol>
						</MDBRow>
					</MDBContainer>
				</main>

				<Footer />
			</div>
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
