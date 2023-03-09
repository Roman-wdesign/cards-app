interface ICartItemData<T, Y> {
    name: T
    image: T
    id: Y
}


interface IUseCartStore {
    cart: Object
}

export type { ICartItemData, IUseCartStore }