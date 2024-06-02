import HistoryList from "./HistoryList";
import {useSelector} from "react-redux";
import { useRef } from "react";
import { IncomeExpenseAction } from "../Slices/IncomeExpense";
import { useDispatch } from "react-redux";
import { useState } from "react";
function History()
{
      const history=useSelector(store=>store.IncomeExpense.history);
      const searchItem=useRef(null);
      const [searchQuery, setSearchQuery] = useState('');
      const dispatch=useDispatch();
    

      const handleSearchItem=(e)=>{
       const searchvalue= e.target.value
      history.map((item)=>{
        if(item.text.startsWith(searchvalue))
          {
            dispatch(IncomeExpenseAction.search(e.target.value));
          }
      })
      }
    
  
        return(
            <>
               <div className="history">
               <h1 style={{color:'#006769'}}>History</h1>
               <input type="text" style={{width:'300px',marginBottom:'-10px'}} placeholder="Search item here..." ref={searchItem} onChange={(e)=>handleSearchItem(e)}/>
               <div className="list">
               {searchQuery && (
                    <button onClick={handleClearSearch}>Clear Search</button>
                )}
               <HistoryList history={history}></HistoryList> 
               </div>  
               </div>
            </>
        )
}
export default History;