import { useEffect, useState } from "react";
import BoxCard from "../BoxCard/BoxCard";
import Axios from "axios";
import LoadingBox from "../LoadingBox/LoadingBox";

const BoxCardCarrousel = () => {
	const [workData, setWorkData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	useEffect(() => {
		setLoading(true);
		Axios.get("/api/projects/")
			.then((res) => {
				setLoading(false);
				setWorkData(res.data);
			})
			.catch((err) => {
				setError(err.messsage);
			});
	}, []);

	return (
		<div>
			{loading ? (
				<LoadingBox></LoadingBox>
			) : error ? (
				<div>{error}</div>
			) : (
				workData.map((work, index) => (
					<BoxCard
						key={work._id}
						name={work.name}
						description={work.description}
						tech={work.tech}
						repository={work.repository}
						thumbnail={work.thumbnail}
						inverse={index % 2 !== 0}
					/>
				))
			)}
		</div>
	);
};

export default BoxCardCarrousel;
