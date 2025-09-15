import Hero from "./Hero"
import InfoSection from "./InfoSection"
import NewsLetter from "./NewsLetter"
import ProductShowcase from "./ProductShowcase"

const Container = () => {
    return (
        <>
            <Hero />
            <div className="text-gray-900">
                <InfoSection />
                <ProductShowcase />
                <NewsLetter />
            </div>
        </>
    )
}

export default Container