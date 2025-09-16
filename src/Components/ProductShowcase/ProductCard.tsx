type ProductCardProps = {
    title: string,
    description: string
}

const ProductCard = ({title, description}: ProductCardProps) => {
    return (
        <div className="border border-slate-100 shadow-md hover:shadow-lg rounded-lg px-4 py-10 max-w-[350px] bg-yellow-50">
            <div className="overflow-hidden rounded-lg">
                <img src="placeholder.jpg" className="duration-300 hover:scale-105 hover:duration-300"/>    
            </div>
            <h2 className="text-3xl mt-3">{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default ProductCard