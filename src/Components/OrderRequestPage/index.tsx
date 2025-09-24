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
    const [summaryItems, setSummaryItems] = useState<ItemsSummary[]>(betaSummary)
    const addToCart = (item: ItemsSummary) => {
        console.log('before adding', summaryItems)
        summaryItems.push(item)
        setSummaryItems(summaryItems)
        console.log('after adding', summaryItems)
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