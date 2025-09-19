// import Header from "./Header"
import QuickCheckout from "./QuickCheckout"
import SelectionSection from "./SelectionSection"

const OrderRequestPage : React.FC = () => {
    return (
        <div className="flex items-center w-[80%] m-4">
            <div className="m-auto">
                {/* <Header /> */}
                <SelectionSection />
            </div>
            <QuickCheckout />
        </div>
    )
}

export default OrderRequestPage