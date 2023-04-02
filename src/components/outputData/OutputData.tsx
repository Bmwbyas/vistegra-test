import React, {useContext} from 'react';
import {
    Button,
    Grid,
    Paper, Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import {DataContext} from "../../context/context";
import {DataContextType} from "../../types/types";

export function createData(
    name: string,
    unit: string,
    amount: number,
    price: number,
) {
    return {name, amount, price, unit};
}


const OutputData = () => {
    const {result, setBasketHandler, basket, clearBasket,toggleViewBasket} = useContext(DataContext) as DataContextType

    if (!result) {
        return <Grid item xs={6} p={3}> </Grid>
    }

    const rows = result.resultData.map((r) => createData(r.name, r.unit, r.count, r.totalPrice))

    return (
        <Grid item xs={6} p={3}>
            <Typography variant="h4" component="h4" m={2}>Результат</Typography>
            <Typography variant="body1" m={2}>Площадь изделия {result.frameArea}м2. Расчетный размер
                ячейки {result.cellSize} м </Typography>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Наименование</TableCell>
                            <TableCell align="right">ед.</TableCell>
                            <TableCell align="right">кол-во</TableCell>
                            <TableCell align="right">сумма</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.unit}</TableCell>
                                <TableCell align="right">{row.amount}</TableCell>
                                <TableCell align="right">{row.price}</TableCell>
                            </TableRow>
                        ))}
                        <TableRow sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                            <TableCell component="th" scope="row">
                                Итого
                            </TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align='right'>
                                {result.totalPrice}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Stack direction="row">
                <Button variant="contained" onClick={setBasketHandler} sx={{my: 3, mr: 3}}>Добавить в корзину</Button>
                <Button variant="outlined" onClick={clearBasket} sx={{my: 3, mr: 3}}>Очистить корзину</Button>
                <Button variant="contained" onClick={toggleViewBasket} sx={{my: 3}}>Показать содержимое корзины</Button>
            </Stack>

            <Typography variant={"body1"}>Корзина: {basket.length}</Typography>
        </Grid>
    );
};

export default OutputData;
