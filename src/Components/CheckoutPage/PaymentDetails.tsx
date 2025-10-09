import { useState, type ChangeEvent } from "react"

import type { PaymentInput, AddressInput } from "types"

interface PaymentDetailsProps {
    collectInput: (payment: PaymentInput | {} , address: AddressInput | {}) => void
    triggerCollection?: boolean
}

const PaymentDetails : React.FC<PaymentDetailsProps> = ({collectInput, triggerCollection = false}) => {
    const [payment, setPayment] = useState({})
    const [address, setAddress] = useState({})

    if(triggerCollection) {
        collectInput(payment, address)
        triggerCollection = false
    }
    
    const onPaymentChange = (e:ChangeEvent<HTMLInputElement>) => {
        const {id, value} = e.target
        setPayment((prev) => {
            return {
                ...prev,
                [id]: value
            }
        })
    }

    const onAddressChange = (e:ChangeEvent<HTMLInputElement>) => {
        const {id, value} = e.target
        setAddress((prev) => {
            return {
                ...prev,
                [id]: value
            }
        })
    }

    return (
        <div className="m-7 p-5 col-span-2 bg-[#FFFDFF] rounded-md shadow-md">

            <p className="text-2xl">Payment details</p>
            <p className="text-sm">Enter your payment information</p>
            <form className="text-sm flex flex-col">
                <label className="font-semibold my-3" htmlFor="card">Card number</label>
                <input placeholder="1234 5678 9012 3456" className="shadow-sm p-2 rounded-sm" id="card" onChange={onPaymentChange}/>
                <label className="font-semibold my-3">Expiry data</label>
                <input placeholder="MM / YY" className="shadow-sm p-2 rounded-sm" id="expiryDate" onChange={onPaymentChange}/>
                <label className="font-semibold my-3">CVC</label>
                <input placeholder="123" className="shadow-sm p-2 rounded-sm" id="cvc" onChange={onPaymentChange}/>
                <label className="font-semibold my-3">Cardholder name</label>
                <input placeholder="Falano Dhiskano" className="shadow-sm p-2 rounded-sm" id="name" onChange={onPaymentChange}/>
            </form>

            <p className="text-2xl mt-10">Billing Address</p>
            <form className="text-sm flex flex-col">
                <label className="font-semibold my-3">Street address</label>
                <input placeholder="123 Main Street" className="shadow-sm p-2 rounded-sm" id="streetAddress" onChange={onAddressChange}/>
                <label className="font-semibold my-3">City</label>
                <input placeholder="New York City" className="shadow-sm p-2 rounded-sm" id="city" onChange={onAddressChange}/>
                <label className="font-semibold my-3">Zip code</label>
                <input placeholder="54321" className="shadow-sm p-2 rounded-sm" id="zipCode" onChange={onAddressChange}/>
            </form>
        </div>
    )
}

export default PaymentDetails