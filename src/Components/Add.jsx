import { useDispatch } from "react-redux";
import { IncomeExpenseAction } from "../Slices/IncomeExpense";
import { useRef } from "react";

function Add()
{
    const dispatch=useDispatch();
    const text=useRef(null);
    const amount=useRef(null);
    const handleonsubmit=(e)=>{
        e.preventDefault();
        const text2=text.current.value;
        const amount2=amount.current.value
         dispatch(IncomeExpenseAction.add({text:text2,amount:amount2}));
        // text.current.value=" ";
        // amount.current.value=" ";
    }
        return(
            <>
               <h2 style={{color:'#006769'}}>Add new Transition</h2>
               <p style={{color:'gray'}}>+ for Income and - for expense</p>
                <form className="form" onSubmit={handleonsubmit}>
                    <input type="number" placeholder="Enter amount of transition.."  ref={amount}/>
                    <input type="text" placeholder="Enter name of transition.. "  ref={text}/><br />
                    <input type="submit" className="submit" />
                </form>
            </>
        )
}
export default Add;