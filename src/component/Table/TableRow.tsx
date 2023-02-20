
interface rowArrInterface {
    amount: number,
    id: number,
    percent?: boolean
}

interface HighlightArrType{
    amount: number,
    id: number
}

interface PropsInterface {
    rowArr: rowArrInterface[],
    increaseValue(id: number, keyRow: number, amount: number): void
    highlightItem(id: number, keyRow: number, amount: number): void
    highlightArr: HighlightArrType[],
    highlightCount: number,
    highlightReset(): void
}


const TableRow: React.FC<PropsInterface> = ({rowArr, increaseValue, highlightItem, highlightArr, highlightCount, highlightReset}) => {
    const cellTableHighlight = (id: number): rowArrInterface | undefined => {
        return highlightArr.find((el: HighlightArrType) => {
            console.log(el);
            
            return el.id === id
        })
    };

    const getCss = (item:rowArrInterface) =>{
      if(item.percent){
          return {
              background: `linear-gradient(to left, #d3d3d3 ${100 - item.amount}%, #f00 ${100 - item.amount}% ${item.amount}%`
          }
      }
    };

    return (
        <>
            {rowArr.map((item: rowArrInterface) => {
                return <td className={cellTableHighlight(item.id) ? 'act' : null + '' + item.percent && 'percent'}
                           style={getCss(item)}
                           onMouseEnter={() => highlightItem(item.amount, item.id, highlightCount)}
                           onMouseLeave={highlightReset}
                           onClick={() => increaseValue(item.id, item.id, item.amount)}
                           key={item.id}>{item.percent ? item.amount + '%' : item.amount}</td>

            })}
        </>
    );
};

export default TableRow