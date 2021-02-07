import React from "react";
import "./BoxCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BoxCard = (props) => {
	const classModifier = (bool) => {
		return bool ? "left" : "right";
	};

	const leftSide = () => {
		return (
			<div className={"col-1 large box-" + classModifier(!props.inverse)}>
				<img
					className={"card " + classModifier(!props.inverse)}
					src="images/placeholder.png"
					alt="thumbnail"
				/>
			</div>
		);
	};

	const rightSide = () => {
		return (
			<div className={"col-1 large box-" + classModifier(props.inverse)}>
				<div className="info-container">
					<h4>{props.name}</h4>
					<p>{props.description}</p>
					<div className="row">
						{props.tech.map((item) => (
							<div key={item} className="col-1 tech">
								<span className="icon-pink">
									<FontAwesomeIcon icon={["far", "check-square"]} />
								</span>{" "}
								{item}
							</div>
						))}
					</div>
				</div>
			</div>
		);
	};

	if (!props.inverse) {
		return (
			<div className="box-card row center">
				{leftSide()}
				{rightSide()}
			</div>
		);
	} else {
		return (
			<div className="box-card row center">
				{rightSide()}
				{leftSide()}
			</div>
		);
	}
};

export default BoxCard;
