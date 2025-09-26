import type { BaseProduct } from "types"

const ProductCard : React.FC<BaseProduct> = ({product, desc, img}: BaseProduct) => {
    return (
        <div className={`border border-slate-100 shadow-md hover:shadow-lg rounded-lg px-4 py-10 max-w-[350px] bg-[#FAF6E9]`}>
            <div className="overflow-hidden rounded-lg">
                <img src={img || `placeholder.jpg`} className="duration-300 hover:scale-105 hover:duration-300"/>    
            </div>
            <h2 className="text-3xl mt-3">{product}</h2>
            <p>{desc}</p>
        </div>
    )
}

export default ProductCard