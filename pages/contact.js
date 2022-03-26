import { Navbar, ContactForm, Meta } from "../components";
import { MDBContainer, MDBTypography } from "mdb-react-ui-kit";
import img from "../public/contact.svg";

const contact = () => {
	return (
		<>
			<Meta title="Programista HTML - Kontakt" description="Napisz do nas" />
			<Navbar />
			<main className="d-flex align-items-center position-relative vh-100 bg-background">
				<MDBContainer style={{ zIndex: "100" }}>
					<MDBTypography
						variant="mb-4 mb-md-6"
						className="display-3 text-center fw-normal text-uppercase"
					>
						Napisz do mnie!
					</MDBTypography>
					<ContactForm />
				</MDBContainer>
				<img
					src={img}
					alt="contact"
					className="position-absolute end-0 bottom-0 d-none d-sm-block"
					style={{
						width: "70%",
						height: "auto",
						bottom: "0",
						maxWidth: "800px",
					}}
				/>
			</main>
		</>
	);
};

export default contact;
