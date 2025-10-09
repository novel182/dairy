import OrderCard from "./OrderCard"
import type { BaseItem } from "types"
import productList from "mocks/productList"

const SelectionSection : React.FC = () => {
    return (
        <div className={`mt-10 bg-[#FFFDFF] px-6 py-7 rounded-xl shadow-sm border border-gray-200`}>
            <p className="my-4 text-xl font-bold">Select products</p>
            <div className="grid md:grid-cols-2 gap-6">
                {productList.map((singleProduct : BaseItem, index : number) => 
                <OrderCard key={`orderProduct${index}`} {...singleProduct}/>
            )}
            </div>
    </div>
    )
}

export default SelectionSection