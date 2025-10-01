export interface CartContextType {
    items: cartCookieItem[] | [],
    setItems?: React.Dispatch<React.SetStateAction<cartCookieItem[]>>,
    addToCart?: (item: cartCookieItem) => void
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

export interface cartCookieItem {
    id: string,
    quantity: number
}

export interface HeaderProps {
    backLink: string,
    backText: string
}
