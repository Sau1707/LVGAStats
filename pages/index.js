import Head from 'next/head'
import Card from '../components/card'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <>
            <Head>
                <title> Titolo </title>
            </Head>
            <div className={styles.cardBox}>
                <Card
                    image="lvga-coin.png"
                    title="LVGA POINTS - STATS"
                    desc="Some statistics about Lugano stablecoin"
                    root="/lvgastats"
                />
            </div>
        </>
    )
}
