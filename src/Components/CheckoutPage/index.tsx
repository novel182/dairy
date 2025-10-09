import { useContext, useState } from "react"

import { CartContext } from "contexts/CartProvider"
import type { ItemSummary, CartContextType } from "types"
import { cartItemsToSummary } from "utils/cartParser"
import Header from "components/Header"
import OrderReview from "./OrderReview"
import OrderSummary from "./OrderSummary"
import PaymentDetails from "./PaymentDetails"
import type { PaymentInput, AddressInput } from "types"
import Footer from "components/Footer"

const CheckoutPage : React.FC | null = () => {
    const { items, addToCart } : CartContextType = useContext(CartContext)
    const parsedItems : ItemSummary[] = cartItemsToSummary(items)

    let paymentInformation = {}
    let addressInformation = {}
    // triggerCollection is also the place order trigger
    const [triggerCollection, setTrigger] = useState(false)

    const collectInput = (payment: PaymentInput | {}, address: AddressInput | {}) => {
        paymentInformation = payment
        addressInformation = address
        console.log(paymentInformation, addressInformation)
    }

    const onPlaceOrder = () => {
        setTrigger(true)
    }

    return (
        <div className="w-screen">
            <Header backLink="/order" backText="Order"/>
            <div className="bg-[#FAF6E9] py-2">
                <div className="py-5 w-[80%] m-auto">
                    <p className="text-center my-5 font-bold text-3xl">Complete Your Order</p>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2">
                    <div className="col-span-2">
                        <OrderReview items={parsedItems} addFunction={addToCart!}/>
                        <PaymentDetails collectInput={collectInput} triggerCollection={triggerCollection}/>
                    </div>
                    <OrderSummary items={parsedItems} onClickFunction={onPlaceOrder}/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CheckoutPage