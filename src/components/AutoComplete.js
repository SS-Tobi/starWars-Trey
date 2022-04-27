import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";

export const AutoComplete = ({
  options,
  label,
  optionLabel,
  noOptionsText = "No results",
  isLoading = false,
  handleChange,
}) => {
  const navigate = useNavigate();

  return (
    <Autocomplete
      disablePortal
      options={isLoading ? [] : options}
      sx={{ width: 300 }}
      getOptionLabel={(option) => option[optionLabel]}
      noOptionsText={noOptionsText}
      onChange={(event, newValue) => {
        if (newValue) {
          navigate(`/starwars/${newValue.name}`);
        }
      }}
      onInputChange={(event, newInputValue) => {
        if (handleChange) {
          handleChange(newInputValue);
        }
      }}
      renderInput={(params) => {
        return (
          <TextField
            {...params}
            label={label}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {isLoading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        );
      }}
    />
  );
};
