import type { OrderCardProps } from "components/OrderRequestPage/SelectionSection/OrderCard"

const butter : OrderCardProps = {
    product: "Butter",
    desc: "Freshly churned butter made from high-quality cream",
    price: 4.99,
    unit: "cup"
}

const paneer : OrderCardProps = {
    product: "Paneer",
    desc: "Soft and crumbly cheese, perfect for cooking",
    price: 5.99,
    unit: "lb"
}

const milk : OrderCardProps = {
    product: "Whole milk",
    desc: "Rich and creamy whole milk from grass-fed cows",
    price: 3.49,
    unit: "gallon"
}

const mozerellaCheese : OrderCardProps = {
    product: "Mozzarella cheese",
    desc: "Soft and mild mozzarella cheese, perfect for melting",
    price: 6.49,
    unit: "lb"
}

const ghee : OrderCardProps = {
    product: "Ghee",
    desc: "Clarified butter with a rich, nutty flavor",
    price: 9.99,
    unit: "litre"
}

const yogurt : OrderCardProps = {
    product: "Yogurt",
    desc: "Creamy and tangy yogurt, great for breakfast or snacks",
    price: 2.99,
    unit: "cup"
}

const productList : OrderCardProps[] = [butter, paneer, milk, mozerellaCheese, ghee, yogurt]

export default productList