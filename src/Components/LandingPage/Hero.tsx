import { useNavigate } from "react-router-dom"

import { primary } from "utils/colors"

const Hero : React.FC = () => {
    const headline = 'Freshness from Farm to Dairy1'
    const ctaText = 'Request an order'

    const navigate = useNavigate()

    return (
        <section className="h-screen flex items-center justify-center text-white">
            <div className="absolute inset-0 bg-no-repeat bg-cover bg-center" style={{backgroundImage:"url('hero.jpg')"}}>
                <div className="absolute inset-0 bg-black/20"/>
            </div>
            <div className="items-center text-center margin-auto z-2">
                <h1 className="text-5xl font-bold">{headline}</h1>
                <button
                    className="mt-7"
                    onClick={() => navigate('/order')}
                    style={{backgroundColor: primary}}>{ctaText}</button>
            </div>
        </section>

    )
}

export default Hero