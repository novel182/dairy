type NavButtonProps = {
    screenWidth: number
} 

const NavButtons = ({screenWidth} : NavButtonProps) => {
    const smallScreen =
        <div>
            <img src="burger-menu.svg" width="30"/>
        </div>

    const bigScreen = 
        <>
            <a className="mr-3">
                About
            </a>
            <a className="mr-3">
                Products
            </a>
            <a className="mr-3">
                Order
            </a>
            <a>
                Contact Us
            </a>
        </>

    return(
        <div className="text-end ml-auto relative top-[50%] flex items-center">
            {screenWidth > 700 ? bigScreen : smallScreen}
        </div>
    )
}

export default NavButtons