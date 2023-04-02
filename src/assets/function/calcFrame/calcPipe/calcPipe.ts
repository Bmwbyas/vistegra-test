import {Pipe, ResultDataType} from "../../../../types/types";

export const calcPipe = (width: number, frame: number, pipe:string, length: number):ResultDataType => {

    const pipeData: Pipe = JSON.parse(pipe)
    const {width: widthPipe, price,unit,name} = pipeData

    const countPipe = Math.ceil(((Math.ceil(width / frame) + 1) * length + (length + 1) * width))

    const totalPricePipe = price * countPipe

    return {count:countPipe, totalPrice:totalPricePipe,width:widthPipe,unit,name}
}
