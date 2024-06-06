import {createSlice} from "@reduxjs/toolkit";
const IncomeExpenseSlice=createSlice({
        name:'IncomeExpense',
        initialState:{
            balance:50000,
            income:50000,
            expense:0,
            history: [
                {text:'salary',amount:50000},
            ],
        },
        reducers:{
            add:(state,action)=>{
               const {text,amount}=action.payload;
               state.history.push({text:text,amount:amount})
                   if(amount>0)
                    {
                        state.income+=parseInt(amount);
                    }
                    else{
                       state.expense+=parseInt(amount);
                    }
                    state.balance += parseInt(amount);
                   if(state.balance<0)
                   {
                    state.balance=0;
                    alert(`you lose ${amount}rs`)
                    return;
                   }
            },
            remove:(state,action)=>{
                 const index=action.payload;
                 const {amount}=state.history[index];
                 state.history.pop(index);
                 state.balance-=amount;
                 if(state.balance<0)
                    {
                        state.balance=0;
                        alert(`you lose ${amount}rs`)
                        return;
                    }
                 if(amount>0)
                 {
                    state.income-=amount;
                 }
                else
                   {
                    state.expense-=amount;
                    } 
                    if(state.income<0)
                    {
                        state.income=0;
                    }            
            },
        }
    }
)      
export default IncomeExpenseSlice;
export const IncomeExpenseAction=IncomeExpenseSlice.actions;