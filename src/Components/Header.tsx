import { Link } from "react-router-dom"

import type { HeaderProps } from "types"

const Header : React.FC<HeaderProps> = ({backLink, backText}) => {
    return (
        <div className="w-[90%] m-auto my-5">
            <div className="w-full flex">
                <Link to={backLink} className="flex items-center">
                    <img src="backArrow.png" width="25"/>
                    {backText}
                </Link>
                <div className="w-full text-center font-medium">
                    <Link to="/">
                        Alpine Dairy
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header