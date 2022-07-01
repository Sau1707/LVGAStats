import { getDayTransactionCount } from "../util/avrege";

/*
    import testing dataset
*/
import lastmonth from "../data/month.json";
export async function getStaticProps(context) {
	/*const lastMonth = await fetch(
		"https://raw.githubusercontent.com/Sau1707/LuganoCoinDataset/main/data/last/month.json"
	);
	const lastMonthJson = await lastMonth.json();
    */
	const lastMonth = getDayTransactionCount(lastmonth);
	return {
		props: {
			lastMonth: lastMonth,
		}, // will be passed to the page component as props
	};
}

import Carousel from "react-bootstrap/Carousel";
import { Row } from "react-bootstrap";
import styles from "../styles/lvgastats.module.css";

/*
    Plot del grafico
*/
import ChartsPage from "../components/chart";
import Speed from "../components/speed";
import Buttons from "../components/buttons";
import { useState } from "react";

export default function Lvgastats(props) {

    const [butt, setButt] = useState(0);

	return (
		<Carousel>
			<Carousel.Item interval={100000}>
				<Row className={styles.box}>
					<div className={styles.speed}>
						<Speed avrege={props.lastMonth.avrege} />
					</div>
				</Row>
				<Carousel.Caption>
					<h3>Avrege day transactions</h3>
					<p>
						Calculated with the data of the last month, click{" "}
						<a
							style={{ color: "white" }}
							href='https://github.com/Sau1707/LuganoCoinDataset/tree/main/data/last'
						>
							here
						</a>{" "}
						to see the dataset
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item interval={100000}>
				<Row className={styles.box}>
					<div className={styles.charts}>
						<ChartsPage data={props.lastMonth.all}/>
					</div>
				</Row>
				<Carousel.Caption>
                    <Buttons onSelect={(i) => {setButt(i)}} names={["last Month", "Last 3 month", "Last 6 month", "Last year", "All Time"]}/>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}
