import { MDBTypography, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import Card from "./Card";

const Recent = ({ posts }) => {
	return (
		<section className="py-6 py-md-7" id="recent">
			<MDBTypography
				tag="h1"
				className="display-4 text-uppercase text-center mb-5 mb-md-7"
			>
				Ostatnie Posty
			</MDBTypography>
			<MDBContainer>
				<MDBRow className="justify-content-center gy-4 gy-lg-6">
					{posts.map((post, i) => (
						<MDBCol md="5" lg="4" key={i}>
							<Card
								img={post.node.featuredImage.url}
								title={post.node.title}
								excerpt={post.node.excerpt}
								author={post.node.author.name}
								date={post.createdAt}
								slug={post.node.slug}
							/>
						</MDBCol>
					))}
				</MDBRow>
			</MDBContainer>
		</section>
	);
};

export default Recent;
