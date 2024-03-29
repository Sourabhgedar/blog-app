import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

type optionValue = { value: string, name: string }
type DropDownPropsTypes = {
    options: optionValue[],
    selectedValue: string,
    handleChange: (event: SelectChangeEvent) => void,
    label: string
}

const Index = ({ options, selectedValue, handleChange, label }: DropDownPropsTypes) => {

    return (
        <Box sx={{ width: "100%" }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedValue}
                    label={label}
                    onChange={handleChange}
                >
                    {
                        options && options instanceof Array &&
                        options.map((items, index) => (
                            <MenuItem key={index} value={items.value}>{items.name}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </Box>
    );
}

export default Index