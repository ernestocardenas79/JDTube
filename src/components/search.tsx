import {IconButton, InputAdornment, OutlinedInput} from "@mui/material";
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
export default function Search(){
    return (
        <OutlinedInput className="search-bar" fullWidth  id="fullWidth" placeholder="Search" endAdornment={<InputAdornment position="end">
            <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                >
                <SearchSharpIcon fontSize="large" />
                </IconButton>
                </InputAdornment>}/>    )
}

  