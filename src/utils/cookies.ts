import type { ItemSummary, CartCookieItem } from "types"

export const setCartAsCookies = (cart : ItemSummary[]) : void => {
    const minifiedCart = cart.map(item => ({id: item.id, quantity: item.quantity}))
    document.cookie = `cart=${JSON.stringify(minifiedCart)};path=/order;max-age=604800`   
}

export const getCartFromCookies = () : CartCookieItem[] | undefined => {
    const cookiedJsonString = document.cookie.split('; ').find(row => row.startsWith('cart='))
    if(!cookiedJsonString) return undefined
    const prunedString = cookiedJsonString.replace('cart=', '')
    return JSON.parse(prunedString)
}