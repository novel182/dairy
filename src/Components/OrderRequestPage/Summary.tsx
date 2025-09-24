import { primary } from "utils/colors"

export type ItemsSummary = {
    product: string,
    quantity: number,
    price: number,
    unit: string,
}

type SummaryProps = {
    collection: ItemsSummary[]
}

const Summary : React.FC<SummaryProps> = ({collection}) => {
    const subTotal = collection.reduce((acc, item) => acc + item.quantity * item.price, 0)
    const tax = subTotal * 0.07

    return (
        <div className="w-full lg:col-span-1 md:col-span-2">
            <div className="bg-[#FAF6E9] rounded-xl shadow-sm border border-gray-200 p-4 mt-10">
                <p className="font-semibold my-3">Order Summary</p>
                
                {collection.map((item : ItemsSummary, index : number) => 
                    <div key={`item${index}`} className="flex justify-between my-2">
                        <div>
                            <p>{item.product}</p>
                            <p className="text-xs">{item.quantity} x ${item.price}/{item.unit}</p>
                        </div>
                        <p>${item.quantity * item.price}</p>
                    </div>
                )}

                <div className="border-t border-slate-200">
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
                </div>

                <div className="text-center">
                    <button style={{backgroundColor: primary}} className="w-[60%]">
                        Submit Order
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Summary