import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import Card from "./Card";

const Recent = ({ posts }) => {
	return (
		<>
			<h1
				className="fs-5 text-uppercase text-secondary mb-6 text-center text-md-start"
				stle={{ fontWeight: 500 }}
			>
				Ostatnie posty
			</h1>
			<MDBRow className="gy-4">
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
		</>
	);
};

export default Recent;
