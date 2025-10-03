import Header from "../Header"

const CheckoutPage : React.FC = () => {
    return (
        <div className="w-screen">
            <Header backLink="/order" backText="Order"/>
            <div className="bg-[#FAF6E9]">
                <div className="py-5 w-[80%] m-auto">
                    <p className="text-center my-5 font-bold text-3xl">Complete Your Order</p>
                    {/* <p>We cannot deliver the products at this time. All the products have to be ordered as pick up.</p> */}
                </div>
            </div>
        </div>
    )
}

export default CheckoutPage