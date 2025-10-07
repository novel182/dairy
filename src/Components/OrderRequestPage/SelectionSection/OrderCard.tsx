import QuantityButtons from "components/QuantityButtons"
import type { BaseItem } from "types"

const OrderCard : React.FC<BaseItem> = ({id, product, img, desc, price, unit}: BaseItem) => {
    return (
        <div className="max-w-[450px] p-5 border border-slate-200 rounded-xl flex flex-col">
            <img className="rounded-lg" src={img || `placeholder.jpg`}/>

            <span className="flex justify-between mt-1 items-center">
                <p className="text-xl font-medium">{product}</p>
                <p className="text-sm">${price}/{unit}</p>
            </span>

            <p className="tracking-tight my-1 max-w-[300px]">{desc}</p>
            <QuantityButtons cartButton={true} id={id}/>
        </div>
    )
}

export default OrderCard