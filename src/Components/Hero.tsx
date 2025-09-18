import { useNavigate } from "react-router-dom"

const Hero = () => {
    const headline = 'Freshness from Farm to Dairy'
    const ctaText = 'Request an order'

    const navigate = useNavigate()

    return (
        <section className="h-screen flex items-center justify-center text-white">
            <div className="absolute inset-0 bg-[url(hero2.jpg)] bg-no-repeat bg-cover bg-center">
                <div className="absolute inset-0 bg-black/20"/>
            </div>
            <div className="items-center text-center margin-auto z-2">
                <h1 className="text-5xl font-bold">{headline}</h1>
                <button className="mt-7" onClick={() => navigate('/order')}>{ctaText}</button>
            </div>
        </section>

    )
}

export default Hero