import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const IncomeExpenses = () => {
  const {transactions} = useContext(GlobalContext);

  const amounts = transactions.map(item => item.amount)
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

  
  return (
    <div>
        <div>
            <h4>Income</h4>
            <p>+$0.00</p>
        </div>
        <div>
            <h4>Expense</h4>
            <p>-$0.00</p>
        </div>
    </div>
  )
}
