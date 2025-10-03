import { useContext } from "react"
import { CartContext } from "src/contexts/CartProvider"
import type { ItemSummary } from "types"
import { cartItemsToSummary } from "src/utils/cartParser"

const OrderReview : React.FC = () => {
    const { items, addToCart } = useContext(CartContext)
    const parsedItems : ItemSummary[] = cartItemsToSummary(items)

    return (
        <div>
            <p className="text-2xl">Order Review</p>
            <p>Review and adjust your items</p>
            {parsedItems.map((item, index) => 
                <div>
                    <img src={item.img || "placeholder.jpg"}/>
                    <p>{item.product}</p>
                    <p>{item.price}</p>
                    
                </div>
            )}
        </div>
    )
}

export default