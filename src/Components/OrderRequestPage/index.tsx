import { useContext } from "react"

import Summary from "./Cart"
import SelectionSection from "./SelectionSection"
import { CartContext } from "contexts/CartProvider"
import type { CartContextType, ItemSummary } from "types"
import { cartItemsToSummary } from "utils/cartParser"
import Footer from "components/Footer"
import Header from "components/Header"

const OrderRequestPage : React.FC = () => {
    const { items } : CartContextType = useContext(CartContext)
    const finalItems : ItemSummary[] = cartItemsToSummary(items)

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