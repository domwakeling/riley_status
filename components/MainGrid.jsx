import BowlBox from './BowlBox';
import MessageBox from './MessageBox';
import { mutate } from 'swr';
import useCatData from '../lib/getData';

const MainGrid = () => {

    const { status, isLoading } = useCatData();

    const updateData = async (changed) => {
        try {
            const res = await fetch('/api/update', {
                method: 'POST',
                body: JSON.stringify({
                    changed
                })
            });
            console.log(res);
            mutate('/api/get')
        } catch (err) {
            console.warn(err)
        }
    }

    const updateFood = (e) => {
        e.preventDefault();
        updateData('food');
    }

    const updateWaterUp = (e) => {
        e.preventDefault();
        updateData('upWaterChange');
    }

    const updateWaterDown = (e) => {
        e.preventDefault();
        updateData('downWaterChange');
    }

    const updateScoopUp = (e) => {
        e.preventDefault();
        updateData('upScoop');
    }

    const updateScoopDown = (e) => {
        e.preventDefault();
        updateData('downScoop');
    }

    const updateCleanUp = (e) => {
        e.preventDefault();
        updateData('upLitterChange');
    }

    const updateCleanDown = (e) => {
        e.preventDefault();
        updateData('downLitterChange');
    }

    const updateWorms = (e) => {
        e.preventDefault();
        updateData('worms');
    }

    const updateFleas = (e) => {
        e.preventDefault();
        updateData('fleas');
    }

    return (
        <div id="content-grid">
            <h2 className="head-grid">Food &amp; Water</h2>

            <p>Food</p>
            <BowlBox />
            <button onClick={updateFood}>update</button>

            <p>Downstairs Water</p>
            <MessageBox isLoading={isLoading} data={status} date='downWaterChange' threshold={2} />
            <button onClick={updateWaterDown}>update</button>

            <p>Upstairs Water</p>
            <MessageBox isLoading={isLoading} data={status} date='upWaterChange' threshold={2}/>
            <button onClick={updateWaterUp}>update</button>

            <h2 className="head-grid">Litters</h2>

            <p className="head-grid">Downstairs Litter</p>

            <p> - scooped</p>
            <MessageBox isLoading={isLoading} data={status} date='downScoop' threshold={2} />
            <button onClick={updateScoopDown}>update</button>

            <p> - changed</p>
            <MessageBox isLoading={isLoading} data={status} date='downLitterChange' threshold={35} />
            <button onClick={updateCleanDown}>update</button>

            <p className="head-grid">Upstairs Litter</p>

            <p> - scooped</p>
            <MessageBox isLoading={isLoading} data={status} date='upScoop' threshold={2} />
            <button onClick={updateScoopUp}>update</button>

            <p> - changed</p>
            <MessageBox isLoading={isLoading} data={status} date='upLitterChange' threshold={28} />
            <button onClick={updateCleanUp}>update</button>

            <h2 className="head-grid">Treatments</h2>

            <p>Flea</p>
            <MessageBox isLoading={isLoading} data={status} date='fleas' threshold={30} />
            <button onClick={updateFleas}>update</button>

            <p>Worms</p>
            <MessageBox isLoading={isLoading} data={status} date='worms' threshold={180} />
            <button onClick={updateWorms}>update</button>
        </div>
    )
}

export default MainGrid;