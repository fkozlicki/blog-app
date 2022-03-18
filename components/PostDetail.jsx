import React from "react";
import moment from "moment";

const PostDetail = ({ post }) => {
	const getContentFragment = (index, text, obj, type) => {
		let modifiedText = text;

		if (obj) {
			if (obj.bold) {
				modifiedText = <b key={index}>{text}</b>;
			}

			if (obj.italic) {
				modifiedText = <em key={index}>{text}</em>;
			}

			if (obj.underline) {
				modifiedText = <u key={index}>{text}</u>;
			}
		}

		switch (type) {
			case "heading-three":
				return (
					<h3 key={index} className="text-xl m-0">
						{modifiedText.map((item, i) => (
							<React.Fragment key={i}>{item}</React.Fragment>
						))}
					</h3>
				);
			case "paragraph":
				return (
					<p key={index} className="fs-6 m-0">
						{modifiedText.map((item, i) => (
							<React.Fragment key={i}>{item}</React.Fragment>
						))}
					</p>
				);
			case "heading-four":
				return (
					<h4 key={index} className="m-0">
						{modifiedText.map((item, i) => (
							<React.Fragment key={i}>{item}</React.Fragment>
						))}
					</h4>
				);
			case "image":
				return (
					<img
						key={index}
						alt={obj.title}
						height={obj.height}
						width={obj.width}
						src={obj.src}
					/>
				);
			default:
				return modifiedText;
		}
	};

	return (
		<div className="p-lg-4 pb-4 mb-4 overflow-hidden bg-white shadow-lg rounded">
			<div className="position-relative overflow-hidden shadow-md mb-2">
				<img
					src={post.featuredImage.url}
					alt={post.title}
					className="h-auto w-100"
				/>
			</div>
			<div className="px-3 px-lg-1">
				<div className="d-flex align-items-center mb-2 w-100 ">
					<div className="d-flex align-items-center mb-0 w-auto me-1">
						<img
							src={post.author.photo.url}
							alt={post.author.name}
							height="25px"
							width="25px"
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
							{moment(post.createdAt).format("MMM DD, YYYY")}
						</span>
					</div>
				</div>
				<h1 className="mb-2 display-5 fw-normal">{post.title}</h1>

				<div className="d-flex flex-column gap-3">
					{post.content.raw.children.map((typeObj, index) => {
						const children = typeObj.children.map((item, itemindex) =>
							getContentFragment(itemindex, item.text, item)
						);

						return getContentFragment(index, children, typeObj, typeObj.type);
					})}
				</div>
			</div>
		</div>
	);
};

export default PostDetail;
