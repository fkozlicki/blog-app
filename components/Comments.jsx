import { useState, useEffect } from "react";
import moment from "moment";
import parse from "html-react-parser";
import { MDBBadge } from "mdb-react-ui-kit";

import { getComments } from "../services";

const Comments = ({ slug }) => {
	const [comments, setComments] = useState([]);

	useEffect(() => {
		let abortController = new AbortController();
		getComments(slug).then((result) => setComments(result));
		return () => {
			abortController.abort();
		};
	}, [slug]);

	return (
		<>
			{comments.length > 0 && (
				<section className="mb-5">
					<h1 className="fs-3 mb-4 font-semibold border-bottom border-1 border-gray pb-2">
						Komentarze
					</h1>
					{comments.map((comment) => (
						<article key={comment.createdAt} className="mb-2 p-3 shadow">
							<div className="d-flex align-items-center gap-2">
								<h1 className="fs-5 m-0">{comment.name}</h1>
								<MDBBadge style={{ fontSize: "12px" }}>
									{moment(comment.createdAt).format("DD MMM YYYY")}
								</MDBBadge>
							</div>
							<p className="text-gray mb-0 mt-2 fs-6">
								{parse(comment.comment)}
							</p>
						</article>
					))}
				</section>
			)}
		</>
	);
};

export default Comments;
