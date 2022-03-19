import { MDBInput, MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";
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
				"service_7978xqs",
				"template_e0y03qo",
				formRef.current,
				"user_NrdjZ2gZBWolYyWeHp5hr"
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
		<form
			ref={formRef}
			onSubmit={sendEmail}
			className="p-3 position-relative rounded-3"
			style={{
				maxWidth: "500px",
				zIndex: "10",
				backgroundColor: "#ffffff80",
				backdropFilter: "blur(2px)",
			}}
		>
			<MDBRow className="gy-3">
				<MDBCol size="12" md="6">
					<MDBInput
						inputRef={nameRef}
						id="name"
						size="lg"
						type="text"
						label="Imię"
						name="from_name"
						className="pe-4 position-relative"
					>
						<FontAwesomeIcon
							icon={faUser}
							className="position-absolute top-50 end-0 translate-middle"
							width="16"
						/>
					</MDBInput>
				</MDBCol>
				<MDBCol size="12" md="6">
					<MDBInput
						inputRef={emailRef}
						className="pe-4 position-relative"
						label="Email"
						id="email"
						type="email"
						name="user_email"
						size="lg"
					>
						<FontAwesomeIcon
							icon={faEnvelope}
							className="position-absolute top-50 end-0 translate-middle"
							width="16"
						/>
					</MDBInput>
				</MDBCol>
				<MDBCol size="12">
					<MDBInput
						inputRef={messageRef}
						id="message"
						label="Wiadomość"
						size="lg"
						name="message"
						textarea
						rows="6"
						className="pe-4 position-relative"
					>
						<FontAwesomeIcon
							icon={faMessage}
							className="position-absolute end-0 translate-middle"
							width="16"
							style={{ top: "9%" }}
						/>
					</MDBInput>
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
	);
};

export default ContactForm;
