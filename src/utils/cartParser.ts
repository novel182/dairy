import type { CartCookieItem, ItemSummary, BaseItem } from "types"
import productList from "mocks/productList"

export const cartItemsToSummary = (items: CartCookieItem[]) => {
    const assertedList = productList as BaseItem[]

    // Merge the mock list (productList) and cookie list (items) based on id
    const summaryItems = items!.map((item => ({...item, ...assertedList.find(prod => prod.id === item.id)})))
    // Some of the list items might have no quantity key (if not on cart)
    const finalItems: ItemSummary[] = summaryItems.filter((item) : item is ItemSummary => item.quantity !== undefined)

    return finalItems
}