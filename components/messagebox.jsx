import Indicator from "./indicator";

const MessageBox = ({ isLoading, data, date, threshold }) => {

    let oldDate = null;
    const newDate = new Date();
    let daysAgo = 0
    let message = "";

    if (!isLoading) {
        const m = data[date].match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})/);
        oldDate = new Date();
        oldDate.setDate(m[1]);
        oldDate.setMonth(parseInt(m[2] - 1));
        oldDate.setFullYear(m[3]);
        oldDate.setHours(0);
        oldDate.setMinutes(0);
        oldDate.setSeconds(0);

        newDate.setHours(0);
        newDate.setMinutes(0);
        newDate.setSeconds(0);
    }

    if (oldDate) {
        daysAgo = Math.floor( (newDate.getTime() - oldDate.getTime() + 60 * 60 * 1000) / ( 24 * 60 * 60 * 1000) );
        if (daysAgo == 0) {
            message = "today";
        } else if (daysAgo <= 10) {
            message = `${daysAgo} day${daysAgo > 1 ? 's' : ''} ago`;
        } else if (daysAgo <= 35) {
            const weeksAgo = Math.floor(daysAgo / 7);
            message = `${weeksAgo} week${weeksAgo > 1 ? 's' : ''} ago`;
        } else {
            const monthsAgo = Math.floor(daysAgo / 30);
            message = `${monthsAgo} month${monthsAgo > 1 ? 's' : ''} ago`;
        }
    } else {
        message = '...';
    }

    const classToAdd = (daysAgo >= threshold ? 'overdue' : 'timely')

    return (
        <div style={{display: 'flex'}}>
            <Indicator iColor={classToAdd} />
            <p className={classToAdd}>
                {isLoading ? '...' : message}
            </p>
        </div>
    )
}

export default MessageBox;