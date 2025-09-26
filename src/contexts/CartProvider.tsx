import { createContext, useState, type ReactElement } from "react"
import type { CartContextType, cartCookieItem } from "types"
import { setCartAsCookies, getCartFromCookies } from "utils/cookies"

export const CartContext = createContext<CartContextType>({items: []})

const CartProvider : React.FC<{children: ReactElement | ReactElement[]}>= ({children}) => {
    const cookiedCart = getCartFromCookies() || []
    const [items, setItems] = useState<cartCookieItem[]>(cookiedCart)

    const addToCart = (item: cartCookieItem) : void => {
        const itemPresent = items.find(itemSummary => itemSummary.id === item.id)

        if(!itemPresent && item.quantity === 0) return   // do nothing if item not present and quantity is 0
        
        if(itemPresent) {
            item.quantity === 0
            ? items.splice(items.indexOf(itemPresent), 1)
            : itemPresent.quantity = item.quantity
        }
        else items.push({id: item.id, quantity: item.quantity})

        setCartAsCookies(items)
        setItems([...items])      // add a new reference to trigger re-render
    }

    return (
        <CartContext value={{items, setItems, addToCart}}>
            {children}
        </CartContext>
    )
}

export default CartProvider