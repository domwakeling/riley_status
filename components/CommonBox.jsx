import Indicator from "./Indicator";

const CommonBox = ({ isLoading, classToAdd, message }) => {
    return (
        <div style={{ display: 'flex' }}>
            {!isLoading && <Indicator iColor={classToAdd} />}
            {!isLoading && <>&nbsp;</>}
            <p className={classToAdd}>
                {isLoading ? '...' : message}
            </p>
        </div>
    )
}

export default CommonBox;