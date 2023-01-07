const Indicator = ({iColor}) => {


    const iStyle = {
        backgroundColor: iColor == 'overdue' ? '#f55' : '#5f5',
        width: '0.9rem',
        height: '0.9rem',
        borderRadius: '50%',
        border: iColor == 'overdue' ? '1px solid #c00' : '1px solid #0c0',
        marginRight: '0.25rem',
        boxShadow: iColor == 'overdue' ? 'rgba(0, 0, 0, 0.2) 0 0 2px 1px, inset #f00 0 0 4px 2px' : 'rgba(0, 0, 0, 0.2) 0 0 2px 1px, inset #0e0 0 0 4px 2px',
        alignSelf: 'center'
    }

    return (
        <div style={iStyle} />
    )
}

export default Indicator;