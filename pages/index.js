import Head from 'next/head'
import Card from '../components/card'
import styles from '../styles/Home.module.css'
import Script from 'next/script'
export default function Home() {
    return (
        <>
            <Head>
                <title> Lugano Stats </title>
                <meta charSet="utf-8" />
                <meta name="description" content="Some Stats About Lugano" />
                <meta name="author" content="Leonardo Saurwein" />
                <meta
                    name="keywords"
                    content="lugano, lgva, stats, statistics, 3achain, stablecoin, crypto, luganolivnglab, luganoplanb"
                />
            </Head>
            <Script
                async
                src="https://www.googletagmanager.com/gtag/js?id=G-Q7BX14LH7V"
            ></Script>
            <Script id="script">
                {`window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-Q7BX14LH7V');`}
            </Script>
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
