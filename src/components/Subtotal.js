import React from 'react'
import './Subtotal.css'
import { useStateValue } from '../providers/StateProviders'
import { useHistory } from 'react-router-dom/cjs/react-router-dom'
import {getBasketTotal} from '../providers/Reducer'

function Subtotal() {
    const history  = useHistory();
    const  [{ basket }, dispatch] = useStateValue()

    const getFormattedTotal = (total) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
        }).format(total);
    }

    const total = getBasketTotal(basket);

    return (
        <div className="subtotal">
            <p> Subtotal  ({basket?.length} item) <strong>{getFormattedTotal(total)}</strong></p>
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal