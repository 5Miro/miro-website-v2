const ShapeTransition = (props) => {
	return (
		<div
			style={{
				height: "150px",
				overflow: "hidden",
			}}
		>
			<svg
				viewBox="0 0 500 150"
				preserveAspectRatio="none"
				style={{ height: "100%", width: "100%" }}
			>
				<path
					d="M0.00,49.98 C181.43,135.69 303.33,138.64 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
					style={{ stroke: "none", fill: props.color }}
				></path>
			</svg>
		</div>
	);
};

export default ShapeTransition;
