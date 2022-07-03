import { getDayTransactionCount } from '../util/avrege'
import { Row, Col, Carousel } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import ChartsPage from '../components/chart'
import Speed from '../components/speed'
import Buttons from '../components/buttons'
import ImageLink from '../components/ImageLink'
import Image from 'next/image'

import styles from '../styles/lvgastats.module.css'

export async function getStaticProps(context) {
    let lastMonth
    await fetch(
        'https://raw.githubusercontent.com/Sau1707/LuganoCoinDataset/main/data/last/month.json'
    )
        .then((el) => el.json())
        .then((el) => getDayTransactionCount(el))
        .then((el) => (lastMonth = el))

    let last3Month
    await fetch(
        'https://raw.githubusercontent.com/Sau1707/LuganoCoinDataset/main/data/last/3month.json'
    )
        .then((el) => el.json())
        .then((el) => getDayTransactionCount(el))
        .then((el) => (last3Month = el))

    let last6Month
    await fetch(
        'https://raw.githubusercontent.com/Sau1707/LuganoCoinDataset/main/data/last/6month.json'
    )
        .then((el) => el.json())
        .then((el) => getDayTransactionCount(el))
        .then((el) => (last6Month = el))

    let lastyear
    await fetch(
        'https://raw.githubusercontent.com/Sau1707/LuganoCoinDataset/main/data/last/year.json'
    )
        .then((el) => el.json())
        .then((el) => getDayTransactionCount(el))
        .then((el) => (lastyear = el))
    // will be passed to the page component as props
    return {
        props: {
            lastMonth: lastMonth,
            last3Month: last3Month,
            last6Month: last6Month,
            lastyear: lastyear,
        },
    }
}

export default function Lvgastats(props) {
    const [butt, setButt] = useState(0)
    const [plotData, setPlotData] = useState(props.lastMonth.all)

    useEffect(() => {
        if (butt == 0) setPlotData(props.lastMonth.all)
        if (butt == 1) setPlotData(props.last3Month.all)
        if (butt == 2) setPlotData(props.last6Month.all)
        if (butt == 3) setPlotData(props.lastyear.all)
    }, [butt])

    return (
        <>
            <Row>
                <Col className={styles.title}>
                    <h1> LVGA points statistics </h1>
                    <p className={styles.p}>
                        LVGA coin is the first project created on the 3Achain
                        blockchain. It is a stablecoin with a fixed value of
                        100:1 chf. <br /> I&apos;ve created the following graphs
                        to visualise the progress of the project, feel free to
                        play with them. <br />
                        The graphs update automatically at 1 AM (Lugano time
                        zone) with the previous day&apos;s data
                    </p>
                </Col>
            </Row>
            <hr className={styles.hr} />
            <h4 className={styles.links}> Some useful links</h4>
            <Row style={{ justifyContent: 'center' }} xs="auto">
                <ImageLink
                    href="https://my.lugano.ch/it/lvga-points"
                    src="lvga-coin.png"
                    alt="Lvga Coin"
                    desc="LVGA Info"
                />
                <ImageLink
                    href="https://www.3achain.org/"
                    src="3achain.png"
                    alt="3Achain"
                    desc="3AChain Info"
                />
                <ImageLink
                    href="https://explorer.3achain.org/"
                    src="3achain.png"
                    alt="3Achain"
                    desc="3AChain Explorer"
                />
                <ImageLink
                    href="https://luganolivinglab.ch/it/"
                    src="livingLab.png"
                    alt="Lugano Living Lab"
                    desc="Lugano Living Lab"
                />
                <ImageLink
                    href="https://github.com/Sau1707/LuganoCoinDataset"
                    src="github.png"
                    alt="Github Logo"
                    desc="Dataset"
                />
            </Row>
            <hr className={styles.hr} />
            <Carousel interval={null}>
                <Carousel.Item>
                    <Row className={styles.box}>
                        <h3> Total transactions, daily view </h3>
                        <div className={styles.charts}>
                            <ChartsPage data={plotData} />
                        </div>
                    </Row>
                    <Carousel.Caption>
                        <Buttons
                            onSelect={(i) => {
                                setButt(i)
                            }}
                            names={[
                                'last Month',
                                'Last 3 month',
                                'Last 6 month',
                                'Last year',
                                /*'All Time',*/
                            ]}
                        />
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}
