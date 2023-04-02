export type List = {
    "type": string
    "name": string
    "material": string
    "unit": string
    "width": number
    "price": number
}
export type Pipe = {
    "type": string
    "name": string
    "unit": string
    "width": number
    "price": number
}
export type DataType = {
    "type": string
    "name"?: string
    "material"?: string
    "unit": string
    "width"?: number
    "price": number
}
export type FormValues = {
    list: string
    pipe: string
    frame: number
    width: number
    length: number
};

export type DataContextType = {
    basket: ResultType[]
    result: ResultType | null
    setResultHandler: (data: FormValues) => void
    setBasketHandler: () => void
    viewBasket: boolean
    clearBasket: () => void
    toggleViewBasket:() => void
}

export type ResultDataType = {
    count: number
    totalPrice: number
    name: string
    unit: string
    width?: number
    material?: string
}

export type ResultType = {
    resultData: ResultDataType[]
    frameArea: number
    totalPrice: number
    cellSize: string
}


