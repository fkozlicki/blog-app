import React, { useState, useEffect } from "react";
import { MDBBtn, MDBInput, MDBCheckbox, MDBTypography } from "mdb-react-ui-kit";

import { submitComment } from "../services";

const CommentsForm = ({ slug }) => {
	const [error, setError] = useState("");
	const [localStorage, setLocalStorage] = useState(null);
	const [showSuccessMessage, setShowSuccessMessage] = useState(false);
	const [commentEl, setCommentEl] = useState("");
	const [nameEl, setNameEl] = useState("");
	const [emailEl, setEmailEl] = useState("");
	const [storeData, setStoreData] = useState(false);

	useEffect(() => {
		if (
			window.localStorage.getItem("name") &&
			window.localStorage?.getItem("email")
		) {
			setNameEl(window.localStorage.getItem("name"));
			setEmailEl(window.localStorage?.getItem("email"));
		}
	}, []);

	const isEmail = (email) => {
		return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
			email
		);
	};

	const handleCommentSubmit = () => {
		setError(false);

		if (!commentEl || !nameEl || !emailEl) {
			setError("Wszystkie pola są wymagane");
			return;
		} else if (!isEmail(emailEl)) {
			setError("Niepoprawny adres email");
			return;
		}

		const commentObj = {
			name: nameEl,
			email: emailEl,
			comment: commentEl,
			slug,
		};

		if (storeData) {
			window.localStorage.setItem("name", nameEl);
			window.localStorage.setItem("email", emailEl);
		} else {
			window.localStorage.removeItem("name", nameEl);
			window.localStorage.removeItem("email", emailEl);
		}

		setCommentEl("");
		setNameEl("");
		setEmailEl("");

		submitComment(commentObj).then((res) => {
			setShowSuccessMessage(true);
			setTimeout(() => {
				setShowSuccessMessage(false);
			}, 3000);
		});
	};

	return (
		<form className="shadow-lg rounded p-4 mb-4">
			<MDBTypography
				tag="h1"
				className="fs-3 fw-bolder mb-2 border-bottom border-color-gray pb-2 px-0"
			>
				Zostaw komentarz
			</MDBTypography>
			<div className="d-flex flex-column gap-3 mt-4">
				<MDBInput
					label="Komentarz"
					id="comment"
					size="lg"
					name="comment"
					value={commentEl}
					onChange={(e) => setCommentEl(e.target.value)}
					textarea
					rows="3"
				/>
				<MDBInput
					label="Imię"
					id="name"
					type="text"
					size="lg"
					name="name"
					value={nameEl}
					onChange={(e) => setNameEl(e.target.value)}
				/>
				<MDBInput
					label="Email"
					id="email"
					type="email"
					name="email"
					size="lg"
					value={emailEl}
					onChange={(e) => setEmailEl(e.target.value)}
				/>
				<MDBCheckbox
					value={storeData}
					onChange={(e) => setStoreData(e.target.value)}
					label="Zapisz email i imię"
					id="storeData"
				/>
			</div>
			<div className="mt-3 d-flex align-items-center gap-4">
				<MDBBtn tag="button" type="button" onClick={handleCommentSubmit}>
					Wyślij
				</MDBBtn>
				{showSuccessMessage && (
					<span className="ms-2 fw-normal mt-3 text-success fs-6">
						Wysłano do sprawdzenia
					</span>
				)}
				{error && <p className="text-danger mb-0">{error}</p>}
			</div>
		</form>
	);
};

export default CommentsForm;
