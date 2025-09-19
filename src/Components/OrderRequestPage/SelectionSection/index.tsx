import { lightAccent } from "utils/colors.ts"
import OrderCard from "./OrderCard"
import type { OrderCardProps } from "./OrderCard"

const orderCardInfo : OrderCardProps = {
    title: "Butter",
    desc: "Freshly churned butter made from high-quality cream",
    price: "4.99/cup"
}
const cards : OrderCardProps[] = Array(6).fill(orderCardInfo)

const SelectionSection : React.FC = () => {
    return (
        <div className={`my-10 bg-[${lightAccent}] px-8 py-7 rounded-xl`}>
            <p className="my-4 text-xl font-bold">Select products</p>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
                {cards.map((cardInfo, index) => 
                <OrderCard key={`orderProduct${index}`} {...cardInfo}/>
            )}
            </div>
    </div>
    )
}

export default SelectionSection