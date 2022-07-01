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
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Row } from "react-bootstrap";
import styles from "../styles/lvgastats.module.css";

/*
    Plot del grafico
*/
import ChartsPage from "../components/chart";
import Speed from "../components/speed";

export default function lvgastats(props) {
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
					<ButtonGroup
						type='checkbox'
						size='sm'
						aria-label='First group'
						className={styles.buttonGroup}
					>
						<Button className={styles.button} variant='secondary'>
							Last month
						</Button>
						<Button className={styles.button} variant='secondary'>
							Last 3 month
						</Button>
						<Button className={styles.button} variant='secondary'>
							Last 6 month
						</Button>
						<Button className={styles.button} variant='secondary'>
							Last Year
						</Button>
						<Button className={styles.button} variant='secondary'>
							All Time
						</Button>
					</ButtonGroup>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item interval={100000}>
				<Row className={styles.box}>
					<div className={styles.charts}>
						<ChartsPage data={props.lastMonth.all}/>
					</div>
				</Row>
				<Carousel.Caption>
					<h3>Daily transactions of the last month</h3>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}
