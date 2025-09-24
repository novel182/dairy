import { useContext } from "react"

// import Header from "./Header"
import Summary from "./Summary"
import SelectionSection from "./SelectionSection"
import { CartContext } from "contexts/CartProvider"
import type { CartContextType } from "contexts/CartProvider"

const OrderRequestPage : React.FC = () => {
    const { items } : CartContextType = useContext(CartContext)

    return (
        <div className="w-screen">
            <div className="grid m-4 gap-8 lg:grid-cols-3">
                <div className="m-auto col-span-2">
                    {/* <Header /> */}
                    <SelectionSection />
                </div>
                <Summary collection={items}/>
            </div>
        </div>
    )
}

export default OrderRequestPage