const TableRow = ({ rowArr, increaseValue, highlightItem, highlightArr, highlightCount, highlightReset}) => {
    const cellTableHighlight = (id) => {
        return highlightArr.find((el) => el.id === id)
    }

    return (
        <>
            {rowArr.map(item => {
                return <td className={cellTableHighlight(item.id) ? 'act' : null + '' + item.percent && 'percent'}
                           style={{
                               background: item.percent
                                   && `linear-gradient(to left, #d3d3d3 ${100 - item.amount}%, #f00 ${100 - item.amount}% ${item.amount}%)`

                           }}
                           onMouseEnter={() => highlightItem(item.amount, item.id, highlightCount)}
                           onMouseLeave={highlightReset}
                           onClick={() => increaseValue(item.id, item.id, item.amount)}
                           key={item.id}>{item.percent ? item.amount + '%' : item.amount}</td>

            })}
        </>
    );
};

export default TableRow