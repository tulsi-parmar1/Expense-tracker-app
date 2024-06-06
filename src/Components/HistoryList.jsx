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
                        <span>{item.text}</span>
                        <span>{item.amount > 0 && '+'}{item.amount}</span>
                        <span><button onClick={()=>handleremove(index)} className="remove">Remove</button></span>
                    </li>
                ))}
                    </ul>
            </>
        )
}
export default HistoryList;