import { useContext } from "react"
import { CartContext } from "contexts/CartProvider"
import type { ItemSummary } from "types"
import { cartItemsToSummary } from "utils/cartParser"
import QuantityButtons from "../QuantityButtons"

const OrderReview : React.FC = () => {
    const { items, addToCart } = useContext(CartContext)
    const parsedItems : ItemSummary[] = cartItemsToSummary(items)

    return (
        <div className="p-4 m-7 bg-[#FFFDF6] rounded-xl">
            <div className="flex justify-between">
                <div className="flex flex-col my-2">
                    <p className="text-2xl">Order Review</p>
                    <p>Review and adjust your items</p>
                </div>
                <div className="flex items-center">
                    <p className="bg-[#FAF6E9] rounded-3xl p-2 px-3 font-medium">{items.length} item{items.length>1 && 's'}</p>
                </div>
            </div>
            {parsedItems.map((item, index) => 
                <div className="flex justify-between" key={`cartItem${index}`}>
                    <div className="flex my-4 gap-3">
                        <img className="rounded-lg" src={item.img || "placeholder.jpg"} width="90px"/>
                        <div className="flex flex-col">
                            <p>{item.product}</p>
                            <p>${item.price} per unit</p>
                            <QuantityButtons cartButton={false} id={item.id}/>
                        </div>
                    </div>
                    <img src="delete.png" width="25" className="mt-auto mb-5 cursor-pointer" onClick={() => {console.log('clicked')}}/>
                </div>
            )}
        </div>
    )
}

export default OrderReview