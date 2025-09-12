import Logo from "./NavItems/Logo"
import NavButtons from "./NavItems/NavButtons"
import Hero from "./Hero"

const Container = () => {
    const screenWidth = window.innerWidth

    return (
        <div className="w-screen h-screen bg-[url(hero.jpg)] bg-no-repeat">
            <div className="w-[60%] m-auto">
                <div className=" flex">
                    <Logo screenWidth={screenWidth}/>
                    <NavButtons screenWidth={screenWidth}/>
                </div>
                <Hero />
            </div>
        </div>
    )
}

export default Container