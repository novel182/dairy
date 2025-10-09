import type { ItemSummary, CartCookieItem } from "types"
import QuantityButtons from "../QuantityButtons"
import { Link } from "react-router-dom"

interface OrderReviewProps {
    items: ItemSummary[],
    addFunction: (item: CartCookieItem) => void
}

const OrderReview : React.FC<OrderReviewProps> = ({items, addFunction}) => {

    const removeItem = (id : string) => {
        addFunction({id, quantity: 0})
    }

    if(!items || !items.length){
        return (
            <div className="flex flex-col items-center justify-center p-4 m-7 bg-[#FFFDFF] rounded-md shadow-md h-[150px]">
                <p>Nothing here. Add some products to the cart</p>
                <Link to="/order" className="rounded-xl bg-[#A0C878] px-3 py-2 my-3">View products</Link>
            </div>
        )
    }

    return (
        <div className="p-5 m-7 bg-[#FFFDFF] rounded-md shadow-md">
            <div className="flex justify-between">
                <div className="flex flex-col my-2">
                    <p className="text-2xl">Order Review</p>
                    <p>Review and adjust your items</p>
                </div>
                <div className="flex items-center">
                    <p className="bg-[#FAF6E9] rounded-3xl p-2 px-3 font-medium">{items.length} item{items.length>1 && 's'}</p>
                </div>
            </div>
            {items.map((item, index) => {
                const customClass = 'flex justify-between' + (index > 0 ? ' border-t border-slate-200' : '')
                return(
                    <div className={customClass} key={`cartItem${index}`}>
                        <div className="flex my-4 gap-3">
                            <img className="rounded-lg" src={item.img || "placeholder.jpg"} width="90px"/>
                            <div className="flex flex-col">
                                <p>{item.product}</p>
                                <p className="text-sm ">${item.price} per {item.unit}</p>
                                <QuantityButtons cartButton={false} id={item.id}/>
                            </div>
                        </div>
                        <img src="delete.png" width="25" className="mt-auto mb-5 cursor-pointer" onClick={() => removeItem(item.id)}/>
                    </div>
                )
            })}
        </div>
    )
}

export default OrderReview