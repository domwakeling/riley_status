import useBowls from "../lib/bowls";

const BowlBox = ({}) => {

    let message = '';

    const newDate = new Date();
    const newHour = newDate.getHours();

    if (newHour < 6 || ( newHour >= 12 && newHour < 18 ) ) {
        message = 'no meal due';
    }

    console.log(newHour);

    const { status, isLoading } = useBowls();

    if (!isLoading && message == '') {

        const meal = newHour < 12 ? 'breakfast' : 'dinner';

        const m = status.food.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4}), (\d{1,2})/);
        const oldHour = parseInt(m[4]);
        const oldDay = parseInt(m[1]);
        const oldMonth = parseInt(m[2]) - 1;
        const oldYear = parseInt(m[3]);
        
        // if not today she needs feeding
        if (oldDay != newDate.getDate() || oldMonth != newDate.getMonth() || oldYear != newDate.getFullYear() ) {
            message = `needs ${meal}`;
        } else {
            // it's between 6-12 or 18-24; check if fed in the last 6 hours
            if ((newHour - oldHour) < 6) {
                message = `${meal} has been served`
            } else {
                message = `needs ${meal}`;
            }
        }
    } else if (message == '') {
        message = '...';
    }

    const classToAdd = /^need/.test(message) ? 'overdue' : 'timely';
    console.log(classToAdd);

    return (
        <p className={classToAdd}>{message}</p>
    )
}

export default BowlBox;