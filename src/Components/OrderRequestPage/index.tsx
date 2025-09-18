import OrderCard from "./OrderCard"

const OrderCardInfo = {
    title: "Butter",
    desc: "Freshly churned butter made from high-quality cream",
    price: "4.99/cup"
}

const OrderRequestPage = () => {
    return (
        <div className="">
            <OrderCard {...OrderCardInfo}/>
        </div>
    )
}

export default OrderRequestPage