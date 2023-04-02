import React from 'react';
import {TableCell, TableRow} from "@mui/material";
import {ResultType} from "../../../types/types";
import {createData} from "../../outputData/OutputData";

type RowBasketType={
    basket:ResultType

}

const RowBasket:React.FC<RowBasketType> = ({basket}) => {
    const rows = basket.resultData.map((r) => createData(r.name, r.unit, r.count, r.totalPrice))
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
            <TableRow sx={{
                '&:last-child td, &:last-child th': {border: 0},
                backgroundColor: 'lavender'
            }}>
                <TableCell component="th" scope="row">
                    <b>Итого</b>
                </TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align='right'>
                    {basket.totalPrice}
                </TableCell>
            </TableRow>
        </>
    );
};

export default RowBasket;
