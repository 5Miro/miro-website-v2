import React from "react";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LoadingBox = () => {
	return (
		<div className="loading">
			<FontAwesomeIcon icon={faCircleNotch} spin />
		</div>
	);
};

export default LoadingBox;
