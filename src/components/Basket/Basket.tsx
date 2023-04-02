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
import {DataContext} from "../../context/context";
import {DataContextType} from "../../types/types";
import RowBasket from "./rowBasket/RowBasket";

const Basket = () => {
    const {baskets, toggleViewBasket} = useContext(DataContext) as DataContextType


    return (
        <Box p={4}>
            <Button sx={{position: 'fixed', top: 32, left: 30}} variant={"contained"}
                    onClick={toggleViewBasket}>Назад</Button>
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
                        {baskets.map((b, index) => {

                                return (
                                    <RowBasket key={index} basket={b} />

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
