import { useState } from "react"

// import Header from "./Header"
import Summary from "./Summary"
import SelectionSection from "./SelectionSection"
import type { ItemsSummary } from "./Summary"

const betaSummary : ItemsSummary[] = [
    {
        product: "Butter",
        quantity: 2,
        price: 4.99,
        unit: "cup"
    },
    {
        product: "Cheese",
        quantity: 3,
        price: 7.99,
        unit: "lb"
    }
]

const OrderRequestPage : React.FC = () => {
    // TODO: change the default
    const [summaryItems, setSummaryItems] = useState<ItemsSummary[]>(betaSummary)

    const addToCart = (item: ItemsSummary) : void => {
        const itemPresent = summaryItems.find(itemsSummary => itemsSummary.product === item.product)

        if(itemPresent) itemPresent.quantity += item.quantity
        else summaryItems.push(item)

        setSummaryItems([...summaryItems])      // add a new reference to trigger re-render
    }

    return (
        <div className="w-screen">
            <div className="grid m-4 gap-8 lg:grid-cols-3">
                <div className="m-auto col-span-2">
                    {/* <Header /> */}
                    <SelectionSection onClickFunction={addToCart}/>
                </div>
                <Summary collection={summaryItems}/>
            </div>
        </div>
    )
}

export default OrderRequestPage