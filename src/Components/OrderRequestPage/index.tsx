import { useContext } from "react"

import Summary from "./Cart"
import SelectionSection from "./SelectionSection"
import { CartContext } from "contexts/CartProvider"
import type { CartContextType, ItemSummary, BaseItem } from "types"
import productList from "mocks/productList"
import Footer from "components/Footer"
import Header from "components/Header"

const OrderRequestPage : React.FC = () => {
    const assertedList = productList as BaseItem[]
    const { items } : CartContextType = useContext(CartContext)

    // Merge the mock list (productList) and cookie list (items) based on id
    const summaryItems = items!.map((item => ({...item, ...assertedList.find(prod => prod.id === item.id)})))

    // Some of the list items might have no quantity key (if not on cart)
    const finalItems: ItemSummary[] = summaryItems.filter((item) : item is ItemSummary => item.quantity !== undefined)

    return (
        <div className="w-screen">
            <Header backLink="/" backText="Home"/>
            <div className="grid p-4 px-10 gap-8 lg:grid-cols-3 bg-[#FAF6E9]">
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