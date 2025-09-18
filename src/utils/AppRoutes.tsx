import { Routes, Route } from "react-router-dom"
import Container from "../components/Container"
import OrderRequestPage from "../components/OrderRequestPage"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path = "/" element = {<Container />} />
            <Route path = "/order" element = {<OrderRequestPage />} />
        </Routes>
    )
}

export default AppRoutes