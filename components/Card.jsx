import {
	MDBCard,
	MDBCardBody,
	MDBCardTitle,
	MDBCardText,
	MDBBtn,
	MDBRipple,
	MDBBadge,
} from "mdb-react-ui-kit";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";

const Card = ({ img, title, excerpt, author, date, slug }) => {
	return (
		<MDBCard style={{ maxWidth: "26rem" }} className="m-auto shadow">
			<MDBRipple
				rippleColor="light"
				rippleTag="div"
				className="bg-image hover-overlay d-flex align-items-center"
			>
				<div className="overflow-hidden" style={{ height: "200px" }}>
					<Image src={img} alt={title} width={1600} height={900} />
				</div>
			</MDBRipple>
			<MDBCardBody className="d-flex flex-column gap-2">
				<div className="d-flex align-items-center justify-content-between mb-2">
					<MDBCardTitle tag="h1" className="fs-5 m-0">
						{title}
					</MDBCardTitle>
					<MDBBadge color="primary">
						{moment(date).format("DD MMM YYYY")}
					</MDBBadge>
				</div>
				<MDBCardText>{excerpt}</MDBCardText>
				<MDBBadge color="primary" className="align-self-start">
					{author}
				</MDBBadge>

				<Link href={`/post/${slug}`} passHref>
					<MDBBtn tag="a" rounded outline className="align-self-end scale">
						Czytaj dalej
					</MDBBtn>
				</Link>
			</MDBCardBody>
		</MDBCard>
	);
};

export default Card;
