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

export type {
    ICardData,
    IDetailCardData
}