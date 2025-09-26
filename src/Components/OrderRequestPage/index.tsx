import { useContext } from "react"

import Summary from "./Summary"
import SelectionSection from "./SelectionSection"
import { CartContext } from "contexts/CartProvider"
import type { CartContextType, ItemSummary, BaseItem } from "types"
import productList from "mocks/productList"

const OrderRequestPage : React.FC = () => {
    const assertedList = productList as BaseItem[]
    const { items } : CartContextType = useContext(CartContext)

    // Merge the mock list (productList) and cookie list (items) based on id
    const summaryItems = items!.map((item => ({...item, ...assertedList.find(prod => prod.id === item.id)})))
    const assertedItems = summaryItems as ItemSummary[]

    // Some of the list items might have no quantity key (if not on cart)
    const finalItems: ItemSummary[] = assertedItems.filter(item => item.quantity)

    return (
        <div className="w-screen">
            <div className="grid m-4 gap-8 lg:grid-cols-3">
                <div className="m-auto col-span-2">
                    <SelectionSection />
                </div>
                <Summary collection={finalItems}/>
            </div>
        </div>
    )
}

export default OrderRequestPage