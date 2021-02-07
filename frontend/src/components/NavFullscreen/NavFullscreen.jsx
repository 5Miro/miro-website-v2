import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./NavFullscreen.css";

const NavFullscreen = (props) => {
	const [active, setActive] = useState(false);

	const navBtnHandler = (e) => {
		e.preventDefault();
		setActive(!active);
		if (!active) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "visible";
		}
	};

	const linkHandler = (e, id) => {
		navBtnHandler(e);
		document.getElementById(id).scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div className="col-1 small right">
			<div className="nav-btn">
				<a href="/" onClick={navBtnHandler}>
					<FontAwesomeIcon icon={faBars} />
				</a>
			</div>
			<nav id="nav-fullscreen" className={active ? "open-nav" : null}>
				{props.navData.map((el) => (
					<div key={el.id}>
						<a
							href="/"
							onClick={(e) => {
								e.preventDefault();
								linkHandler(e, el.id);
							}}
						>
							{el.label}
						</a>
					</div>
				))}
			</nav>
		</div>
	);
};

export default NavFullscreen;
