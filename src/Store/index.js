import IncomeExpenseSlice from "../Slices/IncomeExpense";
import {configureStore} from "@reduxjs/toolkit";


const store=configureStore({
    reducer:{
    IncomeExpense :IncomeExpenseSlice.reducer,}
})
export default store;