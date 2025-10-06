import Header from "../Header"
import OrderReview from "./OrderReview"

const CheckoutPage : React.FC = () => {
    return (
        <div className="w-screen">
            <Header backLink="/order" backText="Order"/>
            <div className="bg-[#FAF6E9] py-2">
                <div className="py-5 w-[80%] m-auto">
                    <p className="text-center my-5 font-bold text-3xl">Complete Your Order</p>
                </div>
                <OrderReview />
            </div>
        </div>
    )
}

export default CheckoutPage