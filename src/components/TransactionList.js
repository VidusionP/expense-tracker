import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const TransactionList = () => {
    const {transactions} = useContext(GlobalContext)

  return (
    <div>
        <h3>Histroy</h3>
        <ul>
            {transactions.map(item => {
                return (
                <li>
                    {item.text} <span>-$400</span>
                    <button>x</button>
                </li>   
                )
            })}
            
        </ul>
    </div>
  )
}
