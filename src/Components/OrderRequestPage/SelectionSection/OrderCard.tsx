import { useState } from "react"
import { primary } from "utils/colors"

export type OrderCardProps = {
    title: string,
    img?: string,
    desc: string,
    price: number,
    unit: string
}

const buttonStyle = {
    backgroundColor: "#ffffff",
    border: "1px solid rgba(0,0,0,0.2)"
}

const OrderCard : React.FC<OrderCardProps> = ({title, img, desc, price, unit}) => {
    const [quantity, setQuantity] = useState(0)

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) : void => {
        var val = parseInt(event.target.value)

        if(isNaN(val) || val<0) val = 0
        if(val>20) val = 20

        setQuantity(val)
    }
    const disableLower = quantity <= 0
    const disableUpper = quantity >= 20

    return (
        <div className="max-w-[450px] p-5 border border-slate-200 rounded-xl">
            <img className="rounded-lg" src={img || `placeholder.jpg`}/>
            <span className="flex justify-between mt-1 items-center">
                <p className="text-xl font-medium">{title}</p>
                <p className="text-sm">${price}/{unit}</p>
            </span>
            <p className="tracking-tight my-1 max-w-[300px]">{desc}</p>
            <div className="flex h-[30px] justify-between">
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
                <button className="text-white flex items-center ml-3" style={{backgroundColor: primary}}>
                    <p className="text-sm">Add to cart</p>
                </button>
            </div>
        </div>
    )
}

export default OrderCard