import {
	MDBCard,
	MDBCardBody,
	MDBCardTitle,
	MDBCardText,
	MDBCardImage,
	MDBBtn,
	MDBRipple,
	MDBTypography,
	MDBBadge,
} from "mdb-react-ui-kit";
import moment from "moment";

const Card = ({ img, title, excerpt, author, date, slug }) => {
	return (
		<MDBCard style={{ maxWidth: "22rem" }} className="m-auto shadow-4-strong">
			<MDBRipple
				rippleColor="light"
				rippleTag="div"
				className="bg-image hover-overlay d-flex align-items-center"
			>
				<MDBCardImage src={img} fluid alt={title} />
				<div
					className="mask"
					style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
				></div>
			</MDBRipple>
			<MDBCardBody className="d-flex flex-column">
				<div className="d-flex align-items-center justify-content-between mb-2">
					<MDBCardTitle tag="h1" className="fs-5 m-0">
						{title}
					</MDBCardTitle>
					<MDBBadge color="secondary">
						{moment(date).format("MMM Do YYYY")}
					</MDBBadge>
				</div>
				<MDBCardText>{excerpt}</MDBCardText>
				<MDBBadge color="secondary" className="align-self-start">
					{author}
				</MDBBadge>
				<MDBBtn
					rounded
					outline
					href={`/post/${slug}`}
					className="align-self-end"
				>
					Czytaj dalej
				</MDBBtn>
			</MDBCardBody>
		</MDBCard>
	);
};

export default Card;
