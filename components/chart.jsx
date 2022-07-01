import React from "react";
import useWindowSize from "../customHook/useWindowSize";
import { Line } from "react-chartjs-2";

function Graph(props) {
	const size = useWindowSize()
	const data = {
		labels: Object.keys(props.data),
		datasets: [
			{
				data: Object.values(props.data),
				backgroundColor: "rgba(255, 99, 132, 0.2)",
				borderColor: "rgba(255, 99, 132, 1)",
				borderWidth: 0,
				pointRadius: 0,
				pointHitRadius: size.width / 30,
			},
		],
	};

	const options = {
		legend: {
			display: false,
		},
	};

	return (
		<Line data={data} options={options} redraw/>
	);
}

//  width={size.width*2*0.7} height={size.height*0.7}  updateMode={"resize"}
export default Graph;
