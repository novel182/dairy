import Hero from "./Hero"
import InfoSection from "./InfoSection"
import NewsLetter from "./NewsLetter"
import ProductShowcase from "./ProductShowcase"
import Footer from "./Footer"

const Container = () => {
    return (
        <>
            <Hero />
            <div className="text-gray-900">
                <InfoSection />
                <ProductShowcase />
                <NewsLetter />
                <Footer />
            </div>
        </>
    )
}

export default Container