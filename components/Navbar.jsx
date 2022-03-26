import { useState, useEffect } from "react";
import Link from "next/link";
import {
	MDBContainer,
	MDBNavbar,
	MDBNavbarBrand,
	MDBNavbarNav,
	MDBNavbarLink,
	MDBCollapse,
} from "mdb-react-ui-kit";
import logo from "../public/logo2.png";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [active, setActive] = useState(false);
	const [navbarColor, setNavbarColor] = useState("transparent");

	const toggleCollapse = () => {
		setIsOpen(!isOpen);
	};

	const toggleActive = () => {
		setActive(!active);
	};

	const handleToggles = () => {
		toggleCollapse();
		toggleActive();
	};

	const changeBg = () => {
		if (window.scrollY >= 10) setNavbarColor("primary");
		else setNavbarColor("transparent");
	};

	if (
		typeof window !== "undefined" &&
		window.location.href === `${window.location.origin}/`
	) {
		window.addEventListener("scroll", changeBg);
	}

	useEffect(() => {
		if (window.location.href !== `${window.location.origin}/`)
			setNavbarColor("primary");
		else setNavbarColor("transparent");
	}, []);

	return (
		<>
			<MDBNavbar
				data-mdb-animation="fade-in"
				data-mdb-toggle="animation"
				data-mdb-animation-reset="true"
				className={`navbar ${navbarColor} fixed-top py-md-3`}
				dark
				expand="md"
			>
				<MDBContainer>
					<MDBNavbarBrand href="/" className="text-white">
						<div>
							<img src={logo} alt="logo" width="150" className="img-fluid" />
						</div>
					</MDBNavbarBrand>
					<button
						className="menuBtn navbar-toggler"
						type="button"
						data-toggle="collapse"
						aria-expanded="false"
						mdb-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-label="Toggle navigation"
						onClick={handleToggles}
					>
						<div className={`hamburger hamburger-1 ${active ? "active" : ""}`}>
							<span className="line"></span>
							<span className="line"></span>
							<span className="line"></span>
						</div>
					</button>
					<MDBCollapse id="navbarCollapse3" show={isOpen} navbar>
						<MDBNavbarNav left className="justify-content-md-end">
							<MDBNavbarLink href="/">Home</MDBNavbarLink>
							<MDBNavbarLink href="/blog">Blog</MDBNavbarLink>
							<MDBNavbarLink href="/contact">Kontakt</MDBNavbarLink>
						</MDBNavbarNav>
					</MDBCollapse>
				</MDBContainer>
			</MDBNavbar>
		</>
	);
};

export default Navbar;
