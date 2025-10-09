import type { ItemSummary } from "types"
import PrimaryButton from "../PrimaryButton"

interface OrderSummaryProps {
    items: ItemSummary[],
    onClickFunction?: () => void
}

const OrderSummary : React.FC<OrderSummaryProps> = ({items, onClickFunction}) => {
    const subTotal = items.reduce((acc, item) => acc + item.quantity * item.price, 0)
    const tax = subTotal * 0.07

    return(
        <div className="md:col-span-2 lg:col-span-1 pr-5">
            <div className=" shadow-md mx-3 my-7 p-3 rounded-md bg-[#FFFDFF]">
                <p className="my-4">Order Summary</p>
                {items.map((item, index) => 
                    <div key={`summaryItem${index}`} className="flex justify-between my-1">
                        <div className="flex flex-col">
                            <p>{item.product}</p>
                            <p>Qty: {item.quantity}</p>
                        </div>
                        <p>${item.quantity*item.price}</p>
                    </div>
                )}
                <div className="grid justify-between gap-y-2 grid-cols-2 border-t border-slate-200 my-1 py-1">
                    <p>Subtotal</p>
                    <p className="text-end">${subTotal.toFixed(2)}</p>
                    <p>Tax</p>
                    <p className="text-end">${tax.toFixed(2)}</p>
                </div>
                <div className="flex justify-between my-2 border-t border-slate-200 py-1">
                    <p>Total</p>
                    <p>${(subTotal+tax).toFixed(2)}</p>
                </div>
                <div className="text-center mt-4">
                    <PrimaryButton text="Place Order" disabled={(!items || items.length === 0)} onClick={onClickFunction}/>
                </div>
            </div>
        </div>
    )
}

export default OrderSummary