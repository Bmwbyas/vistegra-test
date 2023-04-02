export const calcCellSize = (width: number, frame: number, widthPipe: number,length:number) => {

    const countCell = Math.ceil(width / frame)

    const widthCellSize = Math.floor((width - ((countCell + 1) * widthPipe * 0.001)) / countCell * 100) / 100

    const lengthCellSize = Math.floor((length - ((length + 1) * widthPipe * 0.001)) / length * 100) / 100

    return `${lengthCellSize} x ${widthCellSize}`
}
