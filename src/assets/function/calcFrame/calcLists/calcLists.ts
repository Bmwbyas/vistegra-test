import {List, ResultDataType} from "../../../../types/types";

export const calcLists = (frameArea: number, list:string):ResultDataType => {

    const listData: List = JSON.parse(list)
    const {width, material, price,unit,name} = listData

    const countList = Math.ceil(frameArea / width)

    const totalPriceList = price * countList

    return {count:countList, totalPrice:totalPriceList,name,unit,material}
}
