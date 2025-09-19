import Hero from "./Hero"
import InfoSection from "./InfoSection"
import NewsLetter from "./NewsLetter"
import ProductShowcase from "./ProductShowcase"
import Footer from "./Footer"

const Container : React.FC = () => {
    return (
        <>
            <Hero />
            <InfoSection />
            <ProductShowcase />
            <NewsLetter />
            <Footer />
        </>
    )
}

export default Container