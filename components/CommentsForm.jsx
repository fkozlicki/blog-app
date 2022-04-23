import { useState, useEffect, useRef } from "react";
import { MDBBtn, MDBRow, MDBCol } from "mdb-react-ui-kit";
import CustomInput from "./CustomInput";

import { submitComment, isEmail } from "../services";

const CommentsForm = ({ slug }) => {
	const [error, setError] = useState("");
	const [showSuccessMessage, setShowSuccessMessage] = useState(false);
	const nameRef = useRef();
	const commentRef = useRef();
	const emailRef = useRef();
	const storeDataRef = useRef();

	useEffect(() => {
		if (
			window.localStorage.getItem("name") &&
			window.localStorage?.getItem("email")
		) {
			setNameEl(window.localStorage.getItem("name"));
			setEmailEl(window.localStorage?.getItem("email"));
		}
	}, []);

	const handleCommentSubmit = () => {
		setError(false);

		const { value: nameValue } = nameRef.current;
		const { value: emailValue } = emailRef.current;
		const { value: commentValue } = commentRef.current;
		const { checked: storeDataValue } = storeDataRef.current;
		console.log(storeDataValue);

		if (!commentValue || !nameValue || !emailValue) {
			setError("Wszystkie pola są wymagane");
			return;
		} else if (!isEmail(emailValue)) {
			setError("Niepoprawny adres email");
			return;
		}

		const commentObj = {
			name: nameValue,
			email: emailValue,
			comment: commentValue,
			slug,
		};

		if (storeDataValue) {
			window.localStorage.setItem("name", nameValue);
			window.localStorage.setItem("email", emailValue);
		} else {
			window.localStorage.removeItem("name", nameValue);
			window.localStorage.removeItem("email", emailValue);
		}

		nameRef.current.value = "";
		emailRef.current.value = "";
		commentRef.current.value = "";

		submitComment(commentObj).then((res) => {
			setShowSuccessMessage(true);
			setTimeout(() => {
				setShowSuccessMessage(false);
			}, 3000);
		});
	};

	return (
		<section>
			<h1 className="fs-3 mb-4 font-semibold border-bottom border-1 border-gray pb-2">
				Zostaw komentarz
			</h1>
			<form className="mb-5">
				<MDBRow className="gy-4">
					<MDBCol size="12" md="6">
						<CustomInput
							inputRef={nameRef}
							type="text"
							name="from_name"
							id="name"
							label="Imię"
						/>
					</MDBCol>
					<MDBCol size="12" md="6">
						<CustomInput
							inputRef={emailRef}
							type="email"
							name="user_email"
							id="email"
							label="Email"
						/>
					</MDBCol>
					<MDBCol size="12">
						<CustomInput
							inputRef={commentRef}
							textarea
							name="message"
							id="message"
							label="Wiadomość"
						/>
					</MDBCol>
					<MDBCol>
						<input type="checkbox" ref={storeDataRef} id="storeData" />
						<label htmlFor="storeData" className="ms-3">
							Zapisz email i imię
						</label>
					</MDBCol>
					<div className="mt-3 d-flex align-items-center gap-4">
						<MDBBtn tag="button" type="button" onClick={handleCommentSubmit}>
							Wyślij
						</MDBBtn>
						{showSuccessMessage && (
							<span className="text-success fw-normal fs-6">
								Wysłano do sprawdzenia
							</span>
						)}
						{error && (
							<span className="text-danger fw-normal fs-6">{error}</span>
						)}
					</div>
				</MDBRow>
			</form>
		</section>
	);
};

export default CommentsForm;
