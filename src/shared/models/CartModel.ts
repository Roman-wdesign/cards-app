interface ICartItemData<T, Y> {
    name: T
    image: T
    id: Y
}


interface IUseCartStore<T> {
    cart: T
}

export type { ICartItemData, IUseCartStore }