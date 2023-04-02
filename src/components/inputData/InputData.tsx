import React, {useContext} from 'react';
import data from '../../context/data/data.json'
import config from '../../context/data/config.json'
import {Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography} from "@mui/material";

import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {DataContextType, FormValues} from "../../types/types";
import {DataContext} from "../../context/context";


const schema = yup
    .object({
        list: yup.string().required('Пожалуйста, выберите материал'),
        pipe: yup.string().required('Пожалуйста, выберите трубу'),
        width: yup.number().typeError('Значение должно быть числом').min(5, 'Минимальная ширина 5 м').max(50, 'Максимальная ширина 50 м').required('Пожалуйста, выберите ширину каркаса'),
        length: yup.number().typeError('Значение должно быть числом').min(5, 'Минимальная длина 5 м').max(50, 'Максимальная длина 50 м').required('Пожалуйста, выберите длину каркаса'),
        frame: yup.number().required(),
    })
    .required();


const InputData = () => {
    const {setResultHandler} = useContext(DataContext) as DataContextType
    const {control, handleSubmit, formState: {errors}, reset} = useForm<FormValues>({
        resolver: yupResolver(schema),
        mode: "onBlur",
        defaultValues: {
            list: '',
            pipe: '',
            frame: 1
        },
    });

    const onSubmit = (data: FormValues) => {
        setResultHandler(data)
        reset()
    };


    const filtredList = data.filter(d => d.type === 'list')
    const filtredPipe = data.filter(d => d.type === 'pipe')
    const filtredFrame = config.filter(d => d.type === 'frame')

    return (
        <Grid item xs={6} p={3} justifyContent="center">
            <Typography variant="h4" component="h4" m={2}>Ввод данных</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={{
                    minWidth: 120,
                    pb: 4
                }}>
                    <Controller
                        name="list"
                        control={control}
                        defaultValue={undefined}
                        render={({field}) => <FormControl sx={{m: 1, minWidth: 200}}>
                            <InputLabel id="demo-simple-select-helper-label">Профлист</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                label="Профлист"
                                placeholder={'Профлист'}
                                {...field}>
                                {filtredList.map((d, index) => <MenuItem key={index}
                                                                         value={JSON.stringify(d)}>{d.name} Материал:{d.material}</MenuItem>)}
                            </Select>
                        </FormControl>}
                    />
                    {errors.list &&
                        <Typography variant={"body1"} sx={{color: 'red'}}>{errors.list.message}</Typography>}
                </Box>
                <Box sx={{minWidth: 120, pb: 4}}>
                    <Controller
                        name="pipe"
                        control={control}
                        render={({field}) => <FormControl sx={{m: 1, minWidth: 200}}>
                            <InputLabel id="demo-simple-select-helper-label">Труба</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                label="Труба"
                                placeholder={'Труба'}
                                {...field}>
                                {filtredPipe.map((d, index) => <MenuItem key={index}
                                                                         value={JSON.stringify(d)}>{d.name}</MenuItem>)}
                            </Select>
                        </FormControl>}
                    />
                    {errors.pipe &&
                        <Typography variant={"body1"} sx={{color: 'red', mb: 2}}>{errors.pipe.message}</Typography>}
                </Box>
                <Box sx={{minWidth: 120, pb: 4}}>
                    <Controller
                        name="frame"
                        control={control}
                        render={({field}) => <FormControl sx={{m: 1, minWidth: 200}}>
                            <InputLabel id="demo-simple-select-helper-label">Прочность</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                label="Прочность"
                                placeholder={'Прочность'}
                                {...field}>
                                {filtredFrame.map((d, index) => <MenuItem key={index}
                                                                          value={d.step}>{d.name}</MenuItem>)}
                            </Select>
                        </FormControl>}
                    />
                    {errors.frame &&
                        <Typography variant={"body1"} sx={{color: 'red', mb: 2}}>{errors.frame.message}</Typography>}
                </Box>
                <Box>
                    <Typography variant="h6"> Длина каркаса</Typography>
                    <Controller
                        name="length"
                        control={control}
                        defaultValue={5}
                        render={({field}) => (
                            <TextField
                                variant="outlined"
                                type="number"
                                fullWidth
                                placeholder="Длина каркаса"
                                {...field}
                                sx={{
                                    backgroundColor: 'grayscale.0',
                                    mb: 3,
                                }}
                            />
                        )}
                    />
                    {errors.length &&
                        <Typography variant={"body1"} sx={{color: 'red', mb: 2}}>{errors.length.message}</Typography>}
                    <Typography variant="h6"> Ширина каркаса</Typography>
                    <Controller
                        name="width"
                        control={control}
                        defaultValue={5}
                        render={({field}) => (
                            <TextField
                                {...field}
                                variant="outlined"
                                type="number"
                                fullWidth
                                placeholder="ширина каркаса"
                                sx={{
                                    backgroundColor: 'grayscale.0',
                                    mb: 3,
                                }}
                            />
                        )}
                    />
                    {errors.width &&
                        <Typography variant={"body1"} sx={{color: 'red', mb: 2}}>{errors.width.message}</Typography>}
                </Box>
                <Box>
                    <Button variant={"contained"} disabled={false} onClick={handleSubmit(onSubmit)}> Отправить </Button>
                </Box>
            </form>
        </Grid>
    );
};

export default InputData;
