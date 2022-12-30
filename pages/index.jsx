import Head from 'next/head';
import Image from 'next/image';
import MainGrid from '../components/maingrid';
import rileyPic from '../public/riley_cartoon_200px.png';

const HomePage = () => {

    return (
        <div>
            <Head>
                <title>Riley status</title>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <div id="container">
                <Image
                    src={rileyPic}
                    alt="Cartoon image of Riley the cat"
                    className='riley_image'
                    priority
                />
                <h1 id="pageheader">Riley status</h1>
                <div className="clearfloat" />
                <MainGrid />
            </div>
        </div>
    )
}

export default HomePage;
