import BowlBox from './bowlbox';
import MessageBox from './messagebox';
import { mutate } from 'swr';
import useBowls from '../lib/bowls';
import useLitters from '../lib/litters';
import useTreatments from '../lib/treatments';

const MainGrid = () => {

    const { status: bowlsStatus, isLoading: bowlsIsLoading } = useBowls();
    const { status: littersStatus, isLoading: littersIsLoading } = useLitters();
    const { status: treatmentsStatus, isLoading: treatmentsIsLoading } = useTreatments();

    const updateBowls = async (changed) => {
        try {
            const res = await fetch('/api/bowls', {
                method: 'PATCH',
                body: JSON.stringify({
                    changed
                })
            });
            mutate('/api/bowls')
        } catch (err) {
            console.warn(err)
        }
    }

    const updateFood = (e) => {
        e.preventDefault();
        updateBowls('food');
    }

    const updateWaterUp = (e) => {
        e.preventDefault();
        updateBowls('up-change');
    }

    const updateWaterDown = (e) => {
        e.preventDefault();
        updateBowls('down-change');
    }

    const updateLitters = async (cleaned) => {
        try {
            const res = await fetch('/api/litters', {
                method: 'PATCH',
                body: JSON.stringify({
                    cleaned
                })
            });
            mutate('/api/litters')
        } catch (err) {
            console.warn(err)
        }
    }

    const updateScoopUp = (e) => {
        e.preventDefault();
        updateLitters('up-scoop');
    }

    const updateScoopDown = (e) => {
        e.preventDefault();
        updateLitters('down-scoop');
    }

    const updateCleanUp = (e) => {
        e.preventDefault();
        updateLitters('up-change');
    }

    const updateCleanDown = (e) => {
        e.preventDefault();
        updateLitters('down-change');
    }

    const updateTreatments = async (treatment) => {
        try {
            const res = await fetch('/api/treatments', {
                method: 'PATCH',
                body: JSON.stringify({
                    treatment
                })
            });
            mutate('/api/treatments')
        } catch (err) {
            console.warn(err)
        }
    }

    const updateWorms = (e) => {
        e.preventDefault();
        updateTreatments('worms');
    }

    const updateFleas = (e) => {
        e.preventDefault();
        updateTreatments('fleas');
    }

    return (
        <div id="content-grid">
            <h2 className="head-grid">Food &amp; Water</h2>

            <p>Food</p>
            <BowlBox />
            <button onClick={updateFood}>update</button>

            <p>Downstairs Water</p>
            <MessageBox isLoading={bowlsIsLoading} data={bowlsStatus} date='down-change' threshold={2} />
            <button onClick={updateWaterDown}>update</button>

            <p>Upstairs Water</p>
            <MessageBox isLoading={bowlsIsLoading} data={bowlsStatus} date='up-change' threshold={2}/>
            <button onClick={updateWaterUp}>update</button>

            <h2 className="head-grid">Litters</h2>

            <p className="head-grid">Downstairs Litter</p>

            <p> - scooped</p>
            <MessageBox isLoading={littersIsLoading} data={littersStatus} date='down-scoop' threshold={2} />
            <button onClick={updateScoopDown}>update</button>

            <p> - changed</p>
            <MessageBox isLoading={littersIsLoading} data={littersStatus} date='down-change' threshold={35} />
            <button onClick={updateCleanDown}>update</button>

            <p className="head-grid">Upstairs Litter</p>

            <p> - scooped</p>
            <MessageBox isLoading={littersIsLoading} data={littersStatus} date='up-scoop' threshold={2} />
            <button onClick={updateScoopUp}>update</button>

            <p> - changed</p>
            <MessageBox isLoading={littersIsLoading} data={littersStatus} date='up-change' threshold={28} />
            <button onClick={updateCleanUp}>update</button>

            <h2 className="head-grid">Treatments</h2>

            <p>Flea</p>
            <MessageBox isLoading={treatmentsIsLoading} data={treatmentsStatus} date='fleas' threshold={30} />
            <button onClick={updateFleas}>update</button>

            <p>Worms</p>
            <MessageBox isLoading={treatmentsIsLoading} data={treatmentsStatus} date='worms' threshold={180} />
            <button onClick={updateWorms}>update</button>
        </div>
    )
}

export default MainGrid;