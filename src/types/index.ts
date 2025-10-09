export interface CartContextType {
    items: CartCookieItem[] | [],
    setItems?: React.Dispatch<React.SetStateAction<CartCookieItem[]>>,
    addToCart?: (item: CartCookieItem) => void
}

export interface BaseProduct {
    product: string,
    desc: string,
    img?: string,
    id: string
}

export interface BaseItem extends BaseProduct {
    price: number,
    unit: string
}

export interface ItemSummary extends BaseItem {
    quantity: number
}

export interface CartCookieItem {
    id: string,
    quantity: number
}

export interface HeaderProps {
    backLink: string,
    backText: string
}

export interface PaymentInput {
    card: number,
    expMonth: number,
    expYear: number,
    cvc: number,
    name: string
}

export interface AddressInput {
    streetAddress: string,
    city: string,
    zipCode: number
}
