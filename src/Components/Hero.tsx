const Hero = () => {
    const headline = 'Fresh Dairy, Straight from the Farm'
    const ctaText = 'Request an order'

    return (
        <section className="h-screen w-screen flex items-center justify-center">
            <div className="absolute inset-0 bg-[url(hero2.jpg)] bg-no-repeat bg-cover bg-center">
                <div className="absolute inset-0 bg-black/40"/>
            </div>
            <div className="items-center text-center margin-auto z-2">
                <h1>{headline}</h1>
                <button className="mt-7">{ctaText}</button>
            </div>
        </section>

    )
}

export default Hero