import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import Card from "./Card";

const Recent = ({ posts }) => {
	return (
		<section>
			<h1 className="fs-3 mb-4 font-semibold border-bottom border-1 border-gray pb-2">
				Ostatnie Posty
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
		</section>
	);
};

export default Recent;
