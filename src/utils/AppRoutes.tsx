import { Routes, Route } from "react-router-dom"
import Container from "components/Container"
import OrderRequestPage from "components/OrderRequestPage"
import Temp from "components/temp"

const AppRoutes : React.FC = () => {
    return (
        <Routes>
            <Route path = "/" element = {<Container />} />
            <Route path = "/order" element = {<OrderRequestPage />} />
            <Route path="/temp" element={<Temp />} />
        </Routes>
    )
}

export default AppRoutes