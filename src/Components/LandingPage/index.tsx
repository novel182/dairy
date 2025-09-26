import Hero from "./Hero"
import InfoSection from "./InfoSection"
import NewsLetter from "./NewsLetter"
import ProductShowcase from "./ProductShowcase"
import Footer from "./Footer"

const LandingPage : React.FC = () => {
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

export default LandingPage