import Image from 'next/image';
import rileyPic from '../public/riley_cartoon_200px.png';
import useStatus from '../lib/status';

const HomePage = () => {

    const { status, isLoading } = useStatus();

    return (
        <div id="container">
            <Image
                src={rileyPic}
                alt="Cartoon image of Riley the cat"
                className='riley_image'
                priority
            />
            <h1 id="pageheader">Riley status</h1>
            <div className="clearfloat" />
            <div id="content-grid">
                <h2 className="head-grid">Food &amp; Water</h2>
                <p>Food</p>
                <p>
                    {isLoading ? '...' : 'loaded'}
                </p>
                <button>update</button>
                <p>Downstairs Water</p>
                <p>
                    {isLoading ? '...' : 'loaded'}
                </p>
                <button>update</button>
                <p>Upstairs Water</p>
                <p>
                    {isLoading ? '...' : 'loaded'}
                </p>
                <button>update</button>
                <h2 className="head-grid">Litters</h2>
                <p className="head-grid">Downstairs Litter</p>
                <p> - scooped</p>
                <p>
                    {isLoading ? '...' : 'loaded'}
                </p>
                <button>update</button>
                <p> - changed</p>
                <p>
                    {isLoading ? '...' : 'loaded'}
                </p>
                <button>update</button>
                <p className="head-grid">Upstairs Litter</p>
                <p> - scooped</p>
                <p>
                    {isLoading ? '...' : 'loaded'}
                </p>
                <button>update</button>
                <p> - changed</p>
                <p>
                    {isLoading ? '...' : 'loaded'}
                </p>
                <button>update</button>
                <h2 className="head-grid">Treatments</h2>
                <p>Flea</p>
                <p>
                    {isLoading ? '...' : 'loaded'}
                </p>
                <button>update</button>
                <p>Worms</p>
                <p>
                    {isLoading ? '...' : 'loaded'}
                </p>
                <button>update</button>
            </div>
        </div>
    )
}

export default HomePage;
