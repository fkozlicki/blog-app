import { MDBBtn } from "mdb-react-ui-kit";
import moment from "moment";

const PostCard = ({ post }) => {
	return (
		<div className="shadow-lg p-0 pb-4 p-lg-3 pb-lg-4 mb-4 rounded overflow-hidden bg-white">
			<div className="position-relative overflow-hidden rounded-3 shadow-md pb-8 pb-sm-9 pb-xl-10 mb-2">
				<img
					src={post.featuredImage.url}
					alt={post.title}
					className="position-absolute top-0 img-fluid w-100"
				/>
			</div>
			<div className="text-center">
				<a href={`/post/${post.slug}`} className="fs-2 my-link">
					{post.title}
				</a>
			</div>
			<div className="d-block d-lg-flex text-center align-items-center justify-content-center w-100 mb-3 gap-3">
				<div className="d-flex align-items-center justify-content-center w-auto gap-1">
					<img
						src={post.author.photo.url}
						alt={post.author.name}
						height="22px"
						width="22px"
						className="align-middle"
					/>
					<span className="m-0">{post.author.name}</span>
				</div>
				<div className="d-flex align-items-center justify-content-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="22px"
						width="22px"
						className="d-inline mr-2"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
						/>
					</svg>
					<span className="ms-1">
						{moment(post.createdAt).format("DD MMM YYYY")}
					</span>
				</div>
			</div>
			<p className="text-center px-2 px-lg-3 mb-3">{post.excerpt}</p>
			<div className="text-center">
				<MDBBtn tag="a" href={`/post/${post.slug}`} rounded outline>
					Czytaj
				</MDBBtn>
			</div>
		</div>
	);
};

export default PostCard;
