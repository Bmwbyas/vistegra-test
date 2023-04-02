import React, {useContext} from 'react';
import {
    Box,
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import {createData} from "../outputData/OutputData";
import {DataContext} from "../../context/context";
import {DataContextType} from "../../types/types";

const Basket = () => {
    const {basket, toggleViewBasket} = useContext(DataContext) as DataContextType


    return (
        <Box p={4}>
            <Button sx={{position:'fixed', top:32, left:30}} variant={"contained"} onClick={toggleViewBasket}>Назад</Button>
            <Typography variant="h4" textAlign="center">Корзина покупок</Typography>
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
                    {basket.map((b, index) => {
                            const rows = b.resultData.map((r) => createData(r.name, r.unit, r.count, r.totalPrice))
                            return (

                                <>
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
                                    <TableRow sx={{'&:last-child td, &:last-child th': {border: 0},backgroundColor:'lavender'}}>
                                        <TableCell component="th" scope="row">
                                            <b>Итого</b>
                                        </TableCell>
                                        <TableCell align="right"></TableCell>
                                        <TableCell align="right"></TableCell>
                                        <TableCell align='right'>
                                            {b.totalPrice}
                                        </TableCell>
                                    </TableRow>
                                </>

                            )
                        }
                    )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default Basket;
