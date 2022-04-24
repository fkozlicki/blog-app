import Image from "next/image";
import moment from "moment";
import parse from "html-react-parser";

const PostDetail = ({ post }) => {
	return (
		<section className="p-lg-3 mb-5 overflow-hidden bg-white shadow rounded-3">
			<div className="position-relative overflow-hidden mb-3">
				<Image
					src={post.featuredImage.url}
					alt={post.title}
					width={1600}
					height={900}
					className="rounded"
				/>
			</div>
			<div className="px-3 px-lg-1">
				<div className="d-flex align-items-center mb-2 w-100">
					<div className="d-flex align-items-center mb-0 w-auto me-1">
						<Image
							src={post.author.photo.url}
							alt={post.author.name}
							height={25}
							width={25}
							className="align-middle"
						/>
						<p className="d-inline align-middle m-0 fs-6 mx-1">
							{post.author.name}
						</p>
					</div>
					<div className="d-flex align-items-center justify-content-center gap-1">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="24px"
							width="24px"
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
						<span className="text-dark m-0 fs-6">
							{moment(post.createdAt).format("DD MMM YYYY")}
						</span>
					</div>
				</div>
				<h1 className="mb-5 display-5 fw-normal">{post.title}</h1>

				<div className="d-flex align-items-start flex-column gap-3">
					{parse(post.content.html)}
				</div>
			</div>
		</section>
	);
};

export default PostDetail;
