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
                <p className="w-full text-center font-medium">
                   Alpine Dairy
                </p>
            </div>
        </div>
    )
}

export default Header