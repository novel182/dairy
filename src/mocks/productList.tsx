import type { BaseItem } from "types"

const butter : BaseItem = {
    product: "Butter",
    desc: "Freshly churned butter made from high-quality cream",
    price: 4.99,
    unit: "kg",
    id: "butter"
}

const paneer : BaseItem = {
    product: "Paneer",
    desc: "Soft and crumbly cheese, perfect for cooking",
    price: 5.99,
    unit: "kg",
    id: "paneer"
}

const milk : BaseItem = {
    product: "Whole milk",
    desc: "Rich and creamy whole milk from grass-fed cows",
    price: 3.49,
    unit: "litre",
    id: "milk"
}

const mozarellaCheese : BaseItem = {
    product: "Mozzarella",
    desc: "Soft and mild mozzarella cheese, perfect for melting",
    price: 6.49,
    unit: "kg",
    id: "mozzarella"
}

const ghee : BaseItem = {
    product: "Ghee",
    desc: "Clarified butter with a rich, nutty flavor",
    price: 9.99,
    unit: "litre",
    id: "ghee"
}

const kanchan : BaseItem = {
    product: "Kanchan",
    desc: "Aged nepali cheese with a sharp and tangy taste",
    price: 7.99,
    unit: "kg",
    id: "kanchan"
}

const productList : BaseItem[] = [butter, paneer, milk, mozarellaCheese, ghee, kanchan]

export default productList