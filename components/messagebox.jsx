const MessageBox = ({ isLoading, date }) => {
    return (
        <p>
            {isLoading ? '...' : date}
        </p>
    )
}

export default MessageBox;