import { useNavigate } from "react-router-dom"

import type { ItemSummary } from "types"
import PrimaryButton from "../PrimaryButton"

// not in types because it's only used here
type SummaryProps = {
    collection?: ItemSummary[]
}

const Cart : React.FC<SummaryProps> = ({collection}) => {
    const navigate = useNavigate()

    return (
        <>
            {collection!.map((item : ItemSummary, index : number) => 
                <div key={`item${index}`} className="flex justify-between my-2">
                    <div>
                        <p>{item.product}</p>
                        <p className="text-xs">{item.quantity} x ${item.price}/{item.unit}</p>
                    </div>
                    <p>${item.quantity * item.price}</p>
                </div>
            )}

            {/* <div className="border-t border-slate-200">
                <div className="flex justify-between my-2">
                    <p>Subtotal</p>
                    <p>{subTotal.toFixed(2)}</p>
                </div>
                <div className="flex justify-between">
                    <p>Tax</p>
                    <p>{(tax).toFixed(2)}</p>
                </div>
            </div>

            <div className="border-t border-slate-200 mt-2 text-lg font-bold flex justify-between py-2">
                <p>Total</p>
                <p>{(subTotal + tax).toFixed(2)}</p>
            </div> */}

            <div className="text-center mt-4">
                <PrimaryButton text="Checkout" onClick={() => navigate('/checkout')}/>
            </div>
        </>
    )
}

const CartContainer : React.FC<SummaryProps> = ({collection}) => {
    const showSummary = collection && collection.length > 0

    return (
        <div className="w-full lg:col-span-1 md:col-span-2">
            <div className="bg-[#FFFDFF] rounded-xl shadow-sm border border-gray-200 p-6 mt-10">
                <div className="flex items-center justify-center">
                    <img src="cartIcon.png" className="my-3" width="30"/>
                    <p className="font-semibold my-3 ml-3">Cart</p>
                </div>
                {(
                    !showSummary ?
                    <div className="flex justify-center text-center"><p className="flex items-center text-balanced h-[200px]">I'm empty ... just like the void in your heart</p></div>
                    :
                    <Cart collection={collection}/>
                )}
            </div>
        </div>
    )
}

export default CartContainer