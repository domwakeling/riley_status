import { mutate } from 'swr';
import useBowls from '../lib/bowls';
import useLitters from '../lib/litters';
import useTreatments from '../lib/treatments';

const MainGrid = () => {

    const { status: bowlsStatus, isLoading: bowlsIsLoading } = useBowls();
    const { status: littersStatus, isLoading: littersIsLoading } = useLitters();
    const { status: treatmentsStatus, isLoading: treatmentsIsLoading } = useTreatments();

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
            // deal with error
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
            <p>
                {bowlsIsLoading ? '...' : 'loaded'}
            </p>
            <button>update</button>
            <p>Downstairs Water</p>
            <p>
                {bowlsIsLoading ? '...' : 'loaded'}
            </p>
            <button>update</button>
            <p>Upstairs Water</p>
            <p>
                {bowlsIsLoading ? '...' : 'loaded'}
            </p>
            <button>update</button>
            <h2 className="head-grid">Litters</h2>
            <p className="head-grid">Downstairs Litter</p>
            <p> - scooped</p>
            <p>
                {littersIsLoading ? '...' : 'loaded'}
            </p>
            <button>update</button>
            <p> - changed</p>
            <p>
                {littersIsLoading ? '...' : 'loaded'}
            </p>
            <button>update</button>
            <p className="head-grid">Upstairs Litter</p>
            <p> - scooped</p>
            <p>
                {littersIsLoading ? '...' : 'loaded'}
            </p>
            <button>update</button>
            <p> - changed</p>
            <p>
                {littersIsLoading ? '...' : 'loaded'}
            </p>
            <button>update</button>
            <h2 className="head-grid">Treatments</h2>
            <p>Flea</p>
            <p>
                {treatmentsIsLoading ? '...' : treatmentsStatus.fleas }
            </p>
            <button onClick={updateFleas}>update</button>
            <p>Worms</p>
            <p>
                {treatmentsIsLoading ? '...' : treatmentsStatus.worms }
            </p>
            <button onClick={updateWorms}>update</button>
        </div>
    )
}

export default MainGrid;