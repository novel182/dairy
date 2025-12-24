import { useEffect, useContext, useState } from 'react'
import type { CartContextType, CartCookieItem } from 'types'
import { CartContext } from 'contexts/CartProvider'
import { primary } from 'utils/colors'

interface QuantityButtonsProps {
    cartButton: boolean,
    id: string
}

const buttonStyle = {
    backgroundColor: "#ffffff",
    border: "1px solid rgba(0,0,0,0.2)"
}

const QuantityButtons : React.FC<QuantityButtonsProps> = ({cartButton, id}) => {
    const { items, addToCart } : CartContextType = useContext(CartContext)
    const itemSummary : CartCookieItem | undefined = items?.find(item => item.id === id)
    const [quantity, setQuantity] = useState(0)

    const CartQuantity = itemSummary?.quantity || 0
    const buttonText = CartQuantity === 0 ? "Add" : "Update"

    useEffect(() => {
        if(itemSummary) setQuantity(itemSummary.quantity)
    }, [itemSummary])

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) : void => {
        var val = parseInt(event.target.value)

        if(isNaN(val) || val<0) val = 0
        if(val>20) val = 20

        setQuantity(val)
        if(!cartButton) addToCart!({id, quantity})
    }
    const disableLower = quantity <= 0
    const disableUpper = quantity >= 20

    return (
        <div className="flex h-[30px] justify-between mt-auto">
            <div className="flex">
                <button
                    style={buttonStyle}
                    disabled={disableLower}
                    className="disabled:opacity-50 flex items-center"
                    onClick={() => setQuantity(prev => prev-1)}>
                    -
                </button>
                <input className="mx-3 w-[30px] text-center focus:outline-0" type="text" value={quantity} onChange={onInputChange}/>
                <button
                    style={buttonStyle}
                    disabled={disableUpper}
                    className="disabled:opacity-50 flex items-center"
                    onClick={() => setQuantity(prev => prev+1)}>
                    +
                </button>
            </div>
            { cartButton && 
            <button
                className="text-white flex items-center ml-3 disabled:opacity-50"
                style={{backgroundColor: primary, padding: "0 10px"}}
                onClick={() => addToCart && addToCart({id, quantity})}
                disabled={CartQuantity === quantity}>
                <p className="text-sm">{buttonText}</p>
            </button>}
        </div>
    )
}

export default QuantityButtons