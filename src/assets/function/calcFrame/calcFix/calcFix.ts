import data from "../../../../context/data/data.json";
import config from "../../../../context/data/config.json";
import {ResultDataType} from "../../../../types/types";

export const calcFix = (material: string, frameArea: number):ResultDataType => {

    const fix = data.find(c => c.name === 'Саморез')

    const countFixSquare = config.find(c => c.type === 'fix' && c.key === material)!.value!

    const countFix = Math.ceil(frameArea * countFixSquare)

    const totalPriceFix = Math.floor(countFix * fix!.price*10)/10

    return {count:countFix, totalPrice:totalPriceFix, name:fix!.name, unit:fix!.unit}
}
