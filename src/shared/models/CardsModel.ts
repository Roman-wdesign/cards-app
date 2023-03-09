interface ICardData<T, Y> {
    name: T
    image: T
    id: Y
}


interface IDetailCardData<T> {
    name: T
    status: T
    gender: T
    species: T
    location: {
        name: T
    }
}


interface IUseCardStore<Y, T> {
    id: Y
    name: T
    status: T
    species: T
    gender: T
    origin: {
        name: T
        url: T
    }
    location: {
        name: T
        url: T
    }
    image: T
}

export type {
    ICardData,
    IDetailCardData,
    IUseCardStore
}