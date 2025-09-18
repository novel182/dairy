import { useState } from "react"

type OrderCardProps = {
    title: string,
    img?: string,
    desc: string,
    price: string
}

const buttonStyle = {
    backgroundColor: "oklch(1 0 252)",
    border: "1px solid oklch(0 0 252/0.2)"
}

const OrderCard = ({title, img, desc, price}: OrderCardProps) => {
    const [quantity, setQuantity] = useState(0)

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        var val = parseInt(event.target.value)

        if(isNaN(val) || val<0) val = 0
        if(val>20) val = 20

        setQuantity(val)
    }
    const disableLower = quantity <= 0
    const disableUpper = quantity >= 20

    return (
        <div className="max-w-[400px] p-5">
            <img className="rounded-lg" src={img || `placeholder.jpg`}/>
            <span className="flex justify-between">
                <p className="text-xl font-bold">{title}</p>
                <p>${price}</p>
            </span>
            <p>{desc}</p>
            <div className="flex h-[30px] justify-between">
                <div className="flex">
                    <button
                        style={buttonStyle}
                        disabled={disableLower}
                        className="flex items-center"
                        onClick={() => setQuantity(prev => prev-1)}>
                        -
                    </button>
                    <input className="mx-3 w-[50px] text-center" type="text" value={quantity} onChange={onInputChange}/>
                    <button
                        style={buttonStyle}
                        disabled={disableUpper}
                        className="flex items-center"
                        onClick={() => setQuantity(prev => prev+1)}>
                        +
                    </button>
                </div>
                <button className="text-white flex items-center ml-3">
                    Add to cart
                </button>
            </div>
        </div>
    )
}

export default OrderCard