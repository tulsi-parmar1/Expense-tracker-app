import { FaIndianRupeeSign } from "react-icons/fa6";
import {useSelector} from "react-redux";
function Balance()
{
    const balance=useSelector(store=>store.IncomeExpense.balance);
    return(
        <>
        <p>Your Balance <br />{balance}<FaIndianRupeeSign /></p>
        </>
    )
}
export default Balance;