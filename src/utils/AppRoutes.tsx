import { Routes, Route } from "react-router-dom"
import Container from "components/LandingPage"
// import OrderRequestPage from "components/OrderRequestPage"
// import CheckoutPage from "components/CheckoutPage"
import ContactPage from "components/ContactPage"

const AppRoutes : React.FC = () => {
    return (
        <Routes>
            <Route path = "/" element = {<Container />} />
            {/* <Route path = "/order" element = {<OrderRequestPage />} />
            <Route path = "/checkout" element = {<CheckoutPage />} /> */}
            <Route path = "/contact" element = {<ContactPage />} />
        </Routes>
    )
}

export default AppRoutes