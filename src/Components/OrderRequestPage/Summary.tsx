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
        <div className="w-full lg:col-span-1">
            <p>Order Summary</p>
            
            {collection.map((item : ItemsSummary, index : number) => 
                <div key={`item${index}`} className="flex justify-between">
                    <div>
                        <p>{item.product}</p>
                        <p className="text-xs">{item.quantity} x ${item.price}/{item.unit}</p>
                    </div>
                    <p>${item.quantity * item.price}</p>
                </div>
            )}

            <div className="border-t border-slate-200 mt-2">
                <div className="flex justify-between">
                    <p>Subtotal</p>
                    <p>{subTotal.toFixed(2)}</p>
                </div>
                <div className="flex justify-between">
                    <p>Tax</p>
                    <p>{(tax).toFixed(2)}</p>
                </div>
            </div>

            <div className="border-t border-slate-200 mt-2 text-lg font-bold flex justify-between">
                <p>Total</p>
                <p>{(subTotal + tax).toFixed(2)}</p>
            </div>
        </div>
    )
}

export default Summary