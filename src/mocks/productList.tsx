import type { BaseItem } from "types"

const butter : BaseItem = {
    product: "Butter",
    desc: "Freshly churned butter made from high-quality cream",
    price: 4.99,
    unit: "cup",
    id: "butter"
}

const paneer : BaseItem = {
    product: "Paneer",
    desc: "Soft and crumbly cheese, perfect for cooking",
    price: 5.99,
    unit: "lb",
    id: "paneer"
}

const milk : BaseItem = {
    product: "Whole milk",
    desc: "Rich and creamy whole milk from grass-fed cows",
    price: 3.49,
    unit: "gallon",
    id: "milk"
}

const mozerellaCheese : BaseItem = {
    product: "Mozzarella",
    desc: "Soft and mild mozzarella cheese, perfect for melting",
    price: 6.49,
    unit: "lb",
    id: "cheese"
}

const ghee : BaseItem = {
    product: "Ghee",
    desc: "Clarified butter with a rich, nutty flavor",
    price: 9.99,
    unit: "litre",
    id: "ghee"
}

const yogurt : BaseItem = {
    product: "Yogurt",
    desc: "Creamy and tangy yogurt, great for breakfast or snacks",
    price: 2.99,
    unit: "cup",
    id: "yogurt"
}

const productList : BaseItem[] = [butter, paneer, milk, mozerellaCheese, ghee, yogurt]

export default productList