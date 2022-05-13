import { useRouter } from "next/router";
import { getPosts, getPostDetails } from "../../services";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import {
	Navbar,
	PostDetail,
	PostWidget,
	Categories,
	Comments,
	CommentsForm,
	Meta,
} from "../../components";

const PostDetails = ({ post }) => {
	const router = useRouter();

	if (router.isFallback) {
		return <div className="pt-6 pt-md-7">Loading...</div>;
	}

	return (
		<>
			<Meta title={post.title} />

			<div className="pt-7 pt-md-7 pb-5">
				<MDBContainer>
					<MDBRow between>
						<MDBCol size="12" lg={8}>
							<PostDetail post={post} />
							<Comments slug={post.slug} />
							<CommentsForm slug={post.slug} />
						</MDBCol>
						<MDBCol size="12" lg={3}>
							<PostWidget
								slug={post.slug}
								categories={post.categories.map((category) => category.slug)}
							/>
							<Categories />
						</MDBCol>
					</MDBRow>
				</MDBContainer>
			</div>
		</>
	);
};

export default PostDetails;

export async function getStaticProps({ params }) {
	const data = await getPostDetails(params.slug);
	return {
		props: {
			post: data,
		},
		revalidate: 60,
	};
}

export async function getStaticPaths() {
	const posts = await getPosts();
	return {
		paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
		fallback: false,
	};
}
