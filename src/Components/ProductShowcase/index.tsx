import ProductCard from "./ProductCard"

const cardInfo = {
    title: 'Placeholders',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
}

const cards = Array(6).fill(cardInfo)

const ProductShowcase : React.FC = () => {
    const sectionHeader = 'Our Premium Products'
    const desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut" 

    return (
        <section className="flex flex-col w-[80%] mx-auto items-center my-[32px]">
            <h1 className="mt-10">{sectionHeader}</h1>
            <p className="mt-3 mb-10">{desc}</p>
            <div className="mt-2 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cards.map(({title, description}) => 
                    <ProductCard title={title} description={description}/>
                )}
            </div>
        </section>
    )
}

export default ProductShowcase