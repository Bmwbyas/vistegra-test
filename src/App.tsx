import React, {useContext} from 'react';
import './App.css';
import InputData from "./components/inputData/InputData";
import OutputData from "./components/outputData/OutputData";
import {Grid} from "@mui/material";
import {DataContext, DataProvider} from "./context/context";
import Basket from "./components/Basket/Basket";
import {DataContextType} from "./types/types";

function App() {
    const {viewBasket} = useContext(DataContext) as DataContextType
    return (
        <Grid sx={{maxWidth: '1280px', m: '0 auto'}} justifyContent="center">
            {viewBasket
                ? <Basket/>
                : <Grid container justifyContent="center">

                    <InputData/>
                    <OutputData/>

                </Grid>}
        </Grid>
    );
}

export default App;
