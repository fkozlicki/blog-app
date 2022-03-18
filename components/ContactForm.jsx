import { MDBInput, MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";
import {
	faEnvelope,
	faUser,
	faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactForm = () => {
	return (
		<div
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
						id="name"
						size="lg"
						type="text"
						label="Imię"
						name="name"
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
						className="pe-4 position-relative"
						label="Email"
						id="email"
						type="email"
						name="email"
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
				<MDBCol>
					<MDBBtn>Wyślij</MDBBtn>
				</MDBCol>
			</MDBRow>
		</div>
	);
};

export default ContactForm;
