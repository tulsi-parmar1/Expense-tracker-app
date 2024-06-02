import { useDispatch } from "react-redux";
import { IncomeExpenseAction } from "../Slices/IncomeExpense";
function HistoryList({history})
{
    const dispatch=useDispatch();
    const handleremove=(index)=>{
            dispatch(IncomeExpenseAction.remove(index));
      }
        return(
            <>
                   <ul className="ul">
                   {history.map((item, index) => (
                    <li key={index}>
                        {item.text}<span  className="space"></span>
                        {item.amount > 0 && '+'}{item.amount}
                        <button onClick={()=>handleremove(index)} className="remove">Remove</button>    
                    </li>
                ))}
                    </ul>
            </>
        )
}
export default HistoryList;