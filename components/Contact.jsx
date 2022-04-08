import { MDBContainer, MDBTypography, MDBBtn } from "mdb-react-ui-kit";

const Contact = () => {
	return (
		<section className="bg-primary py-6">
			<MDBContainer>
				<div className="d-flex flex-column align-items-center">
					<MDBTypography tag="h1" className="fs-3 text-white text-center mb-5">
						Masz jakieś pytania, chcesz dowiedzieć się wiecej? Napisz do mnie!
					</MDBTypography>

					<MDBBtn
						rounded
						size="lg"
						color="light"
						href="/contact"
						className="text-black"
					>
						Kontakt
					</MDBBtn>
				</div>
			</MDBContainer>
		</section>
	);
};

export default Contact;
