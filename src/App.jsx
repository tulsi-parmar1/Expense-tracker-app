import Balance from "./Components/Balance";
import IncomeExpense from "./Components/IncomeExpense";
import History from "./Components/History";
import Add from "./Components/Add";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
           <center>
           <h1 style={{color:'#006769'}}>Expense Tracker</h1>
           <hr />
           <Outlet></Outlet>
          </center>
    </>
  )
}

export default App;
