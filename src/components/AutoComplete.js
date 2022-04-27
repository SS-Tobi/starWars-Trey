import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export const AutoComplete = ({ options, handleChange }) => {

    return (
        <Autocomplete
            disablePortal
            options={options}
            sx={{ width: 300 }}
            getOptionLabel={(option) => option.name}
            onInputChange={(event, newInputValue) => {
                handleChange(newInputValue)
            }}
            renderInput={(params) => {
                    return <TextField {...params} label="StarWars" />
                }
            }
        />
    )
}
