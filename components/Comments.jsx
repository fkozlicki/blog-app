import React, { useState, useEffect } from "react";
import moment from "moment";
import parse from "html-react-parser";
import { MDBBadge, MDBTypography } from "mdb-react-ui-kit";

import { getComments } from "../services";

const Comments = ({ slug }) => {
	const [comments, setComments] = useState([]);

	useEffect(() => {
		getComments(slug).then((result) => setComments(result));
	});

	return (
		<>
			{comments.length > 0 && (
				<div className="bg-white shadow-lg rounded-3 p-4 mb-4">
					<MDBTypography
						tag="h1"
						className="fs-3 fw-bolder border-bottom border-color-gray pb-2 mb-3"
					>
						Komentarze
					</MDBTypography>
					{comments.map((comment) => (
						<div
							key={comment.createdAt}
							className="border-bottom border-color-gray mb-2 pb-2 "
						>
							<div className="d-flex align-items-center gap-2">
								<MDBTypography tag="h1" className="fs-4 m-0">
									{comment.name}
								</MDBTypography>
								<MDBBadge style={{ fontSize: "12px" }}>
									{moment(comment.createdAt).format("MMM DD, YYYY")}
								</MDBBadge>
							</div>
							<p className="text-gray mb-0 mt-2 fs-5">
								{parse(comment.comment)}
							</p>
						</div>
					))}
				</div>
			)}
		</>
	);
};

export default Comments;
