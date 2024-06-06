import Balance from "./Balance";
import History from "./History";
import IncomeExpense from "./IncomeExpense";
function BalanceAndHistory() {
    return (
      <div>
        <Balance />
        <IncomeExpense></IncomeExpense>
        <History />
      </div>
    );
  }
  export default BalanceAndHistory;