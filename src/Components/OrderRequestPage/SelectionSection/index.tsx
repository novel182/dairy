import type { ItemsSummary } from "../Summary"
import OrderCard from "./OrderCard"
import type { OrderCardProps } from "./OrderCard"

const orderCardInfo = {
    item: {
        product: "Butter",
        desc: "Freshly churned butter made from high-quality cream",
        price: 4.99,
        unit: "cup"
    },
    onClickFunction: () => {}
}
const cards : OrderCardProps[] = Array(6).fill(orderCardInfo)

type SelectionSectionProps = {
    onClickFunction: (item : ItemsSummary) => void
}

const SelectionSection : React.FC<SelectionSectionProps> = ({onClickFunction}) => {
    return (
        <div className={`mt-10 bg-[#FAF6E9] px-8 py-7 rounded-xl shadow-sm border border-gray-200`}>
            <p className="my-4 text-xl font-bold">Select products</p>
            <div className="grid md:grid-cols-2 gap-6">
                {cards.map((cardInfo, index) => 
                <OrderCard key={`orderProduct${index}`} item={cardInfo.item} onClickFunction={onClickFunction}/>
            )}
            </div>
    </div>
    )
}

export default SelectionSection