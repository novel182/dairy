import { Link } from "react-router-dom"

const Header : React.FC = () => {
    return (
        <div className="flex justify-left w-[80%] m-auto items-center my-5">
            <Link to="/">{`<- Back to Home`}</Link>
            <p className="mx-10 text-2xl font-bold">Place your order</p>
        </div>
    )
}

export default Header