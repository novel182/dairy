import { createContext } from "react"
import { ItemsSummary } from "components/OrderRequestPage/Summary"

const CartContext = createContext<ItemsSummary[]>([],)

const addToCart = (item: ItemsSummary) : void => {

}

export default CartContext