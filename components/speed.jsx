import dynamic from "next/dynamic";
const ReactSpeedometer = dynamic(import("react-d3-speedometer"), {
	ssr: false,
});

function Speed(props) {
	return (
		<ReactSpeedometer
			value={props.avrege}
			maxSegmentLabels={5}
			segments={1000}
		/>
	);
}

export default Speed;
