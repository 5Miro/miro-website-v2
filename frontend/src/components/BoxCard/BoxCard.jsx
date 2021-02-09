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
					src={
						`../../images/${props.thumbnail}.png` ||
						"../../images/placeholder.png"
					}
					alt="thumbnail"
				/>
			</div>
		);
	};

	const rightSide = () => {
		return (
			<div className={"col-1 large"}>
				<div className={"info-container box-" + classModifier(props.inverse)}>
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
				<a
					className="watch-btn"
					href={props.repository}
					target="_blank"
					rel="noreferrer"
				>
					<FontAwesomeIcon icon={["far", "eye"]} />
				</a>
			</div>
		);
	} else {
		return (
			<div className="box-card row center">
				{rightSide()}
				{leftSide()}
				<a
					className="watch-btn"
					href={props.repository}
					target="_blank"
					rel="noreferrer"
				>
					<FontAwesomeIcon icon={["far", "eye"]} />
				</a>
			</div>
		);
	}
};

export default BoxCard;
