import { useDispatch } from "react-redux";
import { IncomeExpenseAction } from "../Slices/IncomeExpense";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoArrowUndoCircle } from "react-icons/io5";
function Add()
{
    const dispatch=useDispatch();
    const navigate=useNavigate()
    const text=useRef(null);
    const amount=useRef(null);
    const [errorMsg,setErrorMsg]=useState(false);
    const handleonsubmit=(e)=>{
        e.preventDefault();
        const text2=text.current.value;
        const amount2=amount.current.value;
        if(text2!='' && amount2!='')
        {
         dispatch(IncomeExpenseAction.add({text:text2,amount:amount2}));
          navigate("/");
        }
        else{
            setErrorMsg(!errorMsg);
        }
    }
        return(
            <>
             <IoArrowUndoCircle style={{fontSize:'50px',marginLeft:'-400px',Color:' #006769'}}onClick={()=>navigate("/")}/>   
               <h2 style={{color:'#006769',marginTop:'50px'}}>Add new Transition</h2>
               <p style={{color:'gray'}}>+ for Income and - for expense</p>
               {errorMsg && <p style={{color:'red'}}>transition can not be empty!</p>}
                <form className="form" onSubmit={handleonsubmit}>
                    <input type="number" placeholder="Enter amount of transition.."  ref={amount}/>
                    <input type="text" placeholder="Enter name of transition.. "  ref={text}/><br />
                    <input type="submit" className="submit" />
                </form>
            </>
        )
}
export default Add;