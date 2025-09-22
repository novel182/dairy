// import Header from "./Header"
import Summary from "./Summary"
import SelectionSection from "./SelectionSection"
import type { ItemsSummary } from "./Summary"

const betaSummary : ItemsSummary[] = [
    {
        product: "Butter",
        quantity: 2,
        price: 4.99,
        unit: "cup"
    },
    {
        product: "Cheese",
        quantity: 3,
        price: 7.99,
        unit: "lb"
    }
]

const OrderRequestPage : React.FC = () => {
    return (
        <div className="w-screen">
            <div className="flex w-[80%] m-4">
                <div className="m-auto">
                    {/* <Header /> */}
                    <SelectionSection />
                </div>
                <Summary collection={betaSummary}/>
            </div>
        </div>
    )
}

export default OrderRequestPage