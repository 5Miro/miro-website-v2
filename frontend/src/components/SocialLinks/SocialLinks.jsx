import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const SocialLinks = (props) => {
	return (
		<div className="row center social-links">
			<a
				href="https://www.linkedin.com/in/ramiro-vazquez-abad/"
				target="_blank"
				rel="noreferrer"
			>
				<FontAwesomeIcon icon={faLinkedin} />
			</a>
			<a href="https://github.com/5Miro" target="_blank" rel="noreferrer">
				<FontAwesomeIcon icon={faGithub} />
			</a>
			<a
				href="mailto:ramirovazquez@miromiro.tech"
				target="_blank"
				rel="noreferrer"
			>
				<FontAwesomeIcon icon={faEnvelope} />
			</a>
		</div>
	);
};

export default SocialLinks;
