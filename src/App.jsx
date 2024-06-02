import Balance from "./Components/Balance";
import IncomeExpense from "./Components/IncomeExpense";
import History from "./Components/History";
import Add from "./Components/Add";
function App() {
  return (
    <>
           <center>
           <h1 style={{color:'#006769'}}>Expense Tracker</h1>
           <hr />
           <Balance></Balance>
           <IncomeExpense></IncomeExpense>
           <History></History>
           <Add></Add>
          </center>
    </>
  )
}

export default App;
