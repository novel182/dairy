type ProductCardProps = {
    title: string,
    description: string
}

const ProductCard = ({title, description}: ProductCardProps) => {
    return (
        <div className="border border-slate-100 shadow-lg hover:shadow-xl rounded-lg px-4 py-10 max-w-[350px] bg-yellow-50">
            <img src="placeholder.jpg" className="rounded-lg"/>
            <h2 className="text-3xl mt-3">{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default ProductCard