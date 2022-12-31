const MessageBox = ({ isLoading, data, date, threshold }) => {

    return (
        <p>
            {isLoading ? '...' : data[date]}
        </p>
    )
}

export default MessageBox;