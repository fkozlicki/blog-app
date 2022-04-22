import {
	MDBInput,
	MDBRow,
	MDBCol,
	MDBBtn,
	MDBTypography,
} from "mdb-react-ui-kit";
import {
	faEnvelope,
	faUser,
	faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
	const [showSuccessMessage, setShowSuccessMessage] = useState("");
	const [error, setError] = useState("");
	const formRef = useRef();
	const nameRef = useRef();
	const emailRef = useRef();
	const messageRef = useRef();

	const isEmail = (email) => {
		return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
			email
		);
	};

	const sendEmail = (e) => {
		e.preventDefault();
		setError(false);

		const { value: name } = nameRef.current;
		const { value: email } = emailRef.current;
		const { value: message } = messageRef.current;

		if (!message || !name || !email) {
			setError("Wszystkie pola są wymagane");
			return;
		} else if (!isEmail(email)) {
			setError("Niepoprawny adres email");
			return;
		}

		emailjs
			.sendForm(
				process.env.NEXT_PUBLIC_SERVICE_ID,
				process.env.NEXT_PUBLIC_TEMPLATE_ID,
				formRef.current,
				process.env.NEXT_PUBLIC_EMAILJS_ID
			)
			.then(
				(result) => {
					setShowSuccessMessage(true);
					setTimeout(() => {
						setShowSuccessMessage(false);
					}, 3000);
					nameRef.current.value = "";
					emailRef.current.value = "";
					messageRef.current.value = "";
				},
				(error) => {
					setError(true);
				}
			);
	};

	return (
		<>
			<h1
				className="fs-5 text-uppercase mb-6 text-center text-md-start"
				stle={{ fontWeight: 500 }}
			>
				Recent posts
			</h1>
			<form
				ref={formRef}
				onSubmit={sendEmail}
				className="contact-form"
				style={{ maxWidth: "600px" }}
			>
				<MDBRow className="gy-4">
					<MDBCol size="12" md="6">
						<div className="d-flex flex-column input-box">
							<input
								ref={nameRef}
								type="text"
								id="name"
								name="from_name"
								className="input"
							/>
							<label htmlFor="name" className="label order-first">
								Imię
							</label>
							<div className="input-border"></div>
						</div>
					</MDBCol>
					<MDBCol size="12" md="6">
						<div className="d-flex flex-column input-box">
							<input
								ref={emailRef}
								name="user_email"
								type="email"
								id="email"
								className="input"
							/>
							<label htmlFor="email" className="label order-first">
								Email
							</label>
							<div className="input-border"></div>
						</div>
					</MDBCol>
					<MDBCol size="12">
						<div className="d-flex flex-column input-box">
							<textarea
								ref={messageRef}
								id="message"
								rows={5}
								cols={10}
								className="input"
							/>
							<label htmlFor="message" className="label order-first">
								Wiadomość
							</label>
							<div className="input-border"></div>
						</div>
					</MDBCol>
					<MDBCol className="d-flex align-items-center justify-content-between">
						<MDBBtn type="submit">Wyślij</MDBBtn>
						{error && <div className="text-danger fw-bold">{error}</div>}
						{showSuccessMessage && (
							<div className="text-success fw-bold">Wysłano pomyślnie</div>
						)}
					</MDBCol>
				</MDBRow>
			</form>
		</>
	);
};

export default ContactForm;
