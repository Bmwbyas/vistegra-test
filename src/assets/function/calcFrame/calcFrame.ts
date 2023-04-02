import {FormValues} from "../../../types/types";
import {calcLists} from "./calcLists/calcLists";
import {calcPipe} from "./calcPipe/calcPipe";
import {calcFix} from "./calcFix/calcFix";
import {calcCellSize} from "./calcCellSize/calcCellSize";

export const calcFrame = (value: FormValues) => {
    const {frame, list, pipe, width, length} = value

    const frameArea = Math.ceil(width * length*100)/100
    const resultList = calcLists(frameArea, list)

    const resultPipe = calcPipe(width, frame, pipe, length)

    const resultFix = calcFix(resultList.material!, frameArea)

    const totalPrice = resultList.totalPrice + resultPipe.totalPrice + resultFix.totalPrice

    const cellSize = calcCellSize(width, frame, resultPipe.width!, length)

    return {resultData: [resultList, resultPipe, resultFix], frameArea, totalPrice, cellSize}
}

