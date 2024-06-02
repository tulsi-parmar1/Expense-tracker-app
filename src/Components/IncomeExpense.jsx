
import { useSelector } from "react-redux";

function IncomeExpense()
{
    const income=useSelector(state=>state.IncomeExpense.income);
    const expense=useSelector(state=>state.IncomeExpense.expense);
    return(
        <>
        <div className="incomeexpense">
        <p >Income<br /><span className="income">{income}</span></p>
        <p>Expense <br /><span className="expense">{expense}</span></p>
        </div>
        </>
    )
}
export default IncomeExpense;