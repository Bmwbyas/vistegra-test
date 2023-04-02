import * as React from 'react';
import {useState} from 'react';
import {DataContextType, FormValues, ResultType} from "../types/types";
import {calcFrame} from "../assets/function/calcFrame/calcFrame";


export const DataContext = React.createContext<DataContextType | null>(null);

type DataProviderType = {
    children: React.ReactNode
}
export const DataProvider: React.FC<DataProviderType> = ({children}) => {

    const [result, setResult] = useState<ResultType | null>(null)
    const [baskets, setBasket] = useState<ResultType[]>([])
    const [viewBasket, setViewBasket] = useState(false)

    const setBasketHandler = () => {
        if (!result) {
            return
        }
        setBasket([...baskets, result])
    }
    const clearBasket = () => setBasket([])

    const setResultHandler = (data: FormValues) => setResult(calcFrame(data))

    const toggleViewBasket = () => {
        setViewBasket(!viewBasket)
    }

    return <DataContext.Provider value={{
        result, setResultHandler, baskets,
        setBasketHandler, viewBasket, clearBasket,
        toggleViewBasket
    }}>
        {children}
    </DataContext.Provider>
}
