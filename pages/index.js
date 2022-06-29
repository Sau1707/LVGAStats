import Head from "next/head";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import styles from "../styles/Home.module.css";
import { Row, Col } from "react-bootstrap";

export default function Home() {
	return (
		<>
			<Head>
				<title> Titolo </title>
			</Head>
			<div className={styles.cardBox}>
				<Card className={styles.card}>
					<Card.Img
						className={styles.image}
						variant='top'
						src='/lvga-coin.png'
					/>
					<Card.Body>
						<Card.Title> LVGA POINTS - STATS</Card.Title>
						<Card.Text>
							Some statistics on lugano stablecoin
						</Card.Text>
						<Row>
							<Col>
								<Button
									className={styles.button}
									size='lg'
									variant='warning'
									href='/lvgastats'
								>
									Statistics
								</Button>
							</Col>
							<Col>
								<Button
									className={styles.button}
									size='lg'
									variant='warning'
									href='https://my.lugano.ch/it/lvga-points'
									target='_blank'
								>
									Webpage
								</Button>
							</Col>
						</Row>
					</Card.Body>
				</Card>
			</div>
		</>
	);
}
