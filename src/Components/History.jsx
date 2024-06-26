import HistoryList from "./HistoryList";
import {useSelector} from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {Link} from "react-router-dom";
import '../App.css';
function History()
{
      const history=useSelector(store=>store.IncomeExpense.history);
      const [searchQuery, setSearchQuery] = useState(null);
      const dispatch=useDispatch();
      const handleSearchItem = (e) => {
        const search = e.target.value;
        setSearchQuery(search);
    };

    const filteredHistory = searchQuery
        ? history.filter((item) =>
            item.text.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : history;

        return(
            <>
              
               <div className="history">
               <h1 style={{color:'#006769'}}>History</h1>
               <div style={{display:'flex',alignItem:'center',justifyContent:'center',gap:'10px'}}>
               <input type="text" style={{width:'250px',marginBottom:'-10px'}} placeholder="Search item here..."  onChange={(e)=>handleSearchItem(e)}/>
               <button className="add"><Link to="/add">Add</Link></button>
               </div> 
               <div className="list">
               <HistoryList history={filteredHistory} />
               </div>  
               </div>
            </>
        )
}
export default History;