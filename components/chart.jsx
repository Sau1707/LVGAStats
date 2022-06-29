import React from "react";
import { Line } from "react-chartjs-2";

function Graph(props) {
	const data = {
		datasets: [
			{
				label: "# of Votes",
				data: [12, 19, 3, 5, 2, 3],
				backgroundColor: ["rgba(255, 99, 132, 0.2)"],
				borderColor: ["rgba(255, 99, 132, 1)"],
				borderWidth: 1,
			},
		],
	};

	const options = {
		legend: {
			display: false,
		},
	};

	return (
		<div>
			<h2>Bar Example (custom size)</h2>
			<Line data={data} width={400} height={200} options={options} />
		</div>
	);
}

export default Graph;
