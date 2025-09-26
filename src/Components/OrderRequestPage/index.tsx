import { useContext } from "react"

import Summary from "./Summary"
import SelectionSection from "./SelectionSection"
import { CartContext } from "contexts/CartProvider"
import type { CartContextType, ItemSummary, BaseItem } from "types"
import productList from "mocks/productList"
import Footer from "components/Footer"

const OrderRequestPage : React.FC = () => {
    const assertedList = productList as BaseItem[]
    const { items } : CartContextType = useContext(CartContext)

    // Merge the mock list (productList) and cookie list (items) based on id
    const summaryItems = items!.map((item => ({...item, ...assertedList.find(prod => prod.id === item.id)})))

    // Some of the list items might have no quantity key (if not on cart)
    const finalItems: ItemSummary[] = summaryItems.filter((item) : item is ItemSummary => item.quantity !== undefined)

    return (
        <div className="w-screen">
            <div className="grid m-4 mx-10 gap-8 lg:grid-cols-3">
                <div className="m-auto col-span-2">
                    <SelectionSection />
                </div>
                <Summary collection={finalItems}/>
            </div>
            <Footer />
        </div>
    )
}

export default OrderRequestPage