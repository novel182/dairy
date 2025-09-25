import { createContext, useState, type ReactElement } from "react"
import { ItemsSummary } from "components/OrderRequestPage/Summary"

// const betaSummary : ItemsSummary[] = [
//     {
//         product: "Butter",
//         quantity: 2,
//         price: 4.99,
//         unit: "cup"
//     },
//     {
//         product: "Cheese",
//         quantity: 3,
//         price: 7.99,
//         unit: "lb"
//     }
// ]

export type CartContextType = {
    items?: ItemsSummary[],
    setItems?: React.Dispatch<React.SetStateAction<ItemsSummary[]>>,
    addToCart?: (item: ItemsSummary) => void
}

export const CartContext = createContext<CartContextType>({})

const CartProvider : React.FC<{children: ReactElement | ReactElement[]}>= ({children}) => {
    const [items, setItems] = useState<ItemsSummary[]>([])

    const addToCart = (item: ItemsSummary) : void => {
        const itemPresent = items.find(itemsSummary => itemsSummary.product === item.product)

        if(!itemPresent && item.quantity === 0) return   // do nothing if item not present and quantity is 0
        
        if(itemPresent) {
            item.quantity === 0
            ? items.splice(items.indexOf(itemPresent), 1)
            : itemPresent.quantity = item.quantity
        }
        else items.push(item)

        setItems([...items])      // add a new reference to trigger re-render
        console.log('new summary', items)
    }

    return (
        <CartContext value={{items, setItems, addToCart}}>
            {children}
        </CartContext>
    )
}

export default CartProvider