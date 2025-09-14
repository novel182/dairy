import Hero from "./Hero"
import InfoSection from "./InfoSection"
import ProductShowcase from "./ProductShowcase"

const Container = () => {
    return (
        <>
            <Hero />
            <div className="text-gray-900">
                <InfoSection />
                <ProductShowcase />
            </div>
        </>
    )
}

export default Container